
---

# 📘 **WebSocket + TCP Mastery — Interview Oriented Notes**

*(Clean Markdown Version)*

---

# # 🟩 MODULE A — TCP 3-WAY HANDSHAKE + ACK SYSTEM

## ## ⭐ TCP Guarantees

* Reliable
* Ordered
* No duplication
* Congestion aware

---

# ## ⭐ 1. 3-Way Handshake

### **Step 1 → Client → SYN**

```
SYN = 1
Seq = 100
```

### **Step 2 → Server → SYN-ACK**

```
SYN = 1
ACK = 101
Seq = 500
```

### **Step 3 → Client → ACK**

```
ACK = 501
```

✔ Connection established
✔ Sequence numbers synced

---

# ## ⭐ 2. ACK System

ACK = next expected byte

Example:
Client sends 5 bytes:

```
Seq = 200
```

Server replies:

```
ACK = 205
```

---

# ## ⭐ 3. Retransmission

If ACK not received → retransmit.

---

# ## ⭐ 4. Sliding Window

Controls how much unacknowledged data can be in-flight.

```
[ACKed][Sent][Allowed Window][Not Allowed]
```

---

# ## ⭐ 5. 4-Way Connection Close

FIN → ACK → FIN → ACK

---

# ## ⭐ Interview Questions (with one-liners)

1. **Why 3-way handshake?** To sync sequence numbers and ensure bidirectional connection.
2. **ACK means?** Next expected byte.
3. **Why random ISN?** Avoid old duplicate packets.
4. **Why 4 packets to close?** Full duplex shutdown.
5. **Retransmission?** Resend unacknowledged data.
6. **Sliding window?** Controls in-flight data.
7. **If ACK lost?** Duplicate ACKs received.
8. **SYN flood?** Fake SYN packets → resource exhaustion.
9. **Half-open connection?** One side open, one side closed.
10. **Why handshake uses SYN?** Synchronize sequence numbers.

---

# # 🟦 MODULE B — WebSocket Upgrade Handshake

## ## ⭐ 1. WebSocket = starts with HTTP → switches to TCP

Client sends HTTP GET upgrade request.
Server responds with **101 Switching Protocols**.
Then → **raw TCP WebSocket frames**.

---

# ## ⭐ Handshake Example

### **Client → Request**

```
GET /chat HTTP/1.1
Host: server.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: a1b2c3d4==
Sec-WebSocket-Version: 13
```

### **Server → Response**

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: <hashed-key>
```

---

# ## ⭐ Why Sec-WebSocket-Key?

To prevent cross-protocol attacks and validate client.

---

# ## ⭐ Interview Questions

1. **Why HTTP first?** Browser only allows HTTP outbound initially.
2. **101 Switching Protocols?** Protocol upgraded to WebSocket.
3. **Why Sec-WebSocket-Key?** Security + avoid replay.
4. **Ports?** ws → 80, wss → 443.
5. **After 101, HTTP used?** No, pure TCP.
6. **WebSocket over UDP?** Not possible.
7. **Are WebSockets stateful?** Yes.
8. **Why version = 13?** Standard.
9. **Fallback to polling?** No (that was Socket.IO).
10. **Disconnect detection?** FIN or Ping/Pong timeout.

---

# # 🟨 MODULE C — SOCKET = IP + PORT + TRANSPORT (ADVANCED)

## ## ⭐ 1. Socket Definition

```
Socket = IP + Port + Protocol (TCP/UDP)
```

---

# ## ⭐ 2. Endpoint

Each side of a connection = 1 endpoint.

---

# ## ⭐ 3. Ports Table

| Service         | Port |
| --------------- | ---- |
| HTTP            | 80   |
| HTTPS           | 443  |
| WebSocket (ws)  | 80   |
| WebSocket (wss) | 443  |

---

# ## ⭐ 4. How Server Handles Many Sockets?

* Non-blocking I/O
* I/O multiplexing (select/poll/epoll/IOCP)

Node.js uses **event loop + epoll**.

---

# ## ⭐ Interview Questions

1. **What is socket?** IP + Port + Protocol.
2. **Difference port vs socket?** Port = number; socket = endpoint.
3. **Multiple clients handled how?** I/O multiplexing.
4. **Non-blocking socket?** Returns instantly.
5. **Why Node.js good?** Event-loop + non-blocking I/O.
6. **TCP vs UDP socket?** Stream vs packet.
7. **Ephemeral port?** Temporary outbound port.
8. **Unique client?** `(IP, Port)` pair.
9. **Same port for multiple apps?** No.
10. **bind()?** Assign port to socket.

---

# # 🟧 MODULE D — TCP Flow Control + Congestion Control

# ## ⭐ 1. Flow Control

Prevents receiver buffer overflow.

Mechanism: **rwnd (receiver window)**

---

# ## ⭐ 2. Congestion Control

Prevents network congestion.

### **Phases**

1. **Slow Start** → exponential
2. **Congestion Avoidance** → linear
3. **Fast Retransmit** → 3 duplicate ACK
4. **Fast Recovery** → cwnd halved

Effective window = `min(rwnd, cwnd)`

---

# ## ⭐ Interview Questions

1. **Flow control?** Protect receiver.
2. **Congestion control?** Protect network.
3. **rwnd?** Receiver allowed limit.
4. **cwnd?** Congestion window.
5. **Effective window?** min(rwnd, cwnd).
6. **Slow start?** Exponential cwnd increase.
7. **Why slow start?** Avoid congestion.
8. **Fast retransmit?** 3 duplicate ACK.
9. **Fast recovery?** cwnd halved.
10. **TCP stable kyun?** Adaptive cwnd + retransmission.

---

# # 🟥 MODULE E — WebSocket Frames + Masking + Opcodes

# ## ⭐ 1. Frame Format

```
FIN (1 bit)
Opcode (4 bit)
Mask (1 bit)
Payload Length
Masking Key (4 bytes)
Payload
```

---

# ## ⭐ 2. Opcodes

| Opcode | Meaning |
| ------ | ------- |
| 0x1    | Text    |
| 0x2    | Binary  |
| 0x8    | Close   |
| 0x9    | Ping    |
| 0xA    | Pong    |

---

# ## ⭐ 3. Masking Rules

* **Client → MUST mask**
* **Server → MUST NOT**

Reason: Prevent proxy injection attacks.

---

# ## ⭐ 4. Fragmentation

FIN = 0 → message not complete

---

# ## ⭐ Interview Questions

1. **Why masking?** Avoid proxy cache attacks.
2. **FIN bit?** Frame continuation indicator.
3. **Text vs Binary?** 0x1 = text, 0x2 = binary.
4. **Why not use HTTP frames?** HTTP is request-response.
5. **Reliability?** Provided by TCP.
6. **Ping/pong?** Heartbeat.
7. **Large payload?** Extended length field.
8. **Close frame?** Opcode 0x8.
9. **Full-duplex?** Yes.
10. **After close?** Both must stop sending data.

---

# ✔ Done
