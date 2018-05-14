def unique_numbers_in_arrays(array1, array2)
  tq = array1 - array2
  tg =  array2 - array1
  return final = tq + tg
end

array1 = [1,2,3,4,5,7,9]
array2 = [1,2,3,4,6,7,10,11]

puts unique_numbers_in_arrays(array1, array2)




def sum_of_an_integer(number)
  newNum = number.to_s.split('')
  # array = Array.new
  sum = 0
  newNum.each {|x| sum+= x.to_i }
  
  # array.each {|y| sum+= y }
  puts sum
end

num = 900
sum_of_an_integer(num)




def letter_count(string)
  string = string.gsub(/\s+/, "").split("")
  
  # split(" ").join("").split("")
  ht = Hash.new(0)
  string.each { |letter|
  ht[letter] += 1 
  }
  return ht
end


str = "I love programing"

letter_count(str)
