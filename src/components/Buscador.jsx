const Buscador = ({onChange, search}) => {
    return (
      <>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Busca un producto por titulo"
            aria-label="Search"
            value = {search}
            onChange={onChange}

          />
        </form>
      </>
    );
  };
 export default Buscador; 