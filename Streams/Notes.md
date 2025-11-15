 **Node.js Streams**

## Node.js Streams: Efficient Data Handling

Streams in **Node.js** are a fundamental mechanism designed to handle data efficiently, particularly when dealing with **large amounts of data**. They process data in **chunks** (or small pieces) rather than loading the entire payload into system memory at once.

---

### What Are Streams?

Streams are **objects** that facilitate the continuous flow of data:

* They allow you to **read data** from a source (like a file or an HTTP request).
* They allow you to **write data** to a destination (like a file or an HTTP response).

They are central to many core Node.js operations, including **file handling**, **HTTP requests/responses**, and **data compression**. 

---

### 4️⃣ Types of Streams

Node.js provides four core abstract base classes for stream implementation:

| Stream Type | Function | Description |
| :--- | :--- | :--- |
| **Readable** | Reading | Used exclusively for **reading** data from a source. |
| **Writable** | Writing | Used exclusively for **writing** data to a destination. |
| **Duplex** | Read/Write | Streams that can simultaneously perform **both** reading and writing operations (e.g., a network socket). |
| **Transform** | Modify | A type of **Duplex** stream that can **modify or transform** the data as it is being written and read (e.g., zipping/unzipping data). |

---

### 🌟 Key Benefits of Using Streams

The primary advantages of using streams revolve around **performance** and **resource management**:

1.  **Memory Efficiency:** They **handle large files efficiently** by processing data in small chunks, **without loading the entire file into memory**. This drastically **reduces memory usage**.
2.  **Real-Time Processing:** They **enable real-time data processing**, which is crucial for applications like video streaming, large file uploads, or processing live data feeds.
3.  **Improved Performance:** By starting to process data as soon as the first chunk arrives, streams can **reduce latency** and **improve application performance**.


## official Documentaion
https://nodejs.org/api/stream.html  
