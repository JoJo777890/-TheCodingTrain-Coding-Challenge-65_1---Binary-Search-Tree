

function Tree() {
    this.root = null;
}

Tree.prototype.traverse = function() {
    this.root.visit();
}

Tree.prototype.addValue = function (value) {
    let node = new Node(value);

    if (this.root == null) {
        this.root = node;
    }
    else {
        this.root.addNode(node);
    }
}