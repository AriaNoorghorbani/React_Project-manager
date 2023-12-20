export default function Input({ label, isTextarea, ...props }) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-xs font-bold uppercase text-stone-500">
        {label}
      </label>
      <input type={isTextarea ? "textarea" : "text"} {...props} />
      {isTextarea ? (
        <textarea {...props} className={classes}></textarea>
      ) : (
        <input {...props} className={classes}></input>
      )}
    </div>
  );
}
