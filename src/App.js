import './App.css';
import { Random } from './components/Random';
import { Tag } from './components/Tag';

function App() {
  return (
    <div className=" flex flex-col gap-4 items-center bg-gradient-to-r from-indigo-500 to-sky-500 ">
      <h1 className="bg-white max-w-[90vw] w-full py-2 mt-8 text-center text-[1.5rem] font-semibold rounded-md">Random GIF Generator</h1>
      <div className="flex flex-col gap-8">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
