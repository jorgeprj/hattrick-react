import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip } from 'recharts';

class CustomTooltip extends PureComponent {
    render() {
        const { active, payload } = this.props;

        if (active && payload && payload.length) {
            const data = payload[0].payload;

            return (
                <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '5px', borderRadius: '5px', boxShadow: '0 0 5px rgba(0,0,0,0.2)' }}>
                    <p>{data.stats}: {data.stat}</p>
                </div>
            );
        }

        return null;
    }
}

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
                    name="Value"
                    dataKey="stat"
                    stroke="#1ab06e"
                    fill="#8aceae"
                    fillOpacity={0.6}
                />
                <Tooltip content={<CustomTooltip />} />
            </RadarChart>
        );
    }
}

export default Chart;