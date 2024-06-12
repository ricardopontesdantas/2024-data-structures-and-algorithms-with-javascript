# Data Structures and Algorithms with JavaScript

Data structures are essential components that help organize and store data efficiently in computer memory. They provide a way to manage and manipulate data effectively, enabling faster access, insertion and deletion operations.

## Linear Data Structures

### Array

A collection of elements of the same type stored in contiguous memory locations. Always allow direct access to elements using an index.

### Stack

A Last-In-First-Out (LIFO) structure where elements are added and removed from the top

### Queue

A First-In-First-Out (FIFO) structure where elements are added at the end and removed from the begining.

### Linked List

A collection of elements linked together by pointers. Linked lists allow dynamic insertion and deletion.

## Non-Linear Data Structures

### Hash Table

A data structure that uses a hash function to map keys to values. Hash tables provide efficient key-value pair lookups.

### Dictionary

A dictionary, also known as a map or associative array, is a collection of key-value pairs. It allows efficient retrieval, insertion, and deletion of values based on their associated keys. Dictionaries are useful for scenarios where you need to associate unique keys with specific values and perform quick lookups.

### Tree

A hierarchical structure where each node can have multiple child nodes. Trees are commonly used for representing hierarchical relationships.

### Graph

A collection of nodes connected by edges, representing complex relationships between data elements. Graphs are versatile and find applications in various domains.

#### BFS

Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the root node (or an arbitrary node in the case of a graph) and explores the neighbor nodes at the present depth level before moving on to nodes at the next depth level. BFS is commonly used in finding the shortest path in an unweighted graph and in scenarios requiring level-order traversal.

#### DFS

Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the root node (or an arbitrary node in the case of a graph) and explores as far as possible along each branch before backtracking. DFS can be implemented using a stack (either via recursion or an explicit stack). It is used in applications such as pathfinding, topological sorting, and solving puzzles like mazes.

## Sort Algorithms

### Bubble sort

Complexity: **O(n²)**

### Selection sort

Complexity: **O(n²)**

### Insertion sort

Complexity: **O(n²)**

It's a good algorithm for sorting small arrays.

### Merge sort

Complexity: **O(n log n)**

### Quick sort

Complexity: **O(n log n)** (average case), **O(n²)** (worst case)

### Counting sort

Complexity: **O(n + k)**

It's a good algorithm for sorting integers.

### Bucket sort

Complexity: **O(n + k)** (average case), where k is the number of buckets.

### Radix sort

Complexity: **O(nk)**, where n is the number of elements and k is the number of digits.

## Search Algorithms

### Sequential search

Mot basic and inefficient search algorithm. It compares each value until it finds the searched value.

### Binary search

A sorted array is required to be successful. Complexity: **O(log n)**.

### Interpolation search

A sorted array is required to be successful. It's an improved variation of a binary search. Complexity: **O(log log n)** (average case), **O(n)** (worst case).

### Shuffle

A shuffle algorithm randomizes the order of elements in an array. The Fisher-Yates shuffle is a common algorithm used for this purpose. Complexity: **O(n)**.

## Dynamic Programing

- Knapsack problem

A problem in combinatorial optimization. Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.

## Greedy Algorithm

- Minimum coin change

A problem that aims to find the minimum number of coins needed to make a particular amount of change from a given set of denominations.

## Backtracking Algorithm

- Sudoku solver

An algorithm used to solve the Sudoku puzzle by filling the empty cells with digits in such a way that every row, column, and 3x3 subgrid contains all digits from 1 to 9 exactly once.
