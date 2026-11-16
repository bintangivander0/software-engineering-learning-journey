const { useState } = React;

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>
        <li className="nav-item">
          <button aria-expanded={isVisible? "true" : "false"} onClick={() => setIsVisible(!isVisible)}>Apps</button>
          <ul className={isVisible? "sub-menu sub-menu--open" : "sub-menu"} aria-label="Apps">
            <li><a href="#">Calendar</a></li>
            <li><a href="#">Chat</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
