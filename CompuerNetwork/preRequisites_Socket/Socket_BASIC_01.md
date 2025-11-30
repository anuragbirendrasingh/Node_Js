
---

# # 🔌 Socket Basics (Hindi + Practical + Interview Focus)

---

# ## 1. Socket — Simple Definition

**Socket = Network communication ka endpoint.**
**Formula: IP Address + Port Number → Socket**

* **IP** → machine ka address (`192.168.0.5`)
* **Port** → machine me running particular application ka gate (`3000`, `80`, `443`)

Example:

```
192.168.0.5:3000 → ek socket endpoint
```

---

# ## 2. Socket ka Purpose (Kyun zaroori?)

* Ek hi machine me multiple services chalti hain → ports unhe alag karte hain.
* Socket allow karta hai:

  * **reliable stream** (TCP)
  * **fast datagrams** (UDP)
* Client–Server communication ka base.

---

# ## 3. TCP Socket vs UDP Socket

### ### 🟩 TCP Socket (Stream Socket)

* Connection-oriented
* 3-way handshake required
* Ordered, reliable delivery (ACK + retransmission)
* Continuous byte stream
* Use cases: Web, WebSocket, Email, SSH, File transfer

### ### 🟨 UDP Socket (Datagram Socket)

* Connectionless (no handshake)
* Fast but unreliable, unordered
* Message-based
* Use cases: Gaming, VoIP, DNS, Video streaming

---

# ## 4. Socket API (General Flow)

### ### 🟦 Server Side (TCP)

1. `socket()` → create
2. `bind(ip, port)`
3. `listen(backlog)`
4. `accept()` → new socket for each client
5. `send()` / `recv()`
6. `close()`

### ### 🟪 Client Side (TCP)

1. `socket()`
2. `connect(ip, port)`
3. `send()` / `recv()`
4. `close()`

(UDP: `sendto()/recvfrom()`, no listen/accept.)

---

# ## 5. TCP Socket Lifecycle

1. `CLOSED`
2. Client `connect()` →
   **SYN → SYN-ACK → ACK** (3-way handshake)
3. `ESTABLISHED` → data transfer
4. Closing → **FIN → ACK** exchange
5. Back to `CLOSED`

---

# ## 6. Blocking vs Non-Blocking Sockets

### ### 🟫 Blocking Socket

* `recv()` data aane tak rukta.

### ### 🟧 Non-Blocking Socket

* `recv()` turant return.
* High-performance servers use
  **select / poll / epoll** for multi-client handling.

---

# ## 7. Secure Sockets (TLS/SSL)

* Normal TCP socket ko encrypt karne ke liye **TLS** use hota hai.
* WebSocket ka secure version:

```
ws://  → normal TCP
wss:// → TLS (Secure), port 443
```

---

# ## 8. Practical Example (Node.js TCP Server)

```js
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected:', socket.remoteAddress + ':' + socket.remotePort);

  socket.on('data', (data) => {
    console.log('Received:', data.toString());
    socket.write('Server got: ' + data);
  });

  socket.on('end', () => console.log('Client disconnected'));
});

server.listen(3000, () =>
  console.log('TCP server listening on port 3000')
);
```

---

# ## 9. Browser Sockets vs Server Sockets

| Environment | Low-Level Socket? | Supports?                 |
| ----------- | ----------------- | ------------------------- |
| **Browser** | ❌ No raw TCP      | ✔ WebSocket, ✔ WebRTC     |
| **Server**  | ✔ Yes             | TCP, UDP, WebSocket, etc. |

**Browser → WebSocket mandatory** for real-time full-duplex communication.

---

# ## 10. Relation: Socket vs WebSocket

* WebSocket **TCP socket ke upar build** hota hai.
* Process:

  1. HTTP GET request with
     `Upgrade: websocket`
  2. Server replies `101 Switching Protocols`
  3. Ab TCP connection WebSocket frame protocol follow karta

**So: WebSocket = higher protocol over TCP sockets.**

---

# ## 11. Quick Glossary (Interview Friendly)

| Term                     | Meaning                           |
| ------------------------ | --------------------------------- |
| **Endpoint**             | IP + Port                         |
| **Backlog**              | Pending connection queue size     |
| **Half-open connection** | Ek side closed, dusri open        |
| **Keep-alive**           | Idle connection alive rakho       |
| **Frame/Packet**         | Data unit (TCP stream = no frame) |
| **Datagram**             | UDP message                       |

---

# ## 12. Interview Questions (With 1-line Answers)

### **Q1. Socket kya hota hai?**

A: Socket = IP + Port = network communication endpoint.

### **Q2. TCP socket reliable kyu hota hai?**

A: Because of ACKs, retransmissions, ordering, and congestion control.

### **Q3. TCP vs UDP socket?**

A: TCP reliable stream, UDP fast datagram.

### **Q4. Browser raw TCP kyu nahi use karta?**

A: Security reasons — browser only supports HTTP, WebSocket, WebRTC.

### **Q5. WebSocket TCP ke upar kaise chalta hai?**

A: HTTP upgrade handshake se TCP connection ko WebSocket protocol me convert kar diya jata.

### **Q6. `listen(backlog)` ka kya kaam hai?**

A: Pending connection queue ka size define karta.

### **Q7. Server client ke har connection ke liye alag socket kyu banata?**

A: Taaki har client ka independent bi-directional stream ho.

---


