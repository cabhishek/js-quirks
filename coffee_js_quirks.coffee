# 3) Prototypes

# class Person
#     constructor: (name) ->
#         @name = name

#     printMe: ->
#         console.log "I am real #{@name}"

# person = new Person "Slim Shady"

# person.printMe()

# class Human
#   constructor: (@name) ->

#   talk: (words) ->
#     console.log @name + " talks at speed of #{words} words per min."

# class Man extends Human
#   talk: ->
#     console.log "Man talking..."
#     super 10

# man = new Man "Slim Shady"
# man.talk()

# 4) Bound methods
# class MyKlass
#     constructor: () ->
#         @name = "Slim Shady"

#         foo = @printMe

#         foo()

#     printMe: () =>
#         console.log "I am real #{@name}"

# new MyKlass
