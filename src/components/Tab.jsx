import './Tab.css'
import { useSelector } from "react-redux"

function Tab() {
  const index = useSelector((state)=> state.user.value.currentForm)

  const tabs = [
    {
      tab: 1,
      step: 'STEP 1',
      title: 'YOUR INFO'
    },
    {
      tab: 2,
      step: 'STEP 2',
      title: 'SELECT PLAN'
    },
    {
      tab: 3,
      step: 'STEP 3',
      title: 'ADD-ONS'
    },
    {
      tab: 4,
      step: 'STEP 4',
      title: 'SUMMARY'
    }
  ]
  
  const active = {
    backgroundColor: 'var(--light-gray)',
    color: 'var(--marine-blue)'
  }

  const inactive = {
    backgroundColor: 'transparent',
    color: 'var(--white)'
  }

  return (
    <div className='tabs'>
      { tabs.map((tab, i)=>(
        <div className="tab" key={i}>
          <div className="tab-icon" style={(i===index? active: inactive )} >{tab.tab}</div>
          <div className="tab-info">
            <p className="tab-eyebrow">{tab.step}</p>
            <p className="tab-title">{tab.title}</p>
          </div>
        </div>
      )) }
    </div>
  )
}

export default Tab