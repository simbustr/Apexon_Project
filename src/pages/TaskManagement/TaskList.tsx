import Task from "./Task";

type TaskType = {
  id: number;
  text: string;
  completed: boolean;
  startDate: string;
};

type TaskListProps = {
  tasks: TaskType[];
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
};

const TaskList = ({ tasks, onDelete, onComplete, onUpdate }: TaskListProps) => {
  return (
    <div>
      <div className="w-full  md:flex flex-wrap gap-5 ">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
