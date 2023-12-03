import './EmployeeCard.css';

import { FaClipboard, FaChartLine } from 'react-icons/fa6';


const EmployeeCard = ({ id, name, nationality, role }) => {

	const abbreviateName = (name) => {
		if (name.length > 11) {
			const [firstName, lastName] = name.split(' ');
			return `${firstName.charAt(0)}. ${lastName}`;
		}
		return name;
	};

    let icon;

    if (role.toLowerCase() === 'coach') {
        icon = <FaClipboard/>;
    }else if (role.toLowerCase() === 'base'){
        icon = <FaChartLine/>;
    }


	return (
		<div className='dashboard-employee-card'>
			<div className='employee-infos'>
				<div className='employee-photo'>
					<img src={`./src/assets/players/${id}.png`} alt={`Employee ${id} Image`} />
				</div>
				<div className='employee-basic-infos'>
					<h4>{abbreviateName(name)}</h4>
					<div className='country'>
						<h5>{nationality}</h5>
						<img src={`./src/assets/flags/${nationality}.png`} alt={`${nationality}`} />
					</div>
				</div>
                <div className='employee-icon'>
                    {icon}
                </div>
			</div>
		</div>
	)
}

export default EmployeeCard