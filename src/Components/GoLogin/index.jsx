import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const GoLogin = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Siz tizimga kirmadingiz</h1>
      <span>
        Xatolik <FontAwesomeIcon icon={faTriangleExclamation} />{" "}
      </span>
      <h1>Iltimos kirish oynasiga o'ting</h1>
      <div onClick={() => navigate("/sign-in")}>Kirish</div>
    </Container>
  );
};

export default GoLogin;
