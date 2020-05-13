const {useState, useEffect} = React

function Following({goToUser, token}){
    const [errorFollowing, setErrorFollowing] = useState(undefined)
    const [following, setFollowing] = useState([])

    const handleFollow = (user) =>{
        try{
            toggleFollowUser(token, user.id, error=>{
                if(error) setErrorFollowing(error.message)
                retrieveUserFollowing(token, (error, userFollowing) =>{
                    if(error) setErrorFollowing(error.message)
                    retrieveUsersById(token, userFollowing, (error, userFollowingInfo)=>{
                        if(error) setErrorFollowing(error.message)
                        else setFollowing(userFollowingInfo)
                    })
                })
            })
        }catch(error){
            setErrorFollowing(error.message)
        }
    }

    useEffect(()=>{
        try{
            retrieveUserFollowing(token, (error, userFollowing) =>{
                if(error) setErrorFollowing(error.message)
                retrieveUsersById(token, userFollowing, (error, userFollowingInfo)=>{
                    if(error) setErrorFollowing(error.message)
                    else setFollowing(userFollowingInfo)
                })
            })
        } catch (error) {
            if (error) {
                setErrorFollowing(error.message)
                setFollowing([])
            }
        }
    },[])

    return <section className="userresults">
    <article className="userresults__info">
      1 – 60 of 155 users where the name includes “a”
    </article>
    {errorFollowing && !following.length && <Feedback message= {errorFollowing} level = "warning"/>}
    <ul className="userresults__cards">
        {following && following.map(user => <li key = {user.email}>{<UserCard user = {user} handleFollow = {handleFollow} goToUser = {goToUser}/>}</li>)}
    </ul>
  </section>;
  
}