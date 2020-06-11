import React from "react";

import Layout from "../layout";
import { Background } from "../component-steeproof/background/background.component";
import { Loader } from "../component-steeproof/loader/loader.component";
import { Asphlat } from "../component-steeproof/asphlat-shingles/asphlat.component";
export default function SteepRoof() {
  return (
    <Layout>
      <Background />
      <Loader />
      <Asphlat />
    </Layout>
  );
}
