class Animal 
  # attr_accessor :name
  attr_reader :height, :species
  attr_accessor :name
  def initialize(name, height, species)
    @name = name
    @species = species
    @height = height
  end
  
  # def height()
  #   @height
  # end
  
  # def species()
  #   @species
  # end
  
  # def name(name)
  #   @name = name
  # end
  
  def walk()
    "I am walking very sowly, #{ @name }"
  end
  
  def run()
    "I am running very quickly, #{ @name }"
  end
  
end

class Giraffe < Animal
  def initialize(name, height)
    super(name, height, "giraffe")
  end
end

class Lizard < Animal
  def initialize(name, height)
    super( name, height, "lizard")
  end
end

animal = Animal.new("jumpy", 5, "dog" )

puts animal.walk()

giraffe = Giraffe.new("sparky", "10")

puts giraffe.walk()



class Calculator
  def self.add(number1, number2)
    number1 + number2
  end
  
  def self.subtract(number1, number2)
    number1 - number2
  end
  
  def self.multiply(number1, number2)
    number1 * number2
  end
  
  def self.divide(number1, number2)
    number1 / number2
  end
  
end

puts Calculator.add(2, 2)
 
 
 class Student
   attr_reader :name, :gpa, :course
   def initialize(name, gpa, course)
     @name = name
     @gpa = gpa
     @course = course
   end
   
   def display_name_gpa_course()
     " #{@name}, #{@gpa}, and course are #{@course} "
   end
   
 end
 
 class SeiStudent < Student
   attr_reader:topics
   def initialize(name, gpa, hours_slept)
     @topics = "design", "frontend programming", "backend programming"
     @hours_slept = hours_slept
     super(name, gpa, couse = "sei")
   end
   
   def display_name_gpa_course()
     "#{@name}, #{@gpa}, #{@course} and #{@topics}"
   end
   
   def minutes_slept(number)
     number * 60
   end
 end
   
 
 scott = SeiStudent.new("Scott", "4.0", 4)
 
 puts scott.display_name_gpa_course
 
 puts scott.minutes_slept(8)
# puts scott.topics
  
    
    
    
    