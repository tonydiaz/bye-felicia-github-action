const core = require('@actions/core');
const github = require('@actions/github');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const githubSecret = core.getInput("github-secret");
  
    const octokit = new github.GitHub(githubSecret);
    const comment = github.context.payload.comment;

    if (comment && comment.body.toLowerCase().includes('bye felicia')) {
        // Delete the repo
        await octokit.repos.delete({
          owner: github.context.actor,
          repo: github.context.payload.repository.name
        }).catch(err => {
          console.log("An error occurred:", err);
          core.setFailed(err);
        });;

    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
