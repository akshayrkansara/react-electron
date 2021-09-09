import React from 'react'
import { useState, Button } from 'react';
import ButtonDropdowns from './ButtonDropdowns';

const RenderButtons = () => {

  const [workspace, setWorkspace] = useState('');    
  const displayWorkspaces = () => {
        
        const workSpaces = [];
        
        // Data from database and than traverse and create buttons 
        for ( var i =0; i<5; i++){
         workSpaces.push(
            <Button
               key= {i}
            //    onPress={onPressLearnMore}
               title={i}
               onClick={workSpaceClicked(this.key)}
            />);
        }  
        return workSpaces;
    }

    const workSpaceClicked = (key) => {
      setWorkspace(key);
    }
      return (
        <div>
          <div>
            {displayWorkspaces}
          </div>
          <div>
            <ButtonDropdowns id={workspace}/>
          </div>
        </div>
            );
          }

export default RenderButtons

                /*
             * The second argument that will be passed to
             * `handleChange` from `ToggleButtonGroup`
             * is the SyntheticEvent object, but we are
             * not using it in this example so we will omit it.
{/* <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton id="tbg-btn-1" value={1} onClick={passId(this.id)}>
                    Slack channel 1.1
                </ToggleButton>
                <ToggleButton id="tbg-btn-2" value={2} onClick={passId(this.id)}>
                    Workspace Name
                </ToggleButton>
                <ToggleButton id="tbg-btn-3" value={3} onClick={passId(this.id)}>
                    Workspace Name
                </ToggleButton>
              </ToggleButtonGroup>
              </div> */
