
import Product from '../components/Product';
import data from 'data/data';




function DetailProduct() {
    return (
      <>
        <div className="DetailPoroductsContainter" >
        <Product data = {data[3]} />
        </div>
      </>
    );
  }
  
  export default DetailProduct;