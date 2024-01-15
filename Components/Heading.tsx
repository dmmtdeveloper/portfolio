import React from "react";
type SectionHeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children }: SectionHeadingProps) => {
  return <h2 className="text-3xl font-medium mb-8">{children}</h2>;
};
