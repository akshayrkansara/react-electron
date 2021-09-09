import React from 'react'
import { useState, Button } from 'react';
import TeamDropdowns from './TeamDropdowns';

const RenderTeams = () => {

    const [teamName, setTeamName] =  useState('');
    const teamButtons = () => {
        
        const teams = [];
        
        // Data from database and than traverse and create buttons. Ideally map function will be used here.
        for ( var i =0; i<5; i++){
         teams.push(
            <Button
               key={i}
            //    onPress={onPressLearnMore}
               title={i}
            //    color="#841584"
            //    accessibilityLabel="purple button"
               onClick={selectedTeam(this.key)}
            />);
        } // % buttons are created. 
        
        return teams;
        }
    
        const selectedTeam = (key) => {
            setTeamName(key);
        }

    return (
        <div>
        <div>{teamButtons}</div>
        <div><TeamDropdowns id = {teamName}/></div> 
        </div>
    )
}

export default RenderTeams
