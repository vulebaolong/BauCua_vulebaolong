import { useDispatch, useSelector } from "react-redux";

function Header() {
    const allPoint = useSelector((state) => state.bauCuaReducer.allPoint);
    const dispatch = useDispatch();
    const handlePlayAgain = () => {
        const action = {
            type: "PLAY_AGAIN",
            payload: "",
        };
        dispatch(action);
    };
    return (
        <div>
            <h1 className="text-center text-5xl font-bold">Bầu Cua</h1>
            <div className="text-center flex justify-center items-center mt-7 mb-5">
                <div className="p-5 border border-solid border-1 border-slate-500 rounded-lg">
                    <span>Tiền Thưởng:</span> <span>{allPoint}$</span>
                </div>
            </div>
            <div className="flex justify-center items-center mb-5">
                <button
                    className="btn"
                    onClick={() => {
                        handlePlayAgain();
                    }}
                >
                    Chơi Lại
                </button>
            </div>
        </div>
    );
}
export default Header;
