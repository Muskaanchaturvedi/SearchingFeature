const Input = (props) => {
    const { searchQuery, handleSearchChange, handleBackspace } = props;
    return (
        <input
            type='text'
            placeholder="Search snacks"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={(e) => e.key === 'Backspace' && handleBackspace()}
            className="pl-2 w-[429px] border-b-4 py-2 border-solid border-blue-400 focus:ring-0 focus-visible:outline-none"
        />
    );
};
export default Input;
