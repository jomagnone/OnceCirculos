import 'styles/NavBar.css';
import CartWidget from 'components/CartWidget';
import LoginWidget from 'components/LoginWidget';
import {Link } from 'react-router-dom';
import logo from 'media/CirculoOnce2.png';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ButtonGroup from '@mui/material/ButtonGroup';
import { firestoreFetch } from '../utils/firestoreFetch';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


function NavBar() {
    
    const [search, setSearch] = useState([]);

    useEffect(() => {
        firestoreFetch()
            .then(result => setSearch(result))
            .catch(err => console.log(err));

    }, []);


    useEffect(() => {
        return (() => {
            setSearch([]);
        })
    }, []);

    let navigate = useNavigate();   
    function handleChange(v){
        let id = search.find(prod => prod.title == v).id
        console.log(id);
        navigate('/product/'+id, { replace: true });

    }



    return (
        <AppBar position="relative">
        <div className="Wrapper">
            <div className="Left">
                <div className="item">
                    <div className="itemColumn"><Link to='/' ><img src={logo} alt="" height="40"/></Link></div>
                    <div className="itemColumn subItem"> 
                        <ButtonGroup color="error" variant="outlined" size="small" aria-label="small button group">
                            <Button ><Link to="/category/0">Todo</Link></Button>
                            <Button ><Link to="/category/SZfgU0jnlyPUW3cbCXut">Especias</Link></Button>
                            <Button ><Link to="/category/UBFQZAWhXDgRzaILWu0a">Bebidas</Link></Button>
                            <Button ><Link to="/category/3ja4b4Ktbxe4MCYnllzT">Comidas</Link></Button>
                        </ButtonGroup>
                    </div>
                    
                  
                </div>
                
                <div>

                </div>
            </div>
            <div className="Center">
                    <div className="Search">
                      {search.length > 0 ?
                        <Autocomplete className="autocomplete"
                                    freeSolo
                                    size="small"
                                    id="combo-box-demo"
                                    options={search.map(item => item.title)}
                                    sx={{ width: 300 }}
                                    onChange={(e, value) => handleChange(value)}
                                    renderInput={(desc) => <TextField {...desc} label="Buscar..." />}
                                    />
                        :
                        <Autocomplete className="autocomplete"
                                    freeSolo
                                    size="small"
                                    id="combo-box-demo"
                                    options={["Cargando..."]}
                                    sx={{ width: 300 }}
                                    renderInput={(desc) => <TextField {...desc} label="Buscar..." />}
                        />
                      }
                       
                    </div>
            </div>
            <div className="Right">
                <MenuItem><LoginWidget /></MenuItem>
                <MenuItem className="cartNavBar"><Link to='/cart' style={{textDecoration: "none", color: "white"}}><CartWidget /></Link></MenuItem>
            </div>
        </div>
    </AppBar>
      );
}

export default NavBar;