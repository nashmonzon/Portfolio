import Link from "next/Link"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand" >My portfolio</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav navBar socialMedia  ">
                        <Link href="#prt">
                        <a className="nav-link" >Portfolio</a>
                        </Link>
                        <Link href="#skls">
                        <a className="nav-link" >Skills</a>
                        </Link>
                        <Link href="#contact">
                        <a className="nav-link" >Contactame</a>
                        </Link>




                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
