'use client'
import { useTheme } from "next-themes"
import { DropdownMenu } from "./ui/DropdownMenu"

interface Props  {}

const ThemeToggle = (props: Props) => {

    const {setTheme} =useTheme()
  return (
    <DropdownMenu>
        
    </DropdownMenu>
  )
}

export default ThemeToggle