console.log('running visibility.js');
const appRoot = document.getElementById('app');

class Visibility extends React.Component {
    constructor(props){
        super(props);

        this.toggleDetails = this.toggleDetails.bind(this);

        this.state = {
            visibility: false,
            details: 'here are the details of the app'
        };
    }

    toggleDetails(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.toggleDetails}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility&&(
                    <div>
                        <p>{this.state.details}</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />,appRoot);