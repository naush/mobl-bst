mobl.provides('mobl.ui.generic');
mobl.provides('mobl.ui');
mobl.ui.generic.loadingStyle = 'mobl__ui__generic__loadingStyle';

mobl.ui.generic.whenLoaded = function(value, elements, callback) {
  var root5 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node4 = $("<span>");
  root5.append(node4);
  var condSubs0 = new mobl.CompSubscription();
  subs__.addSub(condSubs0);
  var oldValue0;
  var renderCond0 = function() {
    var value12 = value.get();
    if(oldValue0 === value12) return;
    oldValue0 = value12;
    var subs__ = condSubs0;
    subs__.unsubscribe();
    node4.empty();
    if(value12) {
      var nodes2 = $("<span>");
      node4.append(nodes2);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl2();
      }));
      
      function renderControl2() {
        subs__.addSub((elements)(function(elements, callback) {
          var root6 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2;
          nodes2 = node.contents();
          oldNodes.replaceWith(nodes2);
        }));
      }
      renderControl2();
      
      
    } else {
      
      var tmp8 = mobl.ref(null);
      
      
      var tmp7 = mobl.ref(null);
      
      var nodes3 = $("<span>");
      node4.append(nodes3);
      subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.loadingStyle), tmp7, tmp8, function(_, callback) {
        var root7 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root7.append("Loading...");
        
        var tmp1 = mobl.ref("middle");
        
        
        var tmp0 = mobl.ref("mobl/ui/generic/loading-large.gif");
        
        
        var tmp6 = mobl.ref(null);
        
        
        var tmp5 = mobl.ref(null);
        
        
        var tmp4 = mobl.ref(null);
        
        
        var tmp3 = mobl.ref(null);
        
        
        var tmp2 = mobl.ref(null);
        
        var nodes4 = $("<span>");
        root7.append(nodes4);
        subs__.addSub((mobl.ui.generic.image)(tmp0, tmp2, tmp3, tmp4, tmp5, tmp1, tmp6, function(_, callback) {
          var root8 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4;
          nodes4 = node.contents();
          oldNodes.replaceWith(nodes4);
        }));
        callback(root7); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes3;
        nodes3 = node.contents();
        oldNodes.replaceWith(nodes3);
      }));
      
      
    }
  };
  renderCond0();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond0();
  }));
  
  callback(root5); return subs__;
  
  return subs__;
};
mobl.ui.generic.headerStyle = 'mobl__ui__generic__headerStyle';
mobl.ui.generic.headerContainerStyle = 'mobl__ui__generic__headerContainerStyle';
mobl.ui.generic.headerTextStyle = 'mobl__ui__generic__headerTextStyle';

mobl.ui.generic.header = function(text, onclick, elements, callback) {
  var root9 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node5 = $("<div>");
  
  var ref7 = mobl.ref(mobl.ui.generic.headerStyle);
  if(ref7.get() !== null) {
    node5.attr('class', ref7.get());
    subs__.addSub(ref7.addEventListener('change', function(_, ref, val) {
      node5.attr('class', val);
    }));
    
  }
  subs__.addSub(ref7.rebind());
  
  var val1 = onclick.get();
  if(val1 !== null) {
    subs__.addSub(mobl.domBind(node5, 'tap', val1));
  }
  
  
  var node6 = $("<div>");
  
  var ref6 = mobl.ref(mobl.ui.generic.headerContainerStyle);
  if(ref6.get() !== null) {
    node6.attr('class', ref6.get());
    subs__.addSub(ref6.addEventListener('change', function(_, ref, val) {
      node6.attr('class', val);
    }));
    
  }
  subs__.addSub(ref6.rebind());
  
  
  var node7 = $("<div>");
  
  var ref4 = text;
  node7.text(""+ref4.get());
  var ignore1 = false;
  subs__.addSub(ref4.addEventListener('change', function(_, ref, val) {
    if(ignore1) return;
    node7.text(""+val);
  }));
  subs__.addSub(ref4.rebind());
  
  
  var ref5 = mobl.ref(mobl.ui.generic.headerTextStyle);
  if(ref5.get() !== null) {
    node7.attr('class', ref5.get());
    subs__.addSub(ref5.addEventListener('change', function(_, ref, val) {
      node7.attr('class', val);
    }));
    
  }
  subs__.addSub(ref5.rebind());
  
  node6.append(node7);
  node5.append(node6);
  var nodes5 = $("<span>");
  node5.append(nodes5);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl3();
  }));
  
  function renderControl3() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5;
      nodes5 = node.contents();
      oldNodes.replaceWith(nodes5);
    }));
  }
  renderControl3();
  root9.append(node5);
  callback(root9); return subs__;
  
  
  
  
  return subs__;
};
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root11 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref8 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref8.get() !== null) {
    sp.attr('class', ref8.get());
    subs__.addSub(ref8.addEventListener('change', function(_, ref, val) {
      sp.attr('class', val);
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(style.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    
  }
  subs__.addSub(ref8.rebind());
  
  var val2 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val2 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val2));
  }
  
  var val3 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val3 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val3));
  }
  
  var val4 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after0(result__) {
                    var tmp76 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after0);if(result__ !== undefined) after0(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val4 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val4));
  }
  
  var val5 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val5 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val5));
  }
  
  var ref9 = text;
  sp.text(""+ref9.get());
  var ignore2 = false;
  subs__.addSub(ref9.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref9.rebind());
  
  
  root11.append(sp);
  callback(root11); return subs__;
  
  return subs__;
};
mobl.ui.generic.sideButtonStyle = 'mobl__ui__generic__sideButtonStyle';
mobl.ui.generic.sideButtonPushedStyle = 'mobl__ui__generic__sideButtonPushedStyle';

mobl.ui.generic.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root12 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6 = $("<span>");
  root12.append(nodes6);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root13 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root13); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6;
    nodes6 = node.contents();
    oldNodes.replaceWith(nodes6);
  }));
  callback(root12); return subs__;
  
  return subs__;
};
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';

mobl.ui.generic.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root14 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7 = $("<span>");
  root14.append(nodes7);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root15 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root15); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7;
    nodes7 = node.contents();
    oldNodes.replaceWith(nodes7);
  }));
  callback(root14); return subs__;
  
  return subs__;
};

mobl.ui.generic.block = function(cssClass, id, onclick, elements, callback) {
  var root16 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node8 = $("<div>");
  
  var ref10 = id;
  if(ref10.get() !== null) {
    node8.attr('id', ref10.get());
    subs__.addSub(ref10.addEventListener('change', function(_, ref, val) {
      node8.attr('id', val);
    }));
    
  }
  subs__.addSub(ref10.rebind());
  
  var ref11 = cssClass;
  if(ref11.get() !== null) {
    node8.attr('class', ref11.get());
    subs__.addSub(ref11.addEventListener('change', function(_, ref, val) {
      node8.attr('class', val);
    }));
    
  }
  subs__.addSub(ref11.rebind());
  
  var val6 = onclick.get();
  if(val6 !== null) {
    subs__.addSub(mobl.domBind(node8, 'tap', val6));
  }
  
  var nodes8 = $("<span>");
  node8.append(nodes8);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl4();
  }));
  
  function renderControl4() {
    subs__.addSub((elements)(function(elements, callback) {
      var root17 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8;
      nodes8 = node.contents();
      oldNodes.replaceWith(nodes8);
    }));
  }
  renderControl4();
  root16.append(node8);
  callback(root16); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.span = function(cssClass, id, onclick, elements, callback) {
  var root18 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node9 = $("<span>");
  
  var ref12 = id;
  if(ref12.get() !== null) {
    node9.attr('id', ref12.get());
    subs__.addSub(ref12.addEventListener('change', function(_, ref, val) {
      node9.attr('id', val);
    }));
    
  }
  subs__.addSub(ref12.rebind());
  
  var ref13 = cssClass;
  if(ref13.get() !== null) {
    node9.attr('class', ref13.get());
    subs__.addSub(ref13.addEventListener('change', function(_, ref, val) {
      node9.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13.rebind());
  
  var val7 = onclick.get();
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(node9, 'tap', val7));
  }
  
  var nodes9 = $("<span>");
  node9.append(nodes9);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5();
  }));
  
  function renderControl5() {
    subs__.addSub((elements)(function(elements, callback) {
      var root19 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root19); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes9;
      nodes9 = node.contents();
      oldNodes.replaceWith(nodes9);
    }));
  }
  renderControl5();
  root18.append(node9);
  callback(root18); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.groupStyle = 'mobl__ui__generic__groupStyle';

mobl.ui.generic.group = function(elements, callback) {
  var root20 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node10 = $("<ul>");
  
  var ref14 = mobl.ref(mobl.ui.generic.groupStyle);
  if(ref14.get() !== null) {
    node10.attr('class', ref14.get());
    subs__.addSub(ref14.addEventListener('change', function(_, ref, val) {
      node10.attr('class', val);
    }));
    
  }
  subs__.addSub(ref14.rebind());
  
  var nodes10 = $("<span>");
  node10.append(nodes10);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl6();
  }));
  
  function renderControl6() {
    subs__.addSub((elements)(function(elements, callback) {
      var root21 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root21); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10;
      nodes10 = node.contents();
      oldNodes.replaceWith(nodes10);
    }));
  }
  renderControl6();
  root20.append(node10);
  callback(root20); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root22 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node11 = $("<img>");
  
  var ref15 = url;
  if(ref15.get() !== null) {
    node11.attr('src', ref15.get());
    subs__.addSub(ref15.addEventListener('change', function(_, ref, val) {
      node11.attr('src', val);
    }));
    
  }
  subs__.addSub(ref15.rebind());
  
  var ref16 = width;
  if(ref16.get() !== null) {
    node11.attr('width', ref16.get());
    subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
      node11.attr('width', val);
    }));
    
  }
  subs__.addSub(ref16.rebind());
  
  var ref17 = height;
  if(ref17.get() !== null) {
    node11.attr('height', ref17.get());
    subs__.addSub(ref17.addEventListener('change', function(_, ref, val) {
      node11.attr('height', val);
    }));
    
  }
  subs__.addSub(ref17.rebind());
  
  var ref18 = style;
  if(ref18.get() !== null) {
    node11.attr('class', ref18.get());
    subs__.addSub(ref18.addEventListener('change', function(_, ref, val) {
      node11.attr('class', val);
    }));
    
  }
  subs__.addSub(ref18.rebind());
  
  var val8 = onclick.get();
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(node11, 'tap', val8));
  }
  
  var ref19 = valign;
  if(ref19.get() !== null) {
    node11.attr('valign', ref19.get());
    subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
      node11.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref19.rebind());
  
  var ref20 = align;
  if(ref20.get() !== null) {
    node11.attr('align', ref20.get());
    subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
      node11.attr('align', val);
    }));
    
  }
  subs__.addSub(ref20.rebind());
  
  root22.append(node11);
  callback(root22); return subs__;
  
  return subs__;
};
mobl.ui.generic.itemStyle = 'mobl__ui__generic__itemStyle';
mobl.ui.generic.itemPushedStyle = 'mobl__ui__generic__itemPushedStyle';
mobl.ui.generic.itemArrowStyle = 'mobl__ui__generic__itemArrowStyle';

mobl.ui.generic.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root23 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref21 = mobl.ref(mobl.ui.generic.itemStyle);
  if(ref21.get() !== null) {
    el.attr('class', ref21.get());
    subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref21.rebind());
  
  var ref22 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref22.get() !== null) {
    el.attr('class', ref22.get());
    subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(mobl.ui.generic.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref22.rebind());
  
  var val9 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp77 = result__;
                                           function after1(result__) {
                                             var tmp78 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after1);if(result__ !== undefined) after1(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp79 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val9 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val9));
  }
  
  var nodes11 = $("<span>");
  el.append(nodes11);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7();
  }));
  
  function renderControl7() {
    subs__.addSub((elements)(function(elements, callback) {
      var root24 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root24); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11;
      nodes11 = node.contents();
      oldNodes.replaceWith(nodes11);
    }));
  }
  renderControl7();
  root23.append(el);
  callback(root23); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.checkBox = function(b, label, onchange, elements, callback) {
  var root25 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12 = $("<input>");
  node12.attr('type', "checkbox");
  
  var ref24 = b;
  node12.attr('checked', !!ref24.get());
  subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
    if(ref === ref24) node12.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node12, 'change', function() {
    b.set(!!node12.attr('checked'));
  }));
  
  var val11 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val11 !== null) {
    subs__.addSub(mobl.domBind(node12, 'tap', val11));
  }
  
  var val12 = onchange.get();
  if(val12 !== null) {
    subs__.addSub(mobl.domBind(node12, 'change', val12));
  }
  
  root25.append(node12);
  
  root25.append(" ");
  
  var node13 = $("<span>");
  
  var ref23 = label;
  node13.text(""+ref23.get());
  var ignore3 = false;
  subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
    if(ignore3) return;
    node13.text(""+val);
  }));
  subs__.addSub(ref23.rebind());
  
  
  var val10 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2(result__) {
                    var tmp81 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2);if(result__ !== undefined) after2(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val10 !== null) {
    subs__.addSub(mobl.domBind(node13, 'tap', val10));
  }
  
  root25.append(node13);
  callback(root25); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.textFieldStyle = 'mobl__ui__generic__textFieldStyle';

mobl.ui.generic.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
  var root26 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node14 = $("<span>");
  root26.append(node14);
  var condSubs1 = new mobl.CompSubscription();
  subs__.addSub(condSubs1);
  var oldValue1;
  var renderCond1 = function() {
    var value13 = label.get();
    if(oldValue1 === value13) return;
    oldValue1 = value13;
    var subs__ = condSubs1;
    subs__.unsubscribe();
    node14.empty();
    if(value13) {
      
      var node15 = $("<span>");
      node15.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref28 = label;
      node15.text(""+ref28.get());
      var ignore5 = false;
      subs__.addSub(ref28.addEventListener('change', function(_, ref, val) {
        if(ignore5) return;
        node15.text(""+val);
      }));
      subs__.addSub(ref28.rebind());
      
      
      node14.append(node15);
      
      var node16 = $("<span>");
      node16.attr('style', "float: left");
      
      
      var node17 = $("<input>");
      node17.attr('type', "text");
      
      var ref25 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref25.get() !== null) {
        node17.attr('class', ref25.get());
        subs__.addSub(ref25.addEventListener('change', function(_, ref, val) {
          node17.attr('class', val);
        }));
        
      }
      subs__.addSub(ref25.rebind());
      
      var ref26 = placeholder;
      if(ref26.get() !== null) {
        node17.attr('placeholder', ref26.get());
        subs__.addSub(ref26.addEventListener('change', function(_, ref, val) {
          node17.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref26.rebind());
      
      var ref27 = s;
      node17.val(""+ref27.get());
      var ignore4 = false;
      subs__.addSub(ref27.addEventListener('change', function(_, ref, val) {
        if(ignore4) return;
        node17.val(""+val);
      }));
      subs__.addSub(ref27.rebind());
      
      subs__.addSub(mobl.domBind(node17, 'keyup change', function() {
        ignore4 = true;
        s.set(mobl.stringTomobl__String(node17.val()));
        ignore4 = false;
      }));
      
      
      var val13 = onchange.get();
      if(val13 !== null) {
        subs__.addSub(mobl.domBind(node17, 'change', val13));
      }
      
      var val14 = onkeyup.get();
      if(val14 !== null) {
        subs__.addSub(mobl.domBind(node17, 'keyup', val14));
      }
      
      var val15 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val15 !== null) {
        subs__.addSub(mobl.domBind(node17, 'blur', val15));
      }
      
      node16.append(node17);
      node14.append(node16);
      
      
      
      
    } else {
      
      var node18 = $("<input>");
      node18.attr('type', "text");
      
      var ref29 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref29.get() !== null) {
        node18.attr('class', ref29.get());
        subs__.addSub(ref29.addEventListener('change', function(_, ref, val) {
          node18.attr('class', val);
        }));
        
      }
      subs__.addSub(ref29.rebind());
      
      var ref30 = placeholder;
      if(ref30.get() !== null) {
        node18.attr('placeholder', ref30.get());
        subs__.addSub(ref30.addEventListener('change', function(_, ref, val) {
          node18.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref30.rebind());
      
      var ref31 = s;
      node18.val(""+ref31.get());
      var ignore6 = false;
      subs__.addSub(ref31.addEventListener('change', function(_, ref, val) {
        if(ignore6) return;
        node18.val(""+val);
      }));
      subs__.addSub(ref31.rebind());
      
      subs__.addSub(mobl.domBind(node18, 'keyup change', function() {
        ignore6 = true;
        s.set(mobl.stringTomobl__String(node18.val()));
        ignore6 = false;
      }));
      
      
      var val16 = onchange.get();
      if(val16 !== null) {
        subs__.addSub(mobl.domBind(node18, 'change', val16));
      }
      
      var val17 = onkeyup.get();
      if(val17 !== null) {
        subs__.addSub(mobl.domBind(node18, 'keyup', val17));
      }
      
      var val18 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val18 !== null) {
        subs__.addSub(mobl.domBind(node18, 'blur', val18));
      }
      
      node14.append(node18);
      
      
    }
  };
  renderCond1();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond1();
  }));
  
  callback(root26); return subs__;
  
  return subs__;
};

mobl.ui.generic.numField = function(n, placeholder, label, onchange, elements, callback) {
  var root27 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node19 = $("<span>");
  root27.append(node19);
  var condSubs2 = new mobl.CompSubscription();
  subs__.addSub(condSubs2);
  var oldValue2;
  var renderCond2 = function() {
    var value14 = label.get();
    if(oldValue2 === value14) return;
    oldValue2 = value14;
    var subs__ = condSubs2;
    subs__.unsubscribe();
    node19.empty();
    if(value14) {
      
      var node20 = $("<span>");
      node20.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref35 = label;
      node20.text(""+ref35.get());
      var ignore8 = false;
      subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
        if(ignore8) return;
        node20.text(""+val);
      }));
      subs__.addSub(ref35.rebind());
      
      
      node19.append(node20);
      
      var node21 = $("<span>");
      node21.attr('style', "float: left");
      
      
      var node22 = $("<input>");
      node22.attr('type', "text");
      
      var ref32 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref32.get() !== null) {
        node22.attr('class', ref32.get());
        subs__.addSub(ref32.addEventListener('change', function(_, ref, val) {
          node22.attr('class', val);
        }));
        
      }
      subs__.addSub(ref32.rebind());
      
      var ref33 = placeholder;
      if(ref33.get() !== null) {
        node22.attr('placeholder', ref33.get());
        subs__.addSub(ref33.addEventListener('change', function(_, ref, val) {
          node22.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref33.rebind());
      
      var ref34 = n;
      node22.val(""+ref34.get());
      var ignore7 = false;
      subs__.addSub(ref34.addEventListener('change', function(_, ref, val) {
        if(ignore7) return;
        node22.val(""+val);
      }));
      subs__.addSub(ref34.rebind());
      
      subs__.addSub(mobl.domBind(node22, 'keyup change', function() {
        ignore7 = true;
        n.set(mobl.stringTomobl__Num(node22.val()));
        ignore7 = false;
      }));
      
      
      var val19 = onchange.get();
      if(val19 !== null) {
        subs__.addSub(mobl.domBind(node22, 'change', val19));
      }
      
      var val20 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val20 !== null) {
        subs__.addSub(mobl.domBind(node22, 'blur', val20));
      }
      
      node21.append(node22);
      node19.append(node21);
      
      
      
      
    } else {
      
      var node23 = $("<input>");
      node23.attr('type', "text");
      
      var ref36 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref36.get() !== null) {
        node23.attr('class', ref36.get());
        subs__.addSub(ref36.addEventListener('change', function(_, ref, val) {
          node23.attr('class', val);
        }));
        
      }
      subs__.addSub(ref36.rebind());
      
      var ref37 = placeholder;
      if(ref37.get() !== null) {
        node23.attr('placeholder', ref37.get());
        subs__.addSub(ref37.addEventListener('change', function(_, ref, val) {
          node23.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref37.rebind());
      
      var ref38 = n;
      node23.val(""+ref38.get());
      var ignore9 = false;
      subs__.addSub(ref38.addEventListener('change', function(_, ref, val) {
        if(ignore9) return;
        node23.val(""+val);
      }));
      subs__.addSub(ref38.rebind());
      
      subs__.addSub(mobl.domBind(node23, 'keyup change', function() {
        ignore9 = true;
        n.set(mobl.stringTomobl__Num(node23.val()));
        ignore9 = false;
      }));
      
      
      var val21 = onchange.get();
      if(val21 !== null) {
        subs__.addSub(mobl.domBind(node23, 'change', val21));
      }
      
      var val22 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val22 !== null) {
        subs__.addSub(mobl.domBind(node23, 'blur', val22));
      }
      
      node19.append(node23);
      
      
    }
  };
  renderCond2();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2();
  }));
  
  callback(root27); return subs__;
  
  return subs__;
};

mobl.ui.generic.passwordField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
  var root28 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node24 = $("<span>");
  root28.append(node24);
  var condSubs3 = new mobl.CompSubscription();
  subs__.addSub(condSubs3);
  var oldValue3;
  var renderCond3 = function() {
    var value15 = label.get();
    if(oldValue3 === value15) return;
    oldValue3 = value15;
    var subs__ = condSubs3;
    subs__.unsubscribe();
    node24.empty();
    if(value15) {
      
      var node25 = $("<span>");
      node25.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref42 = label;
      node25.text(""+ref42.get());
      var ignore11 = false;
      subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
        if(ignore11) return;
        node25.text(""+val);
      }));
      subs__.addSub(ref42.rebind());
      
      
      node24.append(node25);
      
      var node26 = $("<span>");
      node26.attr('style', "float: left");
      
      
      var node27 = $("<input>");
      node27.attr('type', "password");
      
      var ref39 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref39.get() !== null) {
        node27.attr('class', ref39.get());
        subs__.addSub(ref39.addEventListener('change', function(_, ref, val) {
          node27.attr('class', val);
        }));
        
      }
      subs__.addSub(ref39.rebind());
      
      var ref40 = placeholder;
      if(ref40.get() !== null) {
        node27.attr('placeholder', ref40.get());
        subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
          node27.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref40.rebind());
      
      var ref41 = s;
      node27.val(""+ref41.get());
      var ignore10 = false;
      subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
        if(ignore10) return;
        node27.val(""+val);
      }));
      subs__.addSub(ref41.rebind());
      
      subs__.addSub(mobl.domBind(node27, 'keyup change', function() {
        ignore10 = true;
        s.set(mobl.stringTomobl__String(node27.val()));
        ignore10 = false;
      }));
      
      
      var val23 = onchange.get();
      if(val23 !== null) {
        subs__.addSub(mobl.domBind(node27, 'change', val23));
      }
      
      var val24 = onkeyup.get();
      if(val24 !== null) {
        subs__.addSub(mobl.domBind(node27, 'keyup', val24));
      }
      
      var val25 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val25 !== null) {
        subs__.addSub(mobl.domBind(node27, 'blur', val25));
      }
      
      node26.append(node27);
      node24.append(node26);
      
      
      
      
    } else {
      
      var node28 = $("<input>");
      node28.attr('type', "password");
      
      var ref43 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref43.get() !== null) {
        node28.attr('class', ref43.get());
        subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
          node28.attr('class', val);
        }));
        
      }
      subs__.addSub(ref43.rebind());
      
      var ref44 = placeholder;
      if(ref44.get() !== null) {
        node28.attr('placeholder', ref44.get());
        subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
          node28.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref44.rebind());
      
      var ref45 = s;
      node28.val(""+ref45.get());
      var ignore12 = false;
      subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
        if(ignore12) return;
        node28.val(""+val);
      }));
      subs__.addSub(ref45.rebind());
      
      subs__.addSub(mobl.domBind(node28, 'keyup change', function() {
        ignore12 = true;
        s.set(mobl.stringTomobl__String(node28.val()));
        ignore12 = false;
      }));
      
      
      var val26 = onchange.get();
      if(val26 !== null) {
        subs__.addSub(mobl.domBind(node28, 'change', val26));
      }
      
      var val27 = onkeyup.get();
      if(val27 !== null) {
        subs__.addSub(mobl.domBind(node28, 'keyup', val27));
      }
      
      var val28 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val28 !== null) {
        subs__.addSub(mobl.domBind(node28, 'blur', val28));
      }
      
      node24.append(node28);
      
      
    }
  };
  renderCond3();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond3();
  }));
  
  callback(root28); return subs__;
  
  return subs__;
};
mobl.ui.generic.tabbarStyle = 'mobl__ui__generic__tabbarStyle';
mobl.ui.generic.inActiveTabButtonStyle = 'mobl__ui__generic__inActiveTabButtonStyle';
mobl.ui.generic.activeTabButtonStyle = 'mobl__ui__generic__activeTabButtonStyle';
mobl.ui.generic.inActiveTabStyle = 'mobl__ui__generic__inActiveTabStyle';
mobl.ui.generic.activeTabStyle = 'mobl__ui__generic__activeTabStyle';

mobl.ui.generic.tabSet = function(tabs, elements, callback) {
  var root29 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp16 = mobl.ref(null);
  
  
  var tmp15 = mobl.ref(null);
  
  var nodes12 = $("<span>");
  root29.append(nodes12);
  subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.tabbarStyle), tmp15, tmp16, function(_, callback) {
    var root30 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node29 = mobl.loadingSpan();
    root30.append(node29);
    var list0;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList0 = function() {
      var subs__ = listSubs__;
      list0 = tabs.get();
      list0.list(function(results36) {
        node29.empty();
        for(var i0 = 0; i0 < results36.length; i0++) {
          (function() {
            var iternode0 = $("<span>");
            node29.append(iternode0);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results36), i0), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results36), i0), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results36), i0), "_3");
            
            var tmp13 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp13.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp13.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeTabButtonStyle).addEventListener('change', function() {
              tmp13.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp13.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            
            
            var tmp12 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp14 = mobl.ref(null);
            
            var nodes13 = $("<span>");
            iternode0.append(nodes13);
            subs__.addSub((mobl.ui.generic.span)(tmp13, tmp14, tmp12, function(_, callback) {
              var root31 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp11 = mobl.ref(null);
              
              
              var tmp9 = mobl.ref(null);
              
              var nodes14 = $("<span>");
              root31.append(nodes14);
              subs__.addSub((mobl.label)(tabName, tmp9, tmp11, function(_, callback) {
                var root32 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root32); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes14;
                nodes14 = node.contents();
                oldNodes.replaceWith(nodes14);
              }));
              callback(root31); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes13;
              nodes13 = node.contents();
              oldNodes.replaceWith(nodes13);
            }));
            
            var oldNodes = iternode0;
            iternode0 = iternode0.contents();
            oldNodes.replaceWith(iternode0);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list0.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
      });
    };
    renderList0();
    
    callback(root30); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes12;
    nodes12 = node.contents();
    oldNodes.replaceWith(nodes12);
  }));
  
  var node30 = mobl.loadingSpan();
  root29.append(node30);
  var list1;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1 = function() {
    var subs__ = listSubs__;
    list1 = tabs.get();
    list1.list(function(results37) {
      node30.empty();
      for(var i1 = 0; i1 < results37.length; i1++) {
        (function() {
          var iternode1 = $("<span>");
          node30.append(iternode1);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results37), i1), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results37), i1), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results37), i1), "_3");
          
          var tmp17 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp17.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp17.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.activeTabStyle).addEventListener('change', function() {
            tmp17.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabStyle).addEventListener('change', function() {
            tmp17.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          
          
          var tmp19 = mobl.ref(null);
          
          
          var tmp18 = mobl.ref(null);
          
          var nodes15 = $("<span>");
          iternode1.append(nodes15);
          subs__.addSub((mobl.ui.generic.block)(tmp17, tmp18, tmp19, function(_, callback) {
            var root33 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes16 = $("<span>");
            root33.append(nodes16);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root34 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes17 = $("<span>");
              root34.append(nodes17);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl8();
              }));
              
              function renderControl8() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root35 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root35); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes17;
                  nodes17 = node.contents();
                  oldNodes.replaceWith(nodes17);
                }));
              }
              renderControl8();
              callback(root34); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes16;
              nodes16 = node.contents();
              oldNodes.replaceWith(nodes16);
            }));
            callback(root33); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes15;
            nodes15 = node.contents();
            oldNodes.replaceWith(nodes15);
          }));
          
          var oldNodes = iternode1;
          iternode1 = iternode1.contents();
          oldNodes.replaceWith(iternode1);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
    });
  };
  renderList1();
  
  callback(root29); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.searchboxStyle = 'mobl__ui__generic__searchboxStyle';
mobl.ui.generic.searchBoxInputStyle = 'mobl__ui__generic__searchBoxInputStyle';

mobl.ui.generic.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root36 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node31 = $("<div>");
  
  var ref49 = mobl.ref(mobl.ui.generic.searchboxStyle);
  if(ref49.get() !== null) {
    node31.attr('class', ref49.get());
    subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
      node31.attr('class', val);
    }));
    
  }
  subs__.addSub(ref49.rebind());
  
  
  var node32 = $("<input>");
  node32.attr('type', "text");
  
  var ref46 = mobl.ref(mobl.ui.generic.searchBoxInputStyle);
  if(ref46.get() !== null) {
    node32.attr('class', ref46.get());
    subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
      node32.attr('class', val);
    }));
    
  }
  subs__.addSub(ref46.rebind());
  
  var ref47 = placeholder;
  if(ref47.get() !== null) {
    node32.attr('placeholder', ref47.get());
    subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
      node32.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref47.rebind());
  
  var ref48 = s;
  node32.val(""+ref48.get());
  var ignore13 = false;
  subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
    if(ignore13) return;
    node32.val(""+val);
  }));
  subs__.addSub(ref48.rebind());
  
  subs__.addSub(mobl.domBind(node32, 'keyup change', function() {
    ignore13 = true;
    s.set(mobl.stringTomobl__String(node32.val()));
    ignore13 = false;
  }));
  
  
  var val29 = onsearch.get();
  if(val29 !== null) {
    subs__.addSub(mobl.domBind(node32, 'change', val29));
  }
  
  var val30 = onkeyup.get();
  if(val30 !== null) {
    subs__.addSub(mobl.domBind(node32, 'keyup', val30));
  }
  node32.attr('autocorrect', "off");
  node32.attr('autocapitalize', "off");
  node32.attr('autocomplete', "off");
  
  node31.append(node32);
  root36.append(node31);
  callback(root36); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.contextMenuStyle = 'mobl__ui__generic__contextMenuStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.contextMenu = function(elements, callback) {
  var root37 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref50 = mobl.ref(mobl.ui.generic.contextMenuStyle);
  if(ref50.get() !== null) {
    menu.attr('class', ref50.get());
    subs__.addSub(ref50.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref50.rebind());
  
  var nodes18 = $("<span>");
  menu.append(nodes18);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl9();
  }));
  
  function renderControl9() {
    subs__.addSub((elements)(function(elements, callback) {
      var root38 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root38); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18;
      nodes18 = node.contents();
      oldNodes.replaceWith(nodes18);
    }));
  }
  renderControl9();
  root37.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "mobl/ui/generic/contextmenu.png");
  img.attr('style', "float: right;");
  
  var val31 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp84 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val31 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val31));
  }
  
  root37.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root37); return subs__;
  
  
  
  return subs__;
};

mobl.ui.generic.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root39 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp75 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp75.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node33 = $("<span>");
  root39.append(node33);
  var condSubs4 = new mobl.CompSubscription();
  subs__.addSub(condSubs4);
  var oldValue4;
  var renderCond4 = function() {
    var value16 = tmp75.get();
    if(oldValue4 === value16) return;
    oldValue4 = value16;
    var subs__ = condSubs4;
    subs__.unsubscribe();
    node33.empty();
    if(value16) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node34 = $("<div>");
        node34.attr('width', "100%");
        
        
        var node35 = $("<div>");
        node35.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes20 = $("<span>");
        node35.append(nodes20);
        subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
          var root41 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node37 = mobl.loadingSpan();
          root41.append(node37);
          var list2;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList2 = function() {
            var subs__ = listSubs__;
            list2 = items.get();
            list2.list(function(results38) {
              node37.empty();
              for(var i2 = 0; i2 < results38.length; i2++) {
                (function() {
                  var iternode2 = $("<span>");
                  node37.append(iternode2);
                  var it;
                  it = mobl.ref(mobl.ref(results38), i2);
                  
                  var tmp35 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp35.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp35.set(it.get() == current.get());
                  }));
                  
                  
                  var node38 = $("<span>");
                  iternode2.append(node38);
                  var condSubs5 = new mobl.CompSubscription();
                  subs__.addSub(condSubs5);
                  var oldValue5;
                  var renderCond5 = function() {
                    var value17 = tmp35.get();
                    if(oldValue5 === value17) return;
                    oldValue5 = value17;
                    var subs__ = condSubs5;
                    subs__.unsubscribe();
                    node38.empty();
                    if(value17) {
                      
                      var tmp31 = mobl.ref(false);
                      
                      
                      var tmp29 = mobl.ref(null);
                      
                      
                      var tmp28 = mobl.ref(null);
                      
                      var nodes21 = $("<span>");
                      node38.append(nodes21);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.selectedItemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp28, tmp29, tmp31, function(_, callback) {
                        var root42 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes22 = $("<span>");
                        root42.append(nodes22);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl11();
                        }));
                        
                        function renderControl11() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root43 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root43); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes22;
                            nodes22 = node.contents();
                            oldNodes.replaceWith(nodes22);
                          }));
                        }
                        renderControl11();
                        callback(root42); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes21;
                        nodes21 = node.contents();
                        oldNodes.replaceWith(nodes21);
                      }));
                      
                      
                    } else {
                      
                      var tmp33 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp32 = mobl.ref(true);
                      
                      
                      var tmp34 = mobl.ref(null);
                      
                      var nodes23 = $("<span>");
                      node38.append(nodes23);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp33, tmp34, tmp32, function(_, callback) {
                        var root44 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes24 = $("<span>");
                        root44.append(nodes24);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl12();
                        }));
                        
                        function renderControl12() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root45 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root45); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes24;
                            nodes24 = node.contents();
                            oldNodes.replaceWith(nodes24);
                          }));
                        }
                        renderControl12();
                        callback(root44); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes23;
                        nodes23 = node.contents();
                        oldNodes.replaceWith(nodes23);
                      }));
                      
                      
                    }
                  };
                  renderCond5();
                  subs__.addSub(tmp35.addEventListener('change', function() {
                    renderCond5();
                  }));
                  
                  
                  var oldNodes = iternode2;
                  iternode2 = iternode2.contents();
                  oldNodes.replaceWith(iternode2);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list2.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
            });
          };
          renderList2();
          
          callback(root41); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes20;
          nodes20 = node.contents();
          oldNodes.replaceWith(nodes20);
        }));
        node34.append(node35);
        
        var node36 = $("<div>");
        node36.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        var nodes19 = $("<span>");
        node36.append(nodes19);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl10();
        }));
        
        function renderControl10() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root40 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root40); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes19;
            nodes19 = node.contents();
            oldNodes.replaceWith(nodes19);
          }));
        }
        renderControl10();
        node34.append(node36);
        node33.append(node34);
        
        
        
        
        
        
      });
    } else {
      var nodes25 = $("<span>");
      node33.append(nodes25);
      subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
        var root46 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node39 = mobl.loadingSpan();
        root46.append(node39);
        var list3;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList3 = function() {
          var subs__ = listSubs__;
          list3 = items.get();
          list3.list(function(results39) {
            node39.empty();
            for(var i3 = 0; i3 < results39.length; i3++) {
              (function() {
                var iternode3 = $("<span>");
                node39.append(iternode3);
                var it;
                it = mobl.ref(mobl.ref(results39), i3);
                
                var tmp21 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('mobl.ui.generic.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp85 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp23 = mobl.ref(false);
                
                
                var tmp22 = mobl.ref(null);
                
                var nodes26 = $("<span>");
                iternode3.append(nodes26);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp21, tmp22, tmp23, function(_, callback) {
                  var root47 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes27 = $("<span>");
                  root47.append(nodes27);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl13();
                  }));
                  
                  function renderControl13() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root48 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root48); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes27;
                      nodes27 = node.contents();
                      oldNodes.replaceWith(nodes27);
                    }));
                  }
                  renderControl13();
                  callback(root47); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes26;
                  nodes26 = node.contents();
                  oldNodes.replaceWith(nodes26);
                }));
                
                var oldNodes = iternode3;
                iternode3 = iternode3.contents();
                oldNodes.replaceWith(iternode3);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list3.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3(true); }));
          });
        };
        renderList3();
        
        callback(root46); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes25;
        nodes25 = node.contents();
        oldNodes.replaceWith(nodes25);
      }));
      
      
    }
  };
  renderCond4();
  subs__.addSub(tmp75.addEventListener('change', function() {
    renderCond4();
  }));
  
  callback(root39); return subs__;
  
  return subs__;
};

mobl.ui.generic.detailScreen = function(it, detail, callback, screenCallback) {
  var root49 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp26 = mobl.ref("Detail");
  
  
  var tmp27 = mobl.ref(null);
  
  var nodes28 = $("<span>");
  root49.append(nodes28);
  subs__.addSub((mobl.ui.generic.header)(tmp26, tmp27, function(_, callback) {
    var root50 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp25 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp24 = mobl.ref("Back");
    
    var nodes29 = $("<span>");
    root50.append(nodes29);
    subs__.addSub((mobl.ui.generic.backButton)(tmp24, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp25, function(_, callback) {
      var root51 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root51); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes29;
      nodes29 = node.contents();
      oldNodes.replaceWith(nodes29);
    }));
    callback(root50); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes28;
    nodes28 = node.contents();
    oldNodes.replaceWith(nodes28);
  }));
  var nodes30 = $("<span>");
  root49.append(nodes30);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl14();
  }));
  
  function renderControl14() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root52 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root52); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes30;
      nodes30 = node.contents();
      oldNodes.replaceWith(nodes30);
    }));
  }
  renderControl14();
  callback(root49); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.selectedItemStyle = 'mobl__ui__generic__selectedItemStyle';

mobl.ui.generic.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root53 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes31 = $("<span>");
  root53.append(nodes31);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root54 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node40 = mobl.loadingSpan();
    root54.append(node40);
    var list4;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList4 = function() {
      var subs__ = listSubs__;
      list4 = coll.get();
      list4.list(function(results40) {
        node40.empty();
        for(var i4 = 0; i4 < results40.length; i4++) {
          (function() {
            var iternode4 = $("<span>");
            node40.append(iternode4);
            var it;
            it = mobl.ref(mobl.ref(results40), i4);
            
            var tmp43 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp43.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp43.set(it.get() == selected.get());
            }));
            
            
            var node41 = $("<span>");
            iternode4.append(node41);
            var condSubs6 = new mobl.CompSubscription();
            subs__.addSub(condSubs6);
            var oldValue6;
            var renderCond6 = function() {
              var value18 = tmp43.get();
              if(oldValue6 === value18) return;
              oldValue6 = value18;
              var subs__ = condSubs6;
              subs__.unsubscribe();
              node41.empty();
              if(value18) {
                
                var tmp38 = mobl.ref(false);
                
                
                var tmp37 = mobl.ref(null);
                
                
                var tmp36 = mobl.ref(null);
                
                var nodes32 = $("<span>");
                node41.append(nodes32);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp36, tmp37, tmp38, function(_, callback) {
                  var root55 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes33 = $("<span>");
                  root55.append(nodes33);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl15();
                  }));
                  
                  function renderControl15() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root56 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root56); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes33;
                      nodes33 = node.contents();
                      oldNodes.replaceWith(nodes33);
                    }));
                  }
                  renderControl15();
                  callback(root55); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes32;
                  nodes32 = node.contents();
                  oldNodes.replaceWith(nodes32);
                }));
                
                
              } else {
                
                var tmp41 = mobl.ref(true);
                
                
                var tmp39 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp42 = mobl.ref(null);
                
                var nodes34 = $("<span>");
                node41.append(nodes34);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp39, tmp42, tmp41, function(_, callback) {
                  var root57 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes35 = $("<span>");
                  root57.append(nodes35);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl16();
                  }));
                  
                  function renderControl16() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root58 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root58); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes35;
                      nodes35 = node.contents();
                      oldNodes.replaceWith(nodes35);
                    }));
                  }
                  renderControl16();
                  callback(root57); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes34;
                  nodes34 = node.contents();
                  oldNodes.replaceWith(nodes34);
                }));
                
                
              }
            };
            renderCond6();
            subs__.addSub(tmp43.addEventListener('change', function() {
              renderCond6();
            }));
            
            
            var oldNodes = iternode4;
            iternode4 = iternode4.contents();
            oldNodes.replaceWith(iternode4);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list4.addEventListener('change', function() { listSubs__.unsubscribe(); renderList4(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList4(true); }));
      });
    };
    renderList4();
    
    callback(root54); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes31;
    nodes31 = node.contents();
    oldNodes.replaceWith(nodes31);
  }));
  callback(root53); return subs__;
  
  return subs__;
};
mobl.ui.generic.loadMoreStyle = 'mobl__ui__generic__loadMoreStyle';

mobl.ui.generic.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
  var root59 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes36 = $("<span>");
    root59.append(nodes36);
    subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
      var root60 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp47 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp47.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp47.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp47.set(coll.get().limit(n.get()));
      }));
      
      
      var node42 = mobl.loadingSpan();
      root60.append(node42);
      var list5;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList5 = function() {
        var subs__ = listSubs__;
        list5 = tmp47.get();
        list5.list(function(results41) {
          node42.empty();
          for(var i5 = 0; i5 < results41.length; i5++) {
            (function() {
              var iternode5 = $("<span>");
              node42.append(iternode5);
              var it;
              it = mobl.ref(mobl.ref(results41), i5);
              
              var tmp44 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp46 = mobl.ref(false);
              
              
              var tmp45 = mobl.ref(null);
              
              var nodes37 = $("<span>");
              iternode5.append(nodes37);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp44, tmp45, tmp46, function(_, callback) {
                var root61 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes38 = $("<span>");
                root61.append(nodes38);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl17();
                }));
                
                function renderControl17() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root62 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root62); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes38;
                    nodes38 = node.contents();
                    oldNodes.replaceWith(nodes38);
                  }));
                }
                renderControl17();
                callback(root61); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes37;
                nodes37 = node.contents();
                oldNodes.replaceWith(nodes37);
              }));
              
              var oldNodes = iternode5;
              iternode5 = iternode5.contents();
              oldNodes.replaceWith(iternode5);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list5.addEventListener('change', function() { listSubs__.unsubscribe(); renderList5(true); }));
          subs__.addSub(tmp47.addEventListener('change', function() { listSubs__.unsubscribe(); renderList5(true); }));
        });
      };
      renderList5();
      
      
      var tmp48 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp48.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp48.set(n.get() < total.get());
      }));
      
      
      var node43 = $("<span>");
      root60.append(node43);
      var condSubs7 = new mobl.CompSubscription();
      subs__.addSub(condSubs7);
      var oldValue7;
      var renderCond7 = function() {
        var value19 = tmp48.get();
        if(oldValue7 === value19) return;
        oldValue7 = value19;
        var subs__ = condSubs7;
        subs__.unsubscribe();
        node43.empty();
        if(value19) {
          
          var node44 = $("<li>");
          
          var ref51 = mobl.ref(mobl.ui.generic.loadMoreStyle);
          if(ref51.get() !== null) {
            node44.attr('class', ref51.get());
            subs__.addSub(ref51.addEventListener('change', function(_, ref, val) {
              node44.attr('class', val);
            }));
            
          }
          subs__.addSub(ref51.rebind());
          
          var val32 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val32 !== null) {
            subs__.addSub(mobl.domBind(node44, 'tap', val32));
          }
          
          
          node44.append("More");
          node43.append(node44);
          
          
        } else {
          
        }
      };
      renderCond7();
      subs__.addSub(tmp48.addEventListener('change', function() {
        renderCond7();
      }));
      
      callback(root60); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes36;
      nodes36 = node.contents();
      oldNodes.replaceWith(nodes36);
    }));
    callback(root59); return subs__;
    
  });
  return subs__;
};

mobl.ui.generic.markableList = function(items, elements, callback) {
  var root63 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes39 = $("<span>");
  root63.append(nodes39);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root64 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node45 = mobl.loadingSpan();
    root64.append(node45);
    var list6;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList6 = function() {
      var subs__ = listSubs__;
      list6 = items.get();
      list6.list(function(results42) {
        node45.empty();
        for(var i6 = 0; i6 < results42.length; i6++) {
          (function() {
            var iternode6 = $("<span>");
            node45.append(iternode6);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results42), i6), "_1");it = mobl.ref(mobl.ref(mobl.ref(results42), i6), "_2");
            
            var tmp53 = mobl.ref(false);
            
            
            var tmp52 = mobl.ref(null);
            
            
            var tmp51 = mobl.ref(null);
            
            var nodes40 = $("<span>");
            iternode6.append(nodes40);
            subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp51, tmp52, tmp53, function(_, callback) {
              var root65 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp49 = mobl.ref(null);
              
              var nodes41 = $("<span>");
              root65.append(nodes41);
              subs__.addSub((mobl.ui.generic.checkBox)(checked, it, tmp49, function(_, callback) {
                var root66 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root66); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes41;
                nodes41 = node.contents();
                oldNodes.replaceWith(nodes41);
              }));
              callback(root65); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes40;
              nodes40 = node.contents();
              oldNodes.replaceWith(nodes40);
            }));
            
            var oldNodes = iternode6;
            iternode6 = iternode6.contents();
            oldNodes.replaceWith(iternode6);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list6.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
      });
    };
    renderList6();
    
    callback(root64); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes39;
    nodes39 = node.contents();
    oldNodes.replaceWith(nodes39);
  }));
  callback(root63); return subs__;
  
  return subs__;
};

mobl.ui.generic.selectList = function(title, coll, callback, screenCallback) {
  var root67 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll25) {
    coll25 = coll25.reverse();
    function processOne1() {
      var it;
      it = coll25.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll25.length > 0) processOne1(); else rest1();
      
    }
    function rest1() {
      
      var tmp58 = mobl.ref(null);
      
      var nodes42 = $("<span>");
      root67.append(nodes42);
      subs__.addSub((mobl.ui.generic.header)(title, tmp58, function(_, callback) {
        var root68 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp54 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp55 = mobl.ref("Back");
        
        var nodes43 = $("<span>");
        root68.append(nodes43);
        subs__.addSub((mobl.ui.generic.backButton)(tmp55, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp54, function(_, callback) {
          var root69 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root69); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes43;
          nodes43 = node.contents();
          oldNodes.replaceWith(nodes43);
        }));
        
        var tmp57 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll24) {
                               coll24 = coll24.reverse();
                               function processOne0() {
                                 var checked;var it;
                                 var tmp87 = coll24.pop();
                                 checked = tmp87._1;it = tmp87._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll24.length > 0) processOne0(); else rest0();
                                   
                                 } else {
                                   {
                                     
                                     if(coll24.length > 0) processOne0(); else rest0();
                                     
                                   }
                                 }
                               }
                               function rest0() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll24.length > 0) processOne0(); else rest0();
                             });
                             
                           });
        
        
        var tmp56 = mobl.ref("Done");
        
        var nodes44 = $("<span>");
        root68.append(nodes44);
        subs__.addSub((mobl.ui.generic.button)(tmp56, mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp57, function(_, callback) {
          var root70 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root70); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes44;
          nodes44 = node.contents();
          oldNodes.replaceWith(nodes44);
        }));
        callback(root68); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes42;
        nodes42 = node.contents();
        oldNodes.replaceWith(nodes42);
      }));
      var nodes45 = $("<span>");
      root67.append(nodes45);
      subs__.addSub((mobl.ui.generic.markableList)(items, function(_, callback) {
        var root71 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root71); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes45;
        nodes45 = node.contents();
        oldNodes.replaceWith(nodes45);
      }));
      callback(root67); return subs__;
      
      
    }
    if(coll25.length > 0) processOne1(); else rest1();
  });
  
  return subs__;
};

mobl.ui.generic.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
  var root72 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp59 = mobl.ref("Search term");
  
  
  var tmp62 = mobl.ref(null);
  
  
  var tmp61 = mobl.ref(null);
  
  var nodes46 = $("<span>");
  root72.append(nodes46);
  subs__.addSub((mobl.ui.generic.searchBox)(phrase, tmp59, tmp61, tmp62, function(_, callback) {
    var root73 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root73); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes46;
    nodes46 = node.contents();
    oldNodes.replaceWith(nodes46);
  }));
  
  var tmp63 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp63.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp63.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp63.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp63.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp63.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes47 = $("<span>");
  root72.append(nodes47);
  subs__.addSub((mobl.ui.generic.masterDetail)(tmp63, masterItem, detailItem, function(_, callback) {
    var root74 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root74); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes47;
    nodes47 = node.contents();
    oldNodes.replaceWith(nodes47);
  }));
  callback(root72); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.progressStyle = 'mobl__ui__generic__progressStyle';
mobl.ui.generic.startLoading = function() {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + mobl.ui.generic.progressStyle + "'>Loading...</div>");
  
  mobl.$("body").prepend(loading);
};

mobl.ui.generic.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(mobl.ui.generic));mobl.ui.generic.accordionStyle = 'mobl__ui__generic__accordionStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.inActiveSectionStyle = 'mobl__ui__generic__inActiveSectionStyle';
mobl.ui.generic.activeSectionStyle = 'mobl__ui__generic__activeSectionStyle';

mobl.ui.generic.accordion = function(sections, elements, callback) {
  var root75 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp74 = mobl.ref(null);
  
  
  var tmp73 = mobl.ref(null);
  
  var nodes48 = $("<span>");
  root75.append(nodes48);
  subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.accordionStyle), tmp73, tmp74, function(_, callback) {
    var root76 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node46 = mobl.loadingSpan();
    root76.append(node46);
    var list7;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList7 = function() {
      var subs__ = listSubs__;
      list7 = sections.get();
      list7.list(function(results43) {
        node46.empty();
        for(var i7 = 0; i7 < results43.length; i7++) {
          (function() {
            var iternode7 = $("<span>");
            node46.append(iternode7);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results43), i7), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results43), i7), "_2");
            
            var tmp67 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp67.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp67.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp67.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp67.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp66 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp68 = mobl.ref(null);
            
            var nodes49 = $("<span>");
            iternode7.append(nodes49);
            subs__.addSub((mobl.ui.generic.span)(tmp67, tmp68, tmp66, function(_, callback) {
              var root77 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp65 = mobl.ref(null);
              
              
              var tmp64 = mobl.ref(null);
              
              var nodes50 = $("<span>");
              root77.append(nodes50);
              subs__.addSub((mobl.label)(sectionName, tmp64, tmp65, function(_, callback) {
                var root78 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root78); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes50;
                nodes50 = node.contents();
                oldNodes.replaceWith(nodes50);
              }));
              callback(root77); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes49;
              nodes49 = node.contents();
              oldNodes.replaceWith(nodes49);
            }));
            
            var tmp69 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp69.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp69.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionStyle).addEventListener('change', function() {
              tmp69.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionStyle).addEventListener('change', function() {
              tmp69.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            
            
            var tmp72 = mobl.ref(null);
            
            
            var tmp71 = mobl.ref(null);
            
            var nodes51 = $("<span>");
            iternode7.append(nodes51);
            subs__.addSub((mobl.ui.generic.block)(tmp69, tmp71, tmp72, function(_, callback) {
              var root79 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes52 = $("<span>");
              root79.append(nodes52);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl18();
              }));
              
              function renderControl18() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root80 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root80); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes52;
                  nodes52 = node.contents();
                  oldNodes.replaceWith(nodes52);
                }));
              }
              renderControl18();
              callback(root79); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes51;
              nodes51 = node.contents();
              oldNodes.replaceWith(nodes51);
            }));
            
            var oldNodes = iternode7;
            iternode7 = iternode7.contents();
            oldNodes.replaceWith(iternode7);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list7.addEventListener('change', function() { listSubs__.unsubscribe(); renderList7(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList7(true); }));
      });
    };
    renderList7();
    
    callback(root76); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes48;
    nodes48 = node.contents();
    oldNodes.replaceWith(nodes48);
  }));
  callback(root75); return subs__;
  
  return subs__;
};
mobl.ui.generic.tableStyle = 'mobl__ui__generic__tableStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';

mobl.ui.generic.table = function(elements, callback) {
  var root81 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node47 = $("<table>");
  
  var ref52 = mobl.ref(mobl.ui.generic.tableStyle);
  if(ref52.get() !== null) {
    node47.attr('class', ref52.get());
    subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
      node47.attr('class', val);
    }));
    
  }
  subs__.addSub(ref52.rebind());
  
  var nodes53 = $("<span>");
  node47.append(nodes53);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl19();
  }));
  
  function renderControl19() {
    subs__.addSub((elements)(function(elements, callback) {
      var root82 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root82); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes53;
      nodes53 = node.contents();
      oldNodes.replaceWith(nodes53);
    }));
  }
  renderControl19();
  root81.append(node47);
  callback(root81); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.row = function(elements, callback) {
  var root83 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node48 = $("<tr>");
  
  var ref53 = mobl.ref(mobl.ui.generic.trStyle);
  if(ref53.get() !== null) {
    node48.attr('class', ref53.get());
    subs__.addSub(ref53.addEventListener('change', function(_, ref, val) {
      node48.attr('class', val);
    }));
    
  }
  subs__.addSub(ref53.rebind());
  
  var nodes54 = $("<span>");
  node48.append(nodes54);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl20();
  }));
  
  function renderControl20() {
    subs__.addSub((elements)(function(elements, callback) {
      var root84 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root84); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes54;
      nodes54 = node.contents();
      oldNodes.replaceWith(nodes54);
    }));
  }
  renderControl20();
  root83.append(node48);
  callback(root83); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.cell = function(width, elements, callback) {
  var root85 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node49 = $("<td>");
  
  var ref54 = width;
  if(ref54.get() !== null) {
    node49.attr('width', ref54.get());
    subs__.addSub(ref54.addEventListener('change', function(_, ref, val) {
      node49.attr('width', val);
    }));
    
  }
  subs__.addSub(ref54.rebind());
  
  var ref55 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref55.get() !== null) {
    node49.attr('class', ref55.get());
    subs__.addSub(ref55.addEventListener('change', function(_, ref, val) {
      node49.attr('class', val);
    }));
    
  }
  subs__.addSub(ref55.rebind());
  
  var nodes55 = $("<span>");
  node49.append(nodes55);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl21();
  }));
  
  function renderControl21() {
    subs__.addSub((elements)(function(elements, callback) {
      var root86 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root86); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes55;
      nodes55 = node.contents();
      oldNodes.replaceWith(nodes55);
    }));
  }
  renderControl21();
  root85.append(node49);
  callback(root85); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.col = function(width, elements, callback) {
  var root87 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node50 = $("<td>");
  
  var ref56 = width;
  if(ref56.get() !== null) {
    node50.attr('width', ref56.get());
    subs__.addSub(ref56.addEventListener('change', function(_, ref, val) {
      node50.attr('width', val);
    }));
    
  }
  subs__.addSub(ref56.rebind());
  
  var ref57 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref57.get() !== null) {
    node50.attr('class', ref57.get());
    subs__.addSub(ref57.addEventListener('change', function(_, ref, val) {
      node50.attr('class', val);
    }));
    
  }
  subs__.addSub(ref57.rebind());
  
  var nodes56 = $("<span>");
  node50.append(nodes56);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl22();
  }));
  
  function renderControl22() {
    subs__.addSub((elements)(function(elements, callback) {
      var root88 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root88); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes56;
      nodes56 = node.contents();
      oldNodes.replaceWith(nodes56);
    }));
  }
  renderControl22();
  root87.append(node50);
  callback(root87); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.headerCol = function(width, elements, callback) {
  var root89 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node51 = $("<td>");
  
  var ref58 = width;
  if(ref58.get() !== null) {
    node51.attr('width', ref58.get());
    subs__.addSub(ref58.addEventListener('change', function(_, ref, val) {
      node51.attr('width', val);
    }));
    
  }
  subs__.addSub(ref58.rebind());
  
  var ref59 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref59.get() !== null) {
    node51.attr('class', ref59.get());
    subs__.addSub(ref59.addEventListener('change', function(_, ref, val) {
      node51.attr('class', val);
    }));
    
  }
  subs__.addSub(ref59.rebind());
  
  
  var node52 = $("<strong>");
  
  var nodes57 = $("<span>");
  node52.append(nodes57);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl23();
  }));
  
  function renderControl23() {
    subs__.addSub((elements)(function(elements, callback) {
      var root90 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root90); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes57;
      nodes57 = node.contents();
      oldNodes.replaceWith(nodes57);
    }));
  }
  renderControl23();
  node51.append(node52);
  root89.append(node51);
  callback(root89); return subs__;
  
  
  
  return subs__;
};

mobl.ui.generic.scroller = function(height, elements, callback) {
  var root91 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node53 = $("<div>");
  node53.attr('class', "scroller");
  
  var nodes58 = $("<span>");
  node53.append(nodes58);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl24();
  }));
  
  function renderControl24() {
    subs__.addSub((elements)(function(elements, callback) {
      var root92 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root92); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes58;
      nodes58 = node.contents();
      oldNodes.replaceWith(nodes58);
    }));
  }
  renderControl24();
  root91.append(node53);
  var result__ = mobl.ui.generic.setupScrollers();
  callback(root91); return subs__;
  
  
  return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
setInterval(function() {
              var allScrollers = $("div.scroller");
              for(var i = 0; i < allScrollers.length; i++)
              {
                var scroller = allScrollers.eq(i).data("scroller");
                if(scroller)
                {
                  scroller.setupScroller();
                }
              }
            }, 1000);
}(mobl.ui.generic));