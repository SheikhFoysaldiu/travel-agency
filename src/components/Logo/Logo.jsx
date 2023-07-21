import "../../App.css"
import logo from "../../assets/logo.png"
const Logo = () => {

return(
    <nav>
    <div className="container">
        <div className="nav-wrapper">
            <a href="#" className="nav-brand">
                <img src={logo} alt="travel logo" />
            </a>
            
            <a href="#" className="navbar-toggle">
                <i className="ri-menu-line"></i>
            </a>   
        </div>
    </div>
</nav> 
)
}
export default Logo;