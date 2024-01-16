import React, { useEffect, useState } from 'react';
import { snacks } from "../constants";
import Chip from '../components/Chip';
import Input from '../components/Input';
import ListItem from '../components/ListItem';

const List = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSnacks, setFilteredSnacks] = useState(snacks);
    const [chipList, setChipList] = useState([]);
    const [visible, setVisible] = useState(false);
    const [highlightedChipIndex, setHighlightedChipIndex] = useState(null);

    useEffect(() => {
        const updatedFilteredSnacks = snacks.filter(snack =>
            snack.name.toLowerCase().includes(searchQuery.toLowerCase()) && !chipList.some(chip => chip.id === snack.id)
        );
        setFilteredSnacks(updatedFilteredSnacks);
    }, [chipList, searchQuery]);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setVisible(true);

        if (query === '' && chipList.length > 0) {
            setHighlightedChipIndex(chipList.length - 1);
        } else {
            setHighlightedChipIndex(null);
        }
    };

    const handleChipEntry = (chip) => {
        setChipList([...chipList, chip]);
        setHighlightedChipIndex(null);
    }

    const handleChipExit = (id) => {
        const newChipList = chipList.filter(ch => ch.id !== id);
        setChipList(newChipList);
        setHighlightedChipIndex(null);
    };

    const handleBackspace = () => {

        if (searchQuery === '' && chipList.length > 0 && highlightedChipIndex === null) {
            setHighlightedChipIndex(chipList.length - 1);
        } else if (highlightedChipIndex !== null) {

            const newChipList = chipList.filter((_, index) => index !== highlightedChipIndex);
            setChipList(newChipList);
            setHighlightedChipIndex(null);
        }
    };

    return (
        <div className='flex flex-wrap gap-2 items-start mt-5'>
            {chipList.map((chip, index) => (
                <Chip
                    key={chip.id}
                    chip={chip}
                    handleChipExit={() => handleChipExit(chip.id)}
                    highlighted={index === highlightedChipIndex}
                />
            ))}

            <div className="flex flex-col rounded-md p-1 w-[400px]">
                <Input
                    searchQuery={searchQuery}
                    handleSearchChange={handleSearchChange}
                    handleBackspace={handleBackspace}
                />

                <div className='shadow-lg mt-4'>
                    {visible && filteredSnacks.map((snack) => (
                        <ListItem key={snack.id} snack={snack} handleChipEntry={handleChipEntry} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default List;



