import { useContext } from "react";
import { StateContext, DispatchContext } from "components/Providers";

export const useAppState = () => useContext(StateContext);
export const useAppDispatcher = () => useContext(DispatchContext);
