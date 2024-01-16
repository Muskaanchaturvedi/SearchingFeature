
const ListItem = (props) => {
    const { snack, handleChipEntry } = props;
    return (
        <div key={snack.id} className="flex items-center gap-2 p-1 rounded-md hover:bg-gray-100" onClick={() => handleChipEntry(snack)}>
            <img src={snack.image} alt="pic" className="rounded-full h-10 w-10" />
            <p className="font-medium">{snack.name}</p>
        </div>
    )
}

export default ListItem