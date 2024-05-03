import { useParams } from "react-router-dom";
function Productdetail(){
    const{id}=useParams() 
     return(
      <>
      <h1> product detail {id}</h1>
      </>
    )
}
export default Productdetail;