import { useState } from 'react';
import Button from '../atoms/Button'
import Box from '../atoms/Box';
import style from './Calculator.module.css'

function Calculator() {
    const [exp, setExp] = useState('')
    let sym = ["0","1","2","-","3","4","5","+","6","7","8","*","9","C","=","/"]


    return (
        <>
        <div>
            <Box val={exp}></Box>
        </div>
        
        <div id={style.calc_key}>
            {
                sym.map(item => <Button key={item} val={item} setExp={setExp} exp={exp} ></Button>)
            }
        </div>
        </>
    )
}

export default Calculator;
