# 👋 Felicia GitHub Action

GitHub action that will delete your repository. 

We all have them, repositories that gather dust. They been updated in years, with no plans to ever touch them again. Repos that no one looks at, potentially using versions of software that are now depricated. Let's face it we don't do a good job cleaning up our old repositories. Cleanup of repos is where this Github Action shines.

By adding this action all you will ever need to do is say `Bye Felicia!` in a issue comment and your repo is no more. 

![Bye Felicia](https://media.giphy.com/media/SZioIIBxB7QRy/giphy.gif)

### Required:
  **REPO_ACCESS_TOKEN** - You will need to create a [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to access have the ability to delete a repository. Add that token as a secret in your repo.

## Example usage
```yaml
uses: tonydiaz/bye-felicia-github-action@main
with:
  github-secret: ${{ secrets.REPO_ACCESS_TOKEN }}
```