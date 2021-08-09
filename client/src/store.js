import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// reducers types
import {
  adminLoginReducer,
  adminRegisterReducer,
  adminDetailsReducer,
} from "./reducers/adminReducers";

import { employeeLoginReducer } from "./reducers/employeeReducer";

const reducer = combineReducers({
  adminLogin: adminLoginReducer,
  adminRegister: adminRegisterReducer,
  adminDetails: adminDetailsReducer,
  employeeLogin: employeeLoginReducer,
});

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const employeeInfoFromStorage = localStorage.getItem("employeeInfo")
  ? JSON.parse(localStorage.getItem("employeeInfo"))
  : null;

const initialState = {
  adminLogin: { adminInfo: adminInfoFromStorage },
  employeeLogin: { employeeInfo: employeeInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
