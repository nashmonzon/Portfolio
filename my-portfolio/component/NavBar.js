import Link from "next/Link"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                <a className="navbar-brand" >My portfolio</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link href="/galeria">
                        <a className="nav-link " >Galeria </a>
                        </Link>
                        <Link href="#">
                        <a className="nav-link" >About me</a>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
