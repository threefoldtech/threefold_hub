FROM ubuntu:20.04 AS builder
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install git vim wget curl build-essential ca-certificates -y --no-install-recommends && \
    git clone --branch development https://github.com/threefoldtech/threefold_hub.git /root/threefold_hub && \
    wget https://go.dev/dl/go1.18.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go1.18.linux-amd64.tar.gz && \
    curl https://get.starport.network/starport! | bash
ENV PATH=$PATH:/usr/local/go/bin:/usr/local/bin:/root/go/bin
WORKDIR /root/threefold_hub
RUN starport chain build

FROM ubuntu:20.04
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y wget openssh-server tmux tzdata gettext && \
    wget -O /sbin/zinit https://github.com/threefoldtech/zinit/releases/download/v0.2.5/zinit && \
    chmod +x /sbin/zinit && \
    mkdir -p /etc/zinit && \
    wget https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.4.1/gbt -O /root/gbt && \
    chmod +x /root/gbt && \
    /root/gbt init
COPY --from=builder /root/go/bin/threefold_hubd /usr/bin/threefold_hubd
COPY scripts /etc/zinit
COPY gbt_config.toml /root/.gbt/config.toml
ENTRYPOINT ["/sbin/zinit", "init"]

