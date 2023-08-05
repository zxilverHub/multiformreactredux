import { useSelector, useDispatch } from "react-redux"
import { currentFormAction, calculateSummary, setConfirm } from '../features/user'
import './FormPageButtons.css'

function FormPageButtons() {
    const index = useSelector((state)=> state.user.value.currentForm)
    const validInput = useSelector((state)=> state.user.value.personanlInfo.validInfo)
    const dispatch = useDispatch();

    const operation = (op) => {
      if(index === 0 && op !== 'add') {}
      else if(index === 0 && op === 'add') {
        if(validInput) dispatch( currentFormAction( (op === 'add'? index + 1 : index - 1) ))
      } else if(index === 2 && op === 'add') {
        dispatch(calculateSummary())
        dispatch( currentFormAction( (op === 'add'? index + 1 : index - 1) ))
      } else if(index === 3 && op === 'add') {
        dispatch(setConfirm())
      } else 
        dispatch( currentFormAction( (op === 'add'? index + 1 : index - 1) ))
    }

    const back = {
      scale: index === 0? '0':'1'
    }

    const confirm = {
      backgroundColor: index === 3? 'var(--purplish-blue)': 'var(--marine-blue)'
    }

  return (
    <div className='page-buttons'>
        <button onClick={()=> operation('minus')} className="go-back" style={back}>Go Back</button>
        <button onClick={()=> operation('add')} className="next-step" style={confirm}>{  ( index === 3?  'Confirm' : 'Next Step')  }</button>
    </div>
  )
}

export default FormPageButtons
