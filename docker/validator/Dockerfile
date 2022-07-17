FROM ubuntu:20.04
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y wget openssh-server tmux tzdata gettext && \
    wget -O /sbin/zinit https://github.com/threefoldtech/zinit/releases/download/v0.2.5/zinit && \
    chmod +x /sbin/zinit && \
    mkdir -p /etc/zinit && \
    wget https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.4.1/gbt -O /root/gbt && \
    chmod +x /root/gbt && \
    /root/gbt init &&\
    wget https://github.com/threefoldtech/threefold_hub/releases/download/v1.0.0-a1/threefold_hub_1.0.0-a1_linux_amd64.tar.gz &&\
    tar -C /usr/local/bin/ -xf threefold_hub_1.0.0-a1_linux_amd64.tar.gz
COPY scripts /etc/zinit
COPY gbt_config.toml /root/.gbt/config.toml
ENTRYPOINT ["/sbin/zinit", "init"]

