import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkhref = links.map((item) => {
    return <a key={item} href={`#${item}`}>{item}</a>
  })


  return <nav>{linkhref}</nav>;
}

export default NavBar;
