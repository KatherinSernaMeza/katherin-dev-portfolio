import React from "react";

function Nav() {
  const itemNav = ["Projects", "Skills", "Experience", "Contact"];
  const listItems = itemNav.map((item) => (
    <li className="nav__li"  key={item} >
      {" "}
      <a href={`#${item}`}> {item}</a>
    </li>
  ));
  return (
    <nav className="nav">
      <ul className="nav__ul">{listItems}</ul>
    </nav>
  );
}

export default Nav;
