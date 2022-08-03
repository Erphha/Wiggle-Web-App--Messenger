import classes from './Home.module.css';
import Sidebar from '../components/sidebar/Sidebar'

const Home = () => {
    return ( <div className={classes.container}>
        <Sidebar/>
        <div>main</div>
    </div> );
}
 
export default Home;