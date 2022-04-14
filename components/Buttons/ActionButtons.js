const ActionButton = ({ icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-7 h-7 rounded-full bg-white/50 text-white hover:bg-c_orange transition-colors"
    >
      {Icon}
    </button>
  );
};

export default ActionButton;
