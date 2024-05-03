import { Link } from "react-router-dom";
function Head(){
    return(
        <>
       <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/product">product</Link>
        </li> <li>
            <Link to="/contact">contact</Link>
        </li>
       </ul>
       
    
        </>
    )
}

export default Head;