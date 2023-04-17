import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer";

const AuthLayot =  ( ) => {

    return(
            <div className="container">
                <Outlet>
                    
                </Outlet>

                <Footer/>
            </div>

    )
}

export default AuthLayot;