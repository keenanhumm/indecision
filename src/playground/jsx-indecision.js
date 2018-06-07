console.log('app.js running');

const app = {
    title: 'Indecision',
    subtitle: 'Give it up to chance....',
    options: []
}
const appRoot = document.getElementById('app');

const numbers = [33, 34, 35];

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
    }
    renderApp();
}

const clearOptions = () => {
    app.options = [];
    renderApp();
}

const makeDecision = () => {
    const randomIndex = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomIndex];
    alert(option);
}


const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length < 2} onClick={makeDecision}>What should I do?</button>
            <p> {app.options.length > 0 ? 'Here are your options' : 'Please enter at least two options!'} </p>
            <button onClick={clearOptions}>Clear All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();

