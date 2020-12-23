export const Header = () => {
  return (
    <>
      <div className="container-menu">
        <div className="container-logo">
          <p>LOGO</p>
        </div>
        <div className="container-links">
          <ul>
            <li className="current">
              <a href="#quiensoy" data-hover="¿Quién Soy?">
                ¿Quién Soy?
              </a>
            </li>
            <li>
              <a href="#servicios" data-hover="Servicios">
                Servicios
              </a>
            </li>
            <li>
              <a href="#portafolio" data-hover="Portafolio">
                Portafolio
              </a>
            </li>
            <li>
              <a href="#blog" data-hover="Blog">
                Blog
              </a>
            </li>
            <li>
              <a href="#contacto" data-hover="Contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};
