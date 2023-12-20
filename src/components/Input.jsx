export default function Input({ label, isTextarea, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <input type={isTextarea ? "textarea" : "text"} {...props} />
    </div>
  );
}
