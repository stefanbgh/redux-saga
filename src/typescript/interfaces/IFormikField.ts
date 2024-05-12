import { ChangeEventHandler, FocusEventHandler, FormEventHandler, MouseEventHandler } from "react";

export interface IFormikField {
    id: string;
    text?: string;
    name: string;
    value: string;
    placeholder?: string; 
    error: string | undefined;
    touched: boolean | undefined;
    handleClose?: MouseEventHandler<HTMLButtonElement>;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleBlur?: FocusEventHandler<HTMLInputElement>;
};