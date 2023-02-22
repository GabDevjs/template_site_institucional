import { Section } from "../molecules/Section";
import { HomePageHeroSection } from "../organisms/heros/HomePageHeroSection";

export const HomePageTemplate = () => {
  return (
    <>
      <HomePageHeroSection />
      <Section
        titleHeader="Primeira seção"
        descriptionHeader="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae sed dolorem magnam, sunt debitis mollitia molestias, assumenda cupiditate voluptatem delectus aut id?"
        
      >
        <div>aaaaaa</div>
      </Section>
    </>
  );
};
