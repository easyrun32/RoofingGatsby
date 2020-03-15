import React from "react";
import { Helmet } from "react-helmet";
import "./css/globalstyles.css";
import { HeaderMain } from "./components/header-main/header-main.component";
import { Header } from "./components/header/header.component";
import { HeaderSub } from "./components/header-sub/header-sub.component";
export default function Template({ children }) {
  return (
    <div>
      <Helmet
        title="Frank Stevens Roofing Inc"
        meta={[
          { name: `description`, content: `Sample` },
          { name: `keywords`, content: `sample, something` }
        ]}
      />
      <HeaderMain />
      <Header />
      <HeaderSub />
      <div>{children}</div>
    </div>
  );
}
