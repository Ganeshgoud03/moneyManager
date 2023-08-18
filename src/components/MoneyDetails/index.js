// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpense} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div className="details-content">
          <p className="details-text">Your Balance</p>
          <p className="details-money" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div className="details-content">
          <p className="details-text">Your Income</p>
          <p className="details-money" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div className="details-content">
          <p className="details-text">Your Expenses</p>
          <p className="details-money" data-testid="expensesAmount">
            Rs {totalExpense}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
