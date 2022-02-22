import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <div>The page was not found...</div>
            <Link to='/'>Back to home page</Link>
        </div>
     );
}
 
export default NotFound;