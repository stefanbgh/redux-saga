import { useDispatch } from "react-redux";
import { AppDispatch } from "typescript/types/AppDispatch";

export const useSetGlobalState = () => useDispatch<AppDispatch>();
