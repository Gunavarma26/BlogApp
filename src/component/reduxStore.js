// reduxStore.js

export const initelState = {
    name:'',
    arr:[],
    editBody:''
}


export function setRedux(state=initelState,action={}){
   
    console.log(action)
    switch(action.type){

        case "NAME":
            return{
                ...state,
                name:action.data
            }
        case "ARR_TYPE" : 
         return {
            ...state,
            arr:action
         }
        case "EDIT" : 
         return {
            ...state,
            editBody:action.data
         }
    }
}