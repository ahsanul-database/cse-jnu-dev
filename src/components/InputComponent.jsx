import { useState } from "react";
import cn from "../utility/cn";

const InputComponent = ({
  children,
  defaultValue,
  className,
  name,
  handleInputChange,
  ...rest
}) => {
  const [value, setvalue] = useState(defaultValue);
  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  handleInputChange && handleInputChange(name, value);
  return (
    <div className="space-y-2 text-sm">
      <label>{children}</label>
      <input
        {...rest}
        defaultValue={defaultValue}
        className={cn(
          "w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none   ",
          className
        )}
        // value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputComponent;
