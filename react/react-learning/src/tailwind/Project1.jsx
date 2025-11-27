
function Project1() {
  return (
    <div className="bg-blue-900 h-screen w-full">
            <h1 className="text-blue-400 text-center p-12 text-4xl capitalize">webinar<span className="text-white">.gg</span></h1>
            <p className="text-white capitalize text-center text-3xl font-bold">verify your age</p>
                <p className="text-blue-300 text-center text-1xl p-12">please confirm your birth year.This data will noy be stored</p>
            <div className="flex flex-col items-center gap-3">
  <input
    type="text"
    placeholder="your birth year"
    className="p-2 font-bold rounded-md text-white bg-blue-500 text-center"
  />

  <button
    type="submit"
    className="text-white bg-blue-300 w-54 p-2 font-bold rounded-md cursor-pointer"
  >
    Continue
  </button>
</div>

        </div>
  )
}

export default Project1