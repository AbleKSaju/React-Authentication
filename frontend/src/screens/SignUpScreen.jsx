import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const SingupScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [signUp, { isLoading }] = useRegisterMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const submit = async (data) => {
    const { name, email, password, confirmpassword } = data;
    if (password !== confirmpassword) {
      toast.error("Password Not Match");
    } else {
      try {
        const res = await signUp({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Signup success");
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
    reset();
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  return (
    <div
      className="bgMountain"
      style={{
        height: "93vh",
        marginTop: "-48px",
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: "100%",
      }}
    >
      <div
        className="container mt-5"
        style={{ height: "650px", width: "500px", border: "2px black" }}
      >
        <div
          className="mt-3"
          style={{ textAlign: "center", paddingTop: "3rem" }}
        >
          <h1 className="mt-2 mb-5">𝕊𝕚𝕘𝕟 𝕦𝕡</h1>
          <form onSubmit={handleSubmit(submit)}>
            <div className="mt-3">
              <input
                {...register("name", {
                  required: "Name Required",
                  pattern: {
                    value:
                      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
                    message: "Full name required",
                  },
                })}
                placeholder=" Name..."
                className="mt-0 border-0  rounded"
                style={{
                  width: "75%",
                  height: "40px",
                  background: "rgba(200, 200, 200, 0.5)",
                }}
                type="text"
              />
              <br />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
              <br />
              <input
                className="mt-2 border-0  rounded"
                style={{
                  width: "75%",
                  height: "40px",
                  background: "rgba(200, 200, 200, 0.5)",
                }}
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
                className="mt-2 border-0  rounded"
                style={{
                  width: "75%",
                  height: "40px",
                  background: "rgba(200, 200, 200, 0.5)",
                }}
                type="password"
              />

              <br />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
              <br />
              <input
                {...register("confirmpassword", {
                  required: "Password Required",
                  pattern: {
                    value: /^.{6,}$/,
                    message: "Minimum 6 Digits",
                  },
                })}
                placeholder="Password Confirm..."
                className="mt-2 border-0  rounded"
                style={{
                  width: "75%",
                  height: "40px",
                  background: "rgba(200, 200, 200, 0.5)",
                }}
                type="password"
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
              style={{
                fontSize: "1rem",
                background: "rgba(200, 200, 200, 0.5)",
              }}
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
