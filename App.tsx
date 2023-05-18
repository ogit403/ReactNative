import { Provider } from "react-redux";
import FunnyImage from "./pages/FunnyImage";
import GameFindNumber from "./pages/GameFindNumber";
import ToDoList from "./pages/ToDoList";
import storeFunnyImage from "./pages/FunnyImage/store";
import Food from "./pages/Food";

export default function App() {
    return (
        // <GameFindNumber />
        // <ToDoList />
        <Provider store={storeFunnyImage}>
            {/* <FunnyImage /> */}
            <Food />
        </Provider>
    );
}