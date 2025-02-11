import { createContext } from "react";
interface ThemeProviderProps {
  children: React.ReactNode;
}
type ThemeContextType = {
  theme: "dark" | "light";
  toggleTheme: () => void;
}
function ThemeProvider(props: ThemeProviderProps) {
  const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { },
  });
  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme: () => { } }}>
      {props.children}
    </ThemeContext.Provider>
  )
} export default ThemeProvider