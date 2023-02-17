import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container = (props: ContainerProps) => {
  const { children } = props;

  return (
    <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-center px-4 sm:px-6  lg:px-8">
      {children}
    </div>
  );
};
