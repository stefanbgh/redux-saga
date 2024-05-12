import { FormEvent, MouseEventHandler } from "react";

export interface IModalButtons {
    leftBtn: string;
    rightBtn: string;
    rightBtnType: string;
    leftBtnHandleEvent: MouseEventHandler<HTMLButtonElement>;
};