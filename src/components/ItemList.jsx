import Item from '../components/Item'
import rawData from 'data/data';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ItemList() {

    const [datos, setDatos] = useState([]);
    const urlParam = useParams();

    useEffect(() => {
        let is_ok = true;

        let mostrarDatos = (data, idCat) => {

            if (idCat > 0) {
                return data.filter(item => item.idCategory === parseInt(idCat))
            } else {
                 return data
            }

           
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
        
        consultaDatos(1000, mostrarDatos(rawData,urlParam.idCategory ))
            .then(respuesta => setDatos(respuesta))
            .catch(err => console.log(err))
    }, )

        
    return (
        <div className="fila">
        {
            datos.map(producto => (
              <div className="columna">
                <Item name = {producto.title} 
                      stock = {producto.stock} 
                      price = {producto.price}
                      img = {producto.imageMin}
                      idProd = {producto.id}
                      />
              </div>
            ))
        }
        
        </div>
    
    );

}

export default ItemList;