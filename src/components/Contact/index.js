import React from "react";
import "./style.css";
import Phone from "./smartphone-call.png";
import Facebook from "./facebook.png";
import Instagram from "./instagram.png";
import Position from "./position.png";

function Contacts() {
    return (
       <div className="row contact-kudri justify-content-center">
           <div className="container">
               <div className="row">
                <div className="col-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.814030017009!2d-104.9704926846271!3d39.65389967946106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c809be0920fbd%3A0x9670ad62217ea22!2s1610%20E%20Girard%20Pl%20%23104%2C%20Englewood%2C%20CO%2080113!5e0!3m2!1sen!2sus!4v1567467203443!5m2!1sen!2sus" className="mt-5 mb-5" >
                    </iframe>
                </div>
                <div className="col-4">
                    <ul class="list-unstyled">
                        <li class="media">
                            <img src={Phone} class="mr-3" alt="Phone"/>
                            <div class="media-body">
                            <h5 class="mt-0 mb-1">To schedule appoinment please give me a call!</h5>
                            <h6 className="mt-0 mb-1">(720)-445-6060</h6>
                            </div>
                        </li>
                        <li class="media">
                            <img src={Position} class="mr-3" alt="Location"/>
                            <div class="media-body">
                            <h5 class="mt-0 mb-1">List-based media object</h5>
                            </div>
                        </li>
                        <li class="media">
                            <img src={Instagram} class="mr-3" alt="Instagram"/>
                            <div class="media-body">
                            <h5 class="mt-0 mb-1">List-based media object</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
           </div>
       </div>
        
    )
}

export default Contacts;