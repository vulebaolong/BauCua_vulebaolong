import { useSelector } from "react-redux";
import Item from "./Item";

function ListItem() {
    const listItem = useSelector((state) => state.bauCuaReducer.listItem);
    return (
        <div className="grid grid-cols-3 gap-4 ">
            {listItem.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="p-2 border border-solid border-1 border-slate-500 rounded-lg"
                    >
                        <Item item={item} />
                    </div>
                );
            })}
        </div>
    );
}
export default ListItem;
