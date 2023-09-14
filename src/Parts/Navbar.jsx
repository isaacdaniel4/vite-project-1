import { Link } from "react-router-dom";
function Navbar() {
    return(
        <>
        <nav className="flex flex-row space-x-10 p-4 font-semibold bg-teal-900">
         <div className="text-orange-500 mr-auto text-[30px]">Good News</div>
        <div>TOPICS</div>
        <Link to="/aboutus">ABOUT</Link>
        {/* <div> <Link to='/aboutus'>ABOUT</Link> </div> */}
        <div>CONTACT</div>
        <div>STORY</div>
        </nav>
        </>
    )
}
export default Navbar;