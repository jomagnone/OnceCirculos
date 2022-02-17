
import Carrousel from 'components/Carrousel';
import Content from 'components/Content';
import 'styles/Home.css';


function Home() {
    return (
      <>
        <div className="fila" ><Carrousel /></div>  
        <div className="fila" ><Content /></div>  

      </>
    );
  }
  
  export default Home;