import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { IoIosArrowDown } from "react-icons/io";

const TaskManagement = () => {
  const [tasks, setTasks] = useState<any>([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [search,setSearch] = useState("");

  const handleAddTask = (text: string,startDate: any) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      startDate
    };
    setTasks([...tasks, newTask]);
   
  };

  const handleDeleteTask = (id: number) => {
    alert("Are you sure you want to delete?")
    setTasks(tasks.filter((task: { id: number }) => task.id !== id));
  };

  const handleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((task: { id: number; completed: any }) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
   
  };

  const handleUpdateTask = (id: number, newText: string) => {
    setTasks(
      tasks.map((task: { id: number; text: string }) => {
        if (task.id === id) {
          return { ...task, text: newText };
        }
        return task;
      })
    );
    alert("Confirm")
  };

  const handleSort = (option: string) => {
    setSortBy(option);
    let sortedTasks = [...tasks];
    if (option === "text") {
      sortedTasks.sort((a, b) => a.text.localeCompare(b.text));
    } else if (option === "completed") {
      sortedTasks.sort((a, b) => Number(a.completed) - Number(b.completed));
    }
    setTasks(sortedTasks);
  };

 


  const handleFilter = (option: string) => {
    setFilterBy(option);
    let filteredTasks = tasks;
    if (option === "completed") {
      filteredTasks = tasks.filter(
        (task: { completed: any }) => task.completed
      );
    } else if (option === "pending") {
      filteredTasks = tasks.filter(
        (task: { completed: any }) => !task.completed
      );
    }
    setTasks(filteredTasks);
  };

 
  const filteredTasks = tasks.filter((task: { text: string }) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div className="p-5 space-y-5">
      <div className="text-xl font-semibold text-gray-600">New Task</div>
      <TaskForm onAdd={handleAddTask} />
      <div className="space-y-5 md:space-y-0 md:flex md:gap-3 items-center">

        <div className="w-full md:w-auto md:flex md:gap-3 md:space-y-0  space-y-3">
        <div className="relative inline-block w-full md:w-auto">
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="w-full text-gray-500 appearance-none bg-[#00000016]  hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Sort By</option>
            <option value="text">Task Name</option>
            <option value="completed">Completed</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <IoIosArrowDown />
          </div>
        </div>
        <div className="relative inline-block w-full md:w-auto">
          <select
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full text-gray-500 appearance-none bg-[#00000016]  hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Filter By</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <IoIosArrowDown />
          </div>
        </div>
        </div>


        <div className="">
          {/* Search input field */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tasks..."
            className="border outline-none py-2 px-2 w-full"
          />
        </div>
      </div>
      {filteredTasks.length > 0 ? (
        <TaskList
          tasks={filteredTasks}
          onDelete={handleDeleteTask}
          onComplete={handleCompleteTask}
          onUpdate={handleUpdateTask}
        />
      ) : (
        <div className="flex justify-center items-center">No tasks</div>
      )}
    </div>
  );
};

export default TaskManagement;
