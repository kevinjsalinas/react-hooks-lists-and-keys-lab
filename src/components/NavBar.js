import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aTags = links.map( link => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>
    {aTags}
    {/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
