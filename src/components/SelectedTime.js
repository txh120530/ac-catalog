import React from 'react';
import {useFilter} from '../store/ThemeContext.js';
import {convertToMonth, convertToHour} from '../utils.js'



const SelectedTime = ({ className }) => {
		const {month, time, hemisphere} = useFilter();



    return (
        <div className="currSelected">
              <small>Currently Selected</small><br />
              <span>MTH: {convertToMonth(month)}</span>, <span>HR: {convertToHour(time)}</span>, HEMIS: <span className="capitalize">{hemisphere} Hemisphere</span>
		</div>
    );
};

SelectedTime.displayName = 'SelectedTime';


export default SelectedTime;
