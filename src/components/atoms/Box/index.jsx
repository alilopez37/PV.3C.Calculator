import style from './index.module.css'


function Box(props){
    return <div id={style.cal_box}>{props.val}</div>
}

export default Box