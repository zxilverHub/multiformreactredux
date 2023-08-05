import { useSelector } from "react-redux"
import './Titles.css'

function Titles() {
    const index = useSelector((state)=> state.user.value.currentForm)
    const titles = [
        {
            title: 'Personal info',
            sub: 'Please provide your name, email, address, and phone number.'
        },
        {
            title: 'Select your plan',
            sub: 'You have the option of monthly or yearly billing.'
        },
        {
            title: 'Pick add-ons',
            sub: 'Add-ons help enhance your gaming experience.'
        },
        {
            title: 'Finishing up',
            sub: 'Double-check everything looks OK before confirming.'
        },
    ]
    
  return (
    <div className='titles'>
        <h1 className="title">{ titles[index].title }</h1>
        <p className="sub">{titles[index].sub}</p>
    </div>
  )
}

export default Titles