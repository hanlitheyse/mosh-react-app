interface Props {
  onSelectFilter: (category: string) => void;
}
const ExpenseFilter = ({ onSelectFilter }: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={(event) => onSelectFilter(event.target.value)}
      >
        <option value="">All categories</option>
        <option value="Utilities">Utilities</option>
        <option value="Groceries">Groceries</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
