import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import store from "../store";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/AuthSlice";

function AdminHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/adminLogin");
    } catch (error) {
      console.log(error, "eeee");
    }
  };
  const { adminInfo } = useSelector((state) => state.auth);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark pb-4">
      <Container>
        <Link to={"/admin"} style={{ textDecoration: "none" }}>
          <Navbar.Brand className="font-weight-bolder text-light text text-decoration-none">
            Admin{" "}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {adminInfo && (
            <>
              <NavDropdown
                className="text-light"
                title={adminInfo?.name || adminInfo?.user?.name}
                id="username"
              >
                <NavDropdown.Item
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <Link
                    to={"/profile"}
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Profile{" "}
                  </Link>
                </NavDropdown.Item>
                <hr />
                <NavDropdown.Item className="text-dark" onClick={logoutHandler}>
                  LogOut
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminHeader;
