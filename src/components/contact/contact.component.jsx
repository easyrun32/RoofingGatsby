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
        <br />
        <div className="formtitle">
          SUBMIT YOUR INFORMATION TO REQUEST A FREE BID!
        </div>
        <form
          name="contact_frank"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="form"
        >
          <div className="formsection1">
            <input type="hidden" name="form-name" value="contact_frank" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <div className="form__group">
              <label>
                <input
                  id="name"
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            {/* type="email" name="email" onChange={handleChange} */}
            <div className="form__group">
              <label>
                <input
                  id="email"
                  type="email"
                  className="form__input"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form__group">
              <label>
                <input
                  type="phone"
                  className="form__input"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form__group">
              <label>
                <input
                  type="text"
                  id="address"
                  className="form__input"
                  placeholder="Address"
                  name="address"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form__group">
              <label>
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
              </label>
            </div>
          </div>
          <div className="formsection2">
            <div className="formbutton">
              <button
                className="submit submit--green"
                type="submit"
                value="send"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
