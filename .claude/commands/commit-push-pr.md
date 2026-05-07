---
description: "Commit, push, and open a PR"
---

Follow these steps in order:

1. Run `git status` to see what files have changed
2. Run `git diff` to review the changes
3. If the current branch is the same as the target branch, create a new branch with `git checkout -b <branch>` first (ensure the branch name is reasonable and follows naming conventions)
4. Stage the appropriate files with `git add`
5. Create a commit with a clear, descriptive message following conventional commits format
6. Push to the remote branch (create remote branch if needed with `-u origin <branch>`)
7. Create a Pull Request using `gh pr create --base $name` with (If no name argument was provided, use main instead):
   - A clear title summarizing the changes (must use English)
   - A description with (you can use Simplified-Chinese):
     - Summary of what changed and why
     - Any testing done
     - Any notes for reviewers

If there are any issues at any step, stop and report them.
