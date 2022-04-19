FROM ubuntu:20.04

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install git curl vim wget build-essential ca-certificates openssh-server tzdata tmux gettext -y --no-install-recommends &&\
    git clone --branch development https://github.com/threefoldtech/threefold_hub.git /root/threefold_hub &&\
    wget https://go.dev/dl/go1.18.linux-amd64.tar.gz &&\
    tar -C /usr/local -xzf go1.18.linux-amd64.tar.gz &&\
    curl https://get.starport.network/starport! | bash &&\
    wget -O /sbin/zinit https://github.com/threefoldtech/zinit/releases/download/v0.2.5/zinit &&\
    chmod +x /sbin/zinit &&\
    mkdir -p /etc/zinit &&\
    wget https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.4.1/gbt -O /root/gbt &&\
    chmod +x /root/gbt &&\
    /root/gbt init
ENV PATH=$PATH:/usr/local/go/bin:/usr/local/bin:/root/go/bin
WORKDIR /root/threefold_hub
RUN starport chain build
RUN ln -s /root/go/bin/threefold_hubd /usr/bin/threefold_hubd
COPY scripts /etc/zinit
COPY gbt_config.toml /root/.gbt/config.toml
ENTRYPOINT ["/sbin/zinit", "init"]