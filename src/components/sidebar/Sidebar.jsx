import classes from './Sidebar.module.css'
import SideNavbar from '../navbar/SideNavbar'
import User from '../user/User'

const Sidebar = () => {
    return ( <div className={classes.container}>
        <SideNavbar/>
        <hr />
        <div className={classes.userContainer}>
           <User /> 
        </div>
        
    </div> );
}
 
export default Sidebar;