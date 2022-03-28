---
title: "Git Commands That Everyone Developer Should Know"
image: '/images/posts/git-commands-that-everyone-developer-should-know/git-commands-that-everyone-developer-should-know.jpg'
excerpt: 'Git is know for it tree like structure ,Where you branch off from a code base in other to make you changes and then merge them back in at another location.Git will help you see the differences between two branches and help you merge them together.' 
date: '2022-26-03'
slug: 'git-commands-that-everyone-developer-should-know'
isFeatured: true
category: 'Git'
---
###    What is Git !!, and do you need it as a programmer?.

> Git is  software for tracking changes in your code base so you can collaborate with other developer. 

Before moving forward it is my assumption that you already have git installed on your device, if not [click here to check how to install git]('http://KingsCode.com/blog/how-to-install-git')  and also that  you have a basic knowledge of the command line, if not [check out the basic of command line]('http://KingsCode.com/blog/command-line-basic')

## **Working with local repositories**

### 1. git init

This command turns a directory into an empty Git repository.This is the first stage in the repository creation process. Adding and committing files/directories is possible after running git init.

Example:

```
# change directory to codebase
$ cd /file/path/to/code

# make directory a git repository
$ git init
```

 In practice 

```
# change directory to codebase
$ cd/Documents/website

# make directory a git repository
$ git init
Initialized empty Git repository in /Documents/website/.git/
```

### 2. **git add**

Adds files in the to the staging area for Git. Before a file is available to commit to a repository, the file needs to be added to the Git index (staging area). There are a few different ways to use git add, by adding entire directories, specific files, or all un-staged files.

Example

```
$ git add <file or directory name>
```

In practice

```
# To add all files not staged:
$ git add .

# To stage a specific file:
$ git add index.html

# To stage an entire directory:
$ git add css
```

### 3. **git commit**

Changes to the files should be saved to a local repository. Each commit has its own ID for easy identification.

It's best to include a message with each commit that explains the changes that were done. Adding a commit message aids in locating a specific change or comprehending the changes.

Example

```
# Adding a commit with message
$ git commit -m "Commit message in quotes"
```

In practice

```
$ git commit -m "My first commit message"
[SecretTesting 0254c3d] My first commit message
1 file changed, 0 insertions(+), 0 deletions(-)
create mode 100644 homepage/index.html
```

### 4. **git status**

This command returns the current state of the repository.

if there are no changes it’ll return *nothing to commit, working directory clean or* If a file is in the staging area, but not committed, it shows with *git status*

Example 

```
$ git status
```

```
# Message when files have not been staged (git add)
$ git status
On branch SecretTesting
Untracked files:
  (use "git add <file>..." to include in what will be committed)

  	homepage/index.html

# Message when files have been not been committed (git commit)
$ git status
On branch SecretTesting
Your branch is up-to-date with 'origin/SecretTesting'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   homepage/index.html

# Message when all files have been staged and committed 
$ git status
On branch SecretTesting
nothing to commit, working directory clean
```

### 5. **git branch**

To determine what branch the local repository is on, add a new branch, or delete a branch.

Example 

```
# Create a new branch
$ git branch <branch_name>

# List all remote or local branches
$ git branch -a

# Delete a branch
$ git branch -d <branch_name>
```

In practice 

```
# Create a new branch
$ git branch new_feature

# List branches
$ git branch -a
* SecretTesting
  new_feature
  remotes/origin/stable
  remotes/origin/staging
  remotes/origin/master -> origin/SecretTesting
  
# Delete a branch
$ git branch -d new_feature
Deleted branch new_feature (was 0254c3d).
```

### 6. git checkout

To start working in a different branch, use *git checkout* to switch branches. Unlike git branch, this  command, added with “-b” switches to the current branch specified immediately after creating the specified branch

Example 

```
# Checkout an existing branch
$ git checkout <branch_name>

# Checkout and create a new branch with that name
$ git checkout -b <new_branch>
```

In practice 

```
# Switching to branch 'new_feature'
$ git checkout new_feature
Switched to branch 'new_feature'

# Creating and switching to branch 'staging'
$ git checkout -b staging
Switched to a new branch 'staging'
```

### 7. **git merge**

Integrate branches together. *git merge*
 combines the changes from one branch to another branch. For example, merge the changes       made in a staging branch into the stable branch.

Example

```
# Merge changes into current branch
$ git merge <branch_name>
```

in Practice

```
# Merge changes into current branch
$ git merge new_feature
Updating 0254c3d..4c0f37c
Fast-forward
 homepage/index.html | 297 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 297 insertions(+)
 create mode 100644 homepage/index.html
```

## **Working with remote repositories**

When working with remote repositories, all the other command specified in the local repository is followed plus some other additional command 

### **git remote**

To connect a local repository with a remote repository. A remote repository can have a name set to avoid having to remember the URL of the repository.

Example

```
# Add remote repository
$ git remote <command> <remote_name> <remote_URL>

# List named remote repositories
$ git remote -v
```

In practice 

```
# Adding a remote repository with the name of beanstalk
$ git remote add origin git@account_name.git.beanstalkapp.com:/acccount_name/repository_name.git

# List named remote repositories
$ git remote -v
origin git@account_name.git.beanstalkapp.com:/acccount_name/repository_name.git (fetch)
origin git@account_name.git.beanstalkapp.com:/acccount_name/repository_name.git (push)
```

### **git clone**

 Use git clone to copy and download an existing remote repository to a machine to build a local working copy. When working with a remote repository, cloning is the equivalent of git init. Git will establish a directory on your computer that contains all of your files and repository history.

Example

```
$ git clone <remote_URL>
```

In Practice

```
$ git clone git@account_name.git.beanstalkapp.com:/acccount_name/repository_name.git
Cloning into 'repository_name'...
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 5 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (5/5), 3.08 KiB | 0 bytes/s, done.
Checking connectivity... done.
```

### **git pull**

Run git pull to get the most recent version of a repository. This transfers updates from the remote repository to the local machine.

Example

```
$ git pull <branch_name> <remote_URL/remote_name>
```

In practise 

```
# Pull from named remote
$ git pull origin staging
From account_name.git.beanstalkapp.com:/account_name/repository_name
 * branch            staging    -> FETCH_HEAD
 * [new branch]      staging    -> origin/staging
Already up-to-date.

# Pull from URL (not frequently used)
$ git pull git@account_name.git.beanstalkapp.com:/acccount_name/repository_name.git staging
From account_name.git.beanstalkapp.com:/account_name/repository_name
 * branch            staging    -> FETCH_HEAD
 * [new branch]      staging    -> origin/staging
Already up-to-date.
```

### **git push**

Local commits are sent to the remote repository. The remote repository and the branch for which the push is being made are both required by git push.

Example

```
$ git push <remote_URL/remote_name> <branch>

# Push all local branches to remote repository
$ git push —all
```

In practise

```
# Push a specific branch to a remote with named remote
$ git push origin staging
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (5/5), 734 bytes | 0 bytes/s, done.
Total 5 (delta 2), reused 0 (delta 0)
To git@account_name.git.beanstalkapp.com:/acccount_name/repository_name.git
   ad189cb..0254c3d  SecretTesting -> SecretTesting

# Push all local branches to remote repository
$ git push --all
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 373 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To git@account_name.git.beanstalkapp.com:/acccount_name/repository_name.git
   0d56917..948ac97  master -> master
   ad189cb..0254c3d  SecretTesting -> SecretTesting
```

## More Git Resources

Are you interested in learning more about Git and its various commands? There are a plethora of publications and websites dedicated to Git; here are a few of our favorites:

* [he official Git site](https://git-scm.com/)
* [Git reference](http://gitref.org/)
* [Git for the lazy](https://wiki.spheredev.org/index.php/Git_for_the_lazy)
* [Pro Git (Book)](https://git-scm.com/book/en/v2)
* [Writing meaningful commit messages](http://blog.beanstalkapp.com/post/134929320564/writing-meaningful-commit-messages)
* [Git from the inside out](https://codewords.recurse.com/issues/two/git-from-the-inside-out)


