#!/usr/bin/python3
"""this module defines a Rectangle subclass Square"""
square = __import__('9-rectangle').square


class Square(square):
    """Represent a square"""

    def __init__(self, size):
        """Initialize a new square
        """
        self.integer_validator("size", size)
        super().__init__(size, size)
        self.__size = size
