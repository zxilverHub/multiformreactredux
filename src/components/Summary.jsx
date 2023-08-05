import { useSelector, useDispatch } from "react-redux"
import './Summary.css'
import { currentFormAction } from "../features/user"

function Summary() {
  const summary = useSelector((state)=> state.user.value.summary)
  const span = useSelector((state)=> state.user.value.plan.isMonthly)
  const total = useSelector((state)=> state.user.value.sTotal)

  const dispatch = useDispatch();

  return (
    <div className='summary'>
      <div className="summary-plans">
        <div className="summary-plan__level">
          <div className="summary-plan__main">
            <p className="title">{summary.sLevel} ({summary.sSpan})</p>
            <p className="change sub" onClick={()=>dispatch(currentFormAction(1))}>Change</p>
          </div>
          <p className="summarty-plan__plan-price title">+${ span? `${summary.sSubcribe}/mo`: `${summary.sSubcribe*10}/yr`}</p>
        </div>
        <hr />
        { summary.sAddOns.length !== 0 &&
        <div className="summary-plan__add-ons">
        { summary.sAddOns.map((add, i)=>(
          <div key={i} className="summary-add-ons">
            <p className="sub">{ add.addOnsName }</p>
            <p className="summary-add-ons-price">+${span? `${add.addOnsPrie}/mo`: `${add.addOnsPrie*10}/yr`}</p>
          </div>
        )) }
        </div>
        }
        
      </div>

      <div className="total-card">
          <p className="total-text sub">Total (per {span? 'month':'year'})</p>
          <p className="total">${span? `${total}/mo`:`${total}/yr`}</p>
        </div>
    </div>
  )
}

export default Summary