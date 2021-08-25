import React from "react";
import Bar from "./common/Bar";
import contact from "../assets/images/contact.png";
import envelop from "../assets/images/envelope.png";
import phone from "../assets/images/smartphone.png";
import arrowUp from "../assets/images/arrow-up.png";

const Contacts = () => {
  return (
    <div className=" pt-24 pb-20 relative">
      <div className="absolute move-up bottom-7 right-10 ">
        <img src={arrowUp} alt="arrowUp" />
      </div>
      <div className="absolute md:left-60 bottom-0 hidden md:block">
        <img src={contact} className="w-xl" alt="contact" />
      </div>
      <h4 className="my-3 font-bold text-3xl text-center">Contact</h4>
      <Bar />
      <div className="container justify-content-center md:my-5 py-5">
        <form>
          <div class="form-row row">
            <div class="form-group col-md-4 mb-3">
              <input type="text" class="form-control" placeholder="Nam" />
            </div>
            <div class="form-group col-md-4 mb-3">
              <input type="email" class="form-control" placeholder="E-mail" />
            </div>
            <div class="form-group col-md-4 ">
              <input type="text" class="form-control" placeholder="Sujet" />
            </div>
          </div>
          <div className="form-row row mt-3">
            <div class="form-group">
              <textarea
                className="form-control"
                rows={5}
                placeholder="Message"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              class="bg-cyan br-cyan mt-4 text-center px-5 py-1 rounded-full text-white"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex md:me-5 align-items-center md:justify-end h-full">
              <img className="align-self-center" src={envelop} alt="envelop" />
              <h6 className="light-text ms-3 mb-0">stephane@kiora.tech</h6>
            </div>
          </div>
          <div className="col-md-6 md:mt-0 mt-3">
            <div className="d-flex md:pl-24 align-items-center md:justify-start">
              <img className="align-self-center" src={phone} alt="phone" />
              <h6 className="light-text ms-3 mb-0">07 80 96 17 49</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
