import React from "react";

import { navigate } from "gatsby-link";
//import { ContactContainer } from "./contact.styles";
import "./contact.styles.scss";
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
export const ContactForm = () => {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <div className="contactcontainer">
      <div className="formcontainer">
        <form
          name="contact_frank"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="form"
        >
          <input type="hidden" name="form-name" value="contact_frank" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder="Full name"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          {/* type="email" name="email" onChange={handleChange} */}
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__group">
            <input
              type="phone"
              className="form__input"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder="Address"
              name="address"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <select
              name="service"
              className="form__input"
              onBlur={handleChange}
            >
              <option value="Service needed">Service needed</option>
              <option value="Roof Replacement">Roof Replacement</option>
              <option value="Roof Repair">Roof Repair</option>
              <option value="Roof Inspection">Roof Inspection</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
