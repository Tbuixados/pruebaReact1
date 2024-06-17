import { CartWidget } from "../common/CartWidget"


export const Navbar = () =>{
    return(
        <div>
            <h3>Logo</h3>
            <ul>
                <li>All</li>
                <li>Jerseys</li>
                <li>Shorts</li>
            </ul>
           <CartWidget />
        </div>
    )
}


