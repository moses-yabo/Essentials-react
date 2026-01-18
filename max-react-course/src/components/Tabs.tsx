import type React from "react";

type Tabs = {
  children: React.ReactElement;
  buttons: React.ReactElement;
  ButtonContainer: React.ElementType | undefined;
};

export default function Tabs({
  children,
  buttons,
  ButtonContainer = "menu",
}: Tabs) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>

      {children}
    </>
  );
}
