import React, { useContext } from "react";
import "./Login.scss";
import { Button, Image } from "react-bootstrap";
import "../custom.scss";
import { accessUrl } from "../spotify";
import AppContext, { MainContext } from "../context/TokenContext";

export default function Login() {

  // const { setSuccess } = useContext(MainContext);
  
  return (
    <>
        <div className="login">
          <div className="login__img-container">
            <Image
              src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-3 col-sm-4 col-5">
            <Button
              href={accessUrl}
              bsPrefix="primary"
              className="btn btn-primary btn-block"
            >
              Login with Spotify
            </Button>
          </div>
        </div>;
    </>
  );
}
