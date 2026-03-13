# CS 355 - Topic 5: Physical Layer 

**Dates:** March 2, 2026
---

## March 2: 

### What is the physical layer? 
- Focuses on the encoding of data on to various transmission mediums 

### Types of Encoding 
1. Cables - Point to point connection between exactly two devices. All data in this format is self contained and the messages do not need to be encrypted
2. Wireless - Omnidirectional and location does not matter as long as the signal can reach it. Encryption is absolutely mandatory for securely sharing messages 

### Types of Cables 
1. Copper (twisted pair) - Data is encoded as electrical current. It's always in pairs because 2 of them are needed to cancel out each others electromagnetic waves. The drawbacks of these cables are that they can be influenced by magnetic fields
2. Optical Fiber - Encodes data as pulses of light. Speed is bounded by detectors. These cables do not bend well. When these cables bend we get "smearing" of the signal. 
> Typically you have fiber optic cables to your house and then copper cables inside of the the house 

### Channel Types
1. Simplex - Unidirectional from source to destination 
2. Half Duplex - Bidirectional communication but only one device can receive at a time 
3. Full Duplex - Bidirectional communication and both devices can receive at the same time 
> All wireless communication is half duplex, but we can't perceive it because it is so fast