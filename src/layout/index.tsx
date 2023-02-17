import { Widgtes } from "@/components/organisms/Widgets";
import { Footer } from "@/organisms/Footer";
import { Navbar } from "@/organisms/Navbar";
import Head from "next/head";
import { LayoutProps } from "../types";

export const Layout = (props: LayoutProps) => {
  const { children, titlePages, descriptionPages } = props;

  return (
    <>
      <Head>
        <meta
          name="description"
          content={descriptionPages ? descriptionPages : ""}
        />
        <title>{titlePages ? "" + titlePages : "Pagina"}</title>
      </Head>

      <Navbar />
      <main>{children}</main>
      <Widgtes />
      <Footer />
    </>
  );
};
