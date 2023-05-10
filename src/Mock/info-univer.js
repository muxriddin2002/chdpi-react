import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Servic1 from "../Assets/Img/our-services/pic1.jpg";
import Servic2 from "../Assets/Img/our-services/pic2.jpg";
import Servic3 from "../Assets/Img/our-services/pic3.jpg";

export const planCardData = [
  {
    img: Servic1,
    imgTitle: "Haftalik Testlar",
    icons: (
      <FontAwesomeIcon
        icon={faUniversity}
        size={`1.5rem`}
        className="card-icon"
      />
    ),
    cardText: "Joriy nazoratlar",
    cardTitle:
      "Siz oliygohda har semestr o'tkaziladigan musobaqalarda qatnashishingiz mumkin",
  },
  {
    img: Servic2,
    imgTitle: "Ma'ruzalar",
    icons: (
      <FontAwesomeIcon icon={faBook} size={`1.5rem`} className="card-icon" />
    ),
    cardText: "Ma'ruzalar",
    cardTitle:
      "O'zingizga kerakli mavzu yuzasidan ma'ruzalarni online olishingiz mumkin",
  },
  {
    img: Servic3,
    imgTitle: "Kundalik taqdimotlar",
    icons: (
      <FontAwesomeIcon icon={faFile} size={`1.5rem`} className="card-icon" />
    ),
    cardText: "Mustaqil o'rganish uchun manbalar",
    cardTitle:
      "Bu bo'limdan siz o'zingizga kerakli elektron resurslarni topishingiz mumkin.",
  },
];
