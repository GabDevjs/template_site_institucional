import { HomePageTemplate } from "@/template/HomePageTemplate";
import { Layout } from "@/layout";

function Home(){
  return (
    <Layout titlePages="Pagina inicial">
      <HomePageTemplate />
    </Layout>
  );
};

export default Home;
