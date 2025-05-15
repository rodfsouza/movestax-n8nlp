    import { Moon, Sun } from "lucide-react"
    import { Button } from "@/components/ui/button"
    import { useTheme } from "@/components/ThemeProvider"
    
    export function ModeToggle() {
      const { theme, setTheme } = useTheme()
    
      return (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>
      )
    }
