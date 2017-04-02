//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){

    var ec2 = new AWS.EC2({
        region: 'us-west-2'
    });

    var params = {
        Filters: [
            {
                Name: 'instance-state-name',
                Values: ['running']
            }
        ]
    };
    ec2.describeInstances(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(err, err.stack); // an error occurred
        }
        else {
            console.log(data);
            callback(null, data);
        }           // successful response
    });
   	
}

exports.lab = task