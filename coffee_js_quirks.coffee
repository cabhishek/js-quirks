# 3) Prototypes

class Person
    constructor: (name) ->
        @name = name

    printMe: ->
        console.log "I am real #{@name}"

person = new Person "Slim Shady"

person.printMe()

# class Human
#   constructor: (@name) ->

#   sing: (words) ->
#     console.log @name + " sings at speed of #{words} words per min."

# class Musician extends Human
#   sing: ->
#     console.log "Musician singing..."
#     super 10

# man = new Musician "Bob Dylan"
# man.sing()

# 4) Bound methods
# class MyKlass
#     constructor: () ->
#         @name = "Slim Shady"

#         foo = @printMe

#         foo()

#     printMe: () =>
#         console.log "I am real #{@name}"

# new MyKlass
