import React from 'react';
import '../Loader.css'

const DotLoader = (props) => {
    return (
        <div className="dotLoaderContainer">
            <div className="spinner">
                <div style={{ width: props.dimensions || '15px', height: props.dimensions || '15px' }} className="bounce1"></div>
                <div style={{ width: props.dimensions || '15px', height: props.dimensions || '15px' }} className="bounce2"></div>
                <div style={{ width: props.dimensions || '15px', height: props.dimensions || '15px' }} className="bounce3"></div>
            </div>
        </div>
    );
};

export default DotLoader;