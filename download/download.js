! function(e)
{
	function t(a)
	{
		if (n[a]) return n[a].exports;
		var o = n[a] = {
			exports:
			{},
			id: a,
			loaded: !1
		};
		return e[a].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.p = "", t(0)
}(
{
	0: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}
		var o = n(104),
			i = a(o),
			r = n(127),
			s = a(r),
			c = n(98),
			l = a(c),
			u = n(99),
			p = a(u),
			d = n(130),
			m = a(d),
			f = n(150),
			h = a(f);
		n(12);
		var k = n(97),
			g = n(2883),
			y = n(125),
			v = a(y),
			b = n(103),
			S = a(b),
			P = n(297),
			C = function(e)
			{
				function t()
				{
					return (0, l.default)(this, t), (0, m.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
				}
				return (0, h.default)(t, e), (0, p.default)(t, [
				{
					key: "init",
					value: function()
					{
						this.source = (0, g.getParameterByName)("source"), this.source || (this.source = "Download"), this.targetCampaignId = (0, g.getParameterByName)("ci"), this.targetGCLID = (0, g.getParameterByName)("gclid");
						var e = $.cookie("sc-language") || navigator.language || navigator.userLanguage;
						e = e.toLowerCase();
						var t = this.fetchVideoLang(e);
						this.videoSrc = this._videoPath(t), this.addOneLinkParams(), this.AppStore = new S.default(
						{
							actions: document.querySelectorAll(".stores .action"),
							source: this.source
						}), this.prepareButtons(), this.play.bind(this)()
					}
				},
				{
					key: "fetchVideoLang",
					value: function(e)
					{
						switch (e)
						{
							case "de":
							case "de-de":
								return "de-de";
							case "es":
							case "es-es":
							case "es-mx":
								return "es";
							case "fr":
							case "fr-fr":
								return "fr-fr";
							case "pt":
							case "pt-br":
							case "pt-pt":
								return "pt-br";
							case "ar":
								return "ar";
							default:
								return "en-us"
						}
					}
				},
				{
					key: "getCampaignQueryParam",
					value: function()
					{
						var e = "";
						return this.targetCampaignId && (e = "&my_campaign=" + this.targetCampaignId + "&ref_id=" + this.targetGCLID), e
					}
				},
				{
					key: "addOneLinkParams",
					value: function()
					{
						var e = new URLSearchParams(window.location.search),
							t = e.get("utm_source");
						if (t)
						{
							var n = document.getElementsByClassName("download-button"),
								a = !0,
								o = !1,
								r = void 0;
							try
							{
								for (var s, c = (0, i.default)(n); !(a = (s = c.next()).done); a = !0)
								{
									var l = s.value;
									l.href += "&partner=" + t
								}
							}
							catch (e)
							{
								o = !0, r = e
							}
							finally
							{
								try
								{
									!a && c.return && c.return()
								}
								finally
								{
									if (o) throw r
								}
							}
						}
					}
				},
				{
					key: "redirect",
					value: function(e)
					{
						var t = v.default.apple ? "apple" : "google";
						ga("send", "event", "AppStoreButton", t, this.source), document.location = e
					}
				},
				{
					key: "play",
					value: function()
					{
						var e = this,
							t = this.$("video"),
							n = t.get(0);
						n.src = this.videoSrc, n.load(), t.on("canplaythrough", function()
						{
							e.$(".throbber").hide(), t.addClass("state-ready"), n.play()
						}).on("ended", function()
						{
							n.pause(), t.removeClass("state-ready"), setTimeout(function()
							{
								n.currentTime = 0, n.load(), n.play()
							}, 650)
						})
					}
				},
				{
					key: "prepareButtons",
					value: function()
					{
						var e = this,
							t = document.querySelector(".send-button"),
							n = document.querySelector(".download-button");
						t.addEventListener("click", function()
						{
							e.sendLink()
						}), n.addEventListener("click", function(t)
						{
							t.preventDefault();
							var n = t.target.href;
							n && e.redirect(n)
						})
					}
				},
				{
					key: "validateNumber",
					value: function(e)
					{
						var t = e.replace(/[()-\s]+/g, "");
						return /^[\d-]+$/.test(t) && t.length > 5 && t.length < 15
					}
				},
				{
					key: "getFetchUrl",
					value: function()
					{
						var e = "";
						return this.targetCampaignId && (e = "cid=" + this.targetCampaignId), "" + e
					}
				},
				{
					key: "showInputField",
					value: function()
					{
						document.querySelector(".link-sent").classList.add("no-show"), document.querySelector(".full-disclosure, .input-field").classList.remove("no-show")
					}
				},
				{
					key: "hideInputField",
					value: function()
					{
						document.querySelector(".link-sent").classList.remove("no-show"), document.querySelector(".full-disclosure, .input-field").classList.add("no-show")
					}
				},
				{
					key: "handleSuccess",
					value: function()
					{
						var e = this;
						this.hideInputField(), document.querySelector(".phone-input").value = "", document.querySelector(".invalid-number-client, .invalid-number-server").classList.add("no-show"), setTimeout(function()
						{
							e.showInputField()
						}, 12e4)
					}
				},
				{
					key: "handleFail",
					value: function()
					{
						document.querySelector(".invalid-number-server").classList.remove("no-show")
					}
				},
				{
					key: "tuneLinkRequest",
					value: function()
					{
						var e = "https://launch1.co/serve?action=click&publisher_id=361090&site_id=141230&my_placement=sms&response_format=json" + this.getCampaignQueryParam(),
							t = {
								method: "GET"
							};
						fetch(e, t), this.postSMSLink()
					}
				},
				{
					key: "getIntlPhoneNumber",
					value: function(e, t)
					{
						var n = "1";
						switch (e)
						{
							case "AU":
								n = "61";
								break;
							case "BR":
								n = "55";
								break;
							case "GB":
								n = "44";
								break;
							case "IN":
								n = "91";
								break;
							case "MX":
								n = "52";
								break;
							default:
								n = "1"
						}
						return n + t
					}
				},
				{
					key: "postSMSLink",
					value: function()
					{
						var e = this,
							t = document.querySelector(".phone-input").value,
							n = document.querySelector(".country-select").value,
							a = this.getFetchUrl(),
							o = {
								method: "POST",
								headers:
								{
									"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
								},
								body: "phone_number=" + t + "&country_code=" + n
							},
							i = this.getIntlPhoneNumber(n, t);
						(0, P.enableSnapAnalytics)(i), fetch(a, o).then(function(t)
						{
							t.status >= 200 && t.status < 400 ? e.handleSuccess() : e.handleFail()
						}).catch(function()
						{
							e.handleFail()
						})
					}
				},
				{
					key: "sendLink",
					value: function()
					{
						var e = document.querySelector(".phone-input").value;
						document.querySelector(".country-select").value;
						this.validateNumber(e) ? this.tuneLinkRequest() : document.querySelector(".invalid-number-client").classList.remove("no-show")
					}
				},
				{
					key: "_videoPath",
					value: function()
					{
						return "https://storage.googleapis.com/sartor-web/download/download-phone.mp4"
					}
				}]), t
			}(k.BaseView);
		$(document).ready(function()
		{
			new C(
			{
				el: "#download"
			})
		})
	},
	12: function(e, t, n)
	{
		"use strict";
		n(13), n(17)
	},
	13: function(e, t, n)
	{
		"use strict";
		var a = n(14);
		window.addEventListener("load", function()
		{
			var e = window.document.getElementById("cookiePopupContainer");
			(0, a.initCookiePolicyPopup)(e);
			var t = window.document.getElementById("footerContainer");
			(0, a.initExpandingFooterColumns)(t);
			var n = document.getElementById("headerHamburger");
			(0, a.registerHamburgerEvents)(n)
		})
	},
	14: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.indexOf("localhost") === -1 ? e : d.DEFAULT_DOMAIN
		}

		function o()
		{
			var e = i().toLowerCase(),
				t = d.LOCALES_LOWER_TO_NORMAL[e];
			if (t) return t;
			var n = e.slice(0, 2),
				a = d.LOCALES_LANGUAGE_ONLY_TO_NORMAL[n];
			return a ? a : d.DEFAULT_LOCALE
		}

		function i()
		{
			var e = c(d.COOKIE_KEY_LOCALE);
			if (e) return e;
			for (var t = Object.keys(d.ALL_LOCALES), n = 0, a = t.length; n < a; n++)
			{
				var o = t[n],
					i = new RegExp("\\/".concat(o, "(?:\\/|$)"), "i");
				if (i.test(window.location)) return o
			}
			return navigator.language
		}

		function r(e, t)
		{
			(0, m.setCookie)(d.COOKIE_KEY_LOCALE, e.toLowerCase(), t)
		}

		function s(e, t, n, a)
		{
			var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 750;
			return new Promise(function(t)
			{
				if (!e || "shown" === e.className) return void t();
				var i = c(d.COOKIE_KEY_COOKIES_ACCEPTED);
				if (i) return void t();
				var r = function()
				{
					var o = "shown";
					e.querySelector("#cookiePopupCloseButton").addEventListener("click", function()
					{
						e.classList.remove(o)
					}), e.querySelector("#cookiePopupAcceptEU").addEventListener("click", function()
					{
						(0, m.setCookie)(d.COOKIE_KEY_COOKIES_ACCEPTED, !0, n), (0, m.setCookie)("Preferences", !0, n), (0, m.setCookie)("Performance", !0, n), (0, m.setCookie)("Marketing", !0, n), e.classList.remove(o), a()
					}), e.querySelector("#cookiePopupSettings").addEventListener("click", function()
					{
						e.classList.remove(o)
					}), e.classList.add(o), t()
				};
				try
				{
					fetch("https://www.snapchat.com/cookies/api/is_cookie_popup_eligible").then(function(e)
					{
						if (200 !== e.status)
						{
							var t = e.status,
								n = e.statusText;
							throw new Error("".concat(t, " : ").concat(n))
						}
						return e.json()
					}).then(function(e)
					{
						var i = e.popupEnabled;
						!i || c(d.COOKIE_KEY_COOKIES_ACCEPTED) ? ((0, m.setCookie)(d.COOKIE_KEY_COOKIES_ACCEPTED, !0, n), (0, m.setCookie)("Preferences", !0, n), (0, m.setCookie)("Performance", !0, n), (0, m.setCookie)("Marketing", !0, n), a(), t()) : (console.log("> else"), setTimeout(function()
						{
							return r()
						}, o), t())
					})
				}
				catch (e)
				{
					setTimeout(r, o), t()
				}
			})
		}

		function c(e)
		{
			for (var t = "".concat(e, "="), n = document.cookie.split(";"), a = 0, o = n.length; a < o; a++)
			{
				for (var i = n[a];
					" " === i.charAt(0);) i = i.substring(1, i.length);
				if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
			}
			return null
		}

		function l(e)
		{
			for (var t = e.target; t && (!t.classList || !t.classList.contains("footer-column"));)
			{
				if ("A" === t.tagName) return;
				t = t.parentNode
			}
			t && t.classList.toggle("expanded")
		}

		function u(e)
		{
			e && e.addEventListener("click", l)
		}

		function p(e)
		{
			e && e.addEventListener("click", function(e)
			{
				for (var t = e.target; t && (!t.classList || !t.classList.contains("header-container"));) t = t.parentNode;
				t && t.classList.toggle("hamburger-expanded")
			})
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.getDomainForURLs = a, t.getCurrentLocale = o, t.setLocaleCookie = r, t.initCookiePolicyPopup = s, t.initExpandingFooterColumns = u, t.registerHamburgerEvents = p;
		var d = n(15),
			m = n(16)
	},
	15: function(e, t)
	{
		"use strict";
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.COOKIE_KEY_COOKIES_ACCEPTED = t.COOKIE_KEY_COOKIES_POPUP_DISMISSED = t.COOKIE_KEY_LOCALE = t.UNRESOLVED_STRING = t.LOCALES_LANGUAGE_ONLY_TO_NORMAL = t.LOCALES_LOWER_TO_NORMAL = t.ALL_LOCALES = t.DEFAULT_AVAILABLE_LOCALES = t.LOCALE_ARRAY = t.DEFAULT_COOKIE_ICON_RIGHT = t.DEFAULT_COOKIE_ICON_LEFT = t.DEFAULT_COOKIE_POLICY_URL = t.DEFAULT_SNAP_COM_DOMAIN = t.DEFAULT_LOCALE = t.DEFAULT_DOMAIN = void 0;
		var n = "snapchat.com";
		t.DEFAULT_DOMAIN = n;
		var a = "en-US";
		t.DEFAULT_LOCALE = a;
		var o = "snap.com";
		t.DEFAULT_SNAP_COM_DOMAIN = o;
		var i = "https://www.snap.com/cookie-policy/";
		t.DEFAULT_COOKIE_POLICY_URL = i;
		var r = "https://www.snapchat.com/home/cookie-1.svg";
		t.DEFAULT_COOKIE_ICON_LEFT = r;
		var s = "https://www.snapchat.com/home/cookie-2.svg";
		t.DEFAULT_COOKIE_ICON_RIGHT = s;
		var c = {
			ar:
			{
				name: "العَرَبِية",
				lang: "ar",
				dir: "rtl"
			},
			"id-ID":
			{
				name: "Bahasa Indonesia",
				lang: "id-ID",
				dir: "ltr"
			},
			"da-DK":
			{
				name: "Dansk",
				lang: "da-DK",
				dir: "ltr"
			},
			"de-DE":
			{
				name: "Deutsch",
				lang: "de-DE",
				dir: "ltr"
			},
			"el-GR":
			{
				name: "Ελληνικά",
				lang: "el-GR",
				dir: "ltr"
			},
			"en-GB":
			{
				name: "English (UK)",
				lang: "en-GB",
				dir: "ltr"
			},
			"en-US":
			{
				name: "English (US)",
				lang: "en-US",
				dir: "ltr"
			},
			es:
			{
				name: "Español",
				lang: "es",
				dir: "ltr"
			},
			"fi-FI":
			{
				name: "Suomi",
				lang: "fi-FI",
				dir: "ltr"
			},
			"fil-PH":
			{
				name: "Filipino",
				lang: "fil-PH",
				dir: "ltr"
			},
			"fr-FR":
			{
				name: "Français",
				lang: "fr-FR",
				dir: "ltr"
			},
			"gu-IN":
			{
				name: "ગુજરાતી",
				lang: "gu-IN",
				dir: "ltr"
			},
			"hi-IN":
			{
				name: "हिंदी",
				lang: "hi-IN",
				dir: "ltr"
			},
			"it-IT":
			{
				name: "Italiano",
				lang: "it-IT",
				dir: "ltr"
			},
			"ja-JP":
			{
				name: "日本語",
				lang: "ja-JP",
				dir: "ltr"
			},
			"ko-KR":
			{
				name: "한국어",
				lang: "ko-KR",
				dir: "ltr"
			},
			"mr-IN":
			{
				name: "मराठी",
				lang: "mr-IN",
				dir: "ltr"
			},
			"ms-MY":
			{
				name: "Bahasa Melayu",
				lang: "ms-MY",
				dir: "ltr"
			},
			"nl-NL":
			{
				name: "Nederlands",
				lang: "nl-NL",
				dir: "ltr"
			},
			"nb-NO":
			{
				name: "Norsk",
				lang: "nb-NO",
				dir: "ltr"
			},
			"pl-PL":
			{
				name: "Polski",
				lang: "pl-PL",
				dir: "ltr"
			},
			"pt-BR":
			{
				name: "Português (Brasil)",
				lang: "pt-BR",
				dir: "ltr"
			},
			"pt-PT":
			{
				name: "Português (Portugal)",
				lang: "pt-PT",
				dir: "ltr"
			},
			"ro-RO":
			{
				name: "Română",
				lang: "ro-RO",
				dir: "ltr"
			},
			"ru-RU":
			{
				name: "Русский",
				lang: "ru-RU",
				dir: "ltr"
			},
			"sv-SE":
			{
				name: "Svenska",
				lang: "sv-SE",
				dir: "ltr"
			},
			"tr-TR":
			{
				name: "Türkçe",
				lang: "tr-TR",
				dir: "ltr"
			},
			"ur-PK":
			{
				name: "اردو",
				lang: "ur-PK",
				dir: "rtl"
			},
			"vi-VN":
			{
				name: "Tiếng Việt",
				lang: "vi-VN",
				dir: "ltr"
			},
			"zh-CN":
			{
				name: "中文（简体）",
				lang: "zh-CN",
				dir: "ltr"
			},
			"zh-TW":
			{
				name: "中文（繁體）",
				lang: "zh-TW",
				dir: "ltr"
			}
		};
		t.LOCALE_ARRAY = c;
		var l = ["da-DK", "de-DE", "en-US", "en-GB", "es", "fr-FR", "it-IT", "ja-JP", "nl-NL", "nb-NO", "pt-BR", "fi-FI", "sv-SE"];
		t.DEFAULT_AVAILABLE_LOCALES = l;
		var u = {};
		t.ALL_LOCALES = u;
		var p = {};
		t.LOCALES_LOWER_TO_NORMAL = p;
		var d = {};
		t.LOCALES_LANGUAGE_ONLY_TO_NORMAL = d;
		for (var m = Object.keys(c), f = 0, h = m.length; f < h; f++)
		{
			var k = c[m[f]],
				g = k.lang,
				y = k.name,
				v = g.toLowerCase(),
				b = g.substring(0, 2).toLowerCase();
			u[g] = y, p[v] = g, d[b] = g
		}
		var S = "???";
		t.UNRESOLVED_STRING = S;
		var P = "sc-language";
		t.COOKIE_KEY_LOCALE = P;
		var C = "sc-cookies-popup-dismissed";
		t.COOKIE_KEY_COOKIES_POPUP_DISMISSED = C;
		var O = "sc-cookies-accepted";
		t.COOKIE_KEY_COOKIES_ACCEPTED = O
	},
	16: function(e, t)
	{
		"use strict";

		function n(e)
		{
			function t(e)
			{
				return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1")
			}
			var n = document.cookie.match(RegExp("(?:^|;\\s*)" + t(e) + "=([^;]*)"));
			return n ? JSON.parse(n[1]) : void 0
		}

		function a(e, t)
		{
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
				a = new Date;
			a.setDate(a.getDate() + 365);
			var o = "".concat(e, "=").concat(t, "; Path =/; Expires=").concat(a.toUTCString(), "; domain=").concat(n, ";");
			(n && "localhost" !== n || !n && "localhost" !== location.hostname) && (o += " Secure;"), document.cookie = o
		}

		function o(e, t, n)
		{
			window && (window["ga-disable-UA-".concat(t)] = !1, function(e, t, n, a, o)
			{
				e[a] = e[a] || [], e[a].push(
				{
					"gtm.start": (new Date).getTime(),
					event: "gtm.js"
				});
				var i = t.getElementsByTagName(n)[0],
					r = t.createElement(n),
					s = "dataLayer" != a ? "&l=" + a : "";
				r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=" + o + s, i.parentNode.insertBefore(r, i)
			}(window, document, "script", "dataLayer", e), n && n())
		}

		function i(e, t, n)
		{
			window && (window["ga-disable-UA-".concat(e)] = !1, function(e, t, n, a, o, i, r)
			{
				e.GoogleAnalyticsObject = o, e[o] = e[o] || function()
				{
					(e[o].q = e[o].q || []).push(arguments)
				}, e[o].l = 1 * new Date, i = t.createElement(n), r = t.getElementsByTagName(n)[0], i.async = 1, i.src = a, r.parentNode.insertBefore(i, r)
			}(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-".concat(e), "auto"), t.forEach(function(e)
			{
				ga("require", e.name, e.options)
			}), ga("set", "anonymizeIp", !0), ga("send", "pageview"), n && n())
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.__getCookie = n, t.setCookie = a, t.enableGoogleTagManager = o, t.enableGoogleAnalytics = i
	},
	17: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}

		function o()
		{
			new m.default(
			{
				actions: document.querySelectorAll(".footer-container [data-vendor]"),
				source: "Footer"
			});
			var e = window.document.getElementById("sc-global-locale-selector");
			e.addEventListener("change", function(e)
			{
				var t = e.target.value;
				i(t)
			})
		}

		function i(e)
		{
			(0, u.setLocaleCookie)(e, "snapchat.com"), r(e)
		}

		function r(e)
		{
			var t = new RegExp("/l/(" + p.LOCALE.X_LANGUAGES + ")", "ig"),
				n = l(location.pathname),
				a = c(n).replace(t, ""),
				o = void 0;
			o = "en-US" !== e && p.LOCALE.PAGES.indexOf(s(a)) > -1 ? "/l/" + e.toLowerCase() + a : a, n !== o && (o = location.search ? o + location.search : o, window.location = o)
		}

		function s(e)
		{
			return e.replace(/^\/|\/$/g, "")
		}

		function c(e)
		{
			return e.replace(/\/\/+/g, "/")
		}

		function l(e)
		{
			return e.replace(/\/?$/, "/")
		}
		var u = n(18),
			p = n(60),
			d = (n(97), n(103)),
			m = a(d),
			f = (0, u.getCurrentLocale)();
		f && p.LOCALE.LANGUAGES_ARRAY.indexOf(f) > -1 && r(f), window.addEventListener("load", function()
		{
			o()
		})
	},
	18: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), Object.defineProperty(t, "SnapchatHeader",
		{
			enumerable: !0,
			get: function()
			{
				return o.default
			}
		}), Object.defineProperty(t, "SnapchatFooter",
		{
			enumerable: !0,
			get: function()
			{
				return i.default
			}
		}), Object.defineProperty(t, "CookiePopup",
		{
			enumerable: !0,
			get: function()
			{
				return r.default
			}
		}), Object.defineProperty(t, "CookieSettings",
		{
			enumerable: !0,
			get: function()
			{
				return s.default
			}
		}), Object.defineProperty(t, "initCookiePolicyPopup",
		{
			enumerable: !0,
			get: function()
			{
				return c.initCookiePolicyPopup
			}
		}), Object.defineProperty(t, "getCurrentLocale",
		{
			enumerable: !0,
			get: function()
			{
				return c.getCurrentLocale
			}
		}), Object.defineProperty(t, "setLocaleCookie",
		{
			enumerable: !0,
			get: function()
			{
				return c.setLocaleCookie
			}
		}), Object.defineProperty(t, "initExpandingFooterColumns",
		{
			enumerable: !0,
			get: function()
			{
				return c.initExpandingFooterColumns
			}
		}), Object.defineProperty(t, "registerHamburgerEvents",
		{
			enumerable: !0,
			get: function()
			{
				return c.registerHamburgerEvents
			}
		}), Object.defineProperty(t, "__getCookie",
		{
			enumerable: !0,
			get: function()
			{
				return l.__getCookie
			}
		});
		var o = a(n(19)),
			i = a(n(56)),
			r = a(n(57)),
			s = a(n(58)),
			c = n(14),
			l = n(16)
	},
	19: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}

		function o(e)
		{
			return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e)
			{
				return typeof e
			} : function(e)
			{
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function i(e, t)
		{
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function r(e, t)
		{
			for (var n = 0; n < t.length; n++)
			{
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}

		function s(e, t, n)
		{
			return t && r(e.prototype, t), n && r(e, n), e
		}

		function c(e, t)
		{
			return !t || "object" !== o(t) && "function" != typeof t ? l(e) : t
		}

		function l(e)
		{
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function u(e)
		{
			return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e)
			{
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function p(e, t)
		{
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype,
			{
				constructor:
				{
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && d(e, t)
		}

		function d(e, t)
		{
			return (d = Object.setPrototypeOf || function(e, t)
			{
				return e.__proto__ = t, e
			})(e, t)
		}

		function m(e, t, n)
		{
			return t in e ? Object.defineProperty(e, t,
			{
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.default = void 0;
		var f = a(n(20)),
			h = a(n(52)),
			k = n(15),
			g = n(14),
			y = a(n(54)),
			v = function(e)
			{
				function t()
				{
					return i(this, t), c(this, u(t).apply(this, arguments))
				}
				return p(t, e), s(t, [
				{
					key: "render",
					value: function()
					{
						var e = "\n      .header-container {\n        position: fixed;\n        width: 100%;\n        font-size: 14px;\n        background-color: #FFFC00;\n        height: 46px;\n        line-height: 46px;\n        z-index: 1000;\n      }\n\n      .globalnav-container {\n        width: 92.3%;\n        max-width: 1070px;\n        margin: auto;\n      }\n\n      .globalnav-container .globalnav-item {\n        margin-right: 24px;\n        display: inline;\n        padding: 2px;\n      }\n\n      .globalnav-container .globalnav-item:hover {\n        border-bottom: 2px solid rgba(38, 38, 38, 0.5);\n      }\n\n      .sc-header-selected-home .globalnav-home-link,\n      .sc-header-selected-create .globalnav-create-link,\n      .sc-header-selected-live .globalnav-live-link,\n      .sc-header-selected-snapcodes .globalnav-snapcodes-link,\n      .sc-header-selected-ads .globalnav-ads-link,\n      .sc-header-selected-download .globalnav-download-link {\n        border-bottom: 2px solid rgb(38, 38, 38);\n      }\n\n      .globalnav-container .globalnav-link {\n        color: rgb(38, 38, 38);\n        font-weight: 500;\n        text-decoration: none;\n        line-height: 22px;\n        font-size: 14px;\n        letter-spacing: .05px;\n      }\n\n      .globalnav-container .globalnav-ghost-icon-link {\n        position: absolute;\n        top: 9px;\n      }\n\n      .globalnav-container .globalnav-home-link {\n        visibility: hidden;\n      }\n\n      .header-hamburger {\n        display: none;\n      }\n\n      .sc-header-replace-ghost-home-with-text .globalnav-container .globalnav-ghost-icon-link {\n        display: none;\n      }\n      .sc-header-replace-ghost-home-with-text .globalnav-container .globalnav-home-link {\n        visibility: inherit;\n      }\n      .sc-header-white .header-container,\n      .sc-header-white.header-container {\n        background-color: white;\n      }\n\n      @media (min-width: 1070px) {\n        .sc-header-white .header-container,\n        .sc-header-white.header-container {\n          border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n        }\n      }\n\n      @media (max-width: 1070px) {\n        .globalnav-container {\n          position: absolute;\n          top: 46px;\n          width: 100%;\n          border-top: 1px solid #D4D4D4;\n          border-radius: 2px;\n          max-height: 0;\n          transition: max-height .25s ease-in-out;\n          overflow: hidden;\n        }\n        .globalnav-container .globalnav-ghost-icon-link {\n          display: none;\n        }\n\n        .hamburger-expanded .globalnav-container {\n          border-bottom: 1px solid #D4D4D4;\n          max-height: 513px;\n        }\n\n        .globalnav-container .globalnav-home-link {\n          visibility: inherit;\n        }\n\n        /* a hover selector to overwrite desktop hover hightlight */\n        .globalnav-container .globalnav-item,\n        .globalnav-container .globalnav-item:hover {\n          display: block;\n          width: 100%;\n          padding: 0;\n          text-align: right;\n          background-color: white;\n          border-bottom: 1px solid #F8F9FB;\n        }\n\n        .globalnav-container .globalnav-item:hover {\n          background-color: #F8F9FB;\n        }\n\n        .globalnav-container .globalnav-item .globalnav-link {\n          display: block;\n          padding-right: 13px;\n          line-height: 46px;\n        }\n\n        .sc-header-selected-home .globalnav-home-link,\n        .sc-header-selected-create .globalnav-create-link,\n        .sc-header-selected-live .globalnav-live-link,\n        .sc-header-selected-snapcodes .globalnav-snapcodes-link,\n        .sc-header-selected-ads .globalnav-ads-link,\n        .sc-header-selected-download .globalnav-download-link {\n          background-color: #F8F9FB;\n        }\n\n        .header-hamburger {\n          display: block;\n          width: 20px;\n          height: 15px;\n          line-height: 15px;\n          position: relative;\n          top: 14px;\n          right: 15px;\n          float: right;\n          margin: 0;\n          transform: rotate(0deg);\n          cursor: pointer;\n        }\n\n        .header-hamburger span {\n          display: block;\n          position: absolute;\n          height: 2.5px;\n          width: 100%;\n          background: rgb(38, 38, 38);\n          box-sizing: border-box;\n          border-radius: 1px;\n          opacity: 1;\n          left: 0;\n          transform: rotate(0deg);\n          transition: .25s ease-in-out;\n          transition-property: transform, opacity;\n        }\n\n        .header-hamburger span:nth-child(1) {\n          top: 0px;\n          transform-origin: left center;\n        }\n\n        .header-hamburger span:nth-child(2) {\n          top: 6px;\n          transform-origin: left center;\n        }\n\n        .header-hamburger span:nth-child(3) {\n          top: 12px;\n          transform-origin: left center;\n        }\n\n        .hamburger-expanded .header-hamburger span:nth-child(1) {\n          transform: rotate(45deg) translateY(-1.5px);\n        }\n\n        .hamburger-expanded .header-hamburger span:nth-child(2) {\n          transform: scaleX(0);\n          opacity: 0;\n        }\n\n        .hamburger-expanded .header-hamburger span:nth-child(3) {\n          transform: rotate(-45deg) translateY(1px);\n        }\n      }\n    ",
							t = (0, g.getDomainForURLs)(this.props.domain),
							n = this.createStringSelector(),
							a = this.getLocaleUrlSuffixForWWW();
						return f.default.createElement("div",
						{
							style:
							{
								height: 46
							}
						}, f.default.createElement("style", null, e), f.default.createElement("div",
						{
							className: "header-container"
						}, f.default.createElement("div",
						{
							className: "header-hamburger",
							id: "headerHamburger",
							ref: g.registerHamburgerEvents
						}, f.default.createElement("span", null), f.default.createElement("span", null), f.default.createElement("span", null)), f.default.createElement("div",
						{
							className: "globalnav-container"
						}, f.default.createElement("a",
						{
							href: "https://www.".concat(t, "/").concat(a),
							className: "globalnav-ghost-icon-link"
						}, f.default.createElement("img",
						{
							src: "https://www.".concat(t, "/static/style-guide/images/ghost/ghost.svg"),
							alt: n("Snapchat"),
							style:
							{
								height: 64
							}
						})), f.default.createElement("div",
						{
							className: "globalnav-item globalnav-home-link"
						}, f.default.createElement("a",
						{
							className: "globalnav-link",
							href: "https://www.".concat(t, "/").concat(a)
						}, n("Home"))), f.default.createElement("div",
						{
							className: "globalnav-item globalnav-ads-link"
						}, f.default.createElement("a",
						{
							className: "globalnav-link",
							href: "https://www.".concat(t, "/").concat(a, "ads")
						}, n("Ads"))), f.default.createElement("div",
						{
							className: "globalnav-item globalnav-spectacles-link"
						}, f.default.createElement("a",
						{
							className: "globalnav-link",
							href: "https://www.spectacles.com"
						}, n("Spectacles"))), f.default.createElement("div",
						{
							className: "globalnav-item globalnav-create-link"
						}, f.default.createElement("a",
						{
							className: "globalnav-link",
							href: "https://www.".concat(t, "/").concat(a, "create")
						}, n("Create"))), f.default.createElement("div",
						{
							className: "globalnav-item globalnav-download-link"
						}, f.default.createElement("a",
						{
							className: "globalnav-link",
							href: "https://www.".concat(t, "/").concat(a, "download")
						}, n("Download"))), f.default.createElement("div",
						{
							className: "globalnav-item globalnav-store-link"
						}, f.default.createElement("a",
						{
							className: "globalnav-link",
							href: "https://store.".concat(t)
						}, n("Store"))), f.default.createElement("div",
						{
							className: "globalnav-item globalnav-stories-link"
						}, f.default.createElement("a",
						{
							className: "globalnav-link",
							href: "https://story.".concat(t)
						}, n("Stories"))), f.default.createElement("div",
						{
							className: "globalnav-item globalnav-map-link"
						}, f.default.createElement("a",
						{
							className: "globalnav-link",
							href: "https://map.".concat(t)
						}, n("Map"))), f.default.createElement("div",
						{
							className: "globalnav-item globalnav-lensstudio-link"
						}, f.default.createElement("a",
						{
							className: "globalnav-link",
							href: "https://lensstudio.".concat(t)
						}, n("Lens Studio"))), f.default.createElement("div",
						{
							className: "globalnav-item globalnav-kit-link"
						}, f.default.createElement("a",
						{
							className: "globalnav-link",
							href: "https://kit.".concat(t)
						}, n("Kit"))), f.default.createElement("div",
						{
							className: "globalnav-item globalnav-snapcodes-link"
						}, f.default.createElement("a",
						{
							className: "globalnav-link",
							href: "https://scan.".concat(t)
						}, n("Snapcodes"))))))
					}
				}]), t
			}(y.default);
		t.default = v, m(v, "propTypes",
		{
			domain: h.default.string,
			locale: h.default.string
		}), m(v, "defaultProps",
		{
			domain: k.DEFAULT_DOMAIN,
			locale: null
		})
	},
	20: function(e, t, n)
	{
		"use strict";
		e.exports = n(21)
	},
	21: function(e, t, n)
	{
		"use strict";
		var a = n(22),
			o = n(23),
			i = n(32),
			r = n(40),
			s = n(34),
			c = n(41),
			l = n(48),
			u = n(49),
			p = n(51),
			d = s.createElement,
			m = s.createFactory,
			f = s.cloneElement,
			h = a,
			k = function(e)
			{
				return e
			},
			g = {
				Children:
				{
					map: i.map,
					forEach: i.forEach,
					count: i.count,
					toArray: i.toArray,
					only: p
				},
				Component: o.Component,
				PureComponent: o.PureComponent,
				createElement: d,
				cloneElement: f,
				isValidElement: s.isValidElement,
				PropTypes: c,
				createClass: u,
				createFactory: m,
				createMixin: k,
				DOM: r,
				version: l,
				__spread: h
			};
		e.exports = g
	},
	22: function(e, t)
	{
		/*
			object-assign
			(c) Sindre Sorhus
			@license MIT
			*/
		"use strict";

		function n(e)
		{
			if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
			return Object(e)
		}

		function a()
		{
			try
			{
				if (!Object.assign) return !1;
				var e = new String("abc");
				if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
				for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
				var a = Object.getOwnPropertyNames(t).map(function(e)
				{
					return t[e]
				});
				if ("0123456789" !== a.join("")) return !1;
				var o = {};
				return "abcdefghijklmnopqrst".split("").forEach(function(e)
				{
					o[e] = e
				}), "abcdefghijklmnopqrst" === Object.keys(Object.assign(
				{}, o)).join("")
			}
			catch (e)
			{
				return !1
			}
		}
		var o = Object.getOwnPropertySymbols,
			i = Object.prototype.hasOwnProperty,
			r = Object.prototype.propertyIsEnumerable;
		e.exports = a() ? Object.assign : function(e, t)
		{
			for (var a, s, c = n(e), l = 1; l < arguments.length; l++)
			{
				a = Object(arguments[l]);
				for (var u in a) i.call(a, u) && (c[u] = a[u]);
				if (o)
				{
					s = o(a);
					for (var p = 0; p < s.length; p++) r.call(a, s[p]) && (c[s[p]] = a[s[p]])
				}
			}
			return c
		}
	},
	23: function(e, t, n)
	{
		"use strict";

		function a(e, t, n)
		{
			this.props = e, this.context = t, this.refs = l, this.updater = n || c
		}

		function o(e, t, n)
		{
			this.props = e, this.context = t, this.refs = l, this.updater = n || c
		}

		function i()
		{}
		var r = n(24),
			s = n(22),
			c = n(25),
			l = (n(28), n(29));
		n(30), n(31);
		a.prototype.isReactComponent = {}, a.prototype.setState = function(e, t)
		{
			"object" != typeof e && "function" != typeof e && null != e ? r("85") : void 0, this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, "setState")
		}, a.prototype.forceUpdate = function(e)
		{
			this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate")
		};
		i.prototype = a.prototype, o.prototype = new i, o.prototype.constructor = o, s(o.prototype, a.prototype), o.prototype.isPureReactComponent = !0, e.exports = {
			Component: a,
			PureComponent: o
		}
	},
	24: function(e, t)
	{
		"use strict";

		function n(e)
		{
			for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, a = 0; a < t; a++) n += "&args[]=" + encodeURIComponent(arguments[a + 1]);
			n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
			var o = new Error(n);
			throw o.name = "Invariant Violation", o.framesToPop = 1, o
		}
		e.exports = n
	},
	25: function(e, t, n)
	{
		"use strict";

		function a(e, t)
		{}
		var o = (n(26),
		{
			isMounted: function(e)
			{
				return !1
			},
			enqueueCallback: function(e, t) {},
			enqueueForceUpdate: function(e)
			{
				a(e, "forceUpdate")
			},
			enqueueReplaceState: function(e, t)
			{
				a(e, "replaceState")
			},
			enqueueSetState: function(e, t)
			{
				a(e, "setState")
			}
		});
		e.exports = o
	},
	26: function(e, t, n)
	{
		"use strict";
		var a = n(27),
			o = a;
		e.exports = o
	},
	27: function(e, t)
	{
		"use strict";

		function n(e)
		{
			return function()
			{
				return e
			}
		}
		var a = function() {};
		a.thatReturns = n, a.thatReturnsFalse = n(!1), a.thatReturnsTrue = n(!0), a.thatReturnsNull = n(null), a.thatReturnsThis = function()
		{
			return this
		}, a.thatReturnsArgument = function(e)
		{
			return e
		}, e.exports = a
	},
	28: function(e, t, n)
	{
		"use strict";
		var a = !1;
		e.exports = a
	},
	29: function(e, t, n)
	{
		"use strict";
		var a = {};
		e.exports = a
	},
	30: function(e, t, n)
	{
		"use strict";

		function a(e, t, n, a, i, r, s, c)
		{
			if (o(t), !e)
			{
				var l;
				if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
				else
				{
					var u = [n, a, i, r, s, c],
						p = 0;
					l = new Error(t.replace(/%s/g, function()
					{
						return u[p++]
					})), l.name = "Invariant Violation"
				}
				throw l.framesToPop = 1, l
			}
		}
		var o = function(e) {};
		e.exports = a
	},
	31: function(e, t, n)
	{
		"use strict";
		var a = function() {};
		e.exports = a
	},
	32: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return ("" + e).replace(b, "$&/")
		}

		function o(e, t)
		{
			this.func = e, this.context = t, this.count = 0
		}

		function i(e, t, n)
		{
			var a = e.func,
				o = e.context;
			a.call(o, t, e.count++)
		}

		function r(e, t, n)
		{
			if (null == e) return e;
			var a = o.getPooled(t, n);
			g(e, i, a), o.release(a)
		}

		function s(e, t, n, a)
		{
			this.result = e, this.keyPrefix = t, this.func = n, this.context = a, this.count = 0
		}

		function c(e, t, n)
		{
			var o = e.result,
				i = e.keyPrefix,
				r = e.func,
				s = e.context,
				c = r.call(s, t, e.count++);
			Array.isArray(c) ? l(c, o, n, k.thatReturnsArgument) : null != c && (h.isValidElement(c) && (c = h.cloneAndReplaceKey(c, i + (!c.key || t && t.key === c.key ? "" : a(c.key) + "/") + n)), o.push(c))
		}

		function l(e, t, n, o, i)
		{
			var r = "";
			null != n && (r = a(n) + "/");
			var l = s.getPooled(t, r, o, i);
			g(e, c, l), s.release(l)
		}

		function u(e, t, n)
		{
			if (null == e) return e;
			var a = [];
			return l(e, a, null, t, n), a
		}

		function p(e, t, n)
		{
			return null
		}

		function d(e, t)
		{
			return g(e, p, null)
		}

		function m(e)
		{
			var t = [];
			return l(e, t, null, k.thatReturnsArgument), t
		}
		var f = n(33),
			h = n(34),
			k = n(27),
			g = n(37),
			y = f.twoArgumentPooler,
			v = f.fourArgumentPooler,
			b = /\/+/g;
		o.prototype.destructor = function()
		{
			this.func = null, this.context = null, this.count = 0
		}, f.addPoolingTo(o, y), s.prototype.destructor = function()
		{
			this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
		}, f.addPoolingTo(s, v);
		var S = {
			forEach: r,
			map: u,
			mapIntoWithKeyPrefixInternal: l,
			count: d,
			toArray: m
		};
		e.exports = S
	},
	33: function(e, t, n)
	{
		"use strict";
		var a = n(24),
			o = (n(30), function(e)
			{
				var t = this;
				if (t.instancePool.length)
				{
					var n = t.instancePool.pop();
					return t.call(n, e), n
				}
				return new t(e)
			}),
			i = function(e, t)
			{
				var n = this;
				if (n.instancePool.length)
				{
					var a = n.instancePool.pop();
					return n.call(a, e, t), a
				}
				return new n(e, t)
			},
			r = function(e, t, n)
			{
				var a = this;
				if (a.instancePool.length)
				{
					var o = a.instancePool.pop();
					return a.call(o, e, t, n), o
				}
				return new a(e, t, n)
			},
			s = function(e, t, n, a)
			{
				var o = this;
				if (o.instancePool.length)
				{
					var i = o.instancePool.pop();
					return o.call(i, e, t, n, a), i
				}
				return new o(e, t, n, a)
			},
			c = function(e)
			{
				var t = this;
				e instanceof t ? void 0 : a("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
			},
			l = 10,
			u = o,
			p = function(e, t)
			{
				var n = e;
				return n.instancePool = [], n.getPooled = t || u, n.poolSize || (n.poolSize = l), n.release = c, n
			},
			d = {
				addPoolingTo: p,
				oneArgumentPooler: o,
				twoArgumentPooler: i,
				threeArgumentPooler: r,
				fourArgumentPooler: s
			};
		e.exports = d
	},
	34: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return void 0 !== e.ref
		}

		function o(e)
		{
			return void 0 !== e.key
		}
		var i = n(22),
			r = n(35),
			s = (n(26), n(28), Object.prototype.hasOwnProperty),
			c = n(36),
			l = {
				key: !0,
				ref: !0,
				__self: !0,
				__source: !0
			},
			u = function(e, t, n, a, o, i, r)
			{
				var s = {
					$$typeof: c,
					type: e,
					key: t,
					ref: n,
					props: r,
					_owner: i
				};
				return s
			};
		u.createElement = function(e, t, n)
		{
			var i, c = {},
				p = null,
				d = null,
				m = null,
				f = null;
			if (null != t)
			{
				a(t) && (d = t.ref), o(t) && (p = "" + t.key), m = void 0 === t.__self ? null : t.__self, f = void 0 === t.__source ? null : t.__source;
				for (i in t) s.call(t, i) && !l.hasOwnProperty(i) && (c[i] = t[i])
			}
			var h = arguments.length - 2;
			if (1 === h) c.children = n;
			else if (h > 1)
			{
				for (var k = Array(h), g = 0; g < h; g++) k[g] = arguments[g + 2];
				c.children = k
			}
			if (e && e.defaultProps)
			{
				var y = e.defaultProps;
				for (i in y) void 0 === c[i] && (c[i] = y[i])
			}
			return u(e, p, d, m, f, r.current, c)
		}, u.createFactory = function(e)
		{
			var t = u.createElement.bind(null, e);
			return t.type = e, t
		}, u.cloneAndReplaceKey = function(e, t)
		{
			var n = u(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
			return n
		}, u.cloneElement = function(e, t, n)
		{
			var c, p = i(
				{}, e.props),
				d = e.key,
				m = e.ref,
				f = e._self,
				h = e._source,
				k = e._owner;
			if (null != t)
			{
				a(t) && (m = t.ref, k = r.current), o(t) && (d = "" + t.key);
				var g;
				e.type && e.type.defaultProps && (g = e.type.defaultProps);
				for (c in t) s.call(t, c) && !l.hasOwnProperty(c) && (void 0 === t[c] && void 0 !== g ? p[c] = g[c] : p[c] = t[c])
			}
			var y = arguments.length - 2;
			if (1 === y) p.children = n;
			else if (y > 1)
			{
				for (var v = Array(y), b = 0; b < y; b++) v[b] = arguments[b + 2];
				p.children = v
			}
			return u(e.type, d, m, f, h, k, p)
		}, u.isValidElement = function(e)
		{
			return "object" == typeof e && null !== e && e.$$typeof === c
		}, e.exports = u
	},
	35: function(e, t)
	{
		"use strict";
		var n = {
			current: null
		};
		e.exports = n
	},
	36: function(e, t)
	{
		"use strict";
		var n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
		e.exports = n
	},
	37: function(e, t, n)
	{
		"use strict";

		function a(e, t)
		{
			return e && "object" == typeof e && null != e.key ? l.escape(e.key) : t.toString(36)
		}

		function o(e, t, n, i)
		{
			var d = typeof e;
			if ("undefined" !== d && "boolean" !== d || (e = null), null === e || "string" === d || "number" === d || "object" === d && e.$$typeof === s) return n(i, e, "" === t ? u + a(e, 0) : t), 1;
			var m, f, h = 0,
				k = "" === t ? u : t + p;
			if (Array.isArray(e))
				for (var g = 0; g < e.length; g++) m = e[g], f = k + a(m, g), h += o(m, f, n, i);
			else
			{
				var y = c(e);
				if (y)
				{
					var v, b = y.call(e);
					if (y !== e.entries)
						for (var S = 0; !(v = b.next()).done;) m = v.value, f = k + a(m, S++), h += o(m, f, n, i);
					else
						for (; !(v = b.next()).done;)
						{
							var P = v.value;
							P && (m = P[1], f = k + l.escape(P[0]) + p + a(m, 0), h += o(m, f, n, i))
						}
				}
				else if ("object" === d)
				{
					var C = "",
						O = String(e);
					r("31", "[object Object]" === O ? "object with keys {" + Object.keys(e).join(", ") + "}" : O, C)
				}
			}
			return h
		}

		function i(e, t, n)
		{
			return null == e ? 0 : o(e, "", t, n)
		}
		var r = n(24),
			s = (n(35), n(36)),
			c = n(38),
			l = (n(30), n(39)),
			u = (n(26), "."),
			p = ":";
		e.exports = i
	},
	38: function(e, t)
	{
		"use strict";

		function n(e)
		{
			var t = e && (a && e[a] || e[o]);
			if ("function" == typeof t) return t
		}
		var a = "function" == typeof Symbol && Symbol.iterator,
			o = "@@iterator";
		e.exports = n
	},
	39: function(e, t)
	{
		"use strict";

		function n(e)
		{
			var t = /[=:]/g,
				n = {
					"=": "=0",
					":": "=2"
				},
				a = ("" + e).replace(t, function(e)
				{
					return n[e]
				});
			return "$" + a
		}

		function a(e)
		{
			var t = /(=0|=2)/g,
				n = {
					"=0": "=",
					"=2": ":"
				},
				a = "." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1);
			return ("" + a).replace(t, function(e)
			{
				return n[e]
			})
		}
		var o = {
			escape: n,
			unescape: a
		};
		e.exports = o
	},
	40: function(e, t, n)
	{
		"use strict";
		var a = n(34),
			o = a.createFactory,
			i = {
				a: o("a"),
				abbr: o("abbr"),
				address: o("address"),
				area: o("area"),
				article: o("article"),
				aside: o("aside"),
				audio: o("audio"),
				b: o("b"),
				base: o("base"),
				bdi: o("bdi"),
				bdo: o("bdo"),
				big: o("big"),
				blockquote: o("blockquote"),
				body: o("body"),
				br: o("br"),
				button: o("button"),
				canvas: o("canvas"),
				caption: o("caption"),
				cite: o("cite"),
				code: o("code"),
				col: o("col"),
				colgroup: o("colgroup"),
				data: o("data"),
				datalist: o("datalist"),
				dd: o("dd"),
				del: o("del"),
				details: o("details"),
				dfn: o("dfn"),
				dialog: o("dialog"),
				div: o("div"),
				dl: o("dl"),
				dt: o("dt"),
				em: o("em"),
				embed: o("embed"),
				fieldset: o("fieldset"),
				figcaption: o("figcaption"),
				figure: o("figure"),
				footer: o("footer"),
				form: o("form"),
				h1: o("h1"),
				h2: o("h2"),
				h3: o("h3"),
				h4: o("h4"),
				h5: o("h5"),
				h6: o("h6"),
				head: o("head"),
				header: o("header"),
				hgroup: o("hgroup"),
				hr: o("hr"),
				html: o("html"),
				i: o("i"),
				iframe: o("iframe"),
				img: o("img"),
				input: o("input"),
				ins: o("ins"),
				kbd: o("kbd"),
				keygen: o("keygen"),
				label: o("label"),
				legend: o("legend"),
				li: o("li"),
				link: o("link"),
				main: o("main"),
				map: o("map"),
				mark: o("mark"),
				menu: o("menu"),
				menuitem: o("menuitem"),
				meta: o("meta"),
				meter: o("meter"),
				nav: o("nav"),
				noscript: o("noscript"),
				object: o("object"),
				ol: o("ol"),
				optgroup: o("optgroup"),
				option: o("option"),
				output: o("output"),
				p: o("p"),
				param: o("param"),
				picture: o("picture"),
				pre: o("pre"),
				progress: o("progress"),
				q: o("q"),
				rp: o("rp"),
				rt: o("rt"),
				ruby: o("ruby"),
				s: o("s"),
				samp: o("samp"),
				script: o("script"),
				section: o("section"),
				select: o("select"),
				small: o("small"),
				source: o("source"),
				span: o("span"),
				strong: o("strong"),
				style: o("style"),
				sub: o("sub"),
				summary: o("summary"),
				sup: o("sup"),
				table: o("table"),
				tbody: o("tbody"),
				td: o("td"),
				textarea: o("textarea"),
				tfoot: o("tfoot"),
				th: o("th"),
				thead: o("thead"),
				time: o("time"),
				title: o("title"),
				tr: o("tr"),
				track: o("track"),
				u: o("u"),
				ul: o("ul"),
				var: o("var"),
				video: o("video"),
				wbr: o("wbr"),
				circle: o("circle"),
				clipPath: o("clipPath"),
				defs: o("defs"),
				ellipse: o("ellipse"),
				g: o("g"),
				image: o("image"),
				line: o("line"),
				linearGradient: o("linearGradient"),
				mask: o("mask"),
				path: o("path"),
				pattern: o("pattern"),
				polygon: o("polygon"),
				polyline: o("polyline"),
				radialGradient: o("radialGradient"),
				rect: o("rect"),
				stop: o("stop"),
				svg: o("svg"),
				text: o("text"),
				tspan: o("tspan")
			};
		e.exports = i
	},
	41: function(e, t, n)
	{
		"use strict";
		var a = n(34),
			o = a.isValidElement,
			i = n(42);
		e.exports = i(o)
	},
	42: function(e, t, n)
	{
		"use strict";
		var a = n(43);
		e.exports = function(e)
		{
			var t = !1;
			return a(e, t)
		}
	},
	43: function(e, t, n)
	{
		"use strict";

		function a()
		{
			return null
		}
		var o = n(44),
			i = n(22),
			r = n(46),
			s = n(47),
			c = Function.call.bind(Object.prototype.hasOwnProperty),
			l = function() {};
		e.exports = function(e, t)
		{
			function n(e)
			{
				var t = e && (A && e[A] || e[x]);
				if ("function" == typeof t) return t
			}

			function u(e, t)
			{
				return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
			}

			function p(e)
			{
				this.message = e, this.stack = ""
			}

			function d(e)
			{
				function n(n, a, o, i, s, c, l)
				{
					if (i = i || N, c = c || o, l !== r)
					{
						if (t)
						{
							var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
							throw u.name = "Invariant Violation", u
						}
					}
					return null == a[o] ? n ? new p(null === a[o] ? "The " + s + " `" + c + "` is marked as required " + ("in `" + i + "`, but its value is `null`.") : "The " + s + " `" + c + "` is marked as required in " + ("`" + i + "`, but its value is `undefined`.")) : null : e(a, o, i, s, c)
				}
				var a = n.bind(null, !1);
				return a.isRequired = n.bind(null, !0), a
			}

			function m(e)
			{
				function t(t, n, a, o, i, r)
				{
					var s = t[n],
						c = T(s);
					if (c !== e)
					{
						var l = E(s);
						return new p("Invalid " + o + " `" + i + "` of type " + ("`" + l + "` supplied to `" + a + "`, expected ") + ("`" + e + "`."))
					}
					return null
				}
				return d(t)
			}

			function f()
			{
				return d(a)
			}

			function h(e)
			{
				function t(t, n, a, o, i)
				{
					if ("function" != typeof e) return new p("Property `" + i + "` of component `" + a + "` has invalid PropType notation inside arrayOf.");
					var s = t[n];
					if (!Array.isArray(s))
					{
						var c = T(s);
						return new p("Invalid " + o + " `" + i + "` of type " + ("`" + c + "` supplied to `" + a + "`, expected an array."))
					}
					for (var l = 0; l < s.length; l++)
					{
						var u = e(s, l, a, o, i + "[" + l + "]", r);
						if (u instanceof Error) return u
					}
					return null
				}
				return d(t)
			}

			function k()
			{
				function t(t, n, a, o, i)
				{
					var r = t[n];
					if (!e(r))
					{
						var s = T(r);
						return new p("Invalid " + o + " `" + i + "` of type " + ("`" + s + "` supplied to `" + a + "`, expected a single ReactElement."))
					}
					return null
				}
				return d(t)
			}

			function g()
			{
				function e(e, t, n, a, i)
				{
					var r = e[t];
					if (!o.isValidElementType(r))
					{
						var s = T(r);
						return new p("Invalid " + a + " `" + i + "` of type " + ("`" + s + "` supplied to `" + n + "`, expected a single ReactElement type."))
					}
					return null
				}
				return d(e)
			}

			function y(e)
			{
				function t(t, n, a, o, i)
				{
					if (!(t[n] instanceof e))
					{
						var r = e.name || N,
							s = L(t[n]);
						return new p("Invalid " + o + " `" + i + "` of type " + ("`" + s + "` supplied to `" + a + "`, expected ") + ("instance of `" + r + "`."))
					}
					return null
				}
				return d(t)
			}

			function v(e)
			{
				function t(t, n, a, o, i)
				{
					for (var r = t[n], s = 0; s < e.length; s++)
						if (u(r, e[s])) return null;
					var c = JSON.stringify(e, function(e, t)
					{
						var n = E(t);
						return "symbol" === n ? String(t) : t
					});
					return new p("Invalid " + o + " `" + i + "` of value `" + String(r) + "` " + ("supplied to `" + a + "`, expected one of " + c + "."))
				}
				return Array.isArray(e) ? d(t) : a
			}

			function b(e)
			{
				function t(t, n, a, o, i)
				{
					if ("function" != typeof e) return new p("Property `" + i + "` of component `" + a + "` has invalid PropType notation inside objectOf.");
					var s = t[n],
						l = T(s);
					if ("object" !== l) return new p("Invalid " + o + " `" + i + "` of type " + ("`" + l + "` supplied to `" + a + "`, expected an object."));
					for (var u in s)
						if (c(s, u))
						{
							var d = e(s, u, a, o, i + "." + u, r);
							if (d instanceof Error) return d
						}
					return null
				}
				return d(t)
			}

			function S(e)
			{
				function t(t, n, a, o, i)
				{
					for (var s = 0; s < e.length; s++)
					{
						var c = e[s];
						if (null == c(t, n, a, o, i, r)) return null
					}
					return new p("Invalid " + o + " `" + i + "` supplied to " + ("`" + a + "`."))
				}
				if (!Array.isArray(e)) return a;
				for (var n = 0; n < e.length; n++)
				{
					var o = e[n];
					if ("function" != typeof o) return l("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + I(o) + " at index " + n + "."), a
				}
				return d(t)
			}

			function P()
			{
				function e(e, t, n, a, o)
				{
					return _(e[t]) ? null : new p("Invalid " + a + " `" + o + "` supplied to " + ("`" + n + "`, expected a ReactNode."))
				}
				return d(e)
			}

			function C(e)
			{
				function t(t, n, a, o, i)
				{
					var s = t[n],
						c = T(s);
					if ("object" !== c) return new p("Invalid " + o + " `" + i + "` of type `" + c + "` " + ("supplied to `" + a + "`, expected `object`."));
					for (var l in e)
					{
						var u = e[l];
						if (u)
						{
							var d = u(s, l, a, o, i + "." + l, r);
							if (d) return d
						}
					}
					return null
				}
				return d(t)
			}

			function O(e)
			{
				function t(t, n, a, o, s)
				{
					var c = t[n],
						l = T(c);
					if ("object" !== l) return new p("Invalid " + o + " `" + s + "` of type `" + l + "` " + ("supplied to `" + a + "`, expected `object`."));
					var u = i(
					{}, t[n], e);
					for (var d in u)
					{
						var m = e[d];
						if (!m) return new p("Invalid " + o + " `" + s + "` key `" + d + "` supplied to `" + a + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
						var f = m(c, d, a, o, s + "." + d, r);
						if (f) return f
					}
					return null
				}
				return d(t)
			}

			function _(t)
			{
				switch (typeof t)
				{
					case "number":
					case "string":
					case "undefined":
						return !0;
					case "boolean":
						return !t;
					case "object":
						if (Array.isArray(t)) return t.every(_);
						if (null === t || e(t)) return !0;
						var a = n(t);
						if (!a) return !1;
						var o, i = a.call(t);
						if (a !== t.entries)
						{
							for (; !(o = i.next()).done;)
								if (!_(o.value)) return !1
						}
						else
							for (; !(o = i.next()).done;)
							{
								var r = o.value;
								if (r && !_(r[1])) return !1
							}
						return !0;
					default:
						return !1
				}
			}

			function w(e, t)
			{
				return "symbol" === e || !!t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
			}

			function T(e)
			{
				var t = typeof e;
				return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : w(t, e) ? "symbol" : t
			}

			function E(e)
			{
				if ("undefined" == typeof e || null === e) return "" + e;
				var t = T(e);
				if ("object" === t)
				{
					if (e instanceof Date) return "date";
					if (e instanceof RegExp) return "regexp"
				}
				return t
			}

			function I(e)
			{
				var t = E(e);
				switch (t)
				{
					case "array":
					case "object":
						return "an " + t;
					case "boolean":
					case "date":
					case "regexp":
						return "a " + t;
					default:
						return t
				}
			}

			function L(e)
			{
				return e.constructor && e.constructor.name ? e.constructor.name : N
			}
			var A = "function" == typeof Symbol && Symbol.iterator,
				x = "@@iterator",
				N = "<<anonymous>>",
				M = {
					array: m("array"),
					bool: m("boolean"),
					func: m("function"),
					number: m("number"),
					object: m("object"),
					string: m("string"),
					symbol: m("symbol"),
					any: f(),
					arrayOf: h,
					element: k(),
					elementType: g(),
					instanceOf: y,
					node: P(),
					objectOf: b,
					oneOf: v,
					oneOfType: S,
					shape: C,
					exact: O
				};
			return p.prototype = Error.prototype, M.checkPropTypes = s, M.resetWarningCache = s.resetWarningCache, M.PropTypes = M, M
		}
	},
	44: function(e, t, n)
	{
		"use strict";
		e.exports = n(45)
	},
	45: function(e, t)
	{
		/** @license React v16.13.1
		 * react-is.production.min.js
		 *
		 * Copyright (c) Facebook, Inc. and its affiliates.
		 *
		 * This source code is licensed under the MIT license found in the
		 * LICENSE file in the root directory of this source tree.
		 */
		"use strict";

		function n(e)
		{
			if ("object" == typeof e && null !== e)
			{
				var t = e.$$typeof;
				switch (t)
				{
					case i:
						switch (e = e.type)
						{
							case d:
							case m:
							case s:
							case l:
							case c:
							case h:
								return e;
							default:
								switch (e = e && e.$$typeof)
								{
									case p:
									case f:
									case y:
									case g:
									case u:
										return e;
									default:
										return t
								}
						}
					case r:
						return t
				}
			}
		}

		function a(e)
		{
			return n(e) === m
		}
		var o = "function" == typeof Symbol && Symbol.for,
			i = o ? Symbol.for("react.element") : 60103,
			r = o ? Symbol.for("react.portal") : 60106,
			s = o ? Symbol.for("react.fragment") : 60107,
			c = o ? Symbol.for("react.strict_mode") : 60108,
			l = o ? Symbol.for("react.profiler") : 60114,
			u = o ? Symbol.for("react.provider") : 60109,
			p = o ? Symbol.for("react.context") : 60110,
			d = o ? Symbol.for("react.async_mode") : 60111,
			m = o ? Symbol.for("react.concurrent_mode") : 60111,
			f = o ? Symbol.for("react.forward_ref") : 60112,
			h = o ? Symbol.for("react.suspense") : 60113,
			k = o ? Symbol.for("react.suspense_list") : 60120,
			g = o ? Symbol.for("react.memo") : 60115,
			y = o ? Symbol.for("react.lazy") : 60116,
			v = o ? Symbol.for("react.block") : 60121,
			b = o ? Symbol.for("react.fundamental") : 60117,
			S = o ? Symbol.for("react.responder") : 60118,
			P = o ? Symbol.for("react.scope") : 60119;
		t.AsyncMode = d, t.ConcurrentMode = m, t.ContextConsumer = p, t.ContextProvider = u, t.Element = i, t.ForwardRef = f, t.Fragment = s, t.Lazy = y, t.Memo = g, t.Portal = r, t.Profiler = l, t.StrictMode = c, t.Suspense = h, t.isAsyncMode = function(e)
		{
			return a(e) || n(e) === d
		}, t.isConcurrentMode = a, t.isContextConsumer = function(e)
		{
			return n(e) === p
		}, t.isContextProvider = function(e)
		{
			return n(e) === u
		}, t.isElement = function(e)
		{
			return "object" == typeof e && null !== e && e.$$typeof === i
		}, t.isForwardRef = function(e)
		{
			return n(e) === f
		}, t.isFragment = function(e)
		{
			return n(e) === s
		}, t.isLazy = function(e)
		{
			return n(e) === y
		}, t.isMemo = function(e)
		{
			return n(e) === g
		}, t.isPortal = function(e)
		{
			return n(e) === r
		}, t.isProfiler = function(e)
		{
			return n(e) === l
		}, t.isStrictMode = function(e)
		{
			return n(e) === c
		}, t.isSuspense = function(e)
		{
			return n(e) === h
		}, t.isValidElementType = function(e)
		{
			return "string" == typeof e || "function" == typeof e || e === s || e === m || e === l || e === c || e === h || e === k || "object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === g || e.$$typeof === u || e.$$typeof === p || e.$$typeof === f || e.$$typeof === b || e.$$typeof === S || e.$$typeof === P || e.$$typeof === v)
		}, t.typeOf = n
	},
	46: function(e, t)
	{
		"use strict";
		var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
		e.exports = n
	},
	47: function(e, t, n)
	{
		"use strict";

		function a(e, t, n, a, o)
		{}
		a.resetWarningCache = function() {}, e.exports = a
	},
	48: function(e, t)
	{
		"use strict";
		e.exports = "15.7.0"
	},
	49: function(e, t, n)
	{
		"use strict";
		var a = n(23),
			o = a.Component,
			i = n(34),
			r = i.isValidElement,
			s = n(25),
			c = n(50);
		e.exports = c(o, r, s)
	},
	50: function(e, t, n)
	{
		"use strict";

		function a(e, t, n, a, o, i, r, s)
		{
			if (l(t), !e)
			{
				var c;
				if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
				else
				{
					var u = [n, a, o, i, r, s],
						p = 0;
					c = new Error(t.replace(/%s/g, function()
					{
						return u[p++]
					})), c.name = "Invariant Violation"
				}
				throw c.framesToPop = 1, c
			}
		}

		function o(e)
		{
			return e
		}

		function i(e, t, n)
		{
			function i(e, t)
			{
				var n = y.hasOwnProperty(t) ? y[t] : null;
				C.hasOwnProperty(t) && a("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t), e && a("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t)
			}

			function r(e, n)
			{
				if (n)
				{
					a("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), a(!t(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
					var o = e.prototype,
						r = o.__reactAutoBindPairs;
					n.hasOwnProperty(u) && b.mixins(e, n.mixins);
					for (var s in n)
						if (n.hasOwnProperty(s) && s !== u)
						{
							var c = n[s],
								l = o.hasOwnProperty(s);
							if (i(l, s), b.hasOwnProperty(s)) b[s](e, c);
							else
							{
								var p = y.hasOwnProperty(s),
									f = "function" == typeof c,
									h = f && !p && !l && n.autobind !== !1;
								if (h) r.push(s, c), o[s] = c;
								else if (l)
								{
									var k = y[s];
									a(p && ("DEFINE_MANY_MERGED" === k || "DEFINE_MANY" === k), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", k, s), "DEFINE_MANY_MERGED" === k ? o[s] = d(o[s], c) : "DEFINE_MANY" === k && (o[s] = m(o[s], c))
								}
								else o[s] = c
							}
						}
				}
				else;
			}

			function l(e, t)
			{
				if (t)
					for (var n in t)
					{
						var o = t[n];
						if (t.hasOwnProperty(n))
						{
							var i = n in b;
							a(!i, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
							var r = n in e;
							if (r)
							{
								var s = v.hasOwnProperty(n) ? v[n] : null;
								return a("DEFINE_MANY_MERGED" === s, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), void(e[n] = d(e[n], o))
							}
							e[n] = o
						}
					}
			}

			function p(e, t)
			{
				a(e && t && "object" == typeof e && "object" == typeof t, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");
				for (var n in t) t.hasOwnProperty(n) && (a(void 0 === e[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n), e[n] = t[n]);
				return e
			}

			function d(e, t)
			{
				return function()
				{
					var n = e.apply(this, arguments),
						a = t.apply(this, arguments);
					if (null == n) return a;
					if (null == a) return n;
					var o = {};
					return p(o, n), p(o, a), o
				}
			}

			function m(e, t)
			{
				return function()
				{
					e.apply(this, arguments), t.apply(this, arguments)
				}
			}

			function f(e, t)
			{
				var n = t.bind(e);
				return n
			}

			function h(e)
			{
				for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2)
				{
					var a = t[n],
						o = t[n + 1];
					e[a] = f(e, o)
				}
			}

			function k(e)
			{
				var t = o(function(e, o, i)
				{
					this.__reactAutoBindPairs.length && h(this), this.props = e, this.context = o, this.refs = c, this.updater = i || n, this.state = null;
					var r = this.getInitialState ? this.getInitialState() : null;
					a("object" == typeof r && !Array.isArray(r), "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent"), this.state = r
				});
				t.prototype = new O, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], g.forEach(r.bind(null, t)), r(t, S), r(t, e), r(t, P), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), a(t.prototype.render, "createClass(...): Class specification must implement a `render` method.");
				for (var i in y) t.prototype[i] || (t.prototype[i] = null);
				return t
			}
			var g = [],
				y = {
					mixins: "DEFINE_MANY",
					statics: "DEFINE_MANY",
					propTypes: "DEFINE_MANY",
					contextTypes: "DEFINE_MANY",
					childContextTypes: "DEFINE_MANY",
					getDefaultProps: "DEFINE_MANY_MERGED",
					getInitialState: "DEFINE_MANY_MERGED",
					getChildContext: "DEFINE_MANY_MERGED",
					render: "DEFINE_ONCE",
					componentWillMount: "DEFINE_MANY",
					componentDidMount: "DEFINE_MANY",
					componentWillReceiveProps: "DEFINE_MANY",
					shouldComponentUpdate: "DEFINE_ONCE",
					componentWillUpdate: "DEFINE_MANY",
					componentDidUpdate: "DEFINE_MANY",
					componentWillUnmount: "DEFINE_MANY",
					UNSAFE_componentWillMount: "DEFINE_MANY",
					UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
					UNSAFE_componentWillUpdate: "DEFINE_MANY",
					updateComponent: "OVERRIDE_BASE"
				},
				v = {
					getDerivedStateFromProps: "DEFINE_MANY_MERGED"
				},
				b = {
					displayName: function(e, t)
					{
						e.displayName = t
					},
					mixins: function(e, t)
					{
						if (t)
							for (var n = 0; n < t.length; n++) r(e, t[n])
					},
					childContextTypes: function(e, t)
					{
						e.childContextTypes = s(
						{}, e.childContextTypes, t)
					},
					contextTypes: function(e, t)
					{
						e.contextTypes = s(
						{}, e.contextTypes, t)
					},
					getDefaultProps: function(e, t)
					{
						e.getDefaultProps ? e.getDefaultProps = d(e.getDefaultProps, t) : e.getDefaultProps = t
					},
					propTypes: function(e, t)
					{
						e.propTypes = s(
						{}, e.propTypes, t)
					},
					statics: function(e, t)
					{
						l(e, t)
					},
					autobind: function() {}
				},
				S = {
					componentDidMount: function()
					{
						this.__isMounted = !0
					}
				},
				P = {
					componentWillUnmount: function()
					{
						this.__isMounted = !1
					}
				},
				C = {
					replaceState: function(e, t)
					{
						this.updater.enqueueReplaceState(this, e, t)
					},
					isMounted: function()
					{
						return !!this.__isMounted
					}
				},
				O = function() {};
			return s(O.prototype, e.prototype, C), k
		}
		var r, s = n(22),
			c = {},
			l = function(e) {},
			u = "mixins";
		r = {}, e.exports = i
	},
	51: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return i.isValidElement(e) ? void 0 : o("143"), e
		}
		var o = n(24),
			i = n(34);
		n(30);
		e.exports = a
	},
	52: function(e, t, n)
	{
		e.exports = n(53)()
	},
	53: function(e, t, n)
	{
		"use strict";

		function a()
		{}

		function o()
		{}
		var i = n(46);
		o.resetWarningCache = a, e.exports = function()
		{
			function e(e, t, n, a, o, r)
			{
				if (r !== i)
				{
					var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
					throw s.name = "Invariant Violation", s
				}
			}

			function t()
			{
				return e
			}
			e.isRequired = e;
			var n = {
				array: e,
				bool: e,
				func: e,
				number: e,
				object: e,
				string: e,
				symbol: e,
				any: e,
				arrayOf: t,
				element: e,
				elementType: e,
				instanceOf: t,
				node: e,
				objectOf: t,
				oneOf: t,
				oneOfType: t,
				shape: t,
				exact: t,
				checkPropTypes: o,
				resetWarningCache: a
			};
			return n.PropTypes = n, n
		}
	},
	54: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}

		function o(e)
		{
			return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e)
			{
				return typeof e
			} : function(e)
			{
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function i(e, t)
		{
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function r(e, t)
		{
			for (var n = 0; n < t.length; n++)
			{
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}

		function s(e, t, n)
		{
			return t && r(e.prototype, t), n && r(e, n), e
		}

		function c(e, t)
		{
			return !t || "object" !== o(t) && "function" != typeof t ? l(e) : t
		}

		function l(e)
		{
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function u(e)
		{
			return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e)
			{
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function p(e, t)
		{
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype,
			{
				constructor:
				{
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && d(e, t)
		}

		function d(e, t)
		{
			return (d = Object.setPrototypeOf || function(e, t)
			{
				return e.__proto__ = t, e
			})(e, t)
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.default = void 0;
		var m = a(n(20)),
			f = n(14),
			h = n(15),
			k = a(n(55)),
			g = function(e)
			{
				function t()
				{
					return i(this, t), c(this, u(t).apply(this, arguments))
				}
				return p(t, e), s(t, [
				{
					key: "getLocale",
					value: function()
					{
						if (this.props.locale) return this.props.locale;
						var e = (0, f.getCurrentLocale)();
						return this.props.availableLocales && this.props.availableLocales.indexOf(e) === -1 ? h.DEFAULT_LOCALE : e
					}
				},
				{
					key: "getLocaleUrlSuffixForWWW",
					value: function()
					{
						var e = this.getLocale();
						return e === h.DEFAULT_LOCALE || h.DEFAULT_AVAILABLE_LOCALES.indexOf(e) === -1 ? "" : "l/".concat(e.toLowerCase(), "/")
					}
				},
				{
					key: "createStringSelector",
					value: function()
					{
						var e = this.getLocale().toLowerCase(),
							t = h.DEFAULT_LOCALE.toLowerCase();
						return function(n)
						{
							return k.default[e] && k.default[e][n] ? k.default[e][n] : k.default[t] && k.default[t][n] ? k.default[t][n] : h.UNRESOLVED_STRING
						}
					}
				}]), t
			}(m.default.Component);
		t.default = g
	},
	55: function(e, t)
	{
		"use strict";
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.default = void 0;
		var n = {
				ar:
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "نظارة Spectacles",
					Live: "مباشر",
					Ads: "الإعلانات",
					Company: "الشركة",
					Home: "الصفحة الرئيسية",
					Blog: "المدوّنة",
					Jobs: "الوظائف",
					Careers: "الوظائف",
					Press: "الصحافة",
					News: "الأخبار",
					"Press Inquiries": "الاستفسارات الصحفية",
					Twitter: "تويتر",
					Language: "اللغة",
					"Download Snapchat": "تحميل Snapchat",
					Download: "تنزيل",
					Kit: "حزمة",
					Stories: "القصص",
					"Lens Studio": "استوديو Lens",
					Store: "متجر",
					"Snapchat for iOS": "Snapchat لـ iOS",
					"Snapchat for Android": "Snapchat لـ أندرويد",
					Community: "المجتمع",
					Support: "الدعم",
					"Community Guidelines": "الإرشادات المجتمعية",
					"Safety Center": "مركز السلامة",
					Snapcodes: "Snapcodes",
					Geofilters: "الفلاتر الجغرافية",
					Create: "الفلاتر وLenses",
					Map: "الخريطة",
					Advertising: "الإعلانات",
					"Buy Ads": "شراء إعلانات",
					"Advertising Policies": "سياسات الإعلان",
					"Political Ads Library": "مكتبة الإعلانات السياسية",
					"Brand Guidelines": "إرشادات العلامة التجارية",
					"Promotions Rules": "قواعد العروض الترويجية",
					Legal: "القسم القانوني",
					"Terms of Service": "شروط الخدمة",
					Impressum: "إخلاء المسؤولية",
					"Privacy Policy": "سياسة الخصوصية",
					"Privacy Center": "مركز الخصوصية",
					"Cookie Policy": "سياسة ملفات تعريف الارتباط (كوكيز)",
					"Memories Terms of Service": 'شروط الخدمة لخاصية "الذكريات"',
					CUSTOM_CREATIVE_TOOLS_TOS: "شروط أدوات التصميم المخصصة",
					COMMUNITY_TOS: "شروط الجيوفلترات المجتمعية",
					LENS_STUDIO_TOS: "شروط استوديو Lens",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "ملفات تعريف الارتباط اللازمة",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">نحن نستخدم ملفات تعريف الارتباط هذه</a> للمساعدة على تشغيل الموقع. ونظرًا لضرورة استخدام ملفات تعريف الارتباط هذه، لا يمكنك إيقافها.']
						},
						Preferences:
						{
							headline: "التفضيلات",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">نحن نستخدم ملفات تعريف الارتباط هذه</a> لنتذكر تفضيلاتك ونحسّن تجربتك على موقعنا.']
						},
						Performance:
						{
							headline: "الأداء والتحليلات",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">نحن نستخدم ملفات تعريف الارتباط هذه</a> لجمع معلومات حول كيفية استخدامك لموقعنا الإلكتروني ومراقبة أداء الموقع وتحسينه، وتحسين تجربتك عليه.']
						},
						Marketing:
						{
							headline: "التسويق",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">نحن نستخدم ملفات تعريف الارتباط هذه</a> لتقديم الإعلانات ذات الصلة وقياس فعالية حملاتنا الإعلانية. قد يستخدم شركاؤنا الإعلانيون من الأطراف الثالثة ملفات تعريف الارتباط هذه لإقامة ملف تعريفي باهتماماتك وتقديم الإعلانات ذات الصلة على مواقع أخرى.']
						}
					},
					ThirdPartyAdvertisersText: "الشركاء الإعلانيون من الأطراف الثالثة",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">تويتر</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "شركاؤنا الإعلانيون من الأطراف الخارجية:",
					EffectiveDate: "يبدأ السريان من: ١٥ يناير ٢٠١٩",
					Body: ["بالإضافة إلى إدارة ملفات تعريف الارتباط من خلال مُتصفّحك أو الجهاز، يُمكنك تغيير إعدادات ملفات تعريف الارتباط أدناه. يُرجى مُلاحظة أن بعض ملفات تعريف الارتباط المُعيّنة قد تكون ضرورية لتشغيل موقعنا الإلكتروني ولا يُمكن حظرها باستخدام هذه الإعدادات."],
					Title: "إعدادات ملفات تعريف الارتباط",
					COOKIE_POPUP: 'مرحباً! نحن نستخدم ملفات تعريف الارتباط وتقنيات مشابهة ("الكوكيز")، بما في ذلك ملفات تعريف الارتباط لأطراف ثالثة، على هذا الموقع للمساعدة على تشغيله وتحسين تجربتك عليه، إلى جانب مراقبة أداء موقعنا ولأغراض متعلقة بالدعاية. للمزيد من المعلومات عن كيفية استخدامنا لملفات تعريف الارتباط والخيارات المتاحة لديك، انتقل إلى <a href="{COOKIE_POLICY_URL}" target="_blank">هنا</a> للاطلاع على سياسة ملفات تعريف الارتباط! من خلال الضغط على "أقبل ملفات تعريف الارتباط" أدناه، فإنك تمنحنا موافقتك على استخدام ملفات تعريف الارتباط (إلا أن الموافقة ليست مطلوبة لملفات تعريف الارتباط اللازمة لتشغيل موقعنا). ويمكنك تغيير إعدادات ملفات تعريف الارتباط وسحب موافقتك في أي وقت، من خلال الضغط على "إعدادات ملفات تعريف الارتباط" أدناه.',
					COOKIE_POPUP_EU: 'مرحباً! نحن نستخدم ملفات تعريف الارتباط وتقنيات مشابهة ("الكوكيز")، بما في ذلك ملفات تعريف الارتباط لأطراف ثالثة، على هذا الموقع للمساعدة على تشغيله وتحسين تجربتك عليه، إلى جانب مراقبة أداء موقعنا ولأغراض متعلقة بالدعاية. للمزيد من المعلومات عن كيفية استخدامنا لملفات تعريف الارتباط والخيارات المتاحة لديك، انتقل إلى <a href="{COOKIE_POLICY_URL}" target="_blank">هنا</a> للاطلاع على سياسة ملفات تعريف الارتباط! من خلال الضغط على "أقبل ملفات تعريف الارتباط" أدناه، فإنك تمنحنا موافقتك على استخدام ملفات تعريف الارتباط (إلا أن الموافقة ليست مطلوبة لملفات تعريف الارتباط اللازمة لتشغيل موقعنا). ويمكنك تغيير إعدادات ملفات تعريف الارتباط وسحب موافقتك في أي وقت، من خلال الضغط على "إعدادات ملفات تعريف الارتباط" أدناه.',
					AgreeText: "أقبل ملفات تعريف الارتباط",
					SettingsText: "إعدادات ملفات تعريف الارتباط",
					"Report Infringement": "الإبلاغ عن مخالفة"
				},
				"bn-bd":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "লাইভ",
					Ads: "বিজ্ঞাপন",
					Company: "কোম্পানি",
					Home: "হোম",
					Blog: "ব্লগ",
					Jobs: "চাকরি",
					Careers: "পেশা",
					Press: "প্রেস",
					News: "সংবাদ",
					"Press Inquiries": "অনুসন্ধান চাপুন",
					Twitter: "Twitter",
					Language: "ভাষা",
					"Download Snapchat": "Snapchat ডাউনলোড করুন",
					Download: "ডাউনলোড করুন",
					Kit: "সরঞ্জাম গুচ্ছ",
					Stories: "গল্প",
					"Lens Studio": "Lens Studio",
					Store: "বিপণি",
					"Snapchat for iOS": "iOS এর জন্য Snapchat",
					"Snapchat for Android": "Android এর জন্য Snapchat",
					Community: "কমিউনিটি",
					Support: "সহায়তা",
					"Community Guidelines": "কমিউনিটি নির্দেশিকাসমূহ",
					"Safety Center": "নিরাপত্তা কেন্দ্র",
					Snapcodes: "Snapcodes",
					Geofilters: "জিওফিল্টারসমুহ",
					Create: "ফিল্টার ও Lenses",
					Map: "মানচিত্র",
					Advertising: "বিজ্ঞাপন",
					"Buy Ads": "বিজ্ঞাপন কিনুন",
					"Advertising Policies": "বিজ্ঞাপনের নীতিসমূহ",
					"Political Ads Library": "রাজনৈতিক বিজ্ঞাপন লাইব্রেরি",
					"Brand Guidelines": "ব্র্যান্ড নির্দেশিকা",
					"Promotions Rules": "প্রচারের নিয়মসমূহ",
					Legal: "আইনি",
					"Terms of Service": "পরিষেবার শর্তাবলী",
					Impressum: "মালিকানা সম্বন্ধীয় বিবৃতি",
					"Privacy Policy": "গোপনীয়তা নীতি",
					"Privacy Center": "গোপনীয়তা কেন্দ্র",
					"Cookie Policy": "কুকি সংক্রান্ত নীতি",
					"Memories Terms of Service": "স্মৃতিগুলির পরিষেবার শর্তাবলী",
					CUSTOM_CREATIVE_TOOLS_TOS: "প্রয়োজনানুগ সৃজনশীল সরঞ্জামের শর্তাবলী",
					COMMUNITY_TOS: "কমিউনিটি জিওফিল্টারের শর্তাবলী",
					LENS_STUDIO_TOS: "Lens Studio শর্তাবলী",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "প্রয়োজনীয় কুকিজ",
							content: ['সাইটগুলি পরিচালনা করতে <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">আমরা এই কুকিগুলি ব্যবহার করি</a>। যেহেতু এই কুকিগুলি প্রয়োজনীয় সেইজন্য আপনি এগুলি বন্ধ করতে পারবেন না।']
						},
						Preferences:
						{
							headline: "অগ্রাধিকারসমূহ",
							content: ['আপনার অগ্রাধিকারসমূহ মনে রাখতে এবং আমাদের ওয়েবসাইটে আপনার অভিজ্ঞতা উন্নত করতে <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">আমরা এই কুকিগুলি ব্যবহার করি</a>।']
						},
						Performance:
						{
							headline: "কর্মসম্পাদন এবং অ্যানালিটিকস",
							content: ['আপনি কীভাবে আমাদের সাইট ব্যবহার করছেন সে সম্পর্কিত তথ্য সংগ্রহ করতে, সাইটের কার্যসম্পাদন নিরীক্ষণ করতে এবং আমাদের সাইটের কার্য সম্পাদন এবং আপনার অভিজ্ঞতা উন্নত করতে <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">আমরা এই কুকিগুলি ব্যবহার করি</a>।']
						},
						Marketing:
						{
							headline: "বিপণন",
							content: ['সংশ্লিষ্ট বিজ্ঞাপন সরবরাহ করতে এবং আমাদের বিজ্ঞাপন প্রচারের কার্যকারিতা পরিমাপ করতে <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">আমরা এই কুকিগুলি ব্যবহার করি</a>। আপনার আগ্রহ বিষয়ক একটি প্রোফাইল তৈরি করতে এবং অন্যান্য সাইটে প্রাসঙ্গিক বিজ্ঞাপন সরবরাহ করতে আমাদের তৃতীয় পক্ষের বিজ্ঞাপন অংশীদারসমূহ এই কুকিজ ব্যবহার করতে পারে।']
						}
					},
					ThirdPartyAdvertisersText: "তৃতীয় পক্ষের বিজ্ঞাপন অংশীদারসমূহ",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "তৃতীয় পক্ষের বিজ্ঞাপন অংশীদারসমূহ:",
					EffectiveDate: "কার্যকর হওয়ার তারিখ: জানুয়ারি 15, 2019",
					Body: ["আপনার ব্রাউজার বা ডিভাইসের মাধ্যমে কুকি পরিচালনা করা বাদেও, আপনি নীচে আপনার কুকি সেটিংস পরিবর্তন করতে পারেন। অনুগ্রহ করে মনে রাখবেন যে আমাদের সাইট চালানোর জন্য নির্দিষ্ট কুকিজ প্রয়োজনীয় এবং এই সেটিংসটি ব্যবহার করে সেগুলি ব্লক করা যাবে না।"],
					Title: "কুকি সেটিংস",
					COOKIE_POPUP: 'হাই! আমাদের ওয়েবসাইটে আপনার অভিজ্ঞতা উন্নত করতে ও পরিচালনায় সহায়তা করতে, আমাদের সাইটের কর্মক্ষমতা নিরীক্ষণ করতে এবং বিজ্ঞাপনের উদ্দেশ্যে আমরা এই ওয়েবসাইটটিতে তৃতীয় পক্ষের কুকিজ সহ কুকিজ এবং অনুরূপ প্রযুক্তি ("কুকিজ") ব্যবহার করি। আমরা কীভাবে কুকিজ ব্যবহার করি এবং আপনার কুকি পছন্দ সম্পর্কে আরও তথ্যের জন্য, আমাদের কুকি নীতিটির জন্য <a href="{COOKIE_POLICY_URL}" target="_blank">এখানে</a> যান! নিচে "কুকিজ স্বীকার করা"-তে ক্লিক করে আপনি আমাদেরকে কুকিজ ব্যবহারের জন্য সম্মতি দিচ্ছেন (আমাদের সাইট চালানোর জন্য প্রয়োজনীয় কুকিজের জন্য যেখানে সম্মতির প্রয়োজন হয়না সেগুলি ব্যতীত)। আপনি নিচে "কুকি সেটিংস"-এ ক্লিক করে আপনার কুকি সেটিংস পরিবর্তন করতে পারেন এবং যে কোনও সময় আপনার সম্মতি প্রত্যাহার করতে পারেন।',
					COOKIE_POPUP_EU: 'হাই! আমাদের ওয়েবসাইটে আপনার অভিজ্ঞতা উন্নত করতে ও পরিচালনায় সহায়তা করতে, আমাদের সাইটের কর্মক্ষমতা নিরীক্ষণ করতে এবং বিজ্ঞাপনের উদ্দেশ্যে আমরা এই ওয়েবসাইটটিতে তৃতীয় পক্ষের কুকিজ সহ কুকিজ এবং অনুরূপ প্রযুক্তি ("কুকিজ") ব্যবহার করি। আমরা কীভাবে কুকিজ ব্যবহার করি এবং আপনার কুকি পছন্দ সম্পর্কে আরও তথ্যের জন্য, আমাদের কুকি নীতিটির জন্য <a href="{COOKIE_POLICY_URL}" target="_blank">এখানে</a> যান! নিচে "কুকিজ স্বীকার করা"-তে ক্লিক করে আপনি আমাদেরকে কুকিজ ব্যবহারের জন্য সম্মতি দিচ্ছেন (আমাদের সাইট চালানোর জন্য প্রয়োজনীয় কুকিজের জন্য যেখানে সম্মতির প্রয়োজন হয়না সেগুলি ব্যতীত)। আপনি নিচে "কুকি সেটিংস"-এ ক্লিক করে আপনার কুকি সেটিংস পরিবর্তন করতে পারেন এবং যে কোনও সময় আপনার সম্মতি প্রত্যাহার করতে পারেন।',
					AgreeText: "কুকিজ স্বীকার করা",
					SettingsText: "কুকি সেটিংস",
					"Report Infringement": "উল্লঙ্ঘনের রিপোর্ট করুন"
				},
				"bn-in":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "লাইভ",
					Ads: "বিজ্ঞাপন",
					Company: "কোম্পানি",
					Home: "হোম",
					Blog: "ব্লগ",
					Jobs: "চাকরিগুলি",
					Careers: "পেশা",
					Press: "প্রেস",
					News: "সংবাদ",
					"Press Inquiries": "জিজ্ঞাস্যগুলি টিপুন",
					Twitter: "Twitter",
					Language: "ভাষা",
					"Download Snapchat": "Snapchat ডাউনলোড করুন",
					Download: "ডাউনলোড করুন",
					Kit: "কিট",
					Stories: "গল্পগুলি",
					"Lens Studio": "Lens Studio",
					Store: "স্টোর",
					"Snapchat for iOS": "iOS এর জন্য Snapchat",
					"Snapchat for Android": "Android এর জন্য Snapchat",
					Community: "কমিউনিটি",
					Support: "সহায়তা",
					"Community Guidelines": "কমিউনিটির নির্দেশিকা",
					"Safety Center": "নিরাপত্তা কেন্দ্র",
					Snapcodes: "Snapcode গুলি",
					Geofilters: "জিওফিল্টারগুলি",
					Create: "ফিল্টার ও Lenses",
					Map: "মানচিত্র",
					Advertising: "বিজ্ঞাপন",
					"Buy Ads": "বিজ্ঞাপন কিনুন",
					"Advertising Policies": "বিজ্ঞাপনের নীতিসমূহ",
					"Political Ads Library": "রাজনৈতিক বিজ্ঞাপন লাইব্রেরী",
					"Brand Guidelines": "ব্র্যান্ডের নির্দেশিকা",
					"Promotions Rules": "প্রচারের নিয়মাবলী",
					Legal: "আইনি",
					"Terms of Service": "পরিষেবার শর্তাবলী",
					Impressum: "ইম্প্রেসাম",
					"Privacy Policy": "গোপনীয়তার নীতি",
					"Privacy Center": "গোপনীয়তা কেন্দ্র",
					"Cookie Policy": "কুকি সংক্রান্ত নীতি",
					"Memories Terms of Service": "স্মৃতিসমূহের পরিষেবার শর্তাবলী",
					CUSTOM_CREATIVE_TOOLS_TOS: "কাস্টম সৃজনাত্মক সরঞ্জামসমূহের শর্তাবলী",
					COMMUNITY_TOS: "কমিউনিটি জিওফিল্টার শর্তাবলী",
					LENS_STUDIO_TOS: "Lens স্টুডিও শর্তাবলী",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "প্রয়োজনীয় কুকিগুলি",
							content: ['সাইট পরিচালনায় সাহায্য করার জন্য <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">আমরা এই কুকিগুলি ব্যবহার করি</a>। এই কুকিগুলি প্রয়োজনীয় বলে আপনি এগুলি বন্ধ রাখতে পারেন না।']
						},
						Preferences:
						{
							headline: "পছন্দগুলি",
							content: ['আপনার পছন্দগুলি মনে রাখতে এবং আমাদের সাইটে আপনার অভিজ্ঞতাকে উন্নত করতে <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">আমরা এই কুকিগুলি ব্যবহার করি</a>।']
						},
						Performance:
						{
							headline: "কার্ষসম্পাদন ও বৈশ্লেষিক",
							content: ['আপনি কীভাবে আমাদের সাইট ব্যবহার করেন তার সম্পর্কে তথ্য সংগ্রহ করতে, সাইটের কার্যসম্পাদন পর্যবেক্ষণ করতে এবং আমাদের সাইটের কার্যসম্পাদন ও আপনার অভিজ্ঞতাকে উন্নত করতে <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">আমরা এই কুকিগুলি ব্যবহার করি</a>।']
						},
						Marketing:
						{
							headline: "বিপণন",
							content: ['প্রাসঙ্গিক বিজ্ঞাপন সরবরাহ এবং আমাদের বিজ্ঞাপন প্রচারণার কার্যকারিতা পরিমাপ করতে <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">আমরা এই কুকিগুলি ব্যবহার করি</a>। আমাদের তৃতীয়পক্ষের বিজ্ঞাপন অংশীদারেরা আপনার আগ্রহের একটি প্রোফাইল তৈরি করতে এবং অন্যান্য সাইটে প্রাসঙ্গিক বিজ্ঞাপন সরবরাহ করতে এই কুকিগুলি ব্যবহার করতে পারে।']
						}
					},
					ThirdPartyAdvertisersText: "তৃতীয়পক্ষের বিজ্ঞাপনী অংশীদারগণ",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "তৃতীয়পক্ষের বিজ্ঞাপনী অংশীদারগণ:",
					EffectiveDate: "কার্যকর হওয়ার তারিখ: 15 জানুয়ারি, 2019",
					Body: ["আপনার ব্রাউজার বা ডিভাইসের মাধ্যমে কুকিগুলি ব্যবস্থাপনা করা ছাড়াও, আপনি নিচে আপনার কুকি সেটিংস পরিবর্তন করতে পারেন। অনুগ্রহ করে লক্ষ্য করুন, আমাদের সাইট চালাতে নির্দিষ্ট কিছু কুকি প্রয়োজনীয় এবং এই সেটিংস ব্যবহার করে অবরোধ করা যায় না।"],
					Title: "কুকি সেটিংস",
					COOKIE_POPUP: 'হাই! আমাদের সাইটে আপনার অভিজ্ঞতা পরিচালনা ও উন্নত করতে, আমাদের সাইটের কার্যসম্পাদন নিরীক্ষণ করতে এবং বিজ্ঞাপনের উদ্দেশ্যে আমরা এই ওয়েবসাইটে তৃতীয়পক্ষের কুকিগুলি সহ, কুকি ও সমরূপ প্রযুক্তিগুলি (“কুকিগুলি”) ব্যবহার করি। আপনি কিভাবে কুকিগুলি ব্যবহার করেন এবং আপনার কুকি পছন্দের বিষয়ে আরও জানতে আমাদের কুকি সংক্রান্ত নীতির জন্য, <a href="{COOKIE_POLICY_URL}" target="_blank">এখানে</a> যান! নিচে "কুকিগুলি গ্রহণ করুন" ক্লিক করার মাধ্যমে, আপনি কুকিগুলি ব্যবহারের বিষয়ে আমাদের অনুমতি দিচ্ছেন (শুধুমাত্র আমাদের সাইট চালাতে প্রয়োজনীয় কুকিগুলির জন্য অনুমতি প্রয়োজন নেই, সেগুলি ছাড়া)। নিচে “কুকি সেটিংস”এ ক্লিক করার মাধ্যমে আপনি আপনার কুকি সেটিংস পরিবর্তন করতে পারেন এবং যেকোনো সময় আপনার অনুমতি ফিরিয়ে নিতে পারেন।',
					COOKIE_POPUP_EU: 'হাই! আমাদের সাইটে আপনার অভিজ্ঞতা পরিচালনা ও উন্নত করতে, আমাদের সাইটের কার্যসম্পাদন নিরীক্ষণ করতে এবং বিজ্ঞাপনের উদ্দেশ্যে আমরা এই ওয়েবসাইটে তৃতীয়পক্ষের কুকিগুলি সহ, কুকি ও সমরূপ প্রযুক্তিগুলি (“কুকিগুলি”) ব্যবহার করি। আপনি কিভাবে কুকিগুলি ব্যবহার করেন এবং আপনার কুকি পছন্দের বিষয়ে আরও জানতে আমাদের কুকি সংক্রান্ত নীতির জন্য, <a href="{COOKIE_POLICY_URL}" target="_blank">এখানে</a> যান! নিচে "কুকিগুলি গ্রহণ করুন" ক্লিক করার মাধ্যমে, আপনি কুকিগুলি ব্যবহারের বিষয়ে আমাদের অনুমতি দিচ্ছেন (শুধুমাত্র আমাদের সাইট চালাতে প্রয়োজনীয় কুকিগুলির জন্য অনুমতি প্রয়োজন নেই, সেগুলি ছাড়া)। নিচে “কুকি সেটিংস”এ ক্লিক করার মাধ্যমে আপনি আপনার কুকি সেটিংস পরিবর্তন করতে পারেন এবং যেকোনো সময় আপনার অনুমতি ফিরিয়ে নিতে পারেন।',
					AgreeText: "কুকিগুলি গ্রহণ করুন",
					SettingsText: "কুকি সেটিংস",
					"Report Infringement": "বিধিলঙ্ঘন রিপোর্ট করুন"
				},
				"da-dk":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Live",
					Ads: "Annoncer",
					Company: "Virksomhed",
					Home: "Start",
					Blog: "Blog",
					Jobs: "Job",
					Careers: "Karriere",
					Press: "Presse",
					News: "Nyheder",
					"Press Inquiries": "Presse",
					Twitter: "Twitter",
					Language: "Sprog",
					"Download Snapchat": "Download Snapchat",
					Download: "Download",
					Kit: "Kit",
					Stories: "Historier",
					"Lens Studio": "Linsestudiet",
					Store: "Butik",
					"Snapchat for iOS": "Snapchat til iOS",
					"Snapchat for Android": "Snapchat til Android",
					Community: "Fællesskab",
					Support: "Support",
					"Community Guidelines": "Retningslinjer for brugerne",
					"Safety Center": "Sikkerhedscenter",
					Snapcodes: "Snapkoder",
					Geofilters: "Geofiltre",
					Create: "Filtre og Lenses",
					Map: "Kort",
					Advertising: "Annoncering",
					"Buy Ads": "Køb annoncer",
					"Advertising Policies": "Annoncepolitik",
					"Political Ads Library": "Bibliotek over politiske annoncer",
					"Brand Guidelines": "Retningslinjer for brandet",
					"Promotions Rules": "Kampagneregler",
					Legal: "Juridisk",
					"Terms of Service": "Servicevilkår",
					Impressum: "Impressum",
					"Privacy Policy": "Privatlivspolitik",
					"Privacy Center": "Privatlivscenter",
					"Cookie Policy": "Cookiepolitik",
					"Memories Terms of Service": "Servicevilkår for Minder",
					CUSTOM_CREATIVE_TOOLS_TOS: "Vilkår for kreative værktøjer",
					COMMUNITY_TOS: "Vilkår for Lokale Geofiltre",
					LENS_STUDIO_TOS: "Vilkår for Lens-studiet",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Nødvendige cookies",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Vi bruger disse cookies</a> til at hjælpe med at få websitet til at fungere. Da disse cookies er nødvendige, kan du ikke fravælge dem.']
						},
						Preferences:
						{
							headline: "Præferencer",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Vi bruger disse cookies</a> til at huske dine præferencer og forbedre din oplevelse på vores website.']
						},
						Performance:
						{
							headline: "Præstation og statistik",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Vi bruger disse cookies</a> til at indsamle oplysninger om, hvordan du bruger vores website, til at overvåge websitets effektivitet og til at forbedre websitets effektivitet og din oplevelse.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Vi bruger disse cookies</a> til at levere relevante annoncer og måle effektiviteten af vores annoncekampagner. Vores tredjepartsannonceringspartnere kan bruge disse cookies til at opbygge en profil ud fra dine interesser og levere relevante annoncer på andre websites.']
						}
					},
					ThirdPartyAdvertisersText: "tredjepartsannonceringspartnere",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Tredjepartsannonceringspartnere:",
					EffectiveDate: "Træder i kraft: d. 15. januar 2019",
					Body: ["Udover at administrere cookies via din browser eller din enhed kan du ændre dine cookieindstillinger nedenfor. Bemærk, at visse cookies er nødvendige for at køre vores website og ikke kan blokeres ved hjælp disse indstillinger."],
					Title: "Cookieindstillinger",
					COOKIE_POPUP: 'Hej! Vi bruger cookies og lignende teknologier ("cookies"), herunder tredjepartscookies, på dette website til at hjælpe med at få websitet til at fungere og forbedre din oplevelse på websitet, til at overvåge websitets præstation og i annonceringsøjemed. Hvis du vil have flere oplysninger om, hvordan vi anvender cookies, og om dine cookievalg, kan du klikke <a href="{COOKIE_POLICY_URL}" target="_blank">her</a> og læse vores cookiepolitik. Ved at klikke på "Acceptér cookies" nedenfor giver du os tilladelse til at bruge cookies (tilladelse er ikke påkrævet for cookies, der er nødvendige for at kunne køre websitet). Du kan når som helst ændre dine cookieindstillinger og trække dit samtykke tilbage ved at klikke på "Cookieindstillinger" herunder.',
					COOKIE_POPUP_EU: 'Hej! Vi bruger cookies og lignende teknologier ("cookies"), herunder tredjepartscookies, på dette website til at hjælpe med at få websitet til at fungere og forbedre din oplevelse på websitet, til at overvåge websitets præstation og i annonceringsøjemed. Hvis du vil have flere oplysninger om, hvordan vi anvender cookies, og om dine cookievalg, kan du klikke <a href="{COOKIE_POLICY_URL}" target="_blank">her</a> og læse vores cookiepolitik. Ved at klikke på "Acceptér cookies" nedenfor giver du os tilladelse til at bruge cookies (tilladelse er ikke påkrævet for cookies, der er nødvendige for at kunne køre websitet). Du kan når som helst ændre dine cookieindstillinger og trække dit samtykke tilbage ved at klikke på "Cookieindstillinger" herunder.',
					AgreeText: "Acceptér cookies",
					SettingsText: "Cookieindstillinger",
					"Report Infringement": "Rapportér overtrædelse"
				},
				"de-de":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Live",
					Ads: "Werbung",
					Company: "Unternehmen",
					Home: "Home",
					Blog: "Blog",
					Jobs: "Jobs",
					Careers: "Karriere",
					Press: "Presse",
					News: "News",
					"Press Inquiries": "Presseanfragen",
					Twitter: "Twitter",
					Language: "Sprache",
					"Download Snapchat": "Snapchat herunterladen",
					Download: "Downloaden",
					Kit: "Kit",
					Stories: "Storys",
					"Lens Studio": "Lens Studio",
					Store: "Store",
					"Snapchat for iOS": "Snapchat für iOS",
					"Snapchat for Android": "Snapchat für Android",
					Community: "Community",
					Support: "Support",
					"Community Guidelines": "Community-Richtlinien",
					"Safety Center": "Sicherheitscenter",
					Snapcodes: "Snapcodes",
					Geofilters: "Geofilter",
					Create: "Filter und Lenses",
					Map: "Karte",
					Advertising: "Werbung",
					"Buy Ads": "Anzeigen schalten",
					"Advertising Policies": "Werberichtlinien",
					"Political Ads Library": "Bibliothek politischer Anzeigen",
					"Brand Guidelines": "Markenrichtlinien",
					"Promotions Rules": "Richtlinien für Werbeaktionen",
					Legal: "Rechtliches",
					"Terms of Service": "Servicebestimmungen",
					Impressum: "Impressum",
					"Privacy Policy": "Datenschutzbestimmungen",
					"Privacy Center": "Datenschutzcenter",
					"Cookie Policy": "Cookie-Richtlinien",
					"Memories Terms of Service": "Memorys-Servicebestimmungen",
					CUSTOM_CREATIVE_TOOLS_TOS: "Bedingungen für benutzerdefinierte Kreativtools",
					COMMUNITY_TOS: "AGB für Community-Geofilter",
					LENS_STUDIO_TOS: "Geschäftsbedingungen für Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Erforderliche Cookies",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Wir nutzen diese Cookies</a> für den Betrieb der Website. Weil diese Cookies notwendig sind, kannst du sie nicht deaktivieren.']
						},
						Preferences:
						{
							headline: "Einstellungen",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Wir verwenden diese Cookies,</a> um uns an deine Präferenzen zu erinnern und unsere Website für dich noch cooler zu machen.']
						},
						Performance:
						{
							headline: "Leistung und Analysen",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Wir verwenden diese Cookies,</a> um Informationen darüber zu sammeln, wie du unsere Website nutzt, um die Leistung der Seite nachzuvollziehen, diese Leistung für dich zu verbessern und die Seite für dich dadurch noch cooler zu machen.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Wir verwenden diese Cookies,</a> um relevante Werbung zu schalten und die Wirksamkeit unserer Werbekampagnen zu messen. Unsere externen Werbepartner können diese Cookies nutzen, um ein Profil deiner Interessen zu erstellen und dir auf anderen Seiten relevante Werbung zu zeigen.']
						}
					},
					ThirdPartyAdvertisersText: "externe Werbepartner",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Externe Werbepartner:",
					EffectiveDate: "Stand vom 15. Januar 2019",
					Body: ["Zusätzlich zur Verwaltung von Cookies durch deinen Browser oder dein Gerät kannst du unten deine Cookie-Einstellungen ändern. Bitte beachte, dass bestimmte Cookies zur Nutzung der Website notwendig sind und somit nicht in diesen Einstellungen blockiert werden können."],
					Title: "Cookie-Einstellungen",
					COOKIE_POPUP: 'Hi! Wir verwenden auf dieser Website Cookies und ähnliche Technologien („Cookies“), darunter auch Cookies von externen Partnern, um unsere Website und deine Erfahrung auf der Website zu verbessern, die Leistung unserer Website nachzuvollziehen und Werbung bereitzustellen. Mehr darüber, wie wir Cookies verwenden und welche Einstellungsoptionen du hast, erfährst du <a href="{COOKIE_POLICY_URL}" target="_blank">in unseren Cookie-Richtlinien</a>! Wenn du unten auf „Cookies akzeptieren“ klickst, erklärst du dich mit dem Einsatz von Cookies auf unserer Website einverstanden (für Cookies, die zum Betrieb unserer Website erforderlich sind, ist dies nicht notwendig). Du kannst jederzeit deine Cookie-Einstellungen ändern und dein Einverständnis zurücknehmen. Klicke dazu einfach unten auf „Cookie-Einstellungen“.',
					COOKIE_POPUP_EU: 'Hi! Wir verwenden auf dieser Website Cookies und ähnliche Technologien („Cookies“), darunter auch Cookies von externen Partnern, um unsere Website und deine Erfahrung auf der Website zu verbessern, die Leistung unserer Website nachzuvollziehen und Werbung bereitzustellen. Mehr darüber, wie wir Cookies verwenden und welche Einstellungsoptionen du hast, erfährst du <a href="{COOKIE_POLICY_URL}" target="_blank">in unseren Cookie-Richtlinien</a>! Wenn du unten auf „Cookies akzeptieren“ klickst, erklärst du dich mit dem Einsatz von Cookies auf unserer Website einverstanden (für Cookies, die zum Betrieb unserer Website erforderlich sind, ist dies nicht notwendig). Du kannst jederzeit deine Cookie-Einstellungen ändern und dein Einverständnis zurücknehmen. Klicke dazu einfach unten auf „Cookie-Einstellungen“.',
					AgreeText: "Cookies akzeptieren",
					SettingsText: "Cookie-Einstellungen",
					"Report Infringement": "Verstoß melden"
				},
				"el-gr":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Το Snapchat",
					Spectacles: "Spectacles",
					Live: "Ζωντανά",
					Ads: "Διαφημίσεις",
					Company: "Εταιρεία",
					Home: "Αρχική σελίδα",
					Blog: "Blog",
					Jobs: "Θέσεις εργασίας",
					Careers: "Καριέρα",
					Press: "Τύπος",
					News: "Ειδήσεις",
					"Press Inquiries": "Ερωτήματα Τύπου",
					Twitter: "Twitter",
					Language: "Γλώσσα",
					"Download Snapchat": "Λήψη Snapchat",
					Download: "Λήψη",
					Kit: "Kit",
					Stories: "Ιστορίες",
					"Lens Studio": "Lens Studio",
					Store: "Κατάστημα",
					"Snapchat for iOS": "Snapchat για iOS",
					"Snapchat for Android": "Snapchat για Android",
					Community: "Κοινότητα",
					Support: "Υποστήριξη",
					"Community Guidelines": "Οδηγίες Κοινότητας",
					"Safety Center": "Κέντρο Ασφαλείας",
					Snapcodes: "Snapcodes",
					Geofilters: "Geofilters",
					Create: "Φίλτρα και φακοί",
					Map: "Χάρτης",
					Advertising: "Διαφήμιση",
					"Buy Ads": "Αγορά διαφημίσεων",
					"Advertising Policies": "Πολιτικές διαφήμισης",
					"Political Ads Library": "Βιβλιοθήκη πολιτικών διαφημίσεων",
					"Brand Guidelines": "Οδηγίες για το Brand",
					"Promotions Rules": "Κανόνες προώθησης",
					Legal: "Πληροφορίες νομικού περιεχομένου",
					"Terms of Service": "Όροι υπηρεσίας",
					Impressum: "Impressum",
					"Privacy Policy": "Πολιτική Απορρήτου",
					"Privacy Center": "Κέντρο Απορρήτου",
					"Cookie Policy": "Πολιτική για τα Cookies",
					"Memories Terms of Service": "Όροι υπηρεσίας Αναμνήσεων",
					CUSTOM_CREATIVE_TOOLS_TOS: "Όροι Εξατομικευμένων Δημιουργικών Εργαλείων",
					COMMUNITY_TOS: "Όροι Geofilter Κοινότητας",
					LENS_STUDIO_TOS: "Όροι Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Απαραίτητα cookies",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Χρησιμοποιούμε αυτά τα cookies</a> για να μπορεί να λειτουργεί η ιστοσελίδα. Αυτά τα cookies είναι απαραίτητα και δεν μπορείς να τα καταργήσεις.']
						},
						Preferences:
						{
							headline: "Προτιμήσεις και Αναλυτικά στοιχεία",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Χρησιμοποιούμε αυτά τα cookies</a> για να θυμάσαι τις προτιμήσεις σου και να βελτιώνουμε την εμπειρία σου στον ιστότοπό μας.']
						},
						Performance:
						{
							headline: "Απόδοση και Analytics",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Χρησιμοποιούμε αυτά τα cookies</a> για να συλλέγουμε πληροφορίες σχετικά με το πώς χρησιμοποιείς τον ιστότοπό μας, την απόδοση του ιστοτόπου μας και για να βελτιώνουμε την απόδοση και την εμπειρία σου.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Χρησιμοποιούμε αυτά τα cookies</a> για να σου παρέχουμε σχετικές διαφημίσεις και να μετρούμε την αποτελεσματικότητα των διαφημίσεών μας. Τριτοι διαφημιστικοί συνεργάτες μας μπορεί να χρησιμοποιήσουν αυτά τα cookies για να δημιουργήσουν ένα προφίλ των ενδιαφερόντων σας και να παραδώσουν σχετικές διαφημίσεις σε άλλους ιστότοπους.']
						}
					},
					ThirdPartyAdvertisersText: "τρίτοι διαφημιστικοί συνεργάτες",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Τρίτοι διαφημιστικοί συνεργάτες:",
					EffectiveDate: "Ενεργό: 15 Ιανουαρίου 2019",
					Body: ["Εκτός από τη διαχείριση των cookies μέσω του προγράμματος περιήγησης ή της συσκευής σου, μπορείς να αλλάξεις τις ρυθμίσεις cookies παρακάτω. Παρακαλούμε σημείωσε ότι ορισμένα cookies είναι απαραίτητα για να λειτουργεί ο ιστότοπός μας και δεν μπορούν να αποκλειστούν από τις ρυθμίσεις αυτές."],
					Title: "Ρυθμίσεις Cookie",
					COOKIE_POPUP: 'Γεια! Χρησιμοποιούμε cookies και παρόμοιες τεχνολογίες («cookies»), συμπεριλαμβανομένων cookies τρίτων, σε αυτή την ιστοσελίδα για να μπορεί να λειτουργεί και να βελτιώσουμε την εμπειρία σας στη σελίδα μας, να παρακολουθούμε την απόδοση της σελίδας και για διαφημιστικούς σκοπούς. Για περισσότερες πληροφορίες σχετικά με το πώς χρησιμοποιούμε τα cookies και τις επιλογές σου για τα cookies, πήγαινε <a href="{COOKIE_POLICY_URL}" target="_blank">εδώ</a> για την πολιτική μας για τα cookies! Πατώντας «Αποδοχή cookies» παρακάτω, μας δίνεις τη συγκατάθεσή σου να χρησιμοποιούμε cookies (εκτός αν η συγκατάθεση δεν είναι απαραίτητη για τα cookies που είναι αναγκαία για τη λειτουργία του ιστοτόπου). Μπορείς να αλλάξεις τις ρυθμίσεις cookies σου και να αποσύρεις τη συγκατάθεσή σου οποτεδήποτε, πατώντας «Ρυθμίσεις cookies» παρακάτω.',
					COOKIE_POPUP_EU: 'Γεια! Χρησιμοποιούμε cookies και παρόμοιες τεχνολογίες («cookies»), συμπεριλαμβανομένων cookies τρίτων, σε αυτή την ιστοσελίδα για να μπορεί να λειτουργεί και να βελτιώσουμε την εμπειρία σας στη σελίδα μας, να παρακολουθούμε την απόδοση της σελίδας και για διαφημιστικούς σκοπούς. Για περισσότερες πληροφορίες σχετικά με το πώς χρησιμοποιούμε τα cookies και τις επιλογές σου για τα cookies, πήγαινε <a href="{COOKIE_POLICY_URL}" target="_blank">εδώ</a> για την πολιτική μας για τα cookies! Πατώντας «Αποδοχή cookies» παρακάτω, μας δίνεις τη συγκατάθεσή σου να χρησιμοποιούμε cookies (εκτός αν η συγκατάθεση δεν είναι απαραίτητη για τα cookies που είναι αναγκαία για τη λειτουργία του ιστοτόπου). Μπορείς να αλλάξεις τις ρυθμίσεις cookies σου και να αποσύρεις τη συγκατάθεσή σου οποτεδήποτε, πατώντας «Ρυθμίσεις cookies» παρακάτω.',
					AgreeText: "Αποδοχή Cookies",
					SettingsText: "Ρυθμίσεις Cookies",
					"Report Infringement": "Αναφορά Παραβίασης"
				},
				"en-gb":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Live",
					Ads: "Adverts",
					Company: "Company",
					Home: "Home",
					Blog: "Blog",
					Jobs: "Jobs",
					Careers: "Careers",
					Press: "Press",
					News: "News",
					"Press Inquiries": "Press Enquiries",
					Twitter: "Twitter",
					Language: "Language",
					"Download Snapchat": "Download Snapchat",
					Download: "Download",
					Kit: "Kit",
					Stories: "Stories",
					"Lens Studio": "Lens Studio",
					Store: "Store",
					"Snapchat for iOS": "Snapchat for iOS",
					"Snapchat for Android": "Snapchat for Android",
					Community: "Community",
					Support: "Support",
					"Community Guidelines": "Community Guidelines",
					"Safety Center": "Safety Centre",
					Snapcodes: "Snapcodes",
					Geofilters: "Geofilters",
					Create: "Filters & Lenses",
					Map: "Map",
					Advertising: "Advertising",
					"Buy Ads": "Buy Adverts",
					"Advertising Policies": "Advertising Policies",
					"Political Ads Library": "Political Ads Library",
					"Brand Guidelines": "Brand Guidelines",
					"Promotions Rules": "Promotions Rules",
					Legal: "Legal",
					"Terms of Service": "Terms of Service",
					Impressum: "Impressum",
					"Privacy Policy": "Privacy Policy",
					"Privacy Center": "Privacy Centre",
					"Cookie Policy": "Cookie Policy",
					"Memories Terms of Service": "Memories Terms of Service",
					CUSTOM_CREATIVE_TOOLS_TOS: "Custom Creative Tools Terms",
					COMMUNITY_TOS: "Community Geofilter Terms",
					LENS_STUDIO_TOS: "Lens Studio Terms",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Necessary cookies",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">We use these cookies</a> to help operate the site. Because these cookies are necessary, you can’t turn them off.']
						},
						Preferences:
						{
							headline: "Preferences",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">We use these cookies</a> to remember your preferences and improve your experience on our website.']
						},
						Performance:
						{
							headline: "Performance & Analytics",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">We use these cookies</a> to collect information about how you use our site, monitor site performance and improve our site performance and your experience.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">We use these cookies</a> to deliver relevant advertising and measure the effectiveness of our advertising campaigns. Our third-party advertising partners may use these cookies to build a profile of your interests and deliver relevant advertising on other sites.']
						}
					},
					ThirdPartyAdvertisersText: "third-party advertising partners",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Third-party advertising partners:",
					EffectiveDate: "Effective: 15 January 2019",
					Body: ["In addition to managing cookies through your browser or device, you can change your cookie settings below. Please note that certain cookies are necessary to run our site and can’t be blocked using these settings."],
					Title: "Cookie Settings",
					COOKIE_POPUP: 'Hi! We use cookies and similar technologies (“cookies”), including third-party cookies, on this website to help operate and improve your experience on our site, monitor our site performance, and for advertising purposes. For more information on how we use cookies and your cookie choices, go <a href="{COOKIE_POLICY_URL}" target="_blank">here</a> for our cookie policy! By clicking “Accept Cookies” below, you are giving us consent to use cookies (except consent is not required for cookies necessary to run our site). You can change your cookie settings and withdraw your consent at any time, by clicking on “Cookie Settings” below.',
					COOKIE_POPUP_EU: 'Hi! We use cookies and similar technologies (“cookies”), including third-party cookies, on this website to help operate and improve your experience on our site, monitor our site performance, and for advertising purposes. For more information on how we use cookies and your cookie choices, go <a href="{COOKIE_POLICY_URL}" target="_blank">here</a> for our cookie policy! By clicking “Accept Cookies” below, you are giving us consent to use cookies (except consent is not required for cookies necessary to run our site). You can change your cookie settings and withdraw your consent at any time, by clicking on “Cookie Settings” below.',
					AgreeText: "Accept Cookies",
					SettingsText: "Cookie Settings",
					"Report Infringement": "Report Infringement"
				},
				"en-us":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Live",
					Ads: "Ads",
					Company: "Company",
					Home: "Home",
					Blog: "Blog",
					Jobs: "Jobs",
					Careers: "Careers",
					Press: "Press",
					News: "News",
					"Press Inquiries": "Press Inquiries",
					Twitter: "Twitter",
					Language: "Language",
					"Download Snapchat": "Download Snapchat",
					Download: "Download",
					Kit: "Kit",
					Stories: "Stories",
					"Lens Studio": "Lens Studio",
					Store: "Store",
					"Snapchat for iOS": "Snapchat for iOS",
					"Snapchat for Android": "Snapchat for Android",
					Community: "Community",
					Support: "Support",
					"Community Guidelines": "Community Guidelines",
					"Safety Center": "Safety Center",
					Snapcodes: "Snapcodes",
					Geofilters: "Geofilters",
					Create: "Filters & Lenses",
					Map: "Map",
					Advertising: "Advertising",
					"Buy Ads": "Buy Ads",
					"Advertising Policies": "Advertising Policies",
					"Political Ads Library": "Political Ads Library",
					"Brand Guidelines": "Brand Guidelines",
					"Promotions Rules": "Promotions Rules",
					Legal: "Legal",
					"Terms of Service": "Terms of Service",
					Impressum: "Impressum",
					"Privacy Policy": "Privacy Policy",
					"Privacy Center": "Privacy Center",
					"Cookie Policy": "Cookie Policy",
					"Memories Terms of Service": "Memories Terms of Service",
					CUSTOM_CREATIVE_TOOLS_TOS: "Custom Creative Tools Terms",
					COMMUNITY_TOS: "Community Geofilter Terms",
					LENS_STUDIO_TOS: "Lens Studio Terms",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Necessary cookies",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">We use these cookies</a> to help operate the site. Because these cookies are necessary, you can’t turn them off.']
						},
						Preferences:
						{
							headline: "Preferences",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">We use these cookies</a> to remember your preferences and improve your experience on our website.']
						},
						Performance:
						{
							headline: "Performance & Analytics",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">We use these cookies</a> to collect information about how you use our site, monitor site performance, and improve our site performance and your experience.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">We use these cookies</a> to deliver relevant advertising and measure the effectiveness of our advertising campaigns. Our third-party advertising partners may use these cookies to build a profile of your interests and deliver relevant advertising on other sites.']
						}
					},
					ThirdPartyAdvertisersText: "third-party advertising partners",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Third-party advertising partners:",
					EffectiveDate: "Effective: January 15, 2019",
					Body: ["In addition to managing cookies through your browser or device, you can change your cookie settings below. Please note that certain cookies are necessary to run our site and can’t be blocked using these settings."],
					Title: "Cookie Settings",
					COOKIE_POPUP: 'Hi! We use cookies and similar technologies (“cookies”), including third-party cookies, on this website to help operate and improve your experience on our site, monitor our site performance, and for advertising purposes. For more information on how we use cookies and your cookie choices, go <a href="{COOKIE_POLICY_URL}" target="_blank">here</a> for our cookie policy! By clicking "Accept Cookies" below, you are giving us consent to use cookies (except consent is not required for cookies necessary to run our site). You can change your cookie settings, and withdraw your consent at any time, by clicking on “Cookie Settings” below.',
					COOKIE_POPUP_EU: 'Hi! We use cookies and similar technologies (“cookies”), including third-party cookies, on this website to help operate and improve your experience on our site, monitor our site performance, and for advertising purposes. For more information on how we use cookies and your cookie choices, go <a href="{COOKIE_POLICY_URL}" target="_blank">here</a> for our cookie policy! By clicking "Accept Cookies" below, you are giving us consent to use cookies (except consent is not required for cookies necessary to run our site). You can change your cookie settings, and withdraw your consent at any time, by clicking on “Cookie Settings” below.',
					AgreeText: "Accept Cookies",
					SettingsText: "Cookie Settings",
					"Report Infringement": "Report Infringement"
				},
				"es-ar":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "En vivo",
					Ads: "Publicidades",
					Company: "Empresa",
					Home: "Inicio",
					Blog: "Blog",
					Jobs: "Empleos",
					Careers: "Carreras",
					Press: "Prensa",
					News: "Noticias",
					"Press Inquiries": "Consultas de prensa",
					Twitter: "Twitter",
					Language: "Idioma",
					"Download Snapchat": "Descargar Snapchat",
					Download: "Descargar",
					Kit: "Kit",
					Stories: "Historias",
					"Lens Studio": "Lens Studio",
					Store: "Tienda",
					"Snapchat for iOS": "Snapchat para iOS",
					"Snapchat for Android": "Snapchat para Android",
					Community: "Comunidad",
					Support: "Ayuda",
					"Community Guidelines": "Pautas para la comunidad",
					"Safety Center": "Centro de seguridad",
					Snapcodes: "Snapcódigos",
					Geofilters: "Geofiltros",
					Create: "Filtros y Lenses",
					Map: "Mapa",
					Advertising: "Publicidad",
					"Buy Ads": "Comprar publicidades",
					"Advertising Policies": "Normas de publicidad",
					"Political Ads Library": "Biblioteca de anuncios políticos",
					"Brand Guidelines": "Pautas de la marca",
					"Promotions Rules": "Reglas de promociones",
					Legal: "Legal",
					"Terms of Service": "Condiciones de servicio",
					Impressum: "Impressum",
					"Privacy Policy": "Política de privacidad",
					"Privacy Center": "Centro de privacidad",
					"Cookie Policy": "Política de cookies",
					"Memories Terms of Service": "Condiciones de servicio de Recuerdos",
					CUSTOM_CREATIVE_TOOLS_TOS: "Condiciones de herramientas creativas personalizadas",
					COMMUNITY_TOS: "Condiciones de Geofiltros para la comunidad",
					LENS_STUDIO_TOS: "Condiciones de Estudio de Lenses",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Cookies necesarias",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Usamos estas cookies</a> para optimizar el funcionamiento del sitio. Dado que son necesarias, no podés desactivarlas.']
						},
						Preferences:
						{
							headline: "Preferencias",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Usamos estas cookies</a> para recordar tus preferencias y mejorar tu experiencia en nuestro sitio web.']
						},
						Performance:
						{
							headline: "Rendimiento y análisis",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Usamos estas cookies</a> para recopilar información sobre cómo usás nuestro sito, controlar el rendimiento del sitio, y mejorar el rendimiento de nuestro sitio y tu experiencia.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Usamos estas cookies</a> para brindarte publicidad pertinente y medir la eficacia de nuestras campañas de publicidades. Nuestros socios publicitarios externos pueden utilizar estas cookies para crear un perfil con tus intereses y proporcionarte publicidad relevante en otros sitios web.']
						}
					},
					ThirdPartyAdvertisersText: "socios publicitarios externos",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Socios publicitarios externos:",
					EffectiveDate: "Vigente a partir de: 15 de enero de 2019",
					Body: ["Además de administrar cookies mediante tu navegador o dispositivo, puedes cambiar los ajustes de cookies a continuación. Ten en cuenta que ciertas cookies son necesarias para el funcionamiento de nuestro sitio y no se pueden bloquear con estos ajustes."],
					Title: "Ajustes de cookies",
					COOKIE_POPUP: '¡Hola! Utilizamos cookies y tecnologías similares ("cookies"), incluidas cookies de terceros, en este sitio web para optimizar su funcionamiento y mejorar tu experiencia en nuestro sitio, para controlar el rendimiento del sitio y para fines publicitarios. Para saber más sobre cómo usamos las cookies y las opciones que tenés, hacé clic <a href="{COOKIE_POLICY_URL}" target="_blank">acá</a> para ver nuestra política de cookies. Si hacés clic en "Aceptar cookies" a continuación, nos estás dando tu consentimiento para usar cookies (no se requiere consentimiento para las cookies que son necesarias para el funcionamiento de nuestro sitio). Podés modificar tus ajustes de cookies y retirar tu consentimiento en cualquier momento. Para ello, tenés que hacer clic en "Ajustes de cookies" a continuación.',
					COOKIE_POPUP_EU: '¡Hola! Utilizamos cookies y tecnologías similares ("cookies"), incluidas cookies de terceros, en este sitio web para optimizar su funcionamiento y mejorar tu experiencia en nuestro sitio, para controlar el rendimiento del sitio y para fines publicitarios. Para saber más sobre cómo usamos las cookies y las opciones que tenés, hacé clic <a href="{COOKIE_POLICY_URL}" target="_blank">acá</a> para ver nuestra política de cookies. Si hacés clic en "Aceptar cookies" a continuación, nos estás dando tu consentimiento para usar cookies (no se requiere consentimiento para las cookies que son necesarias para el funcionamiento de nuestro sitio). Podés modificar tus ajustes de cookies y retirar tu consentimiento en cualquier momento. Para ello, tenés que hacer clic en "Ajustes de cookies" a continuación.',
					AgreeText: "Aceptar cookies",
					SettingsText: "Ajustes de cookies",
					"Report Infringement": "Denunciar una infracción"
				},
				"es-es":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "En vivo",
					Ads: "Anuncios",
					Company: "Empresa",
					Home: "Inicio",
					Blog: "Blog",
					Jobs: "Empleos",
					Careers: "Carreras",
					Press: "Prensa",
					News: "Noticias",
					"Press Inquiries": "Consultas de prensa",
					Twitter: "Twitter",
					Language: "Idioma",
					"Download Snapchat": "Descargar Snapchat",
					Download: "Descargar",
					Kit: "Kit",
					Stories: "Historias",
					"Lens Studio": "Lens Studio",
					Store: "Tienda",
					"Snapchat for iOS": "Snapchat para iOS",
					"Snapchat for Android": "Snapchat para Android",
					Community: "Comunidad",
					Support: "Ayuda",
					"Community Guidelines": "Pautas para la comunidad",
					"Safety Center": "Centro de seguridad",
					Snapcodes: "Snapcódigos",
					Geofilters: "Geofiltros",
					Create: "Filtros y Lenses",
					Map: "Mapa",
					Advertising: "Publicidad",
					"Buy Ads": "Comprar anuncios",
					"Advertising Policies": "Políticas de publicidad",
					"Political Ads Library": "Biblioteca de anuncios de carácter político",
					"Brand Guidelines": "Pautas de la marca",
					"Promotions Rules": "Reglas de promociones",
					Legal: "Legal",
					"Terms of Service": "Condiciones de servicio",
					Impressum: "Impressum",
					"Privacy Policy": "Política de privacidad",
					"Privacy Center": "Centro de privacidad",
					"Cookie Policy": "Política de cookies",
					"Memories Terms of Service": "Condiciones de servicio de Recuerdos",
					CUSTOM_CREATIVE_TOOLS_TOS: "Condiciones de herramientas creativas personalizadas",
					COMMUNITY_TOS: "Condiciones de Geofiltros para la comunidad",
					LENS_STUDIO_TOS: "Condiciones de Estudio de Lenses",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Cookies necesarias",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Usamos estas cookies</a> para permitir el funcionamiento del sitio. Como estas cookies son necesarias, no puedes desactivarlas.']
						},
						Preferences:
						{
							headline: "Preferencias",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Usamos estas cookies</a> para recordar tus preferencias y mejorar tu experiencia en nuestro sitio web.']
						},
						Performance:
						{
							headline: "Rendimiento y análisis",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Usamos estas cookies</a> para recopilar información sobre cómo usas nuestro sitio, controlar su rendimiento y mejorarlo, además de mejorar tu experiencia.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Usamos estas cookies</a> para ofrecerte publicidad pertinente y medir la eficacia de nuestras campañas de anuncios. Los terceros que están asociados con nosotros para la publicidad pueden utilizar estas cookies para crear un perfil con tus intereses y ofrecerte publicidad pertinente en otros sitios web.']
						}
					},
					ThirdPartyAdvertisersText: "terceros asociados con nosotros para la publicidad",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Estos son los terceros que están asociados con nosotros para la publicidad:",
					EffectiveDate: "Vigente a partir de: 15 de enero de 2019",
					Body: ["Además de administrar cookies mediante tu navegador o dispositivo, puedes cambiar los ajustes de cookies a continuación. Ten en cuenta que ciertas cookies son necesarias para el funcionamiento de nuestro sitio y no se pueden bloquear con estos ajustes."],
					Title: "Ajustes de cookies",
					COOKIE_POPUP: '¡Hola! En este sitio web usamos cookies y tecnologías similares («cookies»), incluidas las cookies de terceros, para permitir el funcionamiento del sitio y mejorar tu experiencia, para controlar su rendimiento y con fines publicitarios. Para saber más sobre cómo usamos las cookies y las opciones que tienes, haz clic <a href="{COOKIE_POLICY_URL}" target="_blank">aquí</a> para ver nuestra política de cookies. Al hacer clic en «Aceptar cookies», nos das tu consentimiento para usar las cookies (excepto cuando el consentimiento no es obligatorio par alas cookies necesarias para permitir el funcionamiento del sitio). Puedes cambiar la configuración de cookies y retirar tu consentimiento en cualquier momento haciendo clic en «Configuración de cookies».',
					COOKIE_POPUP_EU: '¡Hola! En este sitio web usamos cookies y tecnologías similares («cookies»), incluidas las cookies de terceros, para permitir el funcionamiento del sitio y mejorar tu experiencia, para controlar su rendimiento y con fines publicitarios. Para saber más sobre cómo usamos las cookies y las opciones que tienes, haz clic <a href="{COOKIE_POLICY_URL}" target="_blank">aquí</a> para ver nuestra política de cookies. Al hacer clic en «Aceptar cookies», nos das tu consentimiento para usar las cookies (excepto cuando el consentimiento no es obligatorio par alas cookies necesarias para permitir el funcionamiento del sitio). Puedes cambiar la configuración de cookies y retirar tu consentimiento en cualquier momento haciendo clic en «Configuración de cookies».',
					AgreeText: "Aceptar cookies",
					SettingsText: "Configuración de cookies",
					"Report Infringement": "Denunciar una infracción"
				},
				"es-mx":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "En vivo",
					Ads: "Anuncios",
					Company: "Empresa",
					Home: "Inicio",
					Blog: "Blog",
					Jobs: "Empleos",
					Careers: "Carreras",
					Press: "Prensa",
					News: "Noticias",
					"Press Inquiries": "Consultas de prensa",
					Twitter: "Twitter",
					Language: "Idioma",
					"Download Snapchat": "Descargar Snapchat",
					Download: "Descargar",
					Kit: "Kit",
					Stories: "Historias",
					"Lens Studio": "Lens Studio",
					Store: "Tienda",
					"Snapchat for iOS": "Snapchat para iOS",
					"Snapchat for Android": "Snapchat para Android",
					Community: "Comunidad",
					Support: "Ayuda",
					"Community Guidelines": "Pautas para la comunidad",
					"Safety Center": "Centro de seguridad",
					Snapcodes: "Snapcódigos",
					Geofilters: "Geofiltros",
					Create: "Filtros y Lenses",
					Map: "Mapa",
					Advertising: "Publicidad",
					"Buy Ads": "Comprar anuncios",
					"Advertising Policies": "Políticas publicitarias",
					"Political Ads Library": "Biblioteca de anuncios con fines políticos",
					"Brand Guidelines": "Lineamientos de Marca",
					"Promotions Rules": "Reglas de promociones",
					Legal: "Legal",
					"Terms of Service": "Condiciones de servicio",
					Impressum: "Impressum",
					"Privacy Policy": "Política de privacidad",
					"Privacy Center": "Centro de privacidad",
					"Cookie Policy": "Política de cookies",
					"Memories Terms of Service": "Condiciones de servicio de Recuerdos",
					CUSTOM_CREATIVE_TOOLS_TOS: "Condiciones de herramientas creativas personalizadas",
					COMMUNITY_TOS: "Condiciones de Geofiltros para la comunidad",
					LENS_STUDIO_TOS: "Términos y Condiciones de Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Cookies necesarias",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Utilizamos cookies</a> para operar el sitio. Debido a que estas cookies son necesarias, no puedes desactivarlas.']
						},
						Preferences:
						{
							headline: "Preferencias",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Utilizamos cookies</a> para recordar tus preferencias y mejorar tu experiencia en nuestro sitio web.']
						},
						Performance:
						{
							headline: "Rendimiento y Analítica",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Utilizamos cookies</a> para recopilar información sobre cómo usas nuestro sitio, supervisar el rendimiento del mismo, y mejorar su rendimiento y tu experiencia.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Utilizamos cookies</a> para brindarte publicidad pertinente y medir la eficacia de nuestras campañas publicitarias. Nuestros socios publicitarios externos podrían utilizar estas cookies para construir un perfil basado en tus intereses y proporcionarte publicidad relevante en otros sitios web.']
						}
					},
					ThirdPartyAdvertisersText: "socios publicitarios externos",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Socios publicitarios externos:",
					EffectiveDate: "Vigente a partir de: 15 de enero de 2019",
					Body: ["Además de administrar cookies mediante tu navegador o dispositivo, puedes cambiar los ajustes de cookies a continuación. Ten en cuenta que ciertas cookies son necesarias para el funcionamiento de nuestro sitio y no se pueden bloquear con estos ajustes."],
					Title: "Ajustes de cookies",
					COOKIE_POPUP: '¡Hola! En este sitio usamos cookies y tecnologías similares ("cookies"), incluyendo cookies de terceros, para operar nuestro sitio y mejorar tu experiencia en él, así como para supervisar el rendimiento de nuestro sitio y para fines publicitarios. Para saber más sobre cómo usamos las cookies y las opciones que tienes, haz clic <a href="{COOKIE_POLICY_URL}" target="_blank">aquí</a> para ver nuestra política de cookies. Al hacer clic abajo, en "Aceptar cookies", nos autorizas a utilizar las cookies (excepto que no se requiere autorización para cookies necesarias para ejecutar nuestro sitio). Puedes cambiar los ajustes de cookies y revocar tu autorización en cualquier momento, solo haz clic en "Ajustes de cookies" a continuación.',
					COOKIE_POPUP_EU: '¡Hola! En este sitio usamos cookies y tecnologías similares ("cookies"), incluyendo cookies de terceros, para operar nuestro sitio y mejorar tu experiencia en él, así como para supervisar el rendimiento de nuestro sitio y para fines publicitarios. Para saber más sobre cómo usamos las cookies y las opciones que tienes, haz clic <a href="{COOKIE_POLICY_URL}" target="_blank">aquí</a> para ver nuestra política de cookies. Al hacer clic abajo, en "Aceptar cookies", nos autorizas a utilizar las cookies (excepto que no se requiere autorización para cookies necesarias para ejecutar nuestro sitio). Puedes cambiar los ajustes de cookies y revocar tu autorización en cualquier momento, solo haz clic en "Ajustes de cookies" a continuación.',
					AgreeText: "Aceptar cookies",
					SettingsText: "Ajustes de cookies",
					"Report Infringement": "Reportar una infracción"
				},
				es:
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "En vivo",
					Ads: "Anuncios",
					Company: "Empresa",
					Home: "Inicio",
					Blog: "Blog",
					Jobs: "Empleos",
					Careers: "Carreras",
					Press: "Prensa",
					News: "Noticias",
					"Press Inquiries": "Consultas de prensa",
					Twitter: "Twitter",
					Language: "Idioma",
					"Download Snapchat": "Descargar Snapchat",
					Download: "Descargar",
					Kit: "Kit",
					Stories: "Historias",
					"Lens Studio": "Lens Studio",
					Store: "Tienda",
					"Snapchat for iOS": "Snapchat para iOS",
					"Snapchat for Android": "Snapchat para Android",
					Community: "Comunidad",
					Support: "Ayuda",
					"Community Guidelines": "Pautas para la comunidad",
					"Safety Center": "Centro de seguridad",
					Snapcodes: "Snapcódigos",
					Geofilters: "Geofiltros",
					Create: "Filtros y Lentes",
					Map: "Mapa",
					Advertising: "Publicidad",
					"Buy Ads": "Comprar anuncios",
					"Advertising Policies": "Normas de publicidad",
					"Political Ads Library": "Biblioteca de anuncios políticos",
					"Brand Guidelines": "Pautas de la marca",
					"Promotions Rules": "Reglas de promociones",
					Legal: "Legal",
					"Terms of Service": "Condiciones de servicio",
					Impressum: "Impressum",
					"Privacy Policy": "Política de privacidad",
					"Privacy Center": "Centro de privacidad",
					"Cookie Policy": "Política de cookies",
					"Memories Terms of Service": "Condiciones de servicio de Recuerdos",
					CUSTOM_CREATIVE_TOOLS_TOS: "Condiciones de herramientas creativas personalizadas",
					COMMUNITY_TOS: "Condiciones de Geofiltros para la comunidad",
					LENS_STUDIO_TOS: "Condiciones de Estudio de Lenses",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Cookies necesarias",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Usamos estas cookies</a> para optimizar el funcionamiento del sitio. Dado que son necesarias, no puedes desactivarlas.']
						},
						Preferences:
						{
							headline: "Preferencias",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Usamos estas cookies</a> para recordar tus preferencias y mejorar tu experiencia en nuestro sitio web.']
						},
						Performance:
						{
							headline: "Rendimiento y análisis",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Usamos estas cookies</a> para recopilar información sobre cómo usas nuestro sito, controlar el rendimiento del sitio, y mejorar el rendimiento de nuestro sitio y tu experiencia.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Usamos estas cookies</a> para brindarte publicidad pertinente y medir la eficacia de nuestras campañas de anuncios. Nuestros socios publicitarios externos pueden utilizar estas cookies para crear un perfil con tus intereses y proporcionarte publicidad relevante en otros sitios web.']
						}
					},
					ThirdPartyAdvertisersText: "socios publicitarios externos",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Socios publicitarios externos:",
					EffectiveDate: "Vigente a partir de: 15 de enero de 2019",
					Body: ["Además de administrar cookies mediante tu navegador o dispositivo, puedes cambiar los ajustes de cookies a continuación. Ten en cuenta que ciertas cookies son necesarias para el funcionamiento de nuestro sitio y no se pueden bloquear con estos ajustes."],
					Title: "Ajustes de cookies",
					COOKIE_POPUP: '¡Hola! Utilizamos cookies y tecnologías similares ("cookies"), incluidas cookies de terceros, en este sitio web para optimizar su funcionamiento y mejorar tu experiencia en nuestro sitio, para controlar el rendimiento del sitio y para fines publicitarios. Para saber más sobre cómo usamos las cookies y las opciones que tienes, haz clic <a href="{COOKIE_POLICY_URL}" target="_blank">aquí</a> para ver nuestra política de cookies. Si haces clic en "Aceptar cookies" a continuación, nos estás dando tu consentimiento para usar cookies (no se requiere consentimiento para las cookies que son necesarias para el funcionamiento de nuestro sitio). Puedes modificar tus ajustes de cookies y retirar tu consentimiento en cualquier momento. Para ello, tienes que hacer clic en "Ajustes de cookies" a continuación.',
					COOKIE_POPUP_EU: '¡Hola! Utilizamos cookies y tecnologías similares ("cookies"), incluidas cookies de terceros, en este sitio web para optimizar su funcionamiento y mejorar tu experiencia en nuestro sitio, para controlar el rendimiento del sitio y para fines publicitarios. Para saber más sobre cómo usamos las cookies y las opciones que tienes, haz clic <a href="{COOKIE_POLICY_URL}" target="_blank">aquí</a> para ver nuestra política de cookies. Si haces clic en "Aceptar cookies" a continuación, nos estás dando tu consentimiento para usar cookies (no se requiere consentimiento para las cookies que son necesarias para el funcionamiento de nuestro sitio). Puedes modificar tus ajustes de cookies y retirar tu consentimiento en cualquier momento. Para ello, tienes que hacer clic en "Ajustes de cookies" a continuación.',
					AgreeText: "Aceptar cookies",
					SettingsText: "Ajustes de cookies",
					"Report Infringement": "Denunciar una infracción"
				},
				"fi-fi":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Live",
					Ads: "Mainokset",
					Company: "Yritys",
					Home: "Etusivu",
					Blog: "Blogi",
					Jobs: "Työpaikat",
					Careers: "Uramahdollisuudet",
					Press: "Media",
					News: "Uutiset",
					"Press Inquiries": "Mediatiedustelut",
					Twitter: "Twitter",
					Language: "Kieli",
					"Download Snapchat": "Lataa Snapchat",
					Download: "Lataa",
					Kit: "Kit",
					Stories: "Tarinat",
					"Lens Studio": "Lens Studio",
					Store: "Kauppa",
					"Snapchat for iOS": "Snapchat iOS:lle",
					"Snapchat for Android": "Snapchat Androidille",
					Community: "Yhteisö",
					Support: "Tuki",
					"Community Guidelines": "Yhteisön säännöt",
					"Safety Center": "Turvakeskus",
					Snapcodes: "Snapcode-koodit",
					Geofilters: "Geofilter-suodattimet",
					Create: "Suodattimet & Lens-tehosteet",
					Map: "Kartta",
					Advertising: "Mainonta",
					"Buy Ads": "Osta mainontaa",
					"Advertising Policies": "Mainonnan säännöt",
					"Political Ads Library": "Poliittisen mainonnan kirjasto",
					"Brand Guidelines": "Brändiohjeet",
					"Promotions Rules": "Kampanjoiden säännöt",
					Legal: "Juridiset tiedot",
					"Terms of Service": "Palveluehdot",
					Impressum: "Julkaisutiedot",
					"Privacy Policy": "Tietosuojaseloste",
					"Privacy Center": "Tietosuojakeskus",
					"Cookie Policy": "Evästeiden käyttö",
					"Memories Terms of Service": "Snapchat-Muistojen palveluehdot",
					CUSTOM_CREATIVE_TOOLS_TOS: "Luovien muokkaustyökalujen ehdot",
					COMMUNITY_TOS: "Yhteisön Geofilter-suodattimien ehdot",
					LENS_STUDIO_TOS: "Lens-studion ehdot",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Välttämättömät evästeet",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Käytämme evästeitä</a>, jotta sivusto toimisi hyvin. Ne ovat välttämättömiä, etkä siksi voi poistaa niitä käytöstä.']
						},
						Preferences:
						{
							headline: "Valinnat",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Käytämme näitä evästeitä</a> valintojesi tallentamiseen ja sivustokokemuksesi parantamiseen.']
						},
						Performance:
						{
							headline: "Toiminta ja analytiikka",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Näillä evästeillä</a> keräämme tietoa siitä, miten käytät sivustoamme, seuraamme sivuston toimintaa ja parannamme sen suorituskykyä sekä samalla käyttökokemusta.']
						},
						Marketing:
						{
							headline: "Markkinointi",
							content: ['Käytämme <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">näitä evästeitä</a> relevantin mainonnan näyttämiseen ja mainoskampanjoiden tehokkuuden mittaamiseen. Kolmannen osapuolen mainoskumppanimme voivat käyttää näitä evästeitä muodostaakseen profiilin mielenkiinnon kohteistasi ja tarjotakseen sinulle relevantteja mainoksia muilla sivustoilla.']
						}
					},
					ThirdPartyAdvertisersText: "Kolmannen osapuolen mainoskumppanimme",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Kolmannen osapuolen mainoskumppanimme:",
					EffectiveDate: "Voimassa alkaen: 15. tammikuuta, 2019",
					Body: ["Voit hallita evästeitä laitteessasi tai selaimessasi. Sen lisäksi voit muuttaa evästeasetuksia alla. Huomaa, että tietyt evästeet ovat välttämättömiä sivuston toiminnan kannalta, eikä niitä voi estää näillä asetuksilla."],
					Title: "Evästeasetukset",
					COOKIE_POPUP: 'Hei! Käytämme tällä verkkosivustolla evästeitä ja vastaavia teknologioita (yhdessä ”evästeet”), mukaan lukien kolmannen osapuolen evästeitä. Ne auttavat sivustomme toiminnassa ja käyttökokemuksen parantamisessa, sivuston toiminnan seuraamisessa sekä mainonnassa. Lisätietoja evästeiden käytöstä ja niihin liittyvistä valinnoistasi on <a href="{COOKIE_POLICY_URL}" target="_blank">evästekäytännössämme</a>. Napsauttamalla alla Hyväksy evästeet annat meille suostumuksesi evästeiden käyttöön (suostumusta ei tarvita sivuston toiminnan kannalta välttämättömien evästeiden käyttöön). Voit päivittää evästeasetukset tai perua suostumuksesi koska vain napsauttamalla alla Evästeasetukset.',
					COOKIE_POPUP_EU: 'Hei! Käytämme tällä verkkosivustolla evästeitä ja vastaavia teknologioita (yhdessä ”evästeet”), mukaan lukien kolmannen osapuolen evästeitä. Ne auttavat sivustomme toiminnassa ja käyttökokemuksen parantamisessa, sivuston toiminnan seuraamisessa sekä mainonnassa. Lisätietoja evästeiden käytöstä ja niihin liittyvistä valinnoistasi on <a href="{COOKIE_POLICY_URL}" target="_blank">evästekäytännössämme</a>. Napsauttamalla alla Hyväksy evästeet annat meille suostumuksesi evästeiden käyttöön (suostumusta ei tarvita sivuston toiminnan kannalta välttämättömien evästeiden käyttöön). Voit päivittää evästeasetukset tai perua suostumuksesi koska vain napsauttamalla alla Evästeasetukset.',
					AgreeText: "Hyväksy evästeet",
					SettingsText: "Evästeasetukset",
					"Report Infringement": "Ilmoita rikkomuksesta"
				},
				"fil-PH":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Live",
					Ads: "Ads",
					Company: "Company",
					Home: "Home",
					Blog: "Blog",
					Jobs: "Mga Trabaho",
					Careers: "Careers",
					Press: "Press",
					News: "Balita",
					"Press Inquiries": "Press Inquiries",
					Twitter: "Twitter",
					Language: "Wika",
					"Download Snapchat": "I-download ang Snapchat",
					Download: "I-download",
					Kit: "Kit",
					Stories: "Stories",
					"Lens Studio": "Lens Studio",
					Store: "Store",
					"Snapchat for iOS": "Snapchat para sa iOS",
					"Snapchat for Android": "Snapchat para sa Android",
					Community: "Community",
					Support: "Support",
					"Community Guidelines": "Community Guidelines",
					"Safety Center": "Safety Center",
					Snapcodes: "Snapcodes",
					Geofilters: "Geofilters",
					Create: "Filters & Lenses",
					Map: "Map",
					Advertising: "Advertising",
					"Buy Ads": "Bumili ng Ads",
					"Advertising Policies": "Advertising Policies",
					"Political Ads Library": "Political Ads Library",
					"Brand Guidelines": "Brand Guidelines",
					"Promotions Rules": "Rules ng Promotions",
					Legal: "Legal",
					"Terms of Service": "Terms of Service",
					Impressum: "Impressum",
					"Privacy Policy": "Privacy Policy",
					"Privacy Center": "Privacy Center",
					"Cookie Policy": "Cookie Policy",
					"Memories Terms of Service": "Memories Terms of Service",
					CUSTOM_CREATIVE_TOOLS_TOS: "Custom Creative Tools Terms",
					COMMUNITY_TOS: "Community Geofilter Terms",
					LENS_STUDIO_TOS: "Lens Studio Terms",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Kailangang cookies",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Ginagamit namin ang cookies na \'to</a> para makatulong na paganahin ang site. Dahil kailangan ang cookies na \'to, hindi mo mao-off ang mga \'yon.']
						},
						Preferences:
						{
							headline: "Preferences",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Ginagamit namin ang cookies na \'to</a> para tandaan ang preferences mo at mas pagandahin ang experience mo sa aming website.']
						},
						Performance:
						{
							headline: "Performance & Analytics",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Ginagamit namin ang cookies na \'to</a> para mangolekta ng impormasyon kung paano mo ginagamit ang aming site, i-monitor ang performance ng site, at pagandahin ang performance ng site at ang experience mo.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Ginagamit namin ang cookies na \'to</a> para magbigay ng advertising na may kaugnayan sa \'yo at sukatin ang pagiging epektibo ng aming advertising campaigns. Ang third-party advertising partners namin ay pwedeng gumamit ng cookies na ito para bumuo ng profile ng iyong mga interes at maghatid ng may kaugnayang advertising sa ibang mga site.']
						}
					},
					ThirdPartyAdvertisersText: "third-party advertising partners",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Mga third-party na advertising partner:",
					EffectiveDate: "Effective: Enero 15, 2019",
					Body: ["Dagdag pa sa pag-manage ng cookies sa pamamagitan ng iyong browser o device, pwede mong palitan ang cookie settings mo sa baba. Paalala lang na may ilang cookies na kinakailangan para patakbuhin ang aming site at 'di pwedeng i-block gamit ang settings na 'to."],
					Title: "Cookie Settings",
					COOKIE_POPUP: 'Hi! Gumagamit kami ng cookies at katulad na technologies (“cookies”), kasama ang third-party cookies, sa website na ito para makatulong na paganahin at pagandahin ang experience mo sa site namin, i-monitor ang performance ng aming site, at para sa advertising purposes. Para sa karagdagang impormasyon kung paano namin ginagamit ang cookies at ang mga desisyon mo na kaugnay ng cookies, pumunta <a href="{COOKIE_POLICY_URL}" target="_blank">dito</a> para sa aming cookie policy! Sa pamamagitan ng pag-click sa "I-accept ang Cookies" sa \'baba, binibigyan mo kami ng pahintulot na gumamit ng cookies (maliban sa cookies na kinakailangan para mapagana ang aming site na hindi nangangailangan ng pahintulot). Pwede mong baguhin ang iyong cookie settings, at bawiin ang iyong pahintulot any time, sa pamamagitan ng pag-click sa “Cookie Settings” sa \'baba.',
					COOKIE_POPUP_EU: 'Hi! Gumagamit kami ng cookies at katulad na technologies (“cookies”), kasama ang third-party cookies, sa website na ito para makatulong na paganahin at pagandahin ang experience mo sa site namin, i-monitor ang performance ng aming site, at para sa advertising purposes. Para sa karagdagang impormasyon kung paano namin ginagamit ang cookies at ang mga desisyon mo na kaugnay ng cookies, pumunta <a href="{COOKIE_POLICY_URL}" target="_blank">dito</a> para sa aming cookie policy! Sa pamamagitan ng pag-click sa "I-accept ang Cookies" sa \'baba, binibigyan mo kami ng pahintulot na gumamit ng cookies (maliban sa cookies na kinakailangan para mapagana ang aming site na hindi nangangailangan ng pahintulot). Pwede mong baguhin ang iyong cookie settings, at bawiin ang iyong pahintulot any time, sa pamamagitan ng pag-click sa “Cookie Settings” sa \'baba.',
					AgreeText: "I-accept ang Cookies",
					SettingsText: "Cookie Settings",
					"Report Infringement": "Mag-report ng Paglabag"
				},
				"fr-fr":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "En direct",
					Ads: "Formats publicitaires",
					Company: "Société",
					Home: "Accueil",
					Blog: "Blog",
					Jobs: "Emplois",
					Careers: "Carrières",
					Press: "Presse",
					News: "Actualités",
					"Press Inquiries": "Contact Presse",
					Twitter: "Twitter",
					Language: "Langue",
					"Download Snapchat": "Télécharger Snapchat",
					Download: "Télécharger",
					Kit: "Kit",
					Stories: "Stories",
					"Lens Studio": "Lens Studio",
					Store: "Store",
					"Snapchat for iOS": "Snapchat pour iOS",
					"Snapchat for Android": "Snapchat pour Android",
					Community: "Communauté",
					Support: "Assistance",
					"Community Guidelines": "Règles communautaires",
					"Safety Center": "Centre de sécurité",
					Snapcodes: "Snapcodes",
					Geofilters: "Geofilters",
					Create: "Filtres et Lenses",
					Map: "Carte",
					Advertising: "Publicité",
					"Buy Ads": "Acheter des publicités",
					"Advertising Policies": "Politiques relatives à la publicité",
					"Political Ads Library": "Bibliothèque des publicités politiques",
					"Brand Guidelines": "Charte de la marque",
					"Promotions Rules": "Règles applicables aux promotions",
					Legal: "Juridique",
					"Terms of Service": "Conditions d'utilisation du service",
					Impressum: "Impressum",
					"Privacy Policy": "Politique de confidentialité",
					"Privacy Center": "Centre de Confidentialité",
					"Cookie Policy": "Politique relative aux cookies",
					"Memories Terms of Service": "Conditions d'utilisation du service Memories",
					CUSTOM_CREATIVE_TOOLS_TOS: "Conditions générales des outils créatifs personnalisés",
					COMMUNITY_TOS: "Conditions générales des Geofilters communautaires",
					LENS_STUDIO_TOS: "Conditions d'utilisation de Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Cookies indispensables",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Nous utilisons ces cookies</a> pour faire fonctionner le site. Étant donné que ces cookies sont indispensables, vous ne pouvez pas les désactiver.']
						},
						Preferences:
						{
							headline: "Préférences",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Nous utilisons ces cookies</a> pour enregistrer vos préférences et améliorer votre expérience sur notre site.']
						},
						Performance:
						{
							headline: "Performances et analyse",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Nous utilisons ces cookies</a> pour collecter des informations sur la manière dont vous utilisez notre site, évaluer les performances de notre site, mais aussi améliorer les performances de notre site et votre expérience.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Nous utilisons ces cookies</a> pour diffuser des publicités pertinentes et mesurer l\'efficacité de nos campagnes publicitaires. Nos partenaires annonceurs tiers peuvent utiliser ces cookies pour établir un profil de vos centres d\'intérêts et vous présenter des publicités pertinentes sur d\'autres sites.']
						}
					},
					ThirdPartyAdvertisersText: "partenaires annonceurs tiers",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Partenaires annonceurs tiers :",
					EffectiveDate: "Date d'effet : 15 janvier 2019",
					Body: ["En plus de gérer les cookies via votre navigateur ou votre appareil, vous pouvez modifier vos paramètres de cookies ci-dessous. Veuillez noter que certains cookies sont nécessaires au fonctionnement de notre site et ne peuvent pas être bloqués à l'aide de ces paramètres."],
					Title: "Réglages des cookies",
					COOKIE_POPUP: 'Bonjour&nbsp;! Nous utilisons des cookies et des technologies similaires ("cookies"), y compris des cookies tiers, sur ce site web afin de le faire fonctionner et d\'en surveiller les performances, d\'améliorer votre expérience sur notre site et à des fins publicitaires. Pour en savoir plus sur notre utilisation des cookies et les choix qui s\'offrent à vous à ce sujet, consultez notre politique relative aux cookies <a href="{COOKIE_POLICY_URL}" target="_blank">ici</a>&nbsp;! En cliquant sur "Accepter les cookies" ci-dessous, vous nous autorisez à utiliser des cookies (le consentement n\'est pas requis pour les cookies indispensables au bon fonctionnement de notre site). Vous pouvez modifier vos réglages de cookies et vous opposer à tout moment à leur utilisation en cliquant sur "Réglages des cookies" ci-dessous.',
					COOKIE_POPUP_EU: 'Bonjour&nbsp;! Nous utilisons des cookies et des technologies similaires ("cookies"), y compris des cookies tiers, sur ce site web afin de le faire fonctionner et d\'en surveiller les performances, d\'améliorer votre expérience sur notre site et à des fins publicitaires. Pour en savoir plus sur notre utilisation des cookies et les choix qui s\'offrent à vous à ce sujet, consultez notre politique relative aux cookies <a href="{COOKIE_POLICY_URL}" target="_blank">ici</a>&nbsp;! En cliquant sur "Accepter les cookies" ci-dessous, vous nous autorisez à utiliser des cookies (le consentement n\'est pas requis pour les cookies indispensables au bon fonctionnement de notre site). Vous pouvez modifier vos réglages de cookies et vous opposer à tout moment à leur utilisation en cliquant sur "Réglages des cookies" ci-dessous.',
					AgreeText: "Accepter les cookies",
					SettingsText: "Réglages des cookies",
					"Report Infringement": "Signaler une violation"
				},
				"gu-IN":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "લાઇવ",
					Ads: "જાહેરાત",
					Company: "કંપની",
					Home: "હોમ",
					Blog: "બ્લૉગ",
					Jobs: "નોકરીઓ",
					Careers: "કારકીર્દિ",
					Press: "પ્રેસ",
					News: "સમાચાર",
					"Press Inquiries": "પ્રેસ અંગેની પૂછપરછ",
					Twitter: "ટ્વિટર",
					Language: "ભાષા",
					"Download Snapchat": "Snapchat ડાઉનલોડ કરો",
					Download: "ડાઉનલોડ કરો",
					Kit: "કિટ",
					Stories: "સ્ટોરીઝ",
					"Lens Studio": "Lens સ્ટુડિયો",
					Store: "સ્ટોર",
					"Snapchat for iOS": "iOS માટે Snapchat",
					"Snapchat for Android": "ઍન્ડ્રોઇડ માટે Snapchat",
					Community: "કમ્યુનિટિ",
					Support: "સહાયતા",
					"Community Guidelines": "કમ્યુનિટિના નિર્દેશો",
					"Safety Center": "સુરક્ષા કેન્દ્ર",
					Snapcodes: "Snapcodes",
					Geofilters: "જિયોફિલ્ટર્સ",
					Create: "ફિલ્ટર્સ એન્ડ Lenses",
					Map: "નકશો",
					Advertising: "જાહેરાત",
					"Buy Ads": "જાહેરાત ખરીદો",
					"Advertising Policies": "જાહેરાતની નીતિઓ",
					"Political Ads Library": "રાજનૈતિક જાહેરાતોની લાયબ્રેરી",
					"Brand Guidelines": "બ્રાંડના નિર્દેશો",
					"Promotions Rules": "પ્રમોશનના નિયમો",
					Legal: "કાનૂની",
					"Terms of Service": "સેવાની શરતો",
					Impressum: "ઇમ્પ્રેસમ",
					"Privacy Policy": "ગોપનીયતા નીતિ",
					"Privacy Center": "ગોપનીયતા કેન્દ્ર",
					"Cookie Policy": "કૂકી અંગેની નીતિ",
					"Memories Terms of Service": "યાદોની સેવાની શરતો",
					CUSTOM_CREATIVE_TOOLS_TOS: "કસ્ટમ રચનાત્મક ટૂલ્સની શરતો",
					COMMUNITY_TOS: "kકમ્યુનિટી Geofilter શરતો",
					LENS_STUDIO_TOS: "Lenses સ્ટુડિયોના નિયમો",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "જરૂરી કૂકિઝ",
							content: ['સાઇટને ઓપરેટ થવામાં મદદરૂપ બનવા માટે <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">અમે આ કૂકીઝનો ઉપયોગ કરીએ છીએ</a>. આ કૂકિઝ જરૂરીઓ હોવાથી, તમે તેને બંધ કરી શકો નહીં.']
						},
						Preferences:
						{
							headline: "પસંદગીઓ",
							content: ['અમારી વેબસાઇટ પર તમારી પસંદગીઓ યાદ રાખવા અને તમારા અનુભવને બહેતર બનાવવા માટે<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">અમે આ કૂકીઝનો ઉપયોગ કરીએ છીએ</a>.']
						},
						Performance:
						{
							headline: "કામગીરી અને વિશ્લેષણ",
							content: ['તમે અમારી સાઇટનો ઉપયોગ કેવી રીતે કરો છો તે અંગેની માહિતી એકત્રિત કરવા, સાઇટના પર્ફોર્મન્સની દેખરેખ રાખવા અને અમારી સાઇટનું પર્ફોર્મન્સ અને તમારા અનુભવને બહેતર બનાવવા માટે <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">અમે આ કૂકીઝનો ઉપયોગ કરીએ છીએ</a>.']
						},
						Marketing:
						{
							headline: "માર્કેટિંગ",
							content: ['સંબંધિત જાહેરાતો પ્રદાન કરવા અને અમારા જાહેરાત અભિયાનોની અસરકારકતા માપવા માટે <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">અમે આ કૂકીઝનો ઉપયોગ કરીએ છીએ</a>. તમને રસ પડે એવી પ્રોફાઇલ બનાવવા અને અન્ય સાઇટ પર સંબંધિત જાહેરાતો આપવા માટે અમારા ત્રીજા-પક્ષના જાહેરાતના ભાગીદારો આ કૂકીઝનો ઉપયોગ કરી શકે છે.']
						}
					},
					ThirdPartyAdvertisersText: "તૃતીય પક્ષ જાહેરાત ભાગીદારો",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">ટ્વિટર</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">પિનટેરેસ્ટ</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "ત્રીજા-પક્ષના જાહેરાત ભાગીદારો:",
					EffectiveDate: "અસરકારક: 15 જાન્યુઆરી, 2019",
					Body: ["તમારા બ્રાઉઝર અથવા ડિવાઇસમાંથી કૂકી મેનેજ કરવા ઉપરાંત, તમે નીચે તમારા કૂકી સેટિંગ બદલી શકો છો. કૃપા કરીને નોંધો કે અમારી સાઇટ ચલાવવા માટે ચોક્કસ કૂકી આવશ્યક છે અને આ સેટિંગનો ઉપયોગ કરીને અવરોધિત કરી શકતી નથી."],
					Title: "કૂકી સેટિંગ્સ",
					COOKIE_POPUP: 'નમસ્તે! અમે આ વેબસાઇટ પર અમારી સાઇટને ઓપરેટ કરવામાં મદદરૂપ થવા અને તમારો અનુભવ વધુ સારો બનાવવા, અમારી સાઇટની કામગીરી પર દેખરેખ રાખવા, અને જાહેરાત કરવાના હેતુસર ત્રીજા-પક્ષની કૂકિઝ સહિત, કૂકિઝ અને સમાન તકનીકોનો (“કૂકિઝ”) ઉપયોગ કરીએ છે. અમે કૂકીનો કેવી રીતે ઉપયોગ કરીએ છીએ અને તમારી કૂકી પસંદગી વિશે વધુ માહિતી માટે, અમારી કૂકી નીતિ માટે <a href="{COOKIE_POLICY_URL}" target="_blank">અહીં જાઓ</a>! "કૂકિઝ સ્વીકારો" પર નીચે ક્લિક કરવાથી, તમે તમે અમને કૂકિઝનો ઉપયોગ કરવાની પરવાનગી આપો છો (સિવાય કે સાઇટને ચલાવવા માટે જરૂરી હોય એવી કૂકિઝ માાટે પરવાનગીની જરૂર નથી). તમે તમારા કૂકિના સેટિંગ્સ બદલી શકો છો, અને નીચે "કૂકિઝ સેટિંગ્સ" પર ક્લિક કરીને કોઈ પણ સમયે તમારી પરવાગી પરત ખેંચી શકો છો.',
					COOKIE_POPUP_EU: 'નમસ્તે! અમે આ વેબસાઇટ પર અમારી સાઇટને ઓપરેટ કરવામાં મદદરૂપ થવા અને તમારો અનુભવ વધુ સારો બનાવવા, અમારી સાઇટની કામગીરી પર દેખરેખ રાખવા, અને જાહેરાત કરવાના હેતુસર ત્રીજા-પક્ષની કૂકિઝ સહિત, કૂકિઝ અને સમાન તકનીકોનો (“કૂકિઝ”) ઉપયોગ કરીએ છે. અમે કૂકીનો કેવી રીતે ઉપયોગ કરીએ છીએ અને તમારી કૂકી પસંદગી વિશે વધુ માહિતી માટે, અમારી કૂકી નીતિ માટે <a href="{COOKIE_POLICY_URL}" target="_blank">અહીં જાઓ</a>! "કૂકિઝ સ્વીકારો" પર નીચે ક્લિક કરવાથી, તમે તમે અમને કૂકિઝનો ઉપયોગ કરવાની પરવાનગી આપો છો (સિવાય કે સાઇટને ચલાવવા માટે જરૂરી હોય એવી કૂકિઝ માાટે પરવાનગીની જરૂર નથી). તમે તમારા કૂકિના સેટિંગ્સ બદલી શકો છો, અને નીચે "કૂકિઝ સેટિંગ્સ" પર ક્લિક કરીને કોઈ પણ સમયે તમારી પરવાગી પરત ખેંચી શકો છો.',
					AgreeText: "કૂકિઝ સ્વીકારો",
					SettingsText: "કૂકી સેટિંગ્સ",
					"Report Infringement": "ઉલ્લંઘન વિશે જાણ કરો"
				},
				"hi-IN":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "लाइव",
					Ads: "विज्ञापन",
					Company: "कंपनी",
					Home: "होम",
					Blog: "ब्लॉग",
					Jobs: "जॉब",
					Careers: "कैरियर",
					Press: "प्रेस",
					News: "न्यूज़",
					"Press Inquiries": "प्रेस पूछताछ",
					Twitter: "Twitter",
					Language: "भाषा",
					"Download Snapchat": "Snapchat डाउनलोड करें",
					Download: "डाउनलोड करें",
					Kit: "किट",
					Stories: "स्टोरीज",
					"Lens Studio": "Lens स्टूडियो",
					Store: "स्टोर",
					"Snapchat for iOS": "iOS के लिए Snapchat",
					"Snapchat for Android": "Android के लिए Snapchat",
					Community: "कम्युनिटी",
					Support: "सपोर्ट",
					"Community Guidelines": "कम्युनिटी दिशानिर्देश",
					"Safety Center": "सुरक्षा केंद्र",
					Snapcodes: "Snapcodes",
					Geofilters: "जियोफ़िल्टर",
					Create: "फिल्टर और Lenses",
					Map: "मैप",
					Advertising: "विज्ञापन",
					"Buy Ads": "विज्ञापन खरीदें",
					"Advertising Policies": "विज्ञापन नीतियां",
					"Political Ads Library": "राजनीतिक विज्ञापन लाइब्रेरी",
					"Brand Guidelines": "ब्रांड संबंधी दिशानिर्देश",
					"Promotions Rules": "प्रमोशन नियम",
					Legal: "लीगल",
					"Terms of Service": "सेवा की शर्तें",
					Impressum: "इम्प्रेसम",
					"Privacy Policy": "गोपनीयता नीति",
					"Privacy Center": "गोपनीयता केंद्र",
					"Cookie Policy": "कुकी नीति",
					"Memories Terms of Service": "मेमोरीज सेवा की शर्तें",
					CUSTOM_CREATIVE_TOOLS_TOS: "कस्टम क्रिएटिव टूल्स शर्तें",
					COMMUNITY_TOS: "कम्युनिटी Geofilter शर्तें",
					LENS_STUDIO_TOS: "Lens स्टूडियो की शर्तें",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "आवश्यक कुकीज़",
							content: ['इस साइट के परिचालन में मदद के लिए <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">हम कुकीज़ का उपयोग करते हैं।</a> क्योंकि ये कुकीज़ आवश्यक होते हैं, इसलिए आप इन्हें बंद नहीं कर सकते।']
						},
						Preferences:
						{
							headline: "प्राथमिकताएं",
							content: ['आपकी प्राथमिकताएं याद रखने और हमारी वेबसाइट पर आपके अनुभव को बेहतर बनाने के लिए<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">हम इन कुकीज़ का उपयोग करते हैं।</a>']
						},
						Performance:
						{
							headline: "प्रदर्शन और विश्लेषण",
							content: ['आपके द्वारा हमारी साइट के उपयोग की जानकारी लेने, साइट के प्रदर्शन पर नजर रखने, और अपनी साइट के प्रदर्शन तथा आपके अनुभव में सुधार करने के लिए <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">हम इन कुकीज का उपयोग करते हैं।</a>']
						},
						Marketing:
						{
							headline: "मार्केटिंग",
							content: ['प्रासंगिक विज्ञापन देने और अपने विज्ञापन अभियानों की प्रभावशीलता को मापने के लिए <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">हम इन कुकीज़ का उपयोग करते हैं।</a> हमारे तृतीय पक्ष विज्ञापन इन कूकीज़ का उपयोग भागीदार आपकी दिलचस्पी की प्रोफ़ाइल बनाने और अन्य साइटों पर प्रासंगिक विज्ञापन देने में कर सकते हैं।']
						}
					},
					ThirdPartyAdvertisersText: "तृतीय पक्ष विज्ञापन भागीदार",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', ' <a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', ' <a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "तृतीय-पक्ष विज्ञापन भागीदार:",
					EffectiveDate: "प्रभावी तिथि: 15 जनवरी, 2019",
					Body: ["अपने ब्राउजर या डिवाइस के माध्यम से कुकीज का प्रबंधन करने के अलावा, आप नीचे अपनी कुकी सेटिंग बदल सकते हैं। कृपया ध्यान दें कि हमारी साइट को चलाने के लिए कुछ कुकीज आवश्यक हैं और इन सेटिंग का उपयोग करके इन्हें ब्लॉक नहीं किया जा सकता है।"],
					Title: "कुकी सेटिंग",
					COOKIE_POPUP: 'नमस्ते! हम तृतीय पक्षों के कुकीज़ सहित कुकीज़ और समान प्रौद्योगिकी ("कुकीज़") का उपयोग इस वेबसाइट पर अपनी साइट के परिचालन में मदद के लिए और आपके अनुभव को बेहतर बनाने, हमारी साइट के परफॉर्मेंस पर नजर रखने और विज्ञापन उद्देश्यों के लिए करते हैं। कुकीज़ का उपयोग करने के हमारे तरीकों और कुकीज़ के लिए आपके विकल्पों पर अधिक जानकारी के लिए, <a href="{COOKIE_POLICY_URL}" target="_blank">यहां</a> जाएं और हमारी कुकी नीति देखें! नीचे "कुकीज़ स्वीकार करें" पर क्लिक करके, आप हमें कुकीज़ का उपयोग करने की सहमति दे रहे हैं (उस स्थिति में सहमति की आवश्यकता नहीं है जहां हमारी साइट को चलाने के लिए कुकीज़ की आवश्यकता है)। नीचे "कुकीज़ सेटिंग्स" पर क्लिक कर, आप अपनी कुकीज़ सेटिंग्स बदल सकते हैं और किसी भी समय अपनी सहमति वापस ले सकते हैं।',
					COOKIE_POPUP_EU: 'नमस्ते! हम तृतीय पक्षों के कुकीज़ सहित कुकीज़ और समान प्रौद्योगिकी ("कुकीज़") का उपयोग इस वेबसाइट पर अपनी साइट के परिचालन में मदद के लिए और आपके अनुभव को बेहतर बनाने, हमारी साइट के परफॉर्मेंस पर नजर रखने और विज्ञापन उद्देश्यों के लिए करते हैं। कुकीज़ का उपयोग करने के हमारे तरीकों और कुकीज़ के लिए आपके विकल्पों पर अधिक जानकारी के लिए, <a href="{COOKIE_POLICY_URL}" target="_blank">यहां</a> जाएं और हमारी कुकी नीति देखें! नीचे "कुकीज़ स्वीकार करें" पर क्लिक करके, आप हमें कुकीज़ का उपयोग करने की सहमति दे रहे हैं (उस स्थिति में सहमति की आवश्यकता नहीं है जहां हमारी साइट को चलाने के लिए कुकीज़ की आवश्यकता है)। नीचे "कुकीज़ सेटिंग्स" पर क्लिक कर, आप अपनी कुकीज़ सेटिंग्स बदल सकते हैं और किसी भी समय अपनी सहमति वापस ले सकते हैं।',
					AgreeText: "कुकीज़ स्वीकार करें",
					SettingsText: "कुकी सेटिंग",
					"Report Infringement": "उल्लंघन की रिपोर्ट करें"
				},
				"id-id":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Langsung",
					Ads: "Iklan",
					Company: "Perusahaan",
					Home: "Beranda",
					Blog: "Blog",
					Jobs: "Pekerjaan",
					Careers: "Karier",
					Press: "Pers",
					News: "Berita",
					"Press Inquiries": "Pertanyaan Pers",
					Twitter: "Twitter",
					Language: "Bahasa",
					"Download Snapchat": "Unduh Snapchat",
					Download: "Unduh",
					Kit: "Perlengkapan",
					Stories: "Cerita",
					"Lens Studio": "Studio Lens",
					Store: "Toko",
					"Snapchat for iOS": "Snapchat untuk iOS",
					"Snapchat for Android": "Snapchat untuk Android",
					Community: "Komunitas",
					Support: "Dukungan",
					"Community Guidelines": "Panduan Komunitas",
					"Safety Center": "Pusat Keamanan",
					Snapcodes: "Snapcode",
					Geofilters: "Geofilter",
					Create: "Filter & Lensa",
					Map: "Peta",
					Advertising: "Periklanan",
					"Buy Ads": "Beli Iklan",
					"Advertising Policies": "Kebijakan Periklanan",
					"Political Ads Library": "Perpustakaan Iklan Politik",
					"Brand Guidelines": "Panduan Merek",
					"Promotions Rules": "Peraturan Promosi",
					Legal: "Legal",
					"Terms of Service": "Ketentuan Layanan",
					Impressum: "Impressum",
					"Privacy Policy": "Kebijakan Privasi",
					"Privacy Center": "Pusat Privasi",
					"Cookie Policy": "Kebijakan Cookie",
					"Memories Terms of Service": "Ketentuan Layanan Memori",
					CUSTOM_CREATIVE_TOOLS_TOS: "Ketentuan Alat Kreativitas Kustom",
					COMMUNITY_TOS: "Ketentuan Komunitas Geofilter",
					LENS_STUDIO_TOS: "Ketentuan Studio Lensa",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Cookie yang diperlukan",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Kami menggunakan cookie</a> untuk menjalankan situs. Karena diperlukan, cookie tidak bisa dinonaktifkan.']
						},
						Preferences:
						{
							headline: "Preferensi",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Kami menggunakan cookie</a> untuk mengingat preferensi Anda dan memberikan pengalaman pengguna yang lebih baik di situs web kami.']
						},
						Performance:
						{
							headline: "Performa & Analitik",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Kami menggunakan cookie</a> untuk mengumpulkan informasi mengenai cara Anda menggunakan situs kami, memantau kinerja situs, serta meningkatkan kinerja situs dan pengalaman Anda.']
						},
						Marketing:
						{
							headline: "Pemasaran",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Kami menggunakan cookie</a> untuk menayangkan iklan yang relevan dan mengukur efektivitas kampanye iklan kami. Mitra iklan pihak ketiga kami dapat menggunakan cookie ini untuk membuat profil minat Anda dan menayangkan iklan yang relevan di situs lain.']
						}
					},
					ThirdPartyAdvertisersText: "mitra iklan pihak ketiga",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Mitra iklan pihak ketiga:",
					EffectiveDate: "Berlaku: 15 Januari 2019",
					Body: ["Selain mengelola cookie melalui browser atau perangkatmu, kamu bisa mengubah pengaturan cookie-mu di bawah ini. Harap diingat bahwa beberapa cookie diperlukan untuk menjalankan situs kami dan tidak bisa diblokir menggunakan pengaturan ini."],
					Title: "Pengaturan Cookie",
					COOKIE_POPUP: 'Hai! Kami menggunakan cookie dan teknologi serupa (“cookies”), termasuk cookie pihak ketiga, untuk menjalankan situs web ini serta meningkatkan pengalaman pengguna, memantau kinerja situs kami, dan demi tujuan periklanan. Untuk informasi lebih lanjut mengenai cara kami menggunakan cookie dan cookie pilihan Anda, lihat <a href="{COOKIE_POLICY_URL}" target="_blank">di sini</a> terkait kebijakan cookie kami! Dengan mengklik "Terima Cookie" di bawah ini, berarti Anda mengizinkan kami menggunakan cookie (kecuali dalam hal izin tidak diperlukan untuk cookie yang dibutuhkan demi menjalankan situs kami). Anda bisa mengubah pengaturan cookie dan mencabut izin kapan saja dengan mengklik “Pengaturan Cookie” di bawah ini.',
					COOKIE_POPUP_EU: 'Hai! Kami menggunakan cookie dan teknologi serupa (“cookies”), termasuk cookie pihak ketiga, untuk menjalankan situs web ini serta meningkatkan pengalaman pengguna, memantau kinerja situs kami, dan demi tujuan periklanan. Untuk informasi lebih lanjut mengenai cara kami menggunakan cookie dan cookie pilihan Anda, lihat <a href="{COOKIE_POLICY_URL}" target="_blank">di sini</a> terkait kebijakan cookie kami! Dengan mengklik "Terima Cookie" di bawah ini, berarti Anda mengizinkan kami menggunakan cookie (kecuali dalam hal izin tidak diperlukan untuk cookie yang dibutuhkan demi menjalankan situs kami). Anda bisa mengubah pengaturan cookie dan mencabut izin kapan saja dengan mengklik “Pengaturan Cookie” di bawah ini.',
					AgreeText: "Terima Cookie",
					SettingsText: "Pengaturan Cookie",
					"Report Infringement": "Laporkan Pelanggaran"
				},
				"it-it":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Live",
					Ads: "Spot",
					Company: "Società",
					Home: "Home",
					Blog: "Blog",
					Jobs: "Lavora con noi",
					Careers: "Posizioni aperte",
					Press: "Stampa",
					News: "Notizie",
					"Press Inquiries": "Richieste stampa",
					Twitter: "Twitter",
					Language: "Lingua",
					"Download Snapchat": "Scarica Snapchat",
					Download: "Scarica",
					Kit: "Kit",
					Stories: "Storie",
					"Lens Studio": "Lens Studio",
					Store: "Store",
					"Snapchat for iOS": "Snapchat per iOS",
					"Snapchat for Android": "Snapchat per Android",
					Community: "Community",
					Support: "Assistenza",
					"Community Guidelines": "Linee Guida per la community",
					"Safety Center": "Centro Sicurezza",
					Snapcodes: "Snapcode",
					Geofilters: "Geofilter",
					Create: "Filtri e Lenses",
					Map: "Map",
					Advertising: "Pubblicità",
					"Buy Ads": "Acquista Pubblicità",
					"Advertising Policies": "Informative generali",
					"Political Ads Library": "Archivio Inserzioni politiche",
					"Brand Guidelines": "Linee guida del Brand",
					"Promotions Rules": "Regolamento sulle promozioni",
					Legal: "Note Legali",
					"Terms of Service": "Termini di Servizio",
					Impressum: "Impressum",
					"Privacy Policy": "Informativa sulla Privacy",
					"Privacy Center": "Centro Privacy",
					"Cookie Policy": "Informativa sui Cookie",
					"Memories Terms of Service": "Termini di Servizio di Ricordi",
					CUSTOM_CREATIVE_TOOLS_TOS: "Termini per Strumenti creativi personalizzati",
					COMMUNITY_TOS: "Termini per Geofilter Community",
					LENS_STUDIO_TOS: "Termini per Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Cookie necessari",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Utilizziamo questi cookie</a> per contribuire al funzionamento del sito. Non puoi disattivare questi cookie perché sono necessari.']
						},
						Preferences:
						{
							headline: "Preferenze",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Utilizziamo questi cookie</a> per ricordare le tue preferenze e migliorare la tua fruizione del sito.']
						},
						Performance:
						{
							headline: "Prestazioni e analisi",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Utilizziamo questi cookie</a> per raccogliere informazioni sulle modalità di utilizzo del nostro sito, per monitorarne le prestazioni e migliorare queste ultime insieme all\'esperienza di navigazione.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Utilizziamo questi cookie</a> per offrire annunci pubblicitari pertinenti e misurare l\'efficacia delle nostre campagne pubblicitarie. I nostri partner pubblicitari di terze parti potrebbero usare questi cookie per creare un profilo dei tuoi interessi e fornire pubblicità pertinenti su altri siti.']
						}
					},
					ThirdPartyAdvertisersText: "partner pubblicitari di terze parti",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Partner pubblicitari di terze parti:",
					EffectiveDate: "In vigore dal: 15 gennaio 2019",
					Body: ["Oltre a poter gestire i cookie mediante browser o dispositivo, puoi modificare le impostazioni sui cookie qui sotto. Ricorda che alcuni cookie sono indispensabili per la gestione del sito e non possono essere bloccati dalle impostazioni."],
					Title: "Impostazioni dei cookie",
					COOKIE_POPUP: 'Ciao! Su questo sito web utilizziamo cookie e tecnologie simili ("cookie"), compresi quelli di terze parti, per far funzionare e migliorare la tua esperienza sul sito, per monitorare le prestazioni dello stesso e per scopi pubblicitari. Per maggiori informazioni in merito all\'utilizzo dei cookie e alle tue scelte a riguardo, consulta la relativa informativa <a href="{COOKIE_POLICY_URL}" target="_blank">qui</a>! Cliccando su "Accetta cookie" qui sotto, acconsentirai all\'utilizzo di cookie (il consenso non è richiesto per i cookie necessari a far funzionare il sito). Puoi modificare le impostazioni dei cookie e ritirare il tuo consenso in qualsiasi momento cliccando su "Impostazioni dei cookie" qui sotto.',
					COOKIE_POPUP_EU: 'Ciao! Su questo sito web utilizziamo cookie e tecnologie simili ("cookie"), compresi quelli di terze parti, per far funzionare e migliorare la tua esperienza sul sito, per monitorare le prestazioni dello stesso e per scopi pubblicitari. Per maggiori informazioni in merito all\'utilizzo dei cookie e alle tue scelte a riguardo, consulta la relativa informativa <a href="{COOKIE_POLICY_URL}" target="_blank">qui</a>! Cliccando su "Accetta cookie" qui sotto, acconsentirai all\'utilizzo di cookie (il consenso non è richiesto per i cookie necessari a far funzionare il sito). Puoi modificare le impostazioni dei cookie e ritirare il tuo consenso in qualsiasi momento cliccando su "Impostazioni dei cookie" qui sotto.',
					AgreeText: "Accetta cookie",
					SettingsText: "Impostazioni dei cookie",
					"Report Infringement": "Segnala una violazione"
				},
				"ja-jp":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "ライブ",
					Ads: "広告",
					Company: "企業",
					Home: "ホーム",
					Blog: "ブログ",
					Jobs: "採用情報",
					Careers: "キャリア",
					Press: "メディア関連",
					News: "ニュース",
					"Press Inquiries": "メディア関連のお問い合わせ",
					Twitter: "Twitter",
					Language: "言語",
					"Download Snapchat": "Snapchatをダウンロードする",
					Download: "ダウンロード",
					Kit: "Kit",
					Stories: "ストーリー",
					"Lens Studio": "Lens Studio",
					Store: "ストア",
					"Snapchat for iOS": "iOS用Snapchat",
					"Snapchat for Android": "Android用Snapchat",
					Community: "コミュニティ",
					Support: "サポート",
					"Community Guidelines": "コミュニティガイドライン",
					"Safety Center": "セーフティセンター",
					Snapcodes: "Snapコード",
					Geofilters: "Geofilter",
					Create: "フィルター&Lens",
					Map: "マップ",
					Advertising: "広告",
					"Buy Ads": "広告を購入する",
					"Advertising Policies": "広告ポリシー",
					"Political Ads Library": "政治的な広告のライブラリ",
					"Brand Guidelines": "ブランドガイドライン",
					"Promotions Rules": "プロモーションルール",
					Legal: "法務",
					"Terms of Service": "利用規約",
					Impressum: "所有権情報",
					"Privacy Policy": "プライバシーポリシー",
					"Privacy Center": "プライバシーセンター",
					"Cookie Policy": "Cookie ポリシー",
					"Memories Terms of Service": "メモリーズ利用規約",
					CUSTOM_CREATIVE_TOOLS_TOS: "カスタムクリエイティブツール利用規約",
					COMMUNITY_TOS: "コミュニティ・ Geofilter利用規約",
					LENS_STUDIO_TOS: "Lens Studio利用規約",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "必要なCookie",
							content: ['サイトの運営の目的でこれらの<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Cookieを使用しています</a>。これらは必要なCookiesであるため、無効にできません。']
						},
						Preferences:
						{
							headline: "設定",
							content: ['当社ウェブサイトでは<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Cookieを使って</a>お客様の設定を覚え、ユーザーエクスペリエンスの向上に努めています。']
						},
						Performance:
						{
							headline: "パフォーマンスとアナリティクス",
							content: ['お客様による当サイトの利用に関する情報収集、サイトパフォーマンスのモニタリング、そしてサイトパフォーマンスとユーザーエクスペリエンスの向上のために<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Cookieを使用しています</a>。']
						},
						Marketing:
						{
							headline: "マーケティング",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Cookieを使って</a>関連性の高い広告を表示させ、広告キャンペーンの効果を測定しています。サードパーティの広告パートナーはこのようなCookieを使用して、お客様が関心を持つ情報を収集し、他のサイトで関連する広告を表示することがあります。']
						}
					},
					ThirdPartyAdvertisersText: "サードパーティの広告パートナー",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "サードパーティの広告パートナー：",
					EffectiveDate: "発効日：2019年1月15日",
					Body: ["ブラウザーやデバイスでCookieを管理する以外に、下記の設定画面からCookieを変更することもできます。当サイトを利用する上で必要なCookieは設定画面でブロックすることができません。"],
					Title: "Cookieの設定",
					COOKIE_POPUP: 'ご利用の皆様、CookieおよびサードパーティのCookieを含む同様のテクノロジー（「Cookie」）を使用して、このWebサイトではサイトでの運営および向上を目的とし、サイトのパフォーマンスをモニターし、広告目的で使用します。当社のCookie利用方法およびお客様のCookieの設定に関しては、<a href="{COOKIE_POLICY_URL}" target="_blank">こちら</a>からCookieポリシーをご覧ください。「Cookieを受け入れる」をクリックすると、Cookieの使用を承諾したものとみなされます（サイトの運営に必要なCookieには同意は必要ありません）。下記の「Cookie設定」をクリックすると、いつでもCookieの設定を変更し、同意を取り消すことができます。',
					COOKIE_POPUP_EU: 'ご利用の皆様、CookieおよびサードパーティのCookieを含む同様のテクノロジー（「Cookie」）を使用して、このWebサイトではサイトでの運営および向上を目的とし、サイトのパフォーマンスをモニターし、広告目的で使用します。当社のCookie利用方法およびお客様のCookieの設定に関しては、<a href="{COOKIE_POLICY_URL}" target="_blank">こちら</a>からCookieポリシーをご覧ください。「Cookieを受け入れる」をクリックすると、Cookieの使用を承諾したものとみなされます（サイトの運営に必要なCookieには同意は必要ありません）。下記の「Cookie設定」をクリックすると、いつでもCookieの設定を変更し、同意を取り消すことができます。',
					AgreeText: "Cookieを受け入れる",
					SettingsText: "Cookieの設定",
					"Report Infringement": "権利の侵害を報告"
				},
				"kn-in":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "ಲೈವ್‌",
					Ads: "ಜಾಹೀರಾತುಗಳು",
					Company: "ಕಂಪನಿ",
					Home: "ಮುಖಪುಟ",
					Blog: "ಬ್ಲಾಗ್",
					Jobs: "ಉದ್ಯೋಗಗಳು",
					Careers: "ಉದ್ಯೋಗಾವಕಾಶಗಳು",
					Press: "ಪ್ರೆಸ್‌",
					News: "ಸುದ್ಧಿಗಳು",
					"Press Inquiries": "ಪತ್ರಿಕಾ ವಿಚಾರಣೆಗಳು",
					Twitter: "Twitter",
					Language: "ಭಾಷೆ",
					"Download Snapchat": "Snapchat ಡೌನ್‌ಲೋಡ್‌ ಮಾಡಿ",
					Download: "ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
					Kit: "ಕಿಟ್‌",
					Stories: "ಕಥೆಗಳು",
					"Lens Studio": "Lens ಸ್ಟುಡಿಯೋ",
					Store: "ಸ್ಟೋರ್",
					"Snapchat for iOS": "iOS ಗಾಗಿ Snapchat",
					"Snapchat for Android": "Android ಗಾಗಿ Snapchat",
					Community: "ಸಮುದಾಯ",
					Support: "ಬೆಂಬಲ",
					"Community Guidelines": "ಸಮುದಾಯ ಮಾರ್ಗಸೂಚಿಗಳು",
					"Safety Center": "ಸುರಕ್ಷತಾ ಕೇಂದ್ರ",
					Snapcodes: "Snapcodes",
					Geofilters: "ಜಿಯೋಫಿಲ್ಟರ್‌ಗಳು",
					Create: "ಫಿಲ್ಟರುಗಳು ಮತ್ತು Lenses",
					Map: "ನಕ್ಷೆ",
					Advertising: "ಜಾಹೀರಾತು ನೀಡುವಿಕೆ",
					"Buy Ads": "ಜಾಹೀರಾತು ಖರೀದಿಸಿ",
					"Advertising Policies": "ಜಾಹೀರಾತು ನೀತಿಗಳು",
					"Political Ads Library": "ರಾಜಕೀಯ ಜಾಹೀರಾತುಗಳ ಲೈಬ್ರರಿ",
					"Brand Guidelines": "ಬ್ರಾಂಡ್ ಮಾರ್ಗಸೂಚಿಗಳು",
					"Promotions Rules": "ಪ್ರಮೋಶನ್‌ ನಿಯಮಗಳು",
					Legal: "ಕಾನೂನು ಸಂಬಂಧಿ",
					"Terms of Service": "ಸೇವಾ ನಿಯಮಗಳು",
					Impressum: "ಇಂಪ್ರೆಸ್ಸಮ್‌",
					"Privacy Policy": "ಗೌಪ್ಯತಾ ನೀತಿ",
					"Privacy Center": "ಗೌಪ್ಯತಾ ಕೇಂದ್ರ",
					"Cookie Policy": "ಕುಕೀ ನೀತಿ",
					"Memories Terms of Service": "ನೆನಪುಗಳು ಸೇವಾ ನಿಯಮಗಳು",
					CUSTOM_CREATIVE_TOOLS_TOS: "ಕಸ್ಟಮ್ ಕ್ರಿಯೇಟಿವ್ ಟೂಲ್ಸ್ ನಿಯಮಗಳು",
					COMMUNITY_TOS: "Community Geofilter ನಿಯಮಗಳು",
					LENS_STUDIO_TOS: "Lens ಸ್ಟುಡಿಯೋ ನಿಯಮಗಳು",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "ಅಗತ್ಯ ಕುಕೀಗಳು",
							content: ['ಸೈಟ್‌ ಕಾರ್ಯನಿರ್ವಹಣೆಗೆ ಸಹಾಯವಾಗಲು <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">ನಾವು ಈ ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತೇವೆ</a>. ಯಾಕೆಂದರೆ, ಈ ಕುಕೀಗಳು ಅಗತ್ಯವಾಗಿದ್ದು, ನೀವು ಇದನ್ನು ಆಫ್‌ ಮಾಡಲಾಗುವುದಿಲ್ಲ.']
						},
						Preferences:
						{
							headline: "ಆದ್ಯತೆಗಳು",
							content: ['ನಿಮ್ಮ ಆದ್ಯತೆಗಳನ್ನು ನೆನಪಿಟ್ಟುಕೊಳ್ಳಲು ಮತ್ತು ನಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">ನಾವು ಈ ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತೇವೆ</a>.']
						},
						Performance:
						{
							headline: "ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಅನಾಲಿಟಿಕ್ಸ್‌",
							content: ['ನಮ್ಮ ಸೈಟ್ ಅನ್ನು ನೀವು ಹೇಗೆ ಬಳಸುತ್ತೀರಿ ಕುರಿತು ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಲು, ಸೈಟ್ ಕಾರ್ಯಕ್ಷಮತೆಯ ಮೇಲ್ವಿಚಾರಣೆ ನಡೆಸಲು ಮತ್ತು ನಮ್ಮ ಸೈಟ್ ಕಾರ್ಯಕ್ಷಮತೆ, ನಿಮ್ಮ ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">ನಾವು ಈ ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತೇವೆ</a>.']
						},
						Marketing:
						{
							headline: "ಮಾರ್ಕೆಟಿಂಗ್",
							content: ['ಸೂಕ್ತ ಜಾಹೀರಾತುಗಳನ್ನು ನೀಡಲು ಮತ್ತು ನಮ್ಮ ಜಾಹೀರಾತು ಕ್ಯಾಂಪೇನ್‌ಗಳ ಪರಿಣಾಮಕಾರಿತ್ವವನ್ನು ಅಳೆಯಲು <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">ಈ ಕುಕೀಗಳನ್ನು ನಾವು ಬಳಸುತ್ತೇವೆ</a>. ನಿಮ್ಮ ಆಸಕ್ತಿಗಳ ಪ್ರೊಫೈಲ್ ಅನ್ನು ನಿರ್ಮಿಸಲು ಮತ್ತು ಇತರ ಸೈಟ್‌ಗಳಲ್ಲಿ ಸಂಬಂಧಿತ ಜಾಹೀರಾತುಗಳನ್ನು ತಲುಪಿಸಲು ನಮ್ಮ ಮೂರನೇ ಪಕ್ಷದ ಜಾಹೀರಾತು ಪಾಲುದಾರರು ಈ ಕುಕೀಗಳನ್ನು ಬಳಸಬಹುದು.']
						}
					},
					ThirdPartyAdvertisersText: "ಮೂರನೇ-ಪಕ್ಷದ ಜಾಹೀರಾತು ಪಾಲುದಾರರು",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "ಮೂರನೇ-ಪಕ್ಷದ ಜಾಹೀರಾತು ಪಾಲುದಾರರು:",
					EffectiveDate: "ಜಾರಿ: ಜನವರಿ 15, 2019",
					Body: ["ನಿಮ್ಮ ಬ್ರೌಸರ್‌ ಅಥವಾ ಸಾಧನದ ಮೂಲಕ ಕುಕೀಗಳನ್ನು ನಿರ್ವಹಿಸುವುದರ ಜೊತೆಗೆ, ಈ ಕೆಳಗೆ ನಿಮ್ಮ ಕುಕೀ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ನೀವು ಬದಲಿಸಬಹುದು. ನಮ್ಮ ಸೈಟ್‌ ಚಲಾಯಿಸಲು ಕೆಲವು ಕುಕೀಗಳು ಅಗತ್ಯವಾಗಿರುತ್ತವೆ ಮತ್ತು ಈ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಬಳಸಿ ಅವುಗಳನ್ನು ನಿರ್ಬಂಧಿಸಲಾಗದು ಎಂಬುದನ್ನು ದಯವಿಟ್ಟು ಗಮನದಲ್ಲಿಟ್ಟುಕೊಳ್ಳಿ."],
					Title: "ಕುಕೀ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
					COOKIE_POPUP: 'ಹಾಯ್‌! ನಮ್ಮ ಸೈಟ್ನಲ್ಲಿ ನಿಮ್ಮ ಅನುಭವ ಸುಧಾರಣೆ ಮಾಡಲು, ನಮ್ಮ ಸೈಟ್ ಕಾರ್ಯಕ್ಷಮತೆಯ ಮೇಲ್ವಿಚಾರಣೆ ನಡೆಸಲು ಮತ್ತು ಜಾಹೀರಾತು ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮತ್ತು ಕಾರ್ಯನಿರ್ವಹಣೆಗೆ ಸಹಾಯ ಮಾಡುವುದಕ್ಕಾಗಿ ಈ ವೆಬ್ಸೈಟ್ನಲ್ಲಿ ಮೂರನೆ ಪಕ್ಷದ ಕುಕೀಗಳು ಸೇರಿದಂತೆ ಕುಕೀಗಳು ಮತ್ತ ಇದೇ ರೀತಿಯ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ("ಕುಕೀಗಳು") ನಾವು ಬಳಸುತ್ತೇವೆ. ಕುಕೀಗಳನ್ನು ಮತ್ತು ನಿಮ್ಮ ಕುಕೀ ಆಯ್ಕೆಗಳನ್ನು ನಾವು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ ಎಂಬುದರ ಹೆಚ್ಚಿನ ಮಾಹಿತಿಯ ಬಗ್ಗೆ ನಮ್ಮ ಕುಕೀ ಪಾಲಿಸಿಯನ್ನು <a href="{COOKIE_POLICY_URL}" target="_blank">ಇಲ್ಲಿ</a> ನೋಡಿ! ಈ ಕೆಳಗೆ "ಕುಕೀಗಳನ್ನು ಸಮ್ಮತಿಸಿ" ಎಂಬುದನ್ನು ಕ್ಲಿಕ್‌ ಮಾಡುವ ಮೂಲಕ, ಕುಕೀಗಳನ್ನು ಬಳಸಲು ನೀವು ನಮಗೆ ಸಮ್ಮತಿ ನೀಡುತ್ತಿದ್ದೀರಿ (ನಮ್ಮ ಸೈಟ್ ಚಲಾಯಿಸಲು ಅಗತ್ಯವಾಗಿರುವ ಕುಕೀಗಳಿಗೆ ಸಮ್ಮತಿ ಅಗತ್ಯವಿಲ್ಲದವುಗಳನ್ನು ಹೊರತುಪಡಿಸಿ). ಈ ಕೆಳಗಿನ "ಕುಕೀ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು" ಕ್ಲಿಕ್‌ ಮಾಡುವ ಮೂಲಕ ನೀವು ನಿಮ್ಮ ಕುಕೀ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಬದಲಿಸಬಹುದು ಮತ್ತು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಸಮ್ಮತಿಯನ್ನು ಹಿಂಪಡೆಯಬಹುದು.',
					COOKIE_POPUP_EU: 'ಹಾಯ್‌! ನಮ್ಮ ಸೈಟ್ನಲ್ಲಿ ನಿಮ್ಮ ಅನುಭವ ಸುಧಾರಣೆ ಮಾಡಲು, ನಮ್ಮ ಸೈಟ್ ಕಾರ್ಯಕ್ಷಮತೆಯ ಮೇಲ್ವಿಚಾರಣೆ ನಡೆಸಲು ಮತ್ತು ಜಾಹೀರಾತು ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮತ್ತು ಕಾರ್ಯನಿರ್ವಹಣೆಗೆ ಸಹಾಯ ಮಾಡುವುದಕ್ಕಾಗಿ ಈ ವೆಬ್ಸೈಟ್ನಲ್ಲಿ ಮೂರನೆ ಪಕ್ಷದ ಕುಕೀಗಳು ಸೇರಿದಂತೆ ಕುಕೀಗಳು ಮತ್ತ ಇದೇ ರೀತಿಯ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ("ಕುಕೀಗಳು") ನಾವು ಬಳಸುತ್ತೇವೆ. ಕುಕೀಗಳನ್ನು ಮತ್ತು ನಿಮ್ಮ ಕುಕೀ ಆಯ್ಕೆಗಳನ್ನು ನಾವು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ ಎಂಬುದರ ಹೆಚ್ಚಿನ ಮಾಹಿತಿಯ ಬಗ್ಗೆ ನಮ್ಮ ಕುಕೀ ಪಾಲಿಸಿಯನ್ನು <a href="{COOKIE_POLICY_URL}" target="_blank">ಇಲ್ಲಿ</a> ನೋಡಿ! ಈ ಕೆಳಗೆ "ಕುಕೀಗಳನ್ನು ಸಮ್ಮತಿಸಿ" ಎಂಬುದನ್ನು ಕ್ಲಿಕ್‌ ಮಾಡುವ ಮೂಲಕ, ಕುಕೀಗಳನ್ನು ಬಳಸಲು ನೀವು ನಮಗೆ ಸಮ್ಮತಿ ನೀಡುತ್ತಿದ್ದೀರಿ (ನಮ್ಮ ಸೈಟ್ ಚಲಾಯಿಸಲು ಅಗತ್ಯವಾಗಿರುವ ಕುಕೀಗಳಿಗೆ ಸಮ್ಮತಿ ಅಗತ್ಯವಿಲ್ಲದವುಗಳನ್ನು ಹೊರತುಪಡಿಸಿ). ಈ ಕೆಳಗಿನ "ಕುಕೀ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು" ಕ್ಲಿಕ್‌ ಮಾಡುವ ಮೂಲಕ ನೀವು ನಿಮ್ಮ ಕುಕೀ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಬದಲಿಸಬಹುದು ಮತ್ತು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಸಮ್ಮತಿಯನ್ನು ಹಿಂಪಡೆಯಬಹುದು.',
					AgreeText: "ಕುಕೀಗಳನ್ನು ಸಮ್ಮತಿಸಿ",
					SettingsText: "ಕುಕೀ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
					"Report Infringement": "ಉಲ್ಲಂಘನೆಯ ಕುರಿತು ವರದಿ ಮಾಡಿ"
				},
				"ko-kr":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacle",
					Live: "실시간",
					Ads: "광고",
					Company: "기업 정보",
					Home: "홈",
					Blog: "블로그",
					Jobs: "채용 정보",
					Careers: "채용",
					Press: "언론 문의",
					News: "최신 소식",
					"Press Inquiries": "언론 문의",
					Twitter: "Twitter",
					Language: "언어",
					"Download Snapchat": "Snapchat 다운로드",
					Download: "다운로드",
					Kit: "Kit",
					Stories: "스토리",
					"Lens Studio": "렌즈 스튜디오",
					Store: "스토어",
					"Snapchat for iOS": "iOS용 Snapchat",
					"Snapchat for Android": "안드로이드용 Snapchat",
					Community: "커뮤니티",
					Support: "고객지원",
					"Community Guidelines": "커뮤니티 가이드라인",
					"Safety Center": "보안 센터",
					Snapcodes: "Snapcode",
					Geofilters: "지오필터",
					Create: "필터 및 렌즈",
					Map: "지도",
					Advertising: "광고",
					"Buy Ads": "광고 구매",
					"Advertising Policies": "광고 정책",
					"Political Ads Library": "정치 광고 라이브러리",
					"Brand Guidelines": "브랜드 가이드라인",
					"Promotions Rules": "프로모션 규정",
					Legal: "법적 고지",
					"Terms of Service": "이용 약관",
					Impressum: "기업 정보",
					"Privacy Policy": "개인정보 취급방침",
					"Privacy Center": "개인정보 보호 센터",
					"Cookie Policy": "쿠키 정책",
					"Memories Terms of Service": "메모리 이용 약관",
					CUSTOM_CREATIVE_TOOLS_TOS: "맞춤형 크리에이티브 툴 이용 약관",
					COMMUNITY_TOS: "커뮤니티 Geofilter 이용 약관",
					LENS_STUDIO_TOS: "렌즈 스튜디오 약관",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "필수 쿠키",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">당사는 쿠키를 사용</a>하여 사이트의 운영을 지원합니다. 이러한 쿠키가 필요하므로 쿠키를 해제할 수 없습니다.']
						},
						Preferences:
						{
							headline: "환경 설정",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">당사는 쿠키를 사용</a>해 회원님의 환경 설정을 저장하고 웹사이트 사용 경험을 개선합니다.']
						},
						Performance:
						{
							headline: "성능 및 분석",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">당사는 쿠키를 사용</a>해 회원님의 당사 웹사이트 이용에 관한 정보를 수집하고 웹사이트 성능을 모니터링하며 웹사이트 성능 및 사용 경험을 개선합니다.']
						},
						Marketing:
						{
							headline: "마케팅",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">당사는 쿠키를 사용</a>해 관련성 있는 광고를 제공하고 당사 광고 캠페인의 효과를 측정합니다. 당사의 제3자 광고 파트너는 쿠키를 사용하여 회원님의 관심사에 대한 프로필을 생성하고 기타 웹사이트에서 적절한 광고를 제공합니다.']
						}
					},
					ThirdPartyAdvertisersText: "제3자 광고 파트너",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "제3자 광고 파트너:",
					EffectiveDate: "발효일: 2019년 1월 15일",
					Body: ["브라우저나 기기에서 쿠키를 관리할 수 있으며, 아래에서도 쿠키 설정을 변경할 수 있습니다. 다만 일부 쿠키는 당사 웹사이트 이용을 위해 필수적이며, 이와 같은 환경 설정으로 차단할 수 없습니다."],
					Title: "쿠키 설정",
					COOKIE_POPUP: '안녕하세요! 당사는 이 웹사이트에서 제3자 쿠키를 포함한 쿠키와 유사 기술("쿠키")을 이용하여 운영을 지원하고 회원님의 웹사이트 사용 경험을 개선하며 웹사이트 성능을 모니터링하고 광고 목적을 이행합니다. 당사의 쿠키 사용 방침과 사용자의 쿠키 선택 사항에 관한 자세한 정보는 <a href="{COOKIE_POLICY_URL}" target="_blank">여기</a>에서 확인하세요. 아래의 "쿠키 허용"을 클릭하면 쿠키 사용을 동의하는 것으로 간주됩니다(단, 당사 웹사이트를 운영하는 데 필요한 쿠키에 대한 동의는 필요하지 않음). 회원님은 쿠키 설정을 변경할 수 있으며, 언제든지 아래의 "쿠키 설정"을 클릭하여 동의를 철회할 수 있습니다.',
					COOKIE_POPUP_EU: '안녕하세요! 당사는 이 웹사이트에서 제3자 쿠키를 포함한 쿠키와 유사 기술("쿠키")을 이용하여 운영을 지원하고 회원님의 웹사이트 사용 경험을 개선하며 웹사이트 성능을 모니터링하고 광고 목적을 이행합니다. 당사의 쿠키 사용 방침과 사용자의 쿠키 선택 사항에 관한 자세한 정보는 <a href="{COOKIE_POLICY_URL}" target="_blank">여기</a>에서 확인하세요. 아래의 "쿠키 허용"을 클릭하면 쿠키 사용을 동의하는 것으로 간주됩니다(단, 당사 웹사이트를 운영하는 데 필요한 쿠키에 대한 동의는 필요하지 않음). 회원님은 쿠키 설정을 변경할 수 있으며, 언제든지 아래의 "쿠키 설정"을 클릭하여 동의를 철회할 수 있습니다.',
					AgreeText: "쿠키 허용",
					SettingsText: "쿠키 설정",
					"Report Infringement": "보안 침해 신고"
				},
				"ml-in":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "കണ്ണാടികൾ",
					Live: "ലൈവ്",
					Ads: "പരസ്യങ്ങൾ",
					Company: "കമ്പനി",
					Home: "ഹോം",
					Blog: "ബ്ലോഗ്",
					Jobs: "ജോലികൾ",
					Careers: "ജോലികൾ",
					Press: "പത്രം",
					News: "വാർത്തകൾ",
					"Press Inquiries": "അന്വേഷണങ്ങളിൽ അമർത്തുക",
					Twitter: "Twitter",
					Language: "ഭാഷ",
					"Download Snapchat": "Snapchat ഡൗൺലോഡ് ചെയ്യുക",
					Download: "ഡൗൺലോഡ് ചെയ്യുക",
					Kit: "കിറ്റ്",
					Stories: "സ്റ്റോറികള്‍",
					"Lens Studio": "ലെന്‍സ് സ്റ്റുഡിയോ",
					Store: "സ്റ്റോര്‍",
					"Snapchat for iOS": "iOS-നുള്ള Snapchat",
					"Snapchat for Android": "Android-നുള്ള Snapchat",
					Community: "കമ്മ്യൂണിറ്റി",
					Support: "പിന്തുണ",
					"Community Guidelines": "കമ്മ്യൂണിറ്റി മാർഗ്ഗനിർദ്ദേശങ്ങൾ",
					"Safety Center": "സുരക്ഷാ കേന്ദ്രം",
					Snapcodes: "Snapcode-കൾ",
					Geofilters: "ജിയോഫിൽട്ടറുകൾ",
					Create: "ഫില്‍റ്ററുകളും ലെന്‍സുകളും",
					Map: "മാപ്പ്",
					Advertising: "പരസ്യം ചെയ്യൽ",
					"Buy Ads": "പരസ്യങ്ങള്‍ വാങ്ങുക",
					"Advertising Policies": "പരസ്യം ചെയ്യൽ നയങ്ങൾ",
					"Political Ads Library": "രാഷ്ട്രീയ പരസ്യ ലൈബ്രറി",
					"Brand Guidelines": "ബ്രാൻഡ് മാർഗ്ഗനിർദ്ദേശങ്ങൾ",
					"Promotions Rules": "പ്രൊമോഷനുകൾക്കുള്ള നിയമങ്ങൾ",
					Legal: "നിയമപരം",
					"Terms of Service": "സേവന വ്യവസ്ഥകൾ",
					Impressum: "Impressum",
					"Privacy Policy": "സ്വകാര്യതാ നയം",
					"Privacy Center": "സ്വകാര്യതാ കേന്ദ്രം",
					"Cookie Policy": "കുക്കി നയം",
					"Memories Terms of Service": "Memories സേവന വ്യവസ്ഥകൾ",
					CUSTOM_CREATIVE_TOOLS_TOS: "ഇഷ്ടാനുസൃത സർഗ്ഗാത്മക ഉപകരണ വ്യവസ്ഥകൾ",
					COMMUNITY_TOS: "കമ്മ്യൂണിറ്റി ജിയോഫില്‍ട്ടര്‍ നിബന്ധനകള്‍",
					LENS_STUDIO_TOS: "Lens സ്റ്റുഡിയോ വ്യവസ്ഥകൾ",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "ആവശ്യമായ കുക്കികള്‍",
							content: ['സൈറ്റ് പ്രവര്ത്തിപ്പിക്കാന് സഹായിക്കുന്നതിനാണ് <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">ഞങ്ങള് ഈ കുക്കികള് ഉപയോഗിക്കുന്നത്</a>. കുക്കികള്‍ ആവശ്യമായതിനാല്‍ നിങ്ങള്‍ക്ക് അവ ഓഫ് ചെയ്യാനാവില്ല.']
						},
						Preferences:
						{
							headline: "മുൻഗണനകൾ",
							content: ['നിങ്ങളുടെ തിരഞ്ഞെടുപ്പുകള്‍ ഓർമ്മിക്കുന്നതിനും ഞങ്ങളുടെ വെബ്‍‍സൈറ്റിലെ നിങ്ങളുടെ അനുഭവം മെച്ചപ്പെടുത്തുന്നതിനും <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">ഞങ്ങള് ഈ കുക്കികള് ഉപയോഗിക്കുന്നു</a>.']
						},
						Performance:
						{
							headline: "പ്രകടനവും അനലിറ്റിക്സും",
							content: ['നിങ്ങൾ ഞങ്ങളുടെ സൈറ്റ് ഉപയോഗിക്കുന്നത് എങ്ങനെയെന്നതിനെക്കുറിച്ച് വിവരങ്ങൾ ശേഖരിക്കുന്നതിനും, സൈറ്റിന്റെ പ്രകടനം നിരീക്ഷിക്കുന്നതിനും, കൂടാ‍തെ, ഞങ്ങളുടെ സൈറ്റിന്‍റെ പ്രകടനവും നിങ്ങളുടെ അനുഭവവും മെച്ചപ്പെടുത്തുന്നതിനും <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">ഞങ്ങൾ ഈ കുക്കികൾ ഉപയോഗിക്കുന്നു</a>']
						},
						Marketing:
						{
							headline: "മാർക്കറ്റിംഗ്",
							content: ['പ്രസക്തമായ പരസ്യം ലഭ്യമാക്കുന്നതിനും ഞങ്ങളുടെ പരസ്യ ക്യാമ്പെയ്നുകളുടെ ഫലപ്രാപ്തി കണക്കാക്കുന്നതിനും <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">ഞങ്ങൾ ഈ കുക്കികൾ ഉപയോഗിക്കുന്നു</a>. നിങ്ങളുടെ താൽപ്പര്യങ്ങളുടെ ഒരു പ്രൊഫൈൽ നിർമ്മിക്കുന്നതിനും മറ്റ് സൈറ്റുകളിൽ പ്രസക്തമായ പരസ്യം നൽകുന്നതിനും ഞങ്ങളുടെ മൂന്നാം കക്ഷി പരസ്യ പാര്‍ട്ണര്‍മാര്‍ ഈ കുക്കികൾ ഉപയോഗിച്ചേക്കാം.']
						}
					},
					ThirdPartyAdvertisersText: "മൂന്നാം-കക്ഷി പരസ്യ പങ്കാളികൾ:",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "മൂന്നാം-കക്ഷി പരസ്യ പങ്കാളികൾ:",
					EffectiveDate: "പ്രാബല്യത്തിലാകുന്നത്: ജനുവരി 15, 2019",
					Body: ["നിങ്ങളുടെ ബ്രൗസര്‍ അല്ലെങ്കില്‍ ഡിവൈസ് വഴി കുക്കികളെ മാനേജ് ചെയ്യുന്നതിന് പുറമേ, താഴെ നിങ്ങള്‍ക്ക് നിങ്ങളുടെ കുക്കി ക്രമീകരണങ്ങളില്‍ മാറ്റം വരുത്താം. ചില കുക്കികള്‍ ഞങ്ങളുടെ സൈറ്റ് പ്രവര്‍ത്തിക്കുന്നതിന് ആവശ്യമാണ് എന്ന് ഓര്‍മ്മിക്കുക. ഈ ക്രമീകരണങ്ങള്‍ ഉപയോഗിച്ച് അത് ബ്ലോക്ക് ചെയ്യാനാവില്ല."],
					Title: "കുക്കി ക്രമീകരണങ്ങള്‍",
					COOKIE_POPUP: 'ഹായ്! ഞങ്ങള്‍ കുക്കികളും സമാനമായ സാങ്കേതികവിദ്യകളും (“കുക്കികള്‍”), മൂന്നാം കക്ഷി കുക്കികള്‍ ഉള്‍പ്പടെ, ഈ വെബ്‍സൈറ്റില്‍ പ്രവര്‍ത്തനത്തിന് സഹായിക്കാനും ഞങ്ങളുടെ സൈറ്റിലുള്ള നിങ്ങളുടെ അനുഭവം മെച്ചപ്പെടുത്താനും, ‍ ഞങ്ങളുടെ സൈറ്റിന്‍റെ പ്രകടനം നിരീക്ഷിക്കാനും, കൂടാതെ പരസ്യലക്ഷ്യങ്ങള്‍ക്കും വേണ്ടി ഉപയോഗിക്കും. ഞങ്ങള്‍ കുക്കികള്‍ എങ്ങനെ ഉപയോഗിക്കുന്നു എന്നും നിങ്ങളുടെ കുക്കി തിരഞ്ഞെടുപ്പുകളും സംബന്ധിച്ച കൂടുതല്‍ വിവരങ്ങള്‍ക്ക് ഞങ്ങളുടെ കുക്കി നയത്തിന് വേണ്ടി <a href="{COOKIE_POLICY_URL}" target="_blank">ഇവിടേക്ക് </a> പോവുക! താഴെയുള്ള "കുക്കികളെ അംഗീകരിക്കുന്നു" എന്നത് ക്ലിക്ക് ചെയ്യുന്നത് വഴി നിങ്ങള്‍ കുക്കികള്‍ ഉപയോഗിക്കാന്‍ ഞങ്ങള്‍ക്ക് അനുമതി നല്‍കുന്നു (ഞങ്ങളുടെ സൈറ്റ് പ്രവര്‍ത്തിക്കുന്നതിന് ആവശ്യമായ കുക്കികള്‍ക്ക് സമ്മതം ആവശ്യമില്ല). നിങ്ങള്‍ക്ക് കുക്കി ക്രമീകരണങ്ങളില്‍ മാറ്റം വരുത്തുകയും, ഏത് സമയത്തും “കുക്കി ക്രമീകരണങ്ങളില്‍” ക്ലിക്ക് ചെയ്ത് നിങ്ങളുടെ സമ്മതം പിന്‍വലിക്കുകയും ചെയ്യാം.',
					COOKIE_POPUP_EU: 'ഹായ്! ഞങ്ങള്‍ കുക്കികളും സമാനമായ സാങ്കേതികവിദ്യകളും (“കുക്കികള്‍”), മൂന്നാം കക്ഷി കുക്കികള്‍ ഉള്‍പ്പടെ, ഈ വെബ്‍സൈറ്റില്‍ പ്രവര്‍ത്തനത്തിന് സഹായിക്കാനും ഞങ്ങളുടെ സൈറ്റിലുള്ള നിങ്ങളുടെ അനുഭവം മെച്ചപ്പെടുത്താനും, ‍ ഞങ്ങളുടെ സൈറ്റിന്‍റെ പ്രകടനം നിരീക്ഷിക്കാനും, കൂടാതെ പരസ്യലക്ഷ്യങ്ങള്‍ക്കും വേണ്ടി ഉപയോഗിക്കും. ഞങ്ങള്‍ കുക്കികള്‍ എങ്ങനെ ഉപയോഗിക്കുന്നു എന്നും നിങ്ങളുടെ കുക്കി തിരഞ്ഞെടുപ്പുകളും സംബന്ധിച്ച കൂടുതല്‍ വിവരങ്ങള്‍ക്ക് ഞങ്ങളുടെ കുക്കി നയത്തിന് വേണ്ടി <a href="{COOKIE_POLICY_URL}" target="_blank">ഇവിടേക്ക് </a> പോവുക! താഴെയുള്ള "കുക്കികളെ അംഗീകരിക്കുന്നു" എന്നത് ക്ലിക്ക് ചെയ്യുന്നത് വഴി നിങ്ങള്‍ കുക്കികള്‍ ഉപയോഗിക്കാന്‍ ഞങ്ങള്‍ക്ക് അനുമതി നല്‍കുന്നു (ഞങ്ങളുടെ സൈറ്റ് പ്രവര്‍ത്തിക്കുന്നതിന് ആവശ്യമായ കുക്കികള്‍ക്ക് സമ്മതം ആവശ്യമില്ല). നിങ്ങള്‍ക്ക് കുക്കി ക്രമീകരണങ്ങളില്‍ മാറ്റം വരുത്തുകയും, ഏത് സമയത്തും “കുക്കി ക്രമീകരണങ്ങളില്‍” ക്ലിക്ക് ചെയ്ത് നിങ്ങളുടെ സമ്മതം പിന്‍വലിക്കുകയും ചെയ്യാം.',
					AgreeText: "കുക്കികളെ അംഗീകരിക്കുക",
					SettingsText: "കുക്കി ക്രമീകരണങ്ങള്‍",
					"Report Infringement": "ലംഘനം റിപ്പോര്‍ട്ട് ചെയ്യുക"
				},
				"mr-IN":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "लाइव्ह",
					Ads: "जाहिराती",
					Company: "कंपनी",
					Home: "स्वगृह",
					Blog: "ब्लॉग",
					Jobs: "नोकऱ्या",
					Careers: "करियर",
					Press: "माध्यमे",
					News: "बातम्या",
					"Press Inquiries": "प्रसारमाध्यम चौकश्या",
					Twitter: "ट्विटर",
					Language: "भाषा",
					"Download Snapchat": "Snapchat डाऊनलोड करा",
					Download: "डाऊनलोड",
					Kit: "किट",
					Stories: "गोष्टी",
					"Lens Studio": "Lens स्टुडिओ",
					Store: "स्टोअर",
					"Snapchat for iOS": "iOS साठी Snapchat",
					"Snapchat for Android": "अँड्रॉइडसाठी Snapchat",
					Community: "समुदाय",
					Support: "सहायता",
					"Community Guidelines": "समुदाय मार्गदर्शक सूचना",
					"Safety Center": "सुरक्षा केंद्र",
					Snapcodes: "स्नॅपकोड्स",
					Geofilters: "जिओफिल्टर्स",
					Create: "फिल्टर व Lenses",
					Map: "मॅप",
					Advertising: "जाहिराती",
					"Buy Ads": "जाहिराती खरेदी करा",
					"Advertising Policies": "जाहिरात धोरणे",
					"Political Ads Library": "राजनैतिक जाहिरात पुस्तकालय",
					"Brand Guidelines": "ब्रँडची मार्गदर्शक तत्त्वे",
					"Promotions Rules": "प्रचाराचे नियम",
					Legal: "कायदेविषयक",
					"Terms of Service": "सेवेच्या अटी",
					Impressum: "कायदेशीर प्रकटीकरण",
					"Privacy Policy": "गोपनीयता धोरण",
					"Privacy Center": "गोपनीयता केंद्र",
					"Cookie Policy": "कूकी धोरण",
					"Memories Terms of Service": "मेमरीज् सेवेच्या अटी",
					CUSTOM_CREATIVE_TOOLS_TOS: "सानुकूल कल्पक साधने अटी",
					COMMUNITY_TOS: "समुदाय Geofilter अटी",
					LENS_STUDIO_TOS: "Lens स्टुडिओ अटी",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "आवश्यक कुकीज",
							content: ['साइट चालवण्यात मदत करण्यासाठी <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">आम्ही या कुकीज वापरतो</a>. या कुकीज आवश्यक असल्याने, तुम्ही त्या बंद करू शकत नाही.']
						},
						Preferences:
						{
							headline: "पसंती",
							content: ['तुमच्या पसंती लक्षात ठेवण्यासाठी आणि आमच्या वेबसाइटवरील तुमचा अनुभव सुधारण्यासाठी <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">आम्ही या कुकीज वापरतो</a>.']
						},
						Performance:
						{
							headline: "कार्यप्रदर्शन व विश्लेषण",
							content: ['तुम्ही आमची साइट कशी वापरता याविषयी माहिती गोळा करण्यासाठी, साइटच्या कामगिरीवर देखरेख करण्यासाठी आणि आमच्या साइटची कामगिरी व तुमचा अनुभव सुधारण्यासाठी <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance"> आम्ही या कुकीज वापरतो</a>.']
						},
						Marketing:
						{
							headline: "मार्केटिंग",
							content: ['संबंधित जाहिराती पुरवण्यासाठी आणि आमच्या जाहिरात मोहिमांची परिणामकारकता मोजण्यासाठी <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">आम्ही या कुकीज वापरतो</a>. या कुकींचा वापर तुमच्या रुचींचा प्रोफाइल बनविण्यासाठी व इतर साईट्सवरील संबंधित त्रयस्थ जाहिरात भागीदार जाहिराती देण्यासाठी करू शकतात.']
						}
					},
					ThirdPartyAdvertisersText: "त्रयस्थ जाहिरात भागीदार",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">ट्विटर</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">पिन्टरेस्ट</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "तृतीय-पक्ष जाहिरात भागीदार:",
					EffectiveDate: "प्रभावी : १५ जानेवारी २०१९",
					Body: ["तुमच्या ब्राउजर किंवा डिव्हाइसमधून कूकीज व्यवस्थापित करण्याबरोबरच, खाली तुम्ही तुमच्या कूकी सेटिंग्ज बदलू शकता. कृपया नोंद घ्या की काही कूकीज आमची साइट चालवण्यासाठी आवश्यक आहेत आणि या सेटिंग्ज वापरून त्या अवरोधित करता येत नाहीत."],
					Title: "कूकी सेटिंग्ज",
					COOKIE_POPUP: 'हाय! आमच्या साइटवरील तुमचा अनुभव ऑपरेट करण्यात आणि सुधारित करण्यात मदत करण्यासाठी, आमच्या साइटवरील कामगिरीचे परीक्षण करण्यासाठी आणि जाहिरातीच्या उद्देशाने आम्ही या वेबसाइटवर तृतीय-पक्षाच्या कुकीजसह कुकीज आणि तत्सम तंत्रज्ञान (“कुकीज”) वापरतो. आम्ही कूकीज कशा वापरतो आणि तुमच्या कूकीजच्या निवडीबद्दल अधिक जाणून घेण्यासाठी, <a href="{COOKIE_POLICY_URL}" target="_blank">इथे</a> जाऊन आमचे कूकी धोरण वाचा! खाली "कुकीज स्वीकारा" वर क्लिक करून तुम्ही आम्हाला कुकीज वापरण्यास संमती देत आहात (आमच्या साइट चालविण्यासाठी आवश्यक असलेल्या कुकीजसाठी संमती आवश्यक नाही). तुम्ही तुमची कुकी सेटिंग्ज बदलू शकता आणि खाली “कुकी सेटिंग्ज” वर क्लिक करून तुमची संमती कधीही मागे घेऊ शकता.',
					COOKIE_POPUP_EU: 'हाय! आमच्या साइटवरील तुमचा अनुभव ऑपरेट करण्यात आणि सुधारित करण्यात मदत करण्यासाठी, आमच्या साइटवरील कामगिरीचे परीक्षण करण्यासाठी आणि जाहिरातीच्या उद्देशाने आम्ही या वेबसाइटवर तृतीय-पक्षाच्या कुकीजसह कुकीज आणि तत्सम तंत्रज्ञान (“कुकीज”) वापरतो. आम्ही कूकीज कशा वापरतो आणि तुमच्या कूकीजच्या निवडीबद्दल अधिक जाणून घेण्यासाठी, <a href="{COOKIE_POLICY_URL}" target="_blank">इथे</a> जाऊन आमचे कूकी धोरण वाचा! खाली "कुकीज स्वीकारा" वर क्लिक करून तुम्ही आम्हाला कुकीज वापरण्यास संमती देत आहात (आमच्या साइट चालविण्यासाठी आवश्यक असलेल्या कुकीजसाठी संमती आवश्यक नाही). तुम्ही तुमची कुकी सेटिंग्ज बदलू शकता आणि खाली “कुकी सेटिंग्ज” वर क्लिक करून तुमची संमती कधीही मागे घेऊ शकता.',
					AgreeText: "कूकीज स्वीकारा",
					SettingsText: "कूकी सेटिंग्ज",
					"Report Infringement": "उल्लंघनाचा अहवाल द्या"
				},
				"ms-MY":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Secara langsung",
					Ads: "Iklan",
					Company: "Syarikat",
					Home: "Butang Utama",
					Blog: "Blog",
					Jobs: "Kerja",
					Careers: "Kerjaya",
					Press: "Akhbar",
					News: "Berita",
					"Press Inquiries": "Pertanyaan Akhbar",
					Twitter: "Twitter",
					Language: "Bahasa",
					"Download Snapchat": "Muat turun Snapchat",
					Download: "Muat turun",
					Kit: "Kit",
					Stories: "Cerita",
					"Lens Studio": "Studio Lens",
					Store: "Stor",
					"Snapchat for iOS": "Snapchat untuk iOS",
					"Snapchat for Android": "Snapchat untuk Android",
					Community: "Komuniti",
					Support: "Sokongan",
					"Community Guidelines": "Garis panduan Komuniti",
					"Safety Center": "Pusat Keselamatan",
					Snapcodes: "Snapcode",
					Geofilters: "PenapisGeo",
					Create: "Penapis & Lensa",
					Map: "Peta",
					Advertising: "Pengiklanan",
					"Buy Ads": "Beli Iklan",
					"Advertising Policies": "Dasar Pengiklanan",
					"Political Ads Library": "Pustaka Iklan Politik",
					"Brand Guidelines": "Garis Panduan Jenama",
					"Promotions Rules": "Peraturan Promosi",
					Legal: "Undang-undang",
					"Terms of Service": "Terma Perkhidmatan",
					Impressum: "Impressum",
					"Privacy Policy": "Dasar Privasi",
					"Privacy Center": "Pusat Privasi",
					"Cookie Policy": "Dasar Kuki",
					"Memories Terms of Service": "Terma Perkhidmatan Memori",
					CUSTOM_CREATIVE_TOOLS_TOS: "Terma Peralatan Kreatif Buat Khusus",
					COMMUNITY_TOS: "Terma Geofilter Komuniti",
					LENS_STUDIO_TOS: "Terma Studio Lens",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Kuki Perlu",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Kami menggunakan kuki ini</a> membantu mengendalikan laman ini. Disebabkan kuki ini diperlukan, anda tidak dapat mematikannya.']
						},
						Preferences:
						{
							headline: "Keutamaan",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Kami menggunakan kuki ini</a> untuk mengingati keutamaan anda dan meningkatkan pengalaman anda di laman web kami.']
						},
						Performance:
						{
							headline: "Prestasi & Analitis",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Kami menggunakan kuki ini</a> untuk mengumpul maklumat tentang bagaimana anda menggunakan laman kami, mengawasi prestasi laman dan meningkatkan prestasi laman kami serta pengalaman anda.']
						},
						Marketing:
						{
							headline: "Pemasaran",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Kami menggunakan kuki ini</a> untuk menyampaikan pengiklanan yang berkaitan dan mengukur keberkesanan kempen pengiklanan kami. Rakan kongsi pengiklanan pihak ketiga kami mungkin menggunakan kuki ini untuk membina sebuah profil untuk minat anda dan menyampaikan pengiklanan yang relevan pada laman yang lain.']
						}
					},
					ThirdPartyAdvertisersText: "rakan kongsi pengiklanan pihak ketiga",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Rakan kongsi pengiklanan pihak ketiga:",
					EffectiveDate: "Bermula: 15 Januari 2019",
					Body: ["Di samping menguruskan kuki melalui pelayar atau peranti anda, anda boleh menukar seting kuki anda di bawah. Sila ambil perhatian bahawa kuki tertentu diperlukan untuk menjalankan laman web kami dan tidak dapat disekat menggunakan seting ini."],
					Title: "Seting Kuki",
					COOKIE_POPUP: 'Hai! Kami menggunakan kuki atau teknologi yang serupa (“kuki”), termasuk kuki pihak ketiga, pada tapak web ini untuk membantu mengendalikan dan meningkatkan pengalaman anda di tapak ini, memantau prestasi tapak kami dan untuk tujuan pengiklanan. Untuk maklumat lanjut tentang cara kami menggunakan kuki dan pilihan kuki anda, pergi <a href="{COOKIE_POLICY_URL}" target="_blank">ke sini</a> untuk melihat dasar kuki kami! Dengan mengklik "Terima Kuki" di bawah, anda memberikan kami persetujuan untuk menggunaakan kuki (kecuali persetujuan tidak wajib untuk kuki yang diperlukan dalam menjalankan tapak kami). Anda boleh mengubah seting kuki anda dan menarik balik persetujuan anda pada bila-bila masa, dengan mengklik pada “Seting Kuki” di bawah.',
					COOKIE_POPUP_EU: 'Hai! Kami menggunakan kuki atau teknologi yang serupa (“kuki”), termasuk kuki pihak ketiga, pada tapak web ini untuk membantu mengendalikan dan meningkatkan pengalaman anda di tapak ini, memantau prestasi tapak kami dan untuk tujuan pengiklanan. Untuk maklumat lanjut tentang cara kami menggunakan kuki dan pilihan kuki anda, pergi <a href="{COOKIE_POLICY_URL}" target="_blank">ke sini</a> untuk melihat dasar kuki kami! Dengan mengklik "Terima Kuki" di bawah, anda memberikan kami persetujuan untuk menggunaakan kuki (kecuali persetujuan tidak wajib untuk kuki yang diperlukan dalam menjalankan tapak kami). Anda boleh mengubah seting kuki anda dan menarik balik persetujuan anda pada bila-bila masa, dengan mengklik pada “Seting Kuki” di bawah.',
					AgreeText: "Terima Kuki",
					SettingsText: "Seting Kuki",
					"Report Infringement": "Laporkan Pelanggaran"
				},
				"nb-no":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Live",
					Ads: "Annonser",
					Company: "Bedrift",
					Home: "Hjem",
					Blog: "Blogg",
					Jobs: "Jobber",
					Careers: "Karrièrer",
					Press: "Presse",
					News: "Nyheter",
					"Press Inquiries": "Presseforespørsler",
					Twitter: "Twitter",
					Language: "Språk",
					"Download Snapchat": "Last ned Snapchat",
					Download: "Last ned",
					Kit: "Kit",
					Stories: "Stories",
					"Lens Studio": "Lens Studio",
					Store: "Butikk",
					"Snapchat for iOS": "Snapchat for iOS",
					"Snapchat for Android": "Snapchat for Android",
					Community: "Samfunn",
					Support: "Hjelp",
					"Community Guidelines": "Samfunnsretningslinjer",
					"Safety Center": "Sikkerhetssenter",
					Snapcodes: "Snapkoder",
					Geofilters: "Geofilter",
					Create: "Filtre & Lenses",
					Map: "Kart",
					Advertising: "Annonsering",
					"Buy Ads": "Kjøp annonser",
					"Advertising Policies": "Annonseringsregler",
					"Political Ads Library": "Bibliotek med politiske annonser",
					"Brand Guidelines": "Merkevareretningslinjer",
					"Promotions Rules": "Kampanjeregler",
					Legal: "Juridisk",
					"Terms of Service": "Vilkår for tjenesten",
					Impressum: "Impressum",
					"Privacy Policy": "Personvernbetingelser",
					"Privacy Center": "Personvernsenter",
					"Cookie Policy": "Regler for informasjonskapsler",
					"Memories Terms of Service": "Minner: Vilkår for tjenesten",
					CUSTOM_CREATIVE_TOOLS_TOS: "Vilkår for Kreative tilpasningsverktøy",
					COMMUNITY_TOS: "Vilkår for Samfunns-Geofilter",
					LENS_STUDIO_TOS: "Vilkår for Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Nødvendige informasjonskapsler",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Vi bruker informasjonskapslene</a> til å bedre funksjonaliteten til nettstedet. Du kan ikke deaktivere informasjonskapslene da de er påkrevd.']
						},
						Preferences:
						{
							headline: "Preferanser",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Vi bruker informasjonskapslene</a> til å huske preferanser og forbedre opplevelsen din på nettstedet vårt.']
						},
						Performance:
						{
							headline: "Ytelse og analyse",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Vi bruker informasjonskapslene</a> til å samle inn informasjon om hvordan du bruker nettstedet vårt, overvåke nettstedets ytelse samt forbedre nettstedsytelsen og opplevelsen din.']
						},
						Marketing:
						{
							headline: "Markedsføring",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Vi bruker informasjonskapslene</a> til å levere relevant annonsering og måle effektiviteten på annonsekampanjene våre. Våre tredjeparts annonsepartnere kan bruke disse informasjonskapslene til å bygge en profil basert på interessene dine og levere relevant annonsering på andre nettsteder.']
						}
					},
					ThirdPartyAdvertisersText: "tredjeparts annonsepartnere",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Tredjeparts annonsepartnere:",
					EffectiveDate: "Gjelder fra og med: 15. januar 2019",
					Body: ["I tillegg til å administrere informasjonskapsler gjennom nettleseren eller enheten din, kan du endre innstillingene for informasjonskapslene nedenfor. Vennligst legg merke til at enkelte informasjonskapsler er nødvendige for å kjøre nettstedet vårt, og ikke kan blokkeres fra å bruke disse innstillingene."],
					Title: "Informasjonskapsler, innstillinger",
					COOKIE_POPUP: 'Hei! På dette nettstedet bruker vi informasjonskapsler og lignende teknologi («cookies»), inkludert tredjeparts informasjonskapsler, til å bedre funksjonaliteten og forbedre brukeropplevelsen din, overvåke ytelsen til nettsiden samt for markedsføringsformål. Hvis du vil vite mer om hvordan vi bruker informasjonskapsler og hvilke alternativer du har for dem, kan du klikke <a href="{COOKIE_POLICY_URL}" target="_blank">her</a> for våre retningslinjer om informasjonskapsler! Ved å klikke på «Godta informasjonskapsler» nedenfor gir du oss tillatelse til å bruke informasjonskapsler (men tillatelse kreves ikke for informasjonskapsler som er nødvendige for å drive nettstedet). Du kan når som helst endre innstillinger for informasjonskapsler eller trekke samtykket ditt ved å klikke på «Innstillinger for informasjonskapsler» nedenfor.',
					COOKIE_POPUP_EU: 'Hei! På dette nettstedet bruker vi informasjonskapsler og lignende teknologi («cookies»), inkludert tredjeparts informasjonskapsler, til å bedre funksjonaliteten og forbedre brukeropplevelsen din, overvåke ytelsen til nettsiden samt for markedsføringsformål. Hvis du vil vite mer om hvordan vi bruker informasjonskapsler og hvilke alternativer du har for dem, kan du klikke <a href="{COOKIE_POLICY_URL}" target="_blank">her</a> for våre retningslinjer om informasjonskapsler! Ved å klikke på «Godta informasjonskapsler» nedenfor gir du oss tillatelse til å bruke informasjonskapsler (men tillatelse kreves ikke for informasjonskapsler som er nødvendige for å drive nettstedet). Du kan når som helst endre innstillinger for informasjonskapsler eller trekke samtykket ditt ved å klikke på «Innstillinger for informasjonskapsler» nedenfor.',
					AgreeText: "Godta informasjonskapsler",
					SettingsText: "Innstillinger for informasjonskapsler",
					"Report Infringement": "Rapporter brudd på opphavsrett"
				},
				"nl-nl":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Live",
					Ads: "Advertenties",
					Company: "Bedrijf",
					Home: "Home",
					Blog: "Blog",
					Jobs: "Vacatures",
					Careers: "Carrières",
					Press: "Pers",
					News: "Nieuws",
					"Press Inquiries": "Persinformatie",
					Twitter: "Twitter",
					Language: "Taal",
					"Download Snapchat": "Snapchat downloaden",
					Download: "Downloaden",
					Kit: "Kit",
					Stories: "Verhalen",
					"Lens Studio": "Lens Studio",
					Store: "Winkel",
					"Snapchat for iOS": "Snapchat voor iOS",
					"Snapchat for Android": "Snapchat voor Android",
					Community: "Community",
					Support: "Ondersteuning",
					"Community Guidelines": "Communityrichtlijnen",
					"Safety Center": "Veiligheidscentrum",
					Snapcodes: "Snapcodes",
					Geofilters: "Geofilters",
					Create: "Filters & Lenses",
					Map: "Kaart",
					Advertising: "Adverteren",
					"Buy Ads": "Ads kopen",
					"Advertising Policies": "Advertentiebeleid",
					"Political Ads Library": "Bibliotheek met politieke advertenties",
					"Brand Guidelines": "Merkrichtlijnen",
					"Promotions Rules": "Regels voor acties",
					Legal: "Juridisch",
					"Terms of Service": "Servicevoorwaarden",
					Impressum: "Impressum",
					"Privacy Policy": "Privacybeleid",
					"Privacy Center": "Privacycentrum",
					"Cookie Policy": "Cookiebeleid",
					"Memories Terms of Service": "Servicevoorwaarden Herinneringen",
					CUSTOM_CREATIVE_TOOLS_TOS: "Voorwaarden Creatieve Tools op Maat",
					COMMUNITY_TOS: "Voorwaarden Community-Geofilters",
					LENS_STUDIO_TOS: "Voorwaarden Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Noodzakelijke cookies",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">We gebruiken deze cookies</a> om de site beter te laten werken. Omdat deze cookies noodzakelijk zijn, kun je ze niet uitschakelen.']
						},
						Preferences:
						{
							headline: "Voorkeuren",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Wij gebruiken deze cookies</a> om je voorkeuren te onthouden en je ervaring op onze website te verbeteren.']
						},
						Performance:
						{
							headline: "Prestaties en analyse",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">We gebruiken deze cookies</a> om informatie te verzamelen over hoe je onze site gebruikt, de prestaties van onze site te monitoren en de prestaties van onze site en je ervaring te verbeteren.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Wij gebruiken deze cookies</a> om relevante advertenties te tonen en de effectiviteit van onze advertentiecampagnes te meten. Onze externe advertentiepartners kunnen deze cookies gebruiken om je interesses in kaart te brengen en op andere websites relevante advertenties te laten zien.']
						}
					},
					ThirdPartyAdvertisersText: "Onze externe advertentiepartners",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Externe advertentiepartners:",
					EffectiveDate: "Ingangsdatum: 15 januari 2019",
					Body: ["Naast het beheren van cookies via je browser of apparaat, kun je hieronder je cookie-instellingen wijzigen. Houd er rekening mee dat bepaalde cookies nodig zijn om onze site te laten draaien en niet kunnen worden geblokkeerd met behulp van deze instellingen."],
					Title: "Cookie-instellingen",
					COOKIE_POPUP: "Hallo! Wij gebruiken cookies en soortgelijke technologieën (“cookies”), waaronder cookies van derden, op deze website om de site en je ervaring op onze site beter te laten werken, de prestaties van onze site te verbeteren en voor advertentiedoeleinden. Meer informatie over hoe we cookies gebruiken en wat je zelf kunt instellen vind je <a href=\"{COOKIE_POLICY_URL}\" target=\"_blank\">hier</a>! Door op 'Cookies accepteren' te klikken, geef je ons toestemming om cookies te gebruiken (toestemming is niet nodig voor noodzakelijke cookies voor het gebruiken van onze site). Je kunt je cookie-instellingen wijzigen en je toestemming intrekken door hieronder op 'Cookie-instellingen' te klikken.",
					COOKIE_POPUP_EU: "Hallo! Wij gebruiken cookies en soortgelijke technologieën (“cookies”), waaronder cookies van derden, op deze website om de site en je ervaring op onze site beter te laten werken, de prestaties van onze site te verbeteren en voor advertentiedoeleinden. Meer informatie over hoe we cookies gebruiken en wat je zelf kunt instellen vind je <a href=\"{COOKIE_POLICY_URL}\" target=\"_blank\">hier</a>! Door op 'Cookies accepteren' te klikken, geef je ons toestemming om cookies te gebruiken (toestemming is niet nodig voor noodzakelijke cookies voor het gebruiken van onze site). Je kunt je cookie-instellingen wijzigen en je toestemming intrekken door hieronder op 'Cookie-instellingen' te klikken.",
					AgreeText: "Cookies accepteren",
					SettingsText: "Cookie-instellingen",
					"Report Infringement": "Inbreuk melden"
				},
				"pa-IN":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "ਲਾਈਵ",
					Ads: "ਇਸ਼ਤਿਹਾਰ",
					Company: "ਕੰਪਨੀ",
					Home: "ਹੋਮ",
					Blog: "ਬਲੌਗ",
					Jobs: "ਨੌਕਰੀਆਂ",
					Careers: "ਰੁਜ਼ਗਾਰ",
					Press: "ਪ੍ਰੈੱਸ",
					News: "ਖ਼ਬਰਾਂ",
					"Press Inquiries": "ਪ੍ਰੈੱਸ ਵੱਲੋਂ ਪੁੱਛਗਿੱਛਾਂ",
					Twitter: "Twitter",
					Language: "ਭਾਸ਼ਾ",
					"Download Snapchat": "Snapchat ਡਾਊਨਲੋਡ ਕਰੋ",
					Download: "ਡਾਊਨਲੋਡ ਕਰੋ",
					Kit: "ਕਿੱਟ",
					Stories: "ਕਹਾਣੀਆਂ",
					"Lens Studio": "Lens ਸਟੂਡੀਓ",
					Store: "ਸਟੋਰ",
					"Snapchat for iOS": "iOS ਵਾਸਤੇ Snapchat",
					"Snapchat for Android": "Android ਵਾਸਤੇ Snapchat",
					Community: "ਭਾਈਚਾਰਾ",
					Support: "ਸਹਾਇਤਾ",
					"Community Guidelines": "ਭਾਈਚਾਰਕ ਸੇਧਾਂ",
					"Safety Center": "ਸੁਰੱਖਿਆ ਕੇਂਦਰ",
					Snapcodes: "Snapcodes",
					Geofilters: "Geofilters",
					Create: "ਫਿਲਟਰ ਅਤੇ Lenses",
					Map: "ਨਕਸ਼ਾ",
					Advertising: "ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ",
					"Buy Ads": "ਇਸ਼ਤਿਹਾਰ ਖਰੀਦੋ",
					"Advertising Policies": "ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ ਨੀਤੀਆਂ",
					"Political Ads Library": "ਰਾਜਨੀਤਿਕ ਵਿਗਿਆਪਨ ਲਾਇਬ੍ਰੇਰੀ",
					"Brand Guidelines": "ਬ੍ਰਾਂਡ ਦੀਆਂ ਸੇਧਾਂ",
					"Promotions Rules": "ਪ੍ਰਚਾਰ ਨਿਯਮ",
					Legal: "ਕਾਨੂੰਨੀ",
					"Terms of Service": "ਸੇਵਾ ਦੀਆਂ ਮਦਾਂ",
					Impressum: "ਮਾਲਕੀ ਦੀ ਛਾਪ",
					"Privacy Policy": "ਪਰਦੇਦਾਰੀ ਨੀਤੀ",
					"Privacy Center": "ਪਰਦੇਦਾਰੀ ਕੇਂਦਰ",
					"Cookie Policy": "ਕੁੱਕੀ ਨੀਤੀ",
					"Memories Terms of Service": "'ਯਾਦਾਂ' ਦੀਆਂ ਸੇਵਾ ਦੀਆਂ ਮਦਾਂ",
					CUSTOM_CREATIVE_TOOLS_TOS: "ਵਿਉਂਤਬੱਧ ਰਚਨਾਤਮਕ ਔਜ਼ਾਰ ਦੀਆਂ ਮਦਾਂ",
					COMMUNITY_TOS: "ਭਾਈਚਾਰਕ Geofilter ਦੀਆਂ ਮਦਾਂ",
					LENS_STUDIO_TOS: "Lens Studio ਦੀਆਂ ਮਦਾਂ",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "ਲਾਜ਼ਮੀ ਕੂਕੀਜ਼",
							content: ['ਸਾਈਟ ਨੂੰ ਸੰਚਾਲਿਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">ਅਸੀਂ ਇਨ੍ਹਾਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ।</a> ਕਿਉਂਕਿ ਇਹ ਕੂਕੀਜ਼ ਲਾਜ਼ਮੀ ਹਨ, ਤੁਸੀਂ ਉਨ੍ਹਾਂ ਨੂੰ ਬੰਦ ਨਹੀਂ ਕਰ ਸਕਦੇ।']
						},
						Preferences:
						{
							headline: "ਤਰਜੀਹਾਂ",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">ਅਸੀਂ ਇਹਨਾਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ</a> ਤੁਹਾਡੀਆਂ ਤਰਜੀਹਾਂ ਨੂੰ ਯਾਦ ਰੱਖਣ ਲਈ ਅਤੇ ਸਾਡੀ ਵੈੱਬਸਾਈਟ ਉੱਤੇ ਤੁਹਾਡੇ ਅਨੁਭਵ ਵਿੱਚ ਸੁਧਾਰ ਕਰਨ ਲਈ ਕਰਦੇ ਹਾਂ।']
						},
						Performance:
						{
							headline: "ਪ੍ਰਦਰਸ਼ਨ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ",
							content: ['ਤੁਸੀਂ ਸਾਡੀ ਸਾਈਟ ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰਦੇ ਹੋ ਉਸ ਬਾਰੇ ਜਾਣਕਾਰੀ ਇਕੱਤਰ ਕਰਨ ਲਈ, ਸਾਈਟ ਦੇ ਪ੍ਰਦਰਸ਼ਨ ਦੀ ਨਿਗਰਾਨੀ ਕਰਨ ਲਈ, ਅਤੇ ਆਪਣੀ ਸਾਈਟ ਦੇ ਪ੍ਰਦਰਸ਼ਨ ਅਤੇ ਤੁਹਾਡੇ ਅਨੁਭਵ ਵਿੱਚ ਸੁਧਾਰ ਕਰਨ ਲਈ <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">ਅਸੀਂ ਇਹਨਾਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ।</a>']
						},
						Marketing:
						{
							headline: "ਮਾਰਕਟਿੰਗ",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">ਅਸੀਂ ਇਹਨਾਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ</a> ਤੁਹਾਨੂੰ ਢੁੱਕਵੇਂ ਇਸ਼ਤਿਹਾਰ ਦਿਖਾਉਣ ਲਈ ਅਤੇ ਸਾਡੀਆਂ ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ ਮੁਹਿੰਮਾਂ ਦੀ ਕਾਮਯਾਬੀ ਨੂੰ ਮਾਪਣ ਲਈ ਕਰਦੇ ਹਾਂ। ਸਾਡੇ ਤੀਜੀ-ਧਿਰ ਦੇ ਵਿਗਿਆਪਨ ਭਾਈਵਾਲ ਤੁਹਾਡੀਆਂ ਰੁਚੀਆਂ ਅਨੁਸਾਰ ਇੱਕ ਪ੍ਰੋਫਾਈਲ ਬਣਾਉਣ ਲਈ ਅਤੇ ਦੂਜੀਆਂ ਸਾਈਟਾਂ ਵਿੱਚ ਢੁੱਕਵੇਂ ਇਸ਼ਤਿਹਾਰ ਦਿਖਾਉਣ ਲਈ ਇਹਨਾਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹਨ।']
						}
					},
					ThirdPartyAdvertisersText: "ਤੀਜੀ-ਧਿਰ ਦੇ ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ ਭਾਈਵਾਲ",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "ਤੀਜੀ-ਧਿਰ ਦੇ ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ ਭਾਈਵਾਲ:",
					EffectiveDate: "ਪ੍ਰਭਾਵੀ ਮਿਤੀ: 15 ਜਨਵਰੀ, 2019",
					Body: ["ਆਪਣੇ ਬ੍ਰਾਊਜ਼ਰ ਜਾਂ ਡੀਵਾਈਸ ਰਾਹੀਂ ਕੁੱਕੀਜ਼ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨ ਤੋਂ ਇਲਾਵਾ, ਤੁਸੀਂ ਆਪਣੀਆਂ ਕੁੱਕੀ ਸੈਟਿੰਗਾਂ ਨੂੰ ਹੇਠਾਂ ਬਦਲ ਸਕਦੇ ਹੋ। ਕਿਰਪਾ ਕਰਕੇ ਨੋਟ ਕਰੋ ਕਿ ਸਾਡੀ ਸਾਈਟ ਨੂੰ ਚਲਾਉਣ ਲਈ ਕੁਝ ਕੁੱਕੀਜ਼ ਦੀ ਲੋੜ ਪੈਂਦੀ ਹੈ ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਇਹਨਾਂ ਸੈਟਿੰਗਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਬਲੌਕ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ।"],
					Title: "ਕੁੱਕੀ ਸੈਟਿੰਗਾਂ",
					COOKIE_POPUP: 'ਹੈਲੋ! ਆਪਣੀ ਸਾਈਟ \'ਤੇ ਸੰਚਾਲਨ ਕਰਨ ਅਤੇ ਤੁਹਾਡੇ ਅਨੁਭਵ ਵਿੱਚ ਸੁਧਾਰ ਕਰਨ, ਸਾਡੀ ਸਾਈਟ ਦੇ ਪ੍ਰਦਰਸ਼ਨ ਦੀ ਨਿਗਰਾਨੀ ਕਰਨ, ਅਤੇ ਇਸ਼ਤਿਹਾਰਬਾਜੀ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਮਦਦ ਕਰਨ ਲਈ ਇਸ ਵੈਬਸਾਇਟ \'ਤੇ ਤੀਜੀ-ਧਿਰ ਦੇ ਕੂਕੀਜ਼ ਸਮੇਤ, ਅਸੀਂ ਕੂਕੀਜ਼ ਅਤੇ ਸਮਾਨ ਤਕਨੀਕਾਂ ("ਕੂਕੀਜ਼") ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ। ਅਸੀਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰਦੇ ਹਾਂ ਅਤੇ ਤੁਹਾਡੇ ਕੂਕੀ ਸਬੰਧੀ ਵਿਕਲਪਾਂ ਬਾਰੇ ਹੋਰ ਜਾਣਨ ਲਈ, ਸਾਡੀ ਕੂਕੀ ਨੀਤੀ ਲਈ <a href="{COOKIE_POLICY_URL}" target="_blank">ਇੱਥੇ</a> ਜਾਓ! ਹੇਠਾਂ "ਕੂਕੀਜ਼ ਸਵੀਕਾਰ ਕਰੋ" \'ਤੇ ਕਲਿੱਕ ਕਰਕੇ, ਤੁਸੀਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ ਸਾਨੂੰ ਆਪਣੀ ਸਹਿਮਤੀ ਦੇ ਰਹੇ ਹੋ (ਸਾਡੀ ਸਾਈਟ ਨੂੰ ਚਲਾਉਣ ਲਈ ਲਾਜ਼ਮੀ ਕੂਕੀਜ਼ ਲਈ ਲੋੜੀਂਦੀ ਸਹਿਮਤੀ ਤੋਂ ਇਲਾਵਾ)। ਹੇਠਾਂ "ਕੂਕੀ ਸੈਟਿੰਗਜ਼" \'ਤੇ ਕਲਿੱਕ ਕਰਕੇ, ਤੁਸੀਂ ਆਪਣੀ ਕੂਕੀਜ਼ ਸੈਟਿੰਗਜ਼ ਨੂੰ ਬਦਲ ਸਕਦੇ ਹੋ, ਅਤੇ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੀ ਸਹਿਮਤੀ ਵਾਪਸ ਲੈ ਸਕਦੇ ਹੋ।',
					COOKIE_POPUP_EU: 'ਹੈਲੋ! ਆਪਣੀ ਸਾਈਟ \'ਤੇ ਸੰਚਾਲਨ ਕਰਨ ਅਤੇ ਤੁਹਾਡੇ ਅਨੁਭਵ ਵਿੱਚ ਸੁਧਾਰ ਕਰਨ, ਸਾਡੀ ਸਾਈਟ ਦੇ ਪ੍ਰਦਰਸ਼ਨ ਦੀ ਨਿਗਰਾਨੀ ਕਰਨ, ਅਤੇ ਇਸ਼ਤਿਹਾਰਬਾਜੀ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਮਦਦ ਕਰਨ ਲਈ ਇਸ ਵੈਬਸਾਇਟ \'ਤੇ ਤੀਜੀ-ਧਿਰ ਦੇ ਕੂਕੀਜ਼ ਸਮੇਤ, ਅਸੀਂ ਕੂਕੀਜ਼ ਅਤੇ ਸਮਾਨ ਤਕਨੀਕਾਂ ("ਕੂਕੀਜ਼") ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ। ਅਸੀਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰਦੇ ਹਾਂ ਅਤੇ ਤੁਹਾਡੇ ਕੂਕੀ ਸਬੰਧੀ ਵਿਕਲਪਾਂ ਬਾਰੇ ਹੋਰ ਜਾਣਨ ਲਈ, ਸਾਡੀ ਕੂਕੀ ਨੀਤੀ ਲਈ <a href="{COOKIE_POLICY_URL}" target="_blank">ਇੱਥੇ</a> ਜਾਓ! ਹੇਠਾਂ "ਕੂਕੀਜ਼ ਸਵੀਕਾਰ ਕਰੋ" \'ਤੇ ਕਲਿੱਕ ਕਰਕੇ, ਤੁਸੀਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ ਸਾਨੂੰ ਆਪਣੀ ਸਹਿਮਤੀ ਦੇ ਰਹੇ ਹੋ (ਸਾਡੀ ਸਾਈਟ ਨੂੰ ਚਲਾਉਣ ਲਈ ਲਾਜ਼ਮੀ ਕੂਕੀਜ਼ ਲਈ ਲੋੜੀਂਦੀ ਸਹਿਮਤੀ ਤੋਂ ਇਲਾਵਾ)। ਹੇਠਾਂ "ਕੂਕੀ ਸੈਟਿੰਗਜ਼" \'ਤੇ ਕਲਿੱਕ ਕਰਕੇ, ਤੁਸੀਂ ਆਪਣੀ ਕੂਕੀਜ਼ ਸੈਟਿੰਗਜ਼ ਨੂੰ ਬਦਲ ਸਕਦੇ ਹੋ, ਅਤੇ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੀ ਸਹਿਮਤੀ ਵਾਪਸ ਲੈ ਸਕਦੇ ਹੋ।',
					AgreeText: "ਕੂਕੀਜ਼ ਸਵੀਕਾਰ ਕਰੋ",
					SettingsText: "ਕੂਕੀ ਸੈਟਿੰਗਾਂ",
					"Report Infringement": "ਉਲੰਘਣਾ ਦੀ ਰਿਪੋਰਟ ਕਰੋ"
				},
				"pl-pl":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Na żywo",
					Ads: "Reklamy",
					Company: "Firma",
					Home: "Strona główna",
					Blog: "Blog",
					Jobs: "Praca",
					Careers: "Kariera",
					Press: "Prasa",
					News: "Aktualności",
					"Press Inquiries": "Zapytania prasowe",
					Twitter: "Twitter",
					Language: "Język",
					"Download Snapchat": "Pobierz Snapchata",
					Download: "Pobierz",
					Kit: "Zestaw narzędzi",
					Stories: "Stories",
					"Lens Studio": "Lens Studio",
					Store: "Sklep",
					"Snapchat for iOS": "Snapchat na iOS",
					"Snapchat for Android": "Snapchat na Android",
					Community: "Społeczność",
					Support: "Wsparcie",
					"Community Guidelines": "Wytyczne dla społeczności",
					"Safety Center": "Centrum bezpieczeństwa",
					Snapcodes: "Snapkody",
					Geofilters: "Geofiltry",
					Create: "Filtry i Lenses",
					Map: "Mapa",
					Advertising: "Reklama",
					"Buy Ads": "Kup reklamę",
					"Advertising Policies": "Zasady dotyczące reklam",
					"Political Ads Library": "Biblioteka reklam politycznych",
					"Brand Guidelines": "Wytyczne dotyczące marki",
					"Promotions Rules": "Zasady promocji",
					Legal: "Informacje prawne",
					"Terms of Service": "Regulamin usługi",
					Impressum: "Impressum",
					"Privacy Policy": "Polityka prywatności",
					"Privacy Center": "Centrum ochrony prywatności",
					"Cookie Policy": "Polityka plików cookies",
					"Memories Terms of Service": "Regulamin usługi Memories",
					CUSTOM_CREATIVE_TOOLS_TOS: "Warunki użytkowania spersonalizowanych narzędzi kreatywnych",
					COMMUNITY_TOS: "Regulamin usługi Geofiltr społeczności",
					LENS_STUDIO_TOS: "Warunki świadczenia usługi Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Niezbędne pliki cookie",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Korzystamy z plików cookie,</a> aby usprawniać działanie strony internetowej. Ponieważ te pliki cookie są niezbędne do jej funkcjonowania, nie można ich wyłączyć.']
						},
						Preferences:
						{
							headline: "Preferencje",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Korzystamy z tych plików cookie,</a> aby zapamiętywać preferencje użytkownika i zwiększać funkcjonalność naszej witryny.']
						},
						Performance:
						{
							headline: "Wydajność i analiza danych",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Korzystamy z tych plików cookie,</a> aby zbierać informacje dotyczące użytkowania naszej strony, a także monitorować i poprawiać parametry strony, zwiększając wygodę użytkowania.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Korzystamy z tych plików cookie,</a> aby dostarczać odpowiednie reklamy i mierzyć skuteczność naszych kampanii reklamowych. Nasi zewnętrzni partnerzy reklamowi mogą wykorzystywać te pliki cookie, by tworzyć profil zainteresowań użytkownika i wyświetlać mu stosowne reklamy w innych witrynach.']
						}
					},
					ThirdPartyAdvertisersText: "zewnętrzni partnerzy reklamowi",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Zewnętrzni partnerzy reklamowi:",
					EffectiveDate: "Data wejścia w życie: 15 stycznia 2019 roku",
					Body: ["Oprócz zarządzania plikami cookie w przeglądarce lub urządzeniu użytkownik może zmienić swoje ustawienia plików cookie poniżej. Należy zwrócić uwagę, że niektóre pliki cookie są konieczne do funkcjonowania naszej strony i nie można ich zablokować przy użyciu tych ustawień."],
					Title: "Ustawienia Cookie",
					COOKIE_POPUP: 'Witaj! Na tej stronie internetowej korzystamy z plików cookie i podobnych technologii („pliki cookie”), w tym zewnętrznych plików cookie, aby usprawniać działanie naszej strony, zwiększać jej funkcjonalność i monitorować jej parametry, a także w celach reklamowych. Dowiedz się więcej o naszych plikach cookie i ich ustawieniach <a href="{COOKIE_POLICY_URL}" target="_blank">tutaj</a>! Klikając opcję „Akceptuj pliki cookie” poniżej, wyrażasz zgodę na stosowanie przez nas plików cookie (zgoda ta nie jest wymagana w przypadku plików cookie niezbędnych do funkcjonowania naszej strony). Możesz zmienić swoje ustawienia plików cookie lub wycofać swoją zgodę w dowolnym momencie, klikając opcję „Ustawienia plików cookie” poniżej.',
					COOKIE_POPUP_EU: 'Witaj! Na tej stronie internetowej korzystamy z plików cookie i podobnych technologii („pliki cookie”), w tym zewnętrznych plików cookie, aby usprawniać działanie naszej strony, zwiększać jej funkcjonalność i monitorować jej parametry, a także w celach reklamowych. Dowiedz się więcej o naszych plikach cookie i ich ustawieniach <a href="{COOKIE_POLICY_URL}" target="_blank">tutaj</a>! Klikając opcję „Akceptuj pliki cookie” poniżej, wyrażasz zgodę na stosowanie przez nas plików cookie (zgoda ta nie jest wymagana w przypadku plików cookie niezbędnych do funkcjonowania naszej strony). Możesz zmienić swoje ustawienia plików cookie lub wycofać swoją zgodę w dowolnym momencie, klikając opcję „Ustawienia plików cookie” poniżej.',
					AgreeText: "Akceptuj pliki cookie",
					SettingsText: "Ustawienia plików cookie",
					"Report Infringement": "Zgłoś naruszenie"
				},
				"pt-br":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Ao Vivo",
					Ads: "Anúncios",
					Company: "Empresa",
					Home: "Página inicial",
					Blog: "Blog",
					Jobs: "Empregos",
					Careers: "Carreiras",
					Press: "Imprensa",
					News: "Notícias",
					"Press Inquiries": "Assessoria de Imprensa",
					Twitter: "Twitter",
					Language: "Idioma",
					"Download Snapchat": "Baixar o Snapchat",
					Download: "Baixar",
					Kit: "Kit",
					Stories: "Histórias",
					"Lens Studio": "Lens Studio",
					Store: "Loja",
					"Snapchat for iOS": "Snapchat para iOS",
					"Snapchat for Android": "Snapchat para Android",
					Community: "Comunidade",
					Support: "Suporte",
					"Community Guidelines": "Diretrizes Comunitárias",
					"Safety Center": "Centro de Segurança",
					Snapcodes: "Snapcodes",
					Geofilters: "Filtros Geográficos",
					Create: "Filtros e Lenses",
					Map: "Mapa",
					Advertising: "Publicidade",
					"Buy Ads": "Comprar anúncios",
					"Advertising Policies": "Políticas de Publicidade",
					"Political Ads Library": "Biblioteca de Anúncios Políticos",
					"Brand Guidelines": "Diretrizes de Marca",
					"Promotions Rules": "Regras de Promoções",
					Legal: "Direito",
					"Terms of Service": "Termos de Serviço",
					Impressum: "Impressum",
					"Privacy Policy": "Política de Privacidade",
					"Privacy Center": "Centro de Privacidade",
					"Cookie Policy": "Política de Cookies",
					"Memories Terms of Service": "Termos de Serviço das Memórias",
					CUSTOM_CREATIVE_TOOLS_TOS: "Termos das Ferramentas Criativas Personalizadas",
					COMMUNITY_TOS: "Termos dos Filtros Geográficos Comunitários",
					LENS_STUDIO_TOS: "Termos do Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Cookies necessários",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Usamos estes cookies</a> para ajudar no funcionamento do site. Como esses cookies são necessários, você não pode desativá-los.']
						},
						Preferences:
						{
							headline: "Preferências",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Usamos estes cookies</a> para lembrar das suas preferências e melhorar sua experiência no nosso site.']
						},
						Performance:
						{
							headline: "Desempenho e Análise",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Usamos estes cookies</a> para coletar dados sobre como você usa nosso site, monitorar o desempenho dele e melhorá-lo em conjunto com a sua experiência.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Usamos estes cookies</a> para fazer publicidade relevante e medir a eficácia de nossas campanhas publicitárias. Nossos parceiros de publicidade terceirizados podem usar esses cookies para criar um perfil de seus interesses e exibir anúncios relevantes em outros sites.']
						}
					},
					ThirdPartyAdvertisersText: "parceiros de publicidade terceirizados",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Parceiros de publicidade terceirizados:",
					EffectiveDate: "Válido a partir de 15 de janeiro de 2019",
					Body: ["Além de gerenciar cookies através do seu navegador ou aparelho, você pode alterar suas configurações de cookies abaixo. Saiba que certos cookies são necessários para rodar o nosso site e não podem ser bloqueados usando estas configurações."],
					Title: "Configurações de cookies",
					COOKIE_POPUP: 'Oi! Usamos cookies e tecnologias similares (“cookies”) neste site, incluindo cookies de terceiros, para ajudar a executar e a melhorar sua experiência em nosso site, monitorar o desempenho dele e para fins de publicidade. Para mais informações sobre como usamos cookies e suas opções a respeito, entre <a href="{COOKIE_POLICY_URL}" target="_blank">aqui</a> para ver nossa política de cookies! Clicando em "Aceitar cookies" abaixo, você nos dá seu consentimento para usar cookies (exceto quando o consentimento não é exigido para os cookies necessários para o funcionamento do site). Você pode alterar suas configurações de cookies e retirar seu consentimento a qualquer momento clicando em “Configurações de cookies” abaixo.',
					COOKIE_POPUP_EU: 'Oi! Usamos cookies e tecnologias similares (“cookies”) neste site, incluindo cookies de terceiros, para ajudar a executar e a melhorar sua experiência em nosso site, monitorar o desempenho dele e para fins de publicidade. Para mais informações sobre como usamos cookies e suas opções a respeito, entre <a href="{COOKIE_POLICY_URL}" target="_blank">aqui</a> para ver nossa política de cookies! Clicando em "Aceitar cookies" abaixo, você nos dá seu consentimento para usar cookies (exceto quando o consentimento não é exigido para os cookies necessários para o funcionamento do site). Você pode alterar suas configurações de cookies e retirar seu consentimento a qualquer momento clicando em “Configurações de cookies” abaixo.',
					AgreeText: "Aceitar cookies",
					SettingsText: "Configurações de cookies",
					"Report Infringement": "Denunciar violação"
				},
				"pt-pt":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Em direto",
					Ads: "Publicidade",
					Company: "Empresa",
					Home: "Início",
					Blog: "Blog",
					Jobs: "Empregos",
					Careers: "Carreiras",
					Press: "Imprensa",
					News: "Novidades",
					"Press Inquiries": "Contactos da Imprensa",
					Twitter: "Twitter",
					Language: "Idioma",
					"Download Snapchat": "Descarregar o Snapchat",
					Download: "Descarregar",
					Kit: "Kit",
					Stories: "Histórias",
					"Lens Studio": "Lens Studio",
					Store: "Loja",
					"Snapchat for iOS": "Snapchat para iOS",
					"Snapchat for Android": "Snapchat para Android",
					Community: "Comunidade",
					Support: "Assistência",
					"Community Guidelines": "Diretrizes da Comunidade",
					"Safety Center": "Centro de Segurança",
					Snapcodes: "Snapcodes",
					Geofilters: "Filtros Geográficos",
					Create: "Filtros e Lenses",
					Map: "Mapa",
					Advertising: "Publicidade",
					"Buy Ads": "Comprar Publicidade",
					"Advertising Policies": "Políticas de Publicidade",
					"Political Ads Library": "Biblioteca de Anúncios Políticos",
					"Brand Guidelines": "Manual de Normas da Marca",
					"Promotions Rules": "Regras de Promoções",
					Legal: "Jurídico",
					"Terms of Service": "Condições de Serviço",
					Impressum: "Ficha Técnica",
					"Privacy Policy": "Política de Privacidade",
					"Privacy Center": "Centro de Privacidade",
					"Cookie Policy": "Política de Cookies",
					"Memories Terms of Service": "Condições de Serviço das Memórias",
					CUSTOM_CREATIVE_TOOLS_TOS: "Condições das Ferramentas Criativas Personalizadas",
					COMMUNITY_TOS: "Condições dos Geofilters Comunitários",
					LENS_STUDIO_TOS: "Condições do Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Cookies necessários",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Utilizamos estes cookies</a> para ajudar a gerir o site. Uma vez que estes cookies são necessários, não é possível desativá-los.']
						},
						Preferences:
						{
							headline: "Preferências",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Utilizamos estes cookies</a> para memorizar as preferências do utilizador e melhorar a sua experiência no nosso site.']
						},
						Performance:
						{
							headline: "Desempenho e Análise",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Utilizamos estes cookies</a> para recolher informações sobre como o utilizador utiliza o nosso site, monitorizar e melhorar o desempenho do nosso site e também melhorar a experiência do utilizador.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Utilizamos estes cookies</a> para apresentar anúncios relevantes e medir a eficácia das nossas campanhas publicitárias. Os nossos parceiros de publicidade terceiros podem utilizar estes cookies para criar um perfil dos seus interesses e apresentar anúncios relevantes noutros sites.']
						}
					},
					ThirdPartyAdvertisersText: "parceiros de publicidade terceiros",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Parceiros de publicidade terceiros:",
					EffectiveDate: "Entrada em vigor: 15 de janeiro de 2019",
					Body: ["Além de poder gerir os cookies através do seu navegador ou dispositivo, o utilizador pode alterar as definições de cookies abaixo. O utilizador deve ter em atenção que determinados cookies são necessários para o funcionamento do nosso site e não podem ser bloqueados, utilizando estas definições."],
					Title: "Definições de Cookies",
					COOKIE_POPUP: 'Olá! Neste site, utilizamos cookies e tecnologias semelhantes ("cookies"), incluindo cookies de terceiros, para ajudar a gerir e melhorar a experiência do utilizador no nosso site, para monitorizar o desempenho do site e para fins publicitários. Para saber mais sobre como os utilizamos e sobre as suas opções de cookies, aceda <a href="{COOKIE_POLICY_URL}" target="_blank">aqui</a> e consulte a nossa política de cookies. Ao clicar em "Aceitar Cookies" abaixo, o utilizador está a dar-nos o seu consentimento para utilizarmos cookies (com a exceção de que não é necessário consentimento para os cookies necessários para gerir o nosso site). O utilizador pode alterar as suas definições de cookies e retirar o consentimento em qualquer altura ao clicar em "Definições de Cookies" abaixo.',
					COOKIE_POPUP_EU: 'Olá! Neste site, utilizamos cookies e tecnologias semelhantes ("cookies"), incluindo cookies de terceiros, para ajudar a gerir e melhorar a experiência do utilizador no nosso site, para monitorizar o desempenho do site e para fins publicitários. Para saber mais sobre como os utilizamos e sobre as suas opções de cookies, aceda <a href="{COOKIE_POLICY_URL}" target="_blank">aqui</a> e consulte a nossa política de cookies. Ao clicar em "Aceitar Cookies" abaixo, o utilizador está a dar-nos o seu consentimento para utilizarmos cookies (com a exceção de que não é necessário consentimento para os cookies necessários para gerir o nosso site). O utilizador pode alterar as suas definições de cookies e retirar o consentimento em qualquer altura ao clicar em "Definições de Cookies" abaixo.',
					AgreeText: "Aceitar Cookies",
					SettingsText: "Definições de Cookies",
					"Report Infringement": "Denúncia de Violação"
				},
				"ro-ro":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "În direct",
					Ads: "Reclame",
					Company: "Companie",
					Home: "Acasă",
					Blog: "Blog",
					Jobs: "Locuri de muncă",
					Careers: "Cariere",
					Press: "Presă",
					News: "Știri",
					"Press Inquiries": "Întrebări din partea presei",
					Twitter: "Twitter",
					Language: "Limba",
					"Download Snapchat": "Descarcă Snapchat",
					Download: "Descarcă",
					Kit: "Kit",
					Stories: "Povești",
					"Lens Studio": "Studio Lenses",
					Store: "Magazin",
					"Snapchat for iOS": "Snapchat pentru iOS",
					"Snapchat for Android": "Snapchat pentru Android",
					Community: "Comunitate",
					Support: "Asistență",
					"Community Guidelines": "Regulile comunității",
					"Safety Center": "Centrul de siguranță",
					Snapcodes: "Snapcoduri",
					Geofilters: "Filtre geografice",
					Create: "Filtre și Lens",
					Map: "Hartă",
					Advertising: "Publicitate",
					"Buy Ads": "Cumpără reclame",
					"Advertising Policies": "Politici privind publicitatea",
					"Political Ads Library": "Biblioteca de reclame politice",
					"Brand Guidelines": "Reguli utilizare brand",
					"Promotions Rules": "Regulament publicitate",
					Legal: "Aspecte juridice",
					"Terms of Service": "Termeni de utilizare",
					Impressum: "Tipărit",
					"Privacy Policy": "Politica de confidențialitate",
					"Privacy Center": "Centrul de confidențialitate",
					"Cookie Policy": "Politica privind modulele cookie",
					"Memories Terms of Service": "Termeni de utilizare Amintiri",
					CUSTOM_CREATIVE_TOOLS_TOS: "Termeni de utilizare instrumente creative personalizate",
					COMMUNITY_TOS: "Termeni Geofilter despre comunitate",
					LENS_STUDIO_TOS: "Termeni de utilizare Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Cookie-uri necesare",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Utilizăm aceste cookie-uri</a> pentru funcționarea site-ului. Deoarece aceste cookie-uri sunt necesare, nu le poți dezactiva.']
						},
						Preferences:
						{
							headline: "Preferințe",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Utilizăm aceste cookie-uri</a> pentru a ne aminti preferințele tale și a-ți îmbunătăți experiența pe site.']
						},
						Performance:
						{
							headline: "Performanță și analize",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Utilizăm aceste cookie-uri</a> pentru a colecta informații despre modul în care utilizezi site-ul nostru, pentru a monitoriza performanța site-ului și a îmbunătăți performanța site-ului și experiența ta.']
						},
						Marketing:
						{
							headline: "Marketing",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Utilizăm aceste cookie-uri</a> pentru a oferi publicitate relevantă și a măsura eficacitatea campaniilor noastre publicitare. Partenerii noștri de publicitate terță parte pot folosi aceste cookie-uri pentru a alcătui un profil al intereselor tale și a oferi publicitate relevantă pe alte site-uri.']
						}
					},
					ThirdPartyAdvertisersText: "parteneri de publicitate terță parte",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Parteneri de publicitate de terță parte:",
					EffectiveDate: "Efectiv: 15 ianuarie January 2019",
					Body: ["În plus față de gestionarea modulelor cookie prin intermediul browserului sau al dispozitivului tău, poți schimba mai jos setările cookie-urilor. Rețineți că anumite cookie-uri sunt necesare să ruleze pe site-ul nostru și nu pot fi blocate utilizând aceste setări."],
					Title: "Setări module cookie",
					COOKIE_POPUP: 'Bună! Utilizăm cookie-uri și tehnologii similare („cookie-uri”), inclusiv cookie-uri terță parte, pe acest site pentru a ajuta la funcționarea acestuia și a-ți îmbunătăți experiența pe site, a monitoriza performanța site-ului și în scopuri de publicitate. Pentru mai multe informații despre modul în care utilizăm cookie-urile, consultă politica de utilizare a cookie-urilor, <a href="{COOKIE_POLICY_URL}" target="_blank">aici</a>! Dacă faci clic pe „Accept cookie-urile” mai jos, ne acorzi permisiunea de a utiliza cookie-uri (nu este necesar consimțământul pentru cookie-urile necesare pentru funcționarea site-ului). Poți să modifici oricând setările pentru cookie-uri și să îți retragi consimțământul, dacă faci clic pe „Setări module cookie”, mai jos.',
					COOKIE_POPUP_EU: 'Bună! Utilizăm cookie-uri și tehnologii similare („cookie-uri”), inclusiv cookie-uri terță parte, pe acest site pentru a ajuta la funcționarea acestuia și a-ți îmbunătăți experiența pe site, a monitoriza performanța site-ului și în scopuri de publicitate. Pentru mai multe informații despre modul în care utilizăm cookie-urile, consultă politica de utilizare a cookie-urilor, <a href="{COOKIE_POLICY_URL}" target="_blank">aici</a>! Dacă faci clic pe „Accept cookie-urile” mai jos, ne acorzi permisiunea de a utiliza cookie-uri (nu este necesar consimțământul pentru cookie-urile necesare pentru funcționarea site-ului). Poți să modifici oricând setările pentru cookie-uri și să îți retragi consimțământul, dacă faci clic pe „Setări module cookie”, mai jos.',
					AgreeText: "Acceptă module cookie",
					SettingsText: "Setări module cookie",
					"Report Infringement": "Raportează încălcarea drepturilor"
				},
				"ru-ru":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Трансляция",
					Ads: "Реклама",
					Company: "Компания",
					Home: "Главная",
					Blog: "Блог",
					Jobs: "Вакансии",
					Careers: "Карьера",
					Press: "СМИ",
					News: "Новости",
					"Press Inquiries": "Запросы от СМИ",
					Twitter: "Twitter",
					Language: "Язык",
					"Download Snapchat": "Скачать Snapchat",
					Download: "Скачать",
					Kit: "Snap Kit",
					Stories: "Истории",
					"Lens Studio": "Lens Studio",
					Store: "Магазин",
					"Snapchat for iOS": "Snapchat для iOS",
					"Snapchat for Android": "Snapchat для Android",
					Community: "Сообщество",
					Support: "Поддержка",
					"Community Guidelines": "Правила сообщества",
					"Safety Center": "Центр безопасности",
					Snapcodes: "Снапкоды",
					Geofilters: "Геофильтры",
					Create: "Фильтры и линзы",
					Map: "Карта",
					Advertising: "Реклама",
					"Buy Ads": "Стать рекламодателем",
					"Advertising Policies": "Рекламная политика",
					"Political Ads Library": "Библиотека политической рекламы",
					"Brand Guidelines": "Руководство по бренду",
					"Promotions Rules": "Правила промоакций",
					Legal: "Юридическая информация",
					"Terms of Service": "Условия использования",
					Impressum: "Юридическая информация",
					"Privacy Policy": "Политика конфиденциальности",
					"Privacy Center": "Центр конфиденциальности",
					"Cookie Policy": "Файлы сookie",
					"Memories Terms of Service": "Условия использования Воспоминаний",
					CUSTOM_CREATIVE_TOOLS_TOS: "Условия использования пользовательских креативных инструментов",
					COMMUNITY_TOS: "Условия использования геофильтров сообщества",
					LENS_STUDIO_TOS: "Условия использования Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Необходимые файлы cookie",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Мы используем файлы cookie,</a> чтобы обеспечить работу сайта. Эти файлы cookie являются необходимыми, поэтому их нельзя отключить.']
						},
						Preferences:
						{
							headline: "Настройки",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Мы используем эти файлы cookie,</a> чтобы запомнить ваши настройки и сделать сайт удобнее.']
						},
						Performance:
						{
							headline: "Эффективность и аналитика",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Мы используем эти файлы cookie,</a> чтобы собирать сведения о том, как вы пользуетесь сайтом, отслеживать производительность сайта, улучшать его работу и делать удобнее для вас.']
						},
						Marketing:
						{
							headline: "Маркетинг",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Мы используем эти файлы cookie,</a> чтобы предлагать вам более актуальную рекламу и отслеживать эффективность рекламных кампаний. Наши сторонние рекламные партнёры могут использовать данные файлы cookie для создания профиля ваших интересов и размещения актуальной рекламы на других сайтах.']
						}
					},
					ThirdPartyAdvertisersText: "сторонние рекламные партнёры",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Сторонние рекламные партнёры:",
					EffectiveDate: "Действует с 15.01.2019",
					Body: ["Помимо управления настройками файлов cookie через меню браузера или устройства, их можно изменить ниже. Обратите внимание: некоторые cookie необходимы для работы нашего сайта и не могут быть заблокированы в этих настройках."],
					Title: "Настройки cookie",
					COOKIE_POPUP: 'Здравствуйте! Мы используем файлы cookie и аналогичные технологии, в том числе сторонние файлы cookie, на этом сайте, чтобы улучшать его работу, делать удобнее для вас, отслеживать его эффективность, а также в рекламных целях. Подробнее о том, как мы используем файлы cookie и ваши настройки файлов cookie, можно узнать из нашей <a href="{COOKIE_POLICY_URL}" target="_blank">политики</a> в отношении файлов cookie. Нажимая "Разрешить использование файлов cookie" ниже, вы выражаете своё согласие на использование нами файлов cookie (согласие на использование файлов cookie, необходимых для работы сайта, не требуется). Вы в любое время можете изменить настройки cookie и отозвать своё разрешение, нажав "Настройки файлов cookie" ниже.',
					COOKIE_POPUP_EU: 'Здравствуйте! Мы используем файлы cookie и аналогичные технологии, в том числе сторонние файлы cookie, на этом сайте, чтобы улучшать его работу, делать удобнее для вас, отслеживать его эффективность, а также в рекламных целях. Подробнее о том, как мы используем файлы cookie и ваши настройки файлов cookie, можно узнать из нашей <a href="{COOKIE_POLICY_URL}" target="_blank">политики</a> в отношении файлов cookie. Нажимая "Разрешить использование файлов cookie" ниже, вы выражаете своё согласие на использование нами файлов cookie (согласие на использование файлов cookie, необходимых для работы сайта, не требуется). Вы в любое время можете изменить настройки cookie и отозвать своё разрешение, нажав "Настройки файлов cookie" ниже.',
					AgreeText: "Разрешить использование файлов cookie",
					SettingsText: "Настройки файлов cookie",
					"Report Infringement": "Сообщить о нарушении"
				},
				"sv-se":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Live",
					Ads: "Annonser",
					Company: "Företag",
					Home: "Hem",
					Blog: "Blogg",
					Jobs: "Jobb",
					Careers: "Karriär",
					Press: "Press",
					News: "Nyheter",
					"Press Inquiries": "Pressfrågor",
					Twitter: "Twitter",
					Language: "Språk",
					"Download Snapchat": "Ladda ner Snapchat",
					Download: "Ladda ner",
					Kit: "Kit",
					Stories: "Stories",
					"Lens Studio": "Lens Studio",
					Store: "Butik",
					"Snapchat for iOS": "Snapchat för iOS",
					"Snapchat for Android": "Snapchat för Android",
					Community: "Community",
					Support: "Support",
					"Community Guidelines": "Community-riktlinjer",
					"Safety Center": "Säkerhetscenter",
					Snapcodes: "Snapkoder",
					Geofilters: "Geofilter",
					Create: "Filter och Lenses",
					Map: "Karta",
					Advertising: "Annonsering",
					"Buy Ads": "Köp annonser",
					"Advertising Policies": "Annonsvillkor",
					"Political Ads Library": "Bibliotek av politiska annonser",
					"Brand Guidelines": "Varumärkesriktlinjer",
					"Promotions Rules": "Kampanjregler",
					Legal: "Juridisk information",
					"Terms of Service": "Användarvillkor",
					Impressum: "Impressum",
					"Privacy Policy": "Sekretessvillkor",
					"Privacy Center": "Sekretesscenter",
					"Cookie Policy": "Cookiepolicy",
					"Memories Terms of Service": "Memories användarvillkor",
					CUSTOM_CREATIVE_TOOLS_TOS: "Villkor för anpassade kreativa verktyg",
					COMMUNITY_TOS: "Community-geofilter villkor",
					LENS_STUDIO_TOS: "Användarvillkor för Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Nödvändiga cookies",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Vi använder dessa cookies</a> för att hjälpa till att driva sidan. Du kan inte stänga av dessa cookies eftersom de är nödvändiga.']
						},
						Preferences:
						{
							headline: "Preferenser",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Vi använder dessa cookies</a> för att komma ihåg dina preferenser och förbättra din upplevelse på vår webbsida.']
						},
						Performance:
						{
							headline: "Prestanda och analyser",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Vi använder dessa cookies</a> för att samla in information om hur du använder vår sida, övervaka sidans prestanda och förbättra vår sidas prestanda och din upplevelse.']
						},
						Marketing:
						{
							headline: "Marknadsföring",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Vi använder dessa cookies</a> för att visa relevanta annonser och mäta effektiviteten på våra annonskampanjer. Våra tredjepartsannonspartner kan använda dessa cookies för att bygga en profil över dina intressen och leverera relevanta annonser på andra sidor.']
						}
					},
					ThirdPartyAdvertisersText: "Tredjepartsannonspartner",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Tredjepartsannonspartner:",
					EffectiveDate: "Gäller fr.o.m. 15 januari 2019",
					Body: ["Förutom att hantera cookies på din webbläsare eller enhet kan du ändra dina cookiesinställningar nedan. Tänk på att vissa cookies behövs för att använda vår sida och kan inte blockeras i dessa inställningar."],
					Title: "Cookieinställningar",
					COOKIE_POPUP: 'Hej! Vi använder cookies och liknande teknologi ("cookies"), inklusive tredjepartscookies på den här webbsidan för att hjälpa till att driva sidan och förbättra din upplevelse, för att övervaka hur sidan fungerar och i annonseringssyften. Mer information om hur vi använder cookies, dina cookie-val och vår cookie-policy hittar du <a href="{COOKIE_POLICY_URL}" target="_blank">här</a>. Genom att klicka på "Acceptera cookies" godkänner du att vi använder cookies (vi behöver inte ditt medgivande för att använda cookies som är nödvändiga för att driva sidan). Du kan ändra dina cookie-inställningar och återkalla ditt medgivande när du vill genom att klicka på "Cookie-inställningar" nedan.',
					COOKIE_POPUP_EU: 'Hej! Vi använder cookies och liknande teknologi ("cookies"), inklusive tredjepartscookies på den här webbsidan för att hjälpa till att driva sidan och förbättra din upplevelse, för att övervaka hur sidan fungerar och i annonseringssyften. Mer information om hur vi använder cookies, dina cookie-val och vår cookie-policy hittar du <a href="{COOKIE_POLICY_URL}" target="_blank">här</a>. Genom att klicka på "Acceptera cookies" godkänner du att vi använder cookies (vi behöver inte ditt medgivande för att använda cookies som är nödvändiga för att driva sidan). Du kan ändra dina cookie-inställningar och återkalla ditt medgivande när du vill genom att klicka på "Cookie-inställningar" nedan.',
					AgreeText: "Acceptera cookies",
					SettingsText: "Cookie-inställningar",
					"Report Infringement": "Anmäl intrång"
				},
				"ta-in":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "நேரலை",
					Ads: "விளம்பரங்கள்",
					Company: "நிறுவனம்",
					Home: "முகப்பு",
					Blog: "வலைப்பதிவு",
					Jobs: "வேலைவாய்ப்புகள்",
					Careers: "பணிகள்",
					Press: "இதழ்த்துறை",
					News: "செய்திகள்",
					"Press Inquiries": "இதழ்த்துறை விசாரணைகள்",
					Twitter: "Twitter",
					Language: "மொழி",
					"Download Snapchat": "Snapchat-ஐப் பதிவிறக்கு",
					Download: "பதிவிறக்கவும்",
					Kit: "தொகுப்பு",
					Stories: "கதைகள்",
					"Lens Studio": "Lens Studio",
					Store: "கடை",
					"Snapchat for iOS": "iOS-க்கான Snapchat",
					"Snapchat for Android": "Android-க்கான Snapchat",
					Community: "சமூகம்",
					Support: "ஆதரவு",
					"Community Guidelines": "சமூக வழிகாட்டுதல்கள்",
					"Safety Center": "பாதுகாப்பு மையம்",
					Snapcodes: "Snapcodes",
					Geofilters: "Geofilters",
					Create: "வடிகட்டிகள் & Lenses",
					Map: "வரைபடம்",
					Advertising: "விளம்பரம் செய்தல்",
					"Buy Ads": "விளம்பரங்களை வாங்குங்கள்",
					"Advertising Policies": "விளம்பரக் கொள்கைகள்",
					"Political Ads Library": "அரசியல் விளம்பரங்கள் நூலகம்",
					"Brand Guidelines": "பிராண்ட் வழிகாட்டுதல்கள்",
					"Promotions Rules": "விளம்பர விதிகள்",
					Legal: "சட்டரீதியானவை",
					"Terms of Service": "சேவை விதிமுறைகள்",
					Impressum: "சட்ட அறிவிப்பு",
					"Privacy Policy": "தனியுரிமைக் கொள்கை",
					"Privacy Center": "தனியுரிமை மையம்",
					"Cookie Policy": "குக்கீக் கொள்கை",
					"Memories Terms of Service": "நினைவுகள் சேவை விதிமுறைகள்",
					CUSTOM_CREATIVE_TOOLS_TOS: "தன்மய ஆக்கப்பூர்வக் கருவிகள் தொடர்பான விதிமுறைகள்",
					COMMUNITY_TOS: "சமூக Geofilter வடிகட்டி விதிமுறைகள்",
					LENS_STUDIO_TOS: "Lens Studio விதிமுறைகள்",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "தேவையான குக்கீகள்",
							content: ['தளத்தை இயக்குவதற்கு <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">இந்தக் குக்கீகளைப் பயன்படுத்துகிறோம்</a>. இந்தக் குக்கீகள் அவசியமானவை என்பதால், நீங்கள் அவற்றை அணைக்க முடியாது.']
						},
						Preferences:
						{
							headline: "விருப்பத்தேர்வுகள்",
							content: ['நாங்கள் உங்கள் விருப்பங்களை நினைவில் வைத்துக் கொள்ளவும், எங்கள் வலைத்தளத்தில் உங்கள் அனுபவத்தை மேம்படுத்தவும் <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">இந்தக் குக்கீகளைப் பயன்படுத்துகிறோம்</a>.']
						},
						Performance:
						{
							headline: "செயல்திறன் மற்றும் பகுப்பாய்வு",
							content: ['எங்கள் தளத்தை நீங்கள் எவ்வாறு பயன்படுத்துகிறீர்கள், தளச் செயல்திறனைக் கண்காணிப்பது மற்றும் எங்கள் தளத்தின் செயல்திறன் மற்றும் உங்கள் அனுபவத்தைப் பற்றிய தகவல்களைச் சேகரிக்க <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">இந்தக் குக்கீகளைப் பயன்படுத்துகிறோம்</a>.']
						},
						Marketing:
						{
							headline: "சந்தைப்படுத்தல்",
							content: ['தொடர்புடைய விளம்பரங்களை வழங்கவும், எங்கள் விளம்பரப் பரப்புரைகளின் செயல்திறனை அளவிடவும் <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">இந்தக் குக்கீகளைப் பயன்படுத்துகிறோம்</a>. உங்கள் ஆர்வங்களின் விவரத்தை உருவாக்க மற்றும் பிற தளங்களில் தொடர்புடைய விளம்பரங்களை வழங்க எங்களுடைய மூன்றாம் நபர் விளம்பரத் துணை நிறுவனங்கள் இந்தக் குக்கீகளைப் பயன்படுத்தலாம்.']
						}
					},
					ThirdPartyAdvertisersText: "மூன்றாம் நபர் விளம்பரக் கூட்டாளர்கள்",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "மூன்றாம் நபர் விளம்பரக் கூட்டாளர்கள்:",
					EffectiveDate: "செயல்பாட்டில்: ஜனவரி 15, 2019",
					Body: ["உங்கள் உலாவி அல்லது சாதனத்தின் மூலம் குக்கீகளைக் கையாளுவதைத் தவிர்த்து, கீழேயும் உங்கள் குக்கீ அமைப்புகளை மாற்றலாம். நினைவில் கொள்ளுங்கள் எங்கள் தளத்தை இயக்க சில குக்கீகள் அவசியமானவை, இந்த அமைப்புகளைப் பயன்படுத்தி அவற்றைத் தடுக்க முடியாது."],
					Title: "குக்கீ அமைப்புகள்",
					COOKIE_POPUP: 'வணக்கம்! நாங்கள் இந்த வலைத்தளத்தில் மூன்றாம் நபர் குக்கீகள் உள்ளிட்ட, குக்கீகள் மற்றும் ஒத்த தொழில்நுட்பங்களை (“குக்கீகள்”) எங்கள் தளத்தை இயக்கவும், தளத்தில் உங்கள் அனுபவத்தை மேம்படுத்தவும், எங்கள் தளத்தின் செயல்திறனைக் கண்காணிக்கவும் மற்றும் விளம்பர நோக்கங்களுக்காகவும் பயன்படுத்துகிறோம். நாங்கள் குக்கீகளை எவ்வாறு பயன்படுத்துகிறோம் மற்றும் உங்கள் குக்கீ தேர்வுகள் பற்றிய மேலும் விவரங்களுக்கு, எங்கள் குக்கீ கொள்கைக்கு <a href="{COOKIE_POLICY_URL}" target="_blank">இங்கு</a> செல்லுங்கள்! கீழே "குக்கீகளை ஏற்றுக்கொள்கிறேன்" என்பதைக் கிளிக் செய்வதன் மூலம், நீங்கள் குக்கீகளைப் பயன்படுத்த எங்களுக்கு ஒப்புதல் அளிக்கிறீர்கள் (எங்கள் தளத்தை இயக்க தேவையான குக்கீகளைத் தவிர்த்து, அவற்றிற்கு ஒப்புதல் தேவையில்லை). கீழேயுள்ள “குக்கீ அமைப்புகள்” என்பதைக் கிளிக் செய்வதன் மூலம் எந்த நேரத்திலும் உங்கள் குக்கீ அமைப்புகளை மாற்றலாம் மற்றும் உங்கள் ஒப்புதலைத் திரும்பப் பெறலாம்.',
					COOKIE_POPUP_EU: 'வணக்கம்! நாங்கள் இந்த வலைத்தளத்தில் மூன்றாம் நபர் குக்கீகள் உள்ளிட்ட, குக்கீகள் மற்றும் ஒத்த தொழில்நுட்பங்களை (“குக்கீகள்”) எங்கள் தளத்தை இயக்கவும், தளத்தில் உங்கள் அனுபவத்தை மேம்படுத்தவும், எங்கள் தளத்தின் செயல்திறனைக் கண்காணிக்கவும் மற்றும் விளம்பர நோக்கங்களுக்காகவும் பயன்படுத்துகிறோம். நாங்கள் குக்கீகளை எவ்வாறு பயன்படுத்துகிறோம் மற்றும் உங்கள் குக்கீ தேர்வுகள் பற்றிய மேலும் விவரங்களுக்கு, எங்கள் குக்கீ கொள்கைக்கு <a href="{COOKIE_POLICY_URL}" target="_blank">இங்கு</a> செல்லுங்கள்! கீழே "குக்கீகளை ஏற்றுக்கொள்கிறேன்" என்பதைக் கிளிக் செய்வதன் மூலம், நீங்கள் குக்கீகளைப் பயன்படுத்த எங்களுக்கு ஒப்புதல் அளிக்கிறீர்கள் (எங்கள் தளத்தை இயக்க தேவையான குக்கீகளைத் தவிர்த்து, அவற்றிற்கு ஒப்புதல் தேவையில்லை). கீழேயுள்ள “குக்கீ அமைப்புகள்” என்பதைக் கிளிக் செய்வதன் மூலம் எந்த நேரத்திலும் உங்கள் குக்கீ அமைப்புகளை மாற்றலாம் மற்றும் உங்கள் ஒப்புதலைத் திரும்பப் பெறலாம்.',
					AgreeText: "குக்கீகளை ஏற்றுக்கொள்கிறேன்",
					SettingsText: "குக்கீ அமைப்புகள்",
					"Report Infringement": "மீறலைப் புகாரளியுங்கள்"
				},
				"te-in":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "లైవ్",
					Ads: "ప్రకటనలు",
					Company: "కంపెనీ",
					Home: "హోమ్",
					Blog: "బ్లాగ్",
					Jobs: "ఉద్యోగాలు",
					Careers: "కెరీర్‌లు",
					Press: "ప్రెస్",
					News: "న్యూస్",
					"Press Inquiries": "ప్రెస్ విచారణలు",
					Twitter: "Twitter",
					Language: "భాష",
					"Download Snapchat": "Snapchat డౌన్‌లోడ్ చేయండి",
					Download: "డౌన్‌లోడ్ చేయండి",
					Kit: "కిట్",
					Stories: "స్టోరీస్",
					"Lens Studio": "Lens స్టూడియో",
					Store: "స్ఠోర్",
					"Snapchat for iOS": "iOS కొరకు Snapchat",
					"Snapchat for Android": "Android కొరకు Snapchat",
					Community: "కమ్యూనిటీ",
					Support: "మద్దతు",
					"Community Guidelines": "కమ్యూనిటీ మార్గదర్శకాలు",
					"Safety Center": "సేఫ్టీ సెంటర్",
					Snapcodes: "Snap‌‌కోడ్‌‌లు",
					Geofilters: "జియో ఫిల్టర్‌లు",
					Create: "ఫిల్టర్‌స్ & Lenses",
					Map: "మ్యాప్",
					Advertising: "అడ్వర్టైజింగ్",
					"Buy Ads": "ప్రకటనలు కొనుగోలు చేయండి",
					"Advertising Policies": "అడ్వర్టైజింగ్ విధానాలు",
					"Political Ads Library": "రాజకీయ ప్రకటనల లైబ్రరీ",
					"Brand Guidelines": "బ్రాండ్ మార్గదర్శకాలు",
					"Promotions Rules": "ప్రమోషన్స్ రూల్స్",
					Legal: "లీగల్",
					"Terms of Service": "సేవా నిబంధనలు",
					Impressum: "Impressum",
					"Privacy Policy": "గోప్యతా విధానం",
					"Privacy Center": "గోప్యతా సెంటర్",
					"Cookie Policy": "కుకీ విధానం",
					"Memories Terms of Service": "మెమరీస్ యొక్క సేవానిబంధనలు",
					CUSTOM_CREATIVE_TOOLS_TOS: "కస్టమ్ క్రియేటివ్ టూల్స్ నిబంధనలు",
					COMMUNITY_TOS: "కమ్యూనిటీ జియోఫిల్టర్ నిబంధనలు",
					LENS_STUDIO_TOS: "Lens స్టూడియో నిబంధనలు",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "అవసరమైన కుకీలు",
							content: ['సైట్ ఆపరేట్ చేయడంలో సాయపడటానికి <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">మేం ఈ కుకీలను ఉపయోగిస్తాం</a>. ఈ కుకీలు అవసరం కాబట్టి మీరు వాటిని ఆఫ్ చేయలేరు.']
						},
						Preferences:
						{
							headline: "ప్రాధాన్యతలు",
							content: ['మీ ప్రాధాన్యతలను గుర్తుంచుకోవడానికి, మరియు మా వెబ్‌సైటులో మీ అనుభవాన్ని మెరుగుపరచడానికి <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">మేము ఈ కుకీలను ఉపయోగిస్తాం</a>.']
						},
						Performance:
						{
							headline: "పనితీరు & ఎనలిటిక్స్",
							content: ['మీరు మా సైట్‌ని ఏవిధంగా ఉపయోగిస్తున్నారు, సైట్ ప్రాధాన్యతలను మానిటర్ చేయడం, మరియు మా సైటు పనితీరు, మరియు మీ అనుభవం గురించిన సమాచారాన్ని సేకరించడానికి <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">మేము ఈ కుకీలను ఉపయోగిస్తాం</a>.']
						},
						Marketing:
						{
							headline: "మార్కెటింగ్",
							content: ['సంబంధిత ప్రకటనలు మీకు అందించడానికి మరియు మా ప్రకటన ప్రచారాల కొరకు సమర్థతను లెక్కించడానికి <a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">మేం ఈ కుకీలను ఉపయోగిస్తాం</a>. మా తృతీయపక్ష ఎడ్వర్టైజింగ్ భాగస్వాములు మీ ఆసక్తుల యొక్క ప్రొఫైల్ రూపొందించడానికి మరియు ఇతర సైట్లపై సంబంధిత ప్రకటనలు అందించడానికి ఈ కుకీలను ఉపయోగించుకోవచ్చు.']
						}
					},
					ThirdPartyAdvertisersText: "తృతీయపక్ష ప్రకటనల భాగస్వాములు",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "తృతీయపక్ష ప్రకటనల భాగస్వాములు:",
					EffectiveDate: "అమలులోకి వచ్చింది: జనవరి 15, 2019",
					Body: ["మీ బ్రౌజర్ లేదా పరికరం ద్వారా కుకీలు నిర్వహించడానికి అదనంగా, మీరు దిగువన మీ కుకీస్ సెట్టింగ్‌లను మార్చవచ్చు. మా సైట్ ను రన్ చేయడానికి కొన్ని కుకీలు అవసరం అవుతాయని మరియు ఈ సెట్టింగ్‌లు ఉపయోగించి వాటిని బ్లాక్ చేయలేరు అనే విషయాన్ని దయచేసి గమనించండి."],
					Title: "కుకీ సెట్టింగ్‌లు",
					COOKIE_POPUP: 'హాయ్! మా సైట్ లో ఆపరేట్ చేయడానికి మరియు మీ అనుభవాన్ని మెరుగుపరచడాినకి, మా సైటు పనితీరును మానిటర్ చేయడానికి, మరియ మీ అడ్వర్టైజింగ్ ప్రయోజనాలతో సహా, మేం కుకీలు మరియు ఇదేవిధమైన టెక్నాలజీలను (‘‘కుకీలు’’) ఉపయోగిస్తాం. మేం కుకీలను ఎలా ఉపయోగిస్తాం మరియు మీ కుకీ ఎంపికలపై మరింత సమాచారం కొరకు, మా కుకీ పాలసీ కొరకు <a href="{COOKIE_POLICY_URL}" target="_blank">ఇక్కడ</a> కు వెళ్లండి! దిగువ ‘‘కుకీలు ఆమోదించండి’’ మీద క్లిక్ చేయడం ద్వారా, కుకీలు ఉపయోగించేందుకు మీరు మాకు సమ్మతి ఇస్తున్నారు (మా సైట్‌ ను రన్ చేయడానికి అవసరమైన కుకీల కొరకు సమ్మతి అవసరం లేకపోవడం మినహా). దిగువ ‘‘కుకీ సెట్టింగ్లు’’ మీద క్లిక్ చేయడం ద్వారా మీ కుకీస్ సెట్టింగ్లను మీరు మార్చవచ్చు, మరియు ఎప్పుడైనా మీ సమ్మతిని ఉపసంహరించుకోవచ్చు.',
					COOKIE_POPUP_EU: 'హాయ్! మా సైట్ లో ఆపరేట్ చేయడానికి మరియు మీ అనుభవాన్ని మెరుగుపరచడాినకి, మా సైటు పనితీరును మానిటర్ చేయడానికి, మరియ మీ అడ్వర్టైజింగ్ ప్రయోజనాలతో సహా, మేం కుకీలు మరియు ఇదేవిధమైన టెక్నాలజీలను (‘‘కుకీలు’’) ఉపయోగిస్తాం. మేం కుకీలను ఎలా ఉపయోగిస్తాం మరియు మీ కుకీ ఎంపికలపై మరింత సమాచారం కొరకు, మా కుకీ పాలసీ కొరకు <a href="{COOKIE_POLICY_URL}" target="_blank">ఇక్కడ</a> కు వెళ్లండి! దిగువ ‘‘కుకీలు ఆమోదించండి’’ మీద క్లిక్ చేయడం ద్వారా, కుకీలు ఉపయోగించేందుకు మీరు మాకు సమ్మతి ఇస్తున్నారు (మా సైట్‌ ను రన్ చేయడానికి అవసరమైన కుకీల కొరకు సమ్మతి అవసరం లేకపోవడం మినహా). దిగువ ‘‘కుకీ సెట్టింగ్లు’’ మీద క్లిక్ చేయడం ద్వారా మీ కుకీస్ సెట్టింగ్లను మీరు మార్చవచ్చు, మరియు ఎప్పుడైనా మీ సమ్మతిని ఉపసంహరించుకోవచ్చు.',
					AgreeText: "కుకీలను ఆమోదించండి",
					SettingsText: "కుకీ సెట్టింగ్‌లు",
					"Report Infringement": "ఉల్లంఘన నివేదించండి"
				},
				"th-th":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "ไลฟ์",
					Ads: "โฆษณา",
					Company: "บริษัท",
					Home: "หน้าแรก",
					Blog: "บล็อก",
					Jobs: "งาน",
					Careers: "ร่วมงานกับเรา",
					Press: "ประชาสัมพันธ์",
					News: "ข่าวสาร",
					"Press Inquiries": "ข้อซักถามของสื่อมวลชน",
					Twitter: "Twitter",
					Language: "ภาษา",
					"Download Snapchat": "ดาวน์โหลด Snapchat",
					Download: "ดาวน์โหลด",
					Kit: "ชุด",
					Stories: "เรื่องราว",
					"Lens Studio": "Lens Studio",
					Store: "ร้านค้า",
					"Snapchat for iOS": "Snapchat สำหรับ iOS",
					"Snapchat for Android": "Snapchat สำหรับ Android",
					Community: "ชุมชน",
					Support: "การสนับสนุน",
					"Community Guidelines": "คู่มือของชุมชน",
					"Safety Center": "ศูนย์ความปลอดภัย",
					Snapcodes: "Snapcode",
					Geofilters: "ตัวกรองพื้นที่",
					Create: "ตัวกรองและ Lenses",
					Map: "แผนที่",
					Advertising: "การโฆษณา",
					"Buy Ads": "ซื้อโฆษณา",
					"Advertising Policies": "นโยบายการโฆษณา",
					"Political Ads Library": "คลังโฆษณาการเมือง",
					"Brand Guidelines": "คู่มือการใช้แบรนด์",
					"Promotions Rules": "กฎระเบียบด้านการส่งเสริมการขาย",
					Legal: "กฎหมาย",
					"Terms of Service": "เงื่อนไขการให้บริการ",
					Impressum: "Impressum",
					"Privacy Policy": "นโยบายความเป็นส่วนตัว",
					"Privacy Center": "ศูนย์ความเป็นส่วนตัว",
					"Cookie Policy": "นโยบายคุกกี้",
					"Memories Terms of Service": "เงื่อนไขการให้บริการ Memories",
					CUSTOM_CREATIVE_TOOLS_TOS: "ข้อกำหนดการใช้เครื่องมือสร้างสรรค์แบบกำหนดเอง",
					COMMUNITY_TOS: "ข้อกำหนดของ Geofilter ของชุมชน",
					LENS_STUDIO_TOS: "ข้อกำหนดของ Lens Studio",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "คุกกี้ที่จำเป็น",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">เราใช้คุกกี้เหล่านี้</a> เพื่อช่วยการปฏิบัติการของเว็บไซต์ เพราะคุกกี้เหล่านี้มีความจำเป็น คุณไม่สามารถปิดคุกกี้ได้']
						},
						Preferences:
						{
							headline: "การกำหนดลักษณะ",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">เราใช้คุกกี้เหล่านี้</a> เพื่อจดจำการกำหนดลักษณะของคุณ และปรับปรุงประสบการณ์ของคุณในการใช้งานเว็บไซต์ของเรา']
						},
						Performance:
						{
							headline: "การปฏิบัติการและการวิเคราะห์",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">เราใช้คุกกี้เหล่านี้</a> เพื่อรวบรวมข้อมูลเกี่ยวกับวิธีการที่คุณใช้งานเว็บไซต์ของเรา ตรวจสอบประสิทธิภาพของเว็บไซต์ และปรับปรุงประสิทธิภาพของเว็บไซต์และประสบการณ์ของคุณ ']
						},
						Marketing:
						{
							headline: "การตลาด",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">เราใช้คุกกี้เหล่านี้</a> เพื่อส่งมอบการโฆษณาที่เกี่ยวข้องและวัดประสิทธิภาพของแคมเปญการโฆษณาของเรา พันธมิตรด้านโฆษณาบุคคลที่สามของเราอาจใช้คุกกี้เหล่านี้เพื่อสร้างโปรไฟล์ของสิ่งที่คุณสนใจ และแสดงโฆษณาที่เกี่ยวข้องในเว็บไซต์อื่น ๆ']
						}
					},
					ThirdPartyAdvertisersText: "พันธมิตรด้านโฆษณาบุคคลที่สาม",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a> ', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a> '],
					ThirdPartyAdvertisersPopupText: "พันธมิตรด้านโฆษณาบุคคลที่สาม:",
					EffectiveDate: "วันที่มีผลบังคับใช้: 15 มกราคม 2562",
					Body: ["นอกเหนือจากการจัดการคุกกี้ผ่านทางบราวเซอร์หรืออุปกรณ์ของคุณแล้ว คุณสามารถเปลี่ยนการตั้งค่าคุกกี้ของคุณด้านล่าง โปรดทราบว่าคุกกี้บางอย่างจำเป็นต้องทำงานในเว็บไซต์ของเราและไม่สามารถบล็อกการใช้งานการตั้งค่าเหล่านี้"],
					Title: "การตั้งค่าคุกกี้",
					COOKIE_POPUP: 'สวัสดี! เราใช้คุกกี้และเทคโนโลยีที่คล้ายกัน (“คุกกี้”) รวมถึงคุกกี้บุคคลที่สาม บนเว็บไซต์นี้เพื่อช่วยปฏิบัติการและปรับปรุงประสบการณ์ของคุณบนเว็บไซต์ของเรา ตรวจสอบผลการดำเนินการของเรา และเพื่อวัตถุประสงค์ในการโฆษณา สำหรับข้อมูลเพิ่มเติมเกี่ยวกับวิธีการใช้งานคุกกี้ของเราและตัวเลือกคุกกี้ของคุณ ให้ไป <a href="{COOKIE_POLICY_URL}" target="_blank">ที่นี่</a> สำหรับนโยบายคุกกี้ของเรา! โดยการคลิก "ยอมรับคุกกี้" ด้านล่าง คุณได้ให้คำยินยอมแก่เราในการใช้คุกกี้ (ยกเว้นเนื้อหาที่ไม่จำเป็นต้องมีคุกกี้ทำงานในเว็บไซต์ของเรา) คุณสามารถเปลี่ยนการตั้งค่าคุกกี้ของคุณ และถอนคำยินยอมของคุณได้ทุกเวลา โดยการคลิกที่ “การตั้งค่าคุกกี้” ด้านล่าง',
					COOKIE_POPUP_EU: 'สวัสดี! เราใช้คุกกี้และเทคโนโลยีที่คล้ายกัน (“คุกกี้”) รวมถึงคุกกี้บุคคลที่สาม บนเว็บไซต์นี้เพื่อช่วยปฏิบัติการและปรับปรุงประสบการณ์ของคุณบนเว็บไซต์ของเรา ตรวจสอบผลการดำเนินการของเรา และเพื่อวัตถุประสงค์ในการโฆษณา สำหรับข้อมูลเพิ่มเติมเกี่ยวกับวิธีการใช้งานคุกกี้ของเราและตัวเลือกคุกกี้ของคุณ ให้ไป <a href="{COOKIE_POLICY_URL}" target="_blank">ที่นี่</a> สำหรับนโยบายคุกกี้ของเรา! โดยการคลิก "ยอมรับคุกกี้" ด้านล่าง คุณได้ให้คำยินยอมแก่เราในการใช้คุกกี้ (ยกเว้นเนื้อหาที่ไม่จำเป็นต้องมีคุกกี้ทำงานในเว็บไซต์ของเรา) คุณสามารถเปลี่ยนการตั้งค่าคุกกี้ของคุณ และถอนคำยินยอมของคุณได้ทุกเวลา โดยการคลิกที่ “การตั้งค่าคุกกี้” ด้านล่าง',
					AgreeText: "ยอมรับคุกกี้",
					SettingsText: "การตั้งค่าคุกกี้",
					"Report Infringement": "รายงานการละเมิด"
				},
				"tr-tr":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Canlı",
					Ads: "Reklamlar",
					Company: "Şirket",
					Home: "Ana Sayfa",
					Blog: "Blog",
					Jobs: "İş Fırsatları",
					Careers: "Kariyer",
					Press: "Basın",
					News: "Haberler",
					"Press Inquiries": "Basın Talepleri",
					Twitter: "Twitter",
					Language: "Dil",
					"Download Snapchat": "Snapchat'i İndir",
					Download: "İndir",
					Kit: "Kit",
					Stories: "Hikayeler",
					"Lens Studio": "Lens Studio",
					Store: "Mağaza",
					"Snapchat for iOS": "iOS için Snapchat",
					"Snapchat for Android": "Android için Snapchat",
					Community: "Topluluk",
					Support: "Destek",
					"Community Guidelines": "Topluluk İlkeleri",
					"Safety Center": "Güvenlik Merkezi",
					Snapcodes: "Snapkodlar",
					Geofilters: "Geofiltreler",
					Create: "Filtreler ve Lensler",
					Map: "Harita",
					Advertising: "Reklam",
					"Buy Ads": "Reklam Satın Al",
					"Advertising Policies": "Reklam Politikaları",
					"Political Ads Library": "Politik Reklamlar Kütüphanesi",
					"Brand Guidelines": "Marka Kuralları",
					"Promotions Rules": "Tanıtım Kuralları",
					Legal: "Yasal",
					"Terms of Service": "Hizmet Şartları",
					Impressum: "Künye",
					"Privacy Policy": "Gizlilik Politikası",
					"Privacy Center": "Gizlilik Merkezi",
					"Cookie Policy": "Çerez Politikası",
					"Memories Terms of Service": "Anılar Kullanım Şartları",
					CUSTOM_CREATIVE_TOOLS_TOS: "Özel Yaratıcı Araçlara ait Şartlar",
					COMMUNITY_TOS: "Topluluk Geofilter'ları Koşulları",
					LENS_STUDIO_TOS: "Lens Studio Koşulları",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Gerekli çerezler",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Bu çerezleri,</a> siteyi çalıştırmamıza yardımcı olması için kullanıyoruz. Bu çerezler gerekli olduğundan bunları devre dışı bırakamazsın.']
						},
						Preferences:
						{
							headline: "Tercihler",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Bu çerezleri,</a> tercihlerini hatırlamak ve web sitemizdeki deneyimini geliştirmek için kullanıyoruz.']
						},
						Performance:
						{
							headline: "Performans ve Analitik",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Bu çerezleri,</a> sitemizi nasıl kullandığın hakkında bilgi toplamak, site performansını izlemek, ayrıca sitemizin performansını ve senin deneyimini geliştirmek için kullanıyoruz.']
						},
						Marketing:
						{
							headline: "Pazarlama",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Bu çerezleri,</a> sana ilgili reklamlar sunmak ve reklam kampanyalarımızın etkinliğini ölçmek için kullanıyoruz. Üçüncü taraf reklam ortaklarımız, ilgi alanlarının profilini oluşturmak ve diğer sitelerde alakalı reklamlar göstermek için bu çerezleri kullanabilir.']
						}
					},
					ThirdPartyAdvertisersText: "üçüncü taraf reklam ortakları",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Üçüncü taraf reklam ortakları:",
					EffectiveDate: "Yürürlük tarihi: 15 Ocak 2019",
					Body: ["Çerezleri tarayıcın veya cihazın üzerinden yönetmeye ek olarak, çerez ayarlarını aşağıdan da değiştirebilirsin. Sitemizi işleyişi için bazı çerezlerin gerekli olduğunu ve bu ayarları kullanarak engellenemediğini lütfen unutma."],
					Title: "Çerez Ayarları",
					COOKIE_POPUP: 'Merhaba! Sitemizi çalıştırmamıza, sitemizdeki deneyimini geliştirmemize ve site performansımızı izlememize yardımcı olması için, ayrıca reklam amaçlı olarak bu web sitesinde, üçüncü taraf çerezleri de dahil olmak üzere, çerezler ve benzer teknolojiler (“çerezler”) kullanıyoruz. Çerezleri nasıl kullandığımız ve senin çerez tercihlerin hakkında daha fazla bilgi için <a href="{COOKIE_POLICY_URL}" target="_blank">buradaki</a> çerez politikamıza bakabilirsin! Aşağıdan "Çerezleri Kabul Et" seçeneğine tıkladığında, çerez kullanmamıza izin vermiş olursun (ancak sitemizi çalıştırmamız için gerekli olan çerezler söz konusuysa izin gerekmez). Aşağıdan “Çerez Ayarları” seçeneğine tıklayarak dilediğin zaman çerez ayarlarını değiştirebilir ve verdiğin izni geri alabilirsin.',
					COOKIE_POPUP_EU: 'Merhaba! Sitemizi çalıştırmamıza, sitemizdeki deneyimini geliştirmemize ve site performansımızı izlememize yardımcı olması için, ayrıca reklam amaçlı olarak bu web sitesinde, üçüncü taraf çerezleri de dahil olmak üzere, çerezler ve benzer teknolojiler (“çerezler”) kullanıyoruz. Çerezleri nasıl kullandığımız ve senin çerez tercihlerin hakkında daha fazla bilgi için <a href="{COOKIE_POLICY_URL}" target="_blank">buradaki</a> çerez politikamıza bakabilirsin! Aşağıdan "Çerezleri Kabul Et" seçeneğine tıkladığında, çerez kullanmamıza izin vermiş olursun (ancak sitemizi çalıştırmamız için gerekli olan çerezler söz konusuysa izin gerekmez). Aşağıdan “Çerez Ayarları” seçeneğine tıklayarak dilediğin zaman çerez ayarlarını değiştirebilir ve verdiğin izni geri alabilirsin.',
					AgreeText: "Çerezleri Kabul Et",
					SettingsText: "Çerez Ayarları",
					"Report Infringement": "İhlal Bildir"
				},
				"ur-PK":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "چشمے",
					Live: "براہ راست",
					Ads: "اشتہارات",
					Company: "کمپنی",
					Home: "ہوم",
					Blog: "بلاگ",
					Jobs: "نوکریاں",
					Careers: "کیریئرز",
					Press: "پریس",
					News: "خبریں",
					"Press Inquiries": "پریس استفسارات",
					Twitter: "Twitter",
					Language: "زبان",
					"Download Snapchat": "Snapchat ڈاؤن لوڈ کریں",
					Download: "ڈاؤن لوڈ کریں",
					Kit: "کِٹ",
					Stories: "کہانیاں",
					"Lens Studio": "Lens سٹوڈیو",
					Store: "Store",
					"Snapchat for iOS": "Snapchat برائے iOS",
					"Snapchat for Android": "Snapchat برائے اینڈرائیڈ",
					Community: "کمیونٹی",
					Support: "معاونت",
					"Community Guidelines": "کمیونٹی رہنماء اصول",
					"Safety Center": "حفاظتی مرکز",
					Snapcodes: "Snapcodes",
					Geofilters: "علاقائی فلٹرز",
					Create: "فلٹرز اور Lenses",
					Map: "میپ",
					Advertising: "تشہیر",
					"Buy Ads": "اشتہارات خریدیں",
					"Advertising Policies": "اشتہاری پالیسیاں",
					"Political Ads Library": "سیاسی اشتہارات کی لائبریری",
					"Brand Guidelines": "برانڈ کے رہنما اصول",
					"Promotions Rules": "تشہیری قواعد",
					Legal: "قانونی",
					"Terms of Service": "سروس کی شرائط",
					Impressum: "مختار نامہ",
					"Privacy Policy": "رازداری کی پالیسی",
					"Privacy Center": "رازداری سینٹر",
					"Cookie Policy": "کوکیز کی پالیسی",
					"Memories Terms of Service": "یادوں کی سروس کی شرائط",
					CUSTOM_CREATIVE_TOOLS_TOS: "من پسند تخلیقی ٹولز کی سروس",
					COMMUNITY_TOS: "کمیونٹی کے Geofilter کی شرائط",
					LENS_STUDIO_TOS: "Lens سٹوڈیو کی شرائط",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "ضروری کوکیز",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">ہم ان کوکیز کا استعمال</a> سائٹ کو چلانے میں مدد کے لیے کرتے ہیں۔ چونکہ یہ کوکیز ضروری ہیں، اس لیے آپ انہیں آف نہیں کر سکتے۔']
						},
						Preferences:
						{
							headline: "ترجیحات",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">ہم ان کوکیز کا استعمال</a> آپ کی ترجیحات یاد رکھنے اور اپنی ویب سائٹ پر آپ کا تجربہ بہتر بنانے کے لیے کرتے ہیں۔']
						},
						Performance:
						{
							headline: "کاکردگی اور تجزیے",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">ہم ان کوکیز کا استعمال</a> آپ ہماری سائٹ جس طرح استعمال کرتے ہیں، سائٹ کی کارکردگی کی نگرانی کرنے، اور اپنی سائٹ کی کارکردگی اور آپ کے تجربے کو بہتر بنانے کے لیے کرتے ہیں۔']
						},
						Marketing:
						{
							headline: "مارکیٹنگ",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">ہم ان کوکیز کا استعمال</a> متعلقہ تشہیر فراہم کرنے اور اپنی تشہیری مہمات کی اثرپذیری کی پیمائش کرنے کے لیے کرتے ہیں۔ ہمارے فریق ثالث تشہیری شراکت دار آپ کی دلچسپیوں کی ایک پروفائل مرتب کرنے اور دیگر سائٹس پر متعلقہ اشتہارات فراہم کرنے کے لیے ان کوکیز کو استعمال کرسکتے ہیں۔']
						}
					},
					ThirdPartyAdvertisersText: "فریقِ ثالث تشہیری شراکت دار",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "فریقِ ثالث کے تشہیری شراکت دار:",
					EffectiveDate: "مؤثر از: January 15, 2019",
					Body: ["آپ کے براؤزر یا ڈیوائس کے ذریعے کوکیز کا انتظام کرنے کے ساتھ ساتھ، آپ ذیل میں اپنی کوکیز کی ترتیبات تبدیل کر سکتے ہیں۔ براہِ کرم نوٹ کریں کہ بعض کوکیز ہماری سائٹ چلانے کیلئے ناگزیر ہوتے ہیں اور ان ترتیبات کے ذریعے بلاک نہیں کیے جا سکتے۔"],
					Title: "کوکیز کی ترتیبات",
					COOKIE_POPUP: 'ہائے! اس ویب سائٹ پر ہم کوکیز اور اسی طرح کی دیگر ٹیکنالوجیز ("کوکیز")، بشمول فریق ثالث کی کوکیز کا استعمال اپنی سائٹ کو چلانے میں مدد اور اس پر آپ کے تجربہ کو بہتر بنانے کے لیے، اپنی سائٹ کی کارکردگی کی نگرانی کے لیے اور تشہیری مقاصد کے لیے استعمال کرتے ہیں۔ ہم کوکیز کیسے استعمال کرتے ہیں، اس بارے میں، اور آپ کے کوکیز کے اختیارات کے بارے میں مزید معلومات کے لیے کیلئے ہماری کوکیز کی پالیسی پر <a href="{COOKIE_POLICY_URL}" target="_blank">یہاں</a> جائیں! ذیل میں "کوکیز قبول کریں" پر کلک کر کے آپ ہمیں کوکیز چلانے کی رضامندی دے رہے ہیں (سوائے ان کوکیز کے جن کا چلانا ضروری ہے اور ان کے لیے رضامندی مطلوب نہیں ہے)۔ آپ کسی بھی وقت ذیل میں "کوکی کی سیٹنگز" پر کلک کر کے اپنی کوکی کی سیٹنگز تبدیل کر سکتے اور اپنی رضامندی واپس لے سکتے ہیں۔',
					COOKIE_POPUP_EU: 'ہائے! اس ویب سائٹ پر ہم کوکیز اور اسی طرح کی دیگر ٹیکنالوجیز ("کوکیز")، بشمول فریق ثالث کی کوکیز کا استعمال اپنی سائٹ کو چلانے میں مدد اور اس پر آپ کے تجربہ کو بہتر بنانے کے لیے، اپنی سائٹ کی کارکردگی کی نگرانی کے لیے اور تشہیری مقاصد کے لیے استعمال کرتے ہیں۔ ہم کوکیز کیسے استعمال کرتے ہیں، اس بارے میں، اور آپ کے کوکیز کے اختیارات کے بارے میں مزید معلومات کے لیے کیلئے ہماری کوکیز کی پالیسی پر <a href="{COOKIE_POLICY_URL}" target="_blank">یہاں</a> جائیں! ذیل میں "کوکیز قبول کریں" پر کلک کر کے آپ ہمیں کوکیز چلانے کی رضامندی دے رہے ہیں (سوائے ان کوکیز کے جن کا چلانا ضروری ہے اور ان کے لیے رضامندی مطلوب نہیں ہے)۔ آپ کسی بھی وقت ذیل میں "کوکی کی سیٹنگز" پر کلک کر کے اپنی کوکی کی سیٹنگز تبدیل کر سکتے اور اپنی رضامندی واپس لے سکتے ہیں۔',
					AgreeText: "کوکیز قبول کریں",
					SettingsText: "کوکیز کی ترتیبات",
					"Report Infringement": "خلاف ورزی کی اطلاع دیں"
				},
				"vi-VN":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "Trực Tiếp",
					Ads: "Quảng Cáo",
					Company: "Công Ty",
					Home: "Nhà",
					Blog: "Blog",
					Jobs: "Công Việc",
					Careers: "Nghề nghiệp",
					Press: "Báo Chí",
					News: "Tin tức",
					"Press Inquiries": "Yêu Cầu Báo Chí",
					Twitter: "Twitter",
					Language: "Ngôn Ngữ",
					"Download Snapchat": "Tải Snapchat",
					Download: "Tải Về",
					Kit: "Dụng Cụ",
					Stories: "Story",
					"Lens Studio": "Xưởng Lens",
					Store: "Cửa Hàng",
					"Snapchat for iOS": "Snpachat cho iOs",
					"Snapchat for Android": "Snapchat cho Android",
					Community: "Cộng Đồng",
					Support: "Hỗ Trợ",
					"Community Guidelines": "Hướng Dẫn Cộng Đồng",
					"Safety Center": "Trung Tâm Bảo Mật",
					Snapcodes: "Snapcode",
					Geofilters: "Geofilter",
					Create: "Bộ Lọc & Lenses",
					Map: "Bản Đồ",
					Advertising: "Quảng Cáo",
					"Buy Ads": "Mua Quảng Cáo",
					"Advertising Policies": "Chính Sách Quảng Cáo",
					"Political Ads Library": "Thư Viện Quảng Cáo Chính Trị",
					"Brand Guidelines": "Cẩm Nang Thương Hiệu",
					"Promotions Rules": "Quy Định Khuyến Mãi",
					Legal: "Hợp Pháp",
					"Terms of Service": "Điều Khoản Dịch Vụ",
					Impressum: "Ấn tượng",
					"Privacy Policy": "Chính Sách Bảo Mật",
					"Privacy Center": "Trung Tâm Bảo Mật",
					"Cookie Policy": "Chính Sách Cookie",
					"Memories Terms of Service": "Điều Khoản Dịch Vụ Kỷ Niệm",
					CUSTOM_CREATIVE_TOOLS_TOS: "Điều KHoản Dụng Cụ Sáng Tạo Tùy Chỉnh",
					COMMUNITY_TOS: "Điều Khoản Geofilter Cộng Đồng",
					LENS_STUDIO_TOS: "Điều Khoản Xưởng Lens",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "Cookie cần thiết",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">Chúng tôi sử dụng những cookie này</a> để hỗ trợ việc vận hành trang web. Những cookie này rất cần thiết nên bạn không được tắt.']
						},
						Preferences:
						{
							headline: "Tùy Chọn",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">Chúng tôi sử dụng những cookie này</a> để ghi nhớ tùy chọn của bạn và cải thiện trải nghiệm của bạn trên trang web của chúng tôi.']
						},
						Performance:
						{
							headline: "Hiệu Suất & Phân Tích",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">Chúng tôi sử dụng những cookie này</a> để thu thập thông tin về cách bạn sử dụng trang web của chúng tôi, theo dõi hiệu suất trang web và cải thiện hiệu suất trang web cũng như trải nghiệm của bạn.']
						},
						Marketing:
						{
							headline: "Tiếp Thị",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">Chúng tôi sử dụng những cookie này</a> để phân phối quảng cáo phù hợp và đo lường hiệu quả các chiến dịch quảng cáo của chúng tôi. Các đối tác quảng cáo bên thứ ba có thể sử dụng những cookie này để tạo hồ sơ về sở thích của bạn và phân phối quảng cáo có liên quan trên các trang web khác.']
						}
					},
					ThirdPartyAdvertisersText: "các đối tác quảng cáo bên thứ ba",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "Các đối tác quảng cáo bên thứ ba:",
					EffectiveDate: "Có hiệu lực: ngày 15 tháng 1 năm 2019",
					Body: ["Ngoài việc quản lý cookie thông qua trình duyệt hoặc thiết bị của bạn, bạn có thể thay đổi cài đặt cookie bên dưới. Xin lưu ý rằng một số cookie nhất định là cần thiết để chạy trang web của chúng tôi và không thể bị chặn bằng cách sử dụng các cài đặt này."],
					Title: "Cài Đặt Cookie",
					COOKIE_POPUP: 'Xin chào! Chúng tôi sử dụng cookie và công nghệ tương tự (“cookie”), bao gồm cookie của bên thứ ba, trên trang web này để giúp vận hành và cải thiện trải nghiệm của bạn trên trang web của chúng tôi, theo dõi hiệu suất trang web và cho mục đích quảng cáo. Để biết thêm thông tin về cách chúng tôi sử dụng cookie và các lựa chọn cookie của bạn, hãy truy cập chính sách cookie của chúng tôi <a href="{COOKIE_POLICY_URL}" target="_blank">tại đây</a>! Khi nhấp vào mục "Chấp Nhận Cookie" bên dưới, bạn sẽ đồng ý cho chúng tôi sử dụng cookie (trừ khi việc đồng ý cho các cookie cần thiết để chạy trang web là không bắt buộc). Bạn có thể thay đổi cài đặt cookie và rút lại sự đồng ý bất kỳ lúc nào bằng cách nhấp vào mục “Cài Đặt Cookie” bên dưới.',
					COOKIE_POPUP_EU: 'Xin chào! Chúng tôi sử dụng cookie và công nghệ tương tự (“cookie”), bao gồm cookie của bên thứ ba, trên trang web này để giúp vận hành và cải thiện trải nghiệm của bạn trên trang web của chúng tôi, theo dõi hiệu suất trang web và cho mục đích quảng cáo. Để biết thêm thông tin về cách chúng tôi sử dụng cookie và các lựa chọn cookie của bạn, hãy truy cập chính sách cookie của chúng tôi <a href="{COOKIE_POLICY_URL}" target="_blank">tại đây</a>! Khi nhấp vào mục "Chấp Nhận Cookie" bên dưới, bạn sẽ đồng ý cho chúng tôi sử dụng cookie (trừ khi việc đồng ý cho các cookie cần thiết để chạy trang web là không bắt buộc). Bạn có thể thay đổi cài đặt cookie và rút lại sự đồng ý bất kỳ lúc nào bằng cách nhấp vào mục “Cài Đặt Cookie” bên dưới.',
					AgreeText: "Chấp Nhận Cookie",
					SettingsText: "Cài Đặt Cookie",
					"Report Infringement": "Báo Cáo Vi Phạm"
				},
				"zh-cn":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "直播",
					Ads: "广告",
					Company: "公司",
					Home: "主页",
					Blog: "博客",
					Jobs: "招贤纳才",
					Careers: "事业",
					Press: "新闻",
					News: "资讯",
					"Press Inquiries": "新闻咨询",
					Twitter: "Twitter",
					Language: "语言",
					"Download Snapchat": "下载 Snapchat",
					Download: "下载",
					Kit: "工具包",
					Stories: "故事",
					"Lens Studio": "Lens Studio",
					Store: "商店",
					"Snapchat for iOS": "iOS 版 Snapchat",
					"Snapchat for Android": "Android 版 Snapchat",
					Community: "社区",
					Support: "支持",
					"Community Guidelines": "社群指南",
					"Safety Center": "安全中心",
					Snapcodes: "Snapcode",
					Geofilters: "Geofilter",
					Create: "滤镜和 Lenses",
					Map: "地图",
					Advertising: "广告",
					"Buy Ads": "购买广告",
					"Advertising Policies": "广告政策",
					"Political Ads Library": "政治广告库",
					"Brand Guidelines": "品牌形象指引",
					"Promotions Rules": "推广规则",
					Legal: "法律",
					"Terms of Service": "使用条款",
					Impressum: "公司信息",
					"Privacy Policy": "隐私政策",
					"Privacy Center": "隐私权中心",
					"Cookie Policy": "Cookie 政策",
					"Memories Terms of Service": "回忆功能服务条款",
					CUSTOM_CREATIVE_TOOLS_TOS: "客制创作工具条款",
					COMMUNITY_TOS: "社区 Geofilter 条款",
					LENS_STUDIO_TOS: "Lens Studio 条款",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "必需的 Cookie",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">我方会使用这些 Cookie</a> 来帮助网站运营。因为这些是必需的 Cookie，所以你无法将其关闭。']
						},
						Preferences:
						{
							headline: "偏好",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">我方使用这些 Cookie</a> 来记住你的偏好并改善你在我们网站上的体验。']
						},
						Performance:
						{
							headline: "性能与分析",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">我方使用这些 Cookie</a> 来收集有关你如何使用我们网站的信息，监控网站性能，以及改进我们的网站性能和你的体验。']
						},
						Marketing:
						{
							headline: "市场营销",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">我方使用这些 Cookie</a> 来推送相关广告并衡量我们广告活动的效果。我方的第三方广告合作伙伴可能使用这些 Cookie 来提供你感兴趣的信息，并在其他网站上投放相关广告。']
						}
					},
					ThirdPartyAdvertisersText: "第三方广告合作伙伴",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">领英</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "第三方广告合作伙伴：",
					EffectiveDate: "生效日期：2019 年 1 月 15 日",
					Body: ["除了通过浏览器或设备管理 Cookie 之外，你还可以在下方更改 Cookie 设置。请注意，某些 Cookie 是我们网站运行所必需的，无法通过这些设置来阻止。"],
					Title: "Cookie 设置",
					COOKIE_POPUP: '嗨！我方会在此网站上使用∙Cookie∙和类似技术（以下统称“Cookie”）包括第三方 Cookie，来帮助网站运营、改善你在我们网站上的体验来、改进我们的网站性能，以及用于广告目的。有关我方如何使用 Cookie 以及你的 Cookie 设置选择的信息，请点击<a href="{COOKIE_POLICY_URL}" target="_blank">此处</a>了解我们的 Cookie 政策！点击下方“接受∙ Cookie” ，即表示你同意我方使用 Cookie（如果是运营我方网站必需的 Cookie，则无需经过你的同意）。你可以随时点击下方的“Cookie 设置”更改 Cookie 设置，以及撤回同意。',
					COOKIE_POPUP_EU: '嗨！我方会在此网站上使用∙Cookie∙和类似技术（以下统称“Cookie”）包括第三方 Cookie，来帮助网站运营、改善你在我们网站上的体验来、改进我们的网站性能，以及用于广告目的。有关我方如何使用 Cookie 以及你的 Cookie 设置选择的信息，请点击<a href="{COOKIE_POLICY_URL}" target="_blank">此处</a>了解我们的 Cookie 政策！点击下方“接受∙ Cookie” ，即表示你同意我方使用 Cookie（如果是运营我方网站必需的 Cookie，则无需经过你的同意）。你可以随时点击下方的“Cookie 设置”更改 Cookie 设置，以及撤回同意。',
					AgreeText: "接受 Cookie",
					SettingsText: "Cookie 设置",
					"Report Infringement": "举报侵权"
				},
				"zh-tw":
				{
					"Snap Inc.": "Snap Inc.",
					Snapchat: "Snapchat",
					Spectacles: "Spectacles",
					Live: "即時",
					Ads: "廣告",
					Company: "公司",
					Home: "首頁",
					Blog: "部落格",
					Jobs: "工作機會",
					Careers: "事業",
					Press: "媒體",
					News: "新聞",
					"Press Inquiries": "新聞諮詢",
					Twitter: "Twitter",
					Language: "語言",
					"Download Snapchat": "下載 Snapchat",
					Download: "下載",
					Kit: "工具組",
					Stories: "故事",
					"Lens Studio": "Lens 工作室",
					Store: "商店",
					"Snapchat for iOS": "iOS 版 Snapchat",
					"Snapchat for Android": "Android 版 Snapchat",
					Community: "社群",
					Support: "支援",
					"Community Guidelines": "社群指南",
					"Safety Center": "安全中心",
					Snapcodes: "Snapcode",
					Geofilters: "Geofilter",
					Create: "濾鏡和 Lenses",
					Map: "地圖",
					Advertising: "廣告",
					"Buy Ads": "購買廣告",
					"Advertising Policies": "廣告政策",
					"Political Ads Library": "政治廣告庫",
					"Brand Guidelines": "品牌規範",
					"Promotions Rules": "推廣規則",
					Legal: "法律",
					"Terms of Service": "服務條款",
					Impressum: "版本說明",
					"Privacy Policy": "隱私政策",
					"Privacy Center": "隱私權中心",
					"Cookie Policy": "Cookie 政策",
					"Memories Terms of Service": "回憶服務條款",
					CUSTOM_CREATIVE_TOOLS_TOS: "客製創作工具條款",
					COMMUNITY_TOS: "社群地理濾鏡條款",
					LENS_STUDIO_TOS: "Lens Studio 條款",
					COOKIE_SETTINGS_SECTIONS:
					{
						Necessary:
						{
							headline: "必需 Cookie",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Necessary">我們透過使用這些 Cookie</a> 幫助網站運作。由於這些 Cookie 必不可少，所以你無法將其關閉。']
						},
						Preferences:
						{
							headline: "偏好",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Preferences">我們使用這些 Cookie</a> 來記住你的偏好，並提升你在我們網站上的體驗。']
						},
						Performance:
						{
							headline: "效能與分析",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Performance">我們使用這些 Cookie</a> 來收集有關你如何使用我們網站、監控網站效能，以及改善我們網站效能和體驗的資訊。']
						},
						Marketing:
						{
							headline: "行銷",
							content: ['<a class="textarticle-button" href="https://snap.com/privacy/cookie-information#Marketing">我們使用這些 Cookie</a> 來提供相關廣告，並衡量我們廣告活動的成效。我們的第三方廣告合作夥伴可能會使用瀏覽記錄來記錄你的興趣，并在其它網站上顯示相關的廣告。']
						}
					},
					ThirdPartyAdvertisersText: "第三方廣告合作夥伴",
					AdvertisersList: ['<a href="https://help.twitter.com/rules-and-policies/twitter-cookies" target="_blank">Twitter</a>', '<a href="https://policy.pinterest.com/cookies" target="_blank">Pinterest</a>', '<a href="https://policies.google.com/technologies/cookies" target="_blank">Google</a>', '<a href="https://www.linkedin.com/legal/cookie-policy" target="_blank">LinkedIn</a>', '<a href="https://privacy.microsoft.com/privacystatement" target="_blank">Bing</a>', '<a href="https://www.salesforce.com/company/privacy" target="_blank">Pardot</a>', '<a href="https://www.facebook.com/policies/cookies/" target="_blank">Facebook</a>'],
					ThirdPartyAdvertisersPopupText: "第三方廣告合作夥伴：",
					EffectiveDate: "生效日期：2019 年 1 月 15 日",
					Body: ["除了透過瀏覽器或裝置來管理 Cookie 之外，你還可以在下方更改 Cookie 設定。請注意，某些 Cookie 是運行我們網站必需用到的，無法利用設定來阻擋。"],
					Title: "Cookie 設定",
					COOKIE_POPUP: '嗨！我們在此網站中使用 Cookie 及相關技術（以下統稱“ Cookie”)，並包含第三方 Cookie ，以便幫助網站運作、改進用戶體驗、監控網站效能，以及顯示相關廣告。若要深入了解我們如何使用 Cookie 以及你對 Cookie 有哪些選擇的資訊，請到<a href="{COOKIE_POLICY_URL}" target="_blank">這裡</a>了解我們的 Cookie 政策！透過點擊下方的“接受 Cookie ”，你將同意我們使用 Cookie（若是網站運作必需的 Cookie，則不需要許可）。透過點擊下方的“ Cookie 設定”，你可以隨時更改 Cookie 設定並撤回此許可。',
					COOKIE_POPUP_EU: '嗨！我們在此網站中使用 Cookie 及相關技術（以下統稱“ Cookie”)，並包含第三方 Cookie ，以便幫助網站運作、改進用戶體驗、監控網站效能，以及顯示相關廣告。若要深入了解我們如何使用 Cookie 以及你對 Cookie 有哪些選擇的資訊，請到<a href="{COOKIE_POLICY_URL}" target="_blank">這裡</a>了解我們的 Cookie 政策！透過點擊下方的“接受 Cookie ”，你將同意我們使用 Cookie（若是網站運作必需的 Cookie，則不需要許可）。透過點擊下方的“ Cookie 設定”，你可以隨時更改 Cookie 設定並撤回此許可。',
					AgreeText: "接受 Cookie",
					SettingsText: "Cookie 設定",
					"Report Infringement": "檢舉侵權"
				}
			},
			a = n;
		t.default = a
	},
	56: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}

		function o(e)
		{
			return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e)
			{
				return typeof e
			} : function(e)
			{
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function i(e, t)
		{
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function r(e, t)
		{
			for (var n = 0; n < t.length; n++)
			{
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}

		function s(e, t, n)
		{
			return t && r(e.prototype, t), n && r(e, n), e
		}

		function c(e, t)
		{
			return !t || "object" !== o(t) && "function" != typeof t ? u(e) : t
		}

		function l(e)
		{
			return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e)
			{
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function u(e)
		{
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function p(e, t)
		{
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype,
			{
				constructor:
				{
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && d(e, t)
		}

		function d(e, t)
		{
			return (d = Object.setPrototypeOf || function(e, t)
			{
				return e.__proto__ = t, e
			})(e, t)
		}

		function m(e, t, n)
		{
			return t in e ? Object.defineProperty(e, t,
			{
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.default = void 0;
		var f = a(n(20)),
			h = a(n(52)),
			k = n(15),
			g = n(14),
			y = a(n(54)),
			v = a(n(57)),
			b = function(e)
			{
				function t(e)
				{
					var n;
					return i(this, t), n = c(this, l(t).call(this, e)), n.localeSelected = n.localeSelected.bind(u(n)), n
				}
				return p(t, e), s(t, [
				{
					key: "callInitExpandingColumns",
					value: function(e)
					{
						(0, g.initExpandingFooterColumns)(e)
					}
				},
				{
					key: "localeSelected",
					value: function(e)
					{
						var t = e.target.value;
						(0, g.setLocaleCookie)(t, this.props.cookieDomain), this.props.onLocaleSelected && this.props.onLocaleSelected(t)
					}
				},
				{
					key: "renderColumnHeaderCaret",
					value: function()
					{
						return f.default.createElement("div",
						{
							className: "footer-column-expand-caret"
						}, f.default.createElement("svg",
						{
							width: "15",
							height: "20"
						}, f.default.createElement("g", null, f.default.createElement("rect",
						{
							stroke: "#000",
							transform: "rotate(45 0,0)",
							rx: "1",
							id: "1",
							height: "1.5",
							width: "10",
							y: "-2",
							x: "5",
							strokeWidth: "1"
						}), f.default.createElement("rect",
						{
							stroke: "#000",
							transform: "rotate(-45 0,0)",
							rx: "1",
							id: "2",
							height: "1.5",
							width: "10",
							y: "13.5",
							x: "-8",
							strokeWidth: "1"
						}))))
					}
				},
				{
					key: "render",
					value: function()
					{
						var e = "\n      .footer-container,\n      .footer-bottom-bar {\n        width: 92.3%;\n        max-width: 1070px;\n        margin: auto;\n      }\n\n      .footer-container {\n        box-sizing: content-box;\n        position: relative;\n        padding: 30px 0 30px;\n        min-height: 195px;\n      }\n\n      .footer-container .footer-column {\n        position: relative;\n        box-sizing: border-box;\n        float: left;\n        width: 25%;\n        padding-right: 6.25%;\n      }\n\n      .footer-container .footer-column .footer-column-header {\n        box-sizing: content-box;\n        line-height: 23px;\n        font-weight: 500;\n      }\n\n      .footer-container .footer-column .footer-column-expand-caret {\n        display: none;\n      }\n\n      .footer-container .footer-column a {\n        display: table;\n        color: rgba(0, 0, 0, 0.4);\n        text-decoration: none;\n        line-height: 17px;\n        margin-top: 6px;\n      }\n      .footer-container .footer-column a:hover {\n        color: black;\n      }\n\n      .footer-container .langue-selection-block {\n        position: absolute;\n        box-sizing: border-box;\n        padding: 0 6.25% 15px 0;\n        bottom: 15px;\n        width: 25%;\n      }\n      .footer-container .langue-selection-block .langue-header {\n        font-weight: 500;\n      }\n\n      .footer-bottom-bar a {\n        line-height: 56px;\n        margin-right: 40px;\n        color: white;\n        text-decoration: none;\n      }\n\n      @media (max-width: 767px) {\n        .footer-container,\n        .footer-bottom-bar {\n          width: 100%;\n          padding: 0;\n          max-width: none;\n        }\n\n        .footer-container .footer-column {\n          padding: 0;\n          width: 100%;\n        }\n\n        .footer-container .footer-column a,\n        .footer-container .footer-column .footer-column-header {\n          margin-top: 0;\n          padding: 10px 40px;\n          width: calc(100% - 80px);\n          line-height: 25px;\n        }\n\n        .footer-container .footer-column .footer-column-header,\n        .footer-container .langue-selection-block {\n          border-top: solid 1px #D4D4D4;\n        }\n\n        .footer-container .footer-column .footer-column-header {\n          cursor: pointer;\n          background-color: white;\n        }\n\n        .footer-container .footer-column .footer-column-expand-caret {\n          display: block;\n          position: absolute;\n          left: 16px;\n          top: 15px;\n          width: 15px;\n          height: 20px;\n          transform-origin: 55% 45%;\n          cursor: pointer;\n        }\n        .footer-container .footer-column.expanded .footer-column-expand-caret {\n          transform: rotate(90deg);\n          -webkit-transform: rotate(90deg);\n        }\n\n        .footer-container .footer-column a {\n          font-weight: 600;\n          color: black;\n          border-top: solid 1px #E5E5E5;\n          display: none;\n        }\n        .footer-container .footer-column.expanded a {\n          display: block;\n          box-sizing: content-box;\n        }\n\n        .footer-container .langue-selection-block {\n          position: static;\n          width: 100%;\n          height: inherit;\n          top: inherit;\n          padding: 14px 20px 15px;\n        }\n\n        .footer-bottom-bar a {\n          display: block;\n          line-height: 45px;\n          margin-right: 0;\n          padding-left: 20px;\n          border-bottom: solid 1px #D4D4D4;\n        }\n      }\n    ",
							t = {
								WebkitAppearance: "none",
								MozAppearance: "none",
								appearance: "none",
								border: "1px solid #CCCCCC",
								borderRadius: "5px",
								background: "white",
								width: "100%",
								marginTop: 10,
								padding: "5px 10px",
								fontSize: 14,
								fontFamily: "inherit",
								color: "rgba(0, 0, 0, 0.6)",
								height: 34,
								cursor: "pointer"
							},
							n = {
								position: "absolute",
								right: 10,
								width: 0,
								height: 0,
								pointerEvents: "none",
								borderStyle: "solid"
							},
							a = 10,
							o = Object.assign(
							{}, n,
							{
								bottom: a + 8,
								borderWidth: "0 3px 5px 3px",
								borderColor: "transparent transparent #666666 transparent"
							}),
							i = Object.assign(
							{}, n,
							{
								bottom: a,
								borderWidth: "5px 3px 0 3px",
								borderColor: "#666666 transparent transparent transparent"
							}),
							r = (0, g.getDomainForURLs)(this.props.domain),
							s = this.createStringSelector(),
							c = this.getLocale(),
							l = this.getLocaleUrlSuffixForWWW(),
							u = this.props.snapComUrl,
							p = [],
							d = !0,
							m = !1,
							h = void 0;
						try
						{
							for (var y, b = this.props.availableLocales[Symbol.iterator](); !(d = (y = b.next()).done); d = !0)
							{
								var S = y.value;
								k.ALL_LOCALES[S] && p.push(f.default.createElement("option",
								{
									key: S,
									value: S
								}, k.ALL_LOCALES[S]))
							}
						}
						catch (e)
						{
							m = !0, h = e
						}
						finally
						{
							try
							{
								d || null == b.return || b.return()
							}
							finally
							{
								if (m) throw h
							}
						}
						return f.default.createElement("div",
						{
							style:
							{
								backgroundColor: "#F8F9FB",
								fontSize: 14,
								lineHeight: "17px"
							}
						}, f.default.createElement("style", null, e), f.default.createElement("div",
						{
							className: "footer-container",
							id: "footerContainer",
							ref: this.callInitExpandingColumns
						}, f.default.createElement("div",
						{
							className: "footer-column"
						}, this.renderColumnHeaderCaret(), f.default.createElement("div",
						{
							className: "footer-column-header"
						}, s("Company")), f.default.createElement("div", null, f.default.createElement("a",
						{
							href: "https://".concat(u, "/").concat(c)
						}, s("Snap Inc.")), f.default.createElement("a",
						{
							href: "https://careers.".concat(u)
						}, s("Careers")), f.default.createElement("a",
						{
							href: "https://newsroom.".concat(u)
						}, s("News")))), f.default.createElement("div",
						{
							className: "footer-column"
						}, this.renderColumnHeaderCaret(), f.default.createElement("div",
						{
							className: "footer-column-header"
						}, s("Community")), f.default.createElement("div", null, f.default.createElement("a",
						{
							href: "https://support.".concat(r, "/")
						}, s("Support")), f.default.createElement("a",
						{
							href: "https://".concat(u, "/").concat(c, "/community-guidelines")
						}, s("Community Guidelines")), f.default.createElement("a",
						{
							href: "https://".concat(u, "/").concat(c, "/safety/safety-center")
						}, s("Safety Center")))), f.default.createElement("div",
						{
							className: "footer-column"
						}, this.renderColumnHeaderCaret(), f.default.createElement("div",
						{
							className: "footer-column-header"
						}, s("Advertising")), f.default.createElement("div", null, f.default.createElement("a",
						{
							href: "https://".concat(r, "/").concat(l, "ads")
						}, s("Buy Ads")), f.default.createElement("a",
						{
							href: "https://".concat(u, "/").concat(c, "/ad-policies/")
						}, s("Advertising Policies")), f.default.createElement("a",
						{
							href: "https://".concat(u, "/").concat(c, "/political-ads/")
						}, s("Political Ads Library")), f.default.createElement("a",
						{
							href: "https://".concat(u, "/").concat(c, "/brand-guidelines/")
						}, s("Brand Guidelines")), f.default.createElement("a",
						{
							href: "https://support.".concat(r, "/a/promotions-rules")
						}, s("Promotions Rules")))), f.default.createElement("div",
						{
							className: "footer-column"
						}, this.renderColumnHeaderCaret(), f.default.createElement("div",
						{
							className: "footer-column-header"
						}, s("Legal")), f.default.createElement("div", null, f.default.createElement("a",
						{
							href: "https://".concat(u, "/").concat(c, "/privacy/privacy-center/")
						}, s("Privacy Center")), f.default.createElement("a",
						{
							href: "https://".concat(u, "/").concat(c, "/cookie-policy/")
						}, s("Cookie Policy")), f.default.createElement("a",
						{
							href: "https://support.".concat(r, "/article/infringement-reporting-about")
						}, s("Report Infringement")), f.default.createElement("a",
						{
							href: "https://".concat(u, "/").concat(c, "/terms/custom-creative-tools/")
						}, s("CUSTOM_CREATIVE_TOOLS_TOS")), f.default.createElement("a",
						{
							href: "https://".concat(r, "/create/terms.html")
						}, s("COMMUNITY_TOS")), f.default.createElement("a",
						{
							href: "https://".concat(u, "/").concat(c, "/terms/lens-studio-terms/")
						}, s("LENS_STUDIO_TOS")))), f.default.createElement("div",
						{
							style:
							{
								clear: "both"
							}
						}), p.length > 1 ? f.default.createElement("div",
						{
							className: "langue-selection-block"
						}, f.default.createElement("div",
						{
							className: "langue-header"
						}, s("Language")), f.default.createElement("div",
						{
							style:
							{
								position: "relative"
							}
						}, f.default.createElement("select",
						{
							id: "sc-global-locale-selector",
							defaultValue: c,
							onChange: this.localeSelected,
							style: t
						}, p), f.default.createElement("div",
						{
							style: o
						}), f.default.createElement("div",
						{
							style: i
						}))) : null), f.default.createElement("div",
						{
							style:
							{
								backgroundColor: "#262626"
							}
						}, f.default.createElement("div",
						{
							className: "footer-bottom-bar"
						}, f.default.createElement("a",
						{
							href: this.props.privacyPolicyUrlOverride || "https://".concat(u, "/").concat(c, "/privacy/privacy-policy/")
						}, s("Privacy Policy")), f.default.createElement("a",
						{
							href: this.props.termsOfServiceUrlOverride || "https://".concat(u, "/").concat(c, "/terms/")
						}, s("Terms of Service")), this.props.showImpressum && f.default.createElement("a",
						{
							href: "https://support.snapchat.com/a/impressum",
							className: "impressum"
						}, s("Impressum")), f.default.createElement("div",
						{
							style:
							{
								clear: "both"
							}
						}))), this.props.disableCookiePopup ? null : f.default.createElement(v.default,
						{
							leftCookieIconSrc: "https://www.".concat(r, "/home/cookie-1.svg"),
							rightCookieIconSrc: "https://www.".concat(r, "/home/cookie-2.svg"),
							cookiePolicyUrl: "https://www.".concat(u, "/cookie-policy/"),
							cookieSettingsUrl: "https://www.".concat(r, "/cookie-settings"),
							locale: c,
							domain: r
						}))
					}
				},
				{
					key: "componentDidMount",
					value: function() {}
				}]), t
			}(y.default);
		t.default = b, m(b, "propTypes",
		{
			domain: h.default.string,
			cookieDomain: h.default.string,
			snapComUrl: h.default.string,
			locale: h.default.string,
			availableLocales: h.default.array,
			onLocaleSelected: h.default.func,
			disableCookiePopup: h.default.bool,
			termsOfServiceUrlOverride: h.default.string,
			privacyPolicyUrlOverride: h.default.string,
			showImpressum: h.default.bool
		}), m(b, "defaultProps",
		{
			domain: k.DEFAULT_DOMAIN,
			cookieDomain: "",
			snapComUrl: k.DEFAULT_SNAP_COM_DOMAIN,
			locale: null,
			availableLocales: k.DEFAULT_AVAILABLE_LOCALES,
			onLocaleSelected: null,
			disableCookiePopup: !1,
			termsOfServiceUrlOverride: null,
			privacyPolicyUrlOverride: null,
			showImpressum: !1
		})
	},
	57: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}

		function o(e)
		{
			return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e)
			{
				return typeof e
			} : function(e)
			{
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function i(e, t)
		{
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function r(e, t)
		{
			for (var n = 0; n < t.length; n++)
			{
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}

		function s(e, t, n)
		{
			return t && r(e.prototype, t), n && r(e, n), e
		}

		function c(e, t)
		{
			return !t || "object" !== o(t) && "function" != typeof t ? u(e) : t
		}

		function l(e)
		{
			return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e)
			{
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function u(e)
		{
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function p(e, t)
		{
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype,
			{
				constructor:
				{
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && d(e, t)
		}

		function d(e, t)
		{
			return (d = Object.setPrototypeOf || function(e, t)
			{
				return e.__proto__ = t, e
			})(e, t)
		}

		function m(e, t, n)
		{
			return t in e ? Object.defineProperty(e, t,
			{
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.default = void 0;
		var f = a(n(20)),
			h = a(n(52)),
			k = n(15),
			g = n(14),
			y = a(n(54)),
			v = n(16),
			b = function(e)
			{
				function t(e)
				{
					var n;
					return i(this, t), n = c(this, l(t).call(this, e)), n.callInitCookiePopup = n.callInitCookiePopup.bind(u(n)), n.enablePerformanceAnalytics = n.enablePerformanceAnalytics.bind(u(n)), n.state = {
						userLocation: null
					}, n.ga = "ga-disable-", n.rtlLangs = ["ar", "ur-PK"], n
				}
				return p(t, e), s(t, [
				{
					key: "callInitCookiePopup",
					value: function(e)
					{
						var t = this,
							n = this.props,
							a = n.marketingAnalyticsCallback,
							o = n.domain,
							i = n.cookieDomain,
							r = function()
							{
								t.enablePerformanceAnalytics(), a()
							};
						(0, g.initCookiePolicyPopup)(e, o, i, r)
					}
				},
				{
					key: "enablePerformanceAnalytics",
					value: function()
					{
						var e = this.props,
							t = e.GTMID,
							n = e.GAID,
							a = e.plugins,
							o = e.gaCustomCallback,
							i = e.gtmCustomCallback,
							r = e.performanceAnalyticsCallback;
						t && n ? (0, v.enableGoogleTagManager)(t, n, i) : n && (0, v.enableGoogleAnalytics)(n, a, o), r()
					}
				},
				{
					key: "componentDidMount",
					value: function()
					{
						var e = this,
							t = this.props,
							n = t.GAID,
							a = t.marketingAnalyticsCallback;
						n.includes("UA-") ? this.ga += n : this.ga += "UA-".concat(n), window[this.ga] = !0, fetch("https://www.snapchat.com/cookies/api/user_location").then(function(e)
						{
							if (200 !== e.status)
							{
								var t = e.status,
									n = e.statusText;
								throw new Error("".concat(t, " : ").concat(n))
							}
							return e.json()
						}).then(function(t)
						{
							var n = t.country,
								o = t.region,
								i = "".concat(n, "-").concat(o);
							window.dataLayer = window.dataLayer || [], dataLayer.push(
							{
								userLocation: i
							}), e.setState(
							{
								userLocation: t
							}, function()
							{
								(0, v.__getCookie)("Performance") && e.enablePerformanceAnalytics(), (0, v.__getCookie)("Marketing") && a()
							})
						}).catch(function(e)
						{
							return console.error(e)
						})
					}
				},
				{
					key: "renderContainerStyles",
					value: function()
					{
						var e = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22background-color%3A%20lightgray%3B%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2030%2030%22%3E%3Crect%20width%3D%223%22%20height%3D%2220%22%20x%3D%2213.5%22%20y%3D%225%22%20fill%3D%22%23FFF%22%20rx%3D%221%22%20ry%3D%221%22%3E%3C%2Frect%3E%3Crect%20width%3D%2220%22%20height%3D%223%22%20y%3D%2213.5%22%20x%3D%225%22%20fill%3D%22%23FFF%22%20rx%3D%221%22%20ry%3D%221%22%3E%3C%2Frect%3E%3C%2Fsvg%3E",
							t = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22background-color%3A%20gray%3B%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2030%2030%22%3E%3Crect%20width%3D%223%22%20height%3D%2220%22%20x%3D%2213.5%22%20y%3D%225%22%20fill%3D%22%23FFF%22%20rx%3D%221%22%20ry%3D%221%22%3E%3C%2Frect%3E%3Crect%20width%3D%2220%22%20height%3D%223%22%20y%3D%2213.5%22%20x%3D%225%22%20fill%3D%22%23FFF%22%20rx%3D%221%22%20ry%3D%221%22%3E%3C%2Frect%3E%3C%2Fsvg%3E";
						return "\n      #".concat(this.props.containerID, " {\n        position: fixed;\n        display: flex;\n        align-items: center;\n        width: 100%;\n        min-height: 33%;\n        z-index: 10;\n        background: white;\n        bottom: 0;\n\n        font-size: 14px;\n        line-height: 17px;\n\n        transition: transform, box-shadow;\n        transition-duration: 500ms;\n        transition-timing-function: cubic-bezier(0,0,0,1), linear;\n        transform: translateY(100%);\n        -webkit-transform: translateY(100%);\n        box-shadow: 0 0 0 rgba(0,0,0,0.075);\n      }\n\n      #").concat(this.props.containerID, ".shown {\n        transform: translateY(0);\n        -webkit-transform: translateY(0);\n        box-shadow: 0 -1px 3px rgba(0,0,0,0.175);\n      }\n\n      #").concat(this.props.containerID, " #cookiePopupCloseButton {\n        position: absolute;\n        right: 30px;\n        top: calc(50% - 10px);\n        border-radius: 50%;\n        width: 20px;\n        height: 20px;\n        background-color: lightgray;\n        cursor: pointer;\n        transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n        -webkit-transform: rotate(45deg);\n        background: url(").concat(e, ");\n      }\n\n      #").concat(this.props.containerID, " #cookiePopupCloseButton:hover {\n        background: url(").concat(t, ");\n      }\n\n      #").concat(this.props.containerID, " #cookiePopupAcceptEU {\n        font-family: AvenirNext, sans-serif;\n        font-size: 14px;\n        line-height: 16px;\n        padding: 8px 20px;\n        margin-top: 10.5px;\n        background-color: #000;\n        color: #FFF;\n        border: none;\n        outline: none;\n        border-radius: 100px;\n        cursor: pointer;\n      }\n\n      #").concat(this.props.containerID, " button {\n        margin-right: 20px;\n      }\n\n      #").concat(this.props.containerID, " a {\n        text-decoration: none;\n        color: #3cb2e2;\n      }\n\n      #").concat(this.props.containerID, " .cookie-text {\n        font-size: 14px;\n        line-height: 23px;\n        padding: 28px 20px 0;\n        margin-left: calc(10% + 210px);\n        margin-right: calc(10% + 210px);\n      }\n\n      #").concat(this.props.containerID, " .cookie-prompt-eu {\n        padding-bottom: 28px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      @media (min-width: 768px) {\n        #").concat(this.props.containerID, " .cookie-text {\n          padding-bottom: 20px;\n        }\n      }\n\n      @media (max-width: 1200px) {\n        #").concat(this.props.containerID, " .cookie-text {\n          margin-left: 3%;\n          margin-right: calc(3% + 40px);\n        }\n      }\n\n      @media (max-width: 1200px) {\n        #").concat(this.props.containerID, " .cookie-icon {\n          display: none;\n        }\n      }\n\n      @media print {\n        #").concat(this.props.containerID, " {\n          display: none;\n        }\n      }\n\n      @media (max-width: 767px) {\n        #").concat(this.props.containerID, " .cookie-text {\n          font-size: 10px;\n          line-height: 16px;\n          text-align: center;\n        }\n      }\n\n      @media (max-width: 360px) {\n        #").concat(this.props.containerID, " #cookiePopupAcceptEU {\n          font-size: 12.5px;\n        }\n\n        #cookiePopupContainer button {\n          margin-right: 15px;\n        }\n\n        #").concat(this.props.containerID, " #cookiePopupSettings {\n          padding-top: 10px;\n          font-size: 12.5px;\n        }\n      }\n    ")
					}
				},
				{
					key: "getCookieIconStyle",
					value: function()
					{
						return {
							position: "absolute",
							width: 240,
							height: 120,
							backgroundSize: "cover"
						}
					}
				},
				{
					key: "renderLeftCookieIcon",
					value: function()
					{
						if (!this.props.leftCookieIconSrc) return null;
						var e = Object.assign(
						{}, this.getCookieIconStyle(),
						{
							left: "calc(10% - 50px)",
							top: "calc(50% - 55px)",
							background: 'url("'.concat(this.props.leftCookieIconSrc, '") center center no-repeat')
						});
						return f.default.createElement("div",
						{
							className: "cookie-icon cookie-icon-left",
							style: e
						})
					}
				},
				{
					key: "renderRightCookieIcon",
					value: function(e)
					{
						if (!this.props.rightCookieIconSrc) return null;
						var t = Object.assign(
						{}, this.getCookieIconStyle(),
						{
							right: "calc(10% - 50px)",
							top: "calc(50% - 50px)",
							background: 'url("'.concat(this.props.rightCookieIconSrc, '") center center no-repeat')
						});
						return f.default.createElement("div",
						{
							className: "cookie-icon cookie-icon-right",
							style: t
						})
					}
				},
				{
					key: "render",
					value: function()
					{
						if (!this.state.userLocation) return null;
						var e = this.createStringSelector(),
							t = {
								__html: e("COOKIE_POPUP_EU").replace("{COOKIE_POLICY_URL}", this.props.cookiePolicyUrl)
							},
							n = "ltr";
						return this.rtlLangs.includes(this.props.locale) && (n = "rtl"), f.default.createElement("div",
						{
							id: this.props.containerID,
							className: this.props.className,
							ref: this.callInitCookiePopup
						}, f.default.createElement("style", null, this.renderContainerStyles()), this.renderLeftCookieIcon(), f.default.createElement("div",
						{
							className: "cookie-popup"
						}, f.default.createElement("div",
						{
							className: "cookie-text",
							dangerouslySetInnerHTML: t,
							dir: n
						}), f.default.createElement("div",
						{
							className: "cookie-prompt-eu"
						}, f.default.createElement("button",
						{
							id: "cookiePopupAcceptEU"
						}, e("AgreeText")), f.default.createElement("a",
						{
							href: this.props.cookieSettingsUrl,
							target: "_blank",
							id: "cookiePopupSettings"
						}, e("SettingsText")))), this.renderRightCookieIcon(), f.default.createElement("div",
						{
							id: "cookiePopupCloseButton"
						}))
					}
				}]), t
			}(y.default);
		t.default = b, m(b, "propTypes",
		{
			domain: h.default.string,
			cookiePolicyUrl: h.default.string,
			leftCookieIconSrc: h.default.string,
			rightCookieIconSrc: h.default.string,
			containerID: h.default.string,
			className: h.default.string,
			cookieSettingsUrl: h.default.string,
			GTMID: h.default.string,
			GAID: h.default.string,
			plugins: h.default.array,
			gaCustomCallback: h.default.func,
			gtmCustomCallback: h.default.func,
			performanceAnalyticsCallback: h.default.func,
			marketingAnalyticsCallback: h.default.func
		}), m(b, "defaultProps",
		{
			domain: k.DEFAULT_DOMAIN,
			cookieDomain: "",
			cookiePolicyUrl: k.DEFAULT_COOKIE_POLICY_URL,
			leftCookieIconSrc: k.DEFAULT_COOKIE_ICON_LEFT,
			rightCookieIconSrc: k.DEFAULT_COOKIE_ICON_RIGHT,
			containerID: "cookiePopupContainer",
			className: null,
			GTMID: "",
			GAID: "",
			plugins: [],
			gaCustomCallback: function() {},
			gtmCustomCallback: function() {},
			performanceAnalyticsCallback: function() {},
			marketingAnalyticsCallback: function() {}
		})
	},
	58: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}

		function o(e)
		{
			return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e)
			{
				return typeof e
			} : function(e)
			{
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function i(e, t)
		{
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function r(e, t)
		{
			for (var n = 0; n < t.length; n++)
			{
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}

		function s(e, t, n)
		{
			return t && r(e.prototype, t), n && r(e, n), e
		}

		function c(e, t)
		{
			return !t || "object" !== o(t) && "function" != typeof t ? u(e) : t
		}

		function l(e)
		{
			return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e)
			{
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function u(e)
		{
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function p(e, t)
		{
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype,
			{
				constructor:
				{
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && d(e, t)
		}

		function d(e, t)
		{
			return (d = Object.setPrototypeOf || function(e, t)
			{
				return e.__proto__ = t, e
			})(e, t)
		}

		function m(e, t, n)
		{
			return t in e ? Object.defineProperty(e, t,
			{
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.default = void 0;
		var f = a(n(20)),
			h = a(n(52)),
			k = a(n(59)),
			g = n(16),
			y = a(n(54)),
			v = n(15),
			b = function(e)
			{
				function t()
				{
					var e;
					return i(this, t), e = c(this, l(t).call(this)), m(u(e), "state",
					{
						overlayOpen: !1
					}), m(u(e), "isEU", function()
					{
						fetch("https://www.snapchat.com/cookies/api/is_cookie_popup_eligible").then(function(e)
						{
							if (200 !== e.status) throw new Error("".concat(e.status, " : ").concat(e.statusText));
							return e.json()
						}).then(function(t)
						{
							var n = t.popupEnabled;
							n ? e.setNonEUCookieStates() : e.setEUCookieStates()
						}).catch(function()
						{
							e.setEUCookieStates()
						})
					}), m(u(e), "cookieStates", function(t)
					{
						var n = ["Preferences", "Performance", "Marketing"];
						n.forEach(function(n)
						{
							void 0 !== (0, g.__getCookie)(n) ? e.setState(m(
							{}, n, (0, g.__getCookie)(n))) : (e.setState(m(
							{}, n, t)), (0, g.setCookie)(n, t, e.props.domain.toLowerCase()))
						})
					}), m(u(e), "setNonEUCookieStates", function()
					{
						e.cookieStates(!0)
					}), m(u(e), "setEUCookieStates", function()
					{
						e.cookieStates(!1)
					}), m(u(e), "togglePreference", function()
					{
						var t = !1;
						return function(n)
						{
							e.setState(m(
							{}, n, !e.state[n]), function()
							{
								(0, g.setCookie)(n, e.state[n], e.props.domain.toLowerCase())
							}), t || ((0, g.setCookie)(v.COOKIE_KEY_COOKIES_ACCEPTED, !1, e.props.domain.toLowerCase()), t = !0)
						}
					}), m(u(e), "toggleOverlay", function()
					{
						e.setState(
						{
							overlayOpen: !e.state.overlayOpen
						})
					}), e.toggleHandler = e.togglePreference().bind(u(e)), e
				}
				return p(t, e), s(t, [
				{
					key: "componentDidMount",
					value: function()
					{
						this.isEU()
					}
				},
				{
					key: "renderContainerStyles",
					value: function(e)
					{
						return "\n    a {\n      cursor: pointer;\n    }\n\n    .textarticle {\n      line-height: 1.5;\n      margin: 0 20px;\n      overflow-wrap: break-word;\n      overflow-x: hidden;\n   }\n   .textarticle-container {\n      margin: 0 auto;\n      max-width: 640px;\n      padding: 60px 0;\n   }\n    .textarticle-container > :first-child {\n      margin-top: 0;\n   }\n    .textarticle-container > :last-child {\n      margin-bottom: 0;\n   }\n   .textarticle-container:first-letter {\n     text-transform: uppercase;\n   }\n    .textarticle h1 {\n      font-size: 40px;\n      font-weight: normal;\n      line-height: 1.25;\n      margin: 16px 0;\n      text-align: center;\n   }\n    .textarticle h1:first-child {\n      margin-top: 0;\n   }\n    .textarticle h1 + .textarticle-date {\n      margin: 30px 0 40px;\n      text-align: center;\n   }\n    .textarticle h1 + .textarticle-date-range {\n      margin-bottom: 60px;\n   }\n    .textarticle h1 + .textarticle-date + .textarticle-date {\n      margin-top: -40px;\n   }\n    .textarticle h2 {\n      font-size: 24px;\n      font-weight: 600;\n      line-height: 1.4166666667;\n   }\n    .textarticle h2 + h3 {\n      margin-top: -16px;\n   }\n    .textarticle h3, .textarticle h4, .textarticle h5, .textarticle h6 {\n      font-size: 16px;\n      font-weight: 600;\n   }\n   .textarticle p, .textarticle ol, .textarticle ul{\n      margin: 16px 0;\n   }\n    .textarticle hr {\n      border: none;\n      border-top: 1px solid #d4d4d4;\n      margin: 64px 0;\n   }\n    .textarticle-date {\n      font-weight: 500;\n      text-align: center;\n   }\n    .textarticle-date:last-child {\n      text-align: right;\n   }\n    .textarticle-overlay {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: rgba(0, 0, 0, 0.7);\n      transition: opacity 500ms;\n      visibility: hidden;\n      opacity: 0;\n    }\n    .textarticle-overlay.open {\n      visibility: visible;\n      opacity: 1;\n    }\n    .textarticle-popup {\n      margin: 70px auto;\n      padding: 20px;\n      background: #fff;\n      border-radius: 5px;\n      width: 50%;\n      position: relative;\n      transition: all 5s ease-in-out;\n    }\n    .textarticle-close {\n      position: absolute;\n      top: 4px;\n      right: 20px;\n      transition: all 200ms;\n      font-size: 25px;\n      font-weight: bold;\n      text-decoration: none;\n      color: #333;\n    }\n    .textarticle-partnerlist {\n      max-height: 30%;\n    }\n\n    .toggle {\n      position: absolute;\n      display: inline-block;\n      width: 45px;\n      height: 23px;\n      box-sizing: border-box;\n      ".concat(e ? "left: 20px" : "right: 20px", '\n    }\n    .toggle input {\n      display: none;\n    }\n    .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border: 1px solid #feed75;\n      background-color: #fcff07;\n      -webkit-transition: 0.4s;\n      transition: 0.4s;\n    }\n    .slider:before {\n      position: absolute;\n      border: 1px solid #aeb6bd;\n      content: "";\n      height: 19px;\n      width: 19px;\n      left: 21px;\n      bottom: 1px;\n      background-color: white;\n      -webkit-transition: 0.4s;\n      transition: 0.4s;\n      border-radius: 50%;\n    }\n    input:hover + .slider {\n      background-color: #feff7a;\n      border: 1px solid #feed75;\n    }\n    input[type="checkbox"]:not(:checked) + .slider {\n      border: 1px solid #aeb6bd;\n      background-color: #aeb6bd;\n    }\n    input[type="checkbox"]:not(:checked) + .slider:before {\n      -webkit-transform: translateX(-20px);\n      -ms-transform: translateX(-20px);\n      transform: translateX(-20px);\n    }\n    .slider.round {\n      border-radius: 1000px;\n    }\n    .section-headline {\n      display: flex;\n      align-items: center;\n      position: relative;\n    }\n    .section-headline h2 {\n      margin-right: 10px;\n    }\n    .section-copy .textarticle-button {\n      color: #3cb2e2;\n      text-decoration: underline;\n    }\n    .section-copy .third-party-advertiser a {\n      color: #3cb2e2;\n      text-decoration: underline;\n    }\n    ');
					}
				},
				{
					key: "render",
					value: function()
					{
						var e = this,
							t = "rtl" === document.getElementsByTagName("html")[0].getAttribute("dir"),
							n = this.createStringSelector(),
							a = n("COOKIE_SETTINGS_SECTIONS"),
							o = n("AdvertisersList").map(function(e, t)
							{
								return f.default.createElement("li",
								{
									className: "third-party-advertiser",
									key: t,
									dangerouslySetInnerHTML:
									{
										__html: e
									}
								})
							}),
							i = Object.keys(a).map(function(t, i)
							{
								var r = a[t].content[0].split(n("ThirdPartyAdvertisersText"));
								return f.default.createElement("section",
								{
									key: i,
									className: "section"
								}, f.default.createElement("hr", null), f.default.createElement("div",
								{
									className: "cookie-settings-container"
								}, f.default.createElement("div",
								{
									className: "section-headline"
								}, f.default.createElement("h2", null, a[t].headline), f.default.createElement(k.default,
								{
									key: t,
									onChange: function()
									{
										return e.toggleHandler(t)
									},
									isToggled: e.state[t] || "Necessary" === t,
									disabled: "Necessary" === t
								})), "Marketing" === t ? f.default.createElement("div",
								{
									className: "section-copy"
								}, f.default.createElement("span",
								{
									dangerouslySetInnerHTML:
									{
										__html: r[0]
									}
								}), f.default.createElement("a",
								{
									className: "textarticle-button",
									onClick: e.toggleOverlay
								}, n("ThirdPartyAdvertisersText")), f.default.createElement("span",
								{
									dangerouslySetInnerHTML:
									{
										__html: r[1]
									}
								}), f.default.createElement("div",
								{
									id: "popup1",
									className: "textarticle-overlay " + (e.state.overlayOpen ? "open" : "")
								}, f.default.createElement("div",
								{
									className: "textarticle-popup"
								}, f.default.createElement("h2", null, n("ThirdPartyAdvertisersPopupText")), f.default.createElement("a",
								{
									className: "textarticle-close",
									onClick: e.toggleOverlay
								}, "×"), f.default.createElement("div",
								{
									className: "textarticle-partnerlist"
								}, f.default.createElement("ul", null, o))))) : a[t].content.map(function(e)
								{
									return f.default.createElement("p",
									{
										className: "section-copy",
										dangerouslySetInnerHTML:
										{
											__html: e
										}
									})
								})))
							});
						return f.default.createElement("article",
						{
							className: "textarticle"
						}, f.default.createElement("div",
						{
							className: "textarticle-container"
						}, f.default.createElement("style", null, this.renderContainerStyles(t)), f.default.createElement("h1", null, this.props.domain, " ", n("Title")), f.default.createElement("p", null, " ", n("Body")[0], " "), i))
					}
				}]), t
			}(y.default);
		t.default = b, m(b, "propTypes",
		{
			domain: h.default.string.isRequired
		})
	},
	59: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}

		function o(e)
		{
			return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e)
			{
				return typeof e
			} : function(e)
			{
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function i(e, t)
		{
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function r(e, t)
		{
			for (var n = 0; n < t.length; n++)
			{
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}

		function s(e, t, n)
		{
			return t && r(e.prototype, t), n && r(e, n), e
		}

		function c(e, t)
		{
			return !t || "object" !== o(t) && "function" != typeof t ? l(e) : t
		}

		function l(e)
		{
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function u(e)
		{
			return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e)
			{
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function p(e, t)
		{
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype,
			{
				constructor:
				{
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && d(e, t)
		}

		function d(e, t)
		{
			return (d = Object.setPrototypeOf || function(e, t)
			{
				return e.__proto__ = t, e
			})(e, t)
		}

		function m(e, t, n)
		{
			return t in e ? Object.defineProperty(e, t,
			{
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.default = void 0;
		var f = a(n(20)),
			h = a(n(52)),
			k = function(e)
			{
				function t()
				{
					return i(this, t), c(this, u(t).apply(this, arguments))
				}
				return p(t, e), s(t, [
				{
					key: "render",
					value: function()
					{
						var e = this.props,
							t = e.onChange,
							n = e.isToggled,
							a = e.disabled;
						return f.default.createElement("label",
						{
							className: "toggle"
						}, f.default.createElement("input",
						{
							type: "checkbox",
							onChange: t,
							checked: !!n,
							disabled: a
						}), f.default.createElement("span",
						{
							className: "slider round"
						}))
					}
				}]), t
			}(f.default.Component);
		t.default = k, m(k, "propTypes",
		{
			onChange: h.default.func,
			isToggled: h.default.bool
		})
	},
	60: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}
		var o = n(61),
			i = a(o),
			r = {
				ELEMENTS:
				{
					header: "#sc-global-header",
					footer: "#sc-global-footer"
				},
				APP_URLS:
				{
					apple: "",
					google: "https://play.google.com/store/apps/details?id=com.sartor.io&hl=en"
				},
				LOCALE:
				{
					DEFAULT: "en-US",
					LANGUAGES:
					{
						"en-US": "English (US)",
						"da-DK": "Dansk",
						"de-DE": "Deutsch",
						"en-GB": "English (UK)",
						es: "Español",
						"fr-FR": "Français",
						"it-IT": "Italiano",
						"nl-NL": "Nederlands",
						"ja-JP": "日本語",
						"nb-NO": "Norsk",
						"pt-BR": "Português (Brasil)",
						"fi-FI": "Suomi",
						"sv-SE": "Svenska"
					},
					X_PAGES: "|anime-style|astrology|beta|damienhirst|diwali|vzblackpumas|download|geofilters|create|safety|ads|ads/audiences|ads/ad-products|ads/drive-action|ads/grow-awareness|ads/how-to-buy|ads/success-stories|ads/measurement|ads/partners|ads/policies|cookie-policy|privacy|privacy-center|privacy-center/our-approach|geofilters/submit.html|geofilters/thankYou.html|geofilters/tips.html|brand-guidelines|sps-2020|transparency|transparency/02282015.html|transparency/06302015.html|transparency/12312015.html|ads|partners|snapkidz.jsp|on-demand|cookie-settings|vote|registertovote"
				}
			};
		r.LOCALE.PAGES = r.LOCALE.X_PAGES.split("|"), r.LOCALE.LANGUAGES_ARRAY = (0, i.default)(r.LOCALE.LANGUAGES), r.LOCALE.X_LANGUAGES = (0, i.default)(r.LOCALE.LANGUAGES).join("|"), e.exports = r
	},
	61: function(e, t, n)
	{
		e.exports = {
			default: n(62),
			__esModule: !0
		}
	},
	62: function(e, t, n)
	{
		n(63), e.exports = n(78).Object.keys
	},
	63: function(e, t, n)
	{
		var a = n(64),
			o = n(66);
		n(83)("keys", function()
		{
			return function(e)
			{
				return o(a(e))
			}
		})
	},
	64: function(e, t, n)
	{
		var a = n(65);
		e.exports = function(e)
		{
			return Object(a(e))
		}
	},
	65: function(e, t)
	{
		e.exports = function(e)
		{
			if (void 0 == e) throw TypeError("Can't call method on  " + e);
			return e
		}
	},
	66: function(e, t, n)
	{
		var a = n(67),
			o = n(82);
		e.exports = Object.keys || function(e)
		{
			return a(e, o)
		}
	},
	67: function(e, t, n)
	{
		var a = n(68),
			o = n(69),
			i = n(72)(!1),
			r = n(76)("IE_PROTO");
		e.exports = function(e, t)
		{
			var n, s = o(e),
				c = 0,
				l = [];
			for (n in s) n != r && a(s, n) && l.push(n);
			for (; t.length > c;) a(s, n = t[c++]) && (~i(l, n) || l.push(n));
			return l
		}
	},
	68: function(e, t)
	{
		var n = {}.hasOwnProperty;
		e.exports = function(e, t)
		{
			return n.call(e, t)
		}
	},
	69: function(e, t, n)
	{
		var a = n(70),
			o = n(65);
		e.exports = function(e)
		{
			return a(o(e))
		}
	},
	70: function(e, t, n)
	{
		var a = n(71);
		e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e)
		{
			return "String" == a(e) ? e.split("") : Object(e)
		}
	},
	71: function(e, t)
	{
		var n = {}.toString;
		e.exports = function(e)
		{
			return n.call(e).slice(8, -1)
		}
	},
	72: function(e, t, n)
	{
		var a = n(69),
			o = n(73),
			i = n(75);
		e.exports = function(e)
		{
			return function(t, n, r)
			{
				var s, c = a(t),
					l = o(c.length),
					u = i(r, l);
				if (e && n != n)
				{
					for (; l > u;)
						if (s = c[u++], s != s) return !0
				}
				else
					for (; l > u; u++)
						if ((e || u in c) && c[u] === n) return e || u || 0; return !e && -1
			}
		}
	},
	73: function(e, t, n)
	{
		var a = n(74),
			o = Math.min;
		e.exports = function(e)
		{
			return e > 0 ? o(a(e), 9007199254740991) : 0
		}
	},
	74: function(e, t)
	{
		var n = Math.ceil,
			a = Math.floor;
		e.exports = function(e)
		{
			return isNaN(e = +e) ? 0 : (e > 0 ? a : n)(e)
		}
	},
	75: function(e, t, n)
	{
		var a = n(74),
			o = Math.max,
			i = Math.min;
		e.exports = function(e, t)
		{
			return e = a(e), e < 0 ? o(e + t, 0) : i(e, t)
		}
	},
	76: function(e, t, n)
	{
		var a = n(77)("keys"),
			o = n(81);
		e.exports = function(e)
		{
			return a[e] || (a[e] = o(e))
		}
	},
	77: function(e, t, n)
	{
		var a = n(78),
			o = n(79),
			i = "__core-js_shared__",
			r = o[i] || (o[i] = {});
		(e.exports = function(e, t)
		{
			return r[e] || (r[e] = void 0 !== t ? t :
			{})
		})("versions", []).push(
		{
			version: a.version,
			mode: n(80) ? "pure" : "global",
			copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
		})
	},
	78: function(e, t)
	{
		var n = e.exports = {
			version: "2.6.12"
		};
		"number" == typeof __e && (__e = n)
	},
	79: function(e, t)
	{
		var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = n)
	},
	80: function(e, t)
	{
		e.exports = !0
	},
	81: function(e, t)
	{
		var n = 0,
			a = Math.random();
		e.exports = function(e)
		{
			return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + a).toString(36))
		}
	},
	82: function(e, t)
	{
		e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	},
	83: function(e, t, n)
	{
		var a = n(84),
			o = n(78),
			i = n(93);
		e.exports = function(e, t)
		{
			var n = (o.Object ||
				{})[e] || Object[e],
				r = {};
			r[e] = t(n), a(a.S + a.F * i(function()
			{
				n(1)
			}), "Object", r)
		}
	},
	84: function(e, t, n)
	{
		var a = n(79),
			o = n(78),
			i = n(85),
			r = n(87),
			s = n(68),
			c = "prototype",
			l = function(e, t, n)
			{
				var u, p, d, m = e & l.F,
					f = e & l.G,
					h = e & l.S,
					k = e & l.P,
					g = e & l.B,
					y = e & l.W,
					v = f ? o : o[t] || (o[t] = {}),
					b = v[c],
					S = f ? a : h ? a[t] : (a[t] ||
					{})[c];
				f && (n = t);
				for (u in n) p = !m && S && void 0 !== S[u], p && s(v, u) || (d = p ? S[u] : n[u], v[u] = f && "function" != typeof S[u] ? n[u] : g && p ? i(d, a) : y && S[u] == d ? function(e)
				{
					var t = function(t, n, a)
					{
						if (this instanceof e)
						{
							switch (arguments.length)
							{
								case 0:
									return new e;
								case 1:
									return new e(t);
								case 2:
									return new e(t, n)
							}
							return new e(t, n, a)
						}
						return e.apply(this, arguments)
					};
					return t[c] = e[c], t
				}(d) : k && "function" == typeof d ? i(Function.call, d) : d, k && ((v.virtual || (v.virtual = {}))[u] = d, e & l.R && b && !b[u] && r(b, u, d)))
			};
		l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
	},
	85: function(e, t, n)
	{
		var a = n(86);
		e.exports = function(e, t, n)
		{
			if (a(e), void 0 === t) return e;
			switch (n)
			{
				case 1:
					return function(n)
					{
						return e.call(t, n)
					};
				case 2:
					return function(n, a)
					{
						return e.call(t, n, a)
					};
				case 3:
					return function(n, a, o)
					{
						return e.call(t, n, a, o)
					}
			}
			return function()
			{
				return e.apply(t, arguments)
			}
		}
	},
	86: function(e, t)
	{
		e.exports = function(e)
		{
			if ("function" != typeof e) throw TypeError(e + " is not a function!");
			return e
		}
	},
	87: function(e, t, n)
	{
		var a = n(88),
			o = n(96);
		e.exports = n(92) ? function(e, t, n)
		{
			return a.f(e, t, o(1, n))
		} : function(e, t, n)
		{
			return e[t] = n, e
		}
	},
	88: function(e, t, n)
	{
		var a = n(89),
			o = n(91),
			i = n(95),
			r = Object.defineProperty;
		t.f = n(92) ? Object.defineProperty : function(e, t, n)
		{
			if (a(e), t = i(t, !0), a(n), o) try
			{
				return r(e, t, n)
			}
			catch (e)
			{}
			if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
			return "value" in n && (e[t] = n.value), e
		}
	},
	89: function(e, t, n)
	{
		var a = n(90);
		e.exports = function(e)
		{
			if (!a(e)) throw TypeError(e + " is not an object!");
			return e
		}
	},
	90: function(e, t)
	{
		e.exports = function(e)
		{
			return "object" == typeof e ? null !== e : "function" == typeof e
		}
	},
	91: function(e, t, n)
	{
		e.exports = !n(92) && !n(93)(function()
		{
			return 7 != Object.defineProperty(n(94)("div"), "a",
			{
				get: function()
				{
					return 7
				}
			}).a
		})
	},
	92: function(e, t, n)
	{
		e.exports = !n(93)(function()
		{
			return 7 != Object.defineProperty(
			{}, "a",
			{
				get: function()
				{
					return 7
				}
			}).a
		})
	},
	93: function(e, t)
	{
		e.exports = function(e)
		{
			try
			{
				return !!e()
			}
			catch (e)
			{
				return !0
			}
		}
	},
	94: function(e, t, n)
	{
		var a = n(90),
			o = n(79).document,
			i = a(o) && a(o.createElement);
		e.exports = function(e)
		{
			return i ? o.createElement(e) :
			{}
		}
	},
	95: function(e, t, n)
	{
		var a = n(90);
		e.exports = function(e, t)
		{
			if (!a(e)) return e;
			var n, o;
			if (t && "function" == typeof(n = e.toString) && !a(o = n.call(e))) return o;
			if ("function" == typeof(n = e.valueOf) && !a(o = n.call(e))) return o;
			if (!t && "function" == typeof(n = e.toString) && !a(o = n.call(e))) return o;
			throw TypeError("Can't convert object to primitive value")
		}
	},
	96: function(e, t)
	{
		e.exports = function(e, t)
		{
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	},
	97: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.BaseView = void 0;
		var o = n(98),
			i = a(o),
			r = n(99),
			s = a(r);
		t.BaseView = function()
		{
			function e(t)
			{
				(0, i.default)(this, e), t = t ||
				{}, this._setElement(t.el), this.init(t)
			}
			return (0, s.default)(e, [
			{
				key: "init",
				value: function() {}
			},
			{
				key: "_setElement",
				value: function(e)
				{
					e = e || $("body"), this.$el = e instanceof $ ? e : $(e), this.el = this.$el[0]
				}
			},
			{
				key: "$",
				value: function(e)
				{
					return this.$el.find(e)
				}
			}]), e
		}()
	},
	98: function(e, t)
	{
		"use strict";
		t.__esModule = !0, t.default = function(e, t)
		{
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
	},
	99: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}
		t.__esModule = !0;
		var o = n(100),
			i = a(o);
		t.default = function()
		{
			function e(e, t)
			{
				for (var n = 0; n < t.length; n++)
				{
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, i.default)(e, a.key, a)
				}
			}
			return function(t, n, a)
			{
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}()
	},
	100: function(e, t, n)
	{
		e.exports = {
			default: n(101),
			__esModule: !0
		}
	},
	101: function(e, t, n)
	{
		n(102);
		var a = n(78).Object;
		e.exports = function(e, t, n)
		{
			return a.defineProperty(e, t, n)
		}
	},
	102: function(e, t, n)
	{
		var a = n(84);
		a(a.S + a.F * !n(92), "Object",
		{
			defineProperty: n(88).f
		})
	},
	103: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.default = void 0;
		var o = n(104),
			i = a(o),
			r = n(98),
			s = a(r),
			c = n(99),
			l = a(c),
			u = n(60),
			p = n(125),
			d = a(p),
			m = function()
			{
				function e(t)
				{
					(0, s.default)(this, e), t = t ||
					{}, this.$actions = t.actions, this.source = t.source || "N/A", this.init()
				}
				return (0, l.default)(e, [
				{
					key: "init",
					value: function()
					{
						this.appleURL = u.APP_URLS.apple, this.googleURL = u.APP_URLS.google;
						var e = !0,
							t = !1,
							n = void 0;
						try
						{
							for (var a, o = (0, i.default)(this.$actions); !(e = (a = o.next()).done); e = !0)
							{
								var r = a.value;
								r.addEventListener("click", this.click.bind(this))
							}
						}
						catch (e)
						{
							t = !0, n = e
						}
						finally
						{
							try
							{
								!e && o.return && o.return()
							}
							finally
							{
								if (t) throw n
							}
						}
					}
				},
				{
					key: "click",
					value: function(e)
					{
						var t = d.default.apple ? "apple" : "google",
							n = $(e.currentTarget).data("vendor"),
							a = n || t;
						return this.navAppStore(a), !1
					}
				},
				{
					key: "navAppStore",
					value: function(e)
					{
						return ga("send", "event", "AppStoreButton", e, this.source), document.location = this[e + "URL"], !1
					}
				}]), e
			}();
		t.default = m
	},
	104: function(e, t, n)
	{
		e.exports = {
			default: n(105),
			__esModule: !0
		}
	},
	105: function(e, t, n)
	{
		n(106), n(120), e.exports = n(122)
	},
	106: function(e, t, n)
	{
		n(107);
		for (var a = n(79), o = n(87), i = n(110), r = n(118)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++)
		{
			var l = s[c],
				u = a[l],
				p = u && u.prototype;
			p && !p[r] && o(p, r, l), i[l] = i.Array
		}
	},
	107: function(e, t, n)
	{
		"use strict";
		var a = n(108),
			o = n(109),
			i = n(110),
			r = n(69);
		e.exports = n(111)(Array, "Array", function(e, t)
		{
			this._t = r(e), this._i = 0, this._k = t
		}, function()
		{
			var e = this._t,
				t = this._k,
				n = this._i++;
			return !e || n >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]])
		}, "values"), i.Arguments = i.Array, a("keys"), a("values"), a("entries")
	},
	108: function(e, t)
	{
		e.exports = function() {}
	},
	109: function(e, t)
	{
		e.exports = function(e, t)
		{
			return {
				value: t,
				done: !!e
			}
		}
	},
	110: function(e, t)
	{
		e.exports = {}
	},
	111: function(e, t, n)
	{
		"use strict";
		var a = n(80),
			o = n(84),
			i = n(112),
			r = n(87),
			s = n(110),
			c = n(113),
			l = n(117),
			u = n(119),
			p = n(118)("iterator"),
			d = !([].keys && "next" in [].keys()),
			m = "@@iterator",
			f = "keys",
			h = "values",
			k = function()
			{
				return this
			};
		e.exports = function(e, t, n, g, y, v, b)
		{
			c(n, t, g);
			var S, P, C, O = function(e)
				{
					if (!d && e in E) return E[e];
					switch (e)
					{
						case f:
							return function()
							{
								return new n(this, e)
							};
						case h:
							return function()
							{
								return new n(this, e)
							}
					}
					return function()
					{
						return new n(this, e)
					}
				},
				_ = t + " Iterator",
				w = y == h,
				T = !1,
				E = e.prototype,
				I = E[p] || E[m] || y && E[y],
				L = I || O(y),
				A = y ? w ? O("entries") : L : void 0,
				x = "Array" == t ? E.entries || I : I;
			if (x && (C = u(x.call(new e)), C !== Object.prototype && C.next && (l(C, _, !0), a || "function" == typeof C[p] || r(C, p, k))), w && I && I.name !== h && (T = !0, L = function()
				{
					return I.call(this)
				}), a && !b || !d && !T && E[p] || r(E, p, L), s[t] = L, s[_] = k, y)
				if (S = {
						values: w ? L : O(h),
						keys: v ? L : O(f),
						entries: A
					}, b)
					for (P in S) P in E || i(E, P, S[P]);
				else o(o.P + o.F * (d || T), t, S);
			return S
		}
	},
	112: function(e, t, n)
	{
		e.exports = n(87)
	},
	113: function(e, t, n)
	{
		"use strict";
		var a = n(114),
			o = n(96),
			i = n(117),
			r = {};
		n(87)(r, n(118)("iterator"), function()
		{
			return this
		}), e.exports = function(e, t, n)
		{
			e.prototype = a(r,
			{
				next: o(1, n)
			}), i(e, t + " Iterator")
		}
	},
	114: function(e, t, n)
	{
		var a = n(89),
			o = n(115),
			i = n(82),
			r = n(76)("IE_PROTO"),
			s = function() {},
			c = "prototype",
			l = function()
			{
				var e, t = n(94)("iframe"),
					a = i.length,
					o = "<",
					r = ">";
				for (t.style.display = "none", n(116).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(o + "script" + r + "document.F=Object" + o + "/script" + r), e.close(), l = e.F; a--;) delete l[c][i[a]];
				return l()
			};
		e.exports = Object.create || function(e, t)
		{
			var n;
			return null !== e ? (s[c] = a(e), n = new s, s[c] = null, n[r] = e) : n = l(), void 0 === t ? n : o(n, t)
		}
	},
	115: function(e, t, n)
	{
		var a = n(88),
			o = n(89),
			i = n(66);
		e.exports = n(92) ? Object.defineProperties : function(e, t)
		{
			o(e);
			for (var n, r = i(t), s = r.length, c = 0; s > c;) a.f(e, n = r[c++], t[n]);
			return e
		}
	},
	116: function(e, t, n)
	{
		var a = n(79).document;
		e.exports = a && a.documentElement
	},
	117: function(e, t, n)
	{
		var a = n(88).f,
			o = n(68),
			i = n(118)("toStringTag");
		e.exports = function(e, t, n)
		{
			e && !o(e = n ? e : e.prototype, i) && a(e, i,
			{
				configurable: !0,
				value: t
			})
		}
	},
	118: function(e, t, n)
	{
		var a = n(77)("wks"),
			o = n(81),
			i = n(79).Symbol,
			r = "function" == typeof i,
			s = e.exports = function(e)
			{
				return a[e] || (a[e] = r && i[e] || (r ? i : o)("Symbol." + e))
			};
		s.store = a
	},
	119: function(e, t, n)
	{
		var a = n(68),
			o = n(64),
			i = n(76)("IE_PROTO"),
			r = Object.prototype;
		e.exports = Object.getPrototypeOf || function(e)
		{
			return e = o(e), a(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
		}
	},
	120: function(e, t, n)
	{
		"use strict";
		var a = n(121)(!0);
		n(111)(String, "String", function(e)
		{
			this._t = String(e), this._i = 0
		}, function()
		{
			var e, t = this._t,
				n = this._i;
			return n >= t.length ?
			{
				value: void 0,
				done: !0
			} : (e = a(t, n), this._i += e.length,
			{
				value: e,
				done: !1
			})
		})
	},
	121: function(e, t, n)
	{
		var a = n(74),
			o = n(65);
		e.exports = function(e)
		{
			return function(t, n)
			{
				var i, r, s = String(o(t)),
					c = a(n),
					l = s.length;
				return c < 0 || c >= l ? e ? "" : void 0 : (i = s.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === l || (r = s.charCodeAt(c + 1)) < 56320 || r > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : (i - 55296 << 10) + (r - 56320) + 65536)
			}
		}
	},
	122: function(e, t, n)
	{
		var a = n(89),
			o = n(123);
		e.exports = n(78).getIterator = function(e)
		{
			var t = o(e);
			if ("function" != typeof t) throw TypeError(e + " is not iterable!");
			return a(t.call(e))
		}
	},
	123: function(e, t, n)
	{
		var a = n(124),
			o = n(118)("iterator"),
			i = n(110);
		e.exports = n(78).getIteratorMethod = function(e)
		{
			if (void 0 != e) return e[o] || e["@@iterator"] || i[a(e)]
		}
	},
	124: function(e, t, n)
	{
		var a = n(71),
			o = n(118)("toStringTag"),
			i = "Arguments" == a(function()
			{
				return arguments
			}()),
			r = function(e, t)
			{
				try
				{
					return e[t]
				}
				catch (e)
				{}
			};
		e.exports = function(e)
		{
			var t, n, s;
			return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = r(t = Object(e), o)) ? n : i ? a(t) : "Object" == (s = a(t)) && "function" == typeof t.callee ? "Arguments" : s
		}
	},
	125: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.Navigator = void 0;
		var o = n(98),
			i = a(o),
			r = t.Navigator = function e()
			{
				(0, i.default)(this, e), this.mobile = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent), this.apple = /iPhone|iPod|iPad/.test(navigator.userAgent), this.google = /Android/.test(navigator.userAgent), this.chrome = navigator.userAgent.indexOf("Chrome") > -1, this.explorer = navigator.userAgent.indexOf("MSIE") > -1, this.firefox = navigator.userAgent.indexOf("Firefox") > -1, this.safari = navigator.userAgent.indexOf("Safari") > -1, this.opera = navigator.userAgent.toLowerCase().indexOf("op") > -1, this.chrome && this.safari && (this.safari = !1), this.chrome && this.opera && (this.chrome = !1)
			};
		t.default = new r
	},
	127: function(e, t, n)
	{
		e.exports = {
			default: n(128),
			__esModule: !0
		}
	},
	128: function(e, t, n)
	{
		n(129), e.exports = n(78).Object.getPrototypeOf
	},
	129: function(e, t, n)
	{
		var a = n(64),
			o = n(119);
		n(83)("getPrototypeOf", function()
		{
			return function(e)
			{
				return o(a(e))
			}
		})
	},
	130: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}
		t.__esModule = !0;
		var o = n(131),
			i = a(o);
		t.default = function(e, t)
		{
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0, i.default)(t)) && "function" != typeof t ? e : t
		}
	},
	131: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}
		t.__esModule = !0;
		var o = n(132),
			i = a(o),
			r = n(135),
			s = a(r),
			c = "function" == typeof s.default && "symbol" == typeof i.default ? function(e)
			{
				return typeof e
			} : function(e)
			{
				return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e
			};
		t.default = "function" == typeof s.default && "symbol" === c(i.default) ? function(e)
		{
			return "undefined" == typeof e ? "undefined" : c(e)
		} : function(e)
		{
			return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : c(e)
		}
	},
	132: function(e, t, n)
	{
		e.exports = {
			default: n(133),
			__esModule: !0
		}
	},
	133: function(e, t, n)
	{
		n(120), n(106), e.exports = n(134).f("iterator")
	},
	134: function(e, t, n)
	{
		t.f = n(118)
	},
	135: function(e, t, n)
	{
		e.exports = {
			default: n(136),
			__esModule: !0
		}
	},
	136: function(e, t, n)
	{
		n(137), n(147), n(148), n(149), e.exports = n(78).Symbol
	},
	137: function(e, t, n)
	{
		"use strict";
		var a = n(79),
			o = n(68),
			i = n(92),
			r = n(84),
			s = n(112),
			c = n(138).KEY,
			l = n(93),
			u = n(77),
			p = n(117),
			d = n(81),
			m = n(118),
			f = n(134),
			h = n(139),
			k = n(140),
			g = n(143),
			y = n(89),
			v = n(90),
			b = n(64),
			S = n(69),
			P = n(95),
			C = n(96),
			O = n(114),
			_ = n(144),
			w = n(146),
			T = n(141),
			E = n(88),
			I = n(66),
			L = w.f,
			A = E.f,
			x = _.f,
			N = a.Symbol,
			M = a.JSON,
			j = M && M.stringify,
			z = "prototype",
			U = m("_hidden"),
			D = m("toPrimitive"),
			K = {}.propertyIsEnumerable,
			R = u("symbol-registry"),
			B = u("symbols"),
			G = u("op-symbols"),
			F = Object[z],
			q = "function" == typeof N && !!T.f,
			Y = a.QObject,
			V = !Y || !Y[z] || !Y[z].findChild,
			H = i && l(function()
			{
				return 7 != O(A(
				{}, "a",
				{
					get: function()
					{
						return A(this, "a",
						{
							value: 7
						}).a
					}
				})).a
			}) ? function(e, t, n)
			{
				var a = L(F, t);
				a && delete F[t], A(e, t, n), a && e !== F && A(F, t, a)
			} : A,
			W = function(e)
			{
				var t = B[e] = O(N[z]);
				return t._k = e, t
			},
			J = q && "symbol" == typeof N.iterator ? function(e)
			{
				return "symbol" == typeof e
			} : function(e)
			{
				return e instanceof N
			},
			$ = function(e, t, n)
			{
				return e === F && $(G, t, n), y(e), t = P(t, !0), y(n), o(B, t) ? (n.enumerable ? (o(e, U) && e[U][t] && (e[U][t] = !1), n = O(n,
				{
					enumerable: C(0, !1)
				})) : (o(e, U) || A(e, U, C(1,
				{})), e[U][t] = !0), H(e, t, n)) : A(e, t, n)
			},
			X = function(e, t)
			{
				y(e);
				for (var n, a = k(t = S(t)), o = 0, i = a.length; i > o;) $(e, n = a[o++], t[n]);
				return e
			},
			Q = function(e, t)
			{
				return void 0 === t ? O(e) : X(O(e), t)
			},
			Z = function(e)
			{
				var t = K.call(this, e = P(e, !0));
				return !(this === F && o(B, e) && !o(G, e)) && (!(t || !o(this, e) || !o(B, e) || o(this, U) && this[U][e]) || t)
			},
			ee = function(e, t)
			{
				if (e = S(e), t = P(t, !0), e !== F || !o(B, t) || o(G, t))
				{
					var n = L(e, t);
					return !n || !o(B, t) || o(e, U) && e[U][t] || (n.enumerable = !0), n
				}
			},
			te = function(e)
			{
				for (var t, n = x(S(e)), a = [], i = 0; n.length > i;) o(B, t = n[i++]) || t == U || t == c || a.push(t);
				return a
			},
			ne = function(e)
			{
				for (var t, n = e === F, a = x(n ? G : S(e)), i = [], r = 0; a.length > r;) !o(B, t = a[r++]) || n && !o(F, t) || i.push(B[t]);
				return i
			};
		q || (N = function()
		{
			if (this instanceof N) throw TypeError("Symbol is not a constructor!");
			var e = d(arguments.length > 0 ? arguments[0] : void 0),
				t = function(n)
				{
					this === F && t.call(G, n), o(this, U) && o(this[U], e) && (this[U][e] = !1), H(this, e, C(1, n))
				};
			return i && V && H(F, e,
			{
				configurable: !0,
				set: t
			}), W(e)
		}, s(N[z], "toString", function()
		{
			return this._k
		}), w.f = ee, E.f = $, n(145).f = _.f = te, n(142).f = Z, T.f = ne, i && !n(80) && s(F, "propertyIsEnumerable", Z, !0), f.f = function(e)
		{
			return W(m(e))
		}), r(r.G + r.W + r.F * !q,
		{
			Symbol: N
		});
		for (var ae = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), oe = 0; ae.length > oe;) m(ae[oe++]);
		for (var ie = I(m.store), re = 0; ie.length > re;) h(ie[re++]);
		r(r.S + r.F * !q, "Symbol",
		{
			for: function(e)
			{
				return o(R, e += "") ? R[e] : R[e] = N(e)
			},
			keyFor: function(e)
			{
				if (!J(e)) throw TypeError(e + " is not a symbol!");
				for (var t in R)
					if (R[t] === e) return t
			},
			useSetter: function()
			{
				V = !0
			},
			useSimple: function()
			{
				V = !1
			}
		}), r(r.S + r.F * !q, "Object",
		{
			create: Q,
			defineProperty: $,
			defineProperties: X,
			getOwnPropertyDescriptor: ee,
			getOwnPropertyNames: te,
			getOwnPropertySymbols: ne
		});
		var se = l(function()
		{
			T.f(1)
		});
		r(r.S + r.F * se, "Object",
		{
			getOwnPropertySymbols: function(e)
			{
				return T.f(b(e))
			}
		}), M && r(r.S + r.F * (!q || l(function()
		{
			var e = N();
			return "[null]" != j([e]) || "{}" != j(
			{
				a: e
			}) || "{}" != j(Object(e))
		})), "JSON",
		{
			stringify: function(e)
			{
				for (var t, n, a = [e], o = 1; arguments.length > o;) a.push(arguments[o++]);
				if (n = t = a[1], (v(t) || void 0 !== e) && !J(e)) return g(t) || (t = function(e, t)
				{
					if ("function" == typeof n && (t = n.call(this, e, t)), !J(t)) return t
				}), a[1] = t, j.apply(M, a)
			}
		}), N[z][D] || n(87)(N[z], D, N[z].valueOf), p(N, "Symbol"), p(Math, "Math", !0), p(a.JSON, "JSON", !0)
	},
	138: function(e, t, n)
	{
		var a = n(81)("meta"),
			o = n(90),
			i = n(68),
			r = n(88).f,
			s = 0,
			c = Object.isExtensible || function()
			{
				return !0
			},
			l = !n(93)(function()
			{
				return c(Object.preventExtensions(
				{}))
			}),
			u = function(e)
			{
				r(e, a,
				{
					value:
					{
						i: "O" + ++s,
						w:
						{}
					}
				})
			},
			p = function(e, t)
			{
				if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
				if (!i(e, a))
				{
					if (!c(e)) return "F";
					if (!t) return "E";
					u(e)
				}
				return e[a].i
			},
			d = function(e, t)
			{
				if (!i(e, a))
				{
					if (!c(e)) return !0;
					if (!t) return !1;
					u(e)
				}
				return e[a].w
			},
			m = function(e)
			{
				return l && f.NEED && c(e) && !i(e, a) && u(e), e
			},
			f = e.exports = {
				KEY: a,
				NEED: !1,
				fastKey: p,
				getWeak: d,
				onFreeze: m
			}
	},
	139: function(e, t, n)
	{
		var a = n(79),
			o = n(78),
			i = n(80),
			r = n(134),
			s = n(88).f;
		e.exports = function(e)
		{
			var t = o.Symbol || (o.Symbol = i ?
			{} : a.Symbol ||
			{});
			"_" == e.charAt(0) || e in t || s(t, e,
			{
				value: r.f(e)
			})
		}
	},
	140: function(e, t, n)
	{
		var a = n(66),
			o = n(141),
			i = n(142);
		e.exports = function(e)
		{
			var t = a(e),
				n = o.f;
			if (n)
				for (var r, s = n(e), c = i.f, l = 0; s.length > l;) c.call(e, r = s[l++]) && t.push(r);
			return t
		}
	},
	141: function(e, t)
	{
		t.f = Object.getOwnPropertySymbols
	},
	142: function(e, t)
	{
		t.f = {}.propertyIsEnumerable
	},
	143: function(e, t, n)
	{
		var a = n(71);
		e.exports = Array.isArray || function(e)
		{
			return "Array" == a(e)
		}
	},
	144: function(e, t, n)
	{
		var a = n(69),
			o = n(145).f,
			i = {}.toString,
			r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
			s = function(e)
			{
				try
				{
					return o(e)
				}
				catch (e)
				{
					return r.slice()
				}
			};
		e.exports.f = function(e)
		{
			return r && "[object Window]" == i.call(e) ? s(e) : o(a(e))
		}
	},
	145: function(e, t, n)
	{
		var a = n(67),
			o = n(82).concat("length", "prototype");
		t.f = Object.getOwnPropertyNames || function(e)
		{
			return a(e, o)
		}
	},
	146: function(e, t, n)
	{
		var a = n(142),
			o = n(96),
			i = n(69),
			r = n(95),
			s = n(68),
			c = n(91),
			l = Object.getOwnPropertyDescriptor;
		t.f = n(92) ? l : function(e, t)
		{
			if (e = i(e), t = r(t, !0), c) try
			{
				return l(e, t)
			}
			catch (e)
			{}
			if (s(e, t)) return o(!a.f.call(e, t), e[t])
		}
	},
	147: function(e, t) {},
	148: function(e, t, n)
	{
		n(139)("asyncIterator")
	},
	149: function(e, t, n)
	{
		n(139)("observable")
	},
	150: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}
		t.__esModule = !0;
		var o = n(151),
			i = a(o),
			r = n(155),
			s = a(r),
			c = n(131),
			l = a(c);
		t.default = function(e, t)
		{
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, l.default)(t)));
			e.prototype = (0, s.default)(t && t.prototype,
			{
				constructor:
				{
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
		}
	},
	151: function(e, t, n)
	{
		e.exports = {
			default: n(152),
			__esModule: !0
		}
	},
	152: function(e, t, n)
	{
		n(153), e.exports = n(78).Object.setPrototypeOf
	},
	153: function(e, t, n)
	{
		var a = n(84);
		a(a.S, "Object",
		{
			setPrototypeOf: n(154).set
		})
	},
	154: function(e, t, n)
	{
		var a = n(90),
			o = n(89),
			i = function(e, t)
			{
				if (o(e), !a(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
			};
		e.exports = {
			set: Object.setPrototypeOf || ("__proto__" in
			{} ? function(e, t, a)
			{
				try
				{
					a = n(85)(Function.call, n(146).f(Object.prototype, "__proto__").set, 2), a(e, []), t = !(e instanceof Array)
				}
				catch (e)
				{
					t = !0
				}
				return function(e, n)
				{
					return i(e, n), t ? e.__proto__ = n : a(e, n), e
				}
			}(
			{}, !1) : void 0),
			check: i
		}
	},
	155: function(e, t, n)
	{
		e.exports = {
			default: n(156),
			__esModule: !0
		}
	},
	156: function(e, t, n)
	{
		n(157);
		var a = n(78).Object;
		e.exports = function(e, t)
		{
			return a.create(e, t)
		}
	},
	157: function(e, t, n)
	{
		var a = n(84);
		a(a.S, "Object",
		{
			create: n(114)
		})
	},
	297: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}

		function o(e)
		{
			! function(e, t, n)
			{
				if (!e.snaptr)
				{
					var a = e.snaptr = function()
					{
						a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
					};
					a.queue = [];
					var o = "script",
						i = t.createElement(o);
					i.async = !0, i.src = n;
					var r = t.getElementsByTagName(o)[0];
					r.parentNode.insertBefore(i, r)
				}
			}(window, document, "https://sc-static.net/scevent.min.js"), snaptr("init", "6c9d82ca-4a3a-4391-98ba-0317a8471296", (0, r.default)(
			{
				sync_modes: [100]
			}, e &&
			{
				user_phone_number: e
			})), /snapchat/i.test(navigator.userAgent) || snaptr("track", "PAGE_VIEW");
			var t = document.getElementById("deeplink");
			t && t.addEventListener("click", function()
			{
				snaptr("track", "VIEW_CONTENT")
			})
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		});
		var i = n(298),
			r = a(i);
		t.enableSnapAnalytics = o;
		n(303)
	},
	298: function(e, t, n)
	{
		"use strict";

		function a(e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}
		t.__esModule = !0;
		var o = n(299),
			i = a(o);
		t.default = i.default || function(e)
		{
			for (var t = 1; t < arguments.length; t++)
			{
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}
	},
	299: function(e, t, n)
	{
		e.exports = {
			default: n(300),
			__esModule: !0
		}
	},
	300: function(e, t, n)
	{
		n(301), e.exports = n(78).Object.assign
	},
	301: function(e, t, n)
	{
		var a = n(84);
		a(a.S + a.F, "Object",
		{
			assign: n(302)
		})
	},
	302: function(e, t, n)
	{
		"use strict";
		var a = n(92),
			o = n(66),
			i = n(141),
			r = n(142),
			s = n(64),
			c = n(70),
			l = Object.assign;
		e.exports = !l || n(93)(function()
		{
			var e = {},
				t = {},
				n = Symbol(),
				a = "abcdefghijklmnopqrst";
			return e[n] = 7, a.split("").forEach(function(e)
			{
				t[e] = e
			}), 7 != l(
			{}, e)[n] || Object.keys(l(
			{}, t)).join("") != a
		}) ? function(e, t)
		{
			for (var n = s(e), l = arguments.length, u = 1, p = i.f, d = r.f; l > u;)
				for (var m, f = c(arguments[u++]), h = p ? o(f).concat(p(f)) : o(f), k = h.length, g = 0; k > g;) m = h[g++], a && !d.call(f, m) || (n[m] = f[m]);
			return n
		} : l
	},
	303: function(e, t)
	{
		"use strict";

		function n(e)
		{
			function t(e)
			{
				return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1")
			}
			var n = document.cookie.match(RegExp("(?:^|;\\s*)" + t(e) + "=([^;]*)"));
			return n ? JSON.parse(n[1]) : void 0
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.hasCookie = n
	},
	2883: function(e, t)
	{
		"use strict";

		function n(e)
		{
			e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
				n = t.exec(location.href);
			return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
		}
		Object.defineProperty(t, "__esModule",
		{
			value: !0
		}), t.getParameterByName = n
	}
});