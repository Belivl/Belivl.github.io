import * as React from "react"

import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function LangSelect() {
  const [lang, setLangState] = React.useState<
    "en" | "pl" 
  >("en")

  React.useEffect(() => {
    const isEN = document.documentElement.classList.contains("lang")
    setLangState(isEN ? "pl" : "en")
  }, [])

  React.useEffect(() => {
    const isEN =
      lang === "pl" ||
      (lang === "en" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("pl")
  }, [lang])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <img src="/pl.svg" className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <img src="/en.svg" className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLangState("en")}>
          EN
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLangState("pl")}>
          PL
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}