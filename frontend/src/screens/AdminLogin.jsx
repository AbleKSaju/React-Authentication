import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAdminLoginMutation } from "../slices/adminApiSlice";
import { setCredentials } from "../slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AdminHeader from "../components/AdminHeader";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminLogin, { isLoading }] = useAdminLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  useEffect(() => {
    if (userInfo) {
      navigate("/adminDash");
    }
  }, [navigate, userInfo]);
  const submit = async (data) => {
    reset();
    try {
      const res = await adminLogin({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Login success");
      navigate("/adminDash");
    } catch (err) {
      setEmail("");
      setPassword("");
      toast.error(err?.data?.message || err.message);
    }
  };

  return (
    <div>
      {<AdminHeader />}

      <div
        className="bgMountain"
        style={{
          height: "93vh",
          marginTop: "-55px",
          backgroundImage: `url('https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg')`,
          backgroundSize: "100%",
        }}
      >
        <div
          className="container rounded mt-5"
          style={{ height: "450px", width: "500px", border: "2px black" }}
        >
          <div
            className="mt-5"
            style={{ textAlign: "center", paddingTop: "6rem" }}
          >
            <h1 className="mt-2 fs-1 mb-5 text-white">𝕃𝕠𝕘𝕚𝕟</h1>
            <br />
            <form onSubmit={handleSubmit(submit)}>
              <div className="mt-3">
                <br />
                <label htmlFor="email " className="text-secondary">
                  email
                </label>
                <br />
                <br />
                <input
                  className="mt-0 border-0 rounded"
                  style={{
                    width: "75%",
                    height: "40px",
                    background: "rgba(200, 200, 200, 0.5)", // light grey with 50% transparency
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
                <label htmlFor="password " className="text-secondary">
                  password
                </label>
                <br />
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
                  // ref={removeInput}
                  className="mt-0 border-0 rounded"
                  style={{
                    width: "75%",
                    height: "40px",
                    background: "rgba(200, 200, 200, 0.5)",
                  }}
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <br />
                {errors.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
                <br />
                <br />
                <br />
              </div>
              {isLoading && <h1>Loading...</h1>}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
