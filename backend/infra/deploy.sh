SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cd $SCRIPT_DIR

./generate-artifact.sh

aws lambda update-function-code --region us-west-1 --function-name 5c-hack-api --zip-file fileb://../bin/artifact.zip
