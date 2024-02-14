import { useState, useEffect, useRef, ChangeEvent } from "react";
import { useKey } from "../hooks/useKey";
import { Input } from "../shadcn/Input";
import { Button } from "../shadcn/Button";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchingItem, setSearchingItem] = useState<string>("");
  const [itemList, setItemList] = useState<string[]>([]);
  // Use the useKey custom hook
  useKey("Enter", handleClick);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function handleClick() {
    alert("Enter key pressed!");
    if (searchingItem.trim() !== "") {
      setItemList(() => [...itemList, searchingItem]);
      setSearchingItem("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }
  function handleSendClick() {
    if (searchingItem.trim() !== "") {
      alert("Send button clicked");
      setItemList(() => [...itemList, searchingItem]);
      setSearchingItem("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchingItem(event.target.value);
  }

  return (
    <div className="max-w-[400px] mx-auto mt-32">
      <h1 className=" pb-2 text-3xl font-semibold tracking-tight text-center">
        <span className="p-2 rounded bg-gray-200">useKey</span> Demo: Your Todo
        List
      </h1>
      <p className="text-sm text-center italic pb-8 ">
        Create a task in the input field and press enter to add it to the list
      </p>
      <div className="flex items-center mx-3 gap-2 top-20">
        <Input
          type="text"
          placeholder="Add a task to do"
          value={searchingItem}
          onChange={handleChange}
          ref={inputRef}
          required
        />
        <Button className="bg-black text-white" onClick={handleSendClick}>
          Add Task
        </Button>
      </div>
      <div className="mt-8  bg-gray-100 p-8 rounded">
        {itemList.length === 0 ? (
          <p className="leading-7 px-10 text-lg italic">
            There are no tasks to do!
          </p>
        ) : (
          <ul className="list-disc">
            {itemList.map((item) => (
              <li className="leading-7 text-lg" key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;