import { useEffect, useState } from "react"
import Table from "../components/Table"
import Navbar from "../components/Navbar"

export default function Home() {
  const initialState = {
    entry: [
      {
        id: 1,
        amount: 3000,
        description: "Ad said 3k",
      },
      {
        id: 2,
        amount: -8000,
        description: "Rent?",
      },
      {
        id: 3,
        amount: 500,
        description: "Daily Bugle salary",
      },
      {
        id: 4,
        amount: -7000,
        description: "Fixed the door",
      },
    ],
  }

  const [entries, setEntries] = useState(initialState)

  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Table entry={entries.entry} />
      </div>
    </div>
  )
}
