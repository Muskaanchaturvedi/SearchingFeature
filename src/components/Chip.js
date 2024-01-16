import { cross } from "../constants"

const Chip = (props) => {
    const { chip, handleChipExit, highlighted } = props;
    const chipClass = `flex items-center gap-2 p-1 rounded-2xl  ${highlighted ? 'bg-gray-200' : 'bg-gray-100'}`;

    return (
        <div key={chip.id} className={chipClass}>
            <img src={chip.image} alt="pic" className="rounded-full h-8 w-8" />
            <p className="font-medium">{chip.name}</p>
            <div onClick={handleChipExit}>{cross}</div>
        </div>
    );
};

export default Chip;