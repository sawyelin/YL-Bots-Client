'use client'

import Layout from '../../components/layout'
import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Play, Pause, Edit } from 'lucide-react'

const mockBots = [
  { id: 1, name: 'Bot 1', status: 'Active' },
  { id: 2, name: 'Bot 2', status: 'Inactive' },
  { id: 3, name: 'Bot 3', status: 'Active' },
]

export default function Bots() {
  const [bots, setBots] = useState(mockBots)
  const [search, setSearch] = useState('')

  const filteredBots = bots.filter(bot => 
    bot.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Manage Bots</h1>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search bots..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredBots.map((bot) => (
            <TableRow key={bot.id}>
              <TableCell>{bot.name}</TableCell>
              <TableCell>{bot.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="icon" className="mr-2">
                  {bot.status === 'Active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button variant="outline" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  )
}

