#!/bin/bash
set +ex

pushd ../../ # repo root dir
docker build -t tfhub-genesis -f docker/genesis/Dockerfile .

tmp=$(mktemp -d)
cleanup() {
    rm -rf ${tmp}
    docker rm tfhub-genesis
}

trap cleanup EXIT

mkdir -p output || true

docker run --env-file docker/genesis/env --name tfhub-genesis -ti tfhub-genesis
docker export tfhub-genesis -o $tmp/tfhub.tar.gz
tar -xf $tmp/tfhub.tar.gz -C $tmp
popd

cp $tmp/root/.threefold_hub/config/genesis.json output/genesis.json
cp $tmp/root/go/bin/threefold_hubd output/therefold_hubd
cp $tmp/root/.threefold_hub/config/app.toml output/app.toml
cp $tmp/root/.threefold_hub/config/config.toml output/config.toml
cp $tmp/root/.gbt/config.toml output/gbt-config.toml
cp $tmp/root/.gbt/gbt-cmd.sh output/gbt-cmd.sh

