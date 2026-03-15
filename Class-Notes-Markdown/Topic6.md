# CS 355 - Topic 6: Data Link Layer

**Dates:** March 2, 2026 and March 4, 2026
---

## March 2:  

### What does the data link layer do? 
- Translate from digital packets into analog
- Hop to hop delivery - delivery between two directly connected adjacent devices (can be wireless)

### Mac Address
- A globally unique hardware identifier. The IEEE is the cetralized entity in charge of mac address allocation 
- That max number of mac addresses possible is 2^48 = 281 trillion
- Same mac address: xx xx xx xx xx xx
  - The first 6 x's are the organizational unique identifier
  - The following 6 x's are network interface component 
- You can change your mac address but it is not very helpful 

### Frame Control Sequence (FCS)
- Provides data integrity 
- It is a true or false that tells whether or not the message being transmitted has been corrupted 

---

## March 4: 

### Frame Check Sequence: 
- Provides data integrity 
- True or False 
- Determines whether we were able to detect corruption on the message received 
- How it works: Takes everything so far and feeds it to the CRC32 hashing algorithm which returns a 32 bit digest. We take that digest and concatinate it as the FSC to the original message. When the message is sent from point A to B, B re-runs this process and if digest at point A does not equal the digest at point B, then B is 100% sure that there was a corruption. If they are the same, theres a strong confidence that there was no corruption 

### Hardware Devices 
- Cable (physical layer device): point-to-point
- Network Hub (physical layer device):  acts as a n-dimensional cable. When it receives a signal, it duplicates it on all other ports except the receiving port 

### Problem w/ Netowkr Hub 
- Since the cables are full duplex they can send and receive a message at the same time BUT it can NOT receive two messages at the same time
- This problem is known as **collision domain** 
- Messages get corrupted because two signals are being sent in the same direction at the same time on the same cable

### Carrier Sense Multiple Access
- The following algorithm was the quote on quote fix to collision domains:
```javascript
function send(message){
    while (receiving()){
        wait(); 
    }
    os.send(message); 
}
```
- However, if every computer on the network did not update to this latest algorithm it gave priority to the ones not updated to send whatever they want whenever they want, thus they tried to optimize this algorithm for the minimum # of bots corrupted as follows: 
```javascript
function send(message){
    for(let i = 0; i < message.length; i++){
        if(receiving()){
            wait();
        }
        os.send(message[i]); 
    }
}
```

### Network Switch 
- Networks hubs were replaced by network switches 
- Network switch (data link layer device). It has CPU and memory unlike network hubs. There are no collisions because only get sent to destination not to all 
- Quality of Service (QoS): used to determine device priority on a network 
- If two messages are being sent to one device at the same time, it uses the switch memory in the best case scenario and in the worst case scenario it uses the priority flag to throw away the lesser priority device's message
- The switch never sends a message on its own 
- The switch has no mac address
- The switch is a cable meanings it is basically a fancy cable

### Switch Device Discovery Algorithm 
1. Upon receiving a message, record the following details: source mac, port number, and expiratio date to the forwarding information base 
2. Check the forwarding information base for the destination mac, if found then forward to the mapped port number only, if not enter hub mode and forward the message to all other ports except for the receiving port 
> As each device SENDS a message, the switch starts to "discover" the devices, making it easier and faster to sends messages to that device in the future