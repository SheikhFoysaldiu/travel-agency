import '../../App.css'
import {FcServices} from "react-icons/fc";
import {MdAirplaneTicket} from "react-icons/md";
import {FaUmbrellaBeach} from "react-icons/fa";
import {BiSolidHotel} from "react-icons/bi";
import {GiPrayer} from "react-icons/gi";
import {BiBusSchool} from "react-icons/bi";
const Feature = () => {
    return(
        <section>
        <div className="container">
            <div className="feature-wrapper">
                <div>
                    <div className="feature-icon">
                       <FcServices/>
                    </div>
                    <h3 className="feature-title">Visa Service</h3>
                    <p className="feature-description">We process tourist visa of almost all common countries. We process and provide exclusive visa services to valued clients</p>
                </div>
                <div>
                    <div className="feature-icon">
                       <MdAirplaneTicket/>
                    </div>
                    <h3 className="feature-title">Air Tickets</h3>
                    <p className="feature-description">We arrange air tickets on cheaper rates to any destinations worldwide.</p>
                </div>
                <div>
                    <div className="feature-icon">
                       <FaUmbrellaBeach/>
                    </div>
                    <h3 className="feature-title">Tour Packages</h3>
                    <p className="feature-description">We are the specialist in predefined as well as customized tour packages worldwide.</p>
                </div>
                <div>
                    <div className="feature-icon">
                       <BiSolidHotel/>
                    </div>
                    <h3 className="feature-title">Hotel Booking</h3>
                    <p className="feature-description">We are affiliated with International Hotels. We provide you any types of Hotels around the world</p>
                </div>
                <div>
                    <div className="feature-icon">
                       <GiPrayer/>
                    </div>
                    <h3 className="feature-title">Umrah Package</h3>
                    <p className="feature-description">Our Umrah packages are designed carefully taking your requirements in mind to provide the best possible service.</p>
                </div>
                <div>
                    <div className="feature-icon">
                       <BiBusSchool/>
                    </div>
                    <h3 classNameName="feature-title">Bangladesh Tour</h3>
                    <p className="feature-description">Bangladesh is a land of natural beauty, beaches, hills and many historical places. Every year foreigners from different countries to see Bangladesh through us.</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Feature;