{
	"statement_1":{
		"current_line":1,
		"msg": "testing",
		
		"Vars":[

			{
				"name": "list_1",
				"type": "list",
				"length": 8,
				"value": "(5, 4, 4, 9, 6, 15, 19, 3)"
			},

			{
				"name":"linkedList_2",
				"type": "LinkedList",
				"head": 6,
				"length": 7,
				"value": "[6, 1, 0, 3, 1, 7, 2]"
			},

			{
				"name":"int_3",
				"type": "int",
				"value": 1
			},

			{
				"name":"matrix_4",
				"type": "matrix",
				"n_cols": 4,
				"n_rows": 4,
				"value": "([0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0])"
			},

			{
				"name":"stack_5",
				"type": "stack",
				"length":3,
				"isEmpty": false,
				"top": 3,
				"value": "(1, 2, 3)"
			},

			{
				"name":"graph_6",
				"type": "Graph",
				"value": "[[s, ['r', 'w']], [r, ['x', 's']], [v, ['w']], [w, ['s', 't', 'u', 'v']], [t, ['w']], [x, ['y', 'r', 'u']], [u, ['x', 'w']], [y, ['x']]]",
				"no_edges": 8,
				"no_nodes": 8,


				"edgeList": [
					{"start": "r", "end": "s", "weight": 1 },
					{"start": "x", "end": "u", "weight": 1 },		
					{"start": "t", "end": "w", "weight": 1 },		
					{"start": "u", "end": "w", "weight": 1 },		
					{"start": "x", "end": "y", "weight": 1 },		
					{"start": "x", "end": "r", "weight": 1 },
					{"start": "v", "end": "w", "weight": 1 },		
					{"start": "s", "end": "w", "weight": 1 }
				],

				"vertexList": [
					{"value": "v", "color": "white", "adjs": "['w']"},
					{"value": "w", "color": "white", "adjs": "['w']"},
					{"value": "u", "color": "white", "adjs": "['x', 'w']"},
					{"value": "t", "color": "white", "adjs": "['w']"},
					{"value": "s", "color": "white", "adjs": "['r','w']"},
					{"value": "r", "color": "white", "adjs": "['x', 's']"},
					{"value": "y", "color": "white", "adjs": "['x']"},
					{"value": "x", "color": "white", "adjs": "['y','r','u']"}
				]
			},

			{
				"name": "BTree_7",
				"type": "BTree",
				"no_nodes": 5,
				"value": "[3[2[1]][4[5]]]"
			}
		]
	},
	"statement_2":{
		"current_line":1,
		"msg": "testing",
		
		"Vars":[

			{
				"name": "list_1",
				"type": "list",
				"length": 8,
				"value": "(5, 4, 4, 9, 6, 15, 19, 3)"
			},

			{
				"name":"linkedList_2",
				"type": "LinkedList",
				"head": 6,
				"length": 7,
				"value": "[6, 1, 0, 3, 1, 7, 2]"
			},

			{
				"name":"int_3",
				"type": "int",
				"value": 1
			},

			{
				"name":"matrix_4",
				"type": "matrix",
				"n_cols": 4,
				"n_rows": 4,
				"value": "([0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0])"
			},

			{
				"name":"stack_5",
				"type": "stack",
				"isEmpty": false,
				"top": 3,
				"value": "(1,2,3)"
			},

			{
				"name":"graph_6",
				"type": "graph",
				"value": "[[s, ['r', 'w']], [r, ['x', 's']], [v, ['w']], [w, ['s', 't', 'u', 'v']], [t, ['w']], [x, ['y', 'r', 'u']], [u, ['x', 'w']], [y, ['x']]]",
				"no_edges": 16,
				"no_nodes": 8,


				"edgeList": [
					{"start": "r", "end": "s", "weight": 1 },
					{"start": "x", "end": "u", "weight": 1 },		
					{"start": "t", "end": "w", "weight": 1 },		
					{"start": "u", "end": "w", "weight": 1 },		
					{"start": "x", "end": "y", "weight": 1 },		
					{"start": "x", "end": "r", "weight": 1 },
					{"start": "v", "end": "w", "weight": 1 },		
					{"start": "s", "end": "w", "weight": 1 }
				],

				"vertexList": [
					{"value": "v", "color": "white", "adjs": "['w']"},
					{"value": "v", "color": "white", "adjs": "['w']"},
					{"value": "u", "color": "white", "adjs": "['x', 'w']"},
					{"value": "t", "color": "white", "adjs": "['w']"},
					{"value": "s", "color": "white", "adjs": "['r','w']"},
					{"value": "r", "color": "white", "adjs": "['x', 's']"},
					{"value": "y", "color": "white", "adjs": "['x']"},
					{"value": "x", "color": "white", "adjs": "['y','r','u']"}
				]
			},

			{
				"name": "BTree_7",
				"type": "BTree",
				"no_nodes": 5,
				"value": "[3[2[1]][4[5]]]"
			}
		]
	}
}