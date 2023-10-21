interface Expense {
  description: string;
  amount: number;
  category: string;
  id: number;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseTracker = ({ expenses, onDelete }: Props) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>${expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              ${expenses.reduce((acc, expense) => expense.amount + acc, 0)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseTracker;
