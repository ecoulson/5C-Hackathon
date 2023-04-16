SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd $SCRIPT_DIR/../
rm -rf bin
mkdir bin
cp -r ./src ./bin
mv ./bin/src/* ./bin
rm -rf ./bin/src

cd ./bin
zip -r ./artifact.zip .
