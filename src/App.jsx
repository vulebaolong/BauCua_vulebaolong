import "./App.css";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Play from "./components/Play";

function App() {
    return (
        <div className="container mx-auto">
            <Header />
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-8">
                    <ListItem />
                </div>
                <div className="col-span-4 flex justify-center items-center">
                    <Play />
                </div>
            </div>
        </div>
    );
}

export default App;
