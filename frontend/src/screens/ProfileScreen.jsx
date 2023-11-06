import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUpdateUserMutation } from "../slices/usersApiSlice";

import { setCredentials } from "../slices/AuthSlice";

import "./profile.css";

const ProfileScreen = () => {
  console.log("Enterda");
  const { userInfo } = useSelector((state) => state.auth);
const dispatch=useDispatch()
    const navigate=useNavigate()

    const [updateUser,{isLoading}]=useUpdateUserMutation()
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }, [userInfo.email, userInfo.name]);

    const {
      handleSubmit,
      register,
      formState: { errors },
      reset,
    } = useForm();

    // const submitHandler = async (e) => {
    //   e.preventDefault();
    //   if (password !== confirmPassword) {
    //     toast.error('Passwords do not match');
    //   } else {
    //     try {
    //       const res = await updateUser({
    //         _id: userInfo._id,
    //         name,
    //         email,
    //         password,
    //       }).unwrap();
    //       console.log(res,"ress");
    //       dispatch(setCredentials(res));
    //       toast.success('Profile updated successfully');
    //     } catch (err) {
    //       console.log("i am error");
    //       console.log(err);
    //       toast.error(err?.data?.message || err.error);
    //     }
    //   }
    // };
  
    const submit = async (data) => {
      if (password !== confirmPassword) {
        toast.error("Passwords Not Match");
      } else {
        try {
          const res = await updateUser({ _id:userInfo._id, name, email, password }).unwrap();
          dispatch(setCredentials({ ...res }));
          toast.success("Update success");
          navigate("/");
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      }
      reset();
    };
  
    return (
      <div className="padding">
        <div className="col-md-8">
          {/* Column */}
          <div className="card">
            {" "}
            <img
              className="card-img-top"
              src="https://i.imgur.com/K7A78We.jpg"
              alt="Card image cap"
            />
            <div className="card-body little-profile text-center">
              <div className="pro-img">
                <img src="https://i.imgur.com/8RKXAIV.jpg" alt="user" />
              </div>
              <h3 className="m-b-0">{userInfo?.name}</h3>
              <form onSubmit={handleSubmit(submit)}>
                <div className="mt-3">
                  <input
                    {...register("name", {
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
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
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
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid Email",
                      },
                    })}
                    placeholder="Email..."
                    type="text"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <br />
                  {errors.email && (
                    <small className="text-danger">{errors.email.message}</small>
                  )}
                  <br />
  
                  <input
                    {...register("password", {
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
                    onChange={(e)=>setPassword(e.target.value)}

                  />
  
                  <br />
                  {errors.password && (
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  )}
                  <br />
                  <input
                    {...register("confirmpassword", {
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
                    onChange={(e)=>setConfirmPassword(e.target.value)}

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
                  Update
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
      </div>
    );
};

export default ProfileScreen;
