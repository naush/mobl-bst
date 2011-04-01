mobl.provides('bst');

bst.Node = {
  left: null,
  right: null,
  value: null,
  count: null,
  insert: function(node) {
          var __this = this;
         if(node.value < __this.value) {
           if(__this.left) {
             __this.left.insert(node);
           } else {
             __this.left = node;
           }
         } else if(node.value > __this.value) {
           if(__this.right) {
             __this.right.insert(node);
           } else {
             __this.right = node;
           }
         } else {
           __this.count = __this.count + 1;
         }
       },
  find: function(value) {
          var __this = this;
         if(value < __this.value) {
           return (__this.left && __this.left.find(value));
         } else if(value > __this.value) {
           return (__this.right && __this.right.find(value));
         } else {
           return __this;
         }
       },
  delete: function(parent, value) {
          var __this = this;
         if(value < __this.value) {
           __this.left.delete(__this, value);
         } else if(value > __this.value) {
           __this.right.delete(__this, value);
         } else {
           if(__this.left && __this.right) {
             var min = __this.right.findMin();
             
             __this.delete(parent, min.value);
             min.left = __this.left;
             min.right = __this.right;
             __this.replaceChild(parent, min);
           } else if(__this.left) {
             __this.replaceChild(parent, __this.left);
           } else if(__this.right) {
             __this.replaceChild(parent, __this.right);
           } else {
             __this.replaceChild(parent, null);
           }
         }
       },
  replaceChild: function(parent, child) {
          var __this = this;
         if(parent.left == __this) {
           parent.left = child;
         } else {
           parent.right = child;
         }
       },
  findMin: function() {
          var __this = this;
         if(__this.left) {
           return __this.left.findMin();
         } else {
           return __this;
         }
       },
  sort: function() {
          var __this = this;
         var sorted = [];
         
         if(__this.left) {
           bst.join(sorted, __this.left.sort());
         } else {
           
         }
         sorted.insert(sorted.length, __this.value);
         if(__this.right) {
           bst.join(sorted, __this.right.sort());
         } else {
           
         }
         return sorted;
       }
};
bst.join = function(front, back) {
   var __this = this;
  var coll18 = mobl.range(0, back.length);
  var length15 = coll18.length;
  for(var i23 = 0; i23 < length15; i23++) {
    var index;
    index = coll18.get(i23);
    front.push(back.get(index));
  }
};

