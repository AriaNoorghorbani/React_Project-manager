import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
  const enteredTitle = useRef();
  const enteredDescription = useRef();
  const enteredDueDate = useRef();

  function handleSave() {
    const newProject = {
      title: enteredTitle.current.value,
      description: enteredDescription.current.value,
      dueDate: enteredDueDate.current.value,
    };

    onAdd(newProject);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" ref={enteredTitle} type="text"></Input>
        <Input label="Description" isTextarea ref={enteredDescription}></Input>
        <Input label="Due Date" ref={enteredDueDate} type="date"></Input>
      </div>
    </div>
  );
}
