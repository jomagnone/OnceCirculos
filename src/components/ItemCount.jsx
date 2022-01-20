import {useEffect, useState} from 'react';
import 'styles/ItemCount.css';
import Button from 'react-bootstrap/Button'

const ItemCount = ({stock = 10, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[])

    const increment = () => {
            if (count < stock) {
                    setCount(count+1);
            }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count-1);
        }
    }

    return (
        <div className="itemCount">
            <Button variant="outline-primary" size="sm"onClick={decrement}><b>-</b></Button>
            <Button variant="light" disabled >  {count} </Button> 
            <Button variant="outline-primary" size="sm" onClick={increment}><b>+</b></Button>
            <div className ="goToCard" >
                {
                    stock 
                    ? <Button variant="success" size="sm" onClick ={() => onAdd(count)} > agregar </Button>
                    : <Button variant="success" size="sm" disabled> agregar</Button>
                }
            </div>
        </div>
    );

} 

export default ItemCount;