FROM ubuntu:20.04


RUN apt update &&\
    apt install -y jq build-essential wget git &&\
    wget https://github.com/ignite-hq/cli/releases/download/v0.20.4/ignite_0.20.4_linux_amd64.tar.gz &&\
    tar -C /usr/local/bin -xf ignite_0.20.4_linux_amd64.tar.gz &&\
    wget https://go.dev/dl/go1.18.1.linux-amd64.tar.gz &&\
    tar -C /usr/local -xzf go1.18.1.linux-amd64.tar.gz &&\
    bash -c 'echo '"'"'export PATH=$PATH:/root/go/bin/:/usr/local/go/bin/'"'"' >> ~/.bashrc' &&\
    mkdir -p /root/.gbt/

COPY . /app
WORKDIR /app
RUN bash -c 'PATH=$PATH:/root/go/bin/:/usr/local/go/bin/ ignite chain build'

COPY docker/genesis/genesis.sh /usr/local/bin
COPY docker/genesis/gbt.toml /root/.gbt/config.toml

ENTRYPOINT ["genesis.sh"]
