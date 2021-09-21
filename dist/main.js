(() => {
	"use strict";
	var e = {
		d: (t, n) => {
			for (var o in n)
				e.o(n, o) &&
					!e.o(t, o) &&
					Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
		},
		o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
	};
	function t(e) {
		e.className = "tip-button-normal-state";
	}
	function n(e, t) {
		for (var n = 0; n < t.length; n++) {
			var o = t[n];
			(o.enumerable = o.enumerable || !1),
				(o.configurable = !0),
				"value" in o && (o.writable = !0),
				Object.defineProperty(e, o.key, o);
		}
	}
	e.d({}, { n: () => y });
	var o = (function () {
			function e(t) {
				var n = t.custom,
					o = t.bill,
					u = t.people;
				!(function (e, t) {
					if (!(e instanceof t))
						throw new TypeError("Cannot call a class as a function");
				})(this, e),
					(this.custom = n),
					(this.bill = o),
					(this.people = u);
			}
			var t, o, u;
			return (
				(t = e),
				(o = [
					{ key: "calculateTip", value: function () {} },
					{ key: "calculateTotal", value: function () {} },
					{
						key: "calculate",
						value: function () {
							this.calculateTip(), this.calculateTotal();
						},
					},
				]) && n(t.prototype, o),
				u && n(t, u),
				e
			);
		})(),
		u = document.querySelector("#bill"),
		c = document.querySelector("#custom"),
		r = document.querySelector("#people");
	function a(e) {
		var t = u.addEventListener("input", function (e) {
				return Number(e.target.value);
			}),
			n = c.addEventListener("input", function (e) {
				return Number(e.target.value);
			}),
			a = r.addEventListener("input", function (e) {
				return Number(e.target.value);
			});
		new o({ custom: n, bill: t, people: a });
	}
	var l = document.querySelector("#button-5"),
		i = document.querySelector("#button-10"),
		s = document.querySelector("#button-15"),
		m = document.querySelector("#button-25"),
		d = document.querySelector("#button-50"),
		f = document.querySelector("#reset"),
		b = document.querySelector("#bill"),
		p = document.querySelector("#custom"),
		v = document.querySelector("#people"),
		y = [l, i, s, m, d],
		h = [b, p, v];
	y.forEach(function (e) {
		t(e),
			e.addEventListener("click", function () {
				var n;
				((n = e).className = "tip-button-clicked-state"),
					y.forEach(function (e) {
						e !== n && t(e);
					}),
					a();
			});
	}),
		(f.className = "reset-button-normal-state"),
		f.addEventListener("click", function () {
			(f.className = "reset-button-clicked-state"),
				setTimeout(function () {
					f.className = "reset-button-normal-state";
				}, 30);
		}),
		h.forEach(function (e) {
			e.addEventListener("input", function () {
				a();
			});
		});
})();
