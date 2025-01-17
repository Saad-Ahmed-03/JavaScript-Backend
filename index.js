const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.port || 3000

// https://api.github.com/users/Saad-Ahmed-03

const githubData = {
    "login": "Saad-Ahmed-03",
    "id": 160133864,
    "node_id": "U_kgDOCYty6A",
    "avatar_url": "https://avatars.githubusercontent.com/u/160133864?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Saad-Ahmed-03",
    "html_url": "https://github.com/Saad-Ahmed-03",
    "followers_url": "https://api.github.com/users/Saad-Ahmed-03/followers",
    "following_url": "https://api.github.com/users/Saad-Ahmed-03/following{/other_user}",
    "gists_url": "https://api.github.com/users/Saad-Ahmed-03/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Saad-Ahmed-03/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Saad-Ahmed-03/subscriptions",
    "organizations_url": "https://api.github.com/users/Saad-Ahmed-03/orgs",
    "repos_url": "https://api.github.com/users/Saad-Ahmed-03/repos",
    "events_url": "https://api.github.com/users/Saad-Ahmed-03/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Saad-Ahmed-03/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 3,
    "created_at": "2024-02-15T12:38:42Z",
    "updated_at": "2024-11-15T13:53:32Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('saadahmed twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1> please login at saadahmed.dev </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> Chai aur Code </h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})