import React from "react";
// import { navigate } from "gatsby-link";
import Layout from "../layout";
import { ContactForm } from "../components/contact/contact.component";
// function encode(data) {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

export default function Contact() {
  // const [state, setState] = React.useState({});

  // const handleChange = e => {
  //   setState({ ...state, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.target;
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": form.getAttribute("name"),
  //       ...state
  //     })
  //   })
  //     .then(() => navigate(form.getAttribute("action")))
  //     .catch(error => alert(error));
  // };

  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
}
