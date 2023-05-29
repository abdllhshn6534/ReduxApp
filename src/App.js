import React from 'react'
import { useSelector } from 'react-redux';
import DarkModeSwitcher from './components/dark-mode/dark-mode-switcher.js';
import LangSwitcher from './components/lang-switcher/lang-switcher.js';
import "./App.css"
import { $t } from './helpers/locale-helper.js';

const App = () => {
  const darkMode = useSelector(state => state.theme.darkMode);
  // TÜm App i re-render yapmak için yazdık
  const currentLang = useSelector(state => state.locale.lang)
  return (
    /*Bütün reducer yapısını burda alıyoruz*/
 
      <div className={darkMode ? "dark" : ""}>
        <DarkModeSwitcher />
        <LangSwitcher />
        <h1>{$t("hello-world")}</h1>
      </div>
 

  )
}

export default App