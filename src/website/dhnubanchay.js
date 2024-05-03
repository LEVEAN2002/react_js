import './css/website.css';
import './css/repontsite.css'
import { Link } from 'react-router-dom';
function Dhnubanchay(){
    const dhnambanchay=[{id:1,category:"Casio",name:"Casio World Time AE-1200WHD-1AVDF – Nam – Quartz (Pin) – Mặt Số 45 mm x 42.1 mm, Bộ Bấm Giờ, Chống Nước 10 ATM",code:"AE-1200WHD-1AVDF",selling:1506000,quantity:10,mota:"Tissot Le Locle Powermatic 80 39.3mm T006.407.16.033.00 – Mẫu đồng hồ cơ cổ điển sang trọng của Tissot được đánh giá cao bởi bộ máy automatic tích cót lên đến 80 giờ. Thiết kế dây đeo da bò vân cá sấu kết hợp khóa bướm cao cấp chống nứt gãy.",link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/DW00100431.jpg'},
    {id:2,category:"Citizen",name:"Citizen Tsuyosa NJ0154-80H – Nam – Kính Sapphire – Automatic (Tự Động) – Mặt Số 40mm, Trữ Cót 40 Giờ, Chống Nước 5ATM",code:" NJ0154-80H",selling:13685000,quantity:15,mota:"Tissot Le Locle Powermatic 80 39.3mm T006.407.16.033.00 – Mẫu đồng hồ cơ cổ điển sang trọng của Tissot được đánh giá cao bởi bộ máy automatic tích cót lên đến 80 giờ. Thiết kế dây đeo da bò vân cá sấu kết hợp khóa bướm cao cấp chống nứt gãy.",link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/3_53555-SVMWSV-2.jpg'},
    {id:3,category:"Orient",name:"Orient SK RA-AA0B02R19B – Nam – Automatic (Tự Động) – Mặt Số 41.7mm, Trữ Cót 40 Giờ, Hacking Second",code:"RA-AA0B02R19B",selling:8000000,quantity:20,mota:"Tissot Le Locle Powermatic 80 39.3mm T006.407.16.033.00 – Mẫu đồng hồ cơ cổ điển sang trọng của Tissot được đánh giá cao bởi bộ máy automatic tích cót lên đến 80 giờ. Thiết kế dây đeo da bò vân cá sấu kết hợp khóa bướm cao cấp chống nứt gãy.",link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/53766-SVSVSV-2.jpg'},
    {id:4,category:"Tissot",name:"Tissot Le Locle Powermatic 80 T006.407.22.033.00 – Nam – Automatic – Trữ Cót 80 Giờ, Guilloché, Mạ Vàng Hồng PVD",code:"T006.407.22.033.00",selling:22750000,quantity:25,mota:"Tissot Le Locle Powermatic 80 39.3mm T006.407.16.033.00 – Mẫu đồng hồ cơ cổ điển sang trọng của Tissot được đánh giá cao bởi bộ máy automatic tích cót lên đến 80 giờ. Thiết kế dây đeo da bò vân cá sấu kết hợp khóa bướm cao cấp chống nứt gãy.",link:'https://image.donghohaitrieu.com/wp-content/uploads/2024/01/2-11.jpg'},
    {id:5,category:"Tissot",name:"Tissot Le Locle Powermatic 80 T006.407.16.033.00 – Nam – Automatic – Mặt Số 39.3mm, Trữ Cót 80 Giờ, Họa Tiết Guilloche",code:"T006.407.16.033.00",selling:17500000,quantity:30,mota:"Tissot Le Locle Powermatic 80 39.3mm T006.407.16.033.00 – Mẫu đồng hồ cơ cổ điển sang trọng của Tissot được đánh giá cao bởi bộ máy automatic tích cót lên đến 80 giờ. Thiết kế dây đeo da bò vân cá sấu kết hợp khóa bướm cao cấp chống nứt gãy.",link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/LTP-V007L-7E1UDF.jpg'},
    {id:6,category:"Doxa",name:"Doxa Noble D172TWH – Nữ – Kính sapphire – Quartz (Pin) – Lấp lánh cùng 8 viên kim cương – Hoạ tiết guilloche – Dây đeo mạ vàng demi",code:"D172TWH",selling:21990000,quantity:35,mota:"Tissot Le Locle Powermatic 80 39.3mm T006.407.16.033.00 – Mẫu đồng hồ cơ cổ điển sang trọng của Tissot được đánh giá cao bởi bộ máy automatic tích cót lên đến 80 giờ. Thiết kế dây đeo da bò vân cá sấu kết hợp khóa bướm cao cấp chống nứt gãy.",link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/DW00100634.jpg'},
    {id:7,category:"Casio",name:"Casio MTP-V006L-7BUDF – Nam – Quartz (Pin) – Mặt Số 38mm, Kính Cứng, Chống Nước 3ATM",code:"MTP-V006L-7BUDFF",selling:930000,quantity:40,mota:"Tissot Le Locle Powermatic 80 39.3mm T006.407.16.033.00 – Mẫu đồng hồ cơ cổ điển sang trọng của Tissot được đánh giá cao bởi bộ máy automatic tích cót lên đến 80 giờ. Thiết kế dây đeo da bò vân cá sấu kết hợp khóa bướm cao cấp chống nứt gãy.",link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/DW00100511-DW00100514-1.jpg'},
    {id:8,category:"Orient",name:"Orient Open Heart RA-AR0004S10B – Nam – Kính Sapphire – Automatic (Tự Động) – Mặt Số 40.8mm, Trữ Cót 40 Giờ, Chống Nước 5ATM",code:" RA-AR0004S10B",selling:9550000,quantity:45,mota:"Tissot Le Locle Powermatic 80 39.3mm T006.407.16.033.00 – Mẫu đồng hồ cơ cổ điển sang trọng của Tissot được đánh giá cao bởi bộ máy automatic tích cót lên đến 80 giờ. Thiết kế dây đeo da bò vân cá sấu kết hợp khóa bướm cao cấp chống nứt gãy.",link:'https://image.donghohaitrieu.com/wp-content/uploads/2024/01/T137.207.11.351.00.jpg'},
]
    return(
        <>
         <h1 className='hr'>ĐỒNG HỒ NỮ BÁN CHẠY </h1>
        <div className="block_category">
           
        {dhnambanchay.map((item ,index)=> ( 
            
            
            <div className="one_category c-6 m-4 l-3" key={item.id} >
                <Link to={{ pathname: "/donghonambanchay/" + item.id, state: { item } }}>
                <img className="img_category c-11 m-11 l-11" src={item.link}/><br/>
                <span className="category">{item.name}</span><br/>
                <span className="sell_category" >{item.selling}đ</span>
           </Link> </div>
         ))}
         </div>
        </>
    )
}
export default Dhnubanchay;