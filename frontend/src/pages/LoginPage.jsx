import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Login, SignUp } from "../redux/userReducer/action";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.userReducer.message);
  const toast = useToast();

  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [password, setpass] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const toggleForm = (formType) => {
    if (formType === "login") {
      setShowLoginForm(true);
      setShowSignUpForm(false);
    } else {
      setShowLoginForm(false);
      setShowSignUpForm(true);
    }
  };
  const handlelogin = (e) => {
    e.preventDefault();
    let payload = {
      email,
      password,
    };
    if (email === "" || password === "") {
      toast({
        title: "Error",
        description: "Please fill out all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      dispatch(Login(payload, toast));
    }
  };
  const handle = (e) => {
    e.preventDefault();

    let obj = {
      email,
      password,
      confirmPassword,
    };
    obj.userName = name;

    //  console.log(obj)

    if (
      email === "" ||
      password === "" ||
      name === "" ||
      confirmPassword === ""
    ) {
      toast({
        title: "Error",
        description: "Please fill out all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      dispatch(SignUp(obj, toast));
    }
  };

  return (
    <Body>
      <LoginBox>
        <LoginSnip>
          <TabInput id="tab-1" name="tab" className="sign-in" defaultChecked />
          <TabLabel htmlFor="tab-1" onClick={() => toggleForm("login")}>
            Login
          </TabLabel>

          <TabInput id="tab-2" name="tab" className="sign-up" />
          <TabLabel htmlFor="tab-2" onClick={() => toggleForm("signup")}>
            Sign Up
          </TabLabel>

          {showLoginForm ? (
            <LoginForm showForm={showLoginForm}>
              <div>
                <p>Email</p>
                <Input
                  placeholder="Enter your Email"
                  type="text"
                  onChange={(e) => setemail(e.target.value)}
                ></Input>
              </div>
              <br />
              <br />
              <div>
                <p>password</p>
                <Input
                  placeholder="Enter your password"
                  type="text"
                  onChange={(e) => setpass(e.target.value)}
                ></Input>
              </div>
              <br />
              <br />

              <Button onClick={handlelogin}>Login</Button>
            </LoginForm>
          ) : (
            ""
          )}
          {showSignUpForm ? (
            <LoginForm showForm={showSignUpForm}>
              <div>
                <p>Name</p>
                <Input
                  placeholder="Enter your name"
                  type="text"
                  onChange={(e) => setname(e.target.value)}
                ></Input>
              </div>
              <br></br>
              <div>
                <p>Email</p>
                <Input
                  placeholder="Enter your Email"
                  type="text"
                  onChange={(e) => setemail(e.target.value)}
                ></Input>
              </div>
              <br></br>
              <div>
                <p>password</p>
                <Input
                  placeholder="Create password"
                  type="text"
                  onChange={(e) => setpass(e.target.value)}
                ></Input>
              </div>
              <br></br>
              <div>
                <p> confirm password</p>
                <Input
                  placeholder="Enter same password"
                  type="text"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                ></Input>
              </div>
              <br />
              <br />
              <Button onClick={handle}>Sign Up</Button>
            </LoginForm>
          ) : (
            ""
          )}
        </LoginSnip>
      </LoginBox>
    </Body>
  );
};

const Body = styled.div`
  margin: 30px;
  color: #6a6f8c;
  font: 700 16px/18px "Open Sans", sans-serif;
`;

const LoginBox = styled.div`
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 670px;
  position: relative;
`;

const LoginSnip = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: rotateY(90deg);
    opacity: 0;
  }
  to {
    transform: rotateY(0deg);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: rotateY(0deg);
    opacity: 1;
  }
  to {
    transform: rotateY(90deg);
    opacity: 0;
  }
`;

const LoginForm = styled.div`
  margin-top: 30px;

  animation: ${fadeIn} 0.5s ease-in-out,
    ${(props) => (props.showForm ? slideIn : slideOut)} 0.8s ease-in-out;
`;

const TabInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const TabLabel = styled.label`
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  cursor: pointer;
  color: #6a6f8c;

  &:hover {
    color: #201919;
    border-color: #1161ee;
  }
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
  margin: auto;
  border: none;
  border-bottom: 2px solid black;

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    width: 80%;
  }
`;

const Button = styled.button`
  width: 20%;
  padding: 10px;
  margin-left: 20%;
  background-color: blue;
  border: none;
  border-radius: 20px;
  color: black;

  @media (max-width: 576px) {
    width: 100%;
    margin-left: 0;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    margin-left: 20%;
  }
`;
