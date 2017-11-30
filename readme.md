Steps to replicate the sample Serverless Application:

1. Create a table in DynamoDB
2. Create a Lambda function and use the created Table Name.
3. Now go to API gateway and create a API. 
	3.1 Use the lambda function and appropriate request method.
	3.2 Enable cors.
	3.3 Deploy the API.
	3.4 In the stages tab, you can see the deployed version and can see the URL to access the API.
4. Create a sample web app, any framework is ok. I used angular1.
	4.1 Hit the API with URL from step 3.4.
	4.2 You will recieve a response.