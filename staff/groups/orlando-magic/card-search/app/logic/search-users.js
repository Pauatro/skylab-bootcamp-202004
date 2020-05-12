function searchUsers(token, query, callback) {
    String.validate.notVoid(token)

    String.validate(query)

    Function.validate(callback)

    query = query.toLowerCase()

    call('GET', 'https://skylabcoders.herokuapp.com/api/v2/users', undefined,
        { Authorization: `Bearer ${token}` },
        (error, status, body) => {
            if (error) return callback(error)

            if (status === 200) {
                const user = JSON.parse(body)

                const { username: _username, following = [] } = user

                call('GET', 'https://skylabcoders.herokuapp.com/api/v2/users/all',
                    undefined,
                    { Authorization: `Bearer ${token}` },
                    (error, status, body) => {
                        if (error) return callback(error)

                        if (status === 200) {
                            let users = JSON.parse(body)

                            users = users.filter(function (user) {
                                const { nickname, username } = user

                                return nickname && nickname.toLowerCase().includes(query) || username.toLowerCase().includes(query)
                            })

                            users = users.map(({ id, nickname, username, myCards = []}) => {
                                const _user = { id, nickname, email: username, myCards}

                                if (username !== _username) _user.following = following.includes(id)

                                return _user
                            })

                            callback(undefined, users)
                        } else {
                            const { error } = JSON.parse(body)

                            callback(new Error(error))
                        }
                    }
                )
            } else {
                const { error } = JSON.parse(body)

                callback(new Error(error))
            }
        })
}