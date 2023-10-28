import { createSlice } from "@reduxjs/toolkit";

// import { createSlice } from "@reduxjs/toolkit"

const initial={
    authStatus:false,
    authLoaded:false,
    authProfile:null,
    authToken:"",
};
const authSlice= createSlice({
    name:'auth',
    initialState:initial,
    reducers: {

    setAuthStatus:(state,action) =>{
        state.authStatus= action.payload;

    },
    setAuthLoaded:(state,action) =>{
        state.authLoaded =action.payload;
    },
    setAuthoProfile:(state,action) =>{
        state.authProfile=action.payload;
    },
    setAuthToken:(state,action) =>{
        state.authToken = action.payload;
    },
},
});
export default authSlice.reducer;

export const {setAuthLoaded,setAuthoProfile,setAuthStatus,setAuthToken} = authSlice.actions;


// const initial= {
//     add:[],
//     increment:[],
//     decrement:[],
//     delete:[],
// }
 
// const cardsSlice= createSlice({
//     name:"card",
//     initialState:initial,
//     reducers: {
//         setAddCards:(state,action) =>{
//             state.add = action.payload;
//         }
//     }
// })
// export default cardsSlice.reducer
// export const {setAddCards} = cardsSlice.actions