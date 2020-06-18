# Emotify API documentation

Where full URLs are provided in responses they will be rendered as if service
is running on 'http://localhost:3001/'.

## Open Endpoints

Open endpoints require no Authentication.

* [Model](model.md) : `GET /api/model/`
* [Spotify](https://developer.spotify.com/documentation/web-api/reference/) : `GET /api/spotify/`

## Endpoints that require Authentication (To be implemented)

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired after login.

### Current User related

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* Show info : `GET /api/user/`

### Spotify Account related 

Proxy endpoints for viewing and manipulating the Spotify playlists that the Authenticated User
has permissions to access.

* [Create playlist](accounts/post.md) : `POST /api/accounts/`
* [Add to playlist](accounts/pk/get.md) : `PUT /api/accounts/:pk/`
