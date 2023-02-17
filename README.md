<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


### Built With
* [Next.js](https://nextjs.org/)
* [FastAPI](https://fastapi.tiangolo.com/)
* [React.js](https://reactjs.org/)
* [MongoDB](https://www.mongodb.com/)
* [Bcrypt](https://bcrypt.online/)
* [JWT](https://jwt.io/)

<p align="right">(<a href="#top">back to top</a>)</p>


### Prerequisites

To get this template up and running all you need installed is Docker. 

### Set-up

In your terminal:
Step 1: 
```sh
   Git clone https://github.com/Thunderpig851/Next.JS-FastAPI_Template.git
```
Step 2: Navigate into the new directory
Step 3: Within this directory create a .env file with the following:
```js
 MONGO_INITDB_ROOT_USERNAME='Fill me in!'
 MONGO_INITDB_ROOT_PASSWORD='Fill me in!'
 MONGO_INITDB_DATABASE='Fill me in!'
```
Step 4: NAvigate into the backend directory:
Step 6: Within this directory create a .env file with the following:
```js
MONGO_INITDB_ROOT_USERNAME='Same as main .env'
MONGO_INITDB_ROOT_PASSWORD='Same as main .env'
MONGO_INITDB_DATABASE='Same as main .env'
DATABASE_URL='Fill me in!'
REFRESH_TOKEN_EXPIRES_IN='Fill me in!'
ACCESS_TOKEN_EXPIRES_IN='Fill me in!'
JWT_ALGORITHM=HS256
JWT_SECRET_KEY='Must be a valid HS256 key'
CLIENT_ORIGIN='Fill me in!'
```
When complete a full .env should look something lik this:
```js
 MONGO_INITDB_ROOT_USERNAME=admin
 MONGO_INITDB_ROOT_PASSWORD=password123
 MONGO_INITDB_DATABASE=fastapi
 DATABASE_URL=mongodb://admin:password123@backend:27017/fastapi?authSource=admin
 REFRESH_TOKEN_EXPIRES_IN=60
 ACCESS_TOKEN_EXPIRES_IN=15
 JWT_ALGORITHM=HS256
 JWT_SECRET_KEY=eyJhbGciOiJIUzI1NiJ9.ew0KICAic3ViIjogIjEyMzQ1Njc4OTAiLA0KICAibmFtZSI6ICJBbmlzaCBOYXRoIiwNCiAgImlhdCI6IDE1MTYyMzkwMjINCn0.VD9-  atPor0dwctrHCKfSM38HLKwukEjjftwpNisVydI 
 CLIENT_ORIGIN=http://localhost:3000
```
  

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This template is a simple base from which to launch other projects that require a secure login and user registration method.

<!-- ROADMAP -->
## Roadmap

- [ ] Enable hot module reload when containerized.
- [ ] Enable email based account verification.
- [ ] Convert HS256 encyption to RS256

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



