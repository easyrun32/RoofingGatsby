import React from "react";

import Layout from "../layout";
import { Background } from "../component-flatroof/background-flatroof/background.component";
import { Credits } from "../component-flatroof/credits/credits.component";
import { PVC } from "../component-flatroof/pvc/pvc.component";
import { HotTar } from "../component-flatroof/hot-tar/hot-tar.component";
import { Restore } from "../component-flatroof/restore/restore.component";
import { ContactForm } from "../components/contact/contact.component";
export default function FlatRoof() {
  return (
    <Layout>
      <Background />
      <Credits />
      <PVC />
      <HotTar />
      <Restore />
      <ContactForm title="Have A Question About Flat Roof Contact Us!" />
    </Layout>
  );
}
