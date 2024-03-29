import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BossesContextProvider from './components/contexts/BossesContext';
import AuthContextProvider from './components/contexts/AuthContext';
import firebase from './components/firebase';
import './App.scss';
import Home from './components/Home/Home';
import BossList from './components/Full Boss List/BossList';
import BossPage from './components/Full Boss List/BossPage';
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/Profile';
import Shouts from './components/Shouts';
import ScrollToTop from './components/ScrollToTop';


const App = () => {

    return (
        <div>
            <BossesContextProvider>
                <AuthContextProvider>
                    <BrowserRouter>
                        <ScrollToTop>
                        <Fragment>
                            <Route path="/" component={Home} exact />
                            <Route path="/profile" component={() => <Profile />} />
                            <Route path="/bosses" component={BossList} exact />
                            <Route path="/bosses/:id" component={BossPage} />
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            <Route path="/credits" component={Shouts} />
                        </Fragment>
                        </ScrollToTop>
                    </BrowserRouter>
                </AuthContextProvider>
            </BossesContextProvider>
        </div>
    )

}

export default App