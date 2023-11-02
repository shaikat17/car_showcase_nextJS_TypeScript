import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit" | "reset";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManuFacturerProps {
    manuFacturer: string;
    setManuFacturer: (manuFacturer: string) => void;
}