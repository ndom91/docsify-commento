$docsify.plugins = [].concat(function(t) {
    var a = Docsify.dom;
    t.mounted(function(t) {
        var n = a.create("div");
        n.id = "commento";
        var i = a.getNode("#main");
        n.style = "width: " + i.clientWidth + "px !important; margin: 0 auto 20px;", a.appendTo(a.find(".content"), n);
        var e = a.create("script");
        e.src = "[COMMENTO JS URL]", a.appendTo(a.body, e);
    })
}, $docsify.plugins);
