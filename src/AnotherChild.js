import React,{useContext} from 'react'
import {ThemeContext} from './MyContext'

const AnotherChild = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div>    

            <div>The theme is theme {theme}</div>
            <button onClick={() => setTheme('light')}>
                Change To Light Theme
            </button>
            <button onClick={() => setTheme('dark')}>
                Change To Dark Theme
            </button>
            
    
        </div>
    )
}

export default AnotherChild