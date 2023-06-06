import { useDispatch } from "react-redux";

function Item(props) {
    const dispatch = useDispatch();
    const { item } = props;
    const handleUpDownPoint = (data) => {
        dispatch({
            type: "UP_DOWN_POINT",
            payload: data,
        });
    };
    return (
        <>
            <div className="mb-2">
                <img className="rounded-lg" src={item.img} alt="" />
            </div>
            <div className="flex gap-3 items-center">
                <button
                    className="btn"
                    onClick={() => {
                        handleUpDownPoint({ item, option: "up" });
                    }}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
                <span>{item.point}</span>
                <button
                    className="btn"
                    onClick={() => {
                        handleUpDownPoint({ item, option: "down" });
                    }}
                >
                    <i className="fa-solid fa-minus"></i>
                </button>
            </div>
        </>
    );
}
export default Item;
