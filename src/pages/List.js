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
    };

    const handleChipEntry = (chip) => {
        setChipList([...chipList, chip]);
    };

    const handleChipExit = (id) => {
        const newChipList = chipList.filter(ch => ch.id !== id);
        setChipList(newChipList);
    };

    return (
        <div className='flex flex-wrap gap-2 items-start mt-5'>
            {chipList.map((chip) => (
                <Chip key={chip.id} chip={chip} handleChipExit={() => handleChipExit(chip.id, chip)} />
            ))}

            <div className="flex flex-col rounded-md p-1 w-[400px]">
                <Input searchQuery={searchQuery} handleSearchChange={handleSearchChange} />

                <div className='shadow-lg mt-4'>
                    {visible && filteredSnacks.map((snack) => (
                        <ListItem snack={snack} handleChipEntry={handleChipEntry} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default List;
