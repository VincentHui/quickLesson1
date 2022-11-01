# quickLesson1
a quick lesson for simple source control and coding

1) if you've installed WSL open the ubuntu terminal. Follow this article to get to grips with installing and opening WSL 
https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#1-overview

2) we neeed to access the C drive through WSL. This means mounting the C drive. If you know some cmd line it should be easy to do. we're going to change the directory and then list the contents, something like this to get to the c drive:
<br/>`$ cd /mnt/c`
<br/>then to list contents of the current folder
<br/>`$ ls`
<br/>and the contents of the c drive can be seen (I plan on using this location for cloning the repo)
<br/>see the below link for more info and help
<br/>https://superuser.com/questions/1107618/where-is-the-c-drive-in-the-wsl

3) clone this repo into the c drive now that we have navigated to the c drive folder using the cmd line within WSL. With cmds like the following
<br/>` $ git clone git@github.com:VincentHui/quickLesson1.git`
