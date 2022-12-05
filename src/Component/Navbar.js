import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <div>
       <p><Link to="/">Home</Link></p>
        <p><Link  to="/contact">Contact</Link></p>
        <p><Link to="/about">About</Link></p>  
        </div>
    )
}
export default Navbar