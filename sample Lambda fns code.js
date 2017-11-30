// test - am lambda functions

const doc = require('dynamodb-doc');
const dynamo = new doc.DynamoDB();
exports.handler = (event, context, callback) => {
    // TODO implement
    var payload = {
        TableName:"AM_MUSIC"
    }
    dynamo.scan(payload, function(err,data){
        //callback(null,"hello from here");
        context.succeed(data);
    })
    //callback(null, 'Hello from Lambda');
    
};


//query table - lambda fn

const doc = require('dynamodb-doc');
const dynamo = new doc.DynamoDB();
exports.handler = (event, context, callback) => {
    // TODO implement
    var payload = {
        ExpressionAttributeValues: {
            ":a":event.artist
        }, 
        TableName:"AM_MUSIC",
        KeyConditionExpression: "artist = :a",
        
    };
    
    dynamo.query(payload, function(err,data){
        //callback(null,"hello from here");
        if(err){
            console.log(err);
            context.fail(err);
        } else {
        context.succeed(data);
        console.log(data);    
        }
        
    })
    //callback(null, 'Hello from Lambda');
};

// insert - music - Lambda Function


const doc = require('dynamodb-doc');
const dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
    // TODO implement
    //callback(null, 'Hello from Lambda');
    console.log(event);

    var params = {
        Item: {
            "artist":event.artist,
            "songtitle":event.songtitle,
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: "AM_MUSIC"
    };
    dynamo.putItem(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else{ console.log(data);
            context.succeed("Inserted Successfully. Artist: " + event.artist + " Song Title: " + event.songtitle);
        } // successful response
        /*
        data = {
         ConsumedCapacity: {
          CapacityUnits: 1, 
          TableName: "Music"
         }
        }
        */
    });
};