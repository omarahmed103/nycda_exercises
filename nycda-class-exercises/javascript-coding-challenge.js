function surroundMe(string, stringArray){
    let newStringArray = stringArray.split(",")
    console.log(newStringArray)
    let arrayLength = newStringArray.length 
    console.log(arrayLength)
    // stringArray = stringArray + "," + " " + string
    newStringArray.push(string)

    for (let i = 1; i <= arrayLength; i ++)
    newStringArray.push(newStringArray[arrayLength - i])

    return newStringArray
}

let name = ["King-arthur",
            "lancelot",
            "percival"]

surroundMe("omar", name)