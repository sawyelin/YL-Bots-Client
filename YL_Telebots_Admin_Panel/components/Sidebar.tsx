import { Home, Bot, FileText } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="bg-white dark:bg-gray-800 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link href="/" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <Home className="h-6 w-6" />
          <span>Dashboard</span>
        </Link>
        <Link href="/bots" className="flex items-center space-x-2 px-4 py-2 mt-5 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <Bot className="h-6 w-6" />
          <span>Bots</span>
        </Link>
        <Link href="/logs" className="flex items-center space-x-2 px-4 py-2 mt-5 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <FileText className="h-6 w-6" />
          <span>Logs</span>
        </Link>
      </nav>
    </div>
  )
}

