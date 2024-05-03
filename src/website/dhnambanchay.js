import './css/website.css';
import './css/repontsite.css'
function Dhnambanchay(){
    const dhnubanchay=[{id:1,category:"Daniel Wellington",name:"Daniel Wellington Quadro DW00100431 – Nữ – Quartz (Pin) – Mặt số 20mm, kính cứng, chống nước 3ATM",code:"DW00100431",selling:4940000,quantity:10,link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/AE-1200WHD-1AVDF.jpg'},
    {id:2,category:"Saga",name:"Saga Stella 53555-SVMWSV-2 – Nữ – Kính Cứng – Quartz (Pin) – Mặt Số 22.5mm, Đính Đá Swarovski, Máy Thụy Sỹ",code:"53555-SVMWSV-2",selling:5244000,quantity:15,link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/NJ0154-80H.jpg'},
    {id:3,category:"Saga",name:"Saga 53766-SVSVSV-2 – Nữ – Kính Cứng – Quartz (Pin) – Mặt Số 39mm, Đính Đá Swarovski, Chống Nước 3ATM",code:"53766-SVSVSV-2",selling:7520000,quantity:20 ,link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/RA-AA0B02R19B.jpg'},
    {id:4,category:"Saga",name:"Saga Long Xing Da Da 53111-SVGERD-2LH – Nữ – Phiên Bản Giới Hạn 999 Chiếc Toàn Cầu – Đính 73 Viên Đá Quý – Khảm Xà Cừ Thiên Nhiên",code:"53111-SVGERD-2LH",selling:7990000,quantity:25,link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/95_T006.407.22.033.00-1.jpg'},
    {id:5,category:"Casio",name:"Casio LTP-V007L-7E1UDF – Nữ – Quartz (pin) – Mặt số trắng – Thiết kế mặt vuông độc đáo – Dây đeo da dập nổi vân cá sấu",code:"LTP-V007L-7E1UDF",selling:829000,quantity:30,link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T006.407.16.033.00-1.jpg'},
    {id:6,category:"Daniel Wellington",name:"Daniel Wellington Petite Lavender DW00100634 – Nữ – Quartz (Pin) – Khảm Xà Cừ, Mạ Vàng Hồng PVD, Chống Nước 3ATM",code:"DW00100634",selling:4760000,quantity:35,link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/75_D172TWH.jpg'},
    {id:7,category:"Daniel Wellington",name:"Daniel Wellington MOP Classic Petite Special Edition (DW00100514) – Nữ – Quartz (Pin) – Mặt Số 32mm, Siêu Mỏng 6mm, Mặt Xà Cừ",code:"DW00100514",selling:4940000,quantity:40,link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/6_MTP-V006L-7BUDF.jpg'},
    {id:8,category:"Tissot",name:"Tissot PRX Powermatic 80 T137.207.11.351.00 – Nam – Kính Sapphire – Automatic (Cơ tự động) – Mặt số 35 mm – Trữ cót 80 giờ – Họa tiết Guilloche – Khả năng chống từ",code:" T137.207.11.351.00",selling:21000000,quantity:45,link:'https://image.donghohaitrieu.com/wp-content/uploads/2023/09/RA-AR0004S10B.jpg'},
]
    return(
        <>
         <h1 className='hr'>ĐỒNG HỒ NAM BÁN CHẠY </h1>
        <div className="block_category">
           
        {dhnubanchay.map(item => ( 
            <div className="one_category c-6 m-4 l-3" key={item.id}>
                <img className="img_category c-11 m-11 l-11" src={item.link} /><br/>
                <span className="category">{item.name}</span><br/>
                <span className="sell_category" >{item.selling}đ</span>
            </div>
         ))}
         </div>
        </>
    )
}
export default Dhnambanchay;