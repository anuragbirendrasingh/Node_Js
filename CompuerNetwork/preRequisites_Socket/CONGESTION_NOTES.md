
## 🔵 **What is Congestion in Computer Networks (TCP context)?**

**Congestion = Jab network me zyada traffic bhej diya jata hai, aur routers itna saara data handle nahi kar paate.**
Isse packets queue me jam jaate hain, delay hota hai, packets drop hone lagte hain.

Bilkul waise jaise **road par traffic jam** ho jaata hai.

---

## 🔵 **TCP me Congestion ka matlab**

TCP ek reliable protocol hai, aur wo hamesha ensure karta hai ki network me **overload** na ho.

**TCP Congestion** tab hota hai jab:

* Sender bohot fast data bhej raha ho
* Network ya router handle nahi kar paayein
* Packets queue me jam ho jaayein
* Routers packet drop karna start kar dein

---

## 🔵 **Congestion kyu hota hai?**

1. **Sender bahut fast bhej raha hai, network slow hai**
2. **Routers me queue full ho jaati hai**
3. **Bandwidth se zyada data ja raha hota hai**
4. **Network me multiple senders ek sath bhej rahe hote hain**
5. **Path me koi bottleneck router slow hota hai**

---

## 🔵 Example (Easy to Visualize)

Maan lo tum 100 mbps ki internet speed ho lekin router ke beech ka koi part sirf 10 mbps handle kar sakta hai.

Agar tum continuously 100 mbps se data bhejte jaoge:

➡ Queue full
➡ Packet drop
➡ Delay
➡ Timeout

Ye hi **congestion** hai.

---

## 🔵 TCP Congestion Control ka kaam kya hai?

TCP ke paas kuch algorithms hote hain jo network me jam hone se bachate hain, jaise:

### ✔ Slow Start

### ✔ Congestion Avoidance

### ✔ Fast Retransmit

### ✔ Fast Recovery

Ye algorithms ye check karte hein:

* Kitna data bhejna safe hai
* Kab speed kam karni hai
* Kab speed badhani hai

---

## 🔵 Super Simple Diagram Understanding

```
Sender →→→ Router →→→ Receiver

If Sender > Router capacity:
    Queue full
    Packets drop
    Congestion!
```

---

## 🔵 Ek line me definition (Interview friendly)

**“Congestion is a state in a network when the incoming packet load exceeds the router’s processing capacity, causing delay, packet loss, and performance degradation. TCP detects congestion and controls the sending rate.”**

---


