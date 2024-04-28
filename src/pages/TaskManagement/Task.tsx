import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { VscVmActive } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

type TaskPropsType = {
  task: {
    id: number;
    text: string;
    completed: boolean;
    startDate: string;
  };
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
};

const Task = ({ task, onDelete, onComplete, onUpdate }: TaskPropsType) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleComplete = () => {
    onComplete(task.id);
  };

  const handleUpdate = () => {
    onUpdate(task.id, editedText);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  if (!task.text) {
    return <div>Empty Task</div>;
  }

  // const formatStartDate = (dateString: string) => {
  //   const date = new Date(dateString);
  //   return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  // };

  const formatStartDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };



  return (
    <div>
      {isEditing ? (
        <div className="bg-[#00000016] p-5 flex flex-row justify-center items-center  space-x-10">
           <div className="flex flex-col">
           <label>Add Task</label>
          <input
            type="text"
            value={editedText}
            onChange={handleChange}
            className="border outline-none py-2 px-2"
          />
          
          </div>
          <div>
          <button
            className="bg-[#00000091] text-white    hover:text-black  md:rounded-full"
            onClick={handleUpdate}
          >
            Save
          </button>
          </div>

        </div>
      ) : (
        <div>
          <div className="bg-white w-full md:w-[350px] shadow  rounded space-y-4 ">
            <div
              style={{
                backgroundColor: task.completed ? "#4f934f" : "#f6f281",
                color: task.completed ? "white" : "#000",
                padding: task.completed ? "8px" : "8px",
              }}
            >
              <div className="font-bold flex items-center ">
                <div>{task.text}</div>
                
                
                <div>
                 
                  {task.completed && (
                    <FaCheckCircle style={{ marginLeft: "5px" }} />
                  )}
                </div>
              </div>
              
            </div>

            <div className="space-y-5 p-3">
            
            
            
            <div> <b>Start Date:</b> {formatStartDate(task.startDate)}</div>
              <div className="flex p-1 border-b gap-3">
                
                <div>Delete</div>
                <div
                  onClick={handleDelete}
                  className="cursor-pointer font-bold text-red-600 outline-none border-none"
                >
                  <MdDeleteForever size={25} />
                </div>
              </div>
              <div className="flex p-1 border-b gap-3">
                <div>Complete</div>
                <div
                  onClick={handleComplete}
                  className="cursor-pointer font-bold text-green-600 outline-none border-none"
                >
                  <VscVmActive size={25} />
                </div>
              </div>

              <div className="flex p-1  gap-3">
                <div>Edit</div>
                <div
                  onClick={() => setIsEditing(true)}
                  className="cursor-pointer font-bold text-blue-600 outline-none border-none"
                >
                  <FiEdit size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
