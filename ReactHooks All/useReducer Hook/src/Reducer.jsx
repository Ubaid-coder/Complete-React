
function Reducer(state, action) {
   if(action.type == 'INC'){
    return state+1
   }
   if(action.type == 'DEC'){
    let newNum = 0;
    state >= 1? newNum = state - 1: newNum = 0;
    return newNum;
   }
   return state
}

export default Reducer