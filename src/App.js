import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Topbar from "./Topbar";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Profile />
    </div>
  );
}

export default App;
