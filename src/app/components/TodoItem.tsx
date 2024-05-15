"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => any;
};

const TodoItem = ({ id, title, complete, toggleTodo }: TodoItemProps) => {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(ev) => toggleTodo(id, ev.target.checked)}
      />
      <label
        htmlFor={id}
        className=" cursor-pointer peer-checked:line-through
      peer-checked: text-state-500"
      >
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
