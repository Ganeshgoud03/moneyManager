// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionItem, deleteTransactionItem} = props

  const {id, title, amount, type} = transactionItem

  const onDeleteTransaction = () => {
    deleteTransactionItem(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <button
        className="delete-button"
        type="button"
        onClick={onDeleteTransaction}
        data-testid="delete"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
