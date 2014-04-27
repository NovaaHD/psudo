# -*- coding: utf-8 -*-

import sys
sys.path.append('..')
import glb

from module.basemodule import basemodule

class whilemodule(basemodule):

    __name__ = 'WhileModule'

    def __init__(self, var_list, func_list, exp, content):
        """
        var_list:    Vars from last module
        exp:        Tokens stand for expression
        content:    Loop content
        """
        self.var_list = var_list
        self.func_list = func_list
        # self.localVarList = []
        self.exp = exp
        self.content = content
        self.end_recursive = False
        self.continue_flag = False

    @property
    def setContinue(self):
        self.continue_flag = True

    @property
    def resetContinue(self):
        self.continue_flag = False

    def run(self):
        from utils.recursive import recursive, execute
        glb.module_stack.append(self)

        execute('__judge__ = ' + self.exp, self)
        while self.var_list['__judge__']:
            recursive(self.content, 0, self)
            execute('__judge__ = ' + self.exp, self)
            if self.continue_flag:
                self.resetEnd()
                self.resetContinue()

        self._end_module()
