# Git

## 2024/02/06

- git add .
- git commit -m "<commit_message">
- git push origin main => ERR
- git stash // ITR ERR
- git pull
- git stash apply
- git add .
- git commit -m "<commit_message>"
- git push origin main

I did something pretty cool! I was working in my data-models repo, and I tried to commit some code, but I was already a commit ahead. So what I did was clone to src/tmp check what the remote current commit was looking like, it was pretty sparse.

    Since I had already commited those changes, hence where the error was coming from. I did a soft reset, `git reset HEAD~1`, stash the changes. Pull from remote, then git stash apply. Which puts my stashed code back on top of the code that I tried to commit before the error.
