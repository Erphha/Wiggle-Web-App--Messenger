import classes from './Sidebar.module.css'
import SideNavbar from '../navbar/SideNavbar'

const Sidebar = () => {
    return ( <div className={classes.container}>
        <SideNavbar/>
    </div> );
}
 
export default Sidebar;