import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarColor03">
          <a className="navbar-brand" href="#">
            Dashboard
          </a>
          <ul className="navbar-nav me-auto">
            <Link className="nav-item" href="/">
              <a className="nav-link">
                <button>Journal</button>
              </a>
            </Link>
            <Link className="nav-item" href="/form">
              <a className="nav-link">
                <button>Add entry</button>
              </a>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
