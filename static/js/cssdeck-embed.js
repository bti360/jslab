// Generated by CoffeeScript 1.3.3
(function() {
    var e, t, n, r, i, s, o, u, a, f, l, c, h;
    e = {
        host: "http://cssdeck.com",
        url_slug: "",
        version: 0,
        username: "bti360",
        height: 95,
        pane: "output",
        buildUrl: function() {
            var e;
            return e = this.host + "/labs/embed/" + this.url_slug + "/" + this.version + "/" + this.pane, e;
        },
        buildIframeNode: function(e) {
            var t;
            return t = document.createElement("iframe"), t["class"] = "_cssdeck_embed", t.src = e, t.frameborder = "0", t.style.border = "1px solid #3c404b", t.style.width = "101%", t.style.minHeight = this.height + "vh", t;
        }
    },
    r = document.querySelectorAll("._cssdeck_embed"),
    t = r.length,
    o = 0;
    while (o < t) {
        n = r[o],
        l = n.getAttribute("data-href"),
        h = n.getAttribute("data-version"),
        c = n.getAttribute("data-username"),
        f = n.getAttribute("data-pane"),
        s = n.getAttribute("data-height"),
        i = Object.create(e),
        l && (i.url_slug = l),
        h && (i.version = h),
        c && (i.username = c),
        f && (i.pane = f),
        s && (i.height = s),
        a = i.buildUrl(),
        u = i.buildIframeNode(a),
        n.parentNode.replaceChild(u, n),
        ++o;
    }
}).call(this);
