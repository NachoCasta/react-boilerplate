import { useContext } from "react";
import { StateContext, ActionsContext } from "components/Providers";

export const useAppState = () => useContext(StateContext);
export const useAppActions = () => useContext(ActionsContext);
