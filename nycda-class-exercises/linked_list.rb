class LinkedList 
  def initialize()
    @linkedList = Array.new
    @head = @linkedList[0] 
    @size = 0 
  end
  
  def add(element)
    node = Node.new(element)
     
#   if list is Empty add the
#   element and make it head
    
    if(@head == nil)
      @head = node
    else
      current = @head
    
#   iterating through the linked list to get to the end
      while (current.next != nil) 
        current = current.next
      end
      
#   adding new node in the linked list
    current.next = node
    
    @size += 1
    end
  end

  def remove(index)
    if (index > 0 && index > @size)
      return

  class Node
    attr_accessor :data, :next
    def initialize(value)
      @data =  value 
      @next = nil 
    end
  end
end
    
    
    
  ll = LinkedList.new()
  puts ll.add(2)
  puts ll.add(1) 
  
  
  # ll1 = LinkedList.new()
  # puts ll1
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
