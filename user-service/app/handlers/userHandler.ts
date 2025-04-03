import { APIGatewayProxyEventV2 } from "aws-lambda";

export const Signup =async (event: APIGatewayProxyEventV2) => {

    console.log("Signup event: ", event);
    //application logic to sign up a user
    return {
        statusCode: 200,
        headers: {
           "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
        message: "User signed up successfully",
        data:{}
        }),
    };
};