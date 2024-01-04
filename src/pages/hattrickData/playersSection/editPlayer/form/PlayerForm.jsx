import React from 'react'
import './PlayerForm.css'

const PlayerForm = ({ formData, handleInputChange, handleOverallStatsChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className='player-form'>
            <div className='attr'>
                <div className='personal-infos'>
                    <h2>Basic Infos</h2>
                    <section className='inputs'>
                        <label>
                            Name
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        </label>

                        <label>
                            Position
                            <input 
                                type="text" 
                                name="position" 
                                value={formData.position} 
                                onChange={handleInputChange} 
                                className='small-input'
                                />
                        </label>

                        <label>
                            Skills
                            <input 
                                type="number" 
                                name="skills" 
                                value={formData.skills} 
                                onChange={handleInputChange} 
                                className='small-input'
                                />
                        </label>

                        <label>
                            Weak Foot
                            <input 
                                type="number" 
                                name="weakFoot" 
                                value={formData.weakFoot} 
                                onChange={handleInputChange} 
                                className='small-input'
                                />
                        </label>

                        <label>
                            Work Rate
                            <input 
                                type="text" 
                                name="workRate" 
                                value={formData.workRate} 
                                onChange={handleInputChange} 
                                className='large-input'
                                />
                        </label>
                    </section>
                </div>

                <div className='player-stats'>
                    <h2>Player Stats</h2>
                    <section className='inputs'>
                        <label>
                            Overall
                            <input 
                                type="number" 
                                name="overall" 
                                value={formData.overall} 
                                onChange={handleInputChange} 
                                className='small-input'
                                />
                        </label>

                        <label>
                            Potential
                            <input 
                                type="number" 
                                name="potential" 
                                value={formData.potential} 
                                onChange={handleInputChange} 
                                className='small-input'
                                />
                        </label>

                        <label>
                            Pace
                            <input
                                type="number"
                                name="pace"
                                value={formData.overallStats.pace}
                                onChange={(e) => handleOverallStatsChange('pace', e.target.value)}
                                className='small-input'
                            />
                        </label>

                        <label>
                            Shooting
                            <input
                                type="number"
                                name="shooting"
                                value={formData.overallStats.shooting}
                                onChange={(e) => handleOverallStatsChange('shooting', e.target.value)}
                                className='small-input'
                            />
                        </label>

                        <label>
                            Passing
                            <input
                                type="number"
                                name="shooting"
                                value={formData.overallStats.passing}
                                onChange={(e) => handleOverallStatsChange('passing', e.target.value)}
                                className='small-input'
                            />
                        </label>

                        <label>
                            Dribbling
                            <input
                                type="number"
                                name="shooting"
                                value={formData.overallStats.dribbling}
                                onChange={(e) => handleOverallStatsChange('dribbling', e.target.value)}
                                className='small-input'
                            />
                        </label>

                        <label>
                            Defending
                            <input
                                type="number"
                                name="shooting"
                                value={formData.overallStats.defending}
                                onChange={(e) => handleOverallStatsChange('defending', e.target.value)}
                                className='small-input'
                            />
                        </label>

                        <label>
                            Physicality
                            <input
                                type="number"
                                name="shooting"
                                value={formData.overallStats.physicality}
                                onChange={(e) => handleOverallStatsChange('physicality', e.target.value)}
                                className='small-input'
                            />
                        </label>
                    </section>
                </div>

                <div className='financial-infos'>
                    <h2>Financial Infos</h2>
                    <section className='inputs'>
                        <label>
                            Contract
                            <input 
                                type="number" 
                                name="contract" 
                                value={formData.contract} 
                                onChange={handleInputChange} 
                                className='medium-input'
                                />
                        </label>

                        <label>
                            Value
                            <input 
                                type="number" 
                                name="value" 
                                value={formData.value} 
                                onChange={handleInputChange} 
                                />
                        </label>

                        <label>
                            Wage
                            <input 
                                type="number" 
                                name="wage" 
                                value={formData.wage} 
                                onChange={handleInputChange} 
                                className='medium-input'
                                />
                        </label>
                    </section>
                </div>
            </div>
            <button className='btn' type="submit">Update Player</button>
        </form>

    )
}

export default PlayerForm