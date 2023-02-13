import {Navbar} from "@/components/organisms";
import  Head  from "next/head";
import React from "react";
import { LayoutProps } from "../types";

export const Layout = (props: LayoutProps) => {
    const { children, titlePages, descriptionPages, } = props;

    return (
        <>
          <Head>
            <meta
              name="description"
              content={descriptionPages ? descriptionPages : ""}
            />
            <title>
              {titlePages
                ? "" + titlePages
                : "Pagina"}
            </title>
          </Head>

          <Navbar/>
          <main>
            {children}
          </main>

      </>
    )
}