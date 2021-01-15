import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "./Navbar";
const url = "https://api.github.com/users";
function ProfilePage() {
  const { id } = useParams();
  console.log(id);
  const [profile, setProfile] = useState({});
  const getData = async () => {
    const response = await fetch(`https://api.github.com/users/${id}`);
    const data = await response.json();
    console.log("this is profile", data);
    setProfile(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="card d-flex flex-row">
          <div className="card-image-top ">
            <img
              src={profile.avatar_url}
              style={{ width: "300px" }}
              className="image-fluid "
            />
          </div>
          <div className="mx-2">
            <div className="card-title ">
              <h1 className="h1">{profile.name}</h1>
            </div>
            <div className="card-body">
              <h1 className="h3">Followers :{profile.followers}</h1>
              <h1 className="h3">Following:{profile.following}</h1>
              <h1 className="h3">Address:{profile.location}</h1>
            </div>
            <div className="card-footer">
              <form className="form-inline">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mx-1"
                    placeholder="Enter your name"
                  />
                  <input
                    type="email"
                    className="form-control mx-1"
                    placeholder="@email"
                  />
                  <input
                    type="text-area"
                    className="form-control mx-1"
                    placeholder="Enter your message"
                  />
                  <button className="btn btn-dark">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
