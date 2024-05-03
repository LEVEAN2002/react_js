import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { db } from "../test/Sever";

function Donghonam(){
 
    const{id}=useParams() ;
    


     return(
      <>
      <div className="donghonam">
      
        <div><img className="img_detail" src=''/></div>
        <div>
             
              <div className=""></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
        </div>
      </div>
      </>
    )
}
export default Donghonam;