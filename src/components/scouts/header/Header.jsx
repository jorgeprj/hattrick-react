import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Header = ({ column, sortColumn, sortOrder, handleSort }) => {
    return (
        <th onClick={() => handleSort(column)} className='click'>
            {column} {sortColumn === column && (
                sortOrder === 'asc' ? <FaArrowUp /> : <FaArrowDown />
            )}
        </th>
    );
};

export default Header;