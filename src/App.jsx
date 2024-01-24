
import './App.css'
import style from './app.module.css'
import Display from './components/display'
import ButtonContainer from './components/buttoncontainer'
import {useState} from 'react'


function App() {
  let [calVal, setCalVal]=useState('');
   let x='=';
   let y=567;
   let d=x+y;
   console.log(d);


  let handleOnClick=(btns)=>{
    if(btns==='c'){
      setCalVal('');

    }
    else if(btns==='='){
      const result= eval(calVal);
      setCalVal(result);
    }else{
      let newVal=calVal+btns
      setCalVal(newVal);
    }
 
   
  
    
    
   
   
  }



  


  return (<div className={style.calculator}>
    <Display displayValue={calVal}/>
    <ButtonContainer handleOnClick={handleOnClick} />
    
    

    
    

  </div>
   
  )
}

export default App
