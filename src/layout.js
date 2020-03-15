import React from "react";
import { Helmet } from "react-helmet";
import "./css/globalstyles.css";
import { HeaderMain } from "./components/header-main/header-main.component";

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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      >
        {children}
      </div>
    </div>
  );
}
