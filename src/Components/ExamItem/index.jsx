import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styled";

const ExamItem = ({ data }) => {
  const navigate = useNavigate();

  const chouseExam = (url, id) => {
    if (localStorage.getItem("choused")) {
      if (localStorage.getItem("examId") === String(id)) {
        navigate(url);
      } else alert("Iltimos, tanlangan test topshirig'ini tugating");
    } else {
      const agreement = window.confirm(
        "Testni boshlamoqchimisiz, Topshiriq uchun 60 daqiqa vaqt ajratiladi"
      );
      if (agreement) {
        localStorage.setItem("choused", "true");
        localStorage.setItem("examId", id);
        localStorage.setItem("time", "3600000");
        navigate(url);
      }
    }
  };
  return (
    <Container>
      <Container.Title>
        <FontAwesomeIcon icon={faCircleCheck} /> {data.title}
      </Container.Title>
      <Container.Type>
        <span>Turi: </span>
        {data.exam_type === "intermediate"
          ? "Oraliq nazorat"
          : data.exam_type === "final"
          ? "Yakuniy nazorat"
          : "Joriy nazorat"}
      </Container.Type>
      <Container.Info>
        <div>
          <span>Semestr: </span>
          {data.semester}
        </div>
        <div>
          <span>Urunishlar: </span>
          {data.attempts}
        </div>
      </Container.Info>
      {/* <Container.History>Natijalar tarixi</Container.History> */}
      <Container.Desc>
        {data.desc.length > 50 ? data.desc.slice(0, 50) + "..." : data.desc}
      </Container.Desc>
      {!data.status ? (
        <Container.End>Imtihon Tugatilgan</Container.End>
      ) : (
        <Container.Btn
          onClick={() =>
            chouseExam(
              "/student/exam/" + data.id + "-" + data.attempts + data.semester,
              data.id
            )
          }
        >
          Boshlash <FontAwesomeIcon icon={faArrowRight} />
        </Container.Btn>
      )}
    </Container>
  );
};

export default ExamItem;
