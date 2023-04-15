SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd $SCRIPT_DIR/../
rm -rf bin
mkdir bin
cp -r ./src ./bin/src

pip3 freeze > requirements.txt
pip3 install -r requirements.txt --target=bin/packages

echo $(pwd)