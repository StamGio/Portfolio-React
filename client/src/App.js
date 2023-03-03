import "./App.css";
import PortofolioContainer from "./Portofoliocontainer/PortofolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// newww

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortofolioContainer />
    </div>
  );
}

export default App;
