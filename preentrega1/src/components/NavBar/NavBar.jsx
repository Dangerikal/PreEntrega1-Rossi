import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Tienda de Recuerdos</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Coleccionables</a>
        <a className="nav-link" href="#">Discos</a>
        <a className="nav-link" href="#">Revistas</a>
        <CartWidget amount={7} />

      </div>
    </div>
  </div>
</nav>
    )
}

 