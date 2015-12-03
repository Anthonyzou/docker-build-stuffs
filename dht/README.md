### This is a super minimal boostrap-dht server

First I build the binarys. Copy them locally and make a new image
with libstdc++, libgcc, and libc.musl.

If there is a way to do this in one go I'd like to know

As always a prebuild binary is available.

### dht-bootstrap
    usage: dht-bootstrap <external-IP> [options]

    OPTIONS:
    --help                prints this message.
    --threads <n>         spawns <n> threads (defaults to the
                          number of hardware cores).
    --nodes <n>           sets the number of nodes to keep in
                          the node buffer. Once full, the oldest
                          nodes are replaced as new nodes come in.
    --ping-queue <n>      sets the max number of nodes to keep in
                          the ping queue. Nodes are held in the queue
                          for 15 minutes.
    --no-verify-id        disable filtering nodes based on their node ID
                          and external IP (allow any node in on the
                          node list to hand out).
    --version <version>   The client version to insert into all outgoing
                          packets. The version format must be 2 characters
                          followed by a dash and an integer.
