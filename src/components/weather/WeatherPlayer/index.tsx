import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { dimaColors } from '../../../inlineCss/colors';
import { InStylesType } from '../../../types';
import StyledCheckbox from '../../common/StyledCheckbox';
import PlayButton from './PlayButton';
import PjmButton from '../../common/Button';
import ProgressBar from './ProgressBar';

export default function WeatherPlayer() {
    // const [conditionsTime, setConditionsTime] = useState(['Past', 'Future']);

    const conditionsTime = ['Past', 'Future'];

    const renderCheckboxes = () => {
        return conditionsTime.map(time => {
            return (
                <FormControlLabel
                    value="bottom"
                    control={<StyledCheckbox boxSize={12} radius={2} initchecked={'true'} />}
                    label={time}
                    labelPlacement="bottom"
                    style={styles.flexRow}
                    key={time}
                />
            );
        });
    };

    const handleClick = () => {
        console.log('clear');
    };

    const pressPlay = () => {
        console.log('play');
    };

    return (
        <>
            <FormControl component="fieldset" style={{ width: '100%' }}>
                <FormGroup style={styles.formControl} aria-label="position" row>
                    {renderCheckboxes()}
                </FormGroup>
            </FormControl>
            <div style={styles.flexRow}>
                <div style={styles.flexColumn}>
                    <PlayButton onClick={pressPlay} />
                    <PjmButton
                        bg={dimaColors.palette.primary.main}
                        color={dimaColors.palette.text.primary}
                        text="Clear"
                        size="20px"
                        onClick={handleClick}
                    />
                </div>
                <ProgressBar />
            </div>
        </>
    );
}

const styles: InStylesType = {
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    formControl: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        color: dimaColors.palette.text.primary,
    },
};
