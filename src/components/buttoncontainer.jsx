import style from './button.module.css'
import Button from './buttonitem.jsx'


const ButtonContainer=({handleOnClick})=>{
  const Buttons =['c',1,2,3,4,5,7,8,9,0,'=','+','*','-','%','/'];
  return<>
  <div className={style.buttonsContainer}>
      {Buttons.map((btn)=>(
        <Button  key={btn}btns={btn} handleOnClick={handleOnClick}/>
        
      ))}
    </div>
  </>
}
export default ButtonContainer;