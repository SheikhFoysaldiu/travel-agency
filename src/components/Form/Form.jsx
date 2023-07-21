import { useContext } from "react";
import "./Form.css"
import  { useNavigate, useNavigation } from "react-router-dom";
import { UserContext } from "../../context/Context";


const Form = () => {
    const router = useNavigate();
    const {iataID, setIataID, iataCode, setIataCode,iataLogin,setIataLogin} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());
        if(data.login_txt === "sabbir111" && data.password_txt === "19170"){
            setIataID(data.login_txt)
            setIataCode(data.password_txt)
            setIataLogin(true)
            router("/iata")
            alert("Welcome admin")
        }else{
            alert("Wrong password or login")
        }

    }
    
    return (
        <main>
        <form id="login_form" className="form_class" onSubmit={handleSubmit}>
            <div className="form_div">
                <label>Login:</label>
                <input className="field_class" name="login_txt" type="text" placeholder="IATA ID" />
          
                <input id="pass" class="field_class" name="password_txt" type="password" placeholder="IATA CODE"/>
                <button className="submit_class" type="submit" form="login_form">Submit</button>
            </div>

        </form>
    </main>
    
    )
}
export default Form;