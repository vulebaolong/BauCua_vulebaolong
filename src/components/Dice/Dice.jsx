import "./Dice.css";

function Dice(props) {
    const { dice } = props;
    return (
        <div className="scene">
            <div className="cube">
                <img className="w-full cube__face one" src={dice.img} alt="" />
                <img className="w-full cube__face two" src="./img/bau.jpg" alt="" />
                <img className="w-full cube__face three" src="./img/ca.jpg" alt="" />
                <img className="w-full cube__face four" src="./img/nai.jpg" alt="" />
                <img className="w-full cube__face five" src="./img/cua.jpg" alt="" />
                <img className="w-full cube__face six" src="./img/tom.jpg" alt="" />
            </div>
        </div>
    );
}
export default Dice;
