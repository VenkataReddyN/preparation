// Redis has three basic deployments: single node, sentinel and cluster.

//Single node - The basic solution where you run single process running Redis. It is not scalable and not highly available.

//Redis Sentinel - Deployment that consist of multiple nodes where one is elected as master and the rest are slaves. 
//It adds high availability since in case of master failure one of the slaves will be automatically promoted to master. 
//It is not scalable since the master node is the only node that can write data. You can configure the clients to direct read requests to the slaves,
// which will take some of the load from the master. However, in this case slaves might return stale data since they replicate the master asynchronously.

//Redis Cluster - Deployment that consist of at least 6 nodes (3 masters and 3 slaves). where data is sharded between the masters. 
//It is highly available since in case of master failure, one of his slaves will automatically be promoted to master. It is scalable since you can add more nodes and 
//reshard the data so that the new nodes will take some of the load.


//The advantages of Sentinel over Redis Cluster are:
//1.Hardware - You can setup fully working Sentinel deployment with three nodes. Redis Cluster requires at least six nodes.
//2.Simplicity - usually it is easier to maintain and configure.
//The advantages of Redis Cluster over Sentinel is that it is scalable.

const Redis = require("ioredis");
const redis = new Redis({
    port: 6379, // Redis port
    host: "127.0.0.1", // Redis host
    username: "default", // needs Redis >= 6
    password: "my-top-secret",
    db: 0, // Defaults to 0
  });
// Username can also be passed via URI.
//new Redis("redis://username:authpassword@127.0.0.1:6380/4");

// Message can be either a string or a buffer
redis.publish(channel, JSON.stringify(message));


redis.subscribe("my-channel-1", "my-channel-2", (err, count) => {
    if (err) {
      // Just like other commands, subscribe() can fail for some reasons,
      // ex network issues.
      console.error("Failed to subscribe: %s", err.message);
    } else {
      // `count` represents the number of channels this client are currently subscribed to.
      console.log(
        `Subscribed successfully! This client is currently subscribed to ${count} channels.`
      );
    }
  });
  
  redis.on("message", (channel, message) => {
    console.log(`Received ${message} from ${channel}`);
  });
  
  // There's also an event called 'messageBuffer', which is the same as 'message' except
  // it returns buffers instead of strings.
  // It's useful when the messages are binary data.
  redis.on("messageBuffer", (channel, message) => {
    // Both `channel` and `message` are buffers.
    console.log(channel, message);
  });

  await redis.set('key', 'value'); // returns 'OK'

  await redis.get('key'); // returns 'value'

  await redis.del('key'); // returns 1

  await redis.del(['key1', 'key2']);