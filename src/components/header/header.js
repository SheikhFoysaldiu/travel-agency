import '../../App.css'
import Typewriter from 'typewriter-effect';

const Header = () => {

    

    return(
        
    <header>

        <div className="container">
            <div className="header-image">
                <img className="active" src={require("../../assets/bdairlines.jpg")} alt="carousel" />
                <img src={require("../../assets/plane-2.jpg")} alt="carousel"  />
                <img src={require("../../assets/plane-3.jpg")} alt="carousel" />
            </div>
            <div className="header-wrapper">
                <h2 className="header-title">Probashi Tours And Travels International</h2>

                <p className="header-description">IATA Sub-Agents Airlines Ticket</p>
  
            </div>

        </div>

    </header>
    
    )
}

export default Header;