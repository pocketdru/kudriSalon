import React from "react";
import "./Home.css";
import Navbar from "../components/Navs";
import Jumbotron from "../components/Jumbotron";
import Review from "../components/Review";
import Contacts from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="container">
            <Navbar/>
            <Jumbotron/>
            <Review/>
            <Contacts/>
            <Footer/>
        </div>
    )
}
 
export default Home;