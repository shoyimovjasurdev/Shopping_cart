const initialState = []

function cardReducer(state = initialState, action){
  if(action.type==="additem"){
    let currentCard = [...state]
    if(currentCard.indexOf(action.payload)==-1){
      currentCard.push(action.payload)
    }
    return state=currentCard
  }
  if(action.type==="deleteitem"){
    let currentCard= [...state]
    let son = action.payload
    currentCard.splice(son,1)
    return state=currentCard
  }
  if(action.type==="increment"){
    let currentCard= [...state]
    let son = action.payload
    currentCard.map((e,index)=>{
      if(e==son){
        e.counter=e.counter+1
      }
    })
    return state=currentCard
  }
  if(action.type==="decrement"){
    let currentCard= [...state]
    let son = action.payload
    currentCard.map((e,index)=>{
      if(e==son){
        if(e.counter>1){
          e.counter=e.counter-1
        }
      }
    })
    return state=currentCard
  }
  return state
}
export {cardReducer}