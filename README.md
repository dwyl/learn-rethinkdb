# learn-rethinkdb

Learn how to use RethinkDB to power your next real-time app!

> RethinkDB is to MongoDB as Node.js is to PHP;
prepare to have your mind *blown*!
http://www.rethinkdb.com/docs/rethinkdb-vs-mongodb/

## What?

+ RethinkDB intro: https://youtu.be/cnpSi9qI02E


## How?

### Installation

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
ln -sfv /usr/local/opt/rethinkdb/*.plist ~/Library/LaunchAgents
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

Check it worked by visiting: http://127.0.0.1:8080/  
You should expect to see:

![rethinkdb-admin-interface](https://cloud.githubusercontent.com/assets/194400/8252011/5a749d86-1679-11e5-925e-a5c6cf61bdf2.png)


## Useful Links

+ Advancing the realtime web (*the _Why_? behind RethinkDB*):
http://www.rethinkdb.com/blog/realtime-web/
+ Installation: http://www.rethinkdb.com/docs/install/
+ Quick Start: http://www.rethinkdb.com/docs/quickstart/
+ Building **Realtime Web Applications** Just Got ***Easy***: https://www.youtube.com/watch?v=ZwyjDiikNKk
+  (_"[its not all rainbows and butterflies](https://youtu.be/nIjVuRTm-dc?t=1m46s)" ... be **aware** of the_) ***Limitations***: http://rethinkdb.com/limitations/
+ Intro to **Platzi** (*why/how they are using RethinkDB*): https://www.youtube.com/watch?v=Nb_UzRYDB40
+ Platzi **RethinkDB Course**: https://courses.platzi.com/courses/rethinkdb-databases/
+ Build a _**realtime RethinkDB cluster monitoring**_ app with live graphs
https://www.youtube.com/watch?v=dhb63boH8E8
+ Nodejs driver (module): http://www.rethinkdb.com/docs/install-drivers/javascript/
