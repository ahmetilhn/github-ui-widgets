# Github UI Widget

![alt](https://media-exp1.licdn.com/dms/image/C4D22AQE5cN_je8e50w/feedshare-shrink_2048_1536/0/1664564320669?e=1667433600&v=beta&t=bfdRYkJ2XOH271_zpUm60B3XObKqgrqBNQZ8uSSJ5W0)

## Demos

- [**<u>Ahmet ilhan Github Profile Card</u>**](https://github-ui-widgets.onrender.com/ahmetilhan24/profile)
- [**<u>Ahmet ilhan Github Repositories Card</u>**](https://github-ui-widgets.onrender.com/ahmetilhan24/repositories)
- [**<u>Ahmet ilhan Github Selected Repo Commits</u>**](https://github-ui-widgets.onrender.com/ahmetilhan24/github-ui-widgets/commits)

# Github UI Widget Api

## Routes

- `:username/profile`
- `:username/:repo/commits`
- `:username/repositories`

## Route Structure

#### Profile

- `:username/profile`
- Allows you to retrieve a user's information such as followers, following, public repositories, gists
- **_Params_**: `username: string | required` Your Github username E.G. **`/ahmetilhan24/profile`**
- **_Response_**:
  **`fullname, username, bio, public repositories, gists, follower, following`**
- **_Usage_**:
  ```html
  <iframe
    title="Github User Profile"
    width="310px"
    height="340px"
    src="http://localhost:5555/ahmetilhan24/profile"
  ></iframe>
  ```

> Not responsive

#### Repositories

- `:username/repositories`
- Lets you get public repositories
- **_Params_**: `username: string | required` Your Github username E.G. **`/ahmetilhan24/repositories`**
- **_Response_**:
  **`name, description, topics, language, start, forks`**
- **_Usage_**:
  ```html
  <iframe
    title="Github User Repositories"
    width="350px"
    height="340px"
    src="http://localhost:5555/ahmetilhan24/repositories"
  ></iframe>
  ```

> Not responsive

#### Commits

- `:username/repoName/commits`
- Lets you get commits of public repositories
- **_Params_**: `username: string | required, repoName: string | required` Your Github username E.G. **`ahmetilhan24/github-ui-widgets/commits`**
- **_Response_**:
  **`commit msg, commit author`**
- **_Usage_**:
  ```html
  <iframe
    title="Github Commits"
    width="350px"
    height="340px"
    src="http://localhost:5555/ahmetilhan24/github-ui-widgets/commits"
  ></iframe>
  ```

> Not responsive

## LICENSE

**MIT**

_Coded by Ahmet ilhan **github@ahmetilhan24**_
