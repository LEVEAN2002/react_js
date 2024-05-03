import { Link } from "react-router-dom";
import './css/website.css';
import './css/repontsite.css'


function Navbar(){
    return(
        <>
       
        <div className="div_navbar">
        <ul className="navbar" id="myTopnav">
            <li className="c-0 m-1 l-1">THƯƠNG HIỆU </li>
            <li className="c-0 m-1 l-1">NAM</li>
            <li className="c-0 m-1 l-1">NỮ</li>
            <li className="c-0 m-1 l-1">CẶP ĐÔI</li>
            <li className="c-0 m-1 l-1">TRANG SỨC</li>
            <li className="c-0 m-1 l-1">PHỤ KIỆN</li>
            <li className="c-0 m-1 l-1">LIÊN HỆ</li>
            <li className="c-0 m-1 l-1">TIN TỨC</li>
            <Link to="/admin"><li className="c-0 m-1 l-1">ĐĂNG NHẬP</li></Link>
            <li className="icon c-1 l-0 m-0" onClick={()=> myFunction()}>
                <img className="icon  c-12 l-0 m-0" src="https://tse2.mm.bing.net/th?id=OIP.RZ9g_titrQT3cTRTrpcS7QHaHa&pid=Api&P=0&h=180"/>
            </li>
        </ul>
        </div>
        </>
    )
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
export default Navbar;
