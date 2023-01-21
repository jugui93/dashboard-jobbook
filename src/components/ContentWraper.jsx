import TopBar from "./TopBar";
import Footer from "./Footer";
import ContentRowTop from "./ContentRowTop";
import React from "react";


export default function ContentWraper(){
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            <TopBar/>
            <ContentRowTop/>
            <Footer/>
        </div>
    )
}
