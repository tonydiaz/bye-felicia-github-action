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
    console.log("github repository", github.repository);
    console.log("github", github);
    // console.log("github.context.payload", github.context.payload);

    if (comment && comment.body.toLowerCase().includes('bye felicia')) {
       console.log('Got the comment')
        //Update the comment with the corrected spelling
        // octokit.repository.deleteRepository({
        //   repo: github.repository
        // })
        octokit.issues.updateComment({
          owner: github.context.actor,
          repo: github.context.payload.repository.name,
          comment_id: comment.id,
          body: "Hello world"
        });

    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
