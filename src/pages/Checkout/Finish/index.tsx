import { MapPin, Money, Timer } from "phosphor-react";
import { useCheckout } from "../../../contexts/CheckoutContext";
import { ContentBorder, ContentInfo, FinishContainer, Icon, Info } from "./styles";

export function Finish() {
  const { formData } = useCheckout();

  return (
    <FinishContainer>
      <ContentInfo>
        <header>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>
        <ContentBorder>
          <div>
            <Info>
              <Icon style={{ backgroundColor: "#8047f8" }}>
                <MapPin size={16} weight="fill" />
              </Icon>

              <div>
                <p>
                  Entrega em <span>{formData.rua + ", " + formData.numero}</span>
                </p>
                <p>{formData.bairro + " - " + formData.cidade + ", " + formData.uf}</p>
              </div>
            </Info>
            <Info>
              <Icon style={{ backgroundColor: "#DBAC2C" }}>
                <Timer size={16} weight="fill" />
              </Icon>

              <div>
                <p>Previsão de entrega</p>
                <span>20min - 30min</span>
              </div>
            </Info>
            <Info>
              <Icon style={{ backgroundColor: "#C47F17" }}>
                <Money size={16} weight="fill" />
              </Icon>

              <div>
                <p>Pagamento na entrega</p>
                <span>{formData.paymentMethod?.label}</span>
              </div>
            </Info>
          </div>
        </ContentBorder>
      </ContentInfo>
      <div>
        <img src="/finish.svg" />
      </div>
    </FinishContainer>
  );
}
