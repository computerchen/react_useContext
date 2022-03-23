import React, {useState} from 'react'
import Theme from './Theme';
import { ThemeContext } from './MyContext';

function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Theme />
    </ThemeContext.Provider>
  )
}
export default App;

// echo "# react_useContext" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/computerchen/react_useContext.git
// git push -u origin main