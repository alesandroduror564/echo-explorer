/*
Filename: ComplexProgram.js

Description: This complex and elaborate JavaScript program demonstrates a custom implementation of a priority queue data structure using heap and linked list. It includes various operations like insertion, deletion, and traversal of elements based on their priority. Additionally, it showcases advanced concepts such as object-oriented programming, recursion, and dynamic memory allocation.

Disclaimer: This code is for illustrative purposes only and may not be optimized for production use.

Author: [Your Name]
Date: [Current Date]
*/

// Priority Queue using Heap and Linked List
class PriorityQueue {
  constructor() {
    this.heap = [];
    this.head = null;
    this.count = 0;
  }
  
  // Node definition for linked list
  class Node {
    constructor(value, priority) {
      this.value = value;
      this.priority = priority;
      this.next = null;
    }
  }
  
  // Insert an element with specified priority into the queue
  insert(value, priority) {
    const newNode = new Node(value, priority);
    this.count++;
    
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      if (current.priority < priority) {
        newNode.next = current;
        this.head = newNode;
      } else {
        let prev = null;
        while (current && current.priority >= priority) {
          prev = current;
          current = current.next;
        }
        newNode.next = current;
        prev.next = newNode;
      }
    }
    
    this.heap.push(newNode);
    this.heapifyUp(this.count - 1);
  }
  
  // Remove and return the element with highest priority from the queue
  remove() {
    if (this.count === 0) {
      return null;
    }
    
    const nodeToRemove = this.heap[0];
    
    if (this.count === 1) {
      this.heap = [];
      this.head = null;
    } else {
      this.heap[0] = this.heap.pop();
      this.count--;
      this.heapifyDown(0);
      
      let current = this.head;
      if (current === nodeToRemove) {
        this.head = current.next;
      } else {
        let prev = null;
        while (current && current !== nodeToRemove) {
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
      }
    }
    
    return nodeToRemove.value;
  }
  
  // Heapify Up operation to maintain the heap property
  heapifyUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[parentIndex].priority < this.heap[index].priority) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }
  
  // Heapify Down operation to maintain the heap property
  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largestChildIndex = index;
    
    if (leftChildIndex < this.count && this.heap[leftChildIndex].priority > this.heap[largestChildIndex].priority) {
      largestChildIndex = leftChildIndex;
    }
    
    if (rightChildIndex < this.count && this.heap[rightChildIndex].priority > this.heap[largestChildIndex].priority) {
      largestChildIndex = rightChildIndex;
    }
    
    if (largestChildIndex !== index) {
      this.swap(index, largestChildIndex);
      this.heapifyDown(largestChildIndex);
    }
  }
  
  // Utility function to swap elements in the heap
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  
  // Traverse the queue and execute a callback function on each element
  traverse(callback) {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }
}

// Usage
const priorityQueue = new PriorityQueue();
priorityQueue.insert("Task 1", 3);
priorityQueue.insert("Task 2", 1);
priorityQueue.insert("Task 3", 2);

console.log("Queue elements:");
priorityQueue.traverse((task) => console.log(task));

console.log("Removing first task from the queue: ", priorityQueue.remove());
console.log("Queue elements after removal:");
priorityQueue.traverse((task) => console.log(task));

// Additional functionality can be added based on requirements