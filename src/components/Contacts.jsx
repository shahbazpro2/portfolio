import React from "react";
import Bar from "./common/Bar";

const Contacts = () => {
  return (
    <div className=" py-24 relative">
      <h4 className="my-3 font-bold text-3xl text-center">Contact</h4>
      <Bar />
      <div className="container justify-content-center mt-5 pt-5">
        <form>
          <div class="form-row row">
            <div class="form-group col-md-4">
              <input type="text" class="form-control" placeholder="Nam" />
            </div>
            <div class="form-group col-md-4">
              <input type="email" class="form-control" placeholder="E-mail" />
            </div>
            <div class="form-group col-md-4">
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
    </div>
  );
};

export default Contacts;
