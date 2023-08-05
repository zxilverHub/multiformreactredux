import React from 'react'
import './App.css'
import { Tab, Titles, YourInfo, SelectPlan, AddOns, Summary, FormPageButtons, Confirm } from './components/Index'
import { useSelector } from 'react-redux'

function CurrrentFormPage() {
  const form = useSelector( (state) => state.user.value.currentForm )
  switch(form) {
    case 0:
      return <YourInfo />
    case 1:
      return <SelectPlan />
    case 2:
      return <AddOns />
    case 3:
      return <Summary />
  }
}

function App() {
  const confirm = useSelector((state)=> state.user.value.confirmed)

  return (
    <>
      <Tab />
      {confirm ? 
      <Confirm /> :
      <>
      <div className="forms">
        <Titles />
        <CurrrentFormPage />
      </div>
      <FormPageButtons />
      </>
      }
    </>
  )
}

export default App