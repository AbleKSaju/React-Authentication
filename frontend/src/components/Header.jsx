import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import store from "../store";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/AuthSlice";

function CollapsibleExample() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [logoutApiCall]=useLogoutMutation()
  const logoutHandler=async ()=>{
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (error) {
      console.log(error,"eeee");
    }

  }
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo,"inffff");

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Navbar.Brand
            className="font-weight-bolder text-light text text-decoration-none"
            href="#home"
          >
            Home
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {userInfo ? (
            <>
              <NavDropdown className="text-light" title={userInfo.name} id="username">
                <Link to={"/profile"}>
                  <NavDropdown.Item className="text-light">Profile</NavDropdown.Item>
                </Link>
                <NavDropdown.Item className="text-light" onClick={logoutHandler}>LogOut</NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
          <Nav>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <Nav.Link href="#deets" className="font-weight-normal text-light">
                Sign In
              </Nav.Link>
            </Link>
            <Link to={"/signup"} style={{ textDecoration: "none" }}>
              <Nav.Link
                eventKey={2}
                href="#memes"
                className="font-weight-normal text-light text-decoration-none"
              >
                Sign Up
              </Nav.Link>
            </Link>
            {/* <button onClick={logoutHandler}>Out</button> */}
          </Nav>
           </> 
          )} 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
