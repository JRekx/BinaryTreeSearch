class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    //If the tree is empty, insert at the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;


    }

    //else find the correct spot for the new node
    var current = this.root;
    while (true) {
      if(val < current.val) {
        if ( current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }

      } else if (val > current.val) {
        if ( current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    //if empty, insert root

    if(this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else { 
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    let found = false;

    if (val = currentNode.val) return currNode;
    while (currNode && !found) {
      if (val < currNode.val) {
        currNode = currNode.left;
      } else if (val > currNode.val) {
        currNode = currNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return currNode;

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return undefined;

    if (val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    } 
      return current;
    }

  

  

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let curr = this.root;

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(curr);
    return data;


  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let curr = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(curr);
    return data;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let curr = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.val);
    }

    traverse(curr);
    return data;

    
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) { queue.push(node.left);
      }
      if (node.right) { queue.push(node.right);
     
      }

  }

  return data;
}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let nodeToRemove = this.root;
    let parent;

    while (nodeToRemove.val !== val) {
      parent = nodeToRemove;
      if (val < nodeToRemove.val) {
        nodeToRemove = nodeToRemove.left;
      } else {
        nodeToRemove = nodeToRemove.right;
      }
    
    }

    if (nodeToRemove != this.root) {
      if(nodeToRemove.left === null  && nodeToRemove.right === null) {
        if (nodeToRemove.val < parent.val) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else if (nodeToRemove.left === null && nodeToRemove.right!== null) {
        let rightParent = nodeToRemove;
        let right = nodeToRemove.right;
        if (right.left === null){
          right.left = nodeToRemove.left;
          if (rightParent.val < parent.val) {
            parent.left = right;
          } else {
            parent.right = right;
          }
        } else {
          while (right.left!== null) {
            rightParent = right;
            right = right.left;
          }
          if (parent.left === nodeToRemove) {
            parent.left.val = right.val;
          } else {
            parent.right.val = right.val;
          }
          if (right.right !== null) {
            rightParent.left = right.right;
          } else {
            rightParent.left = null;
          }
        }
    } else {
      if (parent.left === nodeToRemove) {
        if (nodeToRemove.right === null) {
          parent.left = nodeToRemove.left;
        } else {
          parent.left = nodeToRemove.right;
        }
      } else {
        if (nodeToRemove.right === null) {
          parent.right = nodeToRemove.left;
        } else {
          parent.right = nodeToRemove.right;
        }
      }
    }

  }
  return nodeToRemove;

}
  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(curr=this.root) {
    if (curr === null) return;
    return maxDepth(curr) - minDepth(curr) <= 1;

    function minDepth(curr) {
      if (curr === null) return 0;
      return 1 + Math.min(minDepth(curr.left), minDepth(curr.right));
    }

    function maxDepth(curr) {
      if (curr === null) return 0;
      return 1 + Math.max(maxDepth(curr.left), maxDepth(curr.right));

  }
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(curr = this.root) {
    if (!this.root || (!this.root.left && !this.root.right)) return;

    while(curr){
      if (curr.left && !curr.right) {
        return this.findSecondHighest(current.left);

    }
    if (curr.right &&!curr.left) {
      return this.findSecondHighest(current.right);
    }
    curr = curr.left;
  }
}


dfsInOrderIterative() {
  let cur = this.root;
  let stack = [];
  let dfs = [];
  while (stack.length > 0 || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (cur) {
      dfs.push(cur.val);
      cur = cur.right;
    }
  }
  return dfs;
}
}



module.exports = BinarySearchTree;
