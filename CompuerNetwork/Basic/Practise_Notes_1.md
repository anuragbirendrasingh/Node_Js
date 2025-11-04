

---

## 💻 Computer Networking Fundamentals

### **1. Core Concept**
* A **Computer Network** is a collection of interconnected computers and devices that can **communicate** and **share resources** (like printers, files, and internet access).

### **2. Key Network Devices**

| Device | Function | Detailed Explanation |
| :--- | :--- | :--- |
| **Router** | Connects **different networks** (e.g., your home network to the Internet). | Uses **IP addresses** to determine the best path (route) for data packets to travel across networks. It operates at the Network Layer (Layer 3). |
| **Switch** | Connects devices **within a single network** (LAN). | Receives a data frame and forwards it only to the intended device based on its **MAC address**. Creates multiple dedicated connections, improving efficiency. Operates at the Data Link Layer (Layer 2). |
| **Modem** | **Modulates** and **Demodulates** signals. | Converts digital signals from your computer/router into analog signals for transmission over phone/cable lines, and vice versa. It's the device that connects your home network to your Internet Service Provider (ISP). |
| **Firewall** | A **security system** that monitors and controls incoming and outgoing network traffic based on predetermined security rules. | Acts as a barrier between a trusted internal network and untrusted external networks (like the Internet). It can be hardware or software-based. |

---

## 🌐 Protocols and Security

### **1. Secure Communication**
* **HTTPS** (**HyperText Transfer Protocol Secure**): The protocol used for **secure communication** over the Internet.
    * **Mechanism:** It encrypts the data exchanged between the client (your browser) and the server, ensuring **confidentiality** and **integrity**.
    * **Security:** It uses **SSL/TLS** (Secure Sockets Layer / Transport Layer Security) for this encryption.

### **2. SSL/TLS**
* **SSL/TLS (Secure Sockets Layer/Transport Layer Security):** The protocol that provides security for web communications.
    * **Key Functions:**
        1.  **Authentication:** Verifies the server's identity.
        2.  **Confidentiality (Encryption):** Protects data from being read by unauthorized parties.
        3.  **Data Integrity:** Ensures data has not been tampered with during transmission.

### **3. Email Protocols**
* **SMTP** (**Simple Mail Transfer Protocol**): Used to **send** emails from a client to a server, or between mail servers.
* **POP3** (**Post Office Protocol version 3**): Used to **retrieve** emails from a mail server to a local client.

### **4. Other Key Protocols**
* **HTTP** (**HyperText Transfer Protocol**): Standard protocol for transferring web pages.
* **FTP** (**File Transfer Protocol**): Used for transferring files between a client and a server.
* **NTP** (**Network Time Protocol**): Used to **synchronize time** across all devices on a computer network.

---

## ⚙️ Network Configuration and Services

### **1. DHCP Server**
* **DHCP** (**Dynamic Host Configuration Protocol**) **Server**: Responsible for **automatically assigning IP addresses** and other network configuration parameters (like the subnet mask and default gateway) to devices on a network.
    * **Benefit:** Simplifies network administration by preventing manual IP configuration and IP address conflicts.

### **2. Proxy Server**
* **Proxy Server:** Acts as an **intermediary** for requests from clients seeking resources from other servers.
    * **Reverse Proxy:** Specifically mentioned in your notes, it sits **in front of one or more web servers**. It intercepts client requests and forwards them to the appropriate backend server.
        * **Benefits:** **Improved Security** (hides the identity of backend servers), **Load Balancing**, and **Caching**.

### **3. IP Addressing (Private vs. Public)**
* An **IP Address** is a numerical label assigned to each device participating in a computer network.

| Type | Function | Example (Your Note) |
| :--- | :--- | :--- |
| **Private IP Address** | Used for communication **within a local network** (LAN). They are non-routable on the public internet. | **`192.168.1.1`** (This is a common **private** address.) The other ranges are: `10.0.0.0` to `10.255.255.255`, and `172.16.0.0` to `172.31.255.255` (Your note `172.20.10.5` falls in this private range). |
| **Public IP Address** | Used for communication on the **public Internet**. They are globally unique and routable. | `8.8.8.8` (This is a **public** address, specifically Google's public DNS server.) |

---

## 🎯 Ports, OSI Model & Topology

### **1. Common Port Numbers**
A **Port Number** is a 16-bit number that identifies a specific process or network service.

| Port | Protocol | Explanation |
| :--- | :--- | :--- |
| **21** | **FTP** | Default port for the **File Transfer Protocol** (used for transferring files). |
| **25** | **SMTP** | Default port for the **Simple Mail Transfer Protocol** (used for sending emails). |
| **80** | **HTTP** | Default port for **HyperText Transfer Protocol** (standard unencrypted web traffic). |
| **443** | **HTTPS** | Default port for **HyperText Transfer Protocol Secure** (encrypted web traffic using SSL/TLS). |

### **2. OSI Model Layer**
* **Transport Layer** (Layer 4 of the OSI Model):
    * **Responsibility:** It is responsible for **end-to-end communication** and **error recovery**, ensuring reliable data transfer between the source and destination hosts (e.g., using protocols like TCP).

### **3. Network Topologies**
* **Topology** refers to the arrangement of elements (links, nodes, etc.) of a computer network.
    * **Star:** All devices are connected to a central hub or switch. (Most common in modern LANs).
    * **Ring:** Devices are connected in a closed loop; data travels in one direction.
    * **Bus:** All devices are connected to a single main cable (bus).
    * **Mesh:** Every device is connected directly to every other device (full mesh) or to multiple others (partial mesh). (Provides high redundancy).

***

