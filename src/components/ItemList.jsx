import Item from '../components/Item'
import data from 'data/data';
import { useEffect, useState } from 'react';


function ItemList() {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        let is_ok = true;
        let mostrarDatos = (data) => {
            return data;
        }
        let consultaDatos = (time, task) => {
            return new Promise((resolve, reject) => {
                if (is_ok) {
                    setTimeout(() => {
                        resolve(task)
                    }, time);
                } else {
                    reject("No hay productos disponibles")
                }
            });
        }
        consultaDatos(2000, mostrarDatos(data))
            .then(respuesta => setDatos(respuesta))
            .catch(err => console.log(err))
    }, [])

        
    return (
        <div className="fila">
        {
            datos.map(producto => (
              <div className="columna">
                <Item name = {producto.title} 
                      stock = {producto.stock} 
                      price = {producto.price}
                      img = {producto.imageMin}
                      />
              </div>
            ))
        }
        
        </div>
    
    );

}

export default ItemList;