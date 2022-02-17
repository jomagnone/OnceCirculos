import 'styles/NavBar.css';
import CartWidget from 'components/CartWidget';
import LoginWidget from 'components/LoginWidget';
import {Link } from 'react-router-dom';
import logo from 'media/CirculoOnce2.png';
import AppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { firestoreFetch, firestoreFetchCategory } from '../utils/firestoreFetch';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {NavDropdown} from 'react-bootstrap'



function NavBar() {
    
    const [search, setSearch] = useState([]);
    const [category, setCategory] = useState([]);


    useEffect(() => {
        firestoreFetch()
            .then(result => setSearch(result))
            .catch(err => console.log(err));
        
        firestoreFetchCategory("all")
            .then(result => setCategory(result))
            .catch(error => console.log(error))

    }, []);


    useEffect(() => {
        return (() => {
            setSearch([]);
            setCategory([]);
        })
    }, []);

    let navigate = useNavigate();   
    function handleChange(v){
        let id = search.find(prod => prod.title === v).id
        console.log(id);
        navigate('/product/'+id, { replace: true });

    }



    return (
        <AppBar position="relative">
        <div className="Wrapper">
            <div className="Left">
                <div className="item">
                    <div className="itemColumn"><Link to='/' ><img src={logo} alt="" height="40"/></Link></div>
                </div>
                

                <div className="itemColumn"> 
                    <NavDropdown title="Productos" id="collasible-nav">
                        <NavDropdown.Item ><Link to="/category/0">Todo</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        {
                        category.length ?
                        category.map(item => (
                                    <NavDropdown.Item key={item.id}><Link to={`/category/${item.id}`}>{item.description}</Link></NavDropdown.Item>
                                    )
                           ):<NavDropdown.Item >Cargando...</NavDropdown.Item>

                        }
                    </NavDropdown>
                    
                </div>
                    
                  
            </div>
            <div className="Center">
                    <div className="Search">
                      {search.length ?
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