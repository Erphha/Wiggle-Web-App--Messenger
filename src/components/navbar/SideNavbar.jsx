import classes from "./SideNavbar.module.css";

const SideNavbar = () => {
  return (
    <nav className={classes.container}>
      <div className={classes.profile}>
        <h5>img</h5>
        <div>
          <p>name</p>
          <p>id</p>
        </div>
      </div>
      <ul className={classes.icons}>
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
