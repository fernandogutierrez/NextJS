import { combineReducers, createStore } from 'redux'


const initialStateLogin = {
    email: "",
    password: ""
}

const initialStateRegister = {
   firstName: "",
   lastName: "",
   age: "",
   email: "",
   password: ""
}

const login = (state = initialStateLogin, action) => {
   switch (action.type) {
       case "LOGIN_USER_SUCCESS":
           return { ...action }
       case "LOGIN_USER_ERROR":
           return { ...state }
       default:
           return { ...state }
   }
}

const register = (state = initialStateRegister, action) => {
    switch (action.type) {
        case "REGISTER_USER_SUCCESS":
            return { ...action }
        case "REGISTER_USER_ERROR":
            return { ...state }
        default:
            return { ...state }
    }
 }

const reducers = combineReducers({
      login,
      register
});

const store = createStore(reducers);
export default store;
