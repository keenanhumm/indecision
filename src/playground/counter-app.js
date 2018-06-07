console.log('running counter-app.js');

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        const count = parseInt(localStorage.getItem('count'),10);
        if(!(isNaN(count))){
            this.setState(()=>({
                count
            }));
        }
        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
        
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            };
        });
    }
    handleReset(){
        this.setState(()=>{
            return {
                count:0
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={0} />, document.getElementById('app'));

// let count = 0;

// const increment = () => {
//     count++;
//     console.log('add one');
//     renderCounter();
// };
// const decrement = () => {
//     count--;
//     console.log('subtract one');
//     renderCounter();
// };
// const reset = () => {
//     count = 0;
//     console.log('reset count');
//     renderCounter();
// };


// const appRoot = document.getElementById('app');

// const renderCounter = () => {
//     const template3 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={increment}>+1</button>
//             <button onClick={decrement}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(template3, appRoot);
// }
// renderCounter();

