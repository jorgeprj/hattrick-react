import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

class Chart extends PureComponent {
    render() {
        const { player } = this.props;

        const data = [
            {
                stats: 'PAC',
                stat: player.overallStats.pace,
                fullMark: 100,
            },
            {
                stats: 'SHO',
                stat: player.overallStats.shooting,
                fullMark: 100,
            },
            {
                stats: 'PAS',
                stat: player.overallStats.passing,
                fullMark: 100,
            },
            {
                stats: 'DRI',
                stat: player.overallStats.dribbling,
                fullMark: 100,
            },
            {
                stats: 'DEF',
                stat: player.overallStats.defending,
                fullMark: 100,
            },
            {
                stats: 'PHY',
                stat: player.overallStats.physicality,
                fullMark: 100,
            },
        ];

        return (
            <RadarChart
                cx={125}
                cy={150}
                outerRadius={100}
                width={250}
                height={260}
                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="stats" />
                <Radar
                    name="Overall Stats"
                    dataKey="stat"
                    stroke="#1ab06e"
                    fill="#8aceae"
                    fillOpacity={0.6}
                />
            </RadarChart>
        );
    }
}

export default Chart;