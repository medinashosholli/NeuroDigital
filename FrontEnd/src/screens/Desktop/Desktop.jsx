import React, { useEffect, useState } from 'react';
import { PatientHistory } from "../../components/PatientHistory";
import { FilterButton } from "../../components/FilterButton";
import { CategoryTitle } from "../../components/CategoryTitle";
import { PatientList } from "../../components/PatientList";
import "./style.css";



export const Desktop = () => {
  const [patient, setPatient] = useState([]);
  const [history, setHistory] = useState([]);
  const [currentPatient, setCurrentPatient] = useState({});
  const [lastNoteId, setNoteId] = useState(-1);


const [AllFilter, setAllFilter] = useState(true);
const [AllFilterColor, setAllFilterColor] = useState('#2a1a37');
const [AllFilterTextColor, setAllFilterTextColor] = useState('#ffffff');
const [WaitingFilter, setWaitingFilter] = useState(false);
const [WaitingFilterColor, setWaitingFilterColor] = useState('#f6f6f6');
const [WaitingFilterTextColor, setWaitingFilterTextColor] = useState('#000000');
const [AnsweredFilter, setAnsweredFilter] = useState(false);
const [AnsweredFilterColor, setAnsweredFilterColor] = useState('#f6f6f6');
const [AnsweredFilterTextColor, setAnsweredFilterTextColor] = useState('#000000');

async function onSubmitClicked(event){
  var txtArea = document.getElementById("noteInput");
  console.log(txtArea.value); 

  if(!(txtArea.value.length>0)) {
    return
  }

  const url = 'http://localhost:3000/insert/patientshistory'; // Replace with your API endpoint

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        "ID": lastNoteId+1,
        "NoteContent": txtArea.value,
        "DoctorID": 8,
        "PatientPhoneNumber": currentPatient.PhoneNumber
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('Response:', responseData);

  } catch (error) {
    console.error('Error:', error);
  }

  txtArea.value = "";

  fetch('http://localhost:3000/get/patientshistory?PatientPhoneNumber='+ currentPatient.PhoneNumber)
  .then(response => response.json())
  .then(data => {
      setHistory(data);
      setNoteId(data[data.length-1].ID);
  })
  .catch(error => console.error('Error fetching patients:', error));
}

function OnPatientClicked(PhoneNumber){
  var PatientFound = patient.find(obj => obj.PhoneNumber == PhoneNumber)
  setCurrentPatient(PatientFound);
  
  fetch('http://localhost:3000/get/patientshistory?PatientPhoneNumber='+ PatientFound.PhoneNumber)
  .then(response => response.json())
  .then(data => {
      setHistory(data);
      setNoteId(data[data.length-1].ID);
  })
  .catch(error => console.error('Error fetching patients:', error));

}

function OnFilterClicked(FilterString){
  if (FilterString == 'All' ){
    setAllFilter(true);
    setAllFilterColor('#2a1a37');
    setAllFilterTextColor('#ffffff');

    setWaitingFilter(false);
    setWaitingFilterColor('#f6f6f6');
    setWaitingFilterTextColor('#000000');

    setAnsweredFilter(false);
    setAnsweredFilterColor('f6f6f6');
    setAnsweredFilterTextColor('#000000');

      fetch('http://localhost:3000/get/patients')
        .then(response => response.json())
        .then(data => {
            setPatient(data); // Set the first patient from the fetched data
        })
        .catch(error => console.error('Error fetching patients:', error));
    
  }
  else if(FilterString == 'Waiting for response'){
    setAllFilter(false);
    setAllFilterColor('#f6f6f6');
    setAllFilterTextColor('#000000');

    setWaitingFilter(true);
    setWaitingFilterColor('#2a1a37');
    setWaitingFilterTextColor('#ffffff');

    setAnsweredFilter(false);
    setAnsweredFilterColor('#f6f6f6');
    setAnsweredFilterTextColor('#000000');

    fetch('http://localhost:3000/get/patients?FlowStatus=Pending%20Doctor')
        .then(response => response.json())
        .then(data => {
            setPatient(data); // Set the first patient from the fetched data
        })
        .catch(error => console.error('Error fetching patients:', error));

  }
  else if(FilterString == 'Answered'){
    setAllFilter(false);
    setAllFilterColor('#f6f6f6');
    setAllFilterTextColor('#000000');

    setWaitingFilter(false);
    setWaitingFilterColor('#f6f6f6');
    setWaitingFilterTextColor('#000000');

    setAnsweredFilter(true);
    setAnsweredFilterColor('#2a1a37');
    setAnsweredFilterTextColor('#ffffff');

    fetch('http://localhost:3000/get/patients?FlowStatus=Pending%20Patient')
        .then(response => response.json())
        .then(data => {
            setPatient(data); // Set the first patient from the fetched data
        })
        .catch(error => console.error('Error fetching patients:', error));


  }
}  

  useEffect(() => {// ONly executed on first run
    fetch('http://localhost:3000/get/patients')
      .then(response => response.json())
      .then(data => {
          setPatient(data); 
          setCurrentPatient(data[0]);

          fetch('http://localhost:3000/get/patientshistory?PatientPhoneNumber='+ data[0].PhoneNumber)
          .then(response => response.json())
          .then(data => {
              setHistory(data); 
              setNoteId(data[data.length-1].ID);

          })
          .catch(error => console.error('Error fetching patients:', error));

      })
      .catch(error => console.error('Error fetching patients:', error));
      

  }, []);

  return (
    <div className="desktop">
      <div className="div-2">
        
        <PatientList data = {patient} PatientClicked={OnPatientClicked}/>
       
        <div className="overlap-group">
          <div className="label">
            <div className="field">
              <div className="label-2">
              <textarea type="text" id="noteInput" rows="6" cols="50" placeholder="Write your note here">
                </textarea>
                </div>
            </div>
            <button className="button-new">
              <div className="text-wrapper-8" onClick={onSubmitClicked}>Submit</div>
            </button>
          </div>
          <div className="label-3">
            <div className="text-wrapper-9">New Note</div>
          </div>
          <div className="text-wrapper-10">Current Patient: {`${currentPatient.FullName}`}</div>
        </div>
        <div className="overlap">
        </div>
        <div className="overlap-2">
          <CategoryTitle
            className="category-title-instance"
            divClassName="category-title-2"
            size="large"
            title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Patient’s History"
          />
        </div>
        <PatientHistory data = {history}/>
      
        <div className="element-tab-list">
        
          <FilterButton FilterText = "All" 
                        FilterState = {AllFilter}
                        FilterColor= {AllFilterColor}
                        FilterTextColor= {AllFilterTextColor}
                        OnFilterChange={OnFilterClicked}/>
          <FilterButton FilterText = "Waiting for response" 
                        FilterState = {WaitingFilter}
                        FilterColor= {WaitingFilterColor}
                        FilterTextColor= {WaitingFilterTextColor}
                        OnFilterChange={OnFilterClicked}/>
          <FilterButton FilterText = "Answered" 
                        FilterState = {AnsweredFilter}
                        FilterColor= {AnsweredFilterColor}
                        FilterTextColor= {AnsweredFilterTextColor}  
                        OnFilterChange={OnFilterClicked}/>
       
        </div>
      </div>
    </div>
  );
};
