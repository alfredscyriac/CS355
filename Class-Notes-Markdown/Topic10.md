# CS 355 - Topic 10: Transport Layer 

**Dates:** March 30, April 13, and April 15, 2026
--- 

## March 30

### What is the transport layer? 
- Ensures that messages get to the correct application. This is its only duty. 

### Two Major Protocols
- TCP: Provides sveral gurantees 
- UDP: Provides no gurantees
- TCP is a much more complex protocol, with added latency 
- UDP is used for things such as live streaming, and FaceTime as it is much faster 

### Server vs Client
- Client: Sends the first message
- Server: Waits for the first message 
  
### Checksum 
- Checksum on the transport layer provides data integrity 

### Network Address Translation (NAT)
- A beautiful hack solution to the IPv4 exhaustion problem 
- Modern routers are almost all NAT enabled 
- NAT steals froms private address space when you're on the network, and then steals from the ports #'s when I'm out of the network 
## April 13

### Transmission Control Protocol (TCP)
1. Reliable Delivery, meaning TCP will keep on trying even if the initial message fails to send or deliver 
2. No duplicate messages 
3.  No out of order messages 
- Offers congestion control to ensure servers don't go down due to overload 
- TCP is not used for everything due to perfomance. By providing these 3 gurantees, the protocol because extremely complex 

### UDP vs TCP Header
- UDP header is 8 bytes total
- TCP header is more than twice the size of he UDP header, and requires more messages (acknowledgements)

### All or Nothing 
- TCP is all or nothing, which raises a cost concern 
- Some may not need all 3 gurantees provided by TCP, however to use TCP you must pay the cost of all 3 gurantees 

### Sequence Number 
- Used to order messages, counted in bytes
- `next_sequence = prev_sequence + prev_DataLength`

### Acknowledgement Number
1. Number of bytes received in the correct order + 1
2. Next expected sequence number 
- 1 and 2 mean the same thing, just two different ways to interpret what the acknowledgement number is 

### Scenario 1
- Alice and Bob use TCP to communicate. Alice initiates the connect. Upon connecting she sends 3 messages: 100B, 200B, and 300B. Upon receiving all 600B, Bob responds with 300B, 200B, and 100B of data and then closes the connection. Can assume no data is lost 

## April 15 

### What is data loss? 
- A message is sent but it is not received as it was lost in transit 

### What is window size? 
- The number of acknowledgement messages that can be sent without waiting, so when drawing sequence diagrams, you can always send all data back to back without waiting to receive the acknowledgement message of each sent message 

### Data Loss Recovery 
- The receiver is able to identify when a message was lost using the sequence numbers 
- The sender would not know if a message they sent was lost or not 
- When the receiver sends the acknowledgement to the sender they will send two acknowledgements that are duplicates, this notifies the sender that messages were lost in transit. They are able to identify how many messages the receiver was able to successfully receive without data loss by using the acknowledgement number 
- The sender resends all messages past acknowledgement number, this is considered the last "safe-point" of received messages without data loss
- Retransmission looks identical in nature to the original data message as it contains data size, sequence number, and acknowledgement number 
- Timeouts are extremely inefficient and are tried to be avoided 
> If a series of data is sent, as long as the acknowledgement for the very last data sent is not lost, all the ones before it don't matter as the last acknowledgement superseeds all before it