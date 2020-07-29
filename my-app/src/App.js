import React, {Suspense} from 'react';
import './App.css';
import Naviganion from "./components/Navigation/Navigation";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
//import DialogsConteiner from "./components/Dialogs/DialogsContainer";
//import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
//import LoginPage from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redax/app-reducer";
import Prealoder from "./components/common/Preloader/Preloader";
import store from "./Redax/redux_store";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer")); // Lazy-loaded
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer")); // Lazy-loaded
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer")); // Lazy-loaded
const LoginPage = React.lazy(() => import("./components/Login/Login")); // Lazy-loaded

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Prealoder/>
        }

        return (
            <div className='app-wriper'>
                <HeaderContainer/>
                <Naviganion/>
                <div className='app-wriper-content'>
                    <Route
                        path='/Dialogs'
                        render={() => <Suspense fallback={<div>Loading...</div>}>
                            <DialogsContainer/>
                        </Suspense>

                        }
                    />
                    <Route
                        path='/Profile/:userId?'
                        render={() => <Suspense fallback={<div>Loading...</div>}>
                            <ProfileContainer/>
                        </Suspense>
                        }
                    />
                    <Route
                        path='/Users'
                        render={() => <Suspense fallback={<div>Loading...</div>}>
                            <UsersContainer/>
                        </Suspense>}
                    />
                    <Route
                        path='/login'
                        render={() => <Suspense fallback={<div>Loading...</div>}>
                            <LoginPage/>
                        </Suspense>}
                    />
                </div>
            </div>
        );

    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
let ContainerApp = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <ContainerApp/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}
export default MainApp;
