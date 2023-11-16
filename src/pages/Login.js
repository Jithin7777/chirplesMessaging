import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { addUser, verifyUser } from "../service/APIs/allAPIs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ Register, passSession }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [InputData, setInputData] = useState({
    id: "",
    name: "",
    userImg: "",
    password: "",
  });

  const setValues = (e) => {
    let { name, value } = e.target;
    setInputData({ ...InputData, [name]: value });
  };

  const submitRegister = async () => {
    const { id, name, userImg, password } = InputData;
    // console.log(InputData);

    // console.log(id, name, userImg, password);
    if (id === "" || name === "" || userImg === "" || password === "") {
      alert("Enter All Data");
    } else {
      const result = await addUser(InputData);
      if (result.status >= 200 && result.status < 300) {
        navigate("/");
      }
    }
  };

  const submitLogin = async () => {
    const { id, password } = InputData;
    const result = await verifyUser(id);
    if (result.status >= 200 && result.status < 300) {
      if (result.data.password === password) {
        navigate(`/Chat`);
        passSession(id);
      } else {
        toast.error("Incorrect Username or Password", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  // console.log(InputData);

  const isRegisterForm = Register ? true : false;
  return (
    <Modal fullscreen show={true}>
      <Modal.Body className="bgsocial user-select-none d-flex flex-column justify-content-center align-items-center">
        <div className="bg-body-secondary rounded p-3 p-lg-5 mb-3">
          <div className="mb-5">
            <h1 className="text-primary display-1 text-center">
              <i className="bi bi-feather2"></i>
            </h1>
            <h2 className="text-center text-primary">Chirples</h2>
            <h3 className="text-center">
              {isRegisterForm ? "Register" : "Login"}
            </h3>
          </div>
          <Form.Control
            type="text"
            placeholder={isRegisterForm ? "Create Username" : "Username"}
            className="border-5 border-primary mb-3"
            name="id"
            onChange={(e) => setValues(e)}
          />
          {isRegisterForm ? (
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              className="border-5 border-primary mb-3"
              name="name"
              onChange={(e) => setValues(e)}
            />
          ) : (
            <span></span>
          )}
          {isRegisterForm ? (
            <Form.Control
              type="text"
              placeholder="Profile Picture (URL)"
              className="border-5 border-primary mb-3"
              name="userImg"
              onChange={(e) => setValues(e)}
            />
          ) : (
            <span></span>
          )}
          <Form.Control
            type="password"
            placeholder={isRegisterForm ? "Enter New Password" : "Password"}
            className="border-5 border-primary mb-3"
            name="password"
            onChange={(e) => setValues(e)}
          />
          {isRegisterForm ? (
            <Button
              variant="primary"
              className="w-100"
              onClick={() => submitRegister()}
            >
              Sign Up
            </Button>
          ) : (
            <Button
              variant="primary"
              className="w-100"
              onClick={() => submitLogin()}
            >
              Sign In
            </Button>
          )}
          <hr />
          {isRegisterForm ? (
            <p className="text-center m-0">
              Already in Chirple?{" "}
              <Link to="/" className="fw-bold text-decoration-none">
                Sign In
              </Link>
            </p>
          ) : (
            <p className="text-center m-0">
              New to Chirple?{" "}
              <Link to="/Register" className="fw-bold text-decoration-none">
                Join Now
              </Link>
            </p>
          )}
        </div>
      </Modal.Body>
      <ToastContainer />
    </Modal>
  );
};

export default Login;