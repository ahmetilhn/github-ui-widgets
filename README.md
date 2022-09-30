# Github UI Widget

## Routes

- `:username/profile`
- `:username/:repo/commits`    
- `:username/repositories`

## Route Structure

#### Profile

- `:username/user-card`
- Allows you to retrieve a user's information such as followers, following, public repositories, gists
- **_Params_**: `username: string | required` Your Github username E.G. **`/ahmetilhan24/user-card`**
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
- **_Params_**: `username: string | required, repoName: string | required` Your Github username E.G. **`repos/ahmetilhan24/github-ui-widgets/commits`**
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
