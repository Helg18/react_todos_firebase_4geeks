// Main import
import React from 'react';

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

// styles
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Body></Body>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
