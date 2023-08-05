import './SelectPlan.css'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import { useSelector, useDispatch } from 'react-redux'
import { selectPlan, plaSpanToggle } from '../features/user'

function SelectPlan() {
  const selectedPlan = useSelector((state)=> state.user.value.plan.level.levelName);
  const span = useSelector((state)=> state.user.value.plan.isMonthly);
  const dispatch = useDispatch();

  const levels = [
    {
      icon: arcadeIcon,
      tile: 'Arcade',
      price: 9
    },
    {
      icon: advancedIcon,
      tile: 'Advanced',
      price: 12
    },
    {
      icon: proIcon,
      tile: 'Pro',
      price: 9
    },
  ]


  const setPlan = (title, price)=>{
    dispatch(selectPlan({levelName: title, levelSubcribe: price}))
  }

  // style
  const activePlan = {
    borderColor: 'var(--purplish-blue)',
    backgroundColor: 'var(--alabaster)'
  }

  const inactive = {
    borderColor: 'var(--cool-gray)',
    backgroundColor: 'var(--white)'
  }

  const activeSpan = {
    color: 'var(--marine-blue)'
  }

  const inactiveSpan = {
    color: 'var(--cool-gray)'
  }

  const isMcircle = {
    left: '5px'
  }

  const isYcirle = {
    right: '5px'
  }


  return (
    <div className='select-plan'>
      <div className="plans">
        { levels.map((level, i)=>(
          <div className="card" 
            onClick={()=>setPlan(level.tile, level.price)}
            key={i} style={ level.tile === selectedPlan? activePlan: inactive }>
            <img src={ level.icon } alt={ level.tile } className='plan-icon' />
            <div className="plan-infos">
              <p className='level-title title'>{level.tile}</p>
              <p className='level-price sub'>${ (span? level.price: level.price*10) }/{(span? 'mo':'yr')}</p>
              { !span && <p className='free'>2 months free</p> }
            </div>
          </div>
        )) }
      </div>
      <div className="span-toggle">
        <p className='span-label' style={span? activeSpan: inactiveSpan}>Monthlly</p>
        <div className="toggle-btn" onClick={()=>dispatch(plaSpanToggle())}>
          <div className="toggle-circle" style={span? isMcircle: isYcirle}></div>
        </div>
        <p className='span-label' style={!span? activeSpan:inactiveSpan}>Yearly</p>
      </div>
    </div>
  )
}

export default SelectPlan