import React,{useState} from 'react'
import AnotherChild from './AnotherChild'
import GrandChildComponet from './GrandChildComponet'
import {ThemeContext} from './MyContext'

function ChildComponent() {
  return <GrandChildComponet />
}

const Theme = () => {
  const [theme, setTheme] = useState('dark')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildComponent />
      <AnotherChild />
    </ThemeContext.Provider>
  )
}
export default Theme;



