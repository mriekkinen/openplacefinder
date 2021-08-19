import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./reducer";
import { State } from './state';

// Pre-typed hooks for managing state
// https://redux.js.org/usage/usage-with-typescript
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
