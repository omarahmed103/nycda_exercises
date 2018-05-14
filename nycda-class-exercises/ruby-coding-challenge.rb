

def surround_me(string, string_array)
    length = string_array.length
    string_array.push(string)
    i = 1 
    while(i <= length )
      string_array.push(string_array[length - 1])
      i += 1
    end
    return string_array
  end
  
  name = ["King-arthur",
              "lancelot",
              "percival"]
  
  surround_me("omar", name)

  number = [1, 2 ,3]

  surround_me("omar", number)
