import React from "react";
import Layout from "../layout";
import { ContactForm } from "../components/contact/contact.component";
import { PhotoSlider } from "../components/slider/slider.component";
import { KenBurns } from "../components/ken-burns-animation/ken-burns.component";
export default function Index() {
  return (
    <Layout>
      <KenBurns />
      <ContactForm />
      <PhotoSlider />
    </Layout>
  );
}
