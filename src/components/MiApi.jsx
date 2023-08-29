import React, { useState, useEffect } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from './Listado';
import Buscador from './Buscador';

function MiApi() {

  const consultarFiltroApi = async () => {
    const url = "https://fakestoreapi.com/products/";
    const response = await fetch(url);
    const data = await response.json();
    const dataOrdenada= data.sort(function(a, b){return a.price - b.price});
    setProductos(dataOrdenada)
  }

  useEffect(() => {
    consultarFiltroApi();
  }, []);


  const [productos, setProductos] = useState([])
  const [search, setSearh] = useState("")


  const handleChange = (e) => {
    setSearh(e.target.value);

  }

  const filteredProductos = productos.filter((c) => {
    if (
      c.title.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  return (
    <>
      <div className="appBg">
        <div className="appDiv">
          <h1>Lista de Productos</h1>
          <Buscador onChange={handleChange} search={search} />
          <Listado productos={filteredProductos} />
        </div>
      </div>
    </>
  )
}

export default MiApi
