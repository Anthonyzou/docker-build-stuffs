# curl -s 'https://github.com/NLnetLabs/unbound' | jq -r .tag_name


docker build . -t docker.io/anthonyzou/unbound:1.2 --platform linux/amd64,linux/arm64