import './Transfers.css'

import { useState } from 'react'
import TransferCard from '../transferCard/TransferCard'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const Transfers = ({ transfers, year }) => {

    const [visibleTransfers, setVisibleTransfers] = useState(4);

    const handleLoadMore = () => {
        if (visibleTransfers + 4 >= transfers.length) {
            setVisibleTransfers(transfers.length);
        } else {
            setVisibleTransfers(visibleTransfers + 4);
        }
    };


    return (
        <div>
            {transfers
                .filter(transfer => transfer.year === year)
                .slice(0, visibleTransfers)
                .map(transfer => <TransferCard key={transfer.id} transfer={transfer} />
                )}

            {visibleTransfers < transfers.length && (
                <div className='buttons'>
                    <button className="show-more-button" onClick={handleLoadMore}>
                        <FaAngleDown />
                        Show More
                    </button>
                    {visibleTransfers > 4 && (
                        <button className="show-less-button" onClick={() => setVisibleTransfers(4)}>
                            <FaAngleUp />
                            Show Less
                        </button>
                    )}
                </div>
            )}

            {visibleTransfers === transfers.length && (
                <button className="show-less-button" onClick={() => setVisibleTransfers(4)}>
                    <FaAngleUp />
                    Show Less
                </button>
            )}
        </div>

    )
}

export default Transfers