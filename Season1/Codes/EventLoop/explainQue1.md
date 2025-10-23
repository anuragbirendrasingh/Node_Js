



````markdown
# 🧠 Node.js Event Loop Deep Dive — `setImmediate` vs `fs.readFile`

## 📜 Code Example

```js
const fs = require("fs");
const a  = 10;

setImmediate(() => console.log("Set Immediate")); // Check phase (after poll phase)

fs.readFile("./demo.txt", "utf8", () => {
  console.log("poll phase after timer");
});

setTimeout(() => console.log("Timer phase first"), 0); // Timer phase

function printA() {
  console.log("value of a", a);
}
printA();

console.log("Last Line of The file");
````

---

## 🎯 Expected Output

```
value of a 10
Last Line of The file
Timer phase first
poll phase after timer
Set Immediate
```

---

## 🧩 Actual Output (Reality)

```
value of a 10
Last Line of The file
Timer phase first
Set Immediate
poll phase after timer
```

---

## 🔍 Why the Difference?

In Node.js, both `fs.readFile` and `setImmediate` are asynchronous operations,
but they are handled in **different phases** of the event loop:

| Phase            | Example                      | Description                                                |
| ---------------- | ---------------------------- | ---------------------------------------------------------- |
| **Timers Phase** | `setTimeout`, `setInterval`  | Executes scheduled timer callbacks.                        |
| **Poll Phase**   | `fs.readFile`, I/O callbacks | Waits for I/O events to complete and runs their callbacks. |
| **Check Phase**  | `setImmediate`               | Runs immediately after the poll phase finishes.            |

---

## ⚙️ What’s Happening Behind the Scenes

### 🕓 Typical Flow (when I/O finishes quickly)

```
Timer phase first
poll phase after timer
Set Immediate
```

### ⚡ Your Case (I/O took slightly longer)

```
Timer phase first
Set Immediate
poll phase after timer
```

That means:

* The **poll phase** was empty when the loop reached it.
* The event loop **jumped straight** to the **check phase**, executing `setImmediate`.
* When the file I/O finished slightly later, its callback was queued for the **next poll cycle**.

---

## 💬 In Simple Terms

* `setImmediate()` runs **after poll**, but **only if poll already had callbacks** ready.
* If the file I/O (`fs.readFile`) takes even a *tiny bit longer*,
  `setImmediate()` executes **first**.
* Both are **asynchronous**, and their order depends on how fast the OS completes the file read.

---

## ⚡ Conclusion

There is **no guaranteed fixed order** between:

```js
setImmediate(...);
fs.readFile(...);
```

Their execution order depends on:

* 🖥️ System speed
* 📂 File size
* 💾 Disk I/O delay
* ⚙️ Node.js internal scheduling

---

## 🧩 Pro Tip

To make the order consistent (poll before immediate),
wrap the file read inside a small timer:

```js
setTimeout(() => {
  fs.readFile("./demo.txt", "utf8", () => {
    console.log("poll phase after timer");
  });
}, 0);
```

This ensures the poll callback always executes **before** `setImmediate()`.

---

## ✅ Summary Diagram

```
 ┌────────────────────────────┐
 │        Timers Phase        │  ← setTimeout(), setInterval()
 └────────────┬───────────────┘
              ↓
 ┌────────────────────────────┐
 │        Poll Phase          │  ← fs.readFile(), I/O callbacks
 └────────────┬───────────────┘
              ↓
 ┌────────────────────────────┐
 │        Check Phase         │  ← setImmediate()
 └────────────────────────────┘
```

> 🧠 Depending on I/O completion speed, Node.js may skip poll callbacks in the current cycle,
> leading `setImmediate()` to run earlier.

---

**Author:** *Anurag Birendra Singh*
**Topic:** Understanding Node.js Event Loop Phases through Practical Example

```


