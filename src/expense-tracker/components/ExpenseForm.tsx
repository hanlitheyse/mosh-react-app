import { FieldValues, useForm } from "react-hook-form";

interface ExpenseFormData {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true })}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description?.type === "required" && (
          <p>The description is required</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { required: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount?.type === "required" && <p>The amount is required</p>}
      </div>
      <div className="mb-3">
        <select
          {...register("category", { required: true })}
          className="form-select"
        >
          <option value=""></option>
          <option key="Utilities" value="Utilities">
            Utilities
          </option>
          <option key="Groceries" value="Groceries">
            Groceries
          </option>
          <option key="Entertainment" value="Entertainment">
            Entertainment
          </option>
        </select>
      </div>
      <div className="mb-5">
        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
