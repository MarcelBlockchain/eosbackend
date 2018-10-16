FROM ubuntu:18.04
WORKDIR /home

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y git vim curl software-properties-common openssl ca-certificates \
    && apt-add-repository --yes --update ppa:ansible/ansible \
    && apt-get -y install ansible \
    && rm -rf /var/lib/apt/lists/* \
    && git clone https://github.com/BlockMatrixNetwork/eos-mainnet.git \
    && cd eos-mainnet
    