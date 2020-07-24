# Emotify API documentation

Where full URLs are provided in responses they will be rendered as if service
is running on 'http://localhost:3001/'.

## Open Endpoints

Open endpoints require no Authentication.

* [Model](model.md) : `GET /api/model/`
* [Spotify](https://developer.spotify.com/documentation/web-api/reference/) : `GET /api/spotify/` (Proxy endpoint)
   * Accessible only with client credentials in .env file, contact maintainers for CLIENT_SECRET


### Current User related

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* Show info : `GET /api/user/`
