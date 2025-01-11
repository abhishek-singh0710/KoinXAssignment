import Cards from "./cards"
import "./cards.css"
const DisplayCards = () => {
    return (
        <div className="footer">
        
        {/* <h1 style={{position: "absolute"}}>Title</h1> */}
        <Cards title="You May Also Like" />
        <Cards title="Trending Coins" />
        
        </div>
    )
}

export default DisplayCards