SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

sam local start-api --template $SCRIPT_DIR/template.yml --warm-containers EAGER
