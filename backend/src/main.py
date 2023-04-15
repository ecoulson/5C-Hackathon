import json


def handler(event, context):
    print(json.dumps(event, indent=2))
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        "body": json.dumps(handle_request(event)),
    }


def handle_request(event):
    if event["httpMethod"] == "OPTIONS":
        return {}
    return event
