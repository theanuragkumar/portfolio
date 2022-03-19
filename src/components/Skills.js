import React from "react";

const Prices = () => {
  const [header] = React.useState({
    subHeading: "Skills",
    text:
      "",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Frontend",
      price: "HTML",
    
    },
    {
      id: 2,
      heading: "Frontend",
      price: "CSS",
     
    },
    {
      id: 3,
      heading: "Frontend",
      price: "JS",
     
    },
    {
      id: 4,
      heading: "Backend",
      price: "JAVA",
     
    },
    {
      id: 5,
      heading: "Backend",
      price: "Spring",
     
    },
    {
      id: 6,
      heading: "Backend",
      price: "SpringBoot",
     
    },
    {
      id: 7,
      heading: "Devops",
      price: "Git",
     
    },
    {
      id: 8,
      heading: "Devops",
      price: "Docker",
     
    },
    {
      id: 9,
      heading: "Devops",
      price: "Kubernetes",
     
    },
  ]);
  return (
    <div className="prices" id="skills">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                  {prices.price}
                </div>
                {/* <div className="price__btn">
                  <a href="" className="btn btn-outline">
                    Purchase
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
