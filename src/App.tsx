import "./App.scss";
import Notification from "./components/notification/Notification";
import PlatformInfo from "./components/platform-info/PlatformInfo";
import Signup from "./components/signup/Signup";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="pageContent">
          <Notification />
          <PlatformInfo />
          <Testimonials />
        </div>

        <Signup />
      </div>
    </>
  );
}

export default App;
