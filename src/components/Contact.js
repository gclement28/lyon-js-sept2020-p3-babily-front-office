import React from "react";
import "../style/Contact.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cafe from "../img/café.png";
import IconeEnvoi from "../img/icone.png";
import Facetime from "../img/facetime.png";
import MainsSerrees from "../img/main.png";
import Mailto from "./MailTo";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const { register, handleSubmit, reset: restFrom } = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        `https://contact-babily.herokuapp.com/Contact?apiKey=${window.apiKey}`,
        data
      )
      .then(() => {
        alert(`Your message has been successfully sent ${inputs.name}`);
        restFrom();
      })
      .catch(console.error);
  };

  const handleInputChange = (e) => {
    setInputs((newInputs) => ({
      ...newInputs,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="containerForm">
        <h1 className="titre">Contactez-nous</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="bloc1">
            <input
              className="contact-input"
              onChange={(e) => handleInputChange(e)}
              type="text"
              facebook
              id="input-name"
              placeholder="Nom"
              ref={register}
              value={inputs.name}
              name="name"
            />

            <input
              className="contact-input"
              placeholder="Email"
              onChange={(e) => handleInputChange(e)}
              value={inputs.email}
              name="email"
              type="email"
              maxLength="50"
              required
              ref={register}
            />
            <input
              className="contact-input"
              onChange={(e) => handleInputChange(e)}
              type="text"
              id="input-subject"
              placeholder="Sujet"
              name="subject"
              ref={register}
              value={inputs.sujet}
            />
          </div>
          <div className="Bloc2">
            <select className="contact-input" ref={register}>
              <option value="Parents">Parents</option>
              <option value="Professionnel">
                Professionnel de la petite enfance
              </option>
              <option selected value="Employeur">
                Employeur
              </option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div className="bloc3">
            <textarea
              className="contact-input"
              onChange={(e) => handleInputChange(e)}
              name="message"
              type="text"
              id="input-message"
              placeholder="Message"
              ref={register}
              value={inputs.message}
            ></textarea>
          </div>
          <div className="section-rendezvous">
            <Mailto
              email="email@email.com"
              subject="Envoyer un mail"
              body="Bonjour Babily! Après consultation de vos offres, je souhaite vous envoyer un mail"
            >
              <img
                src={IconeEnvoi}
                alt="Envoyer un mail"
                className="email-share-button"
              />
            </Mailto>
            <Mailto
              email="email@email.com"
              subject="Envoyer un mail"
              body="Bonjour Babily! Après consultation de vos offres, je souhaite vous prendre un café avec un de vos consultants"
            >
              <img
                src={Cafe}
                alt="Prendre un Café"
                className="email-share-button"
              />
            </Mailto>
            <Mailto
              email="email@email.com"
              subject="Envoyer un mail"
              body="Bonjour Babily! Après consultation de vos offres, je souhaite m'entretenir avec vous en Visio"
            >
              <img
                src={Facetime}
                alt="Rendez-vous en Facetime"
                className="email-share-button facetime"
              />
            </Mailto>
            <Mailto
              email="email@email.com"
              subject="Envoyer un mail"
              body="Bonjour Babily! Après consultation de vos offres, je souhaite m'entretenir avec vous en présentiel"
            >
              <img
                src={MainsSerrees}
                alt="Rendez-vous en présentiel"
                className="email-share-button mainsserrees"
              />
            </Mailto>
          </div>
          <input
            className="contact-input"
            type="submit"
            value="Envoyer"
            id="input-submit"
          />
        </form>
      </div>
      <div className="contactAnim">
        <div className="press">
          <div className="sheet"></div>
          <div className="roll"></div>
          <div className="sheet"></div>
          <div className="roll"></div>
          <div className="sheet"></div>
          <div className="roll"></div>

          <div className="sheet"></div>
          <div className="sheet"></div>
          <div className="sheet"></div>

          <div className="sheet"></div>
          <div className="sheet"></div>
          <div className="roll"></div>
        </div>

        <form></form>
      </div>
    </div>
  );
};

export default Contact;
