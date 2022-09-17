import { useEffect, useState } from 'react';
import './App.css';
import natureImg from './assests/images.jpg'
import natureImg2 from './assests/nature.jpg'

function App() {
  const [imgNum, setImgNum] = useState('');
  const [imgArr, setImgArr] = useState([]);

 /*  useEffect(()=>{
    onChangeImgNum()
  },[imgNum])  */

  const onChangeImgNum = (e) =>{
    console.log(e.target.value)
    if(e.target.value === ''){
      setImgNum(0)
    }
    setImgNum(e.target.value)
    
  }

  console.log('img arr',imgArr);
  return (
    <div className="App">
     <h2>Dynamic Image Container</h2>
     <input type="number" 
      placeholder='How many Images do you want?' 
      style={{height: '20px',marginBottom:'30px',minWidth:'200px'}} 
      value={imgNum}
      // eslint-disable-next-line no-undef
      onChange={onChangeImgNum}
     />

     <h2>{imgNum}</h2>
     <div className={`container`}>
     {
      imgNum && [...new Array(parseInt(imgNum))].map((element,index)=> {
          return(<div className={`box`}
          style={(index === 0 || index  === 2) ? {marginTop:'100px'} : (index !== 1 && index % 3 === 1) ? {marginTop:'-100px'} : {marginTop:'0px'}}
            >{index % 3 === 1 ? (<img src={natureImg2} style={{height: '200px',width:'150px'}}/>) : (<img src={natureImg} style={{height: '200px',width:'150px'}}/>)}
            </div> )  
        })
     }

     </div>
    </div>
  );
}

export default App;

