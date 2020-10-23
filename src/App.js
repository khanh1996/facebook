import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/about/About';
import Terms from './components/terms/Terms';

function App(props) {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/terms">
                    <Terms/>
                </Route>
                <Route path="/about-us">
                    <About/>
                </Route>
                <Route path="/">
                    <HomeGuest/>
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
