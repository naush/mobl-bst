mobl.provides('node');

node.Node = {
  parent: null,
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
             node.parent = __this;
             __this.left = node;
           }
         } else if(node.value > __this.value) {
           if(__this.right) {
             __this.right.insert(node);
           } else {
             node.parent = __this;
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
  delete: function(value) {
          var __this = this;
         if(value < __this.value) {
           __this.left && __this.left.delete(value);
         } else if(value > __this.value) {
           __this.right && __this.right.delete(value);
         } else {
           if(__this.left && __this.right) {
             var min = __this.right.findMin();
             
             __this.delete(min.value);
             __this.replace(min);
           } else if(__this.left) {
             __this.replace(__this.left);
           } else if(__this.right) {
             __this.replace(__this.right);
           } else {
             __this.replace(null);
           }
         }
       },
  replace: function(replacement) {
          var __this = this;
         if(replacement) {
           replacement.left = __this.left;
           replacement.right = __this.right;
         } else {
           
         }
         if(__this.parent.left == __this) {
           __this.parent.left = replacement;
         } else {
           __this.parent.right = replacement;
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
           node.join(sorted, __this.left.sort());
         } else {
           
         }
         sorted.insert(sorted.length, __this.value);
         if(__this.right) {
           node.join(sorted, __this.right.sort());
         } else {
           
         }
         return sorted;
       }
};
node.join = function(front, back) {
   var __this = this;
  var coll35 = mobl.range(0, back.length);
  var length32 = coll35.length;
  for(var i32 = 0; i32 < length32; i32++) {
    var index;
    index = coll35.get(i32);
    front.push(back.get(index));
  }
};

