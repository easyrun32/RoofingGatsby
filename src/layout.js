import React from "react";
import { Helmet } from "react-helmet";
import "./css/globalstyles.css";
import { HeaderMain } from "./components/header-main/header-main.component";
import { Header } from "./components/header/header.component";
import { HeaderSub } from "./components/header-sub/header-sub.component";
import { Navigation } from "./components/hamburger/navigation.component";
export default function Template({ children }) {
  return (
    <div>
      <Helmet
        title="Frank Stevens Roofing Inc"
        meta={[
          {
            name: `description`,
            content: `Frank Stevens & Sons Roofing, Inc. Over 50 Years of Quality Roofing- Serving the Hudson Valley...Commercial & Residential Family-Owned Roofing Company- Certified Flat Roof Specialists and a GAF MasterElite Shingle Installer...Roof Replacements, Repairs, Maintenance `,
          },
          { name: `keywords`, content: `sample, something` },
        ]}
      />
      {/* 
        <html lang="en"></html>
        */}
      <Navigation />
      <HeaderMain />
      <Header />
      <HeaderSub />
      <div>{children}</div>
    </div>
  );
}
