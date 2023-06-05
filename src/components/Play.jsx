import React, { Component } from "react";

export default class Play extends Component {
    render() {
        return (
            <div className="flex flex-col">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 justify-items-center items-center rounded-full w-96 h-96 p-20 border border-solid border-1 border-slate-500">
                    <div className="">
                        <img className="w-full" src="./img/dice/1_dot.png" alt="" />
                    </div>
                    <div className=" row-start-2 col-start-2">
                        <img src="./img/dice/2_dots.png" alt="" />
                    </div>
                    <div className=" col-start-3">
                        <img src="./img/dice/3_dots.png" alt="" />
                    </div>
                </div>
                <button className="btn mx-auto mt-5">Xốc</button>
            </div>
        );
    }
}
