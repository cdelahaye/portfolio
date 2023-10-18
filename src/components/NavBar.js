import React from 'react'; 
import { Nav, NavLink, Bars, NavMenu} from './Elements'; 

const NavBar = () => { 
    return ( 
        <div> 
            <Nav> 
                <Bars /> 

                <NavMenu> 
                    <NavLink  to='/home'> 
			Home 
                    </NavLink> 
                    <NavLink to='/about'> 
			About me 
                    </NavLink> 
                    <NavLink to='/work'> 
			My projects
                    </NavLink> 
                    {/*                     <NavLinkContact to='/contact'> 
			Contact me
                    </NavLinkContact>  */}
                </NavMenu> 


            </Nav> 
	

        </div> 
    ); 
}; 


export default NavBar;
