ReactDOM.render(
    <h1>Hello</h1>,
    document.getElementById('root'),
)

const element = <h1>Hello</h1>;
const name = 'josh';
const hello = <h1>Hello, {name} </h1>

ReactDOM.render(
    element,
    <h1>Hello</h1>,
    document.getElementById('root'),
)

function format(user) {
    return user.firstName + ' '
     +user.lastName
}

const user = {
    firstName: 'josh',
    lastName: 'mate',
}

const element = (
    <div>
        <h1> Hello {format(user)} </h1>
    </div>
)

ReactDOM.render(
    element,
    document.getElementById('root'),
)

function greet(user) {
    if(user) {
        return <h1>{format(user)} </h1>
    } else {
        return <h1> You know me?</h1>
    }
}

const element = <div tabIndex='0'> </div>
const element = <img src={user.avatarUrl} > </img>;
const element = <img src={user.img} />
const element = (
    <div>
        <h1> Howdy</h1>
    </div>
)
const title = response.hello;
const safe = <h1>{title} </h1>
const element = <div className='greeting'>
    
</div>
const divy = <div id='root'></div>
ReactDOM.render(element, 
    document.getElementById('root'))

    function tick( ) {
        const element = (
            <div>
                <h1>
                {new Date().toLocaleTimeString} 
                </h1>
            </div>
        )
        ReactDOM.render(element, 
            document.getElementById('root'))
    }
    setInterval(tick, 1000)