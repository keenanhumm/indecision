import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
        title: 'Indecision',
        description: 'Put your life in the hands of a computer.'
    }

    handleClearSelection = () => {
        this.setState(()=>({
            selectedOption: undefined
        }));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleChoose = () => {
        const randIndex = Math.floor(Math.random() * this.state.options.length);
        const chosenOption = this.state.options[randIndex];
        this.setState(()=>({
            selectedOption: chosenOption
        }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Please enter a valid option!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option has already been added!';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(((option) => {
                return option !== optionToRemove;
            }))
        }));    
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({
                    options
                }));
            }
        } catch (e) {
            //do nothing
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('IndecisionApp component will unmount.');
    }

    render() {
        return (
            <div>
                <Header subtitle={this.state.description} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handleChoose={this.handleChoose}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                        
                    </div>
                    
                </div>
                
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelection={this.handleClearSelection}
                /> 
            </div>
        );
    }
}

export default IndecisionApp;