# -*- coding: utf-8 -*-

class Node:
    __name__ = 'Node'

    def __init__(self, value='default', children=[]):
        self._value = value
        self._children = children

    def __str__(self):
        ret = '['
        ret += str(self.value)
        if self.hasChild:
            for child in self.children:
                if isinstance(child, Tree):
                    ret += str(child)
                else:
                    ret += '[' + str(child) + ']'
        ret += ']'
        return ret

    __repr__ = __str__

    def __iter__(self):
        """
        """
        for child in self._children:
            yield child

    def __del__(self):
        self._value = None
        self._children = []

    def __eq__(self, obj):
        if isinstance(obj, Node):
            return ((self._value == obj._value) and \
                    (self._children == obj._children))
        else:
            return (self.value == obj)

    def __len__(self):
        return len(self._children)

    def __getitem__(self, ind):
        return self._children[ind]

    def __setitem__(self, ind, val):
        self._children[ind] = val

    def __delitem__(self, ind):
        return self._children.pop(ind)

    def __getslice__(self, ind1, ind2):
        return self._children[ind1:ind2]

    def __setslice__(self, ind1, ind2, val):
        self._children[ind1:ind2] = val

    def __delslice__(self, ind1, ind2):
        for ind in range(ind, ind2):
            self._children.pop(ind)

    @property
    def value(self):
        return self._value

    @property
    def children(self):
        return self._children

    @value.setter
    def value(self, value):
        self._value = value

    @children.setter
    def children(self, children):
        if (isinstance(children, list)):
            self._children = children
        else:
            raise Exception('Children should be list type')

    @property
    def hasChild(self):
        return (len(self._children) != 0)

    @property
    def getHeight(self):
        if not self.hasChild:
            return 1
        childHeight = []
        for child in self._children:
            if isinstance(child, Node):
                childHeight.append(child.getHeight)
            else:
                childHeight.append(0)
        return (max(childHeight) + 1)

    def add_child(self, child):
        self._children.append(child)

class Tree(Node):
    __name__ = 'Tree'
    def __init__(self, value=None, children=[]):
        self._value = value
        self._children = children

    def get_root(self):
        return self

    def preorder_traversal(self, func):
        pass

    def inorder_traversal(self, func):
        pass

    def postorder_traversal(self, func):
        pass
