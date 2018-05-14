class Classmate
    attr_accessor :name
    attr_accessor :super_power

    def initialize(name, super_power)
        @name = name
        @super_power = super_power
    end

    def i_have_the_power()
        return "#{@name} has the '#{@super_power}' "
    end
end