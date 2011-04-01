mobl.provides('test');
mobl.provides('mobl.ui');
mobl.provides('mobl');
persistence.debug = false;
test.root = function(callback, screenCallback) {
  var root5424 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes28 = $("<span>");
  root5424.append(nodes28);
  subs__.addSub((mobl.test.testRunner)(function(_, callback) {
    var root5425 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5425); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes28;
    nodes28 = node.contents();
    oldNodes.replaceWith(nodes28);
  }));
  callback(root5424); return subs__;
  
  return subs__;
};
var result__ = mobl.test.testSuite("Node", [mobl.test.testCase("A node has value", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var root = result__;
                                                     mobl.test.assertEqual(1, root.value, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp1070 = result__;
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
                                                       var tmp1071 = result__;
                                                       mobl.test.assertEqual(right, root.right, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp1072 = result__;
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
                                                       var tmp1073 = result__;
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
                                                       var tmp1074 = result__;
                                                       mobl.test.assertEqual(root, left.parent, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp1075 = result__;
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
                                                       var tmp1076 = result__;
                                                       mobl.test.assertEqual(root, right.parent, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp1077 = result__;
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
                                                       var tmp1078 = result__;
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
                                                       var tmp1079 = result__;
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
                                                       var tmp1080 = result__;
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
                                                       var tmp1081 = result__;
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
                                                       var tmp1082 = result__;
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
                                                       var tmp1083 = result__;
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
                                                       var tmp1084 = result__;
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
                                                       var tmp1085 = result__;
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
                                                       var tmp1086 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   })]);
var result__ = mobl.test.testSuite("Deletion", [mobl.test.testCase("Delete a node with no children", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2, 'parent': null});
                                                     var parent = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var child = result__;
                                                     var result__ = parent.insert(child);
                                                     var result__ = parent.delete(1);
                                                     mobl.test.assertEqual(null, parent.left, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp1087 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Delete a node with one child", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 0});
                                                     var grandChild = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var child = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2});
                                                     var parent = result__;
                                                     var result__ = parent.insert(child);
                                                     var result__ = parent.insert(grandChild);
                                                     var result__ = parent.delete(1);
                                                     mobl.test.assertEqual(grandChild, parent.left, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp1088 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("Delete a node with both children", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 1});
                                                     var leftGrandChild = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 3});
                                                     var rightGrandChild = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 2});
                                                     var child = result__;
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 4});
                                                     var parent = result__;
                                                     var result__ = parent.insert(child);
                                                     var result__ = parent.insert(leftGrandChild);
                                                     var result__ = parent.insert(rightGrandChild);
                                                     var result__ = parent.delete(2);
                                                     mobl.test.assertEqual(rightGrandChild, parent.left, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp1089 = result__;
                                                       mobl.test.assertEqual(null, parent.right, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp1090 = result__;
                                                         mobl.test.assertEqual(null, parent.find(2), mobl.test.defaultMatcher, function(result__) {
                                                           var tmp1091 = result__;
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
                                                     var result__ = node8.delete(node4.value);
                                                     mobl.test.assertEqual(5, node8.left.value, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp1092 = result__;
                                                       mobl.test.assertEqual(null, node8.right, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp1093 = result__;
                                                         mobl.test.assertEqual(node1, node8.find(1), mobl.test.defaultMatcher, function(result__) {
                                                           var tmp1094 = result__;
                                                           mobl.test.assertEqual(node2, node8.find(2), mobl.test.defaultMatcher, function(result__) {
                                                             var tmp1095 = result__;
                                                             mobl.test.assertEqual(node3, node8.find(3), mobl.test.defaultMatcher, function(result__) {
                                                               var tmp1096 = result__;
                                                               mobl.test.assertEqual(null, node8.find(4), mobl.test.defaultMatcher, function(result__) {
                                                                 var tmp1097 = result__;
                                                                 mobl.test.assertEqual(node5, node8.find(5), mobl.test.defaultMatcher, function(result__) {
                                                                   var tmp1098 = result__;
                                                                   mobl.test.assertEqual(node6, node8.find(6), mobl.test.defaultMatcher, function(result__) {
                                                                     var tmp1099 = result__;
                                                                     mobl.test.assertEqual(node7, node8.find(7), mobl.test.defaultMatcher, function(result__) {
                                                                       var tmp1100 = result__;
                                                                       mobl.test.assertEqual(node8, node8.find(8), mobl.test.defaultMatcher, function(result__) {
                                                                         var tmp1101 = result__;
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
                                                   }), mobl.test.testCase("Delete a nonexistent node", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.instantiate(bst.Node, {'value': 0});
                                                     var node = result__;
                                                     var result__ = node.delete(1);
                                                     mobl.test.assertEqual(0, node.value, mobl.test.defaultMatcher, function(result__) {
                                                       var tmp1102 = result__;
                                                       mobl.test.assertEqual(null, node.left, mobl.test.defaultMatcher, function(result__) {
                                                         var tmp1103 = result__;
                                                         mobl.test.assertEqual(null, node.right, mobl.test.defaultMatcher, function(result__) {
                                                           var tmp1104 = result__;
                                                           if(callback && callback.apply) callback(); return;
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
                                                       var tmp1105 = result__;
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
                                                       var tmp1106 = result__;
                                                       mobl.test.assertEqual(2, sorted.get(1), mobl.test.defaultMatcher, function(result__) {
                                                         var tmp1107 = result__;
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
                                                       var tmp1108 = result__;
                                                       mobl.test.assertEqual(2, sorted.get(1), mobl.test.defaultMatcher, function(result__) {
                                                         var tmp1109 = result__;
                                                         mobl.test.assertEqual(3, sorted.get(2), mobl.test.defaultMatcher, function(result__) {
                                                           var tmp1110 = result__;
                                                           mobl.test.assertEqual(4, sorted.get(3), mobl.test.defaultMatcher, function(result__) {
                                                             var tmp1111 = result__;
                                                             mobl.test.assertEqual(5, sorted.get(4), mobl.test.defaultMatcher, function(result__) {
                                                               var tmp1112 = result__;
                                                               mobl.test.assertEqual(6, sorted.get(5), mobl.test.defaultMatcher, function(result__) {
                                                                 var tmp1113 = result__;
                                                                 mobl.test.assertEqual(7, sorted.get(6), mobl.test.defaultMatcher, function(result__) {
                                                                   var tmp1114 = result__;
                                                                   mobl.test.assertEqual(8, sorted.get(7), mobl.test.defaultMatcher, function(result__) {
                                                                     var tmp1115 = result__;
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
