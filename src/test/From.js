import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
function Froms(){
    const [name,setName] = useState("");
    const sexs=[{id:1, value:"male"},{id:2, value:"unmale"},{id:3, value:"fale"}];
    const [sex,setSex]=useState("");
    const homes=[{id:1,value:"ha noi"},{id:2,value:"nghe an"},{id:3,value:"phu tho"}];
    const[home,setHome]=useState("nghe an");
    const monhoc=[{id:1,value:"c"},{id:2,value:"html"},{id:3,value:"css"},{id:4,value:"javascript"}];
    const [checkbox, setCheckbox] = useState([]);
    console.log(name);
    console.log(sex);
    console.log(home)
    console.log(checkbox)
    return(  
        <>
        <div>username</div>
        <input type="text" name="username" id="username" 
        onChange={e =>setName(e.target.value)}/>
        {sexs.map(item =><span key={item.id}><input type="radio"
        onChange={()=>setSex(item.value)}
        checked={sex===item.value}
        />{item.value}</span>)}
        <button>submit</button>
    <div>
        <select   onChange={e=>setHome(e.target.value)} >
            {homes.map(item=>(
                <option key={item.id} 
                checked= { home === item.value}
              
                 >{item.value}</option>
            ))}
        </select>
    </div>
    <div>
        <div>mon hoc</div>
        {monhoc.map(item=><span key={item.id}><input  type="checkbox"
                onChange={(e) => {
                    if (e.target.checked) {
                        setCheckbox([...checkbox, item.value]);
                    } else {
                        setCheckbox(checkbox.filter((value) => value !== item.value));
                    }
                }}
                checked={checkbox.includes(item.value)}/>{item.value}</span>)}
    </div>

        </>
    )
}
export default Froms;