import classNames from "classnames";
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";

const TextField = (props: any): React.ReactElement => {
  const {
    label,
    input,
    disabled,
    type = "text",
    meta: { error, warning, touched },
    ...rest
  } = useFieldApi(props);

  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start mt-5 border-t border-gray-200 pt-5">
      <label
        className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
        htmlFor={input.name}
      >
        {label}
      </label>
      <div className="mt-1">
        <div className="relative">
          <input
            type={type}
            className={classNames(
              "block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
              touched &&
                error &&
                "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red"
            )}
            disabled={disabled}
            {...input}
            {...rest}
          />
          {touched && error && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </div>
          )}
          {touched && warning && !error && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationTriangleIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
        {touched && error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
        {touched && warning && (
          <p className="mt-2 text-sm text-yellow-700">{warning}</p>
        )}
      </div>
    </div>
  );
};

export default TextField;
