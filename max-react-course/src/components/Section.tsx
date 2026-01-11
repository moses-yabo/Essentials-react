import type { ReactNode } from "react";

type Section = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ title, children, ...props }: Section) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
