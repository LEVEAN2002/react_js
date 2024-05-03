import { useState } from "react";
import { Link } from "react-router-dom";
import './css/website.css';

function Logo(){
    const[search,setSeaech]=useState("")
    
    return(
        < >
        <div className="logo_all">
       <span><Link to="/home"><img className="logo" src="https://image.donghohaitrieu.com/wp-content/uploads/2023/08/logo.png" alt="fail"/></Link></span> 
       <span><input className="input" type="text" value={search} onChange={e=>setSeaech(e.target.value)} placeholder="tìm kiếm sản phẩm hoặc thương hiệu" /></span>
       <span><img className="shopping" src="https://icons8.com/icon/vcf4Amoui7gh/line"/></span>
       
</div>
        </>
    )
}
export default Logo;