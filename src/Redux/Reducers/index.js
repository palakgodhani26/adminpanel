import { combineReducers } from "redux";
import Medicines from "../../containres/Medicines/Medicines";
import { counterReducer } from "./Counter.Reducer";
import { MedicinesReducer } from "./Medicines.Reducer";

export const  rootReducer = combineReducers({
    counter:counterReducer,
    Medicines:MedicinesReducer
})