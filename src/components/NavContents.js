import { useState, useEffect } from 'react';
import moment from 'moment';
import {useTheme, useThemeUpdate, useFilter} from '../store/ThemeContext.js';
import CurrentTime from './CurrentTime';
import {FaCheck, FaBars} from 'react-icons/fa';
import styles from './Header.module.css';
import {convertToMonth, convertToHour} from '../utils.js'

const NavContents = ({ className }) => {

    const [checked, setChecked] = useState(false);


	const theme = useTheme();
	const toggleTheme = useThemeUpdate();
	const lightToggle = theme === true ? styles.active : null;

	const {month, time, hemisphere, setFilter} = useFilter();
	const [currTime, setCurrTime] = useState(moment()); 
	const [currHour, setCurrHour] = useState(Number(moment().format("H"))); 


	const handleMonth = (event) => {
	const newMonth = Number(event.target.value);
	setFilter({month: newMonth});
	}
	const handleTime = (event) => {
	const newTime = Number(event.target.value);
	setFilter({time: newTime});
	}
	const handleHemisphere = (event) => {

	const newHemisphere = event.target.value;
	setFilter({hemisphere: newHemisphere});	
	}

	const handleCurrent = (event) => {
	    setChecked(!checked);  
	}

	useEffect(() => {
	    if(checked == true){

	    	const newMonth = Number(moment().format("M"));
		  	setCurrHour( Number(moment().format("H")) );
		    setFilter({month: newMonth, time: currHour});

    	  const timer = setTimeout(() => {
    	  	setCurrTime(moment());
		    console.log(time)
		  }, 30000);
		  return () => clearTimeout(timer);
	    } else {
	    	console.log("Removing");
	    	const newMonth = -1;
		    const newTime = -1;
		    setFilter({month: newMonth, time: newTime});
	    }
	}, [currTime, checked])




    return (
      <div>

          <button className={`${styles.lightMode} ${lightToggle}`} onClick={toggleTheme}>{theme === true ? 'Dark Mode' : 'Light Mode'}</button>

      <div className="inputs">
      <select className={checked == true ? 'disabled' : null} onChange={handleMonth}>

		<option value="-1">Select a Month</option>
      	<option value="1">January</option>
		<option value="2">February</option>
		<option value="3">March</option>
		<option value="4">April</option>
		<option value="5">May</option>
		<option value="6">June</option>
		<option value="7">July</option>
		<option value="8">August</option>
		<option value="9">September</option>
		<option value="10">October</option>
		<option value="11">November</option>
		<option value="12">December</option>
      </select>


	    <select  className={checked == true ? 'disabled' : null} onChange={handleTime}><option value="-1">Select a Time</option>
<option value="1">1:00</option>
<option value="2">2:00</option>
<option value="3">3:00</option>
<option value="4">4:00</option>
<option value="5">5:00</option>
<option value="6">6:00</option>
<option value="7">7:00</option>
<option value="8">8:00</option>
<option value="9">9:00</option>
<option value="10">10:00</option>
<option value="11">11:00</option>
<option value="12">12:00</option>
<option value="13">13:00</option>
<option value="14">14:00</option>
<option value="15">15:00</option>
<option value="16">16:00</option>
<option value="17">17:00</option>
<option value="18">18:00</option>
<option value="19">19:00</option>
<option value="20">20:00</option>
<option value="21">21:00</option>
<option value="22">22:00</option>
<option value="23">23:00</option>
<option value="0">24:00</option>
      </select>

      <select onChange={handleHemisphere}>
	<option value="northern">Northern Hemisphere</option>
	<option value="southern">Southern Hemisphere</option>
</select>

<label className="checkBox">
        <input type="checkbox"  checked={checked} onChange={handleCurrent}/>
        <span className="inline-block v-middle">Show Only Available Now</span>

        <span className="checkMark">{<FaCheck/>}</span>
</label> 
</div>


      </div>  
    );
};

NavContents.displayName = 'NavContents';

export default NavContents;
