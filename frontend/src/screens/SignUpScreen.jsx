import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const SingupScreen = ({ newContact }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  console.log(name, email, password, "ep");
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const submit = (data) => {
    reset();
    navigate("/");
  };
  return (
    <div
      className="bgMountain"
      style={{
        height: "93vh",
        marginTop: "-48px",
        backgroundImage: `url('../../public/bg.jpg')`,
        backgroundSize: "100%",
      }}
    >
      <div
        className="container mt-5"
        style={{ height: "650px", width: "500px", border: "2px black" }}
      >
        <div className="mt-3" style={{ textAlign: "center", paddingTop:'3rem' }}>
          <h1 className="mt-2 mb-5">𝕊𝕚𝕘𝕟 𝕦𝕡</h1>
          <form onSubmit={handleSubmit(submit)}>
            <div className="mt-3">
              <input
                {...register("name", {
                  required: "Name Required",
                  pattern: {
                    value:
                      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
                    message: "Full Name required",
                  },
                })}
                placeholder=" Name..."
                className="mt-0 border-0  rounded"
                style={{ width: "75%", height: "40px" ,  background: "rgba(200, 200, 200, 0.5)"}}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <br />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
              <br />
              <input
                className="mt-2 border-0  rounded"
                style={{ width: "75%", height: "40px" ,  background: "rgba(200, 200, 200, 0.5)"}}
                {...register("email", {
                  required: "Email required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid Email",
                  },
                })}
                placeholder="Email..."
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
              <br />

              <input
                {...register("password", {
                  required: "Password Required",
                  pattern: {
                    value: /^.{6,}$/,
                    message: "Minimum 6 Digits",
                  },
                })}
                placeholder="Password..."
                value={password}
                className="mt-2 border-0  rounded"
                style={{ width: "75%", height: "40px" ,  background: "rgba(200, 200, 200, 0.5)"}}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <br />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
              <br />
              <input
                {...register("confirm password", {
                  required: "Password Required",
                  pattern: {
                    value: /^.{6,}$/,
                    message: "Minimum 6 Digits",
                  },
                })}
                placeholder="Password Confirm..."
                value={confirmpassword}
                className="mt-2 border-0  rounded"
                style={{ width: "75%", height: "40px" ,  background: "rgba(200, 200, 200, 0.5)"}}
                type="password"
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />

              <br />
              {errors.confirmpassword && (
                <small className="text-danger">
                  {errors.confirmpassword.message}
                </small>
              )}
              <br />
            </div>
            <button
              type="submit"
              className="btn btn-outline-dark mt-3"
              style={{ fontSize: "1rem" ,  background: "rgba(200, 200, 200, 0.5)"}}
            >
              Submit
            </button>
            <p className="mt-3 text-light">
              Already have an account ?{" "}
              <Link to={"/login"} className="text-light ">
                Register
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingupScreen;
