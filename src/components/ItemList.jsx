import Item from '../components/Item'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { firestoreFetch } from '../utils/firestoreFetch';

function ItemList() {

    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));

    }, [idCategory]);


    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);


    return (
        
        <div className="fila">
        {
           
            datos.length > 0 ?
            datos.map(producto => (
            
              <div className="columna">
                 
                <Item name = {producto.title} 
                      stock = {producto.stock} 
                      price = {producto.price}
                      img = {producto.imageMin}
                      idProd = {producto.id.toString()}
                      />
              </div>
             
            ) ): (<div className="progres">  <CircularProgress color="primary" /> </div>)
        }
        
        </div>
    
    );

}

export default ItemList;