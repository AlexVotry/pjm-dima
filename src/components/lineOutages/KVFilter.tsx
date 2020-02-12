import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import StyledCheckbox from '../common/StyledCheckbox';
import { kvFilters } from '../../data/kvFilters';

export default function KVFilter() {
    // const [checked, setChecked] = React.useState(true);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setChecked(event.target.checked);
    // };

    const renderCheckBoxes = () => {
        return kvFilters.map(kv => {
            return (
                <div key={kv.voltage} style={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControlLabel
                        value="bottom"
                        control={<StyledCheckbox boxSize={27} radius={5} />}
                        label={kv.voltage}
                        labelPlacement="bottom"
                        style={{ margin: '3px' }}
                    />
                    <div
                        style={{
                            margin: '0 auto',
                            height: '6px',
                            width: '15px',
                            backgroundColor: kv.color,
                            borderRadius: '30px',
                        }}
                    />
                </div>
            );
        });
    };

    return (
        <FormControl component="fieldset" style={{ width: '100%', marginBottom: '20px' }}>
            <FormGroup style={{ margin: '0 auto' }} aria-label="position" row>
                {renderCheckBoxes()}
            </FormGroup>
        </FormControl>
    );
}
