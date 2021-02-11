import React from 'react'
import { connect } from 'react-redux'
import './NavBar.css'
import {changePriceMore, changeTransfer, changeBack,changeFromPrice,changeToPrice,changeCaption} from '../redux/reducer' 
import ticketJSON from '../../dataJSON/flights.json'



export const NavBarContainer = (props) =>{
    
    

    const change=()=>{
        props.changeBack()
        if(document.getElementById('1').checked){
            props.changePriceMore('PRICE_MORE')
        }
        if(document.getElementById('2').checked){
            props.changePriceMore('PRICE_LESS')
        }
        if(document.getElementById('3').checked){
            props.changePriceMore('TRANSFER_TIME')
        }
        if(document.getElementById('from').checked){
            props.changeTransfer('1_RESEAT')  
        }
        if(document.getElementById('to').checked){
            props.changeTransfer('NOT_RESEAT') 
        }
        
        props.changeFromPrice(document.getElementById('fromPrice').value)
        
        if(document.getElementById('toPrice').value>document.getElementById('fromPrice').value){
        props.changeToPrice(document.getElementById('toPrice').value)}
        
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
                <div className='body_container' onChange={change}>
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
                <div className='body_container' onChange={change}>
                    <div>
                        Фильтровать
                    </div>
                    <div >
                        <input id='from' type='checkbox' value='1_RESEAT'></input> - 1 пересадка
                    </div>
                    <div>                  
                        <input id='to' type='checkbox' value='NOT_RESEAT'></input> - без пересадок
                    </div>
                    
                </div>

                <div className='body_container' onChange={change}>
                    <div>
                        Цена
                    </div>
                    <div style={{marginBottom: '20px'}}>
                        От <input id='fromPrice' placeholder='0' ></input>
                    </div>
                    <div>                  
                        До <input id='toPrice' placeholder='10000' ></input>
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