import { parseName, parseBytes } from '../utils';

const Proposals = ({ proposals, voteProposal }) => {
	return (
		<div>
			<h4  style={{ color:'white' }}>proposal:</h4>{' '}
			{proposals.map((proposal, index) => {
				const name = parseName(parseBytes(proposal.name));
				const voteCount = proposal.voteCount._hex;
				return (
					<div key={index} style={{ padding: '1rem 0' }} >
						 <h4 style={{ color:'white' }}>{name } - {Number(voteCount)}
						<button className='.btn-10'
							style={{ marginLeft: '2em' }}
							onClick={() => voteProposal(index)}>
							Vote
						</button>
						</h4>
					</div>
				);
			})}
		</div>
	);
};

export default Proposals;
