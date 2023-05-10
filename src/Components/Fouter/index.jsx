import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { Container } from "./style";

function Fouter() {
  return (
    <Container>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 foot-first-col">
              <div className="foot-first">
                <img
                  src={
                    "https://cspi.uz/storage/app/uploads/public/984/770/56a/thumb__300_300_0_0_crop.png"
                  }
                  alt={"Logo"}
                />
                <p>Chirchiq davlat pedagogika universiteti web sayti.</p>
                <p>Chirchiq shahri, Amir Temur ko'chasi 104 uy</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPhone} className="foot-icons" />
                    +99870 716-68-05
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="foot-icons" />
                    tvchdpi@edu.uz
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://t.me/tvchdpi2017">
                      <FaTelegram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@chirchiqdavlatpedagogikaun3178">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/chirchiq_ped_universitet/">
                      <AiOutlineInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/tvchdpi2017/">
                      <AiOutlineFacebook />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-12 foot-col-second">
              <div className="foot-last">
                <h4>Foydali havolalar</h4>
                <ul>
                  <li>
                    <a href="https://www.cspi.uz/">Bosh sahifa</a>
                  </li>
                  <li>
                    <a href="https://www.cspi.uz/barcha-yangiliklar">
                      Biz haqimizda
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cspi.uz/fakultetlar-detal-sahifasi/matematika-va-informatika-fakulteti">
                      Bizning Rasmlar
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cspi.uz/otm-tarixi">
                      O'qituvchilarimiz
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cspi.uz/otm-reytingi">Natijalarimiz</a>
                  </li>
                  <li>
                    <a href="https://www.cspi.uz/qayta-loqa">Bog'lanish</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12">
              <div className="foot-thirt">
                <h4>Ochiq paytlar</h4>
                <ul>
                  <li>
                    <span>Dushanba - Chorshanba :</span>
                    <span>6.00 - 22.00</span>
                  </li>
                  <li>
                    <span>Payshanba - Juma :</span>
                    <span>8.00 - 22.00</span>
                  </li>
                  <li>
                    <span>Shanba :</span>
                    <span>8.00 - 16.00</span>
                  </li>
                  <li>
                    <span>Yakshanba :</span>
                    <span>Yopiq</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Fouter;
