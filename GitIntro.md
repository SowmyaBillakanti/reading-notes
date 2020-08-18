# Git Intro

# what is Git?
## Snapshots

Git is a DVCS that stores data in a file system made up of snapshots. Each time you save a changed version of your project — called commit — Git creates a snapshot of the file and stores a reference to it. If the file has not changed, Git only stores a reference to the already-stored identical version of it.

## Local Operations

Git mostly relies on local operations because most necessary information can be found in local resources. This allows for process expediency because a project’s history resides on the local disk, eliminating the need to fetch history information from the server, and allowing one to continue work on a project even when not online or on a VPN.

## Tracking Changes

Every single change applied to any file or directory is tracked by Git. And, as the gatekeeper, Git will always detect file corruption or loss of information in transit.

## Loss of Data

Git is set up to greatly minimize the possibility of irreversible damage to files, such as accidentally lost data. Git makes it extremely difficult for a snapshot of your file that is committed to be lost.

## States

Files in Git can reside in three main states: committed, modified and staged.

## Committed

Data is securely stored in a local database

## Modified

File has been changed but not committed to the database

## Windows
### Git Website

You can download Git by visiting this link and following the posted directions:

http://git-scm.com/download/win

GitHub

Install Git as part of the GitHub for Windows install.

http://windows.github.com

Setting up a Git Repository
Importing
To import an existing project or directory into Git, follow these steps using the Terminal or Command Line:

Switch to the target project’s directory
Example:

$ cd test (cd = change directory)
Use the git init command
$ git init
Note: At this stage, you have created a new subdirectory named .git that has the repository files. Tracking has not commenced.

To start tracking these repository files, perform an initial commit by typing the following:
$ git add *.c
$ git add LICENSE
$ git commit -m “any message here”
Now, your files are tracked and there’s an initial commit. We will discuss the particular commands in detail soon.

Cloning
You can also create a copy of an existing Git repository from a particular server by using the clone command with a repository’s URL:

$ git clone https://github.com/test
By cloning the file, you have copied all versions of all files for a project. This command leads to the creation of a directory called “test,” with an initialized .git directory inside it, which has copies of all versions of all files for the specified project. The command also automatically checks out — or retrieves for editing — a copy of the newest version of the project.

To clone a repository into a directory with another name of your choosing, use the following command format:

$ git clone https://github.com/test mydirectory
The command above makes a copy of the target repository in a directory named “mydirectory.”

Workflow
Local Repository Structure
The local Git repository has three components:

Working Directory: The actual files reside here.
Index: The area used for staging
Head: Points to the most recent commit
