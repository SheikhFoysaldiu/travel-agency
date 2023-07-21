import { Link } from "react-router-dom";
import "./IATA.css"
const IATA = () => {
    return(
        <>
        <div className="section">
<div className="listContainer">
  <div class="list">
    <ul>
      <li> <Link className="custom-link" to='https://partner.travelbusinessportal.com/' target="_blank"> Server - 1 By IATA </Link></li> 
      <li><Link className="custom-link" to ="https://www.amybd.com/index?v=987654495" target="_blank">Server - 2 By IATA</Link></li>
      <li><Link className="custom-link" to ="https://www.flyhub.com/login" target="_blank">Server - 3 By IATA</Link></li>
      <li><Link className="custom-link" to ="https://flightexpert.com/?hotel=true&gclid=CjwKCAjwtuOlBhBREiwA7agf1pV6qIvaiISDGNAI357_7kUw_o7G65I3vsHIBxwg8IPTQrwxNFl1SRoCktkQAvD_BwE" target="_blank">Server - 4 By IATA</Link></li>

    </ul>
  </div>
  <div class="animation"></div>
</div>
</div>

        </>
    )
}
export default IATA;