import React from "react";

import Layout from "../layout";
import { Background } from "../component-steeproof/background/background.component";
import { Loader } from "../component-steeproof/loader/loader.component";
export default function SteepRoof() {
  return (
    <Layout>
      <Background />
      <Loader />
    </Layout>
  );
}
