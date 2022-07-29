import styled from "styled-components";

export const CoffeesSelectedInfo = styled.div`
  display: flex;
  align-items: flex-start;
  
  padding-bottom: 24px;
  margin-bottom: 24px;

  border-bottom: 1px solid ${(props) => props.theme.base["base-button"]};

  & > div {
    margin-right: 20px;

    & > h1 {
      font-style: normal;
      font-weight: 400;
      font-size: ${(props) => props.theme.font.size[16]};
      line-height: 130%;

      color: ${(props) => props.theme.base["base-subtitle"]};

      margin-bottom: 8px;
    }
  }

  & > span {
    margin-left: auto;

    font-style: normal;
    font-weight: 700;
    font-size: ${(props) => props.theme.font.size[20]};
    line-height: 130%;

    color: ${(props) => props.theme.base["base-subtitle"]};
  }
`;

export const Image = styled.div`
  width: 64px;
  height: 64px;

  & > img {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InputArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 32px;

  background: ${(props) => props.theme.base["base-button"]};
  border-radius: 6px;

  & > input {
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    width: 24px;

    color: ${(props) => props.theme.base["base-title"]};

    font-weight: 500;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }

  & > button > svg {
    color: ${(props) => props.theme.product["purple"]};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 8px;
  gap: 4px;

  width: 91px;
  height: 32px;

  background: ${(props) => props.theme.base["base-button"]};
  border-radius: 6px;

  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.font.size[12]};
  line-height: 160%;

  text-transform: uppercase;

  color: ${(props) => props.theme.base["base-text"]};

  & > svg {
    color: ${(props) => props.theme.product["purple"]};
  }
`;
