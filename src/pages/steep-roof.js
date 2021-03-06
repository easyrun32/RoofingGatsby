import React from "react";

import Layout from "../layout";
import { Background } from "../component-steeproof/background/background.component";
import { Loader } from "../component-steeproof/loader/loader.component";
import { Asphlat } from "../component-steeproof/asphlat-shingles/asphlat.component";
import { Slate } from "../component-steeproof/slate/slate.component";
import { Metal } from "../component-steeproof/metal/metal.component";
import { Few } from "../component-steeproof/few/few.component";
import { Financing } from "../component-steeproof/financing/financing.component";
import { ContactForm } from "../components/contact/contact.component";
export default function SteepRoof() {
  return (
    <Layout>
      <Background />
      <Loader />
      <Asphlat />
      <Slate />
      <Metal />
      <Few />
      <Financing />
      <ContactForm title="Have A Question About Steep Roofs Contact Us!" />
    </Layout>
  );
}
