class Stack 
  def initialize()
    @items = Array.new
    # @count = 0
  end
  
  def push(element)
    @items.push(element)  
    # @count += 1 
  end
  
  def pop()
    @items.pop()
  end
  
  def show()
    puts @items
  end
  
  def peek()
    len = @items.length - 1 
    return @items[len]
  end
  
  def empty?()
    if ( @items.length == 0 )
      puts "Stack is empty"
    else
      puts "Stack has items inside"
    end
  end
end


st = Stack.new

# st.empty?

st.push(5)
st.push(6)
st.push("xyz")
# st.show()
st.pop()
# st.show()
# puts st.peek

# st.empty?

# st
  
  
  # Stack  