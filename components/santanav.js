import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavLink({ href, name }) {
  const router = useRouter();
  const nameFromRoute = href
    .replace(/^\//, "") // Remove leading slash if it exists
    .replace(/-/g, " ")
    .toUpperCase();
  return (
    <Link href={href} passHref>
      <Nav.Link
        style={{ paddingLeft: 13, paddingRight: 13, letterSpacing: "0.25px" }}
        active={href === router.pathname}
      >
        {name || nameFromRoute}
      </Nav.Link>
    </Link>
  );
}

function SantaNav() {
  return (
    <div className="santa-nav-background">
      <Navbar expand="lg" className="santa-nav">
        <Link href="/" passHref> {/* Ensure you use Link here */}
          <Navbar.Brand>
            <img src="/sv-logo.png" alt="Santa's Volunteers" width="150px" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="nav-menu"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav>
            <NavLink href="/" name="WHO WE ARE" />
            <NavLink href="/how-we-got-started" />
            <NavLink href="/how-we-do-it" />
            <NavLink href="/helping-our-community" />
            <NavLink href="/donate" />
            <NavLink href="/contact-us" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default SantaNav;
