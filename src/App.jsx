import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="w-full h-auto  flex flex-col background items-center">
      <h1 className="bg-white rounded-lg text-4xl font-bold px-10 py-3 w-11/12 text-center mt-10">RANDOM GIFS</h1>
      <div className="flex flex-col items-center">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
