import React from "react";
import { Container } from "./styled";
import notFound from "../../Assets/Img/404.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <p>
        Bu sahifa topilmadi iltimos,{" "}
        <span onClick={() => navigate("/")}>ASOSIY</span> sahifaga o'ting
      </p>
      <img src={notFound} alt="404_error" />
    </Container>
  );
};

export default NotFound;
