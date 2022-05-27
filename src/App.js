import './App.css';
import c from "./components/Common/Common.module.css"
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';
import Navbar from './components/Navbar/Navbar';
import PeopleContainer from './components/People/PeopleContainer';
import HolderContainer from './components/Holder/HolderContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import OnlineContainer from './components/Online/OnlineContainer';
import FollowContainer from './components/Follow/FollowContainer';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProfileContainer from './components/Profile/ProfileContainer';
import EditProfileContainer from './components/Profile/ProfileInfo/EditProfileContainer';
import {isInitialized} from "./components/redux/app-reducer";
import {connect} from "react-redux";
import {useEffect} from 'react';

const App = (props) => {
    useEffect(() => {
        props.isInitialized();
      },[]);

    return (
    <Router>    
        <div className="commonWrapper">
            <HeaderContainer/>
            <div className={c.wrapper}>
                <div className={c.centralPart}>
                    <div className={c.aside}>                    
                        <Navbar/>
                        <OnlineContainer />      
                    </div>                
                    <div className={c.wrapper__content}>
                        <Routes>
                            <Route exact path="/profile" element={<ProfileContainer />} />
                            <Route path="/profile/:userId" element={<ProfileContainer />} />
                            <Route path="/profile-edit" element={<EditProfileContainer />} />
                            <Route path="/holder/:userId" element={<HolderContainer />} />
                            <Route path="/people" element={<PeopleContainer />} />
                            <Route exact path="/messages" element={<MessagesContainer />} />
                            <Route path="/messages/:id" element={<MessagesContainer />} />
                            <Route path="/news" element={<News/>} />
                            <Route path="/music" element={<Music/>} />
                            <Route path="/settings" element={<Settings/>} />
                            <Route path="/login" element={<Login/>} />
                        </Routes>
                    </div>
                    <div className={c.follow__bar}>
                        <FollowContainer />
                    </div>
                </div>
            </div>                  
            <FooterContainer/>
        </div>                
    </Router>);        
}

const mapStateToProps = (state) => ({
    initialization: state.app.initialization
})

export default connect(mapStateToProps, {isInitialized})(App)
