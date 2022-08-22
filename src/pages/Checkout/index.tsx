import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import {
  CheckoutContainer,
  CheckoutForm,
  CoffeesSelected,
  Delivery,
  Method,
  Methods,
  PaymentMethods,
  Title,
  TotalItems,
  TotalPrice,
} from "./styles";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CheckoutCard } from "./components/CheckoutCard";
import { useCheckout } from "../../contexts/CheckoutContext";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";

export type FormSchemaData = zod.infer<typeof FormValidationSchema>;

export type PaymentMethods = {
  label: string;
  value: string;
};

const regex = new RegExp(/[a-z]/i);

const FormValidationSchema = zod.object({
  cep: zod.string().min(9, "Digite um CEP"),
  rua: zod.string().min(9, "Digite o nome da rua").regex(regex, "Digite um nome válido"),
  numero: zod.string().min(1, "Digite um número"),
  complemento: zod.string().optional(),
  bairro: zod.string().min(9, "Digite o nome do bairro"),
  cidade: zod.string().min(4, "Digite o nome da cidade"),
  uf: zod.string().min(1, "Digite a UF"),
});

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<null | PaymentMethods>(null);

  const [loading, setLoading] = useState(false);

  const checkoutForm = useForm<FormSchemaData>({
    resolver: zodResolver(FormValidationSchema),
    reValidateMode: "onBlur",
    mode: "all",
    defaultValues: {
      cep: "",
    },
  });

  const { handleSubmit } = checkoutForm;

  const navigate = useNavigate();

  async function handleSubmitForm(data: FormSchemaData) {
    if (!paymentMethod) {
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    handleFormData({ ...data, paymentMethod });

    setLoading(false);

    navigate("/checkout/finish");
  }

  const { cart, totalItems, handleFormData } = useCheckout();

  function convertPrices(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  const deliveryPrice = 3.5;

  useEffect(() => {
    if (!cart.length) {
      navigate("/");
      localStorage.removeItem("@COFFEE");
    }
  }, [cart.length]);

  if (loading) return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh"}}>
      <Loading />
    </div>
  );

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <Title>Complete seu pedido</Title>
        <CheckoutForm>
          <header>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <FormProvider {...checkoutForm}>
            <Form />
          </FormProvider>
        </CheckoutForm>
        <PaymentMethods>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </header>
          <Methods>
            <Method
              type="button"
              isSelected={paymentMethod?.value === "credit"}
              onClick={() =>
                setPaymentMethod({ label: "Cartão de crédito", value: "credit" })
              }
            >
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </Method>
            <Method
              type="button"
              isSelected={paymentMethod?.value === "debit"}
              onClick={() =>
                setPaymentMethod({ label: "Cartão de débito", value: "debit" })
              }
            >
              <Money size={16} />
              <span>Cartão de débito</span>
            </Method>
            <Method
              type="button"
              isSelected={paymentMethod?.value === "money"}
              onClick={() => setPaymentMethod({ label: "Dinheiro", value: "money" })}
            >
              <Bank size={16} />
              <span>Dinheiro</span>
            </Method>
          </Methods>
        </PaymentMethods>
      </div>
      <div>
        <Title>Cafés selecionados</Title>
        <CoffeesSelected>
          <div>
            {cart.map((item) => (
              <CheckoutCard key={item.id} item={item} />
            ))}
            <div>
              <TotalItems>
                Total de itens
                <span>{convertPrices(totalItems)}</span>
              </TotalItems>
              <Delivery>
                Entrega
                <span>{convertPrices(deliveryPrice)}</span>
              </Delivery>
              <TotalPrice>
                Total
                <span>{convertPrices(totalItems + deliveryPrice)}</span>
              </TotalPrice>
            </div>
            <button type="submit">CONFIRMAR PEDIDO</button>
          </div>
        </CoffeesSelected>
      </div>
    </CheckoutContainer>
  );
}
