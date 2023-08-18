import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionTypes: transactionTypeOptions,
    transactionList: [],
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: typeInput,
    }

    const isIncome = typeInput === 'INCOME'

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
      totalBalance: isIncome
        ? prevState.totalBalance + newTransaction.amount
        : prevState.totalBalance - newTransaction.amount,
      totalIncome: isIncome
        ? prevState.totalIncome + newTransaction.amount
        : prevState.totalIncome,
      totalExpense: !isIncome
        ? prevState.totalExpense + newTransaction.amount
        : prevState.totalBalance,
    }))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({typeInput: event.target.value})
  }

  deleteTransactionItem = id => {
    const {transactionList} = this.state
    const deletedTransaction = transactionList.find(
      eachTransaction => eachTransaction.id === id,
    )
    if (!deletedTransaction) return

    const isIncome = deletedTransaction.type === 'INCOME'
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
      totalBalance: isIncome
        ? prevState.totalBalance - deletedTransaction.amount
        : prevState.totalBalance + deletedTransaction.amount,
      totalIncome: isIncome
        ? prevState.totalIncome - deletedTransaction.amount
        : prevState.totalIncome,
      totalExpense: !isIncome
        ? prevState.totalExpense - deletedTransaction.amount
        : prevState.totalExpense,
    }))
  }

  render() {
    const {
      transactionTypes,
      transactionList,
      titleInput,
      amountInput,
      typeInput,
      totalBalance,
      totalIncome,
      totalExpense,
    } = this.state

    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="top-heading">Hi, Richard</h1>
          <p className="top-para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          totalBalance={totalBalance}
          totalIncome={totalIncome}
          totalExpense={totalExpense}
        />
        <div className="bottom-container">
          <div className="transaction-container">
            <h1 className="bottom-head">Add Transaction</h1>
            <form className="form-container" onSubmit={this.onAddTransaction}>
              <label className="input-label" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={titleInput}
                onChange={this.onChangeTitle}
                placeholder="TITLE"
                className="input"
              />
              <label className="input-label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="number"
                id="amount"
                value={amountInput}
                onChange={this.onChangeAmount}
                placeholder="AMOUNT"
                className="input"
              />
              <label className="input-label" htmlFor="type">
                TYPE
              </label>
              <select
                id="type"
                value={typeInput}
                className="input"
                onChange={this.onChangeType}
              >
                <option value={transactionTypes[0].optionId}>
                  {transactionTypes[0].displayText}
                </option>
                <option value={transactionTypes[1].optionId}>
                  {transactionTypes[1].displayText}
                </option>
              </select>
              <button type="submit" className="btn">
                Add
              </button>
            </form>
          </div>
          <div className="transaction-list">
            <h1 className="bottom-head2">History</h1>
            <ul className="list-container">
              <li className="transaction-item">
                <p className="p1">Title</p>
                <p className="p1">Amount</p>
                <p className="p1">Type</p>
              </li>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  transactionItem={eachTransaction}
                  deleteTransactionItem={this.deleteTransactionItem}
                  key={eachTransaction.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
