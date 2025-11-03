The term **idempotent** describes the property of an operation or request where executing it **multiple times** yields the **same result** as executing it just **once**.

It literally means "(the quality of having) the same power," derived from the Latin *idem* (same) and *potens* (power).

-----

## 🛠️ Idempotency in Computer Science & HTTP

The concept is crucial for building **reliable and fault-tolerant** systems, especially over networks where requests might be accidentally retried (e.g., due to a timeout).

### 🎯 Key Takeaways

  * **Focus is on Server State:** Idempotency is about the **effect** on the server's resource state, not necessarily the HTTP *response code* received by the client.
      * **Example:** The first time you send a **DELETE** request for a resource, the server returns `200 OK` (and deletes it). The second time you send the *identical* **DELETE** request, the resource is already gone, so the server might return `404 Not Found`. However, the **final state** (the resource is deleted) is the same in both scenarios, so **DELETE is idempotent**.
  * **Safe vs. Idempotent:**
      * **Safe methods** (like `GET`) never change the server state, so they are always idempotent.
      * **Idempotent methods** (`PUT`, `DELETE`) *can* change the state, but repeating them won't cause further changes beyond the initial successful execution.
  * **Non-Idempotent Methods:**
      * **POST** is generally **not idempotent** because each request is intended to create a *new* resource, meaning repeating it creates duplicate resources (e.g., charging a credit card twice).
      * **PATCH** is generally **not idempotent** as it applies a partial modification, and repeating it might apply that modification again, leading to an unintended final state.

### 🌐 Idempotent HTTP Methods (Safe to Retry)

| Method | Intended Action | Idempotent? | Why? |
| :--- | :--- | :--- | :--- |
| **GET** | Retrieve a resource. | **Yes** | Reading the data doesn't change it. |
| **HEAD** | Retrieve headers only. | **Yes** | Reading data headers doesn't change it. |
| **PUT** | Completely replace a resource at a known URL. | **Yes** | Repeatedly setting the resource to the *same value* leaves it in the same state. |
| **DELETE**| Remove a resource. | **Yes** | The resource is removed after the first call; subsequent calls confirm it's gone. |
| **OPTIONS**| Describe communication options. | **Yes** | Simply querying available methods doesn't change state. |
| **TRACE** | Debugging/diagnostic request. | **Yes** | Generally involves no state change. |

-----

This concept is frequently tested in interviews when discussing **REST API design** and **error handling strategies**.

Here is a video explaining the concept: [HTTP Methods Explained](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Dr7wXfD49w2g) to give you a visual context on HTTP methods which directly relate to idempotency.