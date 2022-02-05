
import ItemDetail from '../components/ItemDetail';
import data from 'data/data';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

function DetailProduct() {

  const [datos, setDatos] = useState([]);
  const urlParam = useParams();


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
        consultaDatos(100, mostrarDatos(data))
            .then(respuesta => setDatos(respuesta))
            .catch(err => console.log(err))
    }, [data])

    return (
      <>
        <div className="DetailPoroductsContainter" >
        <ItemDetail data = {data.find(element => element.id === parseInt(urlParam.idProd))} />
        </div>
      </>
    );
  }
  
  export default DetailProduct;