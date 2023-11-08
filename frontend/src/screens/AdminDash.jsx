import React, { createContext, useState } from "react";
import { useEffect } from "react";
import "./usersList.css";
import AdminHeader from "../components/AdminHeader";
import { toast } from "react-toastify";
import {
  useDeleteUserMutation,
  useGetUsersMutation,
  useEditUserMutation,
} from "../slices/adminApiSlice";
import { setCredentials, userDetails } from "../slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logoutUser } from "../slices/AuthSlice";

const AdminDash = () => {
  const context = createContext(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState([]);
  const [users, { isLoading }] = useGetUsersMutation();
  const [deleteUser, { isLoadings }] = useDeleteUserMutation();
  const [editUserData, { isLoad }] = useEditUserMutation();
  const [userDelete, setUserDelete] = useState(false);
  const { adminInfo } = useSelector((state) => state.auth);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();

  useEffect(() => {
    if (!adminInfo || adminInfo?.email !== "admin@gmail.com") {
      navigate("/adminLogin");
    }
  }, [adminInfo]);
  console.log("userDeleted");

  useEffect(() => {
    const fetchData = async () => {
      try {
        "Enter to fetch"
        const { data } = await users();
        setUserData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [users,userDelete,adminInfo,logoutApiCall]);

  useEffect(() => {
    setData(userData);
  }, [userData]);
  useEffect(() => {}, [data]);

  const filtereddata = (letter) => {
    setData(
      userData.filter((val) =>
        val.name.toLowerCase().includes(letter.toLowerCase())
      )
    ) &&
      setData(
        userData.filter((val) =>
          val.email.toLowerCase().includes(letter.toLowerCase())
        )
      );
  };

  const newDate = (dates) => {
    const isoDate = dates;
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return formattedDate;
  };
  const removeUser = async (id, userId) => {
    console.log(userId, "params");
    console.log(userInfo?._id, "user");

      try {
        await deleteUser({ id }).unwrap();
        setUserDelete(!userDelete);
        toast.success("User deleted");
      } catch (err) {
        console.log(err, "errorrr");
        toast.error(err?.data?.message || err.message);
      }
  };

  const editUser = (user) => {
    dispatch(userDetails(user));
    navigate("/editUser");
  };

  return (
    <div className="mb-5 ">
      {<AdminHeader />}
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="row">
          <div className="input-group">
            <div className="form-outline mt-3 ms-3 mb-3 border rounded">
              <input
                type="search"
                id="form1"
                className="form-control"
                onChange={(e) => {
                  filtereddata(e.target.value);
                }}
              />
              <label className="form-label" htmlFor="form1">
                Search
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
              <table className="table manage-candidates-top mb-0">
                <th className="fw-bold">Users</th>
                <th className="text-end">Action</th>
                {data.length ? (
                  data.map((val, i) => (
                    <>
                      <thead>
                        <tr>
                          <th className="action "></th>
                        </tr>
                      </thead>
                      <tbody key={i}>
                        <tr className="candidates-list">
                          <td className="title">
                            <div className="thumb">
                              {val.profileImage ? (
                                <img
                                  className="img-fluid"
                                  src={`http://localhost:8000/images/${val.profileImage}`}
                                  alt=""
                                />
                              ) : (
                                <img
                                  className="img-fluid"
                                  src={`https://static.vecteezy.com/system/resources/previews/016/293/983/non_2x/profile-avatar-ui-element-template-user-account-editable-isolated-dashboard-component-flat-user-interface-visual-data-presentation-web-design-widget-for-mobile-application-with-dark-theme-vector.jpg`}
                                  alt=""
                                />
                              )}
                            </div>
                            <div className="candidate-list-details">
                              <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                  <h5 className="mb-0">
                                    <p className="fw-bold">
                                      {val.name}{" "}
                                      <span className="ms-5 fw-normal">
                                        {" "}
                                        {val.email}
                                      </span>
                                    </p>
                                  </h5>
                                </div>
                                <div className="candidate-list-option">
                                  <ul className="list-unstyled">
                                    <li>
                                      <i className="" />
                                      🕗 {newDate(val.createdAt)}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <ul className="list-unstyled mb-0 d-flex justify-content-end">
                              <li>
                                <p
                                  onClick={() => editUser(val)}
                                  className="text-info ms-3"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Edit"
                                >
                                  <i className="fas fa-pencil-alt" />
                                </p>
                              </li>
                              <li>
                                <p
                                  onClick={() =>
                                    removeUser(val.createdAt, val._id)
                                  }
                                  className="text-danger ms-3"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Delete"
                                >
                                  <i className="far fa-trash-alt" />
                                </p>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  ))
                ) : (
                  <img
                    src="https://static.thenounproject.com/png/55393-200.png"
                    alt="No Users"
                  />
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
