# 👋 Felicia GitHub Action

GitHub action that will delete your repository. 

We all have them repositories that gather dust. They aren't used anymore and no one cares. We don't do a good job cleaning up all the repositories we have. Although GitHub has no limit on repos we should removed unneeded repos. That is where ths Github Actions shines.

By adding this action all you will ever need to do is say `Bye Felicia!` in a issue comment and your repo is no more. 

![Bye Felicia](https://media.giphy.com/media/SZioIIBxB7QRy/giphy.gif)

### Required:
  **REPO_ACCESS_TOKEN** - You will need to create a personal access token to access have the ability to delete a repository. Add that token as a secret in your repo.

## Example usage
```yaml
uses: tonydiaz/bye-felicia-github-action@main
with:
  github-secret: ${{ secrets.REPO_ACCESS_TOKEN }}
  github-repository: ${{ github.repository }}
```