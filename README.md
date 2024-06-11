## Hachiko Dictionary


![hachiko dictionary banner](https://github.com/Mert18/hachiko-dictionary/assets/40024436/b4b0b586-a924-4b1f-a966-b2812c3ac749)

Learn advanced words.

Application here: https://hachikodictionary.com (***** Hosting paused temporarily. ******)

Server code resides here: [https://github.com/Mert18/hachiko-dictionary-server](https://github.com/Mert18/hachiko-dictionary-server)

## Instructions to set up the development environment for frontend
- Run backend service
  - Install Docker and Docker Compose. Ensure that `docker-compose version` returns a meaningful response.
  - Download the backend `git clone https://github.com/Mert18/hachiko-dictionary-server.git`
  - In the project's root directory, run `docker-compose up -d`
  - The backend now accepts requests on port :8080
- Run frontend service
  - Fork this project.
  - If you have already downloaded it, to fetch the latest version of the main branch, run: `git pull`

- Pick an issue to solve (Let everyone know you are working on it by writing a comment under the issue.). Let's say the issue is a bug and has an id of `52`
- Create and checkout a branch from the main branch: `git checkout -b bugfix/52` or `git checkout -b feature/52`
- After finishing your work, send the changes:
```
  git add .
  git commit -m "52: short description of what changed"
  git push -u origin bugfix/52
```
- Then open a pull request from your forked repository to this repository's `main` branch.


Please open issue if you notice any bug, or if you have any idea to implement in this project. Feel free and welcome.
