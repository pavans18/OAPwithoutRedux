
import Home from "./components/HomeComponent/Home";
import StudentDashboard from "./components/StudentComponet/StudentDashboard/StudentDashboard";
import AdminLogin from "./components/AdminComponent/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminComponent/AdminDashboard/AdminDashboard";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import StudentSignup from "./components/StudentComponet/StudentSignup/StudentSignup"
import StudentLogin from "./components/StudentComponet/StudentLogin/StudentLogin"



// import Header from './components/screens/Header'
// import LoginScreen from './components/screens/LoginScreen'
// import RegisterScreen from "./components/screens/RegisterScreen";
// import ProfileScreen from './screens/ProfileScreen'
// import HomeScreen from './screens/HomeScreen

function App() {
  return (
    <>


      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/AdminLogin" component={AdminLogin}></Route>
          <Route exact path="/StudentSignup" component={StudentSignup}></Route>
          <Route exact path="/AdminDashboard" component={AdminDashboard}></Route>
          <Route exact path="/StudentLogin" component={StudentLogin}></Route>
          <Route exact path="/StudentDashboard" component={StudentDashboard}></Route>



          {/* <Route path='/' element={<HomeScreen />} /> */}
          {/* <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} /> */}
          {/* <Route path='/user-profile' element={<ProfileScreen />} /> */}
        </Switch>
      </BrowserRouter>
    </>

  );

}

export default App;