import {DragDropContext} from "react-beautiful-dnd";
import {useContext, useState} from "react";
import {Sider} from "./Sider.jsx";
import {CryptoContext} from "../../../context/cripto-context.jsx";

export const SiderWithDnD=() =>{
    const { assets, setAssets } = useContext(CryptoContext)
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const startIndex = result.source.index;
        const endIndex = result.destination.index;

        const newAssets = Array.from(assets);

        const [removed] = newAssets.splice(startIndex, 1);

        newAssets.splice(endIndex, 0, removed);

        setAssets(newAssets);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Sider/>
        </DragDropContext>
    );
}
