import classes from './Home.module.css';
import {useState} from 'react'
import Profile from '../components/main/Profile'
import Sidebar from '../components/sidebar/Sidebar'
import MainNavbar from '../components/navbar/MainNavbar'

const Home = () => {
    const [profile, setProfile] = useState(true)
    return ( <div className={classes.container}>
        <Sidebar/>
        <div className={classes.mainContainer}>
            {profile? <Profile/>:null}
        </div>
    </div> );
}
 
export default Home;