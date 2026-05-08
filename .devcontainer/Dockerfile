FROM mcr.microsoft.com/devcontainers/base:ubuntu24.04

# Install git-lfs
RUN apt-get update && \
    apt-get install -y \
        git-lfs \
    && \
    rm -rf /var/lib/apt/lists/*
