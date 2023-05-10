import React, { useState } from "react";
import { Container, Left, Right, Title, Wrap } from "./style";
import loginImg from "../../Assets/Img/sign-in.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { mainUrl } from "../../MainUrl";

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(mainUrl + "auth/login/", {
        email: loginEmail,
        password: loginPassword,
      });
      if (res.status === 200) {
        localStorage.setItem("access", res?.data?.access);
        localStorage.setItem("refresh", res?.data?.refresh);
        localStorage.setItem("loged", true);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <Container>
      <Left>
        <img src={loginImg} alt="" />
      </Left>
      <Right>
        <Wrap>
          <Title>Kirish</Title>
          <Right.Message>{message && message}</Right.Message>
          <Right.Wrap>
            <Right.Title>Email</Right.Title>
            <Right.Input
              type="text"
              value={loginEmail}
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
              placeholder="Email ..."
            />
          </Right.Wrap>
          <Right.Wrap>
            <Right.Title>Password</Right.Title>
            <Right.Input
              type="password"
              value={loginPassword}
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              placeholder="Password ..."
            />
          </Right.Wrap>
          <Right.Btn onClick={login}>Kirish</Right.Btn>
          <Right.Link>
            Agar sizda hisob mavjud bo'lmasa{" "}
            <Right.Span
              onClick={() => {
                navigate("/register");
              }}
            >
              Ro'yhatdan o'tish
            </Right.Span>{" "}
            oynasiga o'ting
          </Right.Link>
        </Wrap>
      </Right>
    </Container>
  );
};

export default SignIn;
