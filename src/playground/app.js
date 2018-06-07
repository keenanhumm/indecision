console.log('Running app.js');

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleChoose = this.handleChoose.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: [],
            title: 'Indecision',
            description: 'Put your life in the hands of a computer.'
        }
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

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleChoose() {
        const randIndex = Math.floor(Math.random() * this.state.options.length);
        const chosenOption = this.state.options[randIndex];
        alert(chosenOption);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Please enter a valid option!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option has already been added!';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter(((option) => {
                return option !== optionToRemove;
            }))
        }));
    }

    render() {
        return (
            <div>
                <Header subtitle={this.state.description} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handleChoose={this.handleChoose}
                />
                <br />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handleChoose}
                disabled={!props.hasOptions}
            >
                What should I do?
             </button>
        </div>
    );

}

const Options = (props) => {
    return (
        <div>
            {
                props.options.length > 0 &&
                <button onClick={props.handleDeleteOptions}>Remove All</button>
            }
            {
                props.options.length == 0 &&
                <p>Please add your options to get started!</p>
            }

            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        option={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button
                onClick={(e) => {
                    { props.handleDeleteOption(props.option) }
                }}
            >
                remove
            </button>
        </div>
    );
}


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    onFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error: error }));

        if (!error) {
            e.target.elements.option.value = '';
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props)=>{
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }

ReactDOM.render(<IndecisionApp options={['Thing1', 'thing2']} />, document.getElementById('app'));