## Hachiko Dictionary

## !!Hosting is paused temporarily because of the increasing maintenance costs.!!

Hachiko Dictionary offers an immersive learning experience for expanding one's vocabulary.

Mastering new words can be challenging, but Hachiko Dictionary provides effective aids such as example sentences, videos, and interactive games to enhance memorization. This comprehensive approach sets Hachiko Dictionary apart!

Application here: https://hachikodictionary.com

Server resides here: [https://github.com/Mert18/hachiko-dictionary-server](https://github.com/Mert18/hachiko-dictionary-server)


## Instructions to set up the development environment for frontend
- Install Docker and ensure that `docker-compose version` returns a meaningful response. If not, install docker-compose seperately.
- Download the backend `git clone https://github.com/Mert18/hachiko-dictionary-server.git`
- In the project directory, run `docker-compose up`
- Trace the logs and ensure that the application accepts requests on :8888 port.
- Download the frontend: `git clone git@github.com:Mert18/hachiko-dictionary.git`
- Switch to `develop` branch: `git checkout develop`
- Fetch the latest version of the branch: `git pull`
- Pick an issue to work on it (Let everyone know you are working on it by writing a comment under the issue.). Let's say the issue id is `52`
- Create and checkout a branch from the develop branch: `git checkout -b 52-issue-description`
- After finishing your work, send the changes:
  ```
    git add .
    git commit -m "52: I made these changes etc."
    git push -u origin 52-issue-description
  ```
- In the repository page https://github.com/Mert18/hachiko-dictionary you will see a notification to open a pull request. Open a pull request then, say what you have changed, and request to merge into !!! `develop` !!! branch.
- That's it.


Please open issue if you notice any bug, or if you have any idea to implement in this project.
