const TimerDisplay = ({ time }) => {
  return (
    <div className="mb-4 p-4 bg-purple-200 rounded-lg shadow">
      <h3 className="text-xl font-semibold">TimerDisplay</h3>
      <p className="text-3xl mt-2">⌛ {time}</p>
    </div>
  );
};

export default TimerDisplay;
