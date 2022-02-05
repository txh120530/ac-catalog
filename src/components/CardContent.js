import React from 'react';
import ReactTooltip from 'react-tooltip';

import {useCategory, useItems, useItemsUpdate, useModal, useModalToggle} from '../store/ThemeContext.js';

import { FaSearch, FaCheck, FaPlus, FaTimes } from "react-icons/fa";

import Modal from '../ui/Modal';
import ModalContent from '../components/ModalContent';


const CardContent = (data) => {
	  const category = useCategory();
    const items = useItems();
    const updateItems = useItemsUpdate();
    const modal = useModal();
    const modalToggle = useModalToggle();


	  const info = data.values[1];


    const handleClick = (name) => {
      updateItems(name);
    }

    const toggleModal = (name) => {
      modalToggle(name);
    }

    const checkItem = (item) => {
      return items.includes(item);
    }

    const Icons = ({name}) => {
      return (<>
        <FaSearch data-tip="More Info"  style={{ color: '#81F1F7'}} onClick={() => toggleModal(name)} />
         <br/>
         { checkItem(name) == true ? <i><FaTimes data-tip="Remove from Collection" style={{ color: '#81F1F7'}} onClick={() => handleClick(name)} /></i> : <i><FaCheck  data-tip="I Have This!" style={{ color: '#81F1F7'}} onClick={() => handleClick(name)}/></i>}
         </>);
    };

const renderSwitch =(param) => {
  switch(param) {
    case 'category-fish':
      return (
      	<>
        <div className={`text-center ${items.includes(info["file-name"]) ? "active" : ""}`}>
          <Icons name={info["file-name"]}/>
      		<img className="mx-auto" src={info.icon_uri} />
      		<h3 className="font-bold capitalize">{info.name["name-USen"]}</h3>
      	</div>

        {modal !== null && modal === info["file-name"] ? <Modal infoID={info["file-name"]}><ModalContent type="fish" info={info}> </ModalContent></Modal> : null}
      	</>
        );
    case 'category-sea':
      return (
        <>
        <div className={`text-center ${items.includes(info["file-name"]) ? "active" : ""}`}>
          <Icons name={info["file-name"]}/>
          <img className="mx-auto" src={info.icon_uri} />
          <h3 className="font-bold capitalize">{info.name["name-USen"]}</h3>
        </div>

        {modal !== null && modal === info["file-name"] ? <Modal infoID={info["file-name"]}><ModalContent type="sea" info={info}> </ModalContent></Modal> : null}
        </>
      	);

    case 'category-bugs':
      return (
        <>
        <div className={`text-center ${items.includes(info["file-name"]) ? "active" : ""}`}>
          <Icons name={info["file-name"]}/>
          <img className="mx-auto" src={info.icon_uri} />
          <h3 className="font-bold capitalize">{info.name["name-USen"]}</h3>
        </div>

        {modal !== null && modal === info["file-name"] ? <Modal infoID={info["file-name"]}><ModalContent type="bugs" info={info}> </ModalContent></Modal> : null}
        </>
      	);
    case 'category-fossils':
      return (
        <>
        <div className={`text-center ${items.includes(info["file-name"]) ? "active" : ""}`}>
          <Icons name={info["file-name"]}/>
          <img className="mx-auto" src={info.image_uri} />
          <h3 className="font-bold capitalize">{info.name["name-USen"]}</h3>
        </div>

        {modal !== null && modal === info["file-name"] ? <Modal infoID={info["file-name"]}><ModalContent type="fossils" info={info}> </ModalContent></Modal> : null}
        </>
      	);
    case 'category-art':
      return (
        <>
        <div className={`text-center ${items.includes(info["file-name"]) ? "active" : ""}`}>
          <Icons name={info["file-name"]}/>
          <img className="mx-auto" src={info.image_uri} />
          <h3 className="font-bold capitalize">{info.name["name-USen"]}</h3>
        </div>

        {modal !== null && modal === info["file-name"] ? <Modal infoID={info["file-name"]}><ModalContent type="art" info={info}> </ModalContent></Modal> : null}
        </>
      	);
    default:
      return null;
  }
};



    return (
       <>
       	{renderSwitch(category)}
        <ReactTooltip  place="right" globalEventOff='hover' effect="solid"  />
       </> 
    );
};

CardContent.displayName = 'CardContent';

export default CardContent;
