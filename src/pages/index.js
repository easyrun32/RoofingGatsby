import React from "react";
import Layout from "../layout";
import { ContactForm } from "../components/contact/contact.component";
import { PhotoSlider } from "../components/slider/slider.component";
import { KenBurns } from "../components/ken-burns-animation/ken-burns.component";
import { Questions } from "../components/homepage-common-question/questions.component";
import { HomepageSection } from "../components/homepage-section/homepage-section.component";
import { Team } from "../components/team/team.component";
import { Cards } from "../components/cards/cards.component";
import { Footer } from "../components/footer/footer.component";
export default function Index() {
  return (
    <Layout>
      <KenBurns />
      <ContactForm title="SUBMIT YOUR INFORMATION TO REQUEST A FREE BID!" />
      <PhotoSlider />
      <HomepageSection />
      <Questions />
      <Cards />
      <Team />
      <Footer />
    </Layout>
  );
}
