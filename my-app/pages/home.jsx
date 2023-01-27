import ThemeContext from "@/components/themeContext"
import ThemedButton from "@/components/themedButton"
import ThemeToggler from "@/components/themeToggler"
import { ThemeData } from "@/components/themeContext"
import { createContext, useCallback, useContext } from "react"
import ThemedContainer from "@/components/themeContainer"


export default function Home(){
    return(
        <ThemeContext>
            <ThemedContainer>
                <ThemedButton/>
                <ThemeToggler></ThemeToggler>
            </ThemedContainer>
        </ThemeContext>
    )
}