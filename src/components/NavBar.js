import React from 'react'; 
import { Nav, NavLink, Bars, NavMenu} from './Elements'; 

const NavBar = () => { 
    return ( 
        <div> 
            <Nav> 
                <Bars /> 

                <NavMenu> 
                    <NavLink  to='/portfolio/home'> 
			Home 
                    </NavLink> 
                    <NavLink to='/portfolio/about'> 
			About me 
                    </NavLink> 
                    <NavLink to='/portfolio/work'> 
			My projects
                    </NavLink> 
                    {/*                     <NavLinkContact to='/portfolio/contact'> 
			Contact me
                    </NavLinkContact>  */}
                </NavMenu> 


            </Nav> 
	

        </div> 
    ); 
}; 


export default NavBar;
