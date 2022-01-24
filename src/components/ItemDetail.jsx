import 'styles/DetailProduct.css';
import ItemCount from 'components/ItemCount';
import ImgGallery from 'components/ImgGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ItemDetail ({data})  {

    const onAdd = (qty) => { 
        toast.info("Agregaste " + (qty) +" "+ (data.title)+ " al carrito!");
    }

    return (
        <div className="fila">
            <div className="ImgGallery columna">
                 <ImgGallery  imagesSrc = {data.imagesSrc} />
            </div>  
            <div className="columna" >
                <div className="title" >{data.title}</div>
                <div className="description" >{data.description}</div>
                <div className="stock" ><b>Stock: </b>{data.stock}</div>
                <div className="price" ><br /> <b> {data.price}$ </b>Precio Unitario. <br /><br /></div>
                <ItemCount stock = {data.stock} initial = {1}  onAdd = {onAdd}  />
                <ToastContainer />
            
            </div>  
        </div>
    );


}

export default ItemDetail;