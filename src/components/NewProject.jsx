import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title"></Input>
        <Input label="Description" isTextarea></Input>
        <Input label="Due Date"></Input>
      </div>
    </div>
  );
}
