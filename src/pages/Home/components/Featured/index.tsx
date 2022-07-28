import { ReactNode } from "react";
import { FeaturedContainer, FeaturedCircle } from "./styles";

interface FeaturedProps {
  icon: ReactNode;
  title: string;
  version: "one" | "two" | "three" | "four";
}

export function Featured({ icon, title, version = "one" }: FeaturedProps) {
  return (
    <FeaturedContainer>
      <FeaturedCircle version={version}>{icon}</FeaturedCircle>
      <h1>{title}</h1>
    </FeaturedContainer>
  );
}
