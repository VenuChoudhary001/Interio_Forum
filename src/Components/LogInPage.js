import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
function LogInPage() {
  return (
    <section id="log-in">
      <div className="dark-overlay-1">
        <div className="row">
          <div className="col offset-1 text-center mt-4">
            <div className="card-column log-in-card d-flex flex-column justify-content-center align-items-center">
              <div className="card-title">
                <h1 className="display-4 text-white">
                  LOG IN
                  <hr className="bg-light" />
                </h1>
              </div>
              <div className="card-body mx-auto">
                <Link to="/home" className="btn btn-dark mb-2 mx-2">
                  <FcGoogle /> Log In
                </Link>
                <button className="btn btn-dark mb-2 mx-2">
                  <FaFacebook /> Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogInPage;
