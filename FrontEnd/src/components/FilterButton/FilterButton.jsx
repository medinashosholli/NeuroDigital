
import React, { useState } from 'react';
import PropTypes from "prop-types";
import "./FilterButton.css";


export const FilterButton = ({
    FilterText = 'defaultText',
    FilterState = false, FilterColor = '#ffffff', FilterTextColor = '#000000',
    OnFilterChange
}) => {
  
     // Function to change the background color when the button is clicked
     const handleClick = () => {
       OnFilterChange(FilterText);
     };

    
  
    return (
            <div className="pill"
            onClick={handleClick} 
            style={{ background: FilterColor, }}
            >
              <div className="text-wrapper-11"
              style={{ color: FilterTextColor }}
              >{FilterText}</div>
            </div>
            
    );
  };
  
FilterButton.propTypes = {
    FilterText: PropTypes.string,
    FilterState: PropTypes.bool, FilterColor: PropTypes.string, FilterTextColor: PropTypes.string,
    OnFilterChange: PropTypes.func,
    
  };