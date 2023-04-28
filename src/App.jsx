import {Route,BrowserRouter as Router,Routes} from "react-router-dom";
import './App.css';
import Account from './pages/Account';
import FeedSettings from "./pages/FeedSettings";
import Notifications from './pages/Notifications';
import Profile from "./pages/Profile";
import SafetyAndPrivacy from "./pages/SafetyAndPrivacy";
import Wrapper from "./pages/Wrapper";


function App() {
  return (
    <div className="App">

<Router>

  <Wrapper/>
  <Routes>
    <Route path='/' element={<Profile/>}/>
    <Route path='/account' element={<Account/>}/>
    <Route path='/SafetyandPrivacy' element={<SafetyAndPrivacy/>}/>
    <Route path='/feedsettings' element={<FeedSettings/>}/>
    <Route path='/notifications' element={<Notifications/>}/>
  </Routes>

</Router>

    </div>
  );
}

export default App;
