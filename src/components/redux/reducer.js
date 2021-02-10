import ticketJSON from '../../dataJSON/flights.json'

let a = ticketJSON

const initialState={
    ticket: a,
    ticketJSON: ticketJSON,
    

    
}


export const reducerState=(state = initialState, action)=>{
    
    switch(action.type){
        case 'BACK':{
            return {ticketJSON}
        }
        case 'PRICE_MORE':{
            return {...state, ticketJSON: {result: {flights: state.ticketJSON.result.flights.map(item=>item).sort((prev,next) =>parseInt(prev.flight.price.total.amount) - parseInt(next.flight.price.total.amount))}}}}
        case 'PRICE_LESS':{
            return {...state, ticketJSON: {result: {flights: state.ticketJSON.result.flights.map(item=>item).sort((prev,next) =>parseInt(prev.flight.price.total.amount) - parseInt(next.flight.price.total.amount)).reverse()}}}}
        case 'TRANSFER_TIME':{
            return {...state, ticketJSON: {result: {flights: state.ticketJSON.result.flights.map(item=>item).sort((prev,next) =>prev.flight.legs[0].duration - next.flight.legs[0].duration)}}}
        }
        case 'NOT_RESEAT':{
            return {...state, ticketJSON: {result: {flights: state.ticket.result.flights.filter(item=>item.flight.legs[0].segments.length===1 && item.flight.legs[1].segments.length===1 )}}}
        }
        case '1_RESEAT':{
            return {...state, ticketJSON: {result: {flights: state.ticket.result.flights.filter(item=>((item.flight.legs[0].segments.length===1 || item.flight.legs[1].segments.length===1) && (item.flight.legs[0].segments.length !== item.flight.legs[1].segments.length) ))}}}
        }
        case 'FROM_PRICE':{
            return {...state, ticketJSON: {result: {flights: state.ticket.result.flights.filter(item=>(parseInt(item.flight.price.total.amount) > action.count))}}}
        }
        case 'TO_PRICE':{
            return {...state, ticketJSON: {result: {flights: state.ticket.result.flights.filter(item=>(parseInt(item.flight.price.total.amount) < action.count))}}}
        }
        case 'CAPTION':{
            return {...state, ticketJSON: {result: {flights: state.ticket.result.flights.filter(item=>item.flight.carrier.caption===action.caption)}}}
        }
        
        
        default: 
            return state
    }
}

export const changePriceMore = (type) => ({type: type})
export const changeTransfer = (type) => ({type: type})
export const changeBack = () => ({type: 'BACK'})
export const changeFromPrice = (count) => ({type: 'FROM_PRICE', count})
export const changeToPrice = (count) => ({type: 'TO_PRICE', count})
export const changeCaption = (caption) => ({type: 'CAPTION', caption})




