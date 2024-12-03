import { Bell, Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="ml-4 text-xl font-bold text-gray-800 dark:text-white">YL Telebots Admin</div>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="mr-4"
            >
              {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

