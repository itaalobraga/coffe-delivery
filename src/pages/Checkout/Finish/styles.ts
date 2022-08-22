import styled from "styled-components";

export const FinishContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
  align-items: flex-end;
  flex-wrap: wrap;

  max-width: 70rem;
  width: 100%;

  margin: 0 auto;

  & > div {
    & > img {
      margin-bottom: -1.1rem;
      width: 100%;
    }
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  align-self: flex-start;

  & > header {
    & > h1 {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: ${(props) => props.theme.font.size[32]};
      line-height: 130%;

      color: ${(props) => props.theme.product["yellow-dark"]};
    }

    & > p {
      font-weight: 400;
      font-size: ${(props) => props.theme.font.size[20]};
      line-height: 130%;

      color: ${(props) => props.theme.base["base-subtitle"]};
      font-stretch: 100;
    }
  }
`;

export const ContentBorder = styled.div`
  background-image: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  border-radius: 6px 36px;

  border: 1px solid transparent;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2.5rem;

    height: 100%;

    background-color: white;

    border-radius: 6px 36px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div {
    & > p {
      color: ${(props) => props.theme.base["base-text"]};

      font-size: ${(props) => props.theme.font.size[16]};
      font-weight: 400;
      line-height: 130%;
    }
    & span {
      color: ${(props) => props.theme.base["base-text"]};

      font-size: ${(props) => props.theme.font.size[16]};
      font-weight: 700;

      line-height: 130%;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  gap: 0.5rem;

  /* width: 2rem; */
  /* height: 2rem; */

  border-radius: 1000px;

  & > svg {
    color: ${props => props.theme.base.white};
  }
`;
