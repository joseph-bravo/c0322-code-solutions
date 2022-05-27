# flow.md

## User can sign up.

 ### Front
 
- Serving static files from `__dirname/public` directory for get requests pointed at `'/'`
- At the start of browser opening page, don't display anything by initializing `this.state.isAuthorizing` to `false`, which makes the `render()` method return `null` (show nothing)
	- Initialize `this.state.route` to whatever the current hash is, parsed through `parseRoute()` function
- After the component first mounts, add an event listener to the window, listening for `'hashchange'`
	- Grab the `'react-context-jwt'` key value from local storage, and if it exists, set `user` to state alongside setting `isAuthorizing` to `true`. If user doesn't exist, set it to null instead.
		- This rerenders the page, meaning it passes the guard statement checking for `this.state.isAuthorizing`
- Within the render method, wrap everything inside `<AppContext.Provider value={contextvalue}`, so that nested children can grab the current user, route, and methods for handling sign in and sign out.
- Once guard is bypassed, call the `renderPage()` method, which checks for the `path` property of the `route` property object from state.
	- Since it is blank, render `<Home />`
- Within `<Home />`, check the `user` property of the current context (`AppContext`) 
	- Context to check from is defined using `Home.contextType = AppContext`, where `AppContext` is imported from `/lib`
		- Since it's currently blank, return the `<Redirect />` utility component with property `to` set to a blank string, which changes the hash to `sign-in`, which triggers the event handler that was setup in the `componentDidMount()` method of the App, which then rerenders the page with `this.state.path` as `'sign-in'`, meaning `<Auth />` is returned from `renderPage()`.
- Within the `Auth` React component page,
	- `Auth.contextType` is set to `AppContext` to check for values of `user`, `route`, and `handleSignIn`.
	- If there's a user, redirect to homepage.
	- Since `route.path` is currently `'sign-in'`, prompt for a Sign In.
	- Since we don't have the account, we can click the "Register now" `<a>` at the bottom left of `<AuthForm />` which is passed a prop `action` with `route.path` (`sign-in`), which renders the `<a>` as "Register now"
		- Clicking the button changes the hash to `#sign-in`, triggering the hash change, and rerendering the site with App Context prop `route.path` set to `'#sign-up'`
	- Within `<AuthForm />`, form elements are bound to state with `handleChange()`
	- Upon form submission, grab the current action from `this.props` , (`'sign-up'`)
		- Via `fetch()`, send a post to path `'/api/auth/sign-up'` with content of the state, that being and JSON Stringified object with `username` and `password` properties.
			- Content Type is set to `application/json` so backend knows how to parse the data.

### Back / DB

- `db` is connected to database being used via `pg` library
- Listening for POST calls for path `'/api/auth/sign-up'`, which the fetch request targets and is parsed with `express.json()` middleware
	- Check if the `username` and `password` properties of the request body even exist, and if not, throw an error, but we have some so we're gucci.
- Hash the provided password with argon2, then take the result and insert a new row into the PostgreSQL database table `"users"`, with the username and hashed password. Return the `userId`, `username`, and `createdAt` (auto generated timestamp) from the SQL Query.
	- Once the query is done, send a 201 with the returned row as a json body.

### Front Again

- Parse the `json` with Fetch API helper method, and since `action` is `'sign-up'`, set hash to `'sign-in'`, rerendering the page changing the Authentication Form back to "sign in" mode.



## User can sign in.

  

## User can stay signed in (even if they refresh the page).

  

## User can sign out.
