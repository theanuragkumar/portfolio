import React from "react";
import {
  FaCircleNotch,
  FaNewspaper,
  FaBlogger,
  // FaFileVideo,
  FaShoppingBag,
  FaAddressBook
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "Projects",
    subHeading: "My Projects",
    text:"",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaBlogger className="commonIcons" />,
      heading: "Blog App",
      link: "https://www.anlakshya.tech/",
      text:
        "developed a Anlakshya-Blog App using MERN Stack where Admin can maintain blog-writers and Blog-writers can login and perform CRUD operations with their blogs and many more...",
    },
    {
      id: 2,
      icon: <FaNewspaper className="commonIcons" />,
      heading: "News App",
      link: "",
      text:
        "developed a news app using HTML, CSS, JavaScript, BootStrap, React JS and News API where you can watch Top News Headlines,Business News, Sports News and many more... ",
    },
    {
      id: 3,
      icon: <FaAddressBook className="commonIcons" />,
      heading: "iNoteBook",
      link: "",
      text:
        "developed a iNoteBook-Your Own Digital Notebook using  React JS and Node Js where You can login and then You can perform CRUD operation with your own notes."
    },
    {
      id: 4,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Covid-19 Predictor",
      link: "",
      text:
        "developed a Covid-19 Predictor using Flask and Machine Learning Algorithm where You can predict the probability of getting Infacted from Covid-19 after entering some medical values.",
    },
    {
      id: 5,
      icon: <FaShoppingBag className="commonIcons" />,
      heading: "Shooping APP",
      link: "",
      text:
        "developed a Shooping APP using  SpringBoot and Thymleaf where You can login or create your own account and then You can buy or add items  into your cart.",
    },
    // {
    //   id: 5,
    //   icon: <FaFileVideo className="commonIcons" />,
    //   heading: "Video Editing",
    //   text:
    //     "Lorem Ipsum is simply dummy text of the printing typesetting\
    //     industry. simply dummy",
    // },
    // {
    //   id: 6,
    //   icon: <FaSearchDollar className="commonIcons" />,
    //   heading: "SEO Expert",
    //   text:
    //     "Lorem Ipsum is simply dummy text of the printing typesetting\
    //     industry. simply dummy",
    // },
  ]);
  return (
    <div className="services" id="projects">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <a href={info.link} target = "_blank" rel = "noopener noreferrer" style={{textDecoration:"none",color:"inherit"}}>
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
