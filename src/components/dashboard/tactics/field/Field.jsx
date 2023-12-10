import './Field.css'

const Field = ({ children }) => {
	return (
	  <div className="field-container">
		<div className="midline"></div>
  
		<div className="goal-area goal-area-top"></div>
		<div className="goal-area goal-area-bottom"></div>
		
		<div className="center-circle"></div>
		{children}
	  </div>
	);
  };
  
  export default Field;