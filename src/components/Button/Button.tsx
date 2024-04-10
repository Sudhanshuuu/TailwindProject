import React from "react";

type buttonProps = {
    onClick: () => void,
    children: React.ReactNode
}

function Button({ children, onClick }: buttonProps) {

    return (<button onClick={onClick} className="mx-0.5 w-8 h-8 text-sm rounded-full border border-solid transition duration-300 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
        {children}
    </button>)
}

export default Button;