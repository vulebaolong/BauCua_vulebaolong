import { useSpring, animated } from "@react-spring/web";
import "./Dice.css";
import { memo } from "react";

function Dice(props) {
    const { dice, rotate } = props;
    const [roll, setRoll] = useSpring(() => ({
        from: {
            rotateX: `${0}deg`,
            rotateY: `${0}deg`,
            rotateZ: `${0}deg`,
        },
        to: {
            rotateX: `${rotate.x}deg`,
            rotateY: `${rotate.y}deg`,
            rotateZ: `${rotate.z}deg`,
        },
        reset: true,
    }));
    setRoll({
        from: {
            rotateX: `${Math.floor(Math.random() * 360) + 0}deg`,
            rotateY: `${Math.floor(Math.random() * 360) + 0}deg`,
            rotateZ: `${Math.floor(Math.random() * 360) + 0}deg`,
        },
        to: {
            rotateX: `${rotate.x}deg`,
            rotateY: `${rotate.y}deg`,
            rotateZ: `${rotate.z}deg`,
        },
    });
    return (
        <div className="scene">
            <animated.div className="cube" style={roll}>
                <img className="w-full cube__face one" src={dice.img} alt="" />
                <img className="w-full cube__face two" src="./img/bau.jpg" alt="" />
                <img className="w-full cube__face three" src="./img/ca.jpg" alt="" />
                <img className="w-full cube__face four" src="./img/nai.jpg" alt="" />
                <img className="w-full cube__face five" src="./img/cua.jpg" alt="" />
                <img className="w-full cube__face six" src="./img/tom.jpg" alt="" />
            </animated.div>
        </div>
    );
}
export default memo(Dice);
