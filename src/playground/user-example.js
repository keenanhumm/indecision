
const user = {
    name: 'Keenan',
    age: 21,
    location: 'Lincoln, NE'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


const appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);