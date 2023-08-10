// given string s and t check whether it is anagram
const isAnagram = (s, t) => {
    // using objects
    if(s.length !== t.length) return false // compare length

    let lettersOfS = {}
    for(const letter of s){
        if(lettersOfS[letter]) lettersOfS[letter]++
        else lettersOfS[letter] = 1
    }

    let lettersOfT = {}
    for(const letter of t){
        if(lettersOfT[letter]) lettersOfT[letter]++ 
        else lettersOfT[letter] = 1 
    }

    console.log("lettersOfT ", lettersOfT)
    console.log("lettersOfS ", lettersOfS)

    for(const k of Object.keys(lettersOfS)){
        if(!lettersOfT[k]) return false
        if(lettersOfS[k] !== lettersOfT[k]) return false
    }

    for(const k of Object.keys(lettersOfT)){
        if(!lettersOfS[k]) return false
        if(lettersOfT[k] !== lettersOfS[k]) return false
    }

    return true
}


const isAnagramV2 = (s, t) => {
    // using code points
    let sCodesSum = s.split("").reduce((prev, curr) => prev + curr.codePointAt(0), 0)
    let tCodesSum = t.split("").reduce((prev, curr) => prev + curr.codePointAt(0), 0)

    console.log(sCodesSum, tCodesSum)
    return sCodesSum == tCodesSum
}

const isAnagramV3 = (s, t) => {
    // using sort
    if(s.length !== t.length) return false // compare length

    let sortedS = s.split("").sort()
    let sortedT = t.split("").sort()

    for(let i = 0; i < sortedS.length; i++){
        if(sortedS[i] !== sortedT[i]) return false
    }

    return true
}

console.log("isAnagram", isAnagramV3("ssl", "sla"))