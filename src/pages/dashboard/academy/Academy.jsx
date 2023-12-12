import ScoutCard from '../../../components/dashboard/scoutCard/ScoutCard'
import './Academy.css'

const Academy = () => {
    return (
        <div className='academy'>
            <h4>Scouting Network</h4>
            <div className='scouts'>
                <ScoutCard id={999997} name={"Philip Sheehan"} nationality={"Ireland"} experience={5} judgement={5} country={"England"} />
                <ScoutCard id={999998} name={"Kevin Lindqvist"} nationality={"Sweden"} experience={5} judgement={5} country={"Ireland"} />
                <ScoutCard id={999996} name={"Alan Devlin"} nationality={"Nothern"} experience={3} judgement={4} country={"Scotland"} />
            </div>
        </div>
    )
}

export default Academy