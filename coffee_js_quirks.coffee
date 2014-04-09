
# 2) Bound methods
class MyKlass
    constructor: () ->
        @name = "Slim Shady"

        foo = @printMe

        foo()

    printMe: () =>
        console.log "I am real #{@name}"

new MyKlass
