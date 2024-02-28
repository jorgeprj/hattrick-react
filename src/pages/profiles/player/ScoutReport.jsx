import React from 'react'
import { getAgeScore, getContractScore, getHatScore, getHatScoreText, getOverallScore, getPhysicalScore, getPotentialScore } from '../../../utils/hatScore'

const Header = ({ player, year }) => {
	const playerHat = getHatScore(player, year);
	return (
		<header>
			<h4 className='font-semibold text-lg mb-4'>Scout Report</h4>
			<div className='flex items-center mb-4 justify-between'>
				<div className="flex items-center">
					<p className="bg-black text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">{playerHat}</p>
					<p className="ms-2 font-medium text-neutral-900">{getHatScoreText(playerHat)}</p>
				</div>
				<span className="flex items-center text-sm font-medium text-gray-900 me-3">
					<span className={`flex w-2.5 h-2.5 bg-${player.scoutStatus.toLowerCase()}-500 rounded-full me-1.5 flex-shrink-0`} />
					{player.scoutStatus}
				</span>
			</div>
		</header>
	)
}

const StatsBar = ({ name, value }) => {
	let bgColorClass;

	if (value > 8) {
		bgColorClass = "bg-green-600";
	} else if (value > 7) {
		bgColorClass = "bg-green-500";
	} else if (value > 6) {
		bgColorClass = "bg-yellow-400";
	} else if (value > 5) {
		bgColorClass = "bg-amber-500";
	} else {
		bgColorClass = "bg-red-500";
	}
	return (
		<dl>
			<dt className="text-sm font-medium text-gray-500">{name}</dt>
			<dd className="flex items-center mb-3">
				<div className="w-full bg-gray-200 rounded h-2.5 me-2">
					<div className={`${bgColorClass} h-2.5 rounded`} style={{ width: `${value * 10}%` }}></div>
				</div>
				<span className="text-sm font-medium text-gray-500">{value}</span>
			</dd>
		</dl>
	);
};

const ScoutReport = ({ player, year }) => {
	return (
		<section>
			<Header player={player} year={year} />
			<div className="gap-8 sm:grid sm:grid-cols-2">
				<div>
					<StatsBar name={"Age"} value={getAgeScore(player.age, year).toFixed(1)} />
					<StatsBar name={"Contract"} value={getContractScore(player.contract, year).toFixed(1)} />
					<StatsBar name={"Physical"} value={getPhysicalScore(player).toFixed(1)} />
				</div>
				<div>
					<StatsBar name={"Overall"} value={getOverallScore(player).toFixed(1)} />
					<StatsBar name={"Potential"} value={getPotentialScore(player.overall, player.potential).toFixed(1)} />
				</div>
			</div>

		</section>
	)
}

export default ScoutReport