import React, { useState} from 'react'
import './Body.css'
import lotPolish from '../../images/lotPolish.png'
import { connect } from 'react-redux'



const BodyContainer = (props) => {
   
 
    let flightsRace = props.reducerState.result.flights

    //цены по возрастанию
    
    
    

    let tabletTicket = flightsRace.map(item => {
    
        
        {/* PreContainer for arr from test task */ }
        return (
            <div>
                <div className='Body_Container' id={item.flightToken}>

                    <div className='Body_Item'>
                        <div style={{ color: 'white', marginLeft: '5px' }}>
                            <img src={lotPolish} alt="image" />
                            {item.flight.carrier.caption}
                        </div>
                        <div>
                            <div>
                                {item.flight.price.total.amount} {item.flight.price.total.currency}
                            </div>
                            <div>
                                Стоимость для одного взрослого пассажира
                            </div>
                        </div>
                    </div>

                    <div className='Body_Center'>
                        <div>
                        {item.flight.legs[0].segments.length ===1 && <div>
                            {item.flight.legs[0].segments[0].departureAirport.caption} ({ item.flight.legs[0].segments[0].departureAirport.uid}) →
                            { item.flight.legs[0].segments[0].arrivalAirport.caption} ({ item.flight.legs[0].segments[0].arrivalAirport.uid})
                            </div>}
                            {item.flight.legs[0].segments.length ===2 && <div>
                            { item.flight.legs[0].segments[0].departureAirport.caption} ({ item.flight.legs[0].segments[0].departureAirport.uid}) →
                            { item.flight.legs[0].segments[1].arrivalAirport.caption} ({ item.flight.legs[0].segments[1].arrivalAirport.uid})
                            </div>}
                            
                        </div>
                        <hr />
                        {item.flight.legs[0].segments.length === 1 && <div className='Time'>
                            <div> {item.flight.legs[0].segments[0].departureDate.split('T')[1].slice(0, 5)} {item.flight.legs[0].segments[0].departureDate.split('T')[0]} </div>
                            {
                            <div>{(Math.floor(item.flight.legs[0].duration/60))-2} ч {item.flight.legs[0].duration-(Math.floor(item.flight.legs[0].duration/60)*60)} мин</div>}

        <div>{item.flight.legs[0].segments[0].arrivalDate.split('T')[0]} {item.flight.legs[0].segments[0].arrivalDate.split('T')[1].slice(0, 5)}</div>
                        </div>}

                       {item.flight.legs[0].segments.length === 2 &&  <div className='Time'>
                            <div>{item.flight.legs[0].segments[0].departureDate.split('T')[1].slice(0, 5)} {item.flight.legs[0].segments[0].departureDate.split('T')[0]} </div>
                            <div>{(Math.floor(item.flight.legs[0].duration/60))-2} ч {item.flight.legs[0].duration-(Math.floor(item.flight.legs[0].duration/60)*60)} мин </div>
        <div>{item.flight.legs[0].segments[1].arrivalDate.split('T')[0]} {item.flight.legs[0].segments[1].arrivalDate.split('T')[1].slice(0, 5)}</div>
                        </div>}
                        {/* tranfer or not */}

                        {item.flight.legs[0].segments.length ===2 ? 
                            <div id='transfer' className='between'>

                        
                            </div>:
                            <div id='transfer' className='between2'>

                        
                            </div>
                        }

                        <div className="Body_preFooter">
                            Рейс выполняется: {item.flight.legs[0].segments[0].airline.caption}
                        </div>
                        

                        <hr />
                    </div>

                
                    <div className='Body_Center'>
                        <div >
                         {item.flight.legs[1].segments.length === 1 && <div>   
                        {item.flight.legs[1].segments[0].departureAirport.caption} ({ item.flight.legs[1].segments[0].departureAirport.uid}) →
                            { item.flight.legs[1].segments[0].arrivalAirport.caption} ({ item.flight.legs[1].segments[0].arrivalAirport.uid})
                            </div>}

                            {item.flight.legs[1].segments.length === 2 && <div>
                            {item.flight.legs[1].segments[0].departureAirport.caption} ({ item.flight.legs[1].segments[0].departureAirport.uid}) →
                            {item.flight.legs[1].segments[1].arrivalAirport.caption} ({ item.flight.legs[1].segments[1].arrivalAirport.uid})
                            </div>}

                        </div>
                        <hr />
                        <div >
                        {item.flight.legs[1].segments.length === 1 && <div className='Time'>
                            <div> {item.flight.legs[1].segments[0].departureDate.split('T')[1].slice(0, 5)} {item.flight.legs[1].segments[0].departureDate.split('T')[0]} </div>

                            <div>{(Math.floor(item.flight.legs[1].duration/60))+2} ч {item.flight.legs[1].duration-(Math.floor(item.flight.legs[1].duration/60)*60)} мин</div>

        <div>{item.flight.legs[1].segments[0].arrivalDate.split('T')[0]} {item.flight.legs[1].segments[0].arrivalDate.split('T')[1].slice(0, 5)}</div>
                        </div>}

                       {item.flight.legs[1].segments.length === 2 &&  <div className='Time'>
                            <div> {item.flight.legs[1].segments[0].departureDate.split('T')[1].slice(0, 5)} {item.flight.legs[1].segments[0].departureDate.split('T')[0]} </div>

                            <div>{(Math.floor(item.flight.legs[1].duration/60))+2} ч {item.flight.legs[1].duration-(Math.floor(item.flight.legs[1].duration/60)*60)} мин</div>

        <div>{item.flight.legs[1].segments[1].arrivalDate.split('T')[0]} {item.flight.legs[1].segments[1].arrivalDate.split('T')[1].slice(0, 5)}</div>
                        </div>}

                        </div>
                        {item.flight.legs[1].segments.length ===2 ? 
                            <div id='transfer' className='between'>

                        
                            </div>:<div id='transfer' className='between2'>

                        
                            </div>
                        }
                        {item.flight.legs[0].segments.length === 2 && <div className="Body_preFooter">
                            Рейс выполняется: { item.flight.legs[0].segments[1].airline.caption}
                        </div>}
                        {item.flight.legs[0].segments.length === 1 && <div className="Body_preFooter">
                            Рейс выполняется: {item.flight.legs[0].segments[0].airline.caption}
                        </div>}

                    </div>
                    
                    <div className='Body_Footer'>
                        ВЫБРАТЬ
                    </div>
                </div>



            </div>
        )
    })

    

    // Хуки для кнопки ShowMore, но тогда не будут сортироваться весь массив, а только то, что на экране

    // const [count, setCount] = useState(2)
    // const [arr, setArr] =useState([tabletTicket[0],tabletTicket[1]])
    
    
    // const add = () => {
    //     console.log(count)
    //     setArr(arr.concat(tabletTicket[count+1]))
        
    //     setCount(count+1)
        
    // }
    
    
    
    return (
        <div style={{width: '750px'}}>

            {tabletTicket}
            
            <div style={{textAlign: 'center', marginTop: '50px'}}>
                <button >Показать больше</button>
            </div>
        </div>
    )
}


let mapStateToProps=(state)=>({
        
        reducerState: state.reducerState.ticketJSON,
        ticket: state.reducerState.ticketItem
    
})

export const Body = connect(mapStateToProps)(BodyContainer)

