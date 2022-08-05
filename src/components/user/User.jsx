import classes from './User.module.css'

const User = () => {
    return ( 
        <div className={classes.container}>
            <div className={classes.info}>
                <div className={classes.detail}>
                    <img src="../../utils/images/prof.jpeg" alt=""  className={classes.avatar}/>
                    <h4>UserName</h4>
                </div>
            </div>
        </div>
     );
}
 
export default User;