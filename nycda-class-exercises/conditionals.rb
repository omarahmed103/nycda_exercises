big_number = 999999
small_number = 5

if big_number > small_number
    puts "Everything is fine in the universe!\n\n"
end

if small_number == 5
    puts "Somethig doesn't seem right\n\n"
end

if
    big_number > small_number && small_number == 5
    puts "conditions matched\n\n"
end

colors_aray = %w{red green yellow}
names_array = %w{Jack Scott Omar}

colors_and_names = {
    colors: colors_aray,
    names: names_array
}   
    colors_and_names[:colors].each do |names|
    puts "The colors are #{names} "
end


def divide(number1, number2)
    number1/number2
end

puts divide(4, 2)

def divide_and_display(number1, number2)
    "The result of dividing #{number1} by #{number2} is #{number1/number2}" 
end
 
puts divide_and_display(6,3)

def add_tax(value)
    
    puts value.class
    if (value.class == String)
        puts "Please enter the numeric value"
        return nil
    else
        tax = value * 8.8/100
        puts "The sales tax is #{tax}"
    end
end

add_tax(10)
num = "asd"
add_tax(num)

def most_frequent_letter(string)
    letter = ""
    count = 0
    max_count = 0
    i = 0
    while(i < string.length)
        j = i + 1
        while(j < string.length)
            if (string[i] == string[j])
                count += 1
            end
            if (max_count < count)
                max_count = count
                letter = string[i]
            end 
            j += 1
        end
        i += 1
    end
    return letter
end

let = most_frequent_letter("Bob is a very nice gardener")
puts let

def rollig_two_dices()
    num = rand(1..6)
    num2 = rand(1..6)
    snake_eyes = 0
    if num == 1 && num2 == 1
        snake_eyes += 1
    end
    if snake_eyes >= 1
    puts snake_eyes
    end
end

100.times do 
    rollig_two_dices 
end