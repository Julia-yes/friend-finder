import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import PeopleContainer from './components/People/PeopleContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import OnlineContainer from './components/Online/OnlineContainer';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProfileContainer from './components/Profile/ProfileContainer';
import {isInitialized} from "./components/redux/app-reducer";
import {connect} from "react-redux";

class App extends React.Component {
    componentDidMount() {
        this.props.isInitialized()
    }
    render() {
        return (
        <Router>
            <div className="page">
                <div className="wrapper">
                    <HeaderContainer/>
                    <div className="aside">
                        <Navbar/>
                        <OnlineContainer />
                    </div>
                    <div className="wrapper__content">
                        <Routes>
                            <Route path="/profile/:userId" element={<ProfileContainer />} />
                            <Route path="/people" element={<PeopleContainer />} />
                            <Route path="/messages/*" element={<MessagesContainer />} />
                            <Route path="/news" element={<News/>} />
                            <Route path="/music" element={<Music/>} />
                            <Route path="/settings" element={<Settings/>} />
                            <Route path="/login" element={<Login/>} />
                        </Routes>
                    </div>
                </div>
            </div>
            
        </Router>
    );
    }
    
}

const mapStateToProps = (state) => ({
    initialization: state.app.initialization
})

export default connect(mapStateToProps, {isInitialized})(App)
