import {configureStore} from "@reduxjs/toolkit"
import {cardReducer} from "./Reducer/Card"

const store = configureStore({
  reducer:{
    card:cardReducer
  }
})
export default store