import { useState } from "react"
import { atom, useRecoilState } from "recoil"
const darModeAtom = atom({
  key: "darkMode",
  default: false,

})
const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useRecoilState(darModeAtom);
  
  return <input type="checkbox"
    checked={darkMode}
    onChange={e => setDarkMode(e.currentTarget.checked)}
  />
}
const Button = () => {
  const [darkMode, setDarkMode] = useState(false);
  return <button>My UI Button</button>
}
export const Atoms = () => {
  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}