import { useContext } from "react";
import { ThemeData } from "./themeContext";

const ThemeToggler = () => {
    const {toggleTheme}=useContext(ThemeData)
    console.log(toggleTheme)
    return ( 
        <button onClick={toggleTheme}>Theme toggle</button>
     );
}
 
export default ThemeToggler;