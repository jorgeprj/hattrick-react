import './WikiCard.css'
import { useNavigate } from 'react-router-dom';

const WikiCard = ({ id, wiki }) => {

	const navigate = useNavigate();
	const redirectToTeamPage = () => navigate(`/team/${id}`);

    return (
        <div className='wiki-card'>
            <h4>Wiki</h4>
            <p>
                {wiki[0]}..  
                {wiki.length > 1  && (
                <button onClick={() => { redirectToTeamPage(); }}>
                    Continue Reading
                </button>
            )}
            </p>
        </div>
    );
};

export default WikiCard;