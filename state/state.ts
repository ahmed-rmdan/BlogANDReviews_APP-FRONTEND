import { createSlice ,configureStore} from "@reduxjs/toolkit";
import { postsadminreduicer } from "./reducers/postsadmin";

const postsadminslice=createSlice({name:'pages',initialState:{noposts:0,nopages:1,activepage:1},reducers:postsadminreduicer})

export const postsadminactions=postsadminslice.actions


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store=configureStore({reducer:{pages:postsadminslice.reducer}})