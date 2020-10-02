import React from 'react';
import './Spinner.css';
import spinImage from '../../assets/loader.svg';

const spinner = (props) => {
    const classes = "Spinner " + props.filler;
    return (
        <div className={classes}>
            <img src={spinImage} alt="loading..." />
        </div>
    );
}

export default spinner;