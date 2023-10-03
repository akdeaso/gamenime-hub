import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li className="font-bold font-orbitron">
          <NavLink href="/">Gamenime Hub</NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink href="/about" prefetch={false}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;