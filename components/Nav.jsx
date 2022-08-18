import React from "react";
import Link from "next/dist/client/link";

const links = [
  { id: "home", href: "/", name: "Home" },
  { id: "new", href: "/new", name: "New" },
  { id: "products", href: "/products", name: "Products" },
  { id: "about", href: "/about", name: "About" },
];

const styles = {
  link: 'text-blue-500 hover:text-blue-700 active:text-blue-500 font-bold py-2 px-4 rounded-xs  mt-auto inline-block',
}

const Nav = () => {
  return (
    <nav>
      {links.map(({ id, href, name }) => (
        <div className={styles.link} key={id}>
          <Link href={href}>{name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
