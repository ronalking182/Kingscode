---
title: "How To Install Git"
image: '/images/posts/how-to-install-git/how-to-install-git.jpg'
excerpt: 'Git is known for its tree-like structure, which allows you to branch off from a code base to make changes and then merge them back in.
Git will show you the differences between two branches and will assist you in merging them.' 
date: '2022-03-23'
slug: 'how-to-install-git'
keywords: 'install git,install git windows,install git on mac,install git on windows,install git bash,how to install git, install git mac'
isFeatured: false
category: 'Git'
---

### What is Git, and why do programmers need it?

**Git is known for its tree-like structure, which allows you to branch off from a code base to make changes and then merge them back in**.


Git will show you the differences between two branches and will assist you in merging them. Almost every developer uses Git, and businesses like GitHub have built software around it.

**Git is a piece of software that allows you to track changes in your code base and interact with other developers**.

## Install Git on Mac OS X

There are several ways to install Git on a Mac. In fact, if you've installed XCode (or it Command Line Tools), Git may already be installed. To find out, open a terminal and enter  "git --version"    
```plainText
 $ git --version git version 2.7.0 (Apple Git-66) 
 ```

Apparently, Apple actually maintain and ship their [their own fork of Git](http://opensource.apple.com/source/Git/)own fork of Git, but it tends to lag behind mainstream Git by several major versions. You may want to install a newer version of Git using one of the methods below: 

### Git for Mac Installer

The easiest way to install Git on a Mac is via the stand-alone installer:

1.Download the latest [Git for Mac installer](https://sourceforge.net/projects/git-osx-installer/files/).

2.Follow the prompts to install Git.

3.Open a terminal and verify the installation was successful by typing `git --version`:

```javascript
$ git --version
```


```
git version 2.9.2
```
4.Configure your Git username and email using the following commands, replacing Emma's name with your own. These details will be associated with any commits that you create:

```
$ git config --global user.name "Emma Paris"
```


```
$ git config --global user.email "eparis@atlassian.com"
```

### **Install Git with Homebrew**

If you have [installed Homebrew](http://brew.sh/) to manage packages on OS X, you can follow these instructions to install Git:

1.Open your terminal and install Git using Homebrew:

```
$ brew install git
```

2.Verify the installation was successful by typing which `git --version`:

```
$ git --version git version 2.9.2
```

3.Configure your Git username and email using the following commands, replacing Emma's name with your own. These details will be associated with any commits that you create:

```
$ git config --global user.name "Emma Paris"
```

```
$ git config --global user.email "eparis@atlassian.com"
```

## **Install Git on Windows**

1.Download the latest [Git for Windows installer](https://git-for-windows.github.io/).

2.When you've successfully started the installer, you should see the **Git Setup** wizard screen. Follow the **Next** and **Finish** prompts to complete the installation. The default options are pretty sensible for most users.

3.Open a Command Prompt (or Git Bash if during installation you elected not to use Git from the Windows Command Prompt).

4.Run the following commands to configure your Git username and email using the following commands, replacing Emma's name with your own. These details will be associated with any commits that you create:

```
$ git config --global user.name "Emma Paris" $ git config --global user.email "eparis@atlassian.com"
```

## **Install Git on Linux**

### Debian / Ubuntu (apt-get)

Git packages are available via [apt](https://wiki.debian.org/Apt);

1.From your shell, install Git using apt-get:

```
$ sudo apt-get update
```

```
$ sudo apt-get install git
```

2.Verify the installation was successful by typing `git --version`:

```
$ git --version
```

```
git version 2.9.2
```

3.Configure your Git username and email using the following commands, replacing Emma's name with your own. These details will be associated with any commits that you create:

```
$ git config --global user.name "Emma Paris"
```

```
$ git config --global user.email "eparis@atlassian.com"
```

### Fedora (dnf/yum)

Git packages are available via both [yum](https://fedoraproject.org/wiki/Yum) and [dnf](https://fedoraproject.org/wiki/Dnf):

1.From your shell, install Git using dnf (or yum, on older versions of Fedora):
    
```
    $ sudo dnf install git
```
    
 or
    
 ```
    $ sudo yum install git
```
    
2.Verify the installation was successful by typing `git --version`:
    
```
    $ git --version
 ```
    
```
    git version 2.9.2
```
    
3.Configure your Git username and email using the following commands, replacing Emma's name with your own. These details will be associated with any commits that you create

```
$ git config --global user.name "Emma Paris"
```

```
 $ git config --global user.email "eparis@atlassian.com"
```