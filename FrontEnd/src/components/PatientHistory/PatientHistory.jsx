
import PropTypes from "prop-types";
import React from "react";
import { ActivityCard } from "../ActivityCard";
import "./style.css";


export const PatientHistory = ({ data }) => {
  return (
    
    <div className="PatientHistoryHolder">
        
    {data.map((item,index) => (
        <div  key = {item._id} style = {{position:"absolute",top:`${2+index*200}px`}} >
        <ActivityCard 
            checkbox="on"
            className="activity-card-instance"
            description={`Doctor ${item.DoctorID}: ${item.NoteContent}`}
            description1="on"
            divClassName="activity-card-2"
            hasLink={false}
            link="on"
            linkClassName="activity-card-2"
            notes="off"
            tag="off"
            team="off"
            title={`Note No${item.ID}`}
            visible={false}
        />
        </div>
    ))}
    </div>
  );
};

PatientHistory.propTypes = {
  data: PropTypes.array,
};