import useAppContext from "../../context/useAppContext";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  const { routes, menuActive, menuDisplay, handleButton, isMobile, Link } =
    useAppContext();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
      </div>

      {isMobile && (
        <div className="menu-button" onClick={handleButton}>
          <img src={menuActive} alt="menu button" />
        </div>
      )}

      <nav
        className={`${isMobile ? "navbar" : "navbar-desk"} ${menuDisplay}`}
        onClick={handleButton}
      >
        <ul className="navbar-ul">
          {routes.map((route) => (
            <NavBarLinks key={route.id} route={route} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
