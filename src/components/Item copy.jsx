import { useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

function Item(props) {
    const [toggleUp, setToggleUp] = useState(true);
    const [toggleDown, setToggleDown] = useState(true);
    const { item } = props;
    const dispatch = useDispatch();
    const { up } = useSpring({
        from: { up: 1 },
        up: toggleUp ? 1 : 0,
        config: { duration: 200 },
    });
    const { down } = useSpring({
        from: { down: 1 },
        down: toggleDown ? 1 : 0,
        config: { duration: 200 },
    });
    const handleUpDownPoint = (data) => {
        if (data.option === "up") setToggleUp(!toggleUp);
        if (data.option === "down") setToggleDown(!toggleDown);
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
                <animated.button
                    style={{
                        scale: up.to({
                            range: [0, 0.5, 1],
                            output: [1, 1.25, 1],
                        }),
                    }}
                    className="btn"
                    onClick={() => {
                        handleUpDownPoint({ item, option: "up" });
                    }}
                >
                    <i className="fa-solid fa-plus"></i>
                </animated.button>
                <span>{item.point}</span>
                <animated.button
                    style={{
                        scale: down.to({
                            range: [0, 0.5, 1],
                            output: [1, 1.25, 1],
                        }),
                    }}
                    className="btn"
                    onClick={() => {
                        handleUpDownPoint({ item, option: "down" });
                    }}
                >
                    <i className="fa-solid fa-minus"></i>
                </animated.button>
            </div>
        </>
    );
}
export default Item;
