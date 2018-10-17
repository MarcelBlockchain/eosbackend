FROM ubuntu:18.04
ARG DEBIAN_FRONTEND=noninteractive
WORKDIR /home

RUN apt-get update && apt-get install -y \
    git vim curl software-properties-common openssl ca-certificates nodejs npm \
    && apt-add-repository --yes --update ppa:ansible/ansible \
    && apt-get -y install ansible \
    && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/MarcelBlockchain/eosbackend.git && cd eosbackend \
    && npm install

RUN useradd -ms /bin/bash eos1 && echo "eos1:eos1" | chpasswd && adduser eos1 sudo
