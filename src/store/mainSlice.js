import {createSlice} from "@reduxjs/toolkit";

const initialState= {
    currentClothing: {
        pants: {
            isCurrent: false,
            color: "red"
        },
        bolk: {
            isCurrent: false,
            color: "red"
        }
    },
    isShowCard: false,
    typeCurrentCard: ""
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        selectProduct(state, action){
            state.currentClothing[action.payload].isCurrent = !state.currentClothing[action.payload].isCurrent
        },
        changeColor(state, action){
            if (state.currentClothing[action.payload.type].color !== action.payload.color){
                state.currentClothing[action.payload.type].color = action.payload.color
            }
        }
        ,
        showCard(state, action){
            state.isShowCard = true
            state.typeCurrentCard = action.payload
        },
        hideCard(state){
            state.isShowCard = false
        },
        setTypeCurrentCard(state, action){

        }
    }
})

export const {hideCard, showCard, selectProduct, changeColor} = mainSlice.actions
export const mainSelector = (state) => state.main
export default mainSlice.reducer