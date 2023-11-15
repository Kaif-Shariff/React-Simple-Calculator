import React from "react";

export default function MyButtons(props) {
    return (
        <button className="px-2 mx-2 text-2xl font-bold hover:bg-slate-900 hover:text-white"
        onClick={() => props.onClick(props.operator)}
        >
           {props.operator}
          </button>
    )
}