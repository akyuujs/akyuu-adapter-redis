# akyuu-adapter-redis

redis adapter for [akyuu](https://github.com/akyuujs/akyuu)

### Installation
```
npm install akyuu-adapter-redis
```

### Configuration
Make sure you have a connections section in your configuration file(s).  
And its adapter should be redis.

option | required | remark
---- | ---- | ----
adapter | ✓ | must be redis
host | ✓ | redis host
port | ✓ | redis port
password |  | redis password
db |  | redis db number

### Usage
#### Config File
```
// ${project}/config/default/connections.js

'use strict'

module.exports = {
    myRedisAdapter: {
        adapter: 'redis',
        host: '127.0.0.1',
        port: '6379',
        password: null,
        db: null
    }
}
```

#### Model File
```
// ${project}/models/${model}.js

'use strict'

const akyuu = require('akyuu');
const redisClient = akyuu.config.connection.get('myRedisAdapter');

module.exports = redisClient;

```
