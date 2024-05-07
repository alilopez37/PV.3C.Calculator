import Button from '../atoms/Button'
import Box from '../atoms/Box';

function Calculator() {
    let sym = ["0","1","2","3","4"]


    return (
        <>
            <Box></Box>
            {
                sym.map(item => <Button key={item} val={item}></Button>)
            }
        </>
    )
}

export default Calculator;
