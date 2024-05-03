
import Logo from './logo';
import ChangingText from './Text';
import Navbar from './navbar';
import ImgLogo from './img_logo';
import Slightder from './Slightder';
import Dhnambanchay from './dhnambanchay';
import Dhnubanchay from './dhnubanchay';
// import Headsider from './headsider';
import Dichvu from './dichvu';
import Fromhangmoi from './formhangmoi';

function Home() {
    return(
        <>
    <div className='grid'>
      <div className='grid wide'>
      
     
     <ImgLogo/>
     <Slightder/>
     {/* <Headsider/> */}
     <Dhnambanchay/>
     <Dhnubanchay/>
     <Fromhangmoi/>
     <Dichvu/>
     </div>
    </div>
        </>
    )
}
export default Home