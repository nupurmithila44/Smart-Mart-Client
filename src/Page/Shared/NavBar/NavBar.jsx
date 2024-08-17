import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }
    
    const navLink = <>
    <li className="text-xl"><Link to='/'>Home</Link></li>
    {/* <li><Link to='/about'>about</Link></li> */}
   {/* {
     user?.email? 
     <>
     <li><Link to='/'>Home</Link></li>
     <li><button onClick={handleLogOut}>log out</button></li> 
     </>
     :<li><Link to='/login'>login</Link></li>
   } */}
   </>
    return (
        <div className="navbar bg-base-100 border-2 rounded-sm mb-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>
          <a className="text-2xl font-semibold">SmartMart</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end mr-2 relative group">
  
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {
                  user && <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                }
              </div>
            </div>
            <div className="absolute hidden border-2 w-60 text-center text-black shadow-lg rounded-md p-2 group-hover:block z-10 top-[60px] right-0">
              {
                user && <p>{user.displayName}</p>
              }
            </div>
          </div>
       
          {
            user && <button onClick={handleLogOut} className="btn  bg-[#e8d4b3] text-black text-base font-semibold">Sign Out</button> ||
            <Link to="/login" className="btn bg-[#e8d4b3] text-black text-base font-semibold">Login</Link>
          }
        </div>
      
      </div>
    );
};

export default NavBar;