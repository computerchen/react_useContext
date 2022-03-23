import React from 'react'
import {ThemeContext} from './MyContext'

function GrandChildComponet()  {
  return (
    <div>
        <ThemeContext.Consumer>
        {({ theme, setTheme }) => {
          return (
            <>
              <div>The theme is theme {theme}</div>
              <button onClick={() => setTheme('light')}>
                Change To Light Theme
              </button>
            </>
          )
        }}
      </ThemeContext.Consumer>
    </div>
  )
}

export default GrandChildComponet