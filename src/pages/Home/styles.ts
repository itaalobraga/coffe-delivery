import styled from "styled-components";

import { darken } from "polished";

export const HomeContainer = styled.div`
  max-width: 70rem;
  width: 100%;

  margin: 0 auto;
`;

export const Apresentation = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ApresentationText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex: 1;

  & > h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: ${(props) => props.theme.font.size[48]};
    line-height: 130%;

    color: ${(props) => props.theme.base["base-title"]};

    margin-bottom: 1rem;
  }

  & > p {
    font-weight: 400;
    font-size: ${(props) => props.theme.font.size[20]};
    line-height: 130%;

    color: ${(props) => props.theme.base["base-subtitle"]};

    margin-bottom: 4.938rem;
  }
`;

export const ApresentationBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 0.8;

  & > img {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const FeaturedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(266px, 1fr));
  row-gap: 1.25rem;

  width: 100%;
`;

export const OursCoffees = styled.section`
  margin-top: 140px;

  & > h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: ${(props) => props.theme.font.size[32]};
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme.base["base-subtitle"]};
  }
`;

export const OursCoffeesWrapper = styled.div`
  margin-top: 2.125rem;

  max-width: 70rem;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem;
`;