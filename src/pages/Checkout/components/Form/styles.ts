import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  margin-top: 2rem;

  .complemento {
    position: relative;
  }

  .complemento::after {
    position: absolute;
    right: 12px;
    top: 12px;

    content: "Opcional";

    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;

    color: #8d8686;
  }

  & div {
    display: flex;
    gap: 1rem;
  }

  & input {
    position: relative;

    padding: 12px;

    width: 200px;
    height: 42px;

    background: #eeeded;

    border: 1px solid #e6e5e5;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    & input {
      width: 100%;
    }

    & div {
      width: 100%;
      flex-direction: column;
    }
  }
`;
