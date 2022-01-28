
import {Link} from 'react-router-dom'

function NavBarCategory(props) {
    return (
        <>
        <div className={`subMenu ${ props.margen ? "margen" : ""}`}><Link to={props.link}>{props.category}</Link></div>
        </>
        );
  }

export default NavBarCategory

