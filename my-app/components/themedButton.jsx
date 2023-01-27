import { useContext } from "react";
import { ThemeData } from "./themeContext";

const ThemedButton = () => {
    const {theme}= useContext(ThemeData)
    console.log(theme)
    return ( 
        <button className="p-2 m-4 rounded-full" style={theme}>Hello !</button>
     );
}
 
export default ThemedButton;