const user = JSON.parse(localStorage.getItem('user'));

export default {
    state: {
        users: [
            {
                username: 'user',
                password: 'password',
                email: 'user@email.com'
            }
        ],
        user,
        loggedIn: false
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getUsername(state) {
            return state.user ? state.user.username : ""
        },
        getLoggedIn(state) {
            return state.loggedIn
        }
    },
    actions: {
        loginAct(ctx, user) {
            if (user.username && user.password) {
                if (ctx.state.users.filter(item => (item.username === user.username) && (item.password === user.password)).length > 0) {
                    ctx.commit('loginMut', user)
                    return Promise.resolve()
                }
            }
            return Promise.reject()
        },
        registerAct(ctx, user) {
            if (user.username && user.password && user.email) {
                if (ctx.state.users.filter(item => (item.email === user.email) || (item.username === user.username)).length === 0) {
                    ctx.commit('registerMut', user)
                    return Promise.resolve()
                }
            }
            return Promise.reject()
        }

    },
    mutations: {
        loginMut(state, user) {
            state.user = user
            state.loggedIn = true
        },
        registerMut(state, user) {
            state.users.push(user)
        },
        logoutMut(state) {
            state.loggedIn = false;
            state.user = null;
        }

    }

}
