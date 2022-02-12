
import ItemDetail from '../components/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import {firestoreFetchOne} from "../utils/firestoreFetch";

const  DetailProduct = () => {

        const [dato, setDato] = useState();
        const {idProd} = useParams();
        
        let info
        firestoreFetchOne(idProd)
          .then(result => info = result)
          .catch(err => console.log(err))


        useEffect(() => {
          console.log("entro");
            firestoreFetchOne(idProd)
                .then(result => setDato(result))
                .catch(err => console.log(err))
        }, [idProd]);

        useEffect(() => {
            return (() => {
              setDato();
            })
        }, []);
        
    return (
      <>
        <div className="DetailPoroductsContainter" >

        <ItemDetail data = {dato} />
    
        </div>
      </>
    );
  }
  
  export default DetailProduct;