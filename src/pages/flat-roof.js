import React from "react";

import Layout from "../layout";
import { Background } from "../component-flatroof/background-flatroof/background.component";
import { Credits } from "../component-flatroof/credits/credits.component";
import { PVC } from "../component-flatroof/pvc/pvc.component";
export default function FlatRoof() {
  return (
    <Layout>
      <Background />
      <Credits />
      <PVC />
    </Layout>
  );
}
