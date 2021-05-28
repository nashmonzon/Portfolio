import NavBar from "./NavBar"
import Navbar from "./NavBar"


export default function Layout  ({ children }) {
    return(

    <>
    
    
        <main  className="backColorTop ">
           <NavBar/>
            {children}
        </main>
    </>
    )
}

