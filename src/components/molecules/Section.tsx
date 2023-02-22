import { ReactNode } from "react";
import { HeaderSection } from "../atoms/HeaderSection";
import { Container } from "../quarks/Container";

type SectionProps = {
  titleHeader?: string;
  descriptionHeader?: string;
  children: ReactNode;
};

export const Section = (props: SectionProps) => {
  const { titleHeader, descriptionHeader, children } = props;

  return (
    <section className="h-full py-20 sm:py-28 lg:pb-32">
      <Container>
        <div className="flex items-center flex-col gap-4">
          {titleHeader != undefined || descriptionHeader != undefined ? (
            <HeaderSection
              title={titleHeader}
              description={descriptionHeader}
            />
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
};
