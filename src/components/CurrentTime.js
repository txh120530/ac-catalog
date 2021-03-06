import React, {useState, useEffect} from 'react';
import moment from 'moment';

const CurrentTime = ({ className }) => {
	const [currTime, setCurrTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a')); 

useEffect(() => {
  const timer = setTimeout(() => {
  	setCurrTime(moment().format('MMMM Do YYYY,[\r\n] h:mm:ss a'))
  }, 1000);
  return () => clearTimeout(timer);
}, [currTime]);

    return (
        <div className="currTime">
        {currTime}
        </div>
    );
};

CurrentTime.displayName = 'CurrentTime';

export default CurrentTime;
