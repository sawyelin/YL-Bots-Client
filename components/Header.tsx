import { Bell, Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="text-gray-500 dark:text-gray-200 focus:outline-none lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 text-xl font-bold text-gray-800 dark:text-white">YL Telebots Admin</div>
          </div>
          <div className="flex items-center">
            <button
              className="text-gray-500 dark:text-gray-200 focus:outline-none mr-4"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
            <button className="text-gray-500 dark:text-gray-200 focus:outline-none">
              <Bell className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

