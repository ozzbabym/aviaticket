import React from 'react'
import { connect } from 'react-redux'
import './NavBar.css'
import {changePriceMore, changeTransfer, changeBack,changeFromPrice,changeToPrice,changeCaption} from '../redux/reducer' 
import ticketJSON from '../../dataJSON/flights.json'

export const NavBarContainer = (props) =>{
    
    

    const changeRadio=(event)=>{
        
        props.changePriceMore(event.target.value)
        changeCheckbox(event)
    }

    const changeCheckbox=(event)=>{
        
        if(event.target.checked){
            props.changeTransfer(event.target.value)     
        }
        
        
        
        
        
    }


    const fromPrice=(event)=>{
        
        props.changeFromPrice(event.target.value)
    }
    const toPrice = (event)=>{
        
        props.changeToPrice(event.target.value)
    }
    

    const changeCaption=(event)=>{
        
        props.changeCaption(event.target.value)
    }


    const arrCarrierCaption = ticketJSON.result.flights.map(item=>item.flight.carrier.caption)


    const uniqueArray = arrCarrierCaption.filter(function(item, pos) {
        return arrCarrierCaption.indexOf(item) == pos;
    })

   
    

    return(
        <div className='BarMain'>
            <div className='header'>

            </div>
            <div className='body'>
                <div className='body_container' onChange={changeRadio}>
                    <div>
                        Сортировать
                    </div>
                
                    <div>
                        <input id='1' name='MorePrice' value='PRICE_MORE' type='radio'></input> - по возростанию цены
                    </div>
                    <div>                  
                        <input id='2' name='MorePrice'  value='PRICE_LESS' type='radio'></input> - по убыванию цены
                    </div>
                    <div>
                        <input id='3' name='MorePrice' value='TRANSFER_TIME' type='radio'></input> - по времени в пути
                    </div>

                </div>
                <div className='body_container' onChange={changeCheckbox}>
                    <div>
                        Фильтровать
                    </div>
                    <div >
                        <input type='checkbox' value='1_RESEAT'></input> - 1 пересадка
                    </div>
                    <div>                  
                        <input type='checkbox' value='NOT_RESEAT'></input> - без пересадок
                    </div>
                    
                </div>

                <div className='body_container'>
                    <div>
                        Цена
                    </div>
                    <div style={{marginBottom: '20px'}}>
                        От <input placeholder='0' onChange={fromPrice}></input>
                    </div>
                    <div>                  
                        До <input placeholder='10000' onChange={toPrice}></input>
                    </div>
                    
                </div>

                <div className='body_container' onChange={changeCaption}>
                    <div>
                        Авиакомпании
                    </div>
                    {/* Get items from array  from JSON Test Task from folder dataJSON and set input*/}
                    
                    {uniqueArray.map(item=>
                    <div>
                        <input type='checkbox' value={item}></input> - {item}
                    </div>)
                    }
                    
                    
                </div>

            </div>
            <div className='footer'>

            </div>
        </div>
    )
}

const mapStateToProps=(state)=>({
    state: state.reducerState
})


export const NavBar = connect(mapStateToProps,{changeCaption,changePriceMore, changeTransfer,changeBack,changeFromPrice,changeToPrice})(NavBarContainer)