#!/usr/bin/python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)')

class Square:
    """An empty class Square."""
    pass


if __name__ == '__main__':

my_square = Square()
print(type(my_square))
print(my_square.__dict__)
