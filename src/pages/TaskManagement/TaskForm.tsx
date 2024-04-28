import { useState } from "react";

type TaskFormProps = {
  onAdd: (text: string, startDate: string) => void; // Updated onAdd function to accept startDate
};

const TaskForm = ({ onAdd }: TaskFormProps) => {
  const [text, setText] = useState("");
  const [startDate,setStartDate] =useState("")

  const handleAddTask = () => {
    if (!text.trim() || !startDate.trim()) return; // Check both text and startDate are not empty
    onAdd(text,startDate); // Pass text and startDate to onAdd function
    setText("");
    setStartDate("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value); // Update only the startDate state
  };

  return (
    <div className="md:flex mt-5 gap-5 p-5 appearance-none bg-[#00000016] items-center space-y-5">
      
      <div className="md:flex md:gap-5 md:items-center md:space-y-0 space-y-3">
      <div className="flex flex-col">
        <label>Task Name</label>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="border outline-none py-2 px-2 text-gray-500"
          placeholder="Enter the Task Name"
        />
      </div>
      <div className="flex flex-col">
      <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={handleDateChange}
          className="border outline-none py-2 px-2 text-gray-500"
         
        />
      </div>
      </div>


      <div className="flex flex-col">
        <button
          onClick={handleAddTask}
          className={`bg-[#00000091] text-white px-5 py-2  border-none hover:text-black  md:rounded-full  border `}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
