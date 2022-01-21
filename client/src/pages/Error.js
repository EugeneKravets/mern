import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

function Error() {
   return (
      <Wrapper className="full-page">
         <div>
            <img src={img} alt="not found"></img>
            <h3>Ohh!! page not found</h3>
            <p>We can't seem to find the page</p>
            <Link to="/">back home</Link>
         </div>
      </Wrapper>
   );
}
export default Error;
