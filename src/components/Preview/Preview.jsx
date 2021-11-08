import React from "react";
import './Preview.css';
import bckgImg from '../../images/bckgImg.gif';

const Preview = () => {
  return (
      <div className="prewiev-body">
       <img src={bckgImg} alt="backgroundIMG" className="backgr-img"/>
       

      </div>
  );  
}

export default Preview;