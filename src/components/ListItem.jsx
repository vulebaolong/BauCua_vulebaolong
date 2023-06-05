import React, { Component } from "react";

export default class ListItem extends Component {
    render() {
        return (
            <div className="grid grid-cols-3 gap-4 ">
                <div className="p-2 border border-solid border-1 border-slate-500 rounded-lg">
                    <div className="mb-2">
                        <img className="rounded-lg" src="./img/bau.jpg" alt="" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="btn">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        <span>0</span>
                        <button className="btn">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div className="p-2 border border-solid border-1 border-slate-500 rounded-lg">
                    <div className="mb-2">
                        <img className="rounded-lg" src="./img/ca.jpg" alt="" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="btn">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        <span>0</span>
                        <button className="btn">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div className="p-2 border border-solid border-1 border-slate-500 rounded-lg">
                    <div className="mb-2">
                        <img className="rounded-lg" src="./img/cua.jpg" alt="" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="btn">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        <span>0</span>
                        <button className="btn">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div className="p-2 border border-solid border-1 border-slate-500 rounded-lg">
                    <div className="mb-2">
                        <img className="rounded-lg" src="./img/ga.jpg" alt="" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="btn">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        <span>0</span>
                        <button className="btn">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div className="p-2 border border-solid border-1 border-slate-500 rounded-lg">
                    <div className="mb-2">
                        <img className="rounded-lg" src="./img/nai.jpg" alt="" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="btn">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        <span>0</span>
                        <button className="btn">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div className="p-2 border border-solid border-1 border-slate-500 rounded-lg">
                    <div className="mb-2">
                        <img className="rounded-lg" src="./img/tom.jpg" alt="" />
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="btn">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                        <span>0</span>
                        <button className="btn">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
