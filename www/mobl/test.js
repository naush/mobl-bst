mobl.provides('mobl.test');
mobl.provides('mobl.ui');
mobl.provides('mobl.test');
mobl.test.testSuites = mobl.ref([]);
mobl.test.testCases = mobl.ref([]);
mobl.test.testLog = mobl.ref(new persistence.LocalQueryCollection([]));
mobl.test.currentCaseResult = mobl.ref(null);
mobl.test.caseSetUp = mobl.ref(null);
mobl.test.caseTearDown = mobl.ref(null);
mobl.test.space = mobl.ref(/\s/g);
mobl.test.underscores = mobl.ref("__");
mobl.test.suiteMode = mobl.ref(false);
mobl.test.currentSuite = mobl.ref("");
mobl.test.suiteButtonSymbol = mobl.ref(">>");
mobl.test.testSuite = function(suite, cases) {
   var __this = this;
  var coll133 = mobl.test.testCases.get();
  var length0 = coll133.length;
  for(var i75 = 0; i75 < length0; i75++) {
    var description;var block;
    var tmp4630 = coll133.get(i75);
    description = tmp4630._1;block = tmp4630._2;
    if(mobl.test.caseSetUp.get()) {
      mobl.test.testSuites.get().push(new mobl.Tuple(suite, description, mobl.test.caseSetUp.get()));
    } else {
      
    }
    mobl.test.testSuites.get().push(new mobl.Tuple(suite, description, block));
    if(mobl.test.caseTearDown.get()) {
      mobl.test.testSuites.get().push(new mobl.Tuple(suite, description, mobl.test.caseTearDown.get()));
    } else {
      
    }
  }
  mobl.test.testCases.get().length = 0;
  mobl.test.caseSetUp.set(null);
  mobl.test.caseTearDown.set(null);
};

mobl.test.testCase = function(description, tests) {
   var __this = this;
  mobl.test.testCases.get().push(new mobl.Tuple(description, tests));
};

mobl.test.setUp = function(block) {
   var __this = this;
  mobl.test.caseSetUp.set(block);
};

mobl.test.tearDown = function(block) {
   var __this = this;
  mobl.test.caseTearDown.set(block);
};

mobl.test.defaultMatcher = function(expected, actual) {
   var __this = this;
  return expected == actual;
};

mobl.test.assertEqual = function(expected, actual, matcher, callback) {
  var __this = this;
  function after9(result__) {
    var tmp4631 = result__;
    var result__ = tmp4631;
    if(result__) {
      {
        var result__ = mobl.test.currentCaseResult.get().results.add(mobl.instantiate(mobl.test.type.TestResult, {'success': true}));
        if(callback && callback.apply) callback(); return;
      }
    } else {
      {
        var result__ = mobl.test.currentCaseResult.get().results.add(mobl.instantiate(mobl.test.type.TestResult, {'success': false, 'message': "Expected: " + expected + " Got: " + actual}));
        if(callback && callback.apply) callback(); return;
      }
    }
  }
  var result__ = matcher(expected, actual, after9);if(result__ !== undefined) after9(result__);
};

mobl.test.assert = function(value) {
   var __this = this;
  mobl.test.currentCaseResult.get().results.add(mobl.instantiate(mobl.test.type.TestResult, {'success': value}));
};

mobl.test.click = function(er, callback) {
  var __this = this;
  function after10(result__) {
    var tmp4632 = result__;
    if(callback && callback.apply) callback(); return;
  }
  var result__ = er(null, after10);if(result__ !== undefined) after10(result__);
};

mobl.test.find = function(property, value, collection, hollow, callback) {
  var __this = this;
  collection.filter(property, "=", value).one(function(result__) {
    var tmp4633 = result__;
    var result__ = tmp4633;
    var item = result__;
    var result__ = hollow != null && item == null;
    if(result__) {
      var result__ = hollow;
      item = result__;
      var result__ = collection.add(item);
      var result__ = item;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    } else {
      {
        var result__ = item;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      }
    }
  });
};

mobl.test.logTestSuite = function(suite, kase, callback) {
  var __this = this;
  mobl.test.find("description", suite, mobl.test.testLog.get(), mobl.instantiate(mobl.test.type.TestSuiteResult, {'description': suite, 'cases': new persistence.LocalQueryCollection([])}), function(result__) {
    var tmp4634 = result__;
    var result__ = tmp4634;
    var tsr = result__;
    mobl.test.find("description", kase, tsr.cases, mobl.instantiate(mobl.test.type.TestCaseResult, {'description': kase, 'results': new persistence.LocalQueryCollection([]), 'elapsed': 0}), function(result__) {
      var tmp4635 = result__;
      var result__ = tmp4635;
      mobl.test.currentCaseResult.set(result__);
      if(callback && callback.apply) callback(); return;
    });
  });
};

mobl.test.runAllTests = function(callback) {
  var __this = this;
  mobl.test.testLog.get().destroyAll(function(result__) {
    var tmp4636 = result__;
    var result__ = mobl.test.testSuites.get();
    mobl.test.testSuites.get().list(function(coll134) {
      coll134 = coll134.reverse();
      function processOne115() {
        var suite;var kase;var runTests;
        var tmp4639 = coll134.pop();
        suite = tmp4639._1;kase = tmp4639._2;runTests = tmp4639._3;
        mobl.test.logTestSuite(suite, kase, function(result__) {
          var tmp4637 = result__;
          var result__ = mobl.now().getTime();
          var start = result__;
          function after11(result__) {
            var tmp4638 = result__;
            var result__ = mobl.test.currentCaseResult.get().elapsed + mobl.now().getTime() - start;
            mobl.test.currentCaseResult.get().elapsed = result__;
            
            if(coll134.length > 0) processOne115(); else rest115();
            
          }
          var result__ = runTests(null, after11);if(result__ !== undefined) after11(result__);
        });
      }
      function rest115() {
        if(callback && callback.apply) callback(); return;
      }
      if(coll134.length > 0) processOne115(); else rest115();
    });
    
  });
};

mobl.test.runSuite = function(name, callback) {
  var __this = this;
  mobl.test.testLog.get().destroyAll(function(result__) {
    var tmp4640 = result__;
    var result__ = mobl.test.testSuites.get();
    mobl.test.testSuites.get().list(function(coll135) {
      coll135 = coll135.reverse();
      function processOne116() {
        var suite;var kase;var runTests;
        var tmp4643 = coll135.pop();
        suite = tmp4643._1;kase = tmp4643._2;runTests = tmp4643._3;
        var result__ = suite == name;
        if(result__) {
          mobl.test.logTestSuite(suite, kase, function(result__) {
            var tmp4641 = result__;
            var result__ = mobl.now().getTime();
            var start = result__;
            function after12(result__) {
              var tmp4642 = result__;
              var result__ = mobl.now().getTime() - start;
              mobl.test.currentCaseResult.get().elapsed = result__;
              
              if(coll135.length > 0) processOne116(); else rest116();
              
            }
            var result__ = runTests(null, after12);if(result__ !== undefined) after12(result__);
          });
        } else {
          {
            
            if(coll135.length > 0) processOne116(); else rest116();
            
          }
        }
      }
      function rest116() {
        if(callback && callback.apply) callback(); return;
      }
      if(coll135.length > 0) processOne116(); else rest116();
    });
    
  });
};


mobl.test.showTestResults = function(results, elements, callback) {
  var root1759 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node188 = mobl.loadingSpan();
  root1759.append(node188);
  var list73;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList73 = function() {
    var subs__ = listSubs__;
    list73 = results.get();
    list73.list(function(results1132) {
      node188.empty();
      for(var i76 = 0; i76 < results1132.length; i76++) {
        (function() {
          var iternode73 = $("<span>");
          node188.append(iternode73);
          var result;
          result = mobl.ref(mobl.ref(results1132), i76);
          
          var tmp4610 = mobl.ref(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
          subs__.addSub(mobl.ref(result, 'success').addEventListener('change', function() {
            tmp4610.set(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
          }));
          subs__.addSub(mobl.ref(mobl.test.style.successItemStyle).addEventListener('change', function() {
            tmp4610.set(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
          }));
          subs__.addSub(mobl.ref(mobl.test.style.failureItemStyle).addEventListener('change', function() {
            tmp4610.set(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
          }));
          
          
          var tmp4613 = mobl.ref(false);
          
          
          var tmp4612 = mobl.ref(null);
          
          
          var tmp4611 = mobl.ref(null);
          
          var nodes1506 = $("<span>");
          iternode73.append(nodes1506);
          subs__.addSub((mobl.ui.generic.item)(tmp4610, mobl.ref(mobl.ui.generic.itemPushedStyle), tmp4611, tmp4612, tmp4613, function(_, callback) {
            var root1760 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var node189 = $("<span>");
            root1760.append(node189);
            var condSubs64 = new mobl.CompSubscription();
            subs__.addSub(condSubs64);
            var oldValue64;
            var renderCond64 = function() {
              var value96 = result.get().success;
              if(oldValue64 === value96) return;
              oldValue64 = value96;
              var subs__ = condSubs64;
              subs__.unsubscribe();
              node189.empty();
              if(value96) {
                
                var tmp4600 = mobl.ref("[OK] ");
                
                
                var tmp4602 = mobl.ref(null);
                
                
                var tmp4601 = mobl.ref(null);
                
                var nodes1507 = $("<span>");
                node189.append(nodes1507);
                subs__.addSub((mobl.label)(tmp4600, tmp4601, tmp4602, function(_, callback) {
                  var root1761 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1761); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1507;
                  nodes1507 = node.contents();
                  oldNodes.replaceWith(nodes1507);
                }));
                
                
              } else {
                
                var tmp4603 = mobl.ref("[FAIL] ");
                
                
                var tmp4605 = mobl.ref(null);
                
                
                var tmp4604 = mobl.ref(null);
                
                var nodes1508 = $("<span>");
                node189.append(nodes1508);
                subs__.addSub((mobl.label)(tmp4603, tmp4604, tmp4605, function(_, callback) {
                  var root1762 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1762); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1508;
                  nodes1508 = node.contents();
                  oldNodes.replaceWith(nodes1508);
                }));
                
                var node190 = $("<span>");
                node189.append(node190);
                var condSubs65 = new mobl.CompSubscription();
                subs__.addSub(condSubs65);
                var oldValue65;
                var renderCond65 = function() {
                  var value97 = result.get().message;
                  if(oldValue65 === value97) return;
                  oldValue65 = value97;
                  var subs__ = condSubs65;
                  subs__.unsubscribe();
                  node190.empty();
                  if(value97) {
                    
                    var tmp4609 = mobl.ref(null);
                    
                    
                    var tmp4608 = mobl.ref(null);
                    
                    var nodes1509 = $("<span>");
                    node190.append(nodes1509);
                    subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.test.style.descriptionStyle), tmp4608, tmp4609, function(_, callback) {
                      var root1763 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      
                      var tmp4607 = mobl.ref(null);
                      
                      
                      var tmp4606 = mobl.ref(null);
                      
                      var nodes1510 = $("<span>");
                      root1763.append(nodes1510);
                      subs__.addSub((mobl.label)(mobl.ref(result, 'message'), tmp4606, tmp4607, function(_, callback) {
                        var root1764 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root1764); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1510;
                        nodes1510 = node.contents();
                        oldNodes.replaceWith(nodes1510);
                      }));
                      callback(root1763); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1509;
                      nodes1509 = node.contents();
                      oldNodes.replaceWith(nodes1509);
                    }));
                    
                    
                  } else {
                    
                  }
                };
                renderCond65();
                subs__.addSub(mobl.ref(result, 'message').addEventListener('change', function() {
                  renderCond65();
                }));
                
                
                
                
              }
            };
            renderCond64();
            subs__.addSub(mobl.ref(result, 'success').addEventListener('change', function() {
              renderCond64();
            }));
            
            callback(root1760); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes1506;
            nodes1506 = node.contents();
            oldNodes.replaceWith(nodes1506);
          }));
          
          var oldNodes = iternode73;
          iternode73 = iternode73.contents();
          oldNodes.replaceWith(iternode73);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list73.addEventListener('change', function() { listSubs__.unsubscribe(); renderList73(true); }));
      subs__.addSub(results.addEventListener('change', function() { listSubs__.unsubscribe(); renderList73(true); }));
    });
  };
  renderList73();
  
  callback(root1759); return subs__;
  
  return subs__;
};

mobl.test.testRunner = function(elements, callback) {
  var root1765 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp4616 = mobl.ref("Specifications");
  
  
  var tmp4617 = mobl.ref(null);
  
  var nodes1511 = $("<span>");
  root1765.append(nodes1511);
  subs__.addSub((mobl.ui.generic.header)(tmp4616, tmp4617, function(_, callback) {
    var root1766 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp4615 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.test.suiteMode.get();
                         if(result__) {
                           mobl.test.runSuite(mobl.test.currentSuite.get(), function(result__) {
                             var tmp4644 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         } else {
                           {
                             mobl.test.runAllTests(function(result__) {
                               var tmp4645 = result__;
                               if(callback && callback.apply) callback(); return;
                             });
                           }
                         }
                       });
    
    
    var tmp4614 = mobl.ref("Run");
    
    var nodes1512 = $("<span>");
    root1766.append(nodes1512);
    subs__.addSub((mobl.ui.generic.button)(tmp4614, mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp4615, function(_, callback) {
      var root1767 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1767); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1512;
      nodes1512 = node.contents();
      oldNodes.replaceWith(nodes1512);
    }));
    callback(root1766); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1511;
    nodes1511 = node.contents();
    oldNodes.replaceWith(nodes1511);
  }));
  var nodes1513 = $("<span>");
  root1765.append(nodes1513);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root1768 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node191 = mobl.loadingSpan();
    root1768.append(node191);
    var list74;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList74 = function() {
      var subs__ = listSubs__;
      list74 = mobl.test.testLog.get();
      list74.list(function(results1133) {
        node191.empty();
        for(var i77 = 0; i77 < results1133.length; i77++) {
          (function() {
            var iternode74 = $("<span>");
            node191.append(iternode74);
            var suite;
            suite = mobl.ref(mobl.ref(results1133), i77);
            
            var cases = mobl.ref(suite.get().cases);
            cases.get().count(function(result__) {
              var count = mobl.ref(result__);
              
              var suite_id = mobl.ref(suite.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
              
              var tmp4621 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = mobl.$("#" + suite_id.get()).slideToggle(null);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp4623 = mobl.ref(false);
              
              
              var tmp4622 = mobl.ref(null);
              
              var nodes1514 = $("<span>");
              iternode74.append(nodes1514);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.test.style.suiteItemStyle), mobl.ref(mobl.test.style.suiteItemStyle), tmp4621, tmp4622, tmp4623, function(_, callback) {
                var root1769 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp4619 = mobl.ref(null);
                
                
                var tmp4618 = mobl.ref(null);
                
                var nodes1515 = $("<span>");
                root1769.append(nodes1515);
                subs__.addSub((mobl.label)(mobl.ref(suite, 'description'), tmp4618, tmp4619, function(_, callback) {
                  var root1770 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1770); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1515;
                  nodes1515 = node.contents();
                  oldNodes.replaceWith(nodes1515);
                }));
                
                var tmp4620 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = !mobl.test.suiteMode.get();
                                     mobl.test.suiteMode.set(result__);
                                     var result__ = mobl.test.suiteMode.get();
                                     if(result__) {
                                       var result__ = "<<";
                                       mobl.test.suiteButtonSymbol.set(result__);
                                       var result__ = suite.get().description;
                                       mobl.test.currentSuite.set(result__);
                                       mobl.test.runSuite(suite.get().description, function(result__) {
                                         var tmp4646 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     } else {
                                       {
                                         var result__ = ">>";
                                         mobl.test.suiteButtonSymbol.set(result__);
                                         mobl.test.runAllTests(function(result__) {
                                           var tmp4647 = result__;
                                           if(callback && callback.apply) callback(); return;
                                         });
                                       }
                                     }
                                   });
                
                var nodes1516 = $("<span>");
                root1769.append(nodes1516);
                subs__.addSub((mobl.label)(mobl.test.suiteButtonSymbol, mobl.ref(mobl.test.style.suiteButtonStyle), tmp4620, function(_, callback) {
                  var root1771 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1771); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1516;
                  nodes1516 = node.contents();
                  oldNodes.replaceWith(nodes1516);
                }));
                callback(root1769); return subs__;
                
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1514;
                nodes1514 = node.contents();
                oldNodes.replaceWith(nodes1514);
              }));
              
              var node192 = $("<div>");
              
              var ref66 = suite_id;
              if(ref66.get() !== null) {
                node192.attr('id', ref66.get());
                subs__.addSub(ref66.addEventListener('change', function(_, ref, val) {
                  node192.attr('id', val);
                }));
                
              }
              subs__.addSub(ref66.rebind());
              
              
              var node193 = mobl.loadingSpan();
              node192.append(node193);
              var list75;
              var listSubs__ = new mobl.CompSubscription();
              subs__.addSub(listSubs__);
              var renderList75 = function() {
                var subs__ = listSubs__;
                list75 = cases.get();
                list75.list(function(results1134) {
                  node193.empty();
                  for(var i78 = 0; i78 < results1134.length; i78++) {
                    (function() {
                      var iternode75 = $("<span>");
                      node193.append(iternode75);
                      var kase;
                      kase = mobl.ref(mobl.ref(results1134), i78);
                      
                      var kase_id = mobl.ref(kase.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
                      
                      var tmp4627 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = mobl.$("#" + suite_id.get() + "_" + kase_id.get()).slideToggle(null);
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp4629 = mobl.ref(false);
                      
                      
                      var tmp4628 = mobl.ref(null);
                      
                      var nodes1517 = $("<span>");
                      iternode75.append(nodes1517);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.test.style.caseItemStyle), mobl.ref(mobl.test.style.caseItemStyle), tmp4627, tmp4628, tmp4629, function(_, callback) {
                        var root1772 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        
                        var tmp4624 = mobl.ref(kase.get().description + " (" + kase.get().elapsed + " ms)");
                        subs__.addSub(mobl.ref(kase, 'description').addEventListener('change', function() {
                          tmp4624.set(kase.get().description + " (" + kase.get().elapsed + " ms)");
                        }));
                        subs__.addSub(mobl.ref(kase, 'elapsed').addEventListener('change', function() {
                          tmp4624.set(kase.get().description + " (" + kase.get().elapsed + " ms)");
                        }));
                        
                        
                        var tmp4626 = mobl.ref(null);
                        
                        
                        var tmp4625 = mobl.ref(null);
                        
                        var nodes1518 = $("<span>");
                        root1772.append(nodes1518);
                        subs__.addSub((mobl.label)(tmp4624, tmp4625, tmp4626, function(_, callback) {
                          var root1773 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root1773); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes1518;
                          nodes1518 = node.contents();
                          oldNodes.replaceWith(nodes1518);
                        }));
                        callback(root1772); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1517;
                        nodes1517 = node.contents();
                        oldNodes.replaceWith(nodes1517);
                      }));
                      
                      var node194 = $("<div>");
                      
                      var ref65 = mobl.ref(suite_id.get() + "_" + kase_id.get());
                      if(ref65.get() !== null) {
                        node194.attr('id', ref65.get());
                        subs__.addSub(ref65.addEventListener('change', function(_, ref, val) {
                          node194.attr('id', val);
                        }));
                        subs__.addSub(suite_id.addEventListener('change', function() {
                          node194.attr('id', suite_id.get() + "_" + kase_id.get());
                        }));
                        subs__.addSub(kase_id.addEventListener('change', function() {
                          node194.attr('id', suite_id.get() + "_" + kase_id.get());
                        }));
                        
                      }
                      subs__.addSub(ref65.rebind());
                      
                      var nodes1519 = $("<span>");
                      node194.append(nodes1519);
                      subs__.addSub((mobl.test.showTestResults)(mobl.ref(kase, 'results'), function(_, callback) {
                        var root1774 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root1774); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1519;
                        nodes1519 = node.contents();
                        oldNodes.replaceWith(nodes1519);
                      }));
                      iternode75.append(node194);
                      
                      var oldNodes = iternode75;
                      iternode75 = iternode75.contents();
                      oldNodes.replaceWith(iternode75);
                      
                      
                      
                      
                    }());
                  }
                  mobl.delayedUpdateScrollers();
                  subs__.addSub(list75.addEventListener('change', function() { listSubs__.unsubscribe(); renderList75(true); }));
                  subs__.addSub(cases.addEventListener('change', function() { listSubs__.unsubscribe(); renderList75(true); }));
                });
              };
              renderList75();
              
              iternode74.append(node192);
              
              var oldNodes = iternode74;
              iternode74 = iternode74.contents();
              oldNodes.replaceWith(iternode74);
              
              
              
              
            });
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list74.addEventListener('change', function() { listSubs__.unsubscribe(); renderList74(true); }));
        subs__.addSub(mobl.test.testLog.addEventListener('change', function() { listSubs__.unsubscribe(); renderList74(true); }));
      });
    };
    renderList74();
    
    callback(root1768); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1513;
    nodes1513 = node.contents();
    oldNodes.replaceWith(nodes1513);
  }));
  mobl.test.runAllTests(function(result__) {
    var tmp4648 = result__;
    
  });
  callback(root1765); return subs__;
  
  
  
  return subs__;
};
