const doc = require('dynamodb-doc');
const dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
    // TODO implement
    //callback(null, 'Hello from Lambda');

    var params = {
        Item: {
            "AlbumTitle": "Somewhat Famous",
            "artist":"No One You Know",
            "songtitle":"Call Me Today",
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: "AM_MUSIC"
    };
    dynamo.putItem(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
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