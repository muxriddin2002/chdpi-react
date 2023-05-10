import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import { mainUrl } from "../../MainUrl";
import { Container } from "./styled";

const Practices = () => {
  const navigate = useNavigate();
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(mainUrl + "lecture/all/?type=practice").then((res) => {
      setLectures(res.data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="container">
      <Container>
        <Container.Right>
          <Container.Title>
            INFORMATIKANING NAZARIY ASOSLARI FANING MA'RUZA MASHG'ULOTI
            MAVZULARI
          </Container.Title>
          {lectures.map((e, i) => {
            return (
              <p
                key={i}
                onClick={() => navigate("/practices/" + e.id + "-" + e.title)}
              >
                {e.title}
              </p>
            );
          })}
        </Container.Right>
      </Container>
    </div>
  );
};

export default Practices;
