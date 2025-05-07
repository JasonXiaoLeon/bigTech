'use client'

import React, { useEffect, useState } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const COLORS = ['#8884d8', '#82ca9d', '#ffc658']

interface Asset {
  name: string
  amount: number
}

interface Transaction {
  _id: string
  email: string
  type: 'Buy' | 'Sell'
  asset: string
  amount: number
  date: string
}

const MyFinance = () => {
  const [assets, setAssets] = useState<Asset[]>([
    { name: 'Stocks', amount: 0 },
    { name: 'Funds', amount: 0 },
    { name: 'Cryptocurrency', amount: 0 },
  ])
  const [totalBalance, setTotalBalance] = useState(0)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFinance = async () => {
      try {
        const res = await fetch('/api/auth/user/myfinance')
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Failed to load finance')

        const { stocks, funds, cryptocurrency, balance } = data
        setAssets([
          { name: 'Stocks', amount: stocks },
          { name: 'Funds', amount: funds },
          { name: 'Cryptocurrency', amount: cryptocurrency },
        ])
        setTotalBalance(balance)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    const fetchTransactions = async () => {
      try {
        const res = await fetch('/api/auth/user/transactions')
        const data = await res.json()

        if (!res.ok) throw new Error(data.error || 'Failed to load transactions')
        setTransactions(data.transactions)
      } catch (err: any) {
        console.error(err)
      }
    }

    fetchFinance()
    fetchTransactions()
  }, [])

  return (
    <div className="w-[960px] mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">My Investment Account</h1>

      <div className="mb-6">
        <div className="text-sm text-gray-600">Total Investment Balance</div>
        <div className="text-3xl font-semibold text-green-600">
          {loading ? 'Loading...' : `$${totalBalance.toLocaleString()}`}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Asset Allocation</h2>
        <div className="h-64">
          {loading ? (
            <div className="text-gray-500 text-center pt-20">Loading chart...</div>
          ) : (
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={assets}
                  dataKey="amount"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {assets.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Asset Details</h2>
        <ul className="space-y-2">
          {assets.map((asset, index) => (
            <li key={index} className="flex justify-between border-b pb-2">
              <span>{asset.name}</span>
              <span className="text-right">${asset.amount.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
        {transactions.length === 0 ? (
          <p className="text-sm text-gray-500">No transactions found.</p>
        ) : (
          <ul className="divide-y">
            {transactions.map((tx) => (
              <li key={tx._id} className="py-2 flex justify-between text-sm">
                <span>{new Date(tx.date).toLocaleDateString()}</span>
                <span>{tx.type} {tx.asset}</span>
                <span className="text-gray-700">${tx.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && (
        <div className="mt-4 text-red-500 text-center font-medium">
          {error}
        </div>
      )}
    </div>
  )
}

export default MyFinance
