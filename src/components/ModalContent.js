import React from 'react';


const renderSwitch =(param, info) => {

  switch(param) {
    case 'fish':

      return (
      	<>
      		<img className="mx-auto" src={info["image_uri"]} />
      		<h2>{info.name["name-USen"]}</h2>
      		<br />
      		<p>Nooklings Price: {info.price} bells</p>
      		<p>CJ Price: {info["price-cj"]} bells</p>
      		<br />
      		<p>Museum Info: {info["museum-phrase"]}</p>
      		<br />
      		<p>Catch Blurb: {info["catch-phrase"]}</p>
      	</>
        );
    case 'sea':
      return (
        <>
      		<img className="mx-auto" src={info["image_uri"]} />
      		<h2>{info.name["name-USen"]}</h2>
      		<br />
      		<p>Nooklings Price: {info.price} bells</p>
      		<p>CJ Price: {info["price-cj"]} bells</p>
      		<br />
      		<p>Museum Info: {info["museum-phrase"]}</p>
      		<br />
      		<p>Catch Blurb: {info["catch-phrase"]}</p>
        </>
      	);

    case 'bugs':
      return (
        <>
      		<img className="mx-auto" src={info["image_uri"]} />
      		<h2>{info.name["name-USen"]}</h2>
      		<br />
      		<p>Nooklings Price: {info.price} bells</p>
      		<p>CJ Price: {info["price-flick"]} bells</p>
      		<br />
      		<p>Museum Info: {info["museum-phrase"]}</p>
      		<br />
      		<p>Catch Blurb: {info["catch-phrase"]}</p>
        </>
      	);
    case 'fossils':
      return (
        <>
      		<img className="mx-auto" src={info["image_uri"]} />
      		<h2>{info.name["name-USen"]}</h2>
      		<br />
      		<p>Nooklings Price: {info.price} bells</p>
      		<br />
      		<p>Museum Info: {info["museum-phrase"]}</p>
        </>
      	);
    case 'art':
      return (
        <>
      		<img className="mx-auto" src={info["image_uri"]} />
      		<h2>{info.name["name-USen"]}</h2>
      		<br />
      		<p>Has Fakes: {info.hasFake == true ? "Yes" : "No"}</p>
      		<br />
      		<p>Buy Price: {info["buy-price"]} bells</p>
      		<p>Sell Price: {info["sell-price"]} bells</p>
      		<br />
      		<p>Museum Info: {info["museum-desc"]}</p>
        </>
      	);
    default:
      return null;
  }
};



const ModalContent = ({ type, info }) => {
    return (
    	<> 
     	{renderSwitch(type, info)}
    	</>
    );
};

ModalContent.displayName = 'ModalContent';


export default ModalContent;
