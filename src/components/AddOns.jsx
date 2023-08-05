import { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addOnsAction } from "../features/user"
import './AddOns.css'

function AddOns() {
  const monthly = useSelector((state)=> state.user.value.plan.isMonthly)
  const selectedOns = useSelector((state)=> state.user.value.addOns)
  const dispatch = useDispatch()
  const serviceRef = useRef()
  const storageREf = useRef()
  const profileRef = useRef()

  const [activeAdds, setAtiveAdds] = useState({ service: false, storage: false, profile: false})

  useEffect(()=>{
    setAtiveAdds({ service: selectedOns.onlineService.added, storage: selectedOns.storage.added, profile: selectedOns.customizableProfile.added })
    serviceRef.current.checked = selectedOns.onlineService.added
    storageREf.current.checked = selectedOns.storage.added
    profileRef.current.checked = selectedOns.customizableProfile.added
  }, [])

  const addOn = {
    onlineService: monthly? 1:10,
    storage:monthly? 2:20,
    profile: monthly? 2: 20,
    info: monthly? '/mo': '/yr'
  }

  const addOnsStore = (add) => {
    if(add === 'service') {
      serviceRef.current.checked = !serviceRef.current.checked
      setAtiveAdds({...activeAdds, service: !activeAdds.service})
    } else if( add === 'storage') {
      storageREf.current.checked = !storageREf.current.checked
      setAtiveAdds({...activeAdds, storage: !activeAdds.storage})
    } else if(add === 'profile') {
      profileRef.current.checked = !profileRef.current.checked
      setAtiveAdds({...activeAdds, profile: !activeAdds.profile})
    }
    dispatch(addOnsAction(add))
  }

  const actives = {
    borderColor: 'var(--purplish-blue)',
    backgroundColor: 'var(--alabaster)'
  }

  const inactives = {
    borderColor: 'var(--cool-gray)',
    backgroundColor: 'var(--white)'
  }

  return (
    <div className='add-ons'>
      <div className="adds" onClick={()=>addOnsStore('service')} style={activeAdds.service? actives: inactives}>
        <input type="checkbox" ref={serviceRef} />
        <div className="adds-info">
          <p className='tile'>Online Service</p>
          <p className='sub'>Access to mutiplyaer games</p>
        </div>
        <p className='addd-prie'>+${ addOn.onlineService }{addOn.info}</p>
      </div>

      <div className="adds" onClick={()=>addOnsStore('storage')} style={activeAdds.storage? actives: inactives}>
        <input type="checkbox" ref={storageREf} />
        <div className="adds-info">
          <p className='tile'>Larger Storage</p>
          <p className='sub'>Extra 1TB of cloud save</p>
        </div>
        <p className='addd-prie'>+${ addOn.storage }{addOn.info}</p>
      </div>

      <div className="adds" onClick={()=>addOnsStore('profile')} style={activeAdds.profile? actives: inactives}>
        <input type="checkbox" ref={profileRef} />
        <div className="adds-info">
          <p className='tile'>Customizable profile</p>
          <p className='sub'>Custom theme on your profile</p>
        </div>
        <p className='addd-prie'>+${ addOn.profile }{addOn.info}</p>
      </div>

    </div>
  )
}

export default AddOns