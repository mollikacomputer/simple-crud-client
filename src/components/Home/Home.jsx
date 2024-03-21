import {Outlet} from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h2> Header This is home page</h2>
            <Outlet></Outlet>
            <h2> Footer</h2>
        </div>
    );
};

export default Home;