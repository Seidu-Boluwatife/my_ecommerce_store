import type { ReactNode } from "react";

export type ButtonProps  ={
    children:ReactNode;
    icon?: React.ReactElement;
    className?:string;
    onClick?:(event: React.MouseEvent<HTMLButtonElement>)=>void
}