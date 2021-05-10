import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from "./useLocalStorageState";

const useTodoState = (key, defaultVal) => {

    const [todos, setTodos] = useLocalStorageState(key, defaultVal);

    const addNewTodo = (newText, completed) => {
        setTodos([...todos, {id: uuidv4(), text: newText, completed: completed}]);
    }

    const toggleChecked = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return [todos, setTodos, addNewTodo, toggleChecked, removeTodo];
}

export default useTodoState;