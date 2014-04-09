# 1 Variable scoping

# No Hoisting in python


# def foo():
#     print name

#     name = "Slim shady"

#     print name

# foo()

# 1. a)
# Python has three ways to create a new namespace; functions, classes, and
# modules


# def foo(bar):
#     baz = bar * 2

# if bar > 1:  # if bar > 1000:
#         blitz = baz - 100

#     print "blitz value is =>", blitz


# foo(200)

# 3 Class
# class Person(object):

#     def __init__(self, name):
#         self.name = name

#     def print_name(self):
#         print "My name is real =>", self.name

# person = Person("Slim Shady")

# person.print_name()

# 4) Bound methods
# class MyKlass:
#     def __init__(self):
#         self.name = "Slim Shady"

#         foo = self.print_me

#         foo()

#     def print_me(self):
#         print "I am real =>", self.name

# MyKlass()
