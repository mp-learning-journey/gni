import Layout from "../component/Layout";
import {useSelector} from "react-redux";

const Home = () => {
    const count = useSelector((state) => state.count);
    return (
        <Layout>
            <div>
                <h1>Home Page</h1>
                {count}
            </div>
        </Layout>
    )
}

export default Home;