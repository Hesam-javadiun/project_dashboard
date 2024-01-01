import { ReactNode, useCallback, useState } from "react";
import { ThemeContext } from "~context/theme-context";
import themes from "~utils/themes";
import type { Theme } from "~utils/themes";

type ThemeProviderProps = {
    children: ReactNode
}

export default function ThemeProvider({children}: ThemeProviderProps){

    const [theme, setTheme] = useState<Theme>(themes.getBrowserDefault());

    const ToggleTheme = useCallback(() => {
        setTheme(pervTheme => {
            if(pervTheme === themes.colors.DARK){
                return themes.colors.LIGHT
            }else{
                return themes.colors.DARK
            }
        })
    }, []) 

    const forDarkMode = useCallback((classes: string[]) => {
        return themes.generateAssignClassFunction(themes.colors.DARK, theme) (classes)
    }, [theme]);

    const forLightMode = useCallback((classes: string[]) => {
        return themes.generateAssignClassFunction(themes.colors.LIGHT ,theme)(classes)
    }, [theme])
    
    const contextValue = {
        theme, 
        ToggleTheme,
        forDarkMode,
        forLightMode
    }

    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}