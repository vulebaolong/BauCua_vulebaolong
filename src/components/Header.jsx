import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center text-5xl font-bold">Bầu Cua</h1>
                <div className="text-center flex justify-center items-center mt-7 mb-5">
                    <div className="p-5 border border-solid border-1 border-slate-500 rounded-lg">
                        <span>Tiền Thưởng:</span> <span>100$</span>
                    </div>
                </div>
                <div className="flex justify-center items-center mb-5">
                    <button className="btn">Chơi Lại</button>
                </div>
            </div>
        );
    }
}
