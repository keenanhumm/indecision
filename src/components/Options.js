import Option from './Option';
import React from 'react';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            {
                props.options.length > 0 &&
                <button
                    onClick={props.handleDeleteOptions}
                    className="button button--link"
                >
                    Remove All
            </button>
            } 
        </div>
        
        {
            props.options.length == 0 &&
            <p className="widget__message">Please add your options to get started!</p>
        }

        {
            props.options.map((option, index) => (
                <Option
                    key={option}
                    option={option}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
)

export default Options;