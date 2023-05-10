import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styled";

const ExamResult = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Sizning imtihon natijangiz</h1>
      <span>{localStorage.getItem("resultExam") * 100} Ball</span>
      <div
        onClick={() => {
          navigate("/");
          localStorage.removeItem("resultExam");
        }}
      >
        Asosiy oynaga qaytish
      </div>
    </Container>
  );
};

export default ExamResult;
