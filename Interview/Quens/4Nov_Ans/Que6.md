
---

### 💡 **Question:**

> If a function takes 3 seconds to complete, and you call it inside an `async` function without `await`, what happens?

### 💬 **Perfect Answer:**

If you call an asynchronous function **without `await`**, it **returns a Promise immediately** and does **not block** the execution of the next lines of code.

So even if that function takes 3 seconds to complete, your `async` function will **not wait** for it — it will continue executing the remaining statements.

This does **not cause system failure**, but if you expect the result of that function before continuing, you’ll get **unexpected behavior** (like accessing `undefined` or an unresolved promise).

---

### ⚙️ Example:

```js
async function demo() {
  const result = slowFunction();  // No await here
  console.log("Next line executes immediately");
  console.log(result); // → Promise { <pending> }
}

async function slowFunction() {
  return new Promise(resolve => setTimeout(() => resolve("Done"), 3000));
}

demo();
```

**Output:**

```
Next line executes immediately
Promise { <pending> }
```

If we used `await slowFunction()`, the code would pause until the promise resolved after 3 seconds.

---

**👉 Interview Tip:**
Always mention that *not using `await` allows concurrency*, which can be useful in some cases, e.g. running multiple tasks in parallel using `Promise.all()`.

---

Would you like to move to the **next question from this round** (about event loop & async flow)?



