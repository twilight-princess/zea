import { createStore, applyMiddleware } from "redux"
import axios from "axios"
import thunk from "redux-thunk"

// const baseUrl = process.env.BASE_URL

const initialState = {
    repos: [],
    loading: false
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "START_LOADING":
            return {
                ...prevState,
                loading: true
            }
        case "GET_REPOS":
            return {
                ...prevState,
                repos: action.repos,
                loading: false
            }
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

//ACTION CREATORS

export const getRepos = () => {
    const url = "https://api.github.com/users/twilight-princess/repos"
    return dispatch => {
        console.log("dis: ", dispatch)
        //DO THE PROMISE STUFF
        store.dispatch({type: "START_LOADING"});
        axios.get(url)
            .then(response => {
                let repos = []
                if (response){
                    response.map(repo => {
                        repos.push({
                            name: repo.name,
                            url: repo.html_url,
                            language: repo.language
                        })
                    })
                }
                store.dispatch({
                    type: "GET_REPOS",
                    repos: repos
                })
            })
    }
}


export default store;
