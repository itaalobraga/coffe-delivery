import styled, { css } from "styled-components";

export const FeaturedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > h1 {
    font-weight: 400;
    font-size: ${(props) => props.theme.font.size[16]};
    line-height: 130%;

    color: ${(props) => props.theme.base["base-text"]};
  }
`;

type FeaturedCircleProps = {
  version: "one" | "two" | "three" | "four";
};

const featuredVersions = {
  one: css`
    ${(props) => props.theme.product["yellow-dark"]}
  `,
  two: css`
    ${(props) => props.theme.base["base-text"]}
  `,
  three: css`
    ${(props) => props.theme.product.yellow}
  `,
  four: css`
    ${(props) => props.theme.product.purple}
  `,
} as const;

export const FeaturedCircle = styled.div<FeaturedCircleProps>`
  padding: 8px;

  width: 32px;
  height: 32px;

  border-radius: 1000px;

  background-color: ${(props) => featuredVersions[props.version]};
`;
