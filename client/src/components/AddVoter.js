const AddVoter = ({ newVoter, setNewVoter, addNewVoter, newVoterStatus }) => {
	const handleNewVoter = (e) => {
		setNewVoter(e.target.value);
	};
	return (
		<div>
			<h4  style={{ color:'white' }}>Give right to vote</h4>
			<p  style={{ color:'white' }}>(only chairman can give vote right)</p>
			<div
				style={{
					width: '15em',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<input value={newVoter} onChange={handleNewVoter} />
				<button onClick={addNewVoter}  >Give right</button>
			</div>
			{newVoterStatus && <p  style={{ color:'white' }}>Status: {newVoterStatus}</p>}
		</div>
	);
};

export default AddVoter;
