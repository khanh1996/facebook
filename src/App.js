import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App(props) {
    return (
        <>
            <Header />
            <HomeGuest />
            <Footer />
        </>
    );
}

export default App;
