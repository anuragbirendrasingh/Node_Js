

***

## 🌐 HTTP (Hypertext Transfer Protocol) Quick Revision Notes

HTTP is the foundational **protocol** for data communication on the **World Wide Web**. It defines the rules for how web clients (like browsers) and web servers communicate.

### 📝 Core Definitions

* **Protocol:** A set of rules or conventions that govern how data is transmitted and communicated between devices in a network. It's the common language ensuring clear understanding between sender and receiver.
* **HTTP (Hypertext Transfer Protocol):** The primary protocol used on the web. It is a **stateless** application-layer protocol that enables the retrieval of resources (like HTML documents, images, videos) and the submission of data.
* **Hypertext:** Text displayed on a computer that contains clickable **hyperlinks**, connecting it non-linearly to other texts or documents. It is the foundation of the web's interconnected structure.

---

### 🔄 How HTTP Works (The Request-Response Cycle)

The entire web operates on a simple **request-response** cycle governed by HTTP:

1.  **Client (e.g., Browser) sends a Request:** The browser sends an HTTP request message to the server, asking for a resource (e.g., a webpage).
2.  **Server processes the Request:** The server receives the request, processes it, and locates the requested data.
3.  **Server sends a Response:** The server sends an HTTP response message back to the client, containing the requested resource or an error message.



### 🔑 Key Concepts for Interviews

#### 1. HTTP is Stateless

* **Definition:** Each request and response pair is an independent transaction; the server does not retain any memory or context about previous requests from the same client.
* **Why it Matters:** This simplifies server design but requires **mechanisms for state management** in web applications, typically handled using **Cookies** and **Sessions**.

#### 2. HTTP Methods (Verbs)

These define the type of action the client wishes to perform on the server's resource (defined by the URL).

| Method | Purpose | Interview Context |
| :--- | :--- | :--- |
| **GET** | Retrieve data from a specified resource (safe and idempotent). | Most common; should **never** be used to change data. |
| **POST** | Submit data to a specified resource (creates a new resource). | Used for form submissions, creating new records. |
| **PUT** | Update or replace an existing resource with new data. | Completely replaces the resource at the specified URL. |
| **DELETE**| Delete the specified resource. | Used for removing data from the server. |
| **PATCH**| Partially update an existing resource. | Used for minor, non-destructive updates. |

#### 3. HTTP Status Codes

These are three-digit codes returned in the response that indicate the outcome of the client's request. **Knowing the categories is crucial:**

| Category | Range | Meaning | Common Examples |
| :--- | :--- | :--- | :--- |
| **Informational** | `1xx` | Request received, process continuing. | `100` (Continue) |
| **Success** | `2xx` | Request was successfully received, understood, and accepted. | `200` (OK), `201` (Created) |
| **Redirection** | `3xx` | Further action must be taken to complete the request (usually a new URL). | `301` (Moved Permanently), `302` (Found) |
| **Client Error** | `4xx` | The error is likely caused by the client (bad syntax, invalid request). | `400` (Bad Request), **`404` (Not Found)**, `401` (Unauthorized) |
| **Server Error** | `5xx` | The server failed to fulfill a valid request due to a server-side error. | **`500` (Internal Server Error)**, `503` (Service Unavailable) |

#### 4. The Shift to HTTPS (HTTP Secure)

* **HTTP:** Data is transmitted in **plaintext** (unencrypted), making it vulnerable to interception.
* **HTTPS:** HTTP layered on top of **SSL/TLS** (Secure Sockets Layer/Transport Layer Security). Data is **encrypted**, ensuring **confidentiality** and **integrity** during transmission.
* **Interview Tip:** Always recommend and use **HTTPS** for production applications, especially when dealing with sensitive user data.

---

## 🎯 Important Interview Focus Points

* **Difference between HTTP/1.1 and HTTP/2:**
    * **HTTP/1.1:** Uses a new connection for each request, leading to **Head-of-Line Blocking**.
    * **HTTP/2:** Uses a single **multiplexed** connection, allowing multiple requests to be processed concurrently, improving speed and efficiency.
* **Idempotence:** A method is **idempotent** if multiple identical requests have the same effect as a single request. (e.g., `GET`, `PUT`, `DELETE` are idempotent; `POST` is not). This is a key concept in designing robust REST APIs.

---

