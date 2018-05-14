class Queue
  def initialize
    @array = Array.new 
  end
  
  def enqueue(element)
    @array.push(element)
  end
  
  def dequeue()
    @array.shift()
  end
  
  def front()
    return @array[0]
  end
  
  def empty?()
    if @array.length == 0 
      return "queue is empty"
    else
      return "queue has some elements"
    end
  end
  
  def show()
    @array
  end
end

q = Queue.new

q.enqueue(125)

q.enqueue("Axelrod")

q.enqueue("bobby")

q.front

# q.dequeue()
q.empty?()
q.show()