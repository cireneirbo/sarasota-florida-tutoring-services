
function Nav() {
  return(
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Professional Services</a></li>
          <li><a href="#footer">Contact Me</a></li>
        </ul>
        <a href="#header" className="close">Close</a>
      </div>
    </nav>
  );

}

export default Nav;