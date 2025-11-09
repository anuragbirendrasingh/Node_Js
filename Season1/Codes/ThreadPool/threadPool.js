const fs = require("fs");
const crypto = require('crypto');

crypto.pbkdf2('password' ,"salt",500000,50,"sha512",(err,key)=>{
    console.log("1 - cryto");
    
})

crypto.pbkdf2('password' ,"salt",500000,50,"sha512",(err,key)=>{
    console.log("2 - cryto");
    
})

crypto.pbkdf2('password' ,"salt",500000,50,"sha512",(err,key)=>{
    console.log("3 - cryto");
    
})

crypto.pbkdf2('password' ,"salt",500000,50,"sha512",(err,key)=>{
    console.log("4 - cryto");
    
})

crypto.pbkdf2('password' ,"salt",500000,50,"sha512",(err,key)=>{
    console.log("5 - cryto");
    
})

crypto.pbkdf2('password' ,"salt",500000,50,"sha512",(err,key)=>{
    console.log("6 - cryto");
    
})



// 🧠 Explanation:

// pbkdf2 → ek password-based key derivation function hai (used for hashing passwords securely).

// Parameters:

// 'password' → input string

// 'salt' → random data to prevent rainbow table attacks

// 500000 → iterations (jitna zyada, utna secure)

// 50 → output key length (in bytes)

// 'sha512' → digest algorithm (✅ correct spelling)

// Callback → (err, key) where key is the derived key (Buffer)