import Button from "./Button";

export default function Sidebar({ onProjectState }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-9 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>

      <Button onClick={onProjectState}>+ Add Project</Button>
      <ul></ul>
    </aside>
  );
}
