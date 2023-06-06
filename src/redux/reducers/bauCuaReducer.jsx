const initialState = {
    listItem: [
        { id: "ga", img: "./img/ga.jpg", point: 0 },
        { id: "bau", img: "./img/bau.jpg", point: 0 },
        { id: "ca", img: "./img/ca.jpg", point: 0 },
        { id: "nai", img: "./img/nai.jpg", point: 0 },
        { id: "cua", img: "./img/cua.jpg", point: 0 },
        { id: "tom", img: "./img/tom.jpg", point: 0 },
    ],
    allPoint: 1000,
    arrDice: [
        { id: "ga", img: "./img/ga.jpg" },
        { id: "bau", img: "./img/bau.jpg" },
        { id: "ca", img: "./img/ca.jpg" },
    ],
};

export const bauCuaReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UP_DOWN_POINT": {
            const copyState = JSON.parse(JSON.stringify(state));
            const { item, option } = payload;
            // tìm index
            const index = copyState.listItem.findIndex(
                (itemFind) => itemFind.id === item.id
            );
            if (index === -1) return copyState;

            //Cộng
            if (option === "up") {
                if (copyState.allPoint > 0) {
                    copyState.listItem[index].point += 100;
                    copyState.allPoint -= 100;
                }
            }

            // Trừ
            if (option === "down") {
                if (copyState.listItem[index].point > 0) {
                    copyState.listItem[index].point -= 100;
                    copyState.allPoint += 100;
                }
            }

            return copyState;
        }

        case "PLAY": {
            const copyState = JSON.parse(JSON.stringify(state));

            // Xử lý random
            copyState.arrDice.forEach((_, i) => {
                const index = Math.floor(Math.random() * 6);
                console.log(index);
                copyState.arrDice[i] = copyState.listItem[index];
            });

            // Xử lý điểm thưởng
            copyState.arrDice.forEach((item) => {
                const index = copyState.listItem.findIndex(
                    (itemFind) => itemFind.id === item.id
                );
                if (index !== -1) {
                    copyState.allPoint += copyState.listItem[index].point;
                }
            });

            // Xử lý hoàn tiền
            copyState.listItem.forEach((item) => {
                const index = copyState.arrDice.findIndex(
                    (itemFind) => itemFind.id === item.id
                );
                if (index !== -1) {
                    copyState.allPoint += item.point;
                }
            });

            // Xử lý reset điểm cược
            copyState.listItem.forEach((_, i) => {
                copyState.listItem[i].point = 0;
            });

            return copyState;
        }

        case "PLAY_AGAIN": {
            const copyState = JSON.parse(JSON.stringify(state));
            copyState.listItem.forEach((_, i) => {
                copyState.listItem[i].point = 0;
            });
            copyState.allPoint = 1000;
            return copyState;
        }

        default:
            return state;
    }
};
