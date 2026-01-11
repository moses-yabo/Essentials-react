import type React from "react";

type Tabs = {
  children: React.ReactElement;
  buttons: React.ReactElement;
  ButtonContainer: React.ElementType;
};

export default function Tabs({ children, buttons, ButtonContainer }: Tabs) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>

      {children}
    </>
  );
}
