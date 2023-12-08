import './TransferMarket.css'

import Transfers from '../../../components/dashboard/transfers/Transfers'

const TransferMarket = ( {transfers, year} ) => {
    return (
        <div className='transfer-market'>
            <div className='last-transfers'>
                <h4>Last Transfers</h4>
                <Transfers transfers={transfers} year={year} />
            </div>
        </div>
    )
}

export default TransferMarket