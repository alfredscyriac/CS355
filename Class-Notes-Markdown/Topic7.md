# CS 355 - Topic 6: Network Layer

**Dates:** March 9, 2026 
---

## March 9:  

### What does the network layer do? 
- End-to-end delivery of messages 
- Getting to every other computer on the internet 

### What is a network? 
- Simply put, a network is just a collection of devices 
- Devices within the same network can typically communicate with each other fairly easily
- Networks tends to be seperated by routers, a single network may have multiple routers each acting as a gateway between other networks

## What is the Internet Protocol? 
- The most widely used protocol on the network layer is the Internet Protocol (abbreviated IP) It has two versions, IPv4 and IPv6
- Before your computer sends a message off to the internet it attaches an IP header to it, this header for the most part stays the same at each hop along the path. This constrasts to the data link layer protocol like Ethernet and 802.11 where the frame headers are removed at each hop 
- This IP Header contains multiple fields, the most important of which is the source and destination address

## IP Address in general
- IP address are a 32 bit number composed of four octets
- Each octet is typically represented as a number from 0 to 255 separated by dots (examples: 192.168.0.0 or 255.255.255.255)

### IPv4 Address
1. IPv4 is used to represent devices on network 
2. IPv4 is used instead of MAC addresses because MAC addresses cannot be used because it is assigned at creation and finding a specific MAC address on the internet is like finding a needle in a haystack 
3. IPv4 gives us the ability to say select n devices form a network and that specific network as a while can be identified by some IP address
- Same IP Address: `a.b.c.d`
  - `a.b.` is the host portion, it is used to identify a specific device on an individual device 
  - `c.d` is the network portion, it is used to identify the specific network itself
- We've reached IPv4 Address Exhaustion bexause 2^32 = 4.2 billion which is not enough considering there are over 8 billion people on the earth 

### Classful Addressing (Historial + Wasteful)
| Class | Prefix | Octets (for network) | Octers (for host) | Size |
|----------|----------|----------|-----|----|
| A  | 0 - 126   | 1   | 3 | 2^24 = 16M | 
| B   | 128 - 191   | 2   | 2 | 2^16 = 65,536 |
| C   | 193 - 224  | 3   | 1 | 2^8 = 256 |

### Classless Interdomain Routing / CIDR (Modern)
- Two types of addresses: 
  1. Network (CIDR) address - includes a network portion, a host portion, and a subnet identifier
    - Ex: `32.8.16.0/20`
  2. Host (device) address - includes a network portion, and a host no portion. They key difference is the lack of a subnet identifier
- For both these types of address, when converted to binary, the subnet number determines how any bits make up the network portion and the rest of the bits are for hosts
- Note that there are two reserved addresses for each network: 
    1. the address of all 0's is reserved to identify the network 
    2. the address of all 1's is reserved as broadcast address
- The # of hosts = 2^(32-subnet_id) - 2
- If a company ever needs to expand to support more devices, then the subnet id gets decreased by 1