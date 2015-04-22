// Place service container definitions here.

exports.root = {
	type: 'blank-container'
};

exports.elasticsearch = {
  type: 'docker',
  specific: {
    name: 'dockerfile/elasticsearch',
    execute: {
		args: '-d -p 9200:9200 -p 9300:9300 -p 54328:54328 -v /mnt/elasticsearch:/data',
      //exec: '/elasticsearch/bin/elasticsearch --network.bind_host=0.0.0.0 --network.publish_host=172.17.42.1'
      	exec: '/elasticsearch/bin/elasticsearch --network.bind_host=0.0.0.0 --network.publish_host=__TARGETIP__ --discovery.zen.ping.unicast.hosts=172.31.30.52,172.31.30.51'
    }
  }
};
