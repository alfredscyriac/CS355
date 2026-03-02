# CS 355 - Topic 4: OSI / TCP IP Model

**Dates:** February 25, 2026
---

## February 25: 

### Conceptual Models of the web: 
1. Open Systems Interconnected Model (7 layer model)
2. TCPIP Model - Internet Model (5 layer model - *4 layer version also exists*)

### Why do we have two models? 
- Answer: The OSI model came first as the original design document for the internet in the 1970s. The OSI model is what they imagined the internet would be like in 30 years from then but they were completely wrong and that's why the TCPIP / Internet model arose 
- The TCPIP / Internet model is what we actually use in the modern day 
- Conceptual models = way to organize protocols (meaning they are flexible)

### OSI 7 Layer Model Breakdown: 
1. Application - Where the application lives 
2. Presentation - Changes the look of the content within the application 
3. Session - Remembers your identity 
4. Transport - Delivers data to the correct application 
5. Network - End to end delivery (get anywhere connected on internet) 
6. Data Link - Converts from digital to analogue 
7. Physical - Bit by bit delivery of data (encoding/decoding of data on to a physical medium)
- When we think about these layers we mostly look at it from a bottom up standpoint with #1 being the highest level and #7 being the lowest level 

### TCPIP 5 Layer Model Breakdown: 
1. Application - Where your application lives + present + session 
2. Transport 
3. Network 
4. Data Link 
5. Physical 

### Communication Protocols (strict): 
- All major protocols have an rfc (request for comments) document 
- Specify every detail of how the protocol works 
- These can be well over 1,000 pages 
- It is a system of rules that all two or more devices to communicate using a standard that everyone who wants to use the protocol must follow 

## Forms of Sending a Message

> Scenario 1: 776 BC Homing Pigeon - The Olympic Games take place in Olympia, Greece but the capital of Greece is Athens. Olympia and Athens are roughly 160+ miles apart so delivering the results of the Olympics from Olympia to Greece by foot would take too long. What they did was they took a homing pigeon whose home was in Athens and took that pigeon to Olympia and once the games were done they wrote the results on a small scribe, attached to the pigeon, and let the pigeon fly. The unique characteristic about homing pigeons is they always know how to make it back to their home, thus the message would reach Athens (faster than on foot delivery)
- Properties of this form of communication: 
  - Limited message size - you can only fit so much on a small scribe that pigeon can carry comfortably without altering its flight
  - Unidirection - Messages can only be sent from Olympia to Athens, meaning someone from Athens can't reply once they find out the results 
  - Lossy - The message can be lost 
  - Forged - Someone can catch the pigeon in its flight back home, change out the scribed note for their own note and crown themselves the winner of all the games, therby forging the results 
  - Slow - Limited by the speed of the bird 
  - Unencrypted - Anyone can see the message 
  - Max Distance - Limited by bird's energy

> Scenario 2: 400 BC Hydraulic Semaphore - In the same city there would two identical hydraulic semaphore with messages engraved within them and they would be placed on two hills far away from each other with an operator manning each one. When they want to send a message between the stations, one of the operators lights and torch and starts to let the water run from the semaphore. When the other operator sees the torch light up he immediately starts to let water run from his semaphore as well. Eventually the operator sending the message will put out the light on his torch and stop the water from running and the other operator will do the exact same immediately. Then the message indicated by the water level of the semaphore will be received by the second operator. 
- Properties of this form of communication: 
  - Limited message size - the semaphores could only be so big and engrave messages so big 
  - Maintaince cost - There are a lot of resources need such as the water, the torches, the operators, and the materials that go into building the semaphores themselves 
  - Bad in the day - it's easier to see the torch from a distance at the night time and in the day time it can be much harder leading to human error 
  - Bidirection - messages can be sent both way, messages can't be sent simultaneously however and most likely there has to be a certain delay between messages because a refill on water level
  - Max distance limited by hilltop size 
  - Bad encryption of the messages being sent 
  - Small accuracy issues in the messages being sent 

> Scenario 3: Middle Ages Optical Telegraph - France is a very large country and it was hard to share messages from one end to the other in a timely manner so the optical telegraph system was adopted. An optical telegraph is a line of towers spread throughout the country for the purpose of converying textual information by the means of visual signals. How it worked was there was a tower with two large arms overhead that could be turned. A operator at each tower would use a rope to turn these arms to specific positions. Each position represented a specific letter in the alphabet or a specific word and could only be decoded using a code book. Basically it's a chain reaction from start tower to end tower with each tower following the arm position of the prior tower. 
- Properties of this form of communication: 
  - Good encryption - not even the operator of each station can decipher the messages as they are being transmitted. This was in fact the earliest *end-to-end encryption*. Only those with the code book could decipher the messages. Thus the sender and the receiver not the transmitters
  - Bidirectional - messages can be sent both ways 
  - Full alphabet - each letter of the alphabet could be represented by an arm position 
  - Lossy - depending on the operators skills its possible that a message get disrupted in transit 