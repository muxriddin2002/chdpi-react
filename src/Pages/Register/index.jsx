import React, { useEffect, useState } from "react";
import { Container, Left, Right, Title, Wrap } from "./style";
import loginImg from "../../Assets/Img/sign-in.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { mainUrl } from "../../MainUrl";
import Loading from "../../Components/Loading";

const Register = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [selectedGroup, setSelectedGroup] = useState([]);
  const [group, setGroup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(mainUrl + "auth/groups-all/")
      .then((res) => res.json())
      .then((res) => {
        setSelectedGroup(res);
        setGroup(res[0].id);
      });

    setLoading(false);
  }, []);

  const login = async () => {
    try {
      const res = await axios.post(mainUrl + "auth/register/", {
        email: loginEmail,
        password: loginPassword,
        first_name: name,
        last_name: surname,
        phone_number: phoneNumber,
        group: group,
      });
      if (res.status === 201 || res.status === 200) {
        const response = await axios.post(mainUrl + "auth/login/", {
          email: loginEmail,
          password: loginPassword,
        });

        if (response.status === 200) {
          localStorage.setItem("access", response?.data?.access);
          localStorage.setItem("refresh", response?.data?.refresh);
          localStorage.setItem("loged", true);
          navigate("/");
        }
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Left>
        <img src={loginImg} alt="" />
      </Left>
      <Right>
        <Wrap>
          <Title>Ro'yxatdan o'tish</Title>
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
            <Right.Title>Ismingiz</Right.Title>
            <Right.Input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              placeholder="Ismingiz ..."
            />
          </Right.Wrap>
          <Right.Wrap>
            <Right.Title>Familiyangiz</Right.Title>
            <Right.Input
              type="text"
              value={surname}
              onChange={(event) => {
                setSurname(event.target.value);
              }}
              placeholder="Familiya ..."
            />
          </Right.Wrap>
          <Right.Wrap>
            <Right.Title>Telefon raqam</Right.Title>
            <Right.Input
              type="text"
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
              placeholder="Telefon raqam ..."
            />
          </Right.Wrap>
          <Right.Wrap>
            <label htmlFor="selectOption">Guruhingiz: </label>
            <select
              id="selectOption"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            >
              {selectedGroup?.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
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
        </Wrap>
      </Right>
    </Container>
  );
};

export default Register;
