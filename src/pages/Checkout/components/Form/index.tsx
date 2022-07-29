import axios from "axios";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";
import { FormContainer } from "./styles";



export function Form() {
  const { register, setValue, setError, watch } = useFormContext()

  async function getCEP() {
    const cepValue = watch("cep");

    if (!cepValue || cepValue.length < 9) {
      return;
    }

    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cepValue}/json/`);

      if (data.erro) {
        return setError("cep", {
          message: "CEP inválido!",
        });
      }

      setValue("rua", data.logradouro);
      setValue("bairro", data.bairro);
      setValue("cidade", data.localidade);
      setValue("uf", data.uf);
    } catch (error) {}
  }

  return (
    <FormContainer>
      <InputMask
        type="text"
        placeholder="CEP"
        mask={"99999-999"}
        maskPlaceholder={null}
        {...register("cep", { onBlur: getCEP })}
      />
      <input
        type="text"
        placeholder="Rua"
        style={{ width: "100%" }}
        {...register("rua")}
      />
      <div>
        <InputMask
          type="text"
          placeholder="Número"
          mask={"9999"}
          maskPlaceholder={null}
          {...register("numero")}
        />
        <div className="complemento" style={{ width: "100%" }}>
          <input
            type="text"
            placeholder="Complemento"
            style={{ width: "100%" }}
            {...register("complemento")}
          />
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Bairro"
          style={{ minWidth: "276px", width: "100%" }}
          {...register("bairro")}
        />
        <input type="text" placeholder="Cidade" {...register("cidade")} />
        <InputMask
          type="text"
          placeholder="UF"
          style={{ minWidth: "60px", width: "100%" }}
          mask={"aa"}
          maskPlaceholder={null}
          {...register("uf")}
        />
      </div>
    </FormContainer>
  );
}
