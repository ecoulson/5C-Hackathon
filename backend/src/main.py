import json


def handler(event, context):
    print(json.dumps(event, indent=2))
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": handle_request(event)
    }

def handle_request(event):
    return {}
