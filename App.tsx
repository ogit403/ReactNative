import { Provider } from "react-redux";
import FunnyImage from "./pages/FunnyImage";
import GameFindNumber from "./pages/GameFindNumber";
import ToDoList from "./pages/ToDoList";
import storeFunnyImage from "./pages/FunnyImage/store";
import Food from "./pages/Food";
import { foodStore } from "./pages/Food/store";

export default function App() {
    return (
        // <GameFindNumber />
        // <ToDoList />
        <Provider store={foodStore}>
            {/* <FunnyImage /> */}
            <Food />
        </Provider>
    );
}