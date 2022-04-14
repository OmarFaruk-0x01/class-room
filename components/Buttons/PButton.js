
const PButton = ({title, onClick, className}) => {
    return (<button className={`py-3 px-3 w-fit bg-c_orange text-white text-xs rounded mt-5 font-semibold hover:bg-c_orange_dark ${className}`}>
          {title}
        </button>)
}

export default PButton;