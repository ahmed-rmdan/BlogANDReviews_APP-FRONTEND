export const postsadminreduicer={
    setpages(state:{noposts:number,nopages:number,activepage:number},action:{type:string,payload:{noposts:number,activepage:number}}){
                 const nopages=action.payload.noposts/6
                return state={nopages,noposts:action.payload.noposts,activepage:action.payload.activepage}
    },




}