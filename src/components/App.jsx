import React from "react";
import ContentWraper from "./ContentWraper";
import SideBar from './SideBar';
import '../assets/css/app.css';

export default function App(){
    return(
    
        <div id='wrapper'>
            <SideBar/>
            <ContentWraper/>
        </div>
        
        
    )
}