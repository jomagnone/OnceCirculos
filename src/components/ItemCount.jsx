import {useEffect, useState} from 'react';
import 'styles/ItemCount.css';
import Button from 'react-bootstrap/Button'

const ItemCount = ({stock , initial , onAdd}) => {
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
            <div className="itemCountControls" >
                <Button className="itemCountButton" size="sm"onClick={decrement}><b> -</b></Button>
                <Button className="itemCountButton" variant="light" disabled > <b> {count} </b></Button> 
                <Button className="itemCountButton" size="sm" onClick={increment}><b> +</b></Button>
            </div>
            <div className ="goToCard" >
                {
                    stock 
                    ? <Button className="itemCountButtonAdd" variant="success" size="sm" onClick ={() => onAdd(count)} > Agregar </Button>
                    : <Button className="itemCountButtonAdd" variant="success" size="sm" disabled> Agregar</Button>
                }
            </div>
        </div>
    );

} 

export default ItemCount;