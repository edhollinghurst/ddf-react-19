import { useFormApi } from "@data-driven-forms/react-form-renderer";

interface FormTemplateProps {
  id?: string;
  formFields: any[];
  submitLabel?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
}

const FormTemplate = ({
  formFields,
  children,
}: FormTemplateProps): React.ReactElement => {
  const { handleSubmit, onCancel, getState } = useFormApi();

  return (
    <form
      onSubmit={(event): void => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      {formFields}
      {children}
      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="flex justify-end">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
          )}
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              onClick={onCancel}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default FormTemplate;
