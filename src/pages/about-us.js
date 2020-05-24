import React from "react";

import Layout from "../layout";
import { Background } from "../components-aboutus/background/background.component";
import { Paragraph1 } from "../components-aboutus/paragraph1/paragraph1.component";
import { Paragraph2 } from "../components-aboutus/paragraph2/paragraph2.component";
import { Paragraph3 } from "../components-aboutus/paragraph3/paragraph3.component";
import { Paragraph4 } from "../components-aboutus/paragraph4/paragraph4.component";
import { ParagraphFooter } from "../components-aboutus/paragraph-footer/paragraph-footer.component";
export default function AboutUS() {
  return (
    <Layout>
      <Background />

      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
      <ParagraphFooter />
    </Layout>
  );
}
