
---

# # 📘 WebSocket Start Karne Se Pehle — Computer Networks Ka Required Roadmap

---

# ## ✅ WebSocket padhne ke liye Computer Network me kya-kya padhna zaroori hai?

WebSocket samajhne ke liye bas **7 core concepts** chahiye.
Inke bina WebSocket ka handshake, persistent TCP connection, frames — sab confusing lagta.

---

# ## 1️⃣ TCP vs UDP — Difference & Purpose

WebSocket **TCP** par chalta hai.
Isliye TCP ke ye concepts clear hone bahut zaroori:

* **Connection-oriented**
* **3-way handshake**
* **Reliable (ACK + retransmission)**
* **Ordered data arrival**
* **Stream based transport**

UDP:

* connectionless
* fast
* unreliable
* unordered

### 🔥 Why WebSocket uses TCP?

Because WebSocket needs **persistent + reliable + bidirectional** communication.

---

# ## 2️⃣ HTTP vs WebSocket — kya main difference hai?

| Feature    | HTTP               | WebSocket               |
| ---------- | ------------------ | ----------------------- |
| Connection | Request → Response | Persistent (open)       |
| Direction  | One-way            | Two-way (full duplex)   |
| Use cases  | APIs, websites     | Chat, gaming, live data |
| Overhead   | High               | Low                     |

### 🔥 Important

WebSocket **HTTP se hi start hota hai**, phir handshake ke baad **HTTP → WebSocket** switch hota.

---

# ## 3️⃣ HTTP → WebSocket Upgrade Handshake (Core WebSocket Start Point)

Step 1: Client sends HTTP GET

```
GET /chat HTTP/1.1
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: abcxyz==
```

Step 2: Server responds:

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: hashed-key
```

### ⚡ This is the exact moment WebSocket starts.

After this, TCP socket permanent open ho jata hai.

---

# ## 4️⃣ Persistent Connection — Meaning

### ✔ HTTP:

* Connection opens → request → response → connection closes

### ✔ WebSocket:

* Connection once opened → **long time open**
* Client + server **ek saath** messages bhej sakte hain

This requires understanding of:

### ### ➤ Keep-Alive

Server connection ko idle state me bhi open rakhta hai.

### ### ➤ Full Duplex

Bidirectional communication without waiting.

---

# ## 5️⃣ OSI / TCP-IP Model — Only Required Part

WebSocket ka mapping:

| Layer                    | Component          |
| ------------------------ | ------------------ |
| **Application Layer**    | WebSocket Protocol |
| **Transport Layer**      | TCP                |
| **Network Layer**        | IP                 |
| **Data Link + Physical** | Underlying network |

Bas itna hi required hai WebSocket ke liye.

---

# ## 6️⃣ Socket & Ports Basics

### ✔ Socket = IP + Port

Example:

```
192.168.1.5:8080
```

### ✔ Common WebSocket Ports

* `ws://` → 80 (unencrypted WebSocket)
* `wss://` → 443 (TLS secure WebSocket)

Client & server **dono** ke paas ek socket hota hai → unse data flow hota hai.

---

# ## 7️⃣ Event-Driven Communication Basics

WebSocket works through events:

* `onopen` — connection established
* `onmessage` — message received
* `onclose` — connection closed
* `onerror` — error occurred

Iska base concept:
**event-driven asynchronous architecture**.

---

# ## ⭐ Summary (One-Page Revision)

WebSocket padhne se pehle ye 7 topics clear karo:

1. **TCP basics** (handshake, reliability)
2. **TCP vs UDP**
3. **HTTP vs WebSocket**
4. **HTTP → WebSocket upgrade handshake**
5. **Persistent TCP connection**
6. **Sockets & ports**
7. **Event-driven architecture**
