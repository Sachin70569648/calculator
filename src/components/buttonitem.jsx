import style from './btn.module.css'

const Button =({btns,handleOnClick})=>{
  return<>
  <button className={style.button}
  onClick={()=>handleOnClick(btns)}
  
  >{btns}</button>
  </>
}
export default Button;