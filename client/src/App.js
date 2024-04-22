import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";

import NavBar from "./components/NavBar/navBar";
import MobileNavigationBar from "./components/Shared/MobileNavigationBar/mobileNavigationBar";

import Home from "./pages/Home/home";
import Auth from "./pages/Auth/auth";
import PostDetailsWithProfile from "./pages/PostDetailsWithProfile/postDetailsWithProfile";
import ProfilePage from "./pages/ProfilePage/profilePage";
import Settings from "./pages/Settings/settings";
import Notification from "./pages/Notification/notification";
import Search from "./pages/Search/search";
import Messages from "./pages/Messages/messages";
import ProfileEdit from "./pages/ProfilePage/ProfileEdit/profileEdit";
import UserFollowerFollowing from "./pages/UserFollowerFollowing/userFollowerFollowing";
import NotFound from "./components/NotFound/notFound";
import LandingPage from "./pages/LandingPage/landingPage";
import ForgotPassword from "./pages/ForgotPassword/forgotPassword";
import PasswordConfirmation from "./pages/ForgotPassword/passwordConfirmation";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReportPasswordRequest from "./pages/ForgotPassword/reportPasswordRequest";

const App = () => {
  let user = JSON.parse(localStorage.getItem("profile"));
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    if (user) setIsAuth(false);
    else setIsAuth(true);
  }, [user]);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          {/* <Route path="/" exact component={() => <Redirect to="/feeds" />} /> */}
          <Route
            path="/auth"
            exact
            component={() =>
              !user ? (
                <Auth isAuth={isAuth} setIsAuth={setIsAuth} />
              ) : (
                <Redirect to="/feeds" />
              )
            }
          />
          <Route path="/feeds" exact component={Home} />
          <Route path="/post" exact component={PostDetailsWithProfile} />
          <Route path="/profile/details" exact component={ProfilePage} />
          <Route path="/profile/edit" exact component={ProfileEdit} />
          <Route path="/reset-account" exact component={ForgotPassword} />
          <Route
            path="/reset-password"
            exact
            component={PasswordConfirmation}
          />
          <Route
            path="/report-password"
            exact
            component={ReportPasswordRequest}
          />
          <Route
            path="/profile/following-followers/details"
            exact
            component={UserFollowerFollowing}
          />
          <Route path="/profile/settings" exact component={Settings} />
          <Route path="/chats" exact component={Messages} />
          <Route path="/notification" exact component={Notification} />
          <Route path="/search" exact component={Search} />
          <Route path="*" exact component={NotFound} />
        </Switch>
        {!isAuth && <MobileNavigationBar />}
      </BrowserRouter>
    </>
  );
};

export default App;
