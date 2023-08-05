import './Confirm.css'
import icon from '../assets/images/icon-thank-you.svg'

function Confirm() {
  return (
    <div className='confirm'>
        <img src={icon} alt="TY" />
        <p className='title ty'>Thank you</p>
        <p className='sub'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free tto email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Confirm