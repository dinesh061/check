const CheckVoterAddress = ({
	voterAddressToCheck,
	setVoterAddressToCheck,
	checkAddressVoter,
	voterStatus,
}) => {
	const handleNewAddressToCheckVote = (e) => {
		setVoterAddressToCheck(e.target.value);
	};
	return (
		<div>
			<h4  style={{ color:'white' }}>Check if an address vote status</h4>
			<div
				style={{
					width: '15em',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<input
					value={voterAddressToCheck}
					onChange={handleNewAddressToCheckVote}
				/>
				<button onClick={checkAddressVoter}>Check</button>
			</div>
			{voterStatus !== 'An error has occured' && voterStatus && (
				<div style={{ paddingTop: '2em' }}>
					<h4  style={{ color:'white' }}>Voter Status</h4>
					<p  style={{ color:'white' }}>Account: {voterAddressToCheck}</p>
					<p  style={{ color:'white' }}>Voted: {voterStatus?.voted?.toString()}</p>
					<p style={{ color:'white' }}>Vote Weight: {Number(voterStatus?.weight?._hex)}</p>
				</div>
			)}{' '}
			{voterStatus === 'An error has occured' && <p  style={{ color:'white' }}>{voterStatus}</p>}
		</div>
	);
};

export default CheckVoterAddress;
