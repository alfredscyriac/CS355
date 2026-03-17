# CS 355 - Topic 6: Network Layer

**Dates:** March 9, 2026 and March 16, 2026
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

---

# March 16: 

### Review of IP Addresses
- Sample CIDR Address: `16.32.16.0/20`
- Sample Device Address: `16.32.31.255`
- You cannot identify whatt network a device is on using the decimal representation of the IP address, thus why you must convert it to binary 
- The number of bits you check to identify a network is solely dependent on the subnet id
> This is a common question type for exam: given two ip addresses, verify whether or not they are on the same network. have to know how to convert from decimal to binary 
- The total number of devices you can have on a network is equal to 2^(32 - subid) - 2 [two ips are reserved for network and broadcast]

### IP Header 
- In the following table all `(#)` is the size of that section in bits
<table border="1" style="width:100%; table-layout: fixed;">
  <tr>
    <td>Version(4)</td><td>IHL(4)</td><td>Types of Service(8)</td><td>Total Length(8)</td>
  </tr>
  <tr>
    <td colspan="2">Identification(16)</td>
    <td colspan="2">Fragment Offset(16)</td>
  </tr>
  <tr>
    <td colspan="1">Time to Live(8)</td>
    <td colspan="1">Protocol(8)</td>
    <td colspan="2">Header Check Sum(16)</td>
  </tr>
  <tr>
    <td colspan="4">Source Address(32)</td>
  </tr>
  <tr>
    <td colspan="4">Destination Address(32)</td>
  </tr>
  <tr>
    <td colspan="4">Options - 0 or more words (32)</td>
  </tr>
</table>

- Breakdown of various componets from header: 
  - Version: These 4 bits determine which version of IP is being used 
    - 0100 - IPv4
    - 0110 - IPv6
  - IHL (Internet Header Length):
    - Slightly inaccurate header length
    - Actual header size = IHL + 20 
  - Types of Service:
    - No longer used because it was very poorly defined 
    - Originally it was a priority field but they messed it up because anyone was allowed to set the priority which defeats the purpose 
  - Total Length:
    - Total size of the message being transmitted in bytes (8 bits in 1 byte)
  - Protocol:
    - Determines the transport layer protocol (tcp or udp)
    - There is way too much space allocated for this. In the modern day its usually a choice between 2 option which can be described perfectly with one bit. There's 8 bits allocated because when they created this header they thought there would be many more protocols in the future
  - Header Checksum: 
    - Data integrity 
    - Not used anymore because the data link layer already handles data integrity using the FSC. As the data link layer header is nested inside of the IP header, there is no pointing in checking twice when we know data integrity from the data link layer header
  - Source and Destination Address: 
    - IP Addresses of the device that sent the messages and the device receiving the message
  - Time to Live:
    - This is used to solve routing loop problems 
    - If you are trying to send a message from point A to point B and a router along the way is misconfigured, the message will not be able to reach point B and get stuck in a loop between the routers. This loop would never end and cause a lot of delays and storage issues. What the time to live does is add an expiration time to the message, so if it has not reaches point B by then, just disregard the message to prevent this problem
- IPv4 header acts like a shipping label that guides a packet from source to destination.
- Source and destination IP addresses remain constant.
- Some header fields (e.g., TTL) are updated at each router, BUT we treat it like it doesn't

### Reserved IP Ranges
1. Loopback: `127.0.0.0/8`
   - Range: `127.0.0.0` -> `127.255.255.255`
   - Example: Local Host - `127.0.0.1`
   - This range is used send messages to yourself and more commonly for developer to test their code 
2. IEFT: `192.0.0.0/24`
   - Range: `192.0.0.0` -> `192.0.0.255`
   - This range is used for private networks
   - Router will never route private network address outside of the network  
3. Multicast: `224.0.0.0/24`
   - Range: `224.0.0.0` -> `239.255.255.255`
   - Address does not leave the network 
   - Used for high performance, one to many, read only messages 
   - Example use case: QC updating all the devices in the computer labs and on campus
   - The benefits to multicast is it sends the message once and every switch duplicates it making the workload for the server less heavy 

### Dynamic Host Configuration Protocol (DHCP) 
- Assigns IP addresses within a network 
- DHCP Algorithm: 
  1. Discover - broadcast message 
  2. Offer - switch offer device a unique IP address 
  3. Request - device accepting an offer 
  4. Acknowledgement - adds expiration date
- DHCP Client Table 

IP Address | Mac Address | Expiration Time 
---------- | ----------- | ---------------
some ip    | some mac    | some time
some ip 2  | some mac 2  | some time 2

- A good comparison for this QC Secured Wifi. There is obviously an expiration time set because randomly you will be asked to sign into your CAMS account again before you can use the secured Wifi. The reason an expiration exists is because if a device stops using a network there is no reason to keep an ip address for that device, for instance thing of a student that graduates and doesn't come back to campus. There is no reason for that students device to still have an ip address 
- DHCP is not good for printers because the printers IP address expires all devices using the printer will need to re-add it with its new IP address which is a hassle. The fix to this is with static IP addresses (IP's that dont change)

### Address Resolution Protocol (ARP)
- ARP requests which devices owns an IP address on the network, the owner responds sharing details about itself including its mac address, etc. This is used to detemine who own which IP address
- ARP results get cached for future references and to limit the number of times this request needs to sent out 
- A new ARP request is sent when the cache entry expires or a new device is contacted