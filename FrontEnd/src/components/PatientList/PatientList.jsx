
import PropTypes from "prop-types";
import React from "react";
import "./style.css";


export const PatientList = ({
  data,
  PatientClicked
 }) => {

  const handleClick = (event) => {
    PatientClicked(event.currentTarget.id);
  };

  return (

    <div className="PatientHolder">
        
    {data.map((item,index) => (
        <div className="profile" id={item.PhoneNumber} key = {item._id} style = {{top:`${index*400}px`}}
        onClick={handleClick} 
        >
          <div className="information">
            <div className="div-3">
              <div className="text-wrapper-5">Full Name</div>
              <div className="info">
                <div className="text-wrapper-6">{item.FullName}</div>
                <img className="icon-chevron-right" alt="Icon chevron right" src="/img/icon-chevron-right-7.png" />
              </div>
            </div>
            <div className="div-3">
              <div className="text-wrapper-5">Occupation</div>
              <div className="info">
                <div className="text-wrapper-6">{item.Profession}</div>
                <img className="img" alt="Icon chevron right" src="/img/icon-chevron-right-7.png" />
              </div>
            </div>
            <div className="div-3">
              <div className="text-wrapper-5">Email</div>
              <div className="info">
                <div className="text-wrapper-6">{item.Email}</div>
                <img className="icon-chevron-right-2" alt="Icon chevron right" src="/img/icon-chevron-right-7.png" />
              </div>
            </div>
            <div className="div-3">
              <div className="text-wrapper-5">Status</div>
              <div className="info-2">
                <p className="text-wrapper-6">{item.FlowStatus}</p>
                <img className="icon-chevron-right-3" alt="Icon chevron right" src="/img/icon-chevron-right-7.png" />
              </div>
            </div>
          </div>
          <div className="header">
            <div className="text-wrapper-7">Patient’s ID: {item.PhoneNumber}</div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

PatientList.propTypes = {
  data: PropTypes.array,
  PatientClicked: PropTypes.func,
};

