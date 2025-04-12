import Layout from "../component/Layout";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../redux-toolkit/reducers/counterSlice";
import {add, deleteTodo} from "../redux-toolkit/reducers/todoSlice";

const ReduxPage = () => {
    const { count } = useSelector((state) => state.count);
    const { todos } = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    return (
        <Layout>
            <div>
                <h1>Redux Page</h1>
                <p>{count}</p>
                {/*<h3>Todo List</h3>*/}
                {todos?.map((item) => (<li>{item}</li>))}
                <button onClick={handleIncrement}>Increment +</button>
                <button onClick={() => dispatch(add("Code"))}>Add to List +</button>
                <button onClick={() => dispatch(deleteTodo())}>Delete </button>
                <button onClick={handleDecrement}>Decrement -</button>
            </div>
        </Layout>
    )
}

export default ReduxPage;