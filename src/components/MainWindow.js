import {useEffect, useState} from 'react';
import {useCategory, useFilter} from '../store/ThemeContext.js';

import axios from 'axios';

import Card from '../ui/Card'
import CardContent from './CardContent'


const MainWindow = ({ className }) => {
  const category = useCategory();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const {month, time, hemisphere} = useFilter();

const renderSwitch =(param) => {
  switch(param) {
    case 'category-fish':
      return 'fish';
    case 'category-sea':
      return 'sea';
    case 'category-bugs':
      return 'bugs';
    case 'category-fossils':
      return 'fossils';
    case 'category-art':
      return 'art';
    default:
      return null;
  }
};


const filterTime = (item) =>{
  if (time == -1){
    return true
  }
  if( item[1].availability["time-array"].includes(time)){
    return true
  }
}

const filterMonth = (item) => {
  if (month == -1){
    return true; 
  }
  if(hemisphere === 'northern'){
    if(item[1].availability["month-array-northern"].includes(month) ){
      return filterTime(item);
    }
  } else {
      if(item[1].availability["month-array-southern"].includes(month)){
      return filterTime(item);
      }
  }
  return false
}




	useEffect(async () => {
			if(category !== null){

	  	setLoading(true);
	  	setData({});

	    const result = await axios(
	      `https://acnhapi.com/v1/${renderSwitch(category)}/`,
	    );

        setLoading(false);
	    setData(result.data);
    }
  }, [category]);


    return (
        <div className="flex justify-around flex-wrap">
      {Object.entries(data).map((d, i) => {
        if(category == "category-fish" || category == "category-sea" || category == "category-bugs"){
          if(filterMonth(d) == true){
            return <Card key={d[1].id}>
            <CardContent values={d} />
            </Card>;
          }         
        } else {
          return <Card key={d[1].id}>
          <CardContent values={d} />
        </Card>;
        }
          
      })}

        {loading ? <img className="mx-auto my-4" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" /> : null}
        </div>
    );
};

MainWindow.displayName = 'MainWindow';

export default MainWindow;
