mobl.provides('dleapplication');
mobl.provides('mobl.ui');
mobl.provides('mobl');

dleapplication.root = function(callback, screenCallback) {
  var root4698 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes17 = $("<span>");
  root4698.append(nodes17);
  subs__.addSub((mobl.test.testRunner)(function(_, callback) {
    var root4699 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4699); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes17;
    nodes17 = node.contents();
    oldNodes.replaceWith(nodes17);
  }));
  callback(root4698); return subs__;
  
  return subs__;
};
var result__ = test;
var result__ = mobl.test.testSuite("Node", [mobl.test.testCase("A node has value", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var root = result__;
                                                     mobl.test.assertEqual(1, root.value, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp720 = result__;
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
                                                       var tmp721 = result__;
                                                       mobl.test.assertEqual(right, root.right, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp722 = result__;
                                                         if(callback && callback.apply) callback(); return;
                                                       });
                                                     });
                                                   }), mobl.test.testCase("A node has parent", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2});
                                                     var root = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1, 'parent': root});
                                                     var child = result__;
                                                     mobl.test.assertEqual(root, child.parent, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp723 = result__;
                                                       if(callback && callback.apply) callback(); return;
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
                                                       var tmp724 = result__;
                                                       mobl.test.assertEqual(root, left.parent, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp725 = result__;
                                                         if(callback && callback.apply) callback(); return;
                                                       });
                                                     });
                                                   }), mobl.test.testCase("Insert node with value greater than root to right", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3});
                                                     var right = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2});
                                                     var root = result__;
                                                     var result__ = root.insert(right);
                                                     mobl.test.assertEqual(right, root.right, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp726 = result__;
                                                       mobl.test.assertEqual(root, right.parent, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp727 = result__;
                                                         if(callback && callback.apply) callback(); return;
                                                       });
                                                     });
                                                   }), mobl.test.testCase("Insert left node recursively", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var insertMe = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3, 'left': mobl.instantiate(bst.Node, {'value': 2}), 'right': mobl.instantiate(bst.Node, {'value': 4})});
                                                     var root = result__;
                                                     var result__ = root.insert(insertMe);
                                                     mobl.test.assertEqual(insertMe, root.left.left, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp728 = result__;
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
                                                       var tmp729 = result__;
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
                                                       var tmp730 = result__;
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
                                                       var tmp731 = result__;
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
                                                       var tmp732 = result__;
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
                                                       var tmp733 = result__;
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
                                                       var tmp734 = result__;
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
                                                       var tmp735 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Return null for nonexistent value", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var left = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3});
                                                     var right = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2, 'left': left, 'right': right});
                                                     var parent = result__;
                                                     mobl.test.assertEqual(null, parent.find(4), mobl.test.defaultMatcher, function(result__) {
                                                       var tmp736 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   })]);
var result__ = mobl.test.testSuite("Sort", [mobl.test.testCase("Sort a tree with one node", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 0});
                                                     var parent = result__;
                                                     var result__ = parent.sort();
                                                     var sorted = result__;
                                                     mobl.test.assertEqual(0, sorted.get(0), mobl.test.defaultMatcher, function(result__) {
                                                       var tmp737 = result__;
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
                                                       var tmp738 = result__;
                                                       mobl.test.assertEqual(2, sorted.get(1), mobl.test.defaultMatcher, function(result__) {
                                                         var tmp739 = result__;
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
                                                       var tmp740 = result__;
                                                       mobl.test.assertEqual(2, sorted.get(1), mobl.test.defaultMatcher, function(result__) {
                                                         var tmp741 = result__;
                                                         mobl.test.assertEqual(3, sorted.get(2), mobl.test.defaultMatcher, function(result__) {
                                                           var tmp742 = result__;
                                                           mobl.test.assertEqual(4, sorted.get(3), mobl.test.defaultMatcher, function(result__) {
                                                             var tmp743 = result__;
                                                             mobl.test.assertEqual(5, sorted.get(4), mobl.test.defaultMatcher, function(result__) {
                                                               var tmp744 = result__;
                                                               mobl.test.assertEqual(6, sorted.get(5), mobl.test.defaultMatcher, function(result__) {
                                                                 var tmp745 = result__;
                                                                 mobl.test.assertEqual(7, sorted.get(6), mobl.test.defaultMatcher, function(result__) {
                                                                   var tmp746 = result__;
                                                                   mobl.test.assertEqual(8, sorted.get(7), mobl.test.defaultMatcher, function(result__) {
                                                                     var tmp747 = result__;
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
