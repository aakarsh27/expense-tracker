import Header from "./components/Header.jsx"
import Balance from "./components/Balance.jsx"
import IncomeExpenses from "./components/IncomeExpenses.jsx"
import TransactionList from "./components/TransactionList.jsx"
import AddTransaction from "./components/AddTransaction.jsx"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses/>
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  )
}

export default App
