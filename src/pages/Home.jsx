
import Carrousel from 'components/Carrousel';
import Products from 'components/Products';


function Home() {
    return (
      <>
        <div className="fila" ><Carrousel /></div>  
        <div className="fila" ><Products /></div>  

      </>
    );
  }
  
  export default Home;