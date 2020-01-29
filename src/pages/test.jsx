import React,{ useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lan from "../pages/language";
import Pop from "../pages/popup";
import Themep,{colorProcess} from "../pages/themeprocess";
const t=11;
function Test(){
    const[trky,strky]=useState(55);
    function hit(){
        //alert("a.target.tkey")
      strky(44);
    }

return(
    <div>
<Tx tkey={trky} fac={hit}></Tx>
<Tx tkey={trky} fac={hit}></Tx>
<Tx tkey={trky} fac={hit}></Tx>
</div>
);
}
function Tx(props){
    const[ur,seUr]=useState(0);
    function shoot(e){
        alert(e.target.nodeName)
      if(document.getElementsByClassName('none').length>0)
      document.getElementsByClassName('none')[0].className = "some";
      e.target.className="none";
      }

    return(
        <div>
    <button className="some" value={t} onClick={e => shoot(e)}>Take the shot!</button>
    
    </div>
    );
}

export default Test;