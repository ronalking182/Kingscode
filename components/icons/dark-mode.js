import classes from './dark-mode.module.css'
import Dark from './dark'
import Light from './light'






  

const DarkMode = () => {
    
    const setDark = () => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", "dark");
         }
        document.documentElement.setAttribute("data-theme", "dark");
      };
      
      const setLight = () => {
        if (typeof window !== "undefined") {

            localStorage.setItem("theme", "light");
            
            }
        document.documentElement.setAttribute("data-theme", "light");
      };
      
      
      let  storedTheme

      if (typeof window !== "undefined") {

         storedTheme = localStorage.getItem("theme");
        
        }

        let prefersDark
        if (typeof window !== "undefined") {
         prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
           }
      
      const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);
      if (defaultDark) {
        setDark();
      }
      
      // 5
      const toggleTheme = (e) => {
        if (e.target.checked) {
          setDark();
        } else {
          setLight();
        }
      };



    return (
<div className={classes.toggle_theme_wrapper}>
     <span><Light /></span>
      <label className={classes.toggle_theme} htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"

          // 6
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className={classes.slider}></div>
      </label>
      <span><Dark/></span>
    </div>
    );
  }
  
  export default DarkMode;