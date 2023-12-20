import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-xs font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextarea ? (
        <textarea {...props} className={classes} ref={ref}></textarea>
      ) : (
        <input {...props} className={classes} ref={ref}></input>
      )}
    </div>
  );
});

export default Input;
