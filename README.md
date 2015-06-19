# learn-rethinkdb

Learn how to use RethinkDB to power your next real-time app!


## How?

### Instalallation

#### Mac

If you are using [*Homebrew*](http://brew.sh/) on your Mac you can install RethinkDB using the simple command in the terminal:

```
brew update && brew install rethinkdb
```

This will install all of RethinkDB's dependencies, expect to see:

![learn-rethinkdb-brew-install](https://cloud.githubusercontent.com/assets/194400/8251410/40d32f96-1674-11e5-8702-f01637d3f6a9.png)

Once it installation completes (*with brew*) you should see:

![learn-rethinkdb-brew-install-complete](https://cloud.githubusercontent.com/assets/194400/8251444/7e09f8ea-1674-11e5-80e0-6ce53313359f.png)

In case you missed it, these are the suggested commands to  
***ensure RethinkDB starts when your Mac (re)boots***:
```sh
To have launchd start rethinkdb at login:
    ln -sfv /usr/local/opt/rethinkdb/*.plist ~/Library/LaunchAgents
Then to load rethinkdb now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.rethinkdb.plist
```


### Quick Start

Once you have *installed RethinkDB*, read the Quick Start:
http://www.rethinkdb.com/docs/quickstart/

#### Start the RethinkDB Server

In your terminal, start the server with the command:
```sh
rethinkdb
```

You should see (*something similar to this*):
![learn-rethinkdb-start-server](https://cloud.githubusercontent.com/assets/194400/8251351/c8aeafb8-1673-11e5-8ec2-d7a46fa3d7ad.png)

Check it worked by visiting:


## Useful Links

+ Installation: http://www.rethinkdb.com/docs/install/
+ Quick Start: http://www.rethinkdb.com/docs/quickstart/
+ Building **Realtime Web Applications** Just Got ***Easy***: https://www.youtube.com/watch?v=ZwyjDiikNKk
+ Intro to **Platzi** (*why/how they are using RethinkDB*): https://www.youtube.com/watch?v=Nb_UzRYDB40
+ Platzi **RethinkDB Course**: https://courses.platzi.com/courses/rethinkdb-databases/
