---
title: "Command Line Basic"
image: '/images/posts/command-line-basic/command-line-basic.jpg'
excerpt: 'Git is know for it tree like structure ,Where you branch off from a code base in other to make you changes and then merge them back in at another location.Git will help you see the differences between two branches and help you merge them together.' 
date: '2022-25-03'
slug: 'command-line-basic'
isFeatured: false
category: 'Blog'
---


The command line is a text-based computer interface. It's a program that receives commands and sends them to the computer's operating system for execution.

You may navigate your computer's files and directories from the command line, just like you would with Windows Explorer or Finder on Mac OS. The command line differs in that it is entirely text-based.

Here's a list of frequently used commands.

###  `pwd` Print Working Directory 

The shell command `pwd` displays the file path from the root directory to the current working directory.

```
$ pwd
/Users/Downloads
```

### `mkdir` Make Directory 

The shell command `mkdir` is used to make a new directory in the filesystem according to its argument. If a file path is specified, the new directory is appended to the end. Otherwise, a new directory will be created in the current working directory.

```
$ mkdir new-directory
$ ls 
old-directory    new-directory
```

rmdir - remove a directory (only work on empty folders)

```
$rmdir my-folder
```

### `ls` List 

The shell command `ls` is used to list the contents of a directory. If no arguments are given, it will list the contents of the current working directory.

```
$ ls Desktop
resume.pdf
photo.png
```

### `cd` Change Directory 

The shell command `cd` is used to move throughout the filesystem of a computer. It accepts a variety of arguments:

- Full file paths.
- Names of children of the current directory.
- `..` the parent of the current directory.

```
$ cd some-directory
$ cd ..
```

### `touch` Create New File 

The shell command `touch` creates a new file in the current working directory with the name provided.

```
$ touch shoping-list.txt
```

rm - Remove / Delete a File (forever)

```
rm shoping-list.txt
```

rm -rf - Remove recursive force / Delete a directory add all file nested in the directory (also other directories)

**Helper Commands** 

Helper commands for the command line include:

- `clear` to clear the terminal
- tab to autocomplete the line
- ↑ and ↓  to cycle through previous commands