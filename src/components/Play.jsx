import { useDispatch, useSelector } from "react-redux";
import Dice from "./Dice/Dice";

function Play() {
    const arrDice = useSelector((state) => state.bauCuaReducer.arrDice);
    const dispatch = useDispatch();

    const handlePlay = () => {
        const action = {
            type: "PLAY",
            payload: "",
        };
        dispatch(action);
    };
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 grid-rows-2 gap-4 justify-items-center items-center rounded-full w-96 h-96 p-20 border border-solid border-1 border-slate-500">
                <div className="">
                    <Dice dice={arrDice[0]} />
                </div>
                <div className=" row-start-2 col-start-2">
                    <Dice dice={arrDice[1]} />
                </div>
                <div className=" col-start-3">
                    <Dice dice={arrDice[2]} />
                </div>
            </div>
            <button
                className="btn mx-auto mt-5"
                onClick={() => {
                    handlePlay();
                }}
            >
                Xốc
            </button>
        </div>
    );
}
export default Play;
