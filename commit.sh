#!/bin/bash

# Default commit message if none is provided
DEFAULT_COMMIT_MESSAGE="Auto commit on $(date +'%Y-%m-%d %H:%M:%S')"

# Check if a commit message is provided as an argument, otherwise use the default
COMMIT_MESSAGE=${1:-$DEFAULT_COMMIT_MESSAGE}

# Add all changes to the staging area
git add .

# Commit the changes with the provided or default message
git commit -m "$COMMIT_MESSAGE"

# Push the changes to the current branch
git push origin "$(git rev-parse --abbrev-ref HEAD)"

# Optional: Notify the user that the script has completed
echo "All changes have been committed and pushed to the repository."
