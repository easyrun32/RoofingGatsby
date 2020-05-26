import React from "react";

import Layout from "../layout";
import { Background } from "../component-flatroof/background-flatroof/background.component";
import { Credits } from "../component-flatroof/credits/credits.component";
export default function FlatRoof() {
  return (
    <Layout>
      <Background />
      <Credits />
    </Layout>
  );
}
