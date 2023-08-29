import Table from 'react-bootstrap/Table';

const Listado = ({ productos }) => {
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Descripción</th>
          <th>Categoria</th>
          <th>Precio</th>

          
        </tr>
      </thead>
      <tbody>
        {productos.map((c) => (

          <tr key={c.id}>
            <th>{c.title}</th>
            <th>{c.description}</th>
            <th>{c.category}</th>
            <th>{c.price}</th>
          
          </tr>

        ))}
      </tbody>
    </Table>
  );

}
export default Listado;