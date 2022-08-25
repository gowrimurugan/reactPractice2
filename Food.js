import "./Food.css";
import {useState} from 'react'

function Food(props) {

const [amount , setAmount] = useState(props.amount)
const [offer , setOffer] = useState(props.offer)
const[dis , setDies] = useState(false)

const updateAmount = ()=>{
    let newAmount = props.amount - ((props.offer/100)*props.amount);
    setAmount(newAmount);
    setOffer();
    setDies(true)
}

    return (
        <div className='food-box'>
            <div className='food-image'>
                <img src={props.image} />
            </div>
            <h2 className="food-name">{props.name}</h2>
            <p className="food-amount">${amount}</p>
            <p className="food-offer">{offer}% off</p>
            <button onClick = {updateAmount} disabled={dis}>Offer</button>
        </div>);
}
export default Food;