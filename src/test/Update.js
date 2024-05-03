import { useState ,useEffect } from "react";

import { db } from "./Sever";
import "./Update.css";
function Update(){
    const [id,setId]=useState(0)
    const [name, setName] = useState("");
    const[age,setAge]=useState(0)
    const[student,setStudent]=useState([])

    useEffect(()=>{db.student.toArray().then(items=>setStudent(items))},[])
    const clearForm =()=>{
        setName('')
        setAge(0)
        setId(0)
    }
     
    
     

    const loadDataEdit = (id)=>{
        db.student.get(id).then(item=>{
            setName(item.name);
            setAge(item.age);
            setId(item.id);
        })
    }
    const deleteData =(id)=>{
        db.student.delete(id).then(item=>{
            setName(item.name);
            setAge(item.age);
            setId(item.id);
        })
    }
    return(
        <>
        <input type="hidden" value={id}/>
        <div>
            <label>name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
            <label>Age</label>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
            <button onClick={()=>save(id,name,age)}> save</button>
        </div>
        <div>
            <table border={1}>
                <thead>
            
                    <tr>
                        <th>STT</th>
                        <th>name</th>
                        <th>Age</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map(item=> <tr key={item.id}> 
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td><button onClick={()=>loadDataEdit(item.id)}>edit</button><button onClick={()=>deleteData(item.id)}>delete</button></td>
                    </tr>)}
                   
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Update;