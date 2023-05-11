import { AppDispatch, RootState } from "store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useStoreDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
