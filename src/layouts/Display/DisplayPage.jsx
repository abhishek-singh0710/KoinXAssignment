import "./displayPage.css";
import Navbar from "../../components/navbar/Navbar";
import Home from "../Home/Home";
import DisplayCards from "../../components/cards/DisplayCards";



const DisplayPage = () => {
  return (
    <div className="display">
      <Navbar />
      <Home />
      <DisplayCards />
    </div>
  )
}

export default DisplayPage
