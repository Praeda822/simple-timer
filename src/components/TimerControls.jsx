const TimerControls = ({ isRunning, toggleTimer, resetTimer }) => {
  return (
    <div className="p-4 bg-purple-200 rounded-lg shadow">
      <h3 className="text-xl font-semibold">TimerControls</h3>
      <div className="mt-2">
        <button
          onClick={toggleTimer}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-3"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerControls;
