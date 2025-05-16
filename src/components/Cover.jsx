import React from "react";
import mavixLogo from "../images/mavix-transparent.png"; // Proper import

export default function Cover() {
    return (
        <div className="cover-container">
            <h1 className="line-1 anim-typewriter">Code<span className="spani">,</span>  Create<span className="spani">,</span>  Captivate</h1>
            <p className="pcover">Rritja e biznesit tuaj fillon këtu – me strategji inovative dhe zgjidhje të personalizuara për një prani digjitale dominuese.
            Fillo, me <span className="spani">Mavix </span>!
            </p>
           <br/>
           <a href="#kontaktz">
            <button className="btn-40">
                <span className="new">Let's talk!</span> 
                <span className="old">
                    <img src={mavixLogo} width="70px" alt="Mavix Logo" />
                </span>
            </button>
            </a>
        </div>
    );
}