import { useState ,useEffect } from "react";
import './css/website.css'
import { db } from "../test/Sever";
    
    
function Admin(){
    const [id,setId]=useState(0)
    const [name, setName] = useState("");
    const[category,setCategory]=useState("")
    const[code,setCode]=useState("")
    const [quantity,setQuantity]=useState(0)
    const [selling, setSelling] = useState(0);
    const[mota,setMota]=useState("")
    const[dongho,setDongho]=useState([])
    const [img,setImg]=useState("")

    useEffect(()=>{db.dongho.toArray().then(items=>setDongho(items))},[])
    const clearForm =()=>{
        setName('')
        setCategory("")
        setId(0)
        setCode('')
        setQuantity()
        setSelling()
        setMota('')
        setImg('')

    }


    const save = (id, category, name,code,selling,quantity,mota,img) => {
        if(id==0){
            db.dongho.add({name:name,category:category,code:code,selling:selling,quantity:quantity,mota:mota,img:img})
        }
        else{
            db.dongho.update(id,{name:name,category:category,code:code,selling:selling,quantity:quantity,mota:mota,img:img})
        }
        db.dongho.toArray().then(items=>setDongho(items))
        clearForm();
        alert("Data Saved")
    }


    const loadDataEdit = (id)=>{
        db.dongho.get(id).then(item=>{
            setName(item.name);
            setCategory(item.category);
            setId(item.id);
            setCode(item.code);
            setSelling(item.selling);
            setQuantity(item.quantity);
            setMota(item.mota)
            setImg(item.img)
        })
    }

    const deleteData =(id)=>{
        db.dongho.delete(id).then(item=>{
            setName(item.name);
            setCategory(item.category);
            setId(item.id);
            setCode(item.code);
            setQuantity(item.quantity);
            setSelling(item.selling);
            setMota(item.mota)
            setImg(item.img)
        })
    }
    return(
        <>
      <label>ten</label><input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="tên sản phẩm" /><br/>
      <label>loai</label><input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="loại sản phẩm" /><br/>
      <label>ma</label><input type="text" value={code} onChange={(e)=>setCode(e.target.value)} placeholder="mã sản phẩm" /><br/>
      <label>gia</label><input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder="giá" /><br/>
      <label>so luong</label><input type="number" value={selling} onChange={(e)=>setSelling(e.target.value)} placeholder="số lượng nhập" /><br/>
      <label>mota</label><input type="text" value={mota} onChange={(e)=>setMota(e.target.value)} placeholder="mô tả sp" /><br/>
      <label>link anh</label><input type="text" value={img} onChange={(e)=>setImg(e.target.value)} placeholder="link ảnh" /><br/>
      <button onClick={()=>save(id, category, name,code,selling,quantity,mota,img)}>save</button>
     
            <table className="table">
                <thead>
                <tr>
                <th>id</th>
                <th>tên sản phẩm</th>
                <th>loại sản phẩm</th>
                <th>mã sản phẩm</th>
                <th>giá</th>
                <th>số lượng</th>
                <th>mô tả</th>
                <th>link ảnh</th>
                <th>chuc namg</th>
                </tr></thead>
                <tbody>
    {dongho.map(item => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.code}</td>
            <td>{item.quantity}</td>
            <td>{item.selling}</td>
           
            <td>{item.mota}</td>
            <td>{item.img}</td>
            <td><button onClick={()=>loadDataEdit(item.id)}>sua</button><button onClick={()=>deleteData(item.id)}>xoa</button></td>
        </tr>
    ))}
     </tbody>
     </table>
        </>
    )
}

export default Admin;
