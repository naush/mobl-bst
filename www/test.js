mobl.provides('test');
mobl.provides('mobl.ui');
mobl.provides('mobl');
persistence.debug = false;
test.root = function(callback, screenCallback) {
  var root15136 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes113 = $("<span>");
  root15136.append(nodes113);
  subs__.addSub((mobl.test.testRunner)(function(_, callback) {
    var root15137 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15137); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes113;
    nodes113 = node.contents();
    oldNodes.replaceWith(nodes113);
  }));
  callback(root15136); return subs__;
  
  return subs__;
};
var result__ = mobl.test.testSuite("Node", [mobl.test.testCase("A node has value", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var root = result__;
                                                     mobl.test.assertEqual(1, root.value, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2629 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("A node has left and right children", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var left = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3});
                                                     var right = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2, 'left': left, 'right': right});
                                                     var root = result__;
                                                     mobl.test.assertEqual(left, root.left, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2630 = result__;
                                                       mobl.test.assertEqual(right, root.right, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp2631 = result__;
                                                         if(callback && callback.apply) callback(); return;
                                                       });
                                                     });
                                                   })]);
var result__ = mobl.test.testSuite("Insertion", [mobl.test.testCase("Insert node with value less than root to left", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var left = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2});
                                                     var root = result__;
                                                     var result__ = root.insert(left);
                                                     mobl.test.assertEqual(left, root.left, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2632 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Insert node with value greater than root to right", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3});
                                                     var right = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2});
                                                     var root = result__;
                                                     var result__ = root.insert(right);
                                                     mobl.test.assertEqual(right, root.right, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2633 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Insert left node recursively", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var insertMe = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3, 'left': mobl.instantiate(bst.Node, {'value': 2}), 'right': mobl.instantiate(bst.Node, {'value': 4})});
                                                     var root = result__;
                                                     var result__ = root.insert(insertMe);
                                                     mobl.test.assertEqual(insertMe, root.left.left, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2634 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Insert right node recursively", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 5});
                                                     var insertMe = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3, 'left': mobl.instantiate(bst.Node, {'value': 2}), 'right': mobl.instantiate(bst.Node, {'value': 4})});
                                                     var root = result__;
                                                     var result__ = root.insert(insertMe);
                                                     mobl.test.assertEqual(insertMe, root.right.right, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2635 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Insert node with the same value increments count", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 5});
                                                     var insertMe = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 5});
                                                     var root = result__;
                                                     var result__ = root.insert(insertMe);
                                                     mobl.test.assertEqual(1, root.count, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2636 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   })]);
var result__ = mobl.test.testSuite("Find", [mobl.test.testCase("Return parent if value is found on parent", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = 1;
                                                     var value = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': value});
                                                     var parent = result__;
                                                     mobl.test.assertEqual(parent, parent.find(value), mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2637 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Return left node if value is found on left node", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = 1;
                                                     var value = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': value});
                                                     var left = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2, 'left': left});
                                                     var parent = result__;
                                                     mobl.test.assertEqual(left, parent.find(value), mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2638 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Return right node if value is found on right node", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = 2;
                                                     var value = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': value});
                                                     var right = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1, 'right': right});
                                                     var parent = result__;
                                                     mobl.test.assertEqual(right, parent.find(value), mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2639 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Find left recursively", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = 1;
                                                     var value = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': value});
                                                     var leftLeft = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2});
                                                     var left = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3, 'left': left});
                                                     var parent = result__;
                                                     var result__ = parent.insert(leftLeft);
                                                     mobl.test.assertEqual(leftLeft, parent.find(value), mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2640 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Find right recursively", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = 3;
                                                     var value = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': value});
                                                     var right_right = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2});
                                                     var right = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1, 'right': right});
                                                     var parent = result__;
                                                     var result__ = parent.insert(right_right);
                                                     mobl.test.assertEqual(right_right, parent.find(value), mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2641 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Return null for non-existant value", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var left = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3});
                                                     var right = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2, 'left': left, 'right': right});
                                                     var parent = result__;
                                                     mobl.test.assertEqual(null, parent.find(4), mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2642 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   })]);
var result__ = mobl.test.testSuite("Deletion", [mobl.test.testCase("Delete a node with no children", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var child = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2, 'left': child});
                                                     var parent = result__;
                                                     var result__ = parent.delete(null, 1);
                                                     mobl.test.assertEqual(null, parent.left, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2643 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Delete a node with one child", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 0});
                                                     var grandChild = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1, 'left': grandChild});
                                                     var child = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2, 'left': child});
                                                     var parent = result__;
                                                     var result__ = parent.delete(null, 1);
                                                     mobl.test.assertEqual(grandChild, parent.left, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2644 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Delete a node with both children", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var leftGrandChild = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3});
                                                     var rightGrandChild = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2, 'left': leftGrandChild, 'right': rightGrandChild});
                                                     var child = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 4, 'left': child});
                                                     var parent = result__;
                                                     var result__ = parent.delete(null, 2);
                                                     mobl.test.assertEqual(rightGrandChild, parent.left, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2645 = result__;
                                                       mobl.test.assertEqual(null, parent.right, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp2646 = result__;
                                                         mobl.test.assertEqual(null, parent.find(2), mobl.test.defaultMatcher, function(result__) {
                                                           var tmp2647 = result__;
                                                           if(callback && callback.apply) callback(); return;
                                                         });
                                                       });
                                                     });
                                                   }), mobl.test.testCase("Delete a node with left and right subtrees", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var node1 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2});
                                                     var node2 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3});
                                                     var node3 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 4});
                                                     var node4 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 5});
                                                     var node5 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 6});
                                                     var node6 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 7});
                                                     var node7 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 8});
                                                     var node8 = result__;
                                                     var result__ = node2.insert(node1);
                                                     var result__ = node2.insert(node3);
                                                     var result__ = node6.insert(node5);
                                                     var result__ = node6.insert(node7);
                                                     var result__ = node4.insert(node2);
                                                     var result__ = node4.insert(node6);
                                                     var result__ = node8.insert(node4);
                                                     var result__ = node8.delete(null, node4.value);
                                                     mobl.test.assertEqual(5, node8.left.value, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2648 = result__;
                                                       mobl.test.assertEqual(null, node8.right, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp2649 = result__;
                                                         mobl.test.assertEqual(node1, node8.find(1), mobl.test.defaultMatcher, function(result__) {
                                                           var tmp2650 = result__;
                                                           mobl.test.assertEqual(node2, node8.find(2), mobl.test.defaultMatcher, function(result__) {
                                                             var tmp2651 = result__;
                                                             mobl.test.assertEqual(node3, node8.find(3), mobl.test.defaultMatcher, function(result__) {
                                                               var tmp2652 = result__;
                                                               mobl.test.assertEqual(null, node8.find(4), mobl.test.defaultMatcher, function(result__) {
                                                                 var tmp2653 = result__;
                                                                 mobl.test.assertEqual(node5, node8.find(5), mobl.test.defaultMatcher, function(result__) {
                                                                   var tmp2654 = result__;
                                                                   mobl.test.assertEqual(node6, node8.find(6), mobl.test.defaultMatcher, function(result__) {
                                                                     var tmp2655 = result__;
                                                                     mobl.test.assertEqual(node7, node8.find(7), mobl.test.defaultMatcher, function(result__) {
                                                                       var tmp2656 = result__;
                                                                       mobl.test.assertEqual(node8, node8.find(8), mobl.test.defaultMatcher, function(result__) {
                                                                         var tmp2657 = result__;
                                                                         if(callback && callback.apply) callback(); return;
                                                                       });
                                                                     });
                                                                   });
                                                                 });
                                                               });
                                                             });
                                                           });
                                                         });
                                                       });
                                                     });
                                                   })]);
var result__ = mobl.test.testSuite("Sort", [mobl.test.testCase("Sort a tree with one node", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 0});
                                                     var parent = result__;
                                                     var result__ = parent.sort();
                                                     var sorted = result__;
                                                     mobl.test.assertEqual(0, sorted.get(0), mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2658 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Sort a tree with two nodes", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var node1 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2});
                                                     var node2 = result__;
                                                     var result__ = node2.insert(node1);
                                                     var result__ = node2.sort();
                                                     var sorted = result__;
                                                     mobl.test.assertEqual(1, sorted.get(0), mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2659 = result__;
                                                       mobl.test.assertEqual(2, sorted.get(1), mobl.test.defaultMatcher, function(result__) {
                                                         var tmp2660 = result__;
                                                         if(callback && callback.apply) callback(); return;
                                                       });
                                                     });
                                                   }), mobl.test.testCase("Sort a tree with eight nodes", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var node1 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2});
                                                     var node2 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3});
                                                     var node3 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 4});
                                                     var node4 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 5});
                                                     var node5 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 6});
                                                     var node6 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 7});
                                                     var node7 = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 8});
                                                     var node8 = result__;
                                                     var result__ = node2.insert(node1);
                                                     var result__ = node2.insert(node3);
                                                     var result__ = node6.insert(node5);
                                                     var result__ = node6.insert(node7);
                                                     var result__ = node4.insert(node2);
                                                     var result__ = node4.insert(node6);
                                                     var result__ = node8.insert(node4);
                                                     var result__ = node8.sort();
                                                     var sorted = result__;
                                                     mobl.test.assertEqual(1, sorted.get(0), mobl.test.defaultMatcher, function(result__) {
                                                       var tmp2661 = result__;
                                                       mobl.test.assertEqual(2, sorted.get(1), mobl.test.defaultMatcher, function(result__) {
                                                         var tmp2662 = result__;
                                                         mobl.test.assertEqual(3, sorted.get(2), mobl.test.defaultMatcher, function(result__) {
                                                           var tmp2663 = result__;
                                                           mobl.test.assertEqual(4, sorted.get(3), mobl.test.defaultMatcher, function(result__) {
                                                             var tmp2664 = result__;
                                                             mobl.test.assertEqual(5, sorted.get(4), mobl.test.defaultMatcher, function(result__) {
                                                               var tmp2665 = result__;
                                                               mobl.test.assertEqual(6, sorted.get(5), mobl.test.defaultMatcher, function(result__) {
                                                                 var tmp2666 = result__;
                                                                 mobl.test.assertEqual(7, sorted.get(6), mobl.test.defaultMatcher, function(result__) {
                                                                   var tmp2667 = result__;
                                                                   mobl.test.assertEqual(8, sorted.get(7), mobl.test.defaultMatcher, function(result__) {
                                                                     var tmp2668 = result__;
                                                                     if(callback && callback.apply) callback(); return;
                                                                   });
                                                                 });
                                                               });
                                                             });
                                                           });
                                                         });
                                                       });
                                                     });
                                                   })]);
