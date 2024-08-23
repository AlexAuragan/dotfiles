#!/bin/bash

# Add the following to your crontab to this script is run everyday at 9, 18 and 19
# 0 9,18,19 * * * /bin/bash ~/dotfiles/update_repos.sh >> ~/dotfiles/update_repos.log 2>&1

# Define folders and commit message
VAULT_DIR="$HOME/Vault"
DOTFILES_DIR="$HOME/dotfiles"
COMMIT_MSG="Automated update $(date +'%Y-%m-%d %H:%M:%S')"

# Function to update a git repository
update_repo() {
    local repo_dir=$1
    local commit_msg=$2

    # Navigate to the repo directory
    cd "$repo_dir" || { echo "Directory $repo_dir not found!"; return 1; }

    # Perform git pull, add, commit, and push
    echo "Updating $repo_dir..."
    git pull origin master || { echo "Failed to pull in $repo_dir"; return 1; }
    git add . || { echo "Failed to add files in $repo_dir"; return 1; }
    git commit -m "$commit_msg" || { echo "No changes to commit in $repo_dir"; }
    git push origin master || { echo "Failed to push in $repo_dir"; return 1; }
}

# Update Vault repository
update_repo "$VAULT_DIR" "$COMMIT_MSG"

# Update dotfiles repository
update_repo "$DOTFILES_DIR" "$COMMIT_MSG"
notify-send "Daily Update" "All repositories have been updated"
echo "All repositories have been updated!"
