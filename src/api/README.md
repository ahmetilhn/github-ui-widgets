# Github UI Widget Api

## Routes

- `:username/user-card`
- Coming soon...

## Route Structure

#### User Card

- `:username/user-card`
- Allows you to retrieve a user's information such as followers, following, public repositories, gists
- **_Params_**: `username: string | required` Your Github username E.G. **`/ahmetilhan24/user-card`**
- **_Response_**:
  **`fullname, username, bio, public repositories, gists, follower, following`**
- **_Usage_**:
  ```html
  <iframe
    title="Github User Card"
    width="310px"
    height="340px"
    src="http://localhost:5555/ahmetilhan24/user-card"
  ></iframe>
  ```

> Not responsive

## LICENSE

**MIT**

_Coded by Ahmet ilhan **github@ahmetilhan24**_
