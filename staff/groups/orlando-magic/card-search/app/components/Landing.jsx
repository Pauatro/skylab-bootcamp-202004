function Landing(props){

    return <>
        <section className = 'landing'>
            <form onSubmit = {() => {event.preventDefault(); props.onBasicSearch(event)}}>
                <input type="text" name="query"/>
                <button>Card Search</button>
            </form>

            <a href="" onClick = {() => props.setView('adv')}>Advanced Search</a>
            <a href="" onClick = {() => props.setView('account')}>Your Account</a>
            <a href="" onClick = {() => props.setView('registe')}>Register</a> 
            <a href="" onClick = {() => props.setView('login')}>Login</a>
        </section>
    </>
}