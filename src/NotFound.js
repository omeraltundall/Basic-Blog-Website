import { Link } from "react-router-dom/cjs/react-router-dom.min";
import notFound from  "./images/notFound.webp"

// to take image from local import it from file at you must initialize it src not in public
const NotFound = () => {
    return ( 
            <div className="notFound">
            <img src={notFound} alt="Not Found"/>
            <Link to="/">Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;