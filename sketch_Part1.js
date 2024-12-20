
let tree;

function setup() {
    noCanvas();
    tree = new Tree();

    for (let i = 0; i < 10; i++) {
        tree.addValue(floor(random(0, 100)));
    }

    tree.traverse();

    let result = tree.search(10);
    if (result != null) {
        console.log(result);
    }
    else {
        console.log("Not Found");
    }

    console.log(tree);
}

