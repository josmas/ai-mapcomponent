# Colours for Docker tabs. Adapted from https://gist.github.com/pablete/5871811
function tabc() {
  NAME=$1; if [ -z "$NAME" ]; then NAME="Default"; fi
  echo -e "\033]50;SetProfile=$NAME\a"
}

function colordocker() {
  tabc docker
  docker $*
  tabc
}

# Actual call to docker run
colordocker run -it --rm \
  -v /Users/jos/development/AppInventor/ai-mapcomponent/:/home/jos/code \
  josmas/ai-mapcomponent /bin/bash
