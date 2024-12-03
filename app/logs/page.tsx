'use client'

import Layout from '../../components/layout'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Logs() {
  const [logs, setLogs] = useState<string[]>([])
  const [selectedLog, setSelectedLog] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    // Simulating fetching log files
    setLogs(['log1.txt', 'log2.txt', 'log3.txt'])
  }, [])

  const filteredLogs = logs.filter(log => 
    log.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Log Viewer</h1>
      <div className="flex space-x-4 mb-4">
        <Input
          type="text"
          placeholder="Search logs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Select onValueChange={setSelectedLog}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select log file" />
          </SelectTrigger>
          <SelectContent>
            {filteredLogs.map((log) => (
              <SelectItem key={log} value={log}>{log}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button>View Log</Button>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <pre className="whitespace-pre-wrap">
          {selectedLog ? `Viewing log: ${selectedLog}` : 'Select a log file to view its contents'}
        </pre>
      </div>
    </Layout>
  )
}

