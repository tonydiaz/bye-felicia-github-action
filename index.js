const core = require('@actions/core');
const github = require('@actions/github');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const githubSecret = core.getInput("github-secret");
    const githubRepository = core.getInput("github-repository");
  
    const octokit = new github.GitHub(githubSecret);
    const comment = github.context.payload.comment;
    console.log("github repository", githubRepository);

    if (comment && comment.body.toLowerCase().includes('bye felicia')) {
       console.log('Got the comment')
        //Update the comment with the corrected spelling
        octokit.repos.delete({
          owner: github.context.actor,
          repo: github.context.payload.repository.name
        });
        // octokit.issues.updateComment({
        //   owner: github.context.actor,
        //   repo: github.context.payload.repository.name,
        //   comment_id: comment.id,
        //   body: "Hello world"
        // });

    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
