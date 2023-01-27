import { useContext } from "react";
import { ThemeData } from "./themeContext";

const ThemedContainer = ({children}) => {
    const {theme} = useContext(ThemeData)
    return ( 
        <body style={theme} className="h-screen">
            {children}
        </body>
     );
}
 
export default ThemedContainer;