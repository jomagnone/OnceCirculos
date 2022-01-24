
import ItemDetail from '../components/ItemDetail';
import data from 'data/data';
import { useEffect, useState } from 'react';

function DetailProduct() {

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
      <>
        <div className="DetailPoroductsContainter" >
        <ItemDetail data = {data[5]} />
        </div>
      </>
    );
  }
  
  export default DetailProduct;