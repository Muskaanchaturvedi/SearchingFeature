import { cross } from "../constants"

const Chip = (props) => {
    const { chip, handleChipExit } = props
    return (
        <div key={chip.id} className="flex items-center gap-2 p-1 rounded-2xl bg-gray-100" >
            <img src={chip.image} alt="pic" className="rounded-full h-8 w-8" />
            <p className=" font-medium ">{chip.name}</p>
            <div onClick={handleChipExit}>{cross}</div>
        </div>
    )
}

export default Chip