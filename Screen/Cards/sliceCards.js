// sliceCards.js
import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    setItemCards: (state, action) => {
      return action.payload;
    },
    incrementAmount: (state, action) => {
      const itemId = action.payload;
      const item = state.find((item) => item._id === itemId);
      if (item) {
        item.count += 1;
      }
    },
    decrementAmount: (state, action) => {
      const itemId = action.payload;
      const item = state.find((item) => item._id === itemId);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    },
    removeFromCard: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item._id !== itemId);
    },
  },
});

export const {
  setItemCards,
  incrementAmount,
  decrementAmount,
  removeFromCard,
} = cardsSlice.actions;

export default cardsSlice.reducer;




// import { createSlice } from "@reduxjs/toolkit";

// const initial= {
//     card:[],
//     // increment:[],
//     // decrement:[],
//     // delete:[],
// }
 
// const cardsSlice= createSlice({
//     name:"cards",
//     initialState:initial,
//     reducers: {
//         setAddCards:(state,action) =>{
//             const setItemCards = state.card.find((item) =>item.id == action.payload.id)
//             if(setItemCards)
//             {
//                 setItemCards.amount++;
//             }
//             else
//             {
//                 state.card.push({...action.payload,price:1})
//             }

//             // state.add = action.payload;
//         },
//         removeFromCard:(state,action) =>{
//             const removeFromCard= state.card.filter((item) => item.id !==  action.payload.id);
//             state.card=removeFromCard;

//         },
//         incrementAmount:(state,action)=> {
//          const incrementAmount = state.card.find((item) =>item.id == action.payload.id);
//          incrementAmount.amount++;

//         },
//         dencrementAmount:(state,action) =>{
//             const setItemCards = state.card.find((item) =>item.id == action.payload.id);
//            if(setItemCards.amount == 1)
//            {
//             const removeFromCard= state.card.filter((item) => item.id !==  action.payload.id);
//             state.card=removeFromCard; 
//            }
//            else{
//             setItemCards.amount++;
//            }

//         }
//     },
// })
// export default cardsSlice.reducer
// export const {setAddCards,removeFromCard,incrementAmount,dencrementAmount} = cardsSlice.actions