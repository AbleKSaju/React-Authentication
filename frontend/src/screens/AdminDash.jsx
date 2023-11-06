import React from 'react'
import { useEffect } from 'react'
import './usersList.css'

const AdminDash = ({setadmin}) => {
    useEffect(()=>{
        setadmin(true)
    },[setadmin])
  return (
    <div className="container mt-2 mb-2 ">
    <div className="col-lg-9 mt-4 mt-lg-0">
      <div className="row">
        <div className="col-md-12">
          <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
            <table className="table manage-candidates-top mb-0">
              <thead>
                <tr>
                  <th>Users</th>
                  <th className="text-end">Action</th>
                  <th className="action "></th>
                </tr>
              </thead>
              <tbody>
                <tr className="candidates-list">
                  <td className="title">
                    <div className="thumb">
                      <img
                        className="img-fluid"
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt=""
                      />
                    </div>
                    <div className="candidate-list-details">
                      <div className="candidate-list-info">
                        <div className="candidate-list-title">
                          <h5 className="mb-0">
                            <a href="#">Brooke Kelly</a>
                          </h5>
                        </div>
                        <div className="candidate-list-option">
                          <ul className="list-unstyled">
                            <li>
                              <i className="fas fa-filter pr-1" />
                              Information Technology
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt pr-1" />
                              Rolling Meadows, IL 60008
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
               {/* <td className="candidate-list-favourite-time text-center">
                    <a
                      className="candidate-list-favourite order-2 text-danger"
                      href="#"
                    >
                      <i className="fas fa-heart" />
                    </a>
                    <span className="candidate-list-time order-1">
                      
                    </span>
                  </td> */}
                 <td>
                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                        <li>
                        <a
                      className="candidate-list-favourite order-2 text-danger"
                      href="#"
                    >
                      <i className="fas fa-heart" />
                    </a>
                        </li>
            
                      <li>
                        <a
                          href="#"
                          className="text-info ms-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Edit"
                        >
                          <i className="fas fa-pencil-alt" />
                        </a>
                      </li>
                      <li >
                        <a
                          href="#"
                          className="text-danger ms-3"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i className="far fa-trash-alt" />
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/*  <tr className="candidates-list">
                  <td className="title">
                    <div className="thumb">
                      <img
                        className="img-fluid"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt=""
                      />
                    </div>
                    <div className="candidate-list-details">
                      <div className="candidate-list-info">
                        <div className="candidate-list-title">
                          <h5 className="mb-0">
                            <a href="#">Ronald Bradley</a>
                          </h5>
                        </div>
                        <div className="candidate-list-option">
                          <ul className="list-unstyled">
                            <li>
                              <i className="fas fa-filter pr-1" />
                              Human Resources
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt pr-1" />
                              Monroe Township, NJ 08831
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="candidate-list-favourite-time text-center">
                    <a
                      className="candidate-list-favourite order-2 text-danger"
                      href="#"
                    >
                      <i className="fas fa-heart" />
                    </a>
                    <span className="candidate-list-time order-1">
                      Shortlisted
                    </span>
                  </td>
                  <td>
                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                      <li>
                        <a
                          href="#"
                          className="text-primary"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="view"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-info"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Edit"
                        >
                          <i className="fas fa-pencil-alt" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-danger"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i className="far fa-trash-alt" />
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="candidates-list">
                  <td className="title">
                    <div className="thumb">
                      <img
                        className="img-fluid"
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt=""
                      />
                    </div>
                    <div className="candidate-list-details">
                      <div className="candidate-list-info">
                        <div className="candidate-list-title">
                          <h5 className="mb-0">
                            <a href="#">Rafael Briggs</a>
                          </h5>
                        </div>
                        <div className="candidate-list-option">
                          <ul className="list-unstyled">
                            <li>
                              <i className="fas fa-filter pr-1" />
                              Recruitment Consultancy
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt pr-1" />
                              Haines City, FL 33844
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="candidate-list-favourite-time text-center">
                    <a
                      className="candidate-list-favourite order-2 text-danger"
                      href="#"
                    >
                      <i className="fas fa-heart" />
                    </a>
                    <span className="candidate-list-time order-1">
                      Shortlisted
                    </span>
                  </td>
                  <td>
                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                      <li>
                        <a
                          href="#"
                          className="text-primary"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="view"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-info"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Edit"
                        >
                          <i className="fas fa-pencil-alt" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-danger"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i className="far fa-trash-alt" />
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="candidates-list">
                  <td className="title">
                    <div className="thumb">
                      <img
                        className="img-fluid"
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        alt=""
                      />
                    </div>
                    <div className="candidate-list-details">
                      <div className="candidate-list-info">
                        <div className="candidate-list-title">
                          <h5 className="mb-0">
                            <a href="#">Vickie Meyer</a>
                          </h5>
                        </div>
                        <div className="candidate-list-option">
                          <ul className="list-unstyled">
                            <li>
                              <i className="fas fa-filter pr-1" />
                              Human Resources
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt pr-1" />
                              Minneapolis, MN 55406
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="candidate-list-favourite-time text-center">
                    <a
                      className="candidate-list-favourite order-2 text-danger"
                      href="#"
                    >
                      <i className="fas fa-heart" />
                    </a>
                    <span className="candidate-list-time order-1">
                      Shortlisted
                    </span>
                  </td>
                  <td>
                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                      <li>
                        <a
                          href="#"
                          className="text-primary"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="view"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-info"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Edit"
                        >
                          <i className="fas fa-pencil-alt" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-danger"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i className="far fa-trash-alt" />
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="candidates-list">
                  <td className="title">
                    <div className="thumb">
                      <img
                        className="img-fluid"
                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                        alt=""
                      />
                    </div>
                    <div className="candidate-list-details">
                      <div className="candidate-list-info">
                        <div className="candidate-list-title">
                          <h5 className="mb-0">
                            <a href="#">Nichole Haynes</a>
                          </h5>
                        </div>
                        <div className="candidate-list-option">
                          <ul className="list-unstyled">
                            <li>
                              <i className="fas fa-filter pr-1" />
                              Information Technology
                            </li>
                            <li>
                              <i className="fas fa-map-marker-alt pr-1" />
                              Botchergate, Carlisle
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="candidate-list-favourite-time text-center">
                    <a
                      className="candidate-list-favourite order-2 text-danger"
                      href="#"
                    >
                      <i className="fas fa-heart" />
                    </a>
                    <span className="candidate-list-time order-1">
                      Shortlisted
                    </span>
                  </td>
                  <td>
                    <ul className="list-unstyled mb-0 d-flex justify-content-end">
                      <li>
                        <a
                          href="#"
                          className="text-primary"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="view"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-info"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Edit"
                        >
                          <i className="fas fa-pencil-alt" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-danger"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Delete"
                        >
                          <i className="far fa-trash-alt" />
                        </a>
                      </li>
                    </ul>
                  </td> */}
                {/* </tr> */}
              </tbody>
            </table>
            {/* <div className="text-center mt-3 mt-sm-3">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item disabled">
                  {" "}
                  <span className="page-link">Prev</span>{" "}
                </li>
                <li className="page-item active" aria-current="page">
                  <span className="page-link">1 </span>{" "}
                  <span className="sr-only">(current)</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    25
                  </a>
                </li>
                <li className="page-item">
                  {" "}
                  <a className="page-link" href="#">
                    Next
                  </a>{" "}
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminDash