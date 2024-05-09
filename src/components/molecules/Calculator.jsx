import Button from '../atoms/Button'
import Box from '../atoms/Box';
import style from './Calculator.module.css'

function Calculator() {
    let sym = ["0","1","2","-","3","4","5","+","6","7","8","*","9","C","=","/"]


    return (
        <>
        <div>
            <Box></Box>
        </div>
        
        <div id={style.calc_key}>
            {
                sym.map(item => <Button key={item} val={item}></Button>)
            }
        </div>
        </>
    )
}

export default Calculator;
