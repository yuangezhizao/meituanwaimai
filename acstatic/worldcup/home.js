!function(t) {
    function e(e) {
        for (var n, r, s = e[0], c = e[1], d = e[2], u = 0, m = []; u < s.length; u++)
            r = s[u],
            o[r] && m.push(o[r][0]),
            o[r] = 0;
        for (n in c)
            Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        for (l && l(e); m.length; )
            m.shift()();
        return i.push.apply(i, d || []),
        a()
    }
    function a() {
        for (var t, e = 0; e < i.length; e++) {
            for (var a = i[e], n = !0, s = 1; s < a.length; s++) {
                var c = a[s];
                0 !== o[c] && (n = !1)
            }
            n && (i.splice(e--, 1),
            t = r(r.s = a[0]))
        }
        return t
    }
    var n = {}
      , o = {
        5: 0
    }
      , i = [];
    function r(e) {
        if (n[e])
            return n[e].exports;
        var a = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, r),
        a.l = !0,
        a.exports
    }
    r.m = t,
    r.c = n,
    r.d = function(t, e, a) {
        r.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }
    ,
    r.r = function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "";
    var s = window.webpackJsonp = window.webpackJsonp || []
      , c = s.push.bind(s);
    s.push = e,
    s = s.slice();
    for (var d = 0; d < s.length; d++)
        e(s[d]);
    var l = c;
    i.push([258, 0]),
    a()
}(Array(46).concat([function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "dialogHint",
        components: {},
        props: ["hintInfo"],
        data: function() {
            return {}
        },
        methods: {
            closeHint: function() {
                this.hintInfo.showHintDialog = !1
            }
        }
    }
}
, , function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(a(13))
      , o = r(a(12))
      , i = r(a(8));
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        name: "dialogTimesOut",
        components: {
            myButton: n.default
        },
        props: ["commonInfo", "diceCardInfo"],
        data: function() {
            return {
                _resData: null
            }
        },
        methods: {
            closeInvite: function() {
                this.diceCardInfo.showTimesOutDialog = !1
            },
            shareToGroup: function() {
                i.default.LXupload({
                    bid: "b_f5x2s88i"
                }),
                o.default.share({
                    env: this.commonInfo.environment,
                    title: "和我一起集16强，新玩家4次抽卡机会！",
                    desc: "集齐16张球队卡，得66元现金！点击立即参与~",
                    link: o.default.getShareUrl("home") + "shareUserIdSecret=" + this.commonInfo.selfUserIdSecret,
                    params: "shareUserIdSecret=" + this.commonInfo.selfUserIdSecret,
                    icon: "https://p0.meituan.net/travelcube/f30eaa693dcf8b58157db7d5879818e88843.jpg"
                }),
                this.closeInvite(),
                "wechat" == this.commonInfo.environment && this.$emit("onShowGuide", 1)
            }
        }
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(a(13))
      , o = r(a(12))
      , i = r(a(8));
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        name: "dialogNew",
        components: {
            myButton: n.default
        },
        props: ["commonInfo", "diceCardInfo"],
        data: function() {
            return {
                _resData: null
            }
        },
        methods: {
            firstShare: function() {
                var t = this;
                i.default.ajax({
                    url: "/o/ccg/home/firstAward",
                    type: "post",
                    data: {
                        selfUserIdSecret: t.commonInfo.selfUserIdSecret
                    },
                    success: function(e) {
                        t._resData = e,
                        o.default.share({
                            env: t.commonInfo.environment,
                            title: "和我一起集16强，新玩家4次抽卡机会！",
                            desc: "集齐16张球队卡，得66元现金！点击立即参与~",
                            link: o.default.getShareUrl("home") + "shareUserIdSecret=" + t.commonInfo.selfUserIdSecret,
                            params: "shareUserIdSecret=" + t.commonInfo.selfUserIdSecret,
                            icon: "https://p0.meituan.net/travelcube/f30eaa693dcf8b58157db7d5879818e88843.jpg"
                        }),
                        t.firstShareCallback.call(t),
                        "wechat" == t.commonInfo.environment && (t.$emit("close-welfare"),
                        t.$emit("onShowGuide", 1))
                    },
                    error: function(e) {
                        t.$toasted.show(e)
                    }
                })
            },
            firstShareCallback: function() {
                var t = this._resData;
                this.$emit("onCloseGuide"),
                this.$emit("close-welfare"),
                0 == t.code ? ("wechat" == this.commonInfo.environment && this.$toasted.show("恭喜你又获得2次抽卡机会"),
                this.diceCardInfo.timesLeft = t.data.remainTakeCount) : "wechat" == this.commonInfo.environment && this.$toasted.show(t.msg)
            },
            shareToGroup: function() {
                i.default.LXupload({
                    bid: "b_f5x2s88i"
                }),
                this.firstShare()
            }
        }
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "couponTicket",
        props: ["couponInfo"],
        data: function() {}
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = s(a(13))
      , o = s(a(219))
      , i = s(a(8))
      , r = s(a(12));
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        name: "dialogExchange",
        components: {
            myButton: n.default,
            couponTicket: o.default
        },
        props: ["exchangeInfo", "commonInfo"],
        data: function() {
            return {
                type: 0
            }
        },
        computed: {
            isOppo: function() {
                return navigator.userAgent.indexOf("OPPO") > -1
            }
        },
        methods: {
            changePayType: function(t) {
                this.type = t
            },
            getLocation: function() {
                i.default.hasLocation || "wechat" == this.commonInfo.environment && wx.getLocation({
                    type: "wgs84",
                    success: function(t) {
                        i.default.updateComParams({
                            wm_latitude: t.latitude,
                            wm_longitude: t.longitude,
                            wm_actual_longitude: t.longitude,
                            wm_actual_latitude: t.latitude
                        })
                    }
                })
            },
            encodedHref: function() {
                return location.origin + location.pathname + "?" + encodeURIComponent(location.search.replace(/^\?/, ""))
            },
            grabMoney: function() {
                var t = this;
                i.default.ajax({
                    url: "/o/ccg/exchange/withdraw",
                    type: "post",
                    data: {
                        payType: this.type
                    },
                    success: function(e) {
                        0 == e.code ? e.data && 1 == e.data.payStatus ? (t.$toasted.show("领取成功~"),
                        t.$emit("updateExchangeInfo", {
                            showExchangeDialog: !1,
                            exchangeStatus: 2,
                            couponMount: e.data.money,
                            payType: t.type
                        })) : e.data && 5 == e.data.payStatus ? ($.cookie("token", i.default.getToken()),
                        location.href = r.default.getBindCardDomain() + "/resource/icashier/s/bindcard.html?bindcard_source=independent&iph_pay_merchant_no=" + e.data.bindCardParams.iph_pay_merchant_no + "&bindcard_success_url=" + t.encodedHref() + "&nb_show_nav=0&auth=v2&nb_ci=" + e.data.bindCardParams.nb_ci + "&ext_param=" + encodeURIComponent(JSON.stringify({
                            entry: "wm_ccg"
                        })) + "&ext_dim_stat=" + encodeURIComponent(JSON.stringify({
                            entry: "wm_ccg"
                        }))) : (t.$emit("updateExchangeInfo", {
                            showExchangeDialog: !1
                        }),
                        t.$toasted.show("领取失败~" + e.msg)) : (t.$emit("updateExchangeInfo", {
                            showExchangeDialog: !1
                        }),
                        t.$toasted.show("领取失败~" + e.msg || ",服务器异常"))
                    }
                })
            }
        }
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = s(a(13))
      , o = s(a(12))
      , i = s(a(8))
      , r = s(a(10));
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        name: "dialogTimeTask",
        components: {
            myButton: n.default
        },
        props: ["timeTaskInfo", "commonInfo"],
        data: function() {
            return {
                rawSecs: 0,
                secLeft: "      "
            }
        },
        methods: {
            goBtn: function() {
                i.default.LXupload({
                    bid: "b_xlykeehc"
                });
                switch (+this.timeTaskInfo.taskType) {
                case 20011:
                case 20016:
                    o.default.share({
                        env: this.commonInfo.environment,
                        title: "集齐16张球队卡，得66元现金！",
                        desc: "新玩家参与立得4次抽卡机会，点击立即参与~",
                        link: o.default.getShareUrl("home") + "shareUserIdSecret=" + this.commonInfo.selfUserIdSecret,
                        params: "shareUserIdSecret=" + this.commonInfo.selfUserIdSecret,
                        icon: "https://p0.meituan.net/travelcube/f30eaa693dcf8b58157db7d5879818e88843.jpg"
                    }),
                    "wechat" == this.commonInfo.environment && (this.$emit("close-timetask"),
                    this.$emit("onShowGuide", 1));
                    break;
                case 20012:
                    o.default.share({
                        env: this.commonInfo.environment,
                        title: "15元外卖红包，点击免费领取",
                        desc: "美团外卖新人专享，领完再去下单吧！",
                        link: this.timeTaskInfo.inviteUrl,
                        icon: "https://p0.meituan.net/travelcube/7b60a88ad23e509abbd01bd92a21ca372930.png"
                    }),
                    "wechat" == this.commonInfo.environment && (this.$emit("close-timetask"),
                    this.$emit("onShowGuide", 1));
                    break;
                case 20015:
                    switch (this.commonInfo.environment) {
                    case "waimai":
                        location.href = "meituanwaimai://waimai.meituan.com/" + (r.default.versions.android ? "welcome" : "pois");
                        break;
                    case "meituan":
                        location.href = "imeituan://www.meituan.com/takeout/homepage";
                        break;
                    default:
                        location.href = "/acstatic/worldcup/relay?type=1"
                    }
                }
            }
        },
        mounted: function() {
            this.rawSecs = parseInt((this.timeTaskInfo.endTime - this.timeTaskInfo.startTime) / 1e3);
            var t = this.rawSecs
              , e = null
              , a = this;
            function n() {
                t <= 0 && clearInterval(e);
                var n = 0
                  , o = 0
                  , i = 0
                  , r = 0;
                t > 0 && (n = Math.floor(t / 86400),
                o = Math.floor(t / 3600) - 24 * n,
                i = Math.floor(t / 60) - 24 * n * 60 - 60 * o,
                r = Math.floor(t) - 24 * n * 60 * 60 - 60 * o * 60 - 60 * i),
                n <= 9 && (n = "0" + n),
                o <= 9 && (o = "0" + o),
                i <= 9 && (i = "0" + i),
                r <= 9 && (r = "0" + r),
                a.secLeft = "" + o + i + r,
                t--
            }
            n(),
            e = setInterval(n, 1e3),
            i.default.LXupload({
                type: "moduleView",
                bid: "b_yi3wkk9p",
                custom: {
                    task_id: this.timeTaskInfo.taskType
                }
            })
        }
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = c(a(13))
      , o = c(a(22))
      , i = c(a(35))
      , r = c(a(8))
      , s = c(a(12));
    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        name: "dialogShare",
        components: {
            myButton: n.default,
            teamCard: o.default
        },
        props: ["shareCardInfo", "commonInfo"],
        data: function() {
            return {}
        },
        computed: {
            headNickName: function() {
                return s.default.filterNickName(this.shareCardInfo.nickName, 10)
            },
            sendCardInfo: function() {
                return this.shareCardInfo.sendCardInfo
            },
            begCardInfo: function() {
                return this.shareCardInfo.begCardInfo
            },
            cardsList: function() {
                return this.shareCardInfo.isBeg ? [{
                    type: this.begCardInfo.begCardType,
                    num: 1
                }] : this.commonInfo.isLogin && this.shareCardInfo.isSelf ? this.sendCardInfo.sendCardsList : this.sendCardInfo.sendCardsList.filter(function(t) {
                    return t.num > 0
                })
            }
        },
        methods: {
            getNameByType: function(t) {
                return i.default.getNameByType(t)
            },
            getCards: function() {
                var t = this;
                r.default.ajax({
                    url: "/o/ccg/giveCard/receive",
                    type: "post",
                    data: {
                        secretKey: this.commonInfo.secretKey
                    },
                    success: function(e) {
                        0 == e.code && (r.default.LXupload({
                            bid: "b_7hizzc6e",
                            custom: {
                                collect_card_status: e.data.status
                            }
                        }),
                        0 == e.data.status ? (t.$emit("onCloseShareCard"),
                        t.$emit("updateFromShare", 1, e.data.cardList, {
                            firstReach: e.data.firstReach,
                            globalRank: e.data.globalRank
                        }),
                        t.$toasted.show("恭喜你领到" + e.data.count + "张卡")) : 1 == e.data.status ? t.$emit("updateFromShare", 1, e.data.cardList, {
                            isAllHave: !0
                        }) : (t.$emit("onCloseShareCard"),
                        t.$toasted.show("你来晚了，卡已经被领走啦")))
                    },
                    error: function() {
                        t.$toasted.show("领取失败，请稍后再试")
                    }
                })
            },
            giveCards: function() {
                var t = this;
                r.default.ajax({
                    url: "/o/ccg/begCard/begGiveCard",
                    type: "post",
                    data: {
                        secretKey: t.commonInfo.secretKey
                    },
                    success: function(e) {
                        0 == e.code ? (t.$emit("updateFromShare", 1, e.data.cardList, {}),
                        t.$emit("onCloseShareCard"),
                        t.$toasted.show("送卡成功")) : (t.$emit("updateFromShare", 1, e.data.cardList, {}),
                        t.$toasted.show("送卡失败," + e.msg))
                    },
                    error: function() {
                        t.$toasted.show("送卡失败，请稍后再试")
                    }
                })
            },
            giveCardsAgain: function() {
                s.default.share({
                    env: this.commonInfo.environment,
                    title: (this.shareCardInfo.nickName ? s.default.filterNickName(this.shareCardInfo.nickName) : "") + "送你" + this.sendCardInfo.cardNum + "张球队卡，集齐16强得66元现金！",
                    desc: "听说朋友圈有95%的人都在玩，就差你了！",
                    link: s.default.getShareUrl("give") + "shareCardStatus=2&&secretKey=" + this.commonInfo.secretKey,
                    params: "shareCardStatus=2&&secretKey=" + this.commonInfo.secretKey,
                    icon: "https://p0.meituan.net/travelcube/a0919dbbe39c4bce03227e4092b138c48281.jpg",
                    miniImage: "https://p0.meituan.net/travelcube/b218913787102578445b0c8d6cc725c483159.jpg"
                }),
                "wechat" == this.commonInfo.environment ? (this.$emit("onCloseShareCard"),
                this.$emit("onShowGuide", 1)) : this.$toasted.show("只能在微信客户端打开链接")
            },
            begCardAgain: function() {
                s.default.share({
                    env: this.commonInfo.environment,
                    title: "请你赐我一张" + this.begCardInfo.begCardName + "卡，集齐16张球队卡得66元现金！",
                    desc: "听说朋友圈有95%的人都在玩，就差你了！",
                    link: s.default.getShareUrl("ask") + "shareCardStatus=1&&secretKey=" + this.commonInfo.secretKey,
                    params: "shareCardStatus=1&&secretKey=" + this.commonInfo.secretKey,
                    icon: "https://p0.meituan.net/travelcube/be7806a0c778a5c73a5c7b55838ce3048076.jpg",
                    miniImage: "https://p1.meituan.net/travelcube/13420a4cac29c2010da77c83d72c7c8882412.jpg"
                }),
                "wechat" == this.commonInfo.environment ? (this.$emit("onCloseShareCard"),
                this.$emit("onShowGuide", 1)) : this.$toasted.show("只能在微信客户端打开链接")
            },
            goShareRecordPage: function(t) {
                1 == t ? (r.default.LXupload({
                    bid: "b_320jsp1f"
                }),
                location.href = "/acstatic/worldcup/card_detail?pageType=lingka&&" + location.search.replace(/^\?/, "")) : (r.default.LXupload({
                    bid: "b_efhigysw"
                }),
                location.href = "/acstatic/worldcup/card_detail?pageType=songka&&" + location.search.replace(/^\?/, ""))
            },
            goLogin: function(t) {
                1 == t ? r.default.LXupload({
                    bid: "b_caa652b7"
                }) : r.default.LXupload({
                    bid: "b_yrvrbbtl"
                }),
                this.$emit("goLogin")
            }
        }
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "cardDiceCoupon",
        props: ["couponInfo"]
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var a = arguments[e];
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n])
        }
        return t
    }
      , o = l(a(13))
      , i = l(a(22))
      , r = l(a(231))
      , s = l(a(8))
      , c = l(a(12))
      , d = l(a(10));
    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        name: "dialogDice",
        components: {
            myButton: o.default,
            teamCard: i.default,
            cardDiceCoupon: r.default
        },
        props: ["diceCardInfo", "commonInfo"],
        computed: {},
        data: function() {
            return {
                isFront: !1,
                isAjaxing: !1,
                cardShowTime: 1e3,
                cardType: 0,
                teamCardInfo: {
                    teamCardType: "A"
                },
                couponCardDetail: {
                    couponViewId: "123",
                    couponDisplayName: "新客首单红包",
                    couponType: 1,
                    couponSource: 1,
                    couponLogoPic: "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/dice_coupon_logo.png",
                    mount: 10,
                    useCondition: "满45可用",
                    useDesc: "6天后过期，只限北京地区"
                },
                sceneDesc: {
                    sceneId: 123,
                    imgUrl: "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/dialog/scene1.png"
                },
                activityDetail: {
                    activityUrl: "",
                    activityId: 123,
                    imgUrl: "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/dialog/activity_card.png"
                },
                resData: null,
                animateData: {
                    showBgOther: !0,
                    disappear: !1
                }
            }
        },
        methods: {
            initShow: function() {
                s.default.LXupload({
                    type: "moduleView",
                    bid: "b_7qa1xvmh"
                }),
                this.animateData.showBgOther = !0,
                this.animateData.disappear = !1
            },
            openDice: function() {
                if (this.isAjaxing)
                    this.$toasted.show("您点击太频繁了，喝口水歇歇~");
                else {
                    s.default.LXupload({
                        bid: "b_k0yiafrm"
                    });
                    var t = this;
                    t.isAjaxing = !0;
                    var e = {};
                    "waimai" == this.commonInfo.environment || "meituan" == this.commonInfo.environment ? e.fingerprint = this.commonInfo.fingerprint : "wechat" == this.commonInfo.environment && (e.fingerprint = "wechat_finger"),
                    this.commonInfo.shareUserIdSecret && n(e, {
                        shareUserIdSecret: this.commonInfo.shareUserIdSecret
                    }),
                    s.default.ajax({
                        url: "/o/ccg/home/takeCard",
                        type: "post",
                        data: e,
                        success: function(e) {
                            if (t.isAjaxing = !1,
                            0 == e.code) {
                                var a = e.data;
                                switch (t.cardType = a.cardType,
                                t.cardType) {
                                case 0:
                                    t.teamCardInfo.teamCardType = a.teamCardType,
                                    s.default.LXupload({
                                        type: "moduleView",
                                        bid: "b_ugchrar1"
                                    });
                                    break;
                                case 1:
                                    s.default.LXupload({
                                        type: "moduleView",
                                        bid: "b_fle5fom7"
                                    }),
                                    n(t.couponCardDetail, {
                                        couponViewId: a.couponCardDetail.couponViewId,
                                        couponDisplayName: a.couponCardDetail.couponDisplayName,
                                        couponType: a.couponCardDetail.couponType,
                                        mount: +a.couponCardDetail.couponAmountOrDiscount,
                                        couponLogoPic: a.couponCardDetail.couponLogoPic || "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/dice_coupon_logo.png",
                                        couponSource: a.couponCardDetail.couponSource,
                                        useCondition: 1 == a.couponCardDetail.couponType ? 0 == a.couponCardDetail.orderAmountLimitOrMaxDeduction ? "无门槛使用" : "满" + +a.couponCardDetail.orderAmountLimitOrMaxDeduction + "可用" : "最高可抵扣" + +a.couponCardDetail.orderAmountLimitOrMaxDeduction,
                                        useDesc: a.couponCardDetail.useCondition
                                    });
                                    break;
                                case 2:
                                    s.default.LXupload({
                                        type: "moduleView",
                                        bid: "b_7acrkauz",
                                        custom: {
                                            scene_id: a.sceneId
                                        }
                                    }),
                                    n(t.sceneDesc, {
                                        sceneId: a.sceneId,
                                        imgUrl: a.sceneDesc || "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/dialog/scene1.png"
                                    });
                                    break;
                                case 3:
                                    s.default.LXupload({
                                        type: "moduleView",
                                        bid: "b_3wwnznyc",
                                        custom: {
                                            card_id: a.activityId
                                        }
                                    }),
                                    n(t.activityDetail, {
                                        activityUrl: a.activityUrl,
                                        imgUrl: a.activityPicUrl,
                                        activityId: a.activityId
                                    })
                                }
                                t.resData = a,
                                t.isFront = !0,
                                0 == t.cardType ? setTimeout(function() {
                                    t.goGetTeamCard()
                                }, t.cardShowTime) : 2 != t.cardType && 3 != t.cardType || (t.$toasted.show("很遗憾，没有抽到球队卡"),
                                t._updateInfo())
                            } else
                                3302 == e.code ? t.$toasted.show("你没有抽卡机会啦，做任务得抽卡机会") : t.$toasted.show("抽卡失败," + e.msg)
                        },
                        error: function(e) {
                            t.isAjaxing = !1,
                            t.$toasted.show("网络异常，请稍后重试哦")
                        }
                    })
                }
            },
            goGetTeamCard: function() {
                this.animateData.showBgOther = !1,
                this.animateData.disappear = !0
            },
            _updateInfo: function() {
                var t = this.resData;
                this.$emit("updateFromDice", {
                    cardType: t.cardType,
                    isReach: t.reach,
                    firstFourthAward: t.firstFourthAward,
                    firstFourUrl: t.firstFourUrl || c.default.getShareUrl("home"),
                    timesLeft: t.remainTakeCount,
                    teamCardType: t.teamCardType,
                    lastCardType: t.cardType,
                    isFirstReach: t.firstReach,
                    globalRank: t.globalRank,
                    isFront: !0
                })
            },
            updateHomeInfo: function() {
                var t = this
                  , e = this.resData;
                0 != e.cardType && 1 != e.cardType || setTimeout(function() {
                    t._updateInfo()
                }, 300)
            },
            goGetCoupon: function() {
                this.animateData.showBgOther = !1,
                this.animateData.disappear = !0
            },
            closeDialog: function() {
                this.isFront && 1 == this.cardType ? this.goGetCoupon() : this.$emit("close-dicecard")
            },
            goBack: function() {
                s.default.LXupload({
                    type: "moduleView",
                    bid: "b_7qa1xvmh"
                }),
                this.isFront = !1,
                this.animateData.showBgOther = !0,
                this.animateData.disappear = !1
            },
            goActivityUrl: function() {
                s.default.LXupload({
                    bid: "b_ws4fhkb5",
                    custom: {
                        card_id: this.activityDetail.activityId
                    }
                }),
                "waimai" == this.commonInfo.environment || "meituan" == this.commonInfo.environment ? KNB.openWebview({
                    url: this.activityDetail.activityUrl,
                    qs: {
                        _knbopeninapp: 1
                    }
                }) : location.href = this.activityDetail.activityUrl
            },
            goUseCoupon: function() {
                switch (s.default.LXupload({
                    bid: "b_wjjm8pq0"
                }),
                this.commonInfo.environment) {
                case "waimai":
                    location.href = "meituanwaimai://waimai.meituan.com/" + (d.default.versions.android ? "welcome" : "pois");
                    break;
                case "meituan":
                    location.href = "imeituan://www.meituan.com/takeout/homepage";
                    break;
                default:
                    location.href = "/acstatic/worldcup/relay?type=1"
                }
            },
            clickScene: function() {
                this.diceCardInfo.timesLeft > 0 ? this.goBack() : (s.default.LXupload({
                    bid: "b_0temubo2"
                }),
                location.href = "/acstatic/worldcup/card_detail?pageType=miji&&" + location.search.replace(/^\?/, ""))
            }
        }
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(a(13))
      , o = i(a(8));
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        name: "couponGift",
        components: {
            myButton: n.default
        },
        props: ["exchangeInfo", "commonInfo"],
        methods: {
            inviteNew: function() {
                o.default.LXupload({
                    bid: "b_r2qq9t3l"
                }),
                "waimai" == this.commonInfo.environment || "meituan" == this.commonInfo.environment ? KNB.openWebview({
                    url: "https://promotion-waimai.meituan.com/invite/page/main",
                    qs: {
                        _knbopeninapp: 1
                    }
                }) : location.href = "https://promotion-waimai.meituan.com/invite/page/main"
            }
        }
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, o = a(8), i = (n = o) && n.__esModule ? n : {
        default: n
    };
    e.default = {
        name: "masterCardHint",
        props: ["masterCardDiceInfo", "commonInfo"],
        data: function() {
            return {}
        },
        methods: {},
        mounted: function() {
            this.masterCardDiceInfo.advanceBanner || i.default.LXupload({
                type: "moduleView",
                bid: "b_1sghckio"
            })
        }
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = c(a(13))
      , o = c(a(22))
      , i = c(a(8))
      , r = c(a(12))
      , s = c(a(35));
    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        name: "dialogCard",
        components: {
            myButton: n.default,
            teamCard: o.default
        },
        props: ["teamCardInfo", "commonInfo", "cardsInfo"],
        data: function() {
            return {
                shareUrl: "",
                secretKey: ""
            }
        },
        methods: {
            askCard: function() {
                var t = this;
                i.default.ajax({
                    url: "/o/ccg/begCard/begShare",
                    type: "post",
                    data: {
                        teamCardType: this.teamCardInfo.type
                    },
                    success: function(e) {
                        if (0 == e.code) {
                            if (t.secretKey = e.data.secretKey,
                            !e.data.secretKey)
                                return void t.$toasted.show("生成求卡链接失败");
                            r.default.share({
                                title: "请你赐我1张【" + s.default.getNameByType(t.teamCardInfo.type) + "】卡，集齐16强得66元现金！",
                                desc: "听说朋友圈有95%的人都在玩，就差你了！",
                                link: r.default.getShareUrl("ask") + "shareCardStatus=1&&secretKey=" + t.secretKey,
                                params: "shareCardStatus=1&&secretKey=" + t.secretKey,
                                icon: "https://p0.meituan.net/travelcube/be7806a0c778a5c73a5c7b55838ce3048076.jpg",
                                miniImage: "https://p1.meituan.net/travelcube/13420a4cac29c2010da77c83d72c7c8882412.jpg",
                                env: t.commonInfo.environment
                            }),
                            "wechat" == t.commonInfo.environment && (t.$emit("close-teamcard"),
                            t.$emit("onShowGuide", 1))
                        } else
                            t.$toasted.show("生成求卡链接失败," + e.msg),
                            e.data.cardList && t.$emit("updateFromShare", 1, e.data.cardList)
                    }
                })
            },
            giveCard: function() {
                var t = this;
                i.default.ajax({
                    url: "/o/ccg/giveCard/one",
                    type: "post",
                    data: {
                        type: this.teamCardInfo.type
                    },
                    success: function(e) {
                        if (0 == e.code) {
                            if (!e.data.secretKey)
                                return void t.$toasted.show("生成送卡链接失败");
                            t.secretKey = e.data.secretKey,
                            r.default.share({
                                title: (e.data.nickName ? r.default.filterNickName(e.data.nickName, 10) : "") + "送你1张球队卡，集齐16强得66元现金！",
                                desc: "听说朋友圈有95%的人都在玩，就差你了！",
                                link: r.default.getShareUrl("give") + "shareCardStatus=2&secretKey=" + t.secretKey,
                                params: "shareCardStatus=2&secretKey=" + t.secretKey,
                                icon: "https://p0.meituan.net/travelcube/a0919dbbe39c4bce03227e4092b138c48281.jpg",
                                miniImage: "https://p0.meituan.net/travelcube/b218913787102578445b0c8d6cc725c483159.jpg",
                                env: t.commonInfo.environment
                            }),
                            "wechat" == t.commonInfo.environment && (t.$emit("close-teamcard"),
                            t.$emit("onShowGuide", 1))
                        } else
                            t.$toasted.show("送卡失败," + e.msg),
                            e.data.cardList && t.$emit("updateFromShare", 1, e.data.cardList)
                    }
                })
            }
        }
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(a(13))
      , o = r(a(10))
      , i = r(a(8));
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        name: "button",
        components: {
            myButton: n.default
        },
        props: ["activityAdInfo", "commonInfo"],
        data: function() {
            return {}
        },
        watch: {
            "activityAdInfo.haveActBanner": function() {
                this.activityAdInfo.haveActBanner && i.default.LXupload({
                    type: "moduleView",
                    bid: "b_t6aquj9t",
                    custom: {
                        supply_ac_id: this.activityAdInfo.actBanner.activityId
                    }
                })
            }
        },
        methods: {
            goActUrl: function() {
                i.default.LXupload({
                    bid: "b_0m6vy0ny",
                    custom: {
                        supply_ac_id: this.activityAdInfo.actBanner.activityId
                    }
                }),
                "waimai" == this.commonInfo.environment || "meituan" == this.commonInfo.environment ? KNB.openWebview({
                    url: this.activityAdInfo.actBanner.clickUrl,
                    qs: {
                        _knbopeninapp: 1
                    }
                }) : location.href = this.activityAdInfo.actBanner.clickUrl
            },
            goChannelUrl: function(t) {
                "waimai" == this.commonInfo.environment || "meituan" == this.commonInfo.environment ? KNB.openWebview({
                    url: t + location.search.replace(/^\?/, ""),
                    qs: {
                        _knbopeninapp: 1
                    }
                }) : location.href = t + location.search.replace(/^\?/, "")
            },
            goWaimai: function() {
                i.default.LXupload({
                    bid: "b_d8qmg30i"
                }),
                "meituan" == this.commonInfo.environment ? location.href = "imeituan://www.meituan.com/takeout/homepage" : "waimai" == this.commonInfo.environment ? location.href = "meituanwaimai://waimai.meituan.com/" + (o.default.versions.android ? "welcome" : "pois") : window.location.href = "/acstatic/worldcup/relay?type=1"
            }
        }
    }
}
, , function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = s(a(13))
      , o = s(a(22))
      , i = s(a(8))
      , r = s(a(12));
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        name: "homeCards",
        components: {
            myButton: n.default,
            teamCard: o.default
        },
        props: ["cardsInfo", "diceCardInfo", "timeTaskInfo", "commonInfo", "exchangeInfo"],
        data: function() {
            return {
                secretKey: "",
                giveFlag: !1,
                preFlag: !1
            }
        },
        computed: {
            btnHint: function() {
                return this.timeTaskInfo.haveRedDot ? "限时福利" : this.commonInfo.hasTaskReward ? "领奖励" : this.diceCardInfo.numHot ? "HOT" : ""
            }
        },
        methods: {
            diceCard: function() {
                if (this.preFlag)
                    this.$toasted.show("喝口水，歇歇再试~");
                else {
                    i.default.LXupload({
                        bid: "b_6uk7dwg6",
                        custom: {
                            btn_status: this.cardsInfo.isReach ? 2 : 0
                        }
                    });
                    var t = this;
                    this.preFlag = !0,
                    i.default.ajax({
                        url: "/o/ccg/home/preTakeCard",
                        type: "post",
                        success: function(e) {
                            if (t.preFlag = !1,
                            0 == e.code) {
                                t.$emit("updateDiceCardInfo", {
                                    timesLeft: e.data.remainTakeCount,
                                    backImgUrl: e.data.adUrl || "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/diceBack.png",
                                    showDiceDialog: !0
                                })
                            } else
                                t.$toasted.show(e.msg)
                        },
                        error: function() {
                            t.preFlag = !1
                        }
                    })
                }
            },
            getMoney: function() {
                i.default.LXupload({
                    bid: "b_6uk7dwg6",
                    custom: {
                        btn_status: 3
                    }
                }),
                this.commonInfo.isExchangeBlackList ? this.$emit("updateHintInfo", {
                    showHintDialog: !0,
                    hintInfoArr: [].concat(["很抱歉，你的账号存在异常行为，无法领取奖励。", "请联系客服:10011011000"])
                }) : this.$emit("updateExchangeInfo", {
                    showExchangeDialog: !0
                })
            },
            giveCard: function() {
                if (this.giveFlag)
                    this.$toasted.show("喝口水，歇歇再试~");
                else {
                    i.default.LXupload({
                        bid: "b_4tgihy9h"
                    });
                    var t = this;
                    this.cardsInfo.overOpenLotteryTime ? this.$toasted.show("活动已经结束啦~") : this.cardsInfo.cardsOwnList.every(function(t) {
                        return t.num < 2
                    }) ? t.$toasted.show("你没有重复卡可以赠送哦~") : (this.giveFlag = !0,
                    i.default.ajax({
                        url: "/o/ccg/giveCard/patch",
                        type: "post",
                        data: {},
                        success: function(e) {
                            if (t.giveFlag = !1,
                            0 == e.code) {
                                if (!e.data.secretKey)
                                    return void t.$toasted.show("生成赠送链接失败");
                                t.secretKey = e.data.secretKey,
                                r.default.share({
                                    env: t.commonInfo.environment,
                                    title: (e.data.nickName ? r.default.filterNickName(e.data.nickName) : "") + "送你" + e.data.count + "张球队卡，集齐16强得66元现金！",
                                    desc: "听说朋友圈有95%的人都在玩，就差你了！",
                                    link: r.default.getShareUrl("give") + "shareCardStatus=2&&secretKey=" + t.secretKey,
                                    params: "shareCardStatus=2&&secretKey=" + t.secretKey,
                                    icon: "https://p0.meituan.net/travelcube/a0919dbbe39c4bce03227e4092b138c48281.jpg",
                                    miniImage: "https://p0.meituan.net/travelcube/b218913787102578445b0c8d6cc725c483159.jpg",
                                    success: function() {
                                        t.$emit("onCloseGuide")
                                    }
                                }),
                                "wechat" == t.commonInfo.environment && t.$emit("onShowGuide", 1)
                            } else
                                e.data.cardList && t.$emit("updateFromShare", 1, e.data.cardList, {}),
                                t.$toasted.show("赠送失败," + e.msg)
                        },
                        error: function() {
                            t.giveFlag = !1
                        }
                    }))
                }
            },
            addAttainTimes: function() {
                i.default.LXupload({
                    bid: "b_opgec2ta"
                }),
                $.removeCookie("tskTime"),
                $.removeCookie("numhot"),
                location.href = "/acstatic/worldcup/card_detail?pageType=miji&&" + location.search.replace(/^\?/, "")
            },
            login: function() {
                this.$emit("goLogin")
            }
        }
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, o = a(8), i = (n = o) && n.__esModule ? n : {
        default: n
    };
    e.default = {
        name: "homeHeader",
        props: ["homeHeaderInfo", "exchangeStatus", "commonInfo"],
        data: function() {
            return {
                currentIndex: 0,
                curMsg: ""
            }
        },
        computed: {
            collectStateDescs: function() {
                return this.homeHeaderInfo.collectStateDescs
            },
            showList: function() {
                var t = [];
                return this.collectStateDescs.num > 0 && t.push(["全国已有", this.collectStateDescs.num, "人集齐"]),
                (this.collectStateDescs.flist || []).forEach(function(e) {
                    try {
                        (e || " ").match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g).length > 7 ? t.push(["你的好友", e.match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){7}/g)[0] + "...", "已集齐"]) : t.push(["你的好友", e, "已集齐"])
                    } catch (t) {}
                }),
                t
            },
            listLen: function() {
                return this.showList.length
            },
            curMsgArr: function() {
                return this.showList[this.currentIndex]
            }
        },
        methods: {
            getMCardInfo: function() {
                i.default.LXupload({
                    bid: "b_0hdqc4en"
                }),
                this.$emit("update-masterCardInfo", {
                    showMCardDialog: !0
                })
            },
            goCouponPage: function() {
                i.default.LXupload({
                    bid: "b_3nk4glur"
                }),
                this.homeHeaderInfo.couponCount < 1 ? this.$toasted.show("暂无红包,抽卡可得红包哦") : location.href = "/acstatic/worldcup/card_detail?pageType=hongbao&&" + location.search.replace(/^\?/, "")
            },
            goRule: function() {
                i.default.LXupload({
                    bid: "b_ulgu45wf"
                }),
                location.href = "/acstatic/worldcup/activity_rules" + location.search
            },
            rollShow: function() {
                this.listLen < 1 || (this.currentIndex = (this.currentIndex + 1) % this.listLen,
                this.curMsg = this.showList[this.currentIndex])
            }
        },
        watch: {
            collectStateDescs: function() {}
        },
        mounted: function() {
            var t = this;
            this.rollShow(),
            setInterval(function() {
                t.rollShow()
            }, 3e3)
        }
    }
}
, function(t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var a = arguments[e];
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n])
        }
        return t
    }
      , o = T(a(16))
      , i = T(a(6))
      , r = (T(a(26)),
    T(a(8)))
      , s = T(a(12))
      , c = T(a(35))
      , d = T(a(254))
      , l = T(a(251))
      , u = T(a(246))
      , m = T(a(243))
      , f = T(a(89))
      , h = T(a(240))
      , g = T(a(237))
      , p = T(a(234))
      , v = T(a(228))
      , b = T(a(225))
      , C = T(a(222))
      , w = T(a(216))
      , _ = T(a(213))
      , y = T(a(147))
      , I = T(a(86))
      , k = T(a(208))
      , x = T(a(36))
      , D = T(a(88));
    function T(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        name: "App",
        components: {
            homeHeader: d.default,
            homeCards: l.default,
            homeBottom: u.default,
            dialogCard: m.default,
            masterCardHint: h.default,
            couponGift: g.default,
            dialogDice: p.default,
            dialogShare: v.default,
            dialogTimeTask: b.default,
            dialogExchange: C.default,
            dialogNew: w.default,
            dialogTimesOut: _.default,
            dialogCollectAll: y.default,
            dialogMasterCard: f.default,
            dialogGuide: I.default,
            dialogHint: k.default,
            login: D.default
        },
        data: function() {
            return {
                commonInfo: {
                    userId: "123",
                    selfUserIdSecret: "",
                    shareUserIdSecret: "",
                    fingerprint: "",
                    isLogin: !1,
                    isExchangeBlackList: !1,
                    shareCardStatus: 0,
                    secretKey: "",
                    environment: "",
                    bntype: 2,
                    invitationUrl: "",
                    code: "",
                    hasTaskReward: !1
                },
                loginDialogInfo: {
                    showLogin: !1
                },
                cardsInfo: {
                    cardsOwnList: [{
                        num: 0,
                        type: "A"
                    }, {
                        num: 0,
                        type: "B"
                    }, {
                        num: 0,
                        type: "C"
                    }, {
                        num: 0,
                        type: "D"
                    }, {
                        num: 0,
                        type: "E"
                    }, {
                        num: 0,
                        type: "F"
                    }, {
                        num: 0,
                        type: "G"
                    }, {
                        num: 0,
                        type: "H"
                    }, {
                        num: 0,
                        type: "I"
                    }, {
                        num: 0,
                        type: "J"
                    }, {
                        num: 0,
                        type: "K"
                    }, {
                        num: 0,
                        type: "L"
                    }, {
                        num: 0,
                        type: "M"
                    }, {
                        num: 0,
                        type: "N"
                    }, {
                        num: 0,
                        type: "O"
                    }, {
                        num: 0,
                        type: "P"
                    }],
                    isReach: 0,
                    isFirstReach: !1,
                    overOpenLotteryTime: !0
                },
                homeHeaderInfo: {
                    showMCardDialog: !1,
                    collectStateDescs: {
                        num: -1,
                        flist: []
                    },
                    couponCount: 1,
                    luckyCardStatus: 0
                },
                masterCardDiceInfo: {
                    haveLuckyCardActBanner: !1,
                    mCardLeftNum: 88888,
                    advanceBanner: !1,
                    advanceDesc: "7月6日 10:00 准时开抢",
                    special: !1,
                    picUrl: ""
                },
                activityAdInfo: {
                    haveActBanner: !1,
                    actBanner: {
                        picUrl: "",
                        clickUrl: "",
                        activityId: ""
                    },
                    extraBanners: [{
                        picUrl: "",
                        clickUrl: "",
                        activityId: ""
                    }, {
                        picUrl: "",
                        clickUrl: "",
                        activityId: ""
                    }, {
                        picUrl: "",
                        clickUrl: "",
                        activityId: ""
                    }, {
                        picUrl: "",
                        clickUrl: "",
                        activityId: ""
                    }, {
                        picUrl: "",
                        clickUrl: "",
                        activityId: ""
                    }, {
                        picUrl: "",
                        clickUrl: "",
                        activityId: ""
                    }]
                },
                showingTeamCardInfo: {
                    showCardsDialog: !1,
                    num: 1,
                    type: "A"
                },
                diceCardInfo: {
                    showDiceDialog: !1,
                    showTimesOutDialog: !1,
                    timesLeft: 4,
                    numHot: !1,
                    backImgUrl: "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/diceBack.png",
                    lastCardType: -1,
                    teamCardType: "A"
                },
                shareCardInfo: {
                    showShareDialog: !1,
                    closed: !1,
                    headUrl: "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/avatar_def.png",
                    nickName: "一二三四五六七八九十一三四",
                    isBeg: !1,
                    isSelf: !0,
                    begCardInfo: {
                        begCardType: "A",
                        begCardName: "巴西",
                        begCardGivenCount: 2,
                        ownCardNum: 4
                    },
                    sendCardInfo: {
                        isSingle: !0,
                        cardStatus: 2,
                        cardNum: 0,
                        isAllHave: !1,
                        sendCardsList: [{
                            type: "A",
                            num: 5
                        }, {
                            type: "B",
                            num: 5
                        }]
                    }
                },
                timeTaskInfo: {
                    showTimeTaskDialog: !1,
                    haveLimitActivity: !1,
                    taskType: 20016,
                    startTime: new Date("2018-05-27").getTime(),
                    endTime: new Date("2018-05-27").getTime(),
                    haveRedDot: !1,
                    inviteUrl: "",
                    picUrl: ""
                },
                exchangeInfo: {
                    showExchangeDialog: !1,
                    couponMount: 66,
                    exchangeStatus: 0,
                    payType: 0
                },
                newWelfareInfo: {
                    showNewWelfareDialog: !1,
                    firstFourthAward: !1,
                    firstFourUrl: ""
                },
                collectAllInfo: {
                    showCollectAllDialog: !1,
                    globalRank: 526
                },
                guideInfo: {
                    showGuideDialog: !1,
                    type: 2
                },
                hintInfo: {
                    showHintDialog: !1,
                    hintInfoArr: []
                }
            }
        },
        methods: {
            clickTeamCard: function(t, e) {
                r.default.LXupload({
                    bid: "b_yi3wkk9p"
                }),
                this.commonInfo.isLogin && !this.cardsInfo.overOpenLotteryTime && n(this.showingTeamCardInfo, {
                    showCardsDialog: !0,
                    num: t,
                    type: e
                })
            },
            onHideLogin: function() {
                this.loginDialogInfo.showLogin = !1
            },
            onCloseDialogMasterCard: function() {
                this.homeHeaderInfo.showMCardDialog = !1
            },
            onCloseGuide: function() {
                this.guideInfo.showGuideDialog = !1
            },
            updateMasterCardInfo: function(t) {
                n(this.homeHeaderInfo, t)
            },
            onCloseDialogCard: function() {
                this.showingTeamCardInfo.showCardsDialog = !1
            },
            onCloseShareCard: function() {
                this.shareCardInfo.showShareDialog = !1,
                this.commonInfo.shareCardStatus = 0
            },
            onCloseDialogTimeTask: function() {
                this.timeTaskInfo.showTimeTaskDialog = !1
            },
            onCloseDialogExchange: function() {
                this.exchangeInfo.showExchangeDialog = !1
            },
            onCloseDialogNew: function() {
                this.newWelfareInfo.showNewWelfareDialog = !1,
                this.newWelfareInfo.firstFourthAward = !1
            },
            onCloseDialogCollectAll: function() {
                this.collectAllInfo.showCollectAllDialog = !1,
                this.cardsInfo.isFirstReach = !1
            },
            onShowDiceDard: function() {
                this.diceCardInfo.showDiceDialog = !0
            },
            onShowGuide: function(t) {
                this.guideInfo.type = t,
                this.guideInfo.showGuideDialog = !0
            },
            onCloseDiceCard: function() {
                this.diceCardInfo.showDiceDialog = !1,
                this.newWelfareInfo.firstFourthAward && (r.default.LXupload({
                    type: "moduleView",
                    bid: "b_aneq0nep"
                }),
                this.newWelfareInfo.showNewWelfareDialog = !0),
                0 == this.diceCardInfo.timesLeft && (this.diceCardInfo.showTimesOutDialog = !0)
            },
            goPageRule: function() {
                location.href = "/acstatic/worldcup/activity_rules"
            },
            goMCard: function() {
                this.masterCardDiceInfo.advanceBanner || r.default.LXupload({
                    bid: "b_j1mq27b3"
                }),
                this.masterCardDiceInfo.advanceBanner || ("waimai" == this.commonInfo.environment || "meituan" == this.commonInfo.environment ? this.commonInfo.isLogin ? location.href = "/acstatic/worldcup/universal_card" + location.search : this.goLogin(1) : window.location.href = "/acstatic/worldcup/relay?type=1&inner_url=" + location.origin + "/acstatic/worldcup/universal_card")
            },
            goLogin: function(t) {
                switch (this.commonInfo.environment) {
                case "waimai":
                case "meituan":
                    KNB.login({
                        success: function(e) {
                            e.type;
                            var a = e.userId
                              , n = e.token;
                            location.href = t ? "/acstatic/worldcup/universal_card" + location.search + "&token=" + n + "&uuid=" + a : "/acstatic/worldcup/home" + location.search + "&token=" + n + "&uuid=" + a
                        }
                    });
                    break;
                case "wechat":
                    this.shareCardInfo.showShareDialog = !1,
                    this.loginDialogInfo.showLogin = !0,
                    i.default.cookie("user_token") && Owl.addError({
                        name: "statisticsError",
                        msg: "wechat login cookie"
                    }, {
                        combo: !0,
                        level: "error",
                        tags: {
                            lt: i.default.cookie("lt"),
                            user_token: i.default.cookie("user_token")
                        }
                    });
                    break;
                default:
                    window.location.href = "/acstatic/worldcup/relay?type=1&inner_url=" + location.protocol + "//" + location.host + "/acstatic/worldcup/home"
                }
            },
            afterLogin: function() {
                i.default.cookie("user_token", i.default.cookie("lt")),
                i.default.cookie("w_uuid", i.default.cookie("h_w_uuid")),
                this.getInitData(!0)
            },
            checkWeChatAuth: function(t) {
                if ("wechat" == this.commonInfo.environment) {
                    if (t)
                        return location.href = "/o/ccg/weixin302?url_key=" + encodeURIComponent(location.href),
                        !1;
                    if (!i.default.cookie("ccgwxinfo") && !this.commonInfo.code)
                        return location.href = "/o/ccg/weixin302?url_key=" + encodeURIComponent(location.href),
                        !1
                }
                return !0
            },
            getLocation: function() {
                r.default.hasLocation() || "wechat" == this.commonInfo.environment && window.wx && wx.ready(function() {
                    wx.getLocation({
                        type: "wgs84",
                        success: function(t) {
                            r.default.updateComParams({
                                wm_latitude: parseInt(1e6 * t.latitude),
                                wm_longitude: parseInt(1e6 * t.longitude),
                                wm_actual_longitude: parseInt(1e6 * t.longitude),
                                wm_actual_latitude: parseInt(1e6 * t.latitude),
                                wm_ctype: "wxi"
                            })
                        }
                    })
                })
            },
            updateHintInfo: function(t) {
                n(this.hintInfo, t)
            },
            updateDiceCardInfo: function(t) {
                n(this.diceCardInfo, t)
            },
            updateExchangeInfo: function(t) {
                n(this.exchangeInfo, t)
            },
            _getLocalInitData: function() {
                var t = o.default.urlParams()
                  , e = KNB.uaInfo()
                  , a = e.appName
                  , i = (e.appVersion,
                e.osName);
                e.osVersion,
                e.titansxVersion;
                /waimai/.test(a) && (a = "waimai"),
                n(this.commonInfo, {
                    userId: t.userId,
                    shareCardStatus: t.shareCardStatus || 0,
                    secretKey: t.secretKey,
                    environment: a,
                    shareUserIdSecret: t.shareUserIdSecret,
                    bntype: t.bntype || 2,
                    code: t.code || ""
                }),
                "waimai" == a ? (LXAnalytics("set", "appnm", a),
                LXAnalytics("set", "os", i),
                LXAnalytics("set", "lch", "")) : "meituan" == a ? (LXAnalytics("set", "appnm", "group"),
                LXAnalytics("set", "os", i),
                LXAnalytics("set", "lch", "")) : (LXAnalytics("set", "appnm", "waimai_i"),
                LXAnalytics("set", "os", "html"),
                LXAnalytics("set", "lch", "i")),
                r.default.updateLXParams({
                    activity_id: t.activity_id,
                    entry_id: t.entry_id,
                    entry_item_id: t.entry_item_id,
                    entry_index: t.entry_index
                })
            },
            updateFromDice: function(t) {
                this.diceCardInfo.timesLeft = t.timesLeft,
                0 == t.timesLeft && (this.diceCardInfo = n({}, this.diceCardInfo, {
                    numHot: !0
                }),
                i.default.cookie("numhot", 1)),
                0 != t.cardType && 1 != t.cardType || (this.diceCardInfo.showDiceDialog = !1,
                0 == t.timesLeft && (this.diceCardInfo.showTimesOutDialog = !0)),
                this.diceCardInfo.lastCardType = t.lastCardType,
                this.diceCardInfo.teamCardType = t.teamCardType,
                0 == t.cardType ? (t.teamCardType && this.cardsInfo.cardsOwnList.forEach(function(e) {
                    e.type == t.teamCardType && e.num++
                }),
                this.cardsInfo.isReach = t.isReach,
                this.cardsInfo.isFirstReach = t.isFirstReach,
                this.cardsInfo.isFirstReach && (this.collectAllInfo.showCollectAllDialog = !0,
                this.collectAllInfo.globalRank = t.globalRank)) : 1 == t.cardType && (this.homeHeaderInfo.couponCount += 1),
                t.firstFourthAward && (r.default.LXupload({
                    type: "moduleView",
                    bid: "b_aneq0nep"
                }),
                n(this.newWelfareInfo, {
                    showNewWelfareDialog: !0,
                    firstFourthAward: !0,
                    firstFourUrl: t.firstFourUrl
                }))
            },
            updateOwnCardsList: function(t) {
                var e = this;
                t && t.forEach(function(t) {
                    e.cardsInfo.cardsOwnList.forEach(function(e) {
                        t.type == e.type && (e.num = t.num)
                    })
                }),
                1 == e.commonInfo.shareCardStatus && (e.shareCardInfo.begCardInfo.ownCardNum = e._getOwnCardByType.call(e, e.shareCardInfo.begCardInfo.begCardType)),
                e.showingTeamCardInfo.type && (e.showingTeamCardInfo.num = e._getOwnCardByType.call(e, e.showingTeamCardInfo.type))
            },
            updateFromShare: function(t, e, a) {
                var n = this;
                a = a || {},
                1 == t ? n.updateOwnCardsList(e) : 2 == t ? e && e.forEach(function(t) {
                    var e = !1;
                    n.cardsInfo.cardsOwnList.forEach(function(a) {
                        t.type == a.type && (e = !0,
                        a.num += t.num)
                    }),
                    e || n.cardsInfo.cardsOwnList.push({
                        type: t.type,
                        num: t.num
                    })
                }) : e && e.forEach(function(t) {
                    n.cardsInfo.cardsOwnList.forEach(function(e) {
                        t.type == e.type && (e.num -= t.num)
                    })
                }),
                a.isAllHave && (n.shareCardInfo.sendCardInfo.isAllHave = !0),
                a.firstReach && (n.cardsInfo.isReach = !0,
                n.cardsInfo.isFirstReach = !0,
                n.collectAllInfo.globalRank = a.globalRank,
                n.collectAllInfo.showCollectAllDialog = !0)
            },
            _checkAuth: function() {
                var t = this.commonInfo.environment
                  , e = o.default.urlParams();
                return "waimai" != t && "meituan" != t ? "wechat" == t ? (r.default.updateComParams({
                    user_token: i.default.cookie("user_token"),
                    wm_uuid: i.default.cookie("h_w_uuid")
                }),
                i.default.cookie("user_token") ? this.checkWeChatAuth() : (this.commonInfo.isLogin = !1,
                !1)) : (t = "other",
                this.commonInfo.isLogin = !1,
                !1) : (r.default.updateComParams({
                    user_token: e.token || i.default.cookie("user_token"),
                    wm_uuid: e.uuid || i.default.cookie("h_w_uuid"),
                    wm_latitude: e.wm_latitude,
                    wm_longitude: e.wm_longitude,
                    wm_actual_longitude: e.wm_actual_longitude,
                    wm_actual_latitude: e.wm_actual_latitude,
                    wm_channel: e.wm_channel,
                    wm_ctype: e.wm_ctype
                }),
                !(!e.token && !i.default.cookie("user_token")) || (this.commonInfo.isLogin = !1,
                !1))
            },
            getInitData: function(t) {
                t || this._getLocalInitData();
                var e = this;
                "wechat" == this.commonInfo.environment ? (x.default.wxInit(function() {
                    s.default.share({
                        env: e.commonInfo.environment,
                        title: "和我一起集16强，新玩家4次抽卡机会！",
                        desc: "集齐16张球队卡，得66元现金！点击立即参与~",
                        icon: "https://p0.meituan.net/travelcube/f30eaa693dcf8b58157db7d5879818e88843.jpg",
                        link: s.default.getShareUrl("home")
                    })
                }),
                r.default.updateComParams({
                    wm_channel: "",
                    wm_ctype: "wxi"
                })) : "waimai" != this.commonInfo.environment && "meituan" != this.commonInfo.environment || (KNB.setLLButton({
                    icon: "H5_Back",
                    handle: function() {
                        KNB.closeWebview({})
                    }
                }),
                KNB.getFingerprint({
                    success: function(t) {
                        e.commonInfo.fingerprint = t.fingerprint
                    }
                }),
                KNB.setTitle({
                    title: "集16强得66元现金"
                })),
                this._checkAuth(),
                this._getAjaxInitData(),
                this.getLocation()
            },
            _getCollectData: function() {
                var t = this;
                r.default.ajax({
                    url: "/o/ccg/home/collectState",
                    type: "post",
                    data: {},
                    success: function(e) {
                        0 == e.code && n(t.homeHeaderInfo.collectStateDescs, {
                            num: e.data.num,
                            flist: e.data.flist
                        })
                    }
                })
            },
            _getAjaxInitData: function() {
                var t = this
                  , e = {
                    needName: !1,
                    code: t.commonInfo.code
                };
                t.commonInfo.shareUserIdSecret && (e.shareUserIdSecret = t.commonInfo.shareUserIdSecret),
                r.default.ajax({
                    url: "/o/ccg/home/index",
                    type: "post",
                    data: e,
                    success: function(e) {
                        if (0 == e.code) {
                            var a = e.data;
                            if (n(t.commonInfo, {
                                isLogin: a.loginUser,
                                selfUserIdSecret: a.selfUserIdSecret,
                                isExchangeBlackList: a.specialUser,
                                invitationUrl: a.invitationUrl,
                                hasTaskReward: a.hasTaskReward || !1
                            }),
                            "waimai" == t.commonInfo.environment || "meituan" == t.commonInfo.environment) {
                                var o = {
                                    title: "和我一起集16强，新玩家4次抽卡机会！",
                                    desc: "集齐16张球队卡，得66元现金！点击立即参与~",
                                    content: "集齐16张球队卡，得66元现金！点击立即参与~",
                                    image: "https://p0.meituan.net/travelcube/f30eaa693dcf8b58157db7d5879818e88843.jpg",
                                    url: s.default.getShareUrl("home") + "shareUserIdSecret=" + t.commonInfo.selfUserIdSecret,
                                    channel: [KNB.share.WECHAT_FRIENDS, KNB.share.WECHAT_MINIPROGRAM],
                                    miniProgram: {
                                        id: "gh_72a4eb2d4324",
                                        path: "/sub_pages/mpvue/mp-pages/page/worldcup/home/main?" + s.default.getCommonOceanParam(),
                                        image: "https://p0.meituan.net/travelcube/2ca44dfeeffd007737e7d31c7a418c3168924.jpg"
                                    }
                                };
                                1 == t.commonInfo.bntype && (o.channel = [KNB.share.WECHAT_FRIENDS],
                                delete o.miniProgram),
                                KNB.configShare(o)
                            }
                            t.homeHeaderInfo.couponCount = a.couponCount,
                            t.homeHeaderInfo.luckyCardStatus = a.luckyCardStatus,
                            a.haveLuckyCardActBanner && (t.masterCardDiceInfo.haveLuckyCardActBanner = a.haveLuckyCardActBanner,
                            n(t.masterCardDiceInfo, {
                                mCardLeftNum: a.luckyCardActBanner.luckyCardRemainCount,
                                advanceBanner: a.luckyCardActBanner.advanceBanner,
                                picUrl: a.luckyCardActBanner.luckyCardRemainCount,
                                special: a.luckyCardActBanner.special,
                                advanceDesc: a.luckyCardActBanner.advanceDesc
                            })),
                            n(t.cardsInfo, {
                                isReach: a.reach,
                                overOpenLotteryTime: a.overOpenLotteryTime,
                                cardsOwnList: [].concat(a.teamCardList)
                            }),
                            n(t.exchangeInfo, {
                                couponMount: a.money || 0,
                                exchangeStatus: a.exchangeStatus,
                                payType: a.payType
                            }),
                            t.timeTaskInfo.haveLimitActivity = a.haveLimitActivity,
                            a.haveLimitActivity ? (n(t.timeTaskInfo, {
                                taskType: +a.limitTaskActivity.actCode,
                                startTime: 1e3 * a.limitTaskActivity.startTime,
                                endTime: 1e3 * a.limitTaskActivity.endTime,
                                inviteUrl: a.limitTaskActivity.invitationUrl,
                                picUrl: a.limitTaskActivity.picUrl
                            }),
                            i.default.cookie("tskTime", 1e3 * a.limitTaskActivity.endTime),
                            t.timeTaskInfo.haveRedDot = !0,
                            t._showLimitDialog()) : i.default.cookie("tskTime") && (new Date).getTime() < i.default.cookie("tskTime") && (t.timeTaskInfo.haveRedDot = !0),
                            n(t.diceCardInfo, {
                                timesLeft: a.remainTakeCount
                            }),
                            0 == a.remainTakeCount && 1 == i.default.cookie("numhot") && (t.diceCardInfo.numHot = !0),
                            t.getShareData.call(t)
                        } else
                            302 == e.code ? t.checkWeChatAuth(!0) : 302 == e.code ? t.goLogin() : 9 == e.code ? t.onShowGuide(9) : 10 == e.code ? t.onShowGuide(10) : 11 == e.code ? t.onShowGuide(11) : t.$toasted.show(e.msg)
                    }
                }),
                t._getCollectData(),
                r.default.ajax({
                    url: "/o/ccg/home/banner",
                    type: "post",
                    data: {},
                    success: function(e) {
                        if (0 == e.code) {
                            var a = e.data;
                            n(t.activityAdInfo, {
                                haveActBanner: a.haveActBanner,
                                actBanner: n({}, a.actBanner),
                                extraBanners: a.extraBanners
                            })
                        }
                    },
                    error: function(t) {}
                })
            },
            _checkIsAllHave: function(t) {
                var e = this
                  , a = !0;
                return t.forEach(function(t) {
                    e.cardsInfo.cardsOwnList.forEach(function(e) {
                        e.type == t.type && e.num < 1 && (a = !1)
                    })
                }),
                a
            },
            _getOwnCardByType: function(t) {
                var e = 0;
                return this.cardsInfo.cardsOwnList.forEach(function(a) {
                    a.type == t && (e = a.num)
                }),
                e
            },
            _showLimitDialog: function() {
                var t = this;
                if (this.timeTaskInfo.haveLimitActivity && !(0 != this.commonInfo.shareCardStatus || this.cardsInfo.isFirstReach || (0,
                i.default)(".dialog") && "none" != (0,
                i.default)(".dialog").css("display")))
                    return this.timeTaskInfo.showTimeTaskDialog = !0,
                    void r.default.LXupload({
                        type: "moduleView",
                        bid: "b_xpyzttuk"
                    });
                setTimeout(function() {
                    t._showLimitDialog()
                }, 2e3)
            },
            getShareData: function() {
                var t = this;
                0 != this.commonInfo.shareCardStatus && Owl.addError({
                    name: "statisticsError",
                    msg: "求赠卡链接参数错误"
                }, {
                    combo: !0,
                    level: "warn",
                    tags: {
                        url: location.href,
                        shareCardStatus: this.commonInfo.shareCardStatus,
                        secretKey: this.commonInfo.secretKey
                    }
                }),
                1 == this.commonInfo.shareCardStatus ? (r.default.LXupload({
                    type: "moduleView",
                    bid: "b_ujw2mo2c",
                    custom: {
                        login_status: this.commonInfo.isLogin ? 0 : 1
                    }
                }),
                r.default.ajax({
                    url: "/o/ccg/begCard/begDetail",
                    type: "post",
                    data: {
                        secretKey: this.commonInfo.secretKey
                    },
                    success: function(e) {
                        if (0 == e.code) {
                            var a = e.data;
                            n(t.shareCardInfo, {
                                headUrl: a.avatar || "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/avatar.png",
                                nickName: a.nickName,
                                isBeg: !0,
                                isSelf: a.self,
                                begCardInfo: {
                                    begCardType: a.begCardType,
                                    begCardName: c.default.getNameByType(a.begCardType),
                                    begCardGivenCount: a.begCardGivenCount,
                                    ownCardNum: t._getOwnCardByType.call(t, a.begCardType)
                                }
                            }),
                            t.shareCardInfo.showShareDialog = !0
                        }
                    },
                    error: function(t) {
                        Vue.toasted.show("网络异常，请稍后重试哦"),
                        console.log(t)
                    }
                })) : 2 == this.commonInfo.shareCardStatus && (r.default.LXupload({
                    type: "moduleView",
                    bid: "b_oerqqrow",
                    custom: {
                        login_status: this.commonInfo.isLogin ? 0 : 1
                    }
                }),
                r.default.ajax({
                    url: "/o/ccg/giveCard/query",
                    type: "post",
                    data: {
                        secretKey: this.commonInfo.secretKey
                    },
                    success: function(e) {
                        if (0 == e.code) {
                            var a = e.data;
                            n(t.shareCardInfo, {
                                headUrl: a.avatar || "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/avatar.png",
                                nickName: a.nickName,
                                isBeg: !1,
                                isSelf: a.self,
                                sendCardInfo: {
                                    isSingle: a.single,
                                    cardStatus: a.cardStatus,
                                    cardNum: a.count,
                                    sendCardsList: [].concat(a.cardList),
                                    isAllHave: !!t._checkIsAllHave.call(t, a.cardList || [])
                                }
                            }),
                            t.shareCardInfo.showShareDialog = !0
                        }
                    },
                    error: function(t) {
                        Vue.toasted.show("网络异常，请稍后重试哦"),
                        console.log(t)
                    }
                }))
            },
            toastHint: function(t) {
                this.$toasted.show(t)
            }
        },
        mounted: function() {
            var t = o.default.urlParams();
            if (t.cc)
                switch (+t.cc) {
                case 1:
                    i.default.removeCookie("ccgwxinfo");
                    break;
                case 2:
                    i.default.removeCookie("user_token");
                    break;
                case 3:
                    alert("clear cookie: user_token,ccgwxinfo"),
                    i.default.removeCookie("user_token"),
                    i.default.removeCookie("ccgwxinfo")
                }
            else
                this.getInitData(),
                window.$ = i.default,
                r.default.LXupload({
                    type: "pageView",
                    cid: "c_dp15oxvd"
                })
        }
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "content",
            attrs: {
                id: "app"
            }
        }, [a("homeHeader", {
            attrs: {
                exchangeStatus: t.exchangeInfo.exchangeStatus,
                commonInfo: t.commonInfo,
                homeHeaderInfo: t.homeHeaderInfo
            },
            on: {
                "update-masterCardInfo": t.updateMasterCardInfo
            }
        }), t._v(" "), t.masterCardDiceInfo.haveLuckyCardActBanner ? a("div", {
            staticClass: "m-card-banner",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.goMCard(e)
                }
            }
        }, [a("masterCardHint", {
            attrs: {
                masterCardDiceInfo: t.masterCardDiceInfo,
                commonInfo: t.commonInfo
            }
        })], 1) : t._e(), t._v(" "), t.exchangeInfo.exchangeStatus < 2 ? [a("homeCards", {
            attrs: {
                cardsInfo: t.cardsInfo,
                diceCardInfo: t.diceCardInfo,
                timeTaskInfo: t.timeTaskInfo,
                commonInfo: t.commonInfo,
                exchangeInfo: t.exchangeInfo
            },
            on: {
                updateFromShare: t.updateFromShare,
                clickCard: t.clickTeamCard,
                updateDiceCardInfo: t.updateDiceCardInfo,
                goLogin: t.goLogin,
                updateExchangeInfo: t.updateExchangeInfo,
                updateHintInfo: t.updateHintInfo,
                onShowGuide: t.onShowGuide,
                onCloseGuide: t.onCloseGuide
            }
        })] : [a("couponGift", {
            attrs: {
                exchangeInfo: t.exchangeInfo,
                commonInfo: t.commonInfo
            }
        })], t._v(" "), t.commonInfo.isLogin ? a("homeBottom", {
            attrs: {
                activityAdInfo: t.activityAdInfo,
                commonInfo: t.commonInfo
            }
        }) : t._e(), t._v(" "), t.showingTeamCardInfo.showCardsDialog ? a("dialogCard", {
            attrs: {
                teamCardInfo: t.showingTeamCardInfo,
                commonInfo: t.commonInfo,
                cardsInfo: t.cardsInfo
            },
            on: {
                "close-teamcard": t.onCloseDialogCard,
                onShowGuide: t.onShowGuide,
                updateFromShare: t.updateFromShare
            }
        }) : t._e(), t._v(" "), t.diceCardInfo.showDiceDialog ? a("dialogDice", {
            attrs: {
                diceCardInfo: t.diceCardInfo,
                commonInfo: t.commonInfo
            },
            on: {
                "close-dicecard": t.onCloseDiceCard,
                updateFromDice: t.updateFromDice
            }
        }) : t._e(), t._v(" "), t.shareCardInfo.showShareDialog ? a("dialogShare", {
            attrs: {
                shareCardInfo: t.shareCardInfo,
                commonInfo: t.commonInfo
            },
            on: {
                onCloseShareCard: t.onCloseShareCard,
                updateFromShare: t.updateFromShare,
                goLogin: t.goLogin,
                onShowGuide: t.onShowGuide
            }
        }) : t._e(), t._v(" "), t.timeTaskInfo.showTimeTaskDialog ? a("dialogTimeTask", {
            attrs: {
                timeTaskInfo: t.timeTaskInfo,
                commonInfo: t.commonInfo
            },
            on: {
                "close-timetask": t.onCloseDialogTimeTask,
                onShowGuide: t.onShowGuide
            }
        }) : t._e(), t._v(" "), t.exchangeInfo.showExchangeDialog ? a("dialogExchange", {
            attrs: {
                exchangeInfo: t.exchangeInfo,
                commonInfo: t.commonInfo
            },
            on: {
                "close-exchange": t.onCloseDialogExchange,
                updateExchangeInfo: t.updateExchangeInfo
            }
        }) : t._e(), t._v(" "), t.newWelfareInfo.showNewWelfareDialog ? a("dialogNew", {
            attrs: {
                commonInfo: t.commonInfo,
                diceCardInfo: t.diceCardInfo
            },
            on: {
                "close-welfare": t.onCloseDialogNew,
                onCloseGuide: t.onCloseGuide,
                onShowGuide: t.onShowGuide
            }
        }) : t._e(), t._v(" "), t.diceCardInfo.showTimesOutDialog ? a("dialogTimesOut", {
            attrs: {
                commonInfo: t.commonInfo,
                diceCardInfo: t.diceCardInfo
            },
            on: {
                onShowGuide: t.onShowGuide
            }
        }) : t._e(), t._v(" "), t.collectAllInfo.showCollectAllDialog ? a("dialogCollectAll", {
            attrs: {
                collectAllInfo: t.collectAllInfo,
                commonInfo: t.commonInfo
            },
            on: {
                "close-collect": t.onCloseDialogCollectAll,
                onShowGuide: t.onShowGuide
            }
        }) : t._e(), t._v(" "), t.homeHeaderInfo.showMCardDialog ? a("dialogMasterCard", {
            attrs: {
                homeHeaderInfo: t.homeHeaderInfo,
                commonInfo: t.commonInfo
            },
            on: {
                "close-master": t.onCloseDialogMasterCard
            }
        }) : t._e(), t._v(" "), t.guideInfo.showGuideDialog ? a("dialogGuide", {
            attrs: {
                guideInfo: t.guideInfo
            },
            on: {
                onCloseGuide: t.onCloseGuide
            }
        }) : t._e(), t._v(" "), t.hintInfo.showHintDialog ? a("dialogHint", {
            attrs: {
                hintInfo: t.hintInfo
            }
        }) : t._e(), t._v(" "), a("login", {
            attrs: {
                show: t.loginDialogInfo.showLogin
            },
            on: {
                hide: t.onHideLogin,
                login: t.afterLogin,
                err: t.toastHint
            }
        })], 2)
    }
      , o = []
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "dialog-hint dialog"
        }, [a("div", {
            staticClass: "hint-content"
        }, [a("div", {
            staticClass: "info"
        }, t._l(t.hintInfo.hintInfoArr, function(e, n) {
            return a("span", {
                key: n,
                staticClass: "item"
            }, [t._v(t._s(e))])
        })), t._v(" "), a("div", {
            staticClass: "button",
            on: {
                click: t.closeHint
            }
        }, [t._v("确定")])])])
    }
      , o = []
}
, , function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "dialog-timesout dialog"
        }, [a("div", {
            staticClass: "dialog-bg"
        }), t._v(" "), a("div", {
            staticClass: "dialog-content"
        }, [a("i", {
            staticClass: "close-icon",
            on: {
                click: t.closeInvite
            }
        }), t._v(" "), t._m(0), t._v(" "), a("div", {
            staticClass: "bottom-area",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.shareToGroup(e)
                }
            }
        }, [a("myButton", {
            staticClass: "btn-send",
            attrs: {
                btnClass: "yellow",
                btnName: "去邀请",
                btnWidth: 4
            }
        })], 1)])])
    }
      , o = [function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "welfare-content"
        }, [e("div", {
            staticClass: "content-bg"
        }), this._v(" "), e("div", {
            staticClass: "welfare-outer"
        }, [e("div", {
            staticClass: "welfare-inner"
        }, [e("span", {
            staticClass: "title"
        }, [this._v("邀请新玩家抽卡")]), this._v(" "), e("span", {
            staticClass: "hint"
        }, [this._v("抽卡数"), e("span", {
            staticClass: "red"
        }, [this._v(" +1 ")]), this._v("次 / 人")])])])])
    }
    ]
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "dialog-welfare dialog"
        }, [a("div", {
            staticClass: "dialog-bg"
        }), t._v(" "), a("div", {
            staticClass: "dialog-content"
        }, [a("i", {
            staticClass: "close-icon",
            on: {
                click: function(e) {
                    t.$emit("close-welfare")
                }
            }
        }), t._v(" "), t._m(0), t._v(" "), a("div", {
            staticClass: "bottom-area",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.shareToGroup(e)
                }
            }
        }, [a("myButton", {
            staticClass: "btn-send",
            attrs: {
                btnClass: "yellow",
                btnName: "分享到群",
                btnWidth: 4
            }
        })], 1)])])
    }
      , o = [function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "welfare-content"
        }, [a("div", {
            staticClass: "content-bg"
        }), t._v(" "), a("div", {
            staticClass: "welfare-outer"
        }, [a("div", {
            staticClass: "welfare-inner"
        }, [a("span", {
            staticClass: "title"
        }, [t._v("恭喜你获得"), a("span", {
            staticClass: "red"
        }, [t._v(" 2 ")]), t._v("次抽卡机会")]), t._v(" "), a("span", {
            staticClass: "hint"
        }, [t._v("分享到群再多得"), a("span", {
            staticClass: "red"
        }, [t._v(" 2 ")]), t._v("次")])])])])
    }
    ]
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "dialog-exchange dialog"
        }, [a("div", {
            staticClass: "dialog-bg"
        }), t._v(" "), a("div", {
            staticClass: "dialog-content"
        }, [a("i", {
            staticClass: "close-icon",
            on: {
                click: function(e) {
                    t.$emit("close-exchange")
                }
            }
        }), t._v(" "), a("div", {
            staticClass: "exchange-content"
        }, [a("span", {
            staticClass: "title"
        }, [t._v("恭喜你")]), t._v(" "), a("span", {
            staticClass: "sub-title"
        }, [t._v("获得集卡奖金")]), t._v(" "), a("div", {
            staticClass: "option up"
        }, [a("div", {
            class: ["circle", "left", t.type ? "" : "select", t.isOppo ? "oppo" : ""],
            on: {
                click: function(e) {
                    t.changePayType(0)
                }
            }
        }, [t.type ? t._e() : a("img", {
            staticClass: "select-img",
            attrs: {
                src: "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/dialog/icon_select.png"
            }
        })]), t._v(" "), t._m(0)]), t._v(" "), a("div", {
            staticClass: "option down"
        }, [a("div", {
            class: ["circle", "left", t.type ? "select" : "", t.isOppo ? "oppo" : ""],
            on: {
                click: function(e) {
                    t.changePayType(1)
                }
            }
        }, [t.type ? a("img", {
            staticClass: "select-img",
            attrs: {
                src: "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/dialog/icon_select.png"
            }
        }) : t._e()]), t._v(" "), t._m(1)])]), t._v(" "), a("section", {
            staticClass: "btn-area",
            on: {
                click: t.grabMoney
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "立即领取",
                btnWidth: 5
            }
        })], 1)])])
    }
      , o = [function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "right"
        }, [e("span", {
            staticClass: "upper"
        }, [this._v("金额膨胀 "), e("span", {
            staticClass: "red"
        }, [this._v("¥ "), e("span", {
            staticClass: "mount"
        }, [this._v("80")])])]), this._v(" "), e("span", {
            staticClass: "downer"
        }, [this._v("10元x8张美团外卖无门槛红包")])])
    }
    , function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "right"
        }, [e("span", {
            staticClass: "upper"
        }, [this._v("直接领取 "), e("span", {
            staticClass: "red"
        }, [this._v("¥ "), e("span", {
            staticClass: "mount"
        }, [this._v("66")])])]), this._v(" "), e("span", {
            staticClass: "downer"
        }, [this._v("绑卡后72小时内存入美团余额")])])
    }
    ]
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this.$createElement;
        this._self._c;
        return this._m(0)
    }
      , o = [function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "coupon-content"
        }, [a("div", {
            staticClass: "up"
        }, [a("div", {
            staticClass: "left"
        }, [a("span", {
            staticClass: "name"
        }, [t._v("无门槛红包")]), t._v(" "), a("span", {
            staticClass: "use-condition"
        }, [t._v("满10可用")])]), t._v(" "), a("div", {
            staticClass: "right"
        }, [t._v("¥"), a("span", {
            staticClass: "num"
        }, [t._v("15")])])]), t._v(" "), a("div", {
            staticClass: "down"
        }, [a("span", {
            staticClass: "use-desc"
        }, [t._v("6天后过期，北京地区使用")])])])
    }
    ]
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "dialog-timetask dialog"
        }, [a("div", {
            staticClass: "dialog-bg"
        }), t._v(" "), a("div", {
            staticClass: "dialog-content"
        }, [a("i", {
            staticClass: "close-icon",
            on: {
                click: function(e) {
                    t.$emit("close-timetask")
                }
            }
        }), t._v(" "), a("div", {
            staticClass: "timetask-content"
        }, [a("section", {
            staticClass: "time-area"
        }, [a("span", {
            staticClass: "title"
        }, [t._v("限时福利")]), t._v(" "), a("div", {
            staticClass: "sec-area"
        }, [a("span", {
            staticClass: "sec-rec"
        }, [t._v(t._s(t.secLeft[0]))]), t._v(" "), a("span", {
            staticClass: "sec-rec"
        }, [t._v(t._s(t.secLeft[1]))]), t._v(" "), a("span", {
            staticClass: "sec-doted"
        }, [t._v(":")]), t._v(" "), a("span", {
            staticClass: "sec-rec"
        }, [t._v(t._s(t.secLeft[2]))]), t._v(" "), a("span", {
            staticClass: "sec-rec"
        }, [t._v(t._s(t.secLeft[3]))]), t._v(" "), a("span", {
            staticClass: "sec-doted"
        }, [t._v(":")]), t._v(" "), a("span", {
            staticClass: "sec-rec"
        }, [t._v(t._s(t.secLeft[4]))]), t._v(" "), a("span", {
            staticClass: "sec-rec"
        }, [t._v(t._s(t.secLeft[5]))])])]), t._v(" "), a("section", {
            class: ["rule-area", "type" + (20016 == t.timeTaskInfo.taskType ? "-vip" : "")]
        }, [20011 == t.timeTaskInfo.taskType ? [a("span", {
            staticClass: "rule-word"
        }, [t._v("1小时内邀请5名")]), t._v(" "), a("span", {
            staticClass: "rule-word"
        }, [t._v("新玩家抽卡")])] : 20012 == t.timeTaskInfo.taskType ? [a("span", {
            staticClass: "rule-word"
        }, [t._v("1小时内邀请2名好友")]), t._v(" "), a("span", {
            staticClass: "rule-word"
        }, [t._v("领外卖新人红包")])] : 20015 == t.timeTaskInfo.taskType ? [a("span", {
            staticClass: "rule-word"
        }, [t._v("今日完成")]), t._v(" "), a("span", {
            staticClass: "rule-word"
        }, [t._v("夜宵／超市／水果中任意1单")])] : 20016 == t.timeTaskInfo.taskType ? [a("span", {
            staticClass: "rule-word"
        }, [t._v("邀请10名新玩家抽卡")]), t._v(" "), a("span", {
            staticClass: "rule-word"
        }, [t._v("得万能卡VIP专场参与机会")])] : t._e(), t._v(" "), 20016 != t.timeTaskInfo.taskType ? a("span", {
            staticClass: "rule-word"
        }, [t._v("\n          立得抽卡机会\n        ")]) : t._e(), t._v(" "), 20011 == t.timeTaskInfo.taskType ? a("span", {
            staticClass: "times"
        }, [a("span", {
            staticClass: "times-big"
        }, [t._v("10")]), t._v("\n          次"), a("span", {
            staticClass: "old-times"
        }, [t._v("5次")])]) : 20012 == t.timeTaskInfo.taskType ? a("span", {
            staticClass: "times"
        }, [a("span", {
            staticClass: "times-big"
        }, [t._v("8")]), t._v("\n          次"), a("span", {
            staticClass: "old-times"
        }, [t._v("6次")])]) : 20015 == t.timeTaskInfo.taskType ? a("span", {
            staticClass: "times"
        }, [a("span", {
            staticClass: "times-big"
        }, [t._v("4")]), t._v("\n          次"), a("span", {
            staticClass: "old-times"
        }, [t._v("2次")])]) : 20016 == t.timeTaskInfo.taskType ? a("div", {
            staticClass: "times"
        }, [a("div", {
            staticClass: "vip-master"
        }, [t._v("万能卡VIP专场时间")]), t._v(" "), a("div", {
            staticClass: "vip-master"
        }, [t._v("7月15日 20:00")])]) : t._e()], 2)]), t._v(" "), a("div", {
            staticClass: "btn-send",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.goBtn(e)
                }
            }
        }, [a("myButton", {
            staticClass: "btn-send",
            attrs: {
                btnClass: "yellow",
                btnName: 20015 == t.timeTaskInfo.taskType ? "去下单" : "去邀请",
                btnWidth: 4
            }
        })], 1)])])
    }
      , o = []
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "dialog-share dialog"
        }, [a("div", {
            staticClass: "dialog-content"
        }, [t.shareCardInfo.isBeg || t.shareCardInfo.isSelf || 2 != t.shareCardInfo.sendCardInfo.cardStatus ? t.shareCardInfo.isBeg || t.shareCardInfo.isSelf || 3 != t.shareCardInfo.sendCardInfo.cardStatus ? [a("i", {
            staticClass: "close-icon",
            on: {
                click: function(e) {
                    t.$emit("onCloseShareCard")
                }
            }
        }), t._v(" "), a("div", {
            staticClass: "user-bg"
        }), t._v(" "), a("div", {
            staticClass: "user-content"
        }, [a("img", {
            staticClass: "user-content-img",
            attrs: {
                src: t.shareCardInfo.headUrl
            }
        })]), t._v(" "), a("div", {
            staticClass: "card-bg"
        }), t._v(" "), a("div", {
            staticClass: "card-content"
        }, [a("span", {
            staticClass: "nickname"
        }, [t._v(t._s(t.headNickName))]), t._v(" "), t.shareCardInfo.isBeg ? [t.shareCardInfo.isSelf ? [t.begCardInfo.begCardGivenCount > 0 ? [a("span", {
            staticClass: "share-info"
        }, [t._v("你收到了 "), a("span", {
            staticClass: "share-num"
        }, [t._v(t._s(t.begCardInfo.begCardGivenCount))]), t._v(" 张 "), a("span", {
            staticClass: "share-num"
        }, [t._v(t._s(t.begCardInfo.begCardName))]), t._v(" 卡")])] : [a("span", {
            staticClass: "share-info"
        }, [t._v("还没有人送你哦")])]] : [a("span", {
            staticClass: "share-info"
        }, [t._v("请你送TA "), a("span", {
            staticClass: "share-num"
        }, [t._v("1")]), t._v(" 张 "), a("span", {
            staticClass: "share-num"
        }, [t._v(t._s(t.begCardInfo.begCardName))]), t._v(" 卡")])]] : [t.commonInfo.isLogin ? [t.shareCardInfo.isSelf ? [0 == t.sendCardInfo.cardStatus ? [a("span", {
            staticClass: "share-info"
        }, [t._v("还没有人领取你的卡")])] : 1 == t.sendCardInfo.cardStatus ? [a("span", {
            staticClass: "share-info"
        }, [t._v("有好友领取了你的卡片")])] : [a("span", {
            staticClass: "share-info"
        }, [t._v("你的卡被全部领走了")])]] : [t.sendCardInfo.isAllHave ? [a("span", {
            staticClass: "share-info"
        }, [t._v("分享的卡你都有啦")])] : 2 != t.shareCardInfo.sendCardInfo.cardStatus ? [a("span", {
            staticClass: "share-info"
        }, [t._v("还剩"), a("span", {
            staticClass: "share-num"
        }, [t._v(t._s(t.shareCardInfo.sendCardInfo.cardNum))]), t._v("张"), t.sendCardInfo.isSingle ? [a("span", {
            staticClass: "share-num"
        }, [t._v(t._s(t.getNameByType(t.sendCardInfo.sendCardsList[0].type)))])] : t._e(), t._v("卡,快收下吧")], 2)] : t._e()]] : [2 != t.shareCardInfo.sendCardInfo.cardStatus ? [a("span", {
            staticClass: "share-info"
        }, [t._v("还剩"), a("span", {
            staticClass: "share-num"
        }, [t._v(t._s(t.shareCardInfo.sendCardInfo.cardNum))]), t._v("张"), t.sendCardInfo.isSingle ? [a("span", {
            staticClass: "share-num"
        }, [t._v(t._s(t.getNameByType(t.sendCardInfo.sendCardsList[0].type)))])] : t._e(), t._v("卡,快收下吧")], 2)] : t._e()]], t._v(" "), a("div", {
            class: ["card-list-outer", t.cardsList.length > 1 ? "" : "single"]
        }, [t.cardsList.length > 1 ? [a("ul", {
            staticClass: "card-list",
            style: {
                width: 2 == t.cardsList.length ? "4.2rem" : 2 * t.cardsList.length + "rem"
            }
        }, t._l(t.cardsList, function(e, n) {
            return a("li", {
                key: n,
                staticClass: "card-item"
            }, [a("teamCard", {
                attrs: {
                    num: e.num,
                    teamId: e.type,
                    size: t.cardsList.length > 1 ? "l" : "xl",
                    allHave: t.sendCardInfo.isAllHave && !t.shareCardInfo.isSelf
                }
            })], 1)
        }))] : [a("div", {
            staticClass: "card-list-single"
        }, [a("teamCard", {
            attrs: {
                num: t.cardsList[0].num,
                teamId: t.cardsList[0].type,
                size: "xl",
                allHave: t.sendCardInfo.isAllHave && !t.shareCardInfo.isSelf
            }
        })], 1)]], 2), t._v(" "), t.shareCardInfo.isBeg && t.commonInfo.isLogin && !t.shareCardInfo.isSelf && t.begCardInfo.ownCardNum > 1 ? a("div", {
            class: ["own-hint-mid", "brown", t.cardsList.length > 1 ? "" : "single"]
        }, [t._v("\n            你有" + t._s(t.begCardInfo.ownCardNum) + "张" + t._s(t.begCardInfo.begCardName) + "卡\n          ")]) : t._e()], 2)] : [a("i", {
            staticClass: "close-icon",
            on: {
                click: function(e) {
                    t.$emit("onCloseShareCard")
                }
            }
        }), t._v(" "), t._m(1)] : [a("i", {
            staticClass: "close-icon",
            on: {
                click: function(e) {
                    t.$emit("onCloseShareCard")
                }
            }
        }), t._v(" "), t._m(0)]], 2), t._v(" "), a("div", {
            staticClass: "bottom-area"
        }, [t.shareCardInfo.isBeg ? [t.commonInfo.isLogin ? [t.shareCardInfo.isSelf ? [t.begCardInfo.begCardGivenCount > 0 ? [a("div", {
            staticClass: "btn-open",
            on: {
                click: t.goShareRecordPage
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "查看收卡记录",
                btnWidth: 4
            }
        })], 1)] : [a("div", {
            staticClass: "btn-open",
            on: {
                click: t.begCardAgain
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "请好友赠送",
                btnWidth: 4
            }
        })], 1)]] : [t.begCardInfo.ownCardNum > 1 ? [a("div", {
            staticClass: "btn-open",
            on: {
                click: t.giveCards
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "送一张给TA",
                btnWidth: 4
            }
        })], 1)] : [a("div", {
            staticClass: "btn-open"
        }, [1 == t.begCardInfo.ownCardNum ? a("span", {
            staticClass: "own-hint-mid"
        }, [t._v("你仅有一张" + t._s(t.begCardInfo.begCardName) + "卡,无法赠送")]) : a("span", {
            staticClass: "own-hint-mid"
        }, [t._v("你没有" + t._s(t.begCardInfo.begCardName) + "卡哦")])])]]] : [a("div", {
            staticClass: "btn-open",
            on: {
                click: function(e) {
                    t.goLogin(2)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "一键登录赠送",
                btnWidth: 4
            }
        })], 1)]] : [2 == t.shareCardInfo.sendCardInfo.cardStatus ? [t.commonInfo.isLogin && t.shareCardInfo.isSelf ? [a("div", {
            staticClass: "btn-open",
            on: {
                click: function(e) {
                    t.goShareRecordPage(1)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "查看领卡记录",
                btnWidth: 4
            }
        })], 1)] : t._e()] : [t.commonInfo.isLogin ? [t.shareCardInfo.isSelf ? [0 == t.sendCardInfo.cardStatus ? [a("div", {
            staticClass: "btn-open",
            on: {
                click: t.giveCardsAgain
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "继续分享",
                btnWidth: 4
            }
        })], 1)] : 1 == t.sendCardInfo.cardStatus ? [a("div", {
            staticClass: "btn-open btn-row"
        }, [a("div", {
            on: {
                click: function(e) {
                    t.goShareRecordPage(1)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "bigWhite",
                btnName: "查看领卡记录",
                btnWidth: 2.9
            }
        })], 1), t._v(" "), a("div", {
            on: {
                click: t.giveCardsAgain
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "继续分享",
                btnWidth: 2.9
            }
        })], 1)])] : [a("div", {
            staticClass: "btn-open",
            on: {
                click: function(e) {
                    t.goShareRecordPage(1)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "查看领卡记录",
                btnWidth: 4
            }
        })], 1)]] : [t.sendCardInfo.cardStatus < 2 ? [t.sendCardInfo.isAllHave ? a("div", {
            staticClass: "btn-open",
            on: {
                click: t.giveCardsAgain
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "分享给好友",
                btnWidth: 4
            }
        })], 1) : a("div", {
            staticClass: "btn-open",
            on: {
                click: t.getCards
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "收下卡",
                btnWidth: 4
            }
        })], 1)] : t._e()]] : [a("div", {
            staticClass: "btn-open",
            on: {
                click: function(e) {
                    e.stopPropagation(),
                    t.goLogin(1)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "一键登录领取",
                btnWidth: 4
            }
        })], 1)]]]], 2)])
    }
      , o = [function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "card-over"
        }, [e("img", {
            staticClass: "card-over-img",
            attrs: {
                src: "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/card_over.png"
            }
        })])
    }
    , function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "card-over"
        }, [e("img", {
            staticClass: "card-over-img",
            attrs: {
                src: "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/card_already.png"
            }
        })])
    }
    ]
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("transition", {
            on: {
                enter: t.initShow
            }
        }, [a("div", {
            class: ["dialog-dice", "dialog", t.animateData.showBgOther ? "" : "no-bg"]
        }, [a("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.isFront && t.animateData.showBgOther,
                expression: "isFront && animateData.showBgOther"
            }],
            staticClass: "dialog-bg"
        }), t._v(" "), a("div", {
            staticClass: "dialog-content"
        }, [a("i", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.animateData.showBgOther,
                expression: "animateData.showBgOther"
            }],
            staticClass: "close-icon",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.closeDialog(e)
                }
            }
        }), t._v(" "), a("div", {
            staticClass: "dice-card"
        }, [a("transition", {
            attrs: {
                name: "bounce1"
            }
        }, [t.isFront ? t._e() : a("img", {
            staticClass: "card-img back",
            attrs: {
                src: t.diceCardInfo.backImgUrl
            }
        })]), t._v(" "), a("transition", {
            attrs: {
                name: "bounce2"
            },
            on: {
                "after-leave": t.updateHomeInfo
            }
        }, [t.isFront && 0 == t.cardType && !t.animateData.disappear ? a("teamCard", {
            staticClass: "card-img-front",
            attrs: {
                num: 1,
                size: "xxl",
                teamId: t.teamCardInfo.teamCardType
            }
        }) : t.isFront && 1 == t.cardType && !t.animateData.disappear ? a("cardDiceCoupon", {
            staticClass: "card-img-front",
            attrs: {
                couponInfo: t.couponCardDetail
            }
        }) : t.isFront && 2 == t.cardType && !t.animateData.disappear ? a("img", {
            staticClass: "card-img scene card-img-front",
            attrs: {
                src: t.sceneDesc.imgUrl
            }
        }) : t.isFront && 3 == t.cardType && !t.animateData.disappear ? a("img", {
            staticClass: "card-img activity card-img-front",
            attrs: {
                src: t.activityDetail.imgUrl
            }
        }) : t._e()], 1)], 1)]), t._v(" "), a("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.animateData.showBgOther,
                expression: "animateData.showBgOther"
            }],
            staticClass: "bottom-area"
        }, [t.isFront ? [0 == t.cardType ? void 0 : 1 == t.cardType ? [a("div", {
            staticClass: "btn-area"
        }, [0 == t.couponCardDetail.couponSource || 2 == t.couponCardDetail.couponSource || 3 == t.couponCardDetail.couponSource ? [a("div", {
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.goUseCoupon(e)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "bigWhite",
                btnName: "去使用",
                btnWidth: 2.89
            }
        })], 1), t._v(" "), a("div", {
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.goGetCoupon(e)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "收下红包",
                btnWidth: 2.89
            }
        })], 1)] : [a("div", {
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.goGetCoupon(e)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "收下红包",
                btnWidth: 4
            }
        })], 1)]], 2)] : 2 == t.cardType ? [a("div", {
            staticClass: "btn-area scene",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.clickScene(e)
                }
            }
        }, [t.diceCardInfo.timesLeft > 0 ? a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "继续抽卡",
                btnWidth: 4
            }
        }) : a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "增加抽卡数",
                btnWidth: 4
            }
        })], 1), t._v(" "), a("span", {
            staticClass: "times-left"
        }, [t._v("还剩 " + t._s(t.diceCardInfo.timesLeft) + " 次抽卡机会")])] : 3 == t.cardType ? [a("div", {
            staticClass: "btn-area"
        }, [a("div", {
            on: {
                click: t.goActivityUrl
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "bigWhite",
                btnName: "去抢购",
                btnWidth: 2.89
            }
        })], 1), t._v(" "), a("div", {
            on: {
                click: t.clickScene
            }
        }, [t.diceCardInfo.timesLeft > 0 ? a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "继续抽卡",
                btnWidth: 2.89
            }
        }) : a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "增加抽卡数",
                btnWidth: 2.89
            }
        })], 1)]), t._v(" "), a("span", {
            staticClass: "times-left"
        }, [t._v("还剩 " + t._s(t.diceCardInfo.timesLeft) + " 次抽卡机会")])] : t._e()] : [a("div", {
            staticClass: "btn-open",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.openDice(e)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "点击翻开",
                btnWidth: 4
            }
        })], 1), t._v(" "), a("span", {
            staticClass: "times-left"
        }, [t._v("还剩 " + t._s(t.diceCardInfo.timesLeft) + " 次抽卡机会")])]], 2)])])
    }
      , o = []
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "card-dice-coupon"
        }, [a("h5", {
            staticClass: "title"
        }, [t._v(t._s(t.couponInfo.couponDisplayName))]), t._v(" "), a("div", {
            staticClass: "logo"
        }, [a("img", {
            staticClass: "logo-img",
            attrs: {
                src: t.couponInfo.couponLogoPic
            }
        })]), t._v(" "), a("span", {
            staticClass: "mount"
        }, [t._v(t._s(1 == t.couponInfo.couponType ? "¥" : "折")), a("span", {
            staticClass: "num"
        }, [t._v(t._s(t.couponInfo.mount))])]), t._v(" "), a("span", {
            staticClass: "use-condition"
        }, [t._v(t._s(t.couponInfo.useCondition))]), t._v(" "), 0 == t.couponInfo.couponSource || 2 == t.couponInfo.couponSource || 3 == t.couponInfo.couponSource ? a("span", {
            staticClass: "use-desc"
        }, [t._v(t._s(t.couponInfo.useDesc))]) : t._e()])
    }
      , o = []
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "main"
        }, [a("h5", {
            staticClass: "title"
        }, [t._v("恭喜你获得了")]), t._v(" "), 2 == t.exchangeInfo.exchangeStatus ? [a("span", {
            staticClass: "mount"
        }, [t._v("¥"), a("span", {
            staticClass: "num"
        }, [t._v(t._s(t.exchangeInfo.couponMount))])]), t._v(" "), 1 == t.exchangeInfo.payType ? [a("div", {
            staticClass: "hint hint-top"
        }, [t._v("奖金将在72小时内转入美团余额")]), t._v(" "), a("div", {
            staticClass: "hint"
        }, [t._v("可登录美团外卖app-我的-我的钱包查看")]), t._v(" "), a("div", {
            staticClass: "hint"
        }, [t._v("若72小时内解绑银行卡，将无法领取奖励")])] : [t._m(0), t._v(" "), a("div", {
            staticClass: "hint"
        }, [t._v("红包将在72小时内放入你的账号")]), t._v(" "), a("div", {
            staticClass: "hint"
        }, [t._v("可登录美团外卖app-我的-红包查看")])], t._v(" "), a("div", {
            staticClass: "btn-area",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.inviteNew(e)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "邀好友再赚10元",
                btnWidth: 5
            }
        })], 1)] : t._e()], 2)
    }
      , o = [function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "hint-sub"
        }, [e("span", {
            staticClass: "red"
        }, [this._v("10元x8张")]), this._v(" 美团外卖无门槛通用红包")])
    }
    ]
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            class: ["master-card-hint"]
        }, [t.masterCardDiceInfo.advanceBanner ? [a("div", {
            staticClass: "master-activity-prebanner"
        }, [a("div", {
            staticClass: "banner-title"
        }, [t._v("万能卡限时抢")]), t._v(" "), a("div", {
            staticClass: "pre-desc"
        }, [t._v(t._s(t.masterCardDiceInfo.advanceDesc))]), t._v(" "), t._m(0)])] : [a("div", {
            staticClass: "master-activity-banner"
        }, [a("div", {
            staticClass: "banner-title"
        }, [t._v(t._s(t.masterCardDiceInfo.special ? "万能卡VIP专场" : "万能卡限时抢"))]), t._v(" "), t.masterCardDiceInfo.mCardLeftNum > 0 ? [a("div", {
            staticClass: "card-left"
        }, [t._v("\n          还剩"), a("span", {
            staticClass: "num-left"
        }, [t._v(t._s(t.masterCardDiceInfo.mCardLeftNum))]), t._v("张\n        ")])] : [a("div", {
            staticClass: "pre-desc"
        }, [t._v(t._s(t.masterCardDiceInfo.advanceDesc))])], t._v(" "), t._m(1)], 2)]], 2)
    }
      , o = [function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "icon"
        }, [e("img", {
            staticClass: "icon-img",
            attrs: {
                src: "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/rush_no.png"
            }
        })])
    }
    , function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "icon"
        }, [e("img", {
            staticClass: "icon-img",
            attrs: {
                src: "https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/rush.gif"
            }
        })])
    }
    ]
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "dialog-card dialog"
        }, [a("div", {
            staticClass: "dialog-content"
        }, [a("i", {
            staticClass: "close-icon",
            on: {
                click: function(e) {
                    t.$emit("close-teamcard")
                }
            }
        }), t._v(" "), a("div", {
            staticClass: "tcard"
        }, [a("teamCard", {
            attrs: {
                num: t.teamCardInfo.num > 0 ? 1 : 0,
                size: "xxl",
                teamId: t.teamCardInfo.type
            }
        })], 1), t._v(" "), t.teamCardInfo.num > 1 ? a("div", {
            staticClass: "btn-send",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.giveCard(e)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "送一张给好友",
                btnWidth: 4
            }
        })], 1) : t.teamCardInfo.num < 1 && !t.cardsInfo.isReach ? a("div", {
            staticClass: "btn-send",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.askCard(e)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "yellow",
                btnName: "请好友赠送",
                btnWidth: 4
            }
        })], 1) : t._e()])])
    }
      , o = []
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "bottom"
        }, [1 == t.commonInfo.bntype ? [t.commonInfo.isLogin ? [a("div", {
            staticClass: "entry-hint"
        }), t._v(" "), a("div", {
            staticClass: "entry-chnl"
        }, [t._l(t.activityAdInfo.extraBanners, function(e, n) {
            return [a("div", {
                key: n,
                staticClass: "entry-banner",
                on: {
                    click: function(a) {
                        t.goChannelUrl(e.clickUrl)
                    }
                }
            }, [a("img", {
                staticClass: "entry-img",
                attrs: {
                    src: e.picUrl
                }
            })])]
        })], 2)] : t._e()] : [t.activityAdInfo.haveActBanner ? a("div", {
            staticClass: "activity",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.goActUrl(e)
                }
            }
        }, [a("img", {
            staticClass: "activity-img",
            attrs: {
                src: t.activityAdInfo.actBanner.picUrl
            }
        })]) : t._e(), t._v(" "), a("div", {
            staticClass: "btn",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.goWaimai(e)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnName: "去美团外卖首页",
                btnClass: "green",
                btnWidth: 5.01
            }
        })], 1)]], 2)
    }
      , o = []
}
, function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            staticClass: "home-cards"
        }, [a("section", {
            staticClass: "cards"
        }, [t._l(t.cardsInfo.cardsOwnList, function(e, n) {
            return [0 == n || 4 == n ? [a("div", {
                key: n,
                staticClass: "tcard"
            }, [a("teamCard", {
                staticClass: "empty",
                attrs: {
                    size: "s"
                }
            })], 1), t._v(" "), a("div", {
                key: n,
                staticClass: "tcard",
                on: {
                    click: function(a) {
                        t.$emit("clickCard", e.num, e.type)
                    }
                }
            }, [a("teamCard", {
                attrs: {
                    num: e.num,
                    size: "s",
                    teamId: e.type,
                    isReach: t.cardsInfo.isReach,
                    isNoLogin: !t.commonInfo.isLogin
                }
            })], 1)] : [a("div", {
                key: n,
                staticClass: "tcard",
                on: {
                    click: function(a) {
                        t.$emit("clickCard", e.num, e.type)
                    }
                }
            }, [a("teamCard", {
                attrs: {
                    num: e.num,
                    size: "s",
                    teamId: e.type,
                    isReach: t.cardsInfo.isReach,
                    isNoLogin: !t.commonInfo.isLogin
                }
            })], 1)]]
        })], 2), t._v(" "), t.commonInfo.isLogin ? [t.cardsInfo.overOpenLotteryTime ? [1 == t.exchangeInfo.exchangeStatus ? a("div", {
            staticClass: "btn-attain",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.getMoney(e)
                }
            }
        }, [a("myButton", {
            staticClass: "card",
            attrs: {
                btnClass: "yellow",
                btnName: "领取66元",
                btnWidth: 5
            }
        })], 1) : 0 == t.exchangeInfo.exchangeStatus ? a("div", {
            staticClass: "btn-attain"
        }, [a("myButton", {
            staticClass: "card btn-over",
            attrs: {
                btnClass: "gray",
                btnName: "活动已结束",
                btnWidth: 5
            }
        })], 1) : t._e()] : [t.cardsInfo.isReach ? [t.diceCardInfo.timesLeft > 0 ? a("div", {
            staticClass: "btn-attain",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.diceCard(e)
                }
            }
        }, [a("myButton", {
            staticClass: "card",
            attrs: {
                btnClass: "yellow",
                btnName: "继续抽卡送好友",
                btnWidth: 5
            }
        })], 1) : a("div", {
            staticClass: "btn-attain"
        }, [a("myButton", {
            staticClass: "card",
            attrs: {
                btnClass: "gray",
                btnName: "明天继续抽3次",
                btnWidth: 5
            }
        })], 1)] : [t.diceCardInfo.timesLeft > 0 ? a("div", {
            staticClass: "btn-attain",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.diceCard(e)
                }
            }
        }, [a("myButton", {
            staticClass: "card",
            attrs: {
                btnClass: "yellow",
                btnName: "立即抽" + t.diceCardInfo.timesLeft + "次",
                btnWidth: 5
            }
        })], 1) : a("div", {
            staticClass: "btn-attain"
        }, [a("myButton", {
            staticClass: "card",
            attrs: {
                btnClass: "gray",
                btnName: "明天继续抽3次",
                btnWidth: 5
            }
        })], 1)]]] : [a("div", {
            staticClass: "btn-attain",
            on: {
                click: t.login
            }
        }, [a("myButton", {
            staticClass: "card",
            attrs: {
                btnClass: "yellow",
                btnName: "立即抽卡",
                btnWidth: 5
            }
        })], 1)], t._v(" "), t.commonInfo.isLogin && !t.cardsInfo.overOpenLotteryTime ? a("div", {
            staticClass: "btn-sub"
        }, [a("div", {
            staticClass: "btn-item",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.giveCard(e)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "white",
                btnName: "赠送重复卡",
                btnWidth: 2.4
            }
        })], 1), t._v(" "), a("div", {
            staticClass: "btn-item",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.addAttainTimes(e)
                }
            }
        }, [a("myButton", {
            attrs: {
                btnClass: "white",
                btnName: "增加抽卡数",
                btnWidth: 2.4,
                btnHint: t.btnHint
            }
        })], 1)]) : t._e()], 2)
    }
      , o = []
}
, , function(t, e, a) {
    "use strict";
    a.d(e, "a", function() {
        return n
    }),
    a.d(e, "b", function() {
        return o
    });
    var n = function() {
        var t = this
          , e = t.$createElement
          , a = t._self._c || e;
        return a("div", {
            class: ["home-header", t.commonInfo.isLogin ? "" : "unlogin"]
        }, [a("section", {
            staticClass: "header"
        }, [t.listLen > 0 ? a("div", {
            staticClass: "main-info"
        }, [a("div", {
            staticClass: "info-list"
        }, [a("span", {
            key: Math.random(),
            class: ["item", t.curMsgArr[0].indexOf("全国") > -1 ? "" : "item-f"]
        }, [t._v(t._s(t.curMsgArr[0])), a("span", {
            staticClass: "yellow"
        }, [t._v(t._s(t.curMsgArr[1]))]), t._v(t._s(t.curMsgArr[2]))])])]) : t._e(), t._v(" "), a("div", {
            staticClass: "ac-rules",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.goRule(e)
                }
            }
        }, [t._v("活动规则")])]), t._v(" "), t.commonInfo.isLogin && t.exchangeStatus < 2 ? a("section", {
            staticClass: "cards-info"
        }, [a("div", {
            staticClass: "coupons card",
            on: {
                click: t.goCouponPage
            }
        }, [a("i", {
            staticClass: "icon"
        }), t._v(" "), a("span", {
            staticClass: "name"
        }, [t._v("红包")]), t._v(" "), t.homeHeaderInfo.couponCount > 0 ? a("span", {
            staticClass: "num"
        }, [t._v("x " + t._s(t.homeHeaderInfo.couponCount))]) : t._e()]), t._v(" "), a("div", {
            staticClass: "master-card card",
            on: {
                click: t.getMCardInfo
            }
        }, [a("i", {
            staticClass: "icon"
        }, [1 == t.homeHeaderInfo.luckyCardStatus ? a("i", {
            staticClass: "red-dot"
        }) : t._e()]), t._v(" "), a("span", {
            staticClass: "name"
        }, [t._v("万能卡")]), t._v(" "), 2 == t.homeHeaderInfo.luckyCardStatus ? a("span", {
            staticClass: "num"
        }, [t._v("x 1")]) : t._e()])]) : t._e()])
    }
      , o = []
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, ".dialog-hint[data-v-58290241]{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);z-index:100}.hint-content[data-v-58290241]{margin:3.28rem auto 0;width:5.8rem;background:#fff;border-radius:.2rem}.info[data-v-58290241]{padding:.3rem .5rem .1rem;border-bottom:.02rem solid #f0f0f0}.item[data-v-58290241]{display:block;color:#4a4a4a;font-size:.32rem;line-height:.62rem}.button[data-v-58290241]{color:#ffb200;font-size:.36rem;line-height:.96rem;text-align:center}", ""])
}
, function(t, e, a) {
    var n = a(206);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("042d3229", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(46)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(108)
      , s = a(0);
    var c = function(t) {
        a(207)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-58290241", null);
    e.default = d.exports
}
, , , function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.dialog-bg[data-v-58014efb]{position:absolute;top:0;left:50%;margin-left:-6rem;width:12rem;height:12rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/light.png") no-repeat;background-size:100%;transform-origin:50% 50%;z-index:-1;animation:lightRotate-data-v-58014efb 10s linear 0s infinite}@keyframes lightRotate-data-v-58014efb{to{transform:rotate(1turn)}}.content-bg[data-v-58014efb]{display:block;width:5.95rem;height:2.35rem;margin:0 auto;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/dialog/times_out_bg.png") no-repeat;background-size:100% 100%;position:relative;z-index:10}.welfare-outer[data-v-58014efb]{width:5.68rem;height:4.33rem;margin:-1.08rem auto 0;background-image:linear-gradient(-180deg,#ffe461 10%,#ffcc21);border-radius:.3rem;z-index:1;overflow:hidden}.welfare-inner[data-v-58014efb]{width:5.2rem;height:3.25rem;background:#fff;margin:.84rem auto 0;border-radius:.3rem;overflow:hidden}.dialog-timesout[data-v-58014efb]{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);color:#560924}.dialog-content[data-v-58014efb]{width:6rem;margin:1.2rem auto 0;overflow:hidden}.close-icon[data-v-58014efb]{display:block;float:right;width:.7rem;height:.7rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/icon_close.png") no-repeat;background-size:100% 100%}.welfare-content[data-v-58014efb]{margin:.7rem auto 0;width:5.95rem}.title[data-v-58014efb]{display:block;margin:1.08rem auto .27rem;font-size:.36rem;line-height:.36rem;text-align:center}.red[data-v-58014efb]{color:#d0021b}.hint[data-v-58014efb]{display:block;margin-bottom:.2rem;font-size:.36rem;line-height:.36rem;text-align:center}.bottom-area[data-v-58014efb]{margin:.5rem auto 0;display:flex;justify-content:center;width:6rem}', ""])
}
, function(t, e, a) {
    var n = a(211);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("e40020be", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(48)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(110)
      , s = a(0);
    var c = function(t) {
        a(212)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-58014efb", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.dialog-bg[data-v-191aeb45]{position:absolute;top:0;left:50%;margin-left:-6rem;width:12rem;height:12rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/light.png") no-repeat;background-size:100%;transform-origin:50% 50%;z-index:-1;animation:lightRotate-data-v-191aeb45 10s linear 0s infinite}@keyframes lightRotate-data-v-191aeb45{to{transform:rotate(1turn)}}.content-bg[data-v-191aeb45]{display:block;width:5.95rem;height:2.75rem;margin:0 auto;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/dialog/new_welfare_bg.png") no-repeat;background-size:100% 100%;position:relative;z-index:10}.welfare-outer[data-v-191aeb45]{width:5.68rem;height:4.33rem;margin:-1.08rem auto 0;background-image:linear-gradient(-180deg,#ffe461 10%,#ffcc21);border-radius:.3rem;z-index:1;overflow:hidden}.welfare-inner[data-v-191aeb45]{width:5.2rem;height:3.25rem;background:#fff;margin:.84rem auto 0;border-radius:.3rem;overflow:hidden}.dialog-welfare[data-v-191aeb45]{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);color:#560924}.dialog-content[data-v-191aeb45]{width:6rem;margin:1.2rem auto 0;overflow:hidden}.close-icon[data-v-191aeb45]{display:block;float:right;width:.7rem;height:.7rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/icon_close.png") no-repeat;background-size:100% 100%}.welfare-content[data-v-191aeb45]{margin:.7rem auto 0;width:5.95rem}.title[data-v-191aeb45]{display:block;margin:1.08rem auto .27rem;font-size:.36rem;line-height:.36rem;text-align:center}.red[data-v-191aeb45]{color:#d0021b}.hint[data-v-191aeb45]{display:block;margin-bottom:.2rem;font-size:.36rem;line-height:.36rem;text-align:center}.bottom-area[data-v-191aeb45]{margin:.5rem auto 0;display:flex;justify-content:center;width:6rem}', ""])
}
, function(t, e, a) {
    var n = a(214);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("74e56100", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(49)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(111)
      , s = a(0);
    var c = function(t) {
        a(215)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-191aeb45", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.coupon-content[data-v-ffcd9d84]{margin:.32rem auto 0;width:4.92rem;height:1.83rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/dialog/dialog_coupon_bg.png") no-repeat;background-size:100% 100%}.up[data-v-ffcd9d84]{width:4.32rem;height:1.19rem;margin:0 .3rem;border-bottom:.02rem dashed #e4e4e4}.left[data-v-ffcd9d84]{float:left;margin:.14rem 0 0}.right[data-v-ffcd9d84]{display:flex;float:right;margin:.11rem 0 0;align-items:baseline;color:#ff3e26;font-size:.4rem;height:1rem;line-height:1rem}.num[data-v-ffcd9d84]{font-size:1rem;font-weight:700}.name[data-v-ffcd9d84]{display:block;font-size:.32rem;line-height:.45rem;color:#ef361e}.use-condition[data-v-ffcd9d84]{display:block;margin-top:.06rem;font-size:.28rem;color:#666;line-height:.4rem}.use-desc[data-v-ffcd9d84]{display:block;margin:.14rem 0 0 .3rem;font-size:.24rem;color:#999;line-height:.33rem}', ""])
}
, function(t, e, a) {
    var n = a(217);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("321faa2c", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(50)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(113)
      , s = a(0);
    var c = function(t) {
        a(218)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-ffcd9d84", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.option[data-v-1d1aa488]{margin:.55rem auto 0;position:relative;height:1.2rem}.option.down[data-v-1d1aa488]{margin-top:.21rem}.circle.left[data-v-1d1aa488]{display:block;position:absolute;top:.26rem;left:.98rem;width:.68rem;height:.68rem;border:.02rem solid #521f31;border-radius:.36rem}.circle.left.oppo[data-v-1d1aa488]{border:.03rem solid #521f31}.circle .select-img[data-v-1d1aa488]{display:block;width:.55rem;height:.34rem;margin:.17rem auto 0}.right[data-v-1d1aa488]{position:absolute;top:0;left:1.99rem;height:1.17rem;width:3.25rem;border-bottom:.02rem dashed #560924}.upper[data-v-1d1aa488]{display:block;font-size:.32rem;line-height:.48rem;vertical-align:bottom;color:#4a4a4a}.upper .mount[data-v-1d1aa488]{font-size:.64rem;color:red}.upper .red[data-v-1d1aa488]{color:red}.downer[data-v-1d1aa488]{display:block;margin-top:.2rem;font-size:.24rem;line-height:.24rem;color:#4a4a4a;white-space:nowrap}.dialog-bg[data-v-1d1aa488]{position:absolute;top:0;left:50%;margin-left:-6rem;width:12rem;height:12rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/light.png") no-repeat;background-size:100%;transform-origin:50% 50%;z-index:-1;animation:lightRotate-data-v-1d1aa488 10s linear 0s infinite}@keyframes lightRotate-data-v-1d1aa488{to{transform:rotate(1turn)}}.dialog-exchange[data-v-1d1aa488]{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);color:#560924}.dialog-content[data-v-1d1aa488]{width:6.2rem;margin:.7rem auto 0;overflow:hidden;position:relative}.close-icon[data-v-1d1aa488]{display:block;float:right;width:.7rem;height:.7rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/icon_close.png") no-repeat;background-size:100% 100%}.exchange-content[data-v-1d1aa488]{margin:1.25rem auto 0;width:6.2rem;height:8.29rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/dialog/exchange_bg.png") no-repeat;background-size:100% 100%;overflow:hidden}.title[data-v-1d1aa488]{font-size:.64rem;margin-top:.75rem}.sub-title[data-v-1d1aa488],.title[data-v-1d1aa488]{display:block;color:#a40000;line-height:.48rem;text-align:center}.sub-title[data-v-1d1aa488]{font-size:.48rem;margin-top:.34rem}.btn-area[data-v-1d1aa488]{position:absolute;bottom:.31rem;left:50%;margin-left:-2.5rem}', ""])
}
, function(t, e, a) {
    var n = a(220);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("d352b2c8", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(51)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(112)
      , s = a(0);
    var c = function(t) {
        a(221)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-1d1aa488", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.rule-area[data-v-78ceac5a]{margin:.28rem auto 0}.rule-area.type-vip[data-v-78ceac5a]{margin-top:.36rem}.rule-word[data-v-78ceac5a]{display:block;text-align:center;line-height:.36rem;margin-top:.28rem;font-size:.36rem}.rule-word.small[data-v-78ceac5a]{font-size:.28rem}.rule-red[data-v-78ceac5a]{color:#d2000d}.times[data-v-78ceac5a]{display:block;margin-top:.3rem;text-align:center;color:#d0021b;font-size:.48rem}.times-big[data-v-78ceac5a]{font-weight:700;font-size:1.44rem}.old-times[data-v-78ceac5a]{font-size:.48rem;color:#b6790a;text-decoration:line-through}.time-area[data-v-78ceac5a]{margin:0 .4rem;border-bottom:.03rem dashed #560924}.sec-area[data-v-78ceac5a]{width:3.69rem;margin:.21rem auto .41rem;display:flex;justify-content:space-between;align-items:center}.sec-rec[data-v-78ceac5a]{width:.45rem;height:.61rem;background:#560924;font-size:.43rem;color:#fff;line-height:.61rem;text-align:center;border-radius:.1rem}.sec-doted[data-v-78ceac5a]{width:.25rem;height:.61rem;font-size:.43rem;text-align:center}.title[data-v-78ceac5a]{display:block;margin:.6rem auto 0;line-height:.48rem;font-size:.48rem;text-align:center}.dialog-timetask[data-v-78ceac5a]{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8)}.dialog-bg[data-v-78ceac5a]{position:absolute;top:0;left:50%;margin-left:-6rem;width:12rem;height:12rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/light.png") no-repeat;background-size:100%;transform-origin:50% 50%;z-index:-1;color:#560924}@keyframes lightRotate-data-v-78ceac5a{to{transform:rotate(1turn)}}.dialog-bg[data-v-78ceac5a]{animation:lightRotate-data-v-78ceac5a 10s linear 0s infinite}.dialog-content[data-v-78ceac5a]{width:5rem;margin:1.2rem auto 0;overflow:hidden;color:#560924}.close-icon[data-v-78ceac5a]{display:block;float:right;width:.7rem;height:.7rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/icon_close.png") no-repeat;background-size:100% 100%}.timetask-content[data-v-78ceac5a]{margin:1rem auto 0;width:5rem;height:6.6rem;background-image:linear-gradient(-180deg,#ffe460,#ffcc21 83%);border-radius:.3rem;overflow:hidden;user-select:none;-webkit-user-select:none}.type-vip .times[data-v-78ceac5a]{margin-top:1.08rem}.vip-master[data-v-78ceac5a]{margin-top:.2rem;font-size:.36rem;color:#d0021b;line-height:.36rem;text-align:center;font-weight:700}.btn-send[data-v-78ceac5a]{margin:.6rem auto 0}', ""])
}
, function(t, e, a) {
    var n = a(223);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("4d191981", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(52)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(114)
      , s = a(0);
    var c = function(t) {
        a(224)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-78ceac5a", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.card-list-single[data-v-7a37b9cb]{padding-top:.3rem;display:flex;justify-content:center}.card-list-outer[data-v-7a37b9cb]{margin:.2rem auto 0;width:4.3rem;overflow-x:auto}.card-list-outer.single[data-v-7a37b9cb]{margin-top:0}.card-over[data-v-7a37b9cb]{margin-top:1rem}.card-over-img[data-v-7a37b9cb]{width:5rem;height:6.6rem}.card-list[data-v-7a37b9cb]{margin-top:.35rem;display:flex;justify-content:space-around}.card-list .card-item[data-v-7a37b9cb]{display:inline-block}.dialog-share[data-v-7a37b9cb]{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8)}.dialog-content[data-v-7a37b9cb]{position:relative;width:5rem;margin:.7rem auto 0;overflow:hidden}.user-content-img[data-v-7a37b9cb]{width:100%;height:100%}.close-icon[data-v-7a37b9cb]{display:block;float:right;width:.7rem;height:.7rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/icon_close.png") no-repeat;background-size:100% 100%}.user-bg[data-v-7a37b9cb]{position:absolute;top:.7rem;left:50%;margin-left:-.85rem;width:1.4rem;height:1.4rem;background:#fff;border:.15rem solid #ffdf41;border-radius:50%;z-index:20}.user-content[data-v-7a37b9cb]{position:absolute;top:.99rem;left:50%;margin-left:-.56rem;width:1.12rem;height:1.12rem;border-radius:50%;z-index:40;overflow:hidden}.card-bg[data-v-7a37b9cb]{position:relative;width:5rem;height:6.5rem;margin:1.55rem auto 0;background-image:linear-gradient(-180deg,#ffdf41,#fec401);border-radius:.3rem;z-index:10}.card-content[data-v-7a37b9cb]{position:absolute;top:1.7rem;right:.15rem;bottom:.15rem;left:.15rem;background:#fff;border-radius:.3rem;z-index:30}.nickname[data-v-7a37b9cb]{width:4rem;margin:.7rem auto 0}.nickname[data-v-7a37b9cb],.share-info[data-v-7a37b9cb]{display:block;font-size:.36rem;line-height:.36rem;color:#560924;text-align:center;user-select:none;-webkit-user-select:none}.share-info[data-v-7a37b9cb]{margin-top:.2rem}.share-num[data-v-7a37b9cb]{color:#d0021b}.own-hint-mid[data-v-7a37b9cb]{color:#fff;font-size:.32rem;line-height:.32rem;text-align:center;margin-top:.15rem}.own-hint-mid.brown[data-v-7a37b9cb]{color:#560924;margin-top:.4rem}.own-hint-mid.brown.single[data-v-7a37b9cb]{color:#560924;margin-top:.15rem}.btn-open.btn-row[data-v-7a37b9cb]{display:flex;justify-content:space-between;width:6rem}.btn-send[data-v-7a37b9cb]{margin:.6rem auto 0}.bottom-area[data-v-7a37b9cb]{display:flex;justify-content:center;margin:.6rem auto 0}', ""])
}
, function(t, e, a) {
    var n = a(226);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("3f30f070", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(53)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(115)
      , s = a(0);
    var c = function(t) {
        a(227)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-7a37b9cb", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.card-dice-coupon[data-v-3b2f41ac]{position:relative;width:5rem;height:6.6rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/dice_coupon.png") no-repeat;background-size:100% 100%;overflow:hidden}.title[data-v-3b2f41ac]{display:block;margin:.59rem auto 0;font-size:.36rem;font-weight:400;color:#fffcd5;text-align:center}.logo[data-v-3b2f41ac]{width:1.16rem;height:1.16rem;position:absolute;top:1.3rem;left:50%;margin-left:-.58rem;border-radius:50%;overflow:hidden}.logo-img[data-v-3b2f41ac]{width:100%;height:100%}.mount[data-v-3b2f41ac]{display:block;color:#fffcd5;font-size:.48rem;text-align:center;margin-top:1.58rem;line-height:1.28rem;height:1.28rem}.mount .num[data-v-3b2f41ac]{font-weight:700;font-size:1.44rem}.use-condition[data-v-3b2f41ac]{display:block;margin:.3rem auto 0;color:#fffcd5;font-size:.32rem;text-align:center}.use-desc[data-v-3b2f41ac]{display:block;margin:.34rem auto 0;color:#fffcd5;font-size:.28rem;text-align:center;max-width:4rem}', ""])
}
, function(t, e, a) {
    var n = a(229);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("d732d760", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(54)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(117)
      , s = a(0);
    var c = function(t) {
        a(230)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-3b2f41ac", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.bounce2-enter-active[data-v-613a20e6]{animation:bounce-in-data-v-613a20e6 .6s linear}.bounce1-leave-active[data-v-613a20e6]{animation:bounce-out-data-v-613a20e6 .3s linear}.bounce2-leave-active[data-v-613a20e6]{animation:disappear-out-data-v-613a20e6 .3s linear}@keyframes bounce-out-data-v-613a20e6{0%{transform:rotateY(0)}to{transform:rotateY(90deg)}}@keyframes bounce-in-data-v-613a20e6{0%{transform:rotateY(-90deg)}50%{transform:rotateY(-90deg)}to{transform:rotateY(0)}}@keyframes disappear-out-data-v-613a20e6{to{transform:scale(0)}}.dialog-dice[data-v-613a20e6]{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);overflow:hidden;transform-origin:50% 50%}.dialog-dice.no-bg[data-v-613a20e6]{background:none}.dialog-bg[data-v-613a20e6]{position:absolute;top:0;left:50%;margin-left:-6rem;width:12rem;height:12rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/light.png") no-repeat;background-size:100%;transform-origin:50% 50%;z-index:-1;opacity:.5}@keyframes lightRotate-data-v-613a20e6{to{transform:rotate(1turn)}}.dialog-bg[data-v-613a20e6]{animation:lightRotate-data-v-613a20e6 10s linear 0s infinite}.dialog-content[data-v-613a20e6]{width:5rem;margin:1.24rem auto 0;overflow:hidden}.close-icon[data-v-613a20e6]{display:block;float:right;width:.7rem;height:.7rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/icon_close.png") no-repeat;background-size:100% 100%}.dice-card[data-v-613a20e6]{margin:1rem auto 0;width:5rem;height:6.59rem;position:relative}.card-img.back[data-v-613a20e6]{z-index:10}.card-img[data-v-613a20e6]{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%}.bottom-area[data-v-613a20e6]{margin:.6rem auto 0}.btn-open[data-v-613a20e6]{width:4rem;margin:.6rem auto 0}.times-left[data-v-613a20e6]{display:block;margin:.44rem auto 0;width:4rem;font-size:.36rem;color:#fff;text-align:center}.btn-area[data-v-613a20e6]{display:flex;margin:0 auto;width:6.4rem;justify-content:space-around}.btn-area.scene[data-v-613a20e6]{justify-content:center}', ""])
}
, function(t, e, a) {
    var n = a(232);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("b011c08c", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(55)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(116)
      , s = a(0);
    var c = function(t) {
        a(233)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-613a20e6", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.main[data-v-43c90a6e]{position:relative;margin:-.75rem auto 0;width:6.57rem;height:6.85rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/bonus_bg.png") no-repeat;background-size:100% 100%;overflow:hidden;text-align:center}.title[data-v-43c90a6e]{display:block;margin:.61rem auto .24rem;font-size:.4rem;line-height:.4rem;height:.4rem;color:#a40000;font-weight:400}.mount[data-v-43c90a6e]{display:block;height:1.06rem;line-height:1.06rem;font-size:.64rem;color:red}.mount.unget[data-v-43c90a6e]{margin-top:.34rem}.mount .num[data-v-43c90a6e]{font-size:1.44rem}.hint-top[data-v-43c90a6e]{margin-top:.46rem}.hint[data-v-43c90a6e]{font-size:.22rem;color:#4a4a4a;line-height:.35rem}.hint-sub[data-v-43c90a6e]{font-size:.24rem;color:#4a4a4a;line-height:.24rem;margin:.24rem auto .36rem}.hint-sub .red[data-v-43c90a6e]{color:red}.btn-area[data-v-43c90a6e]{position:absolute;bottom:.34rem;left:50%;margin-left:-2.5rem}', ""])
}
, function(t, e, a) {
    var n = a(235);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("e1247dc6", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(56)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(118)
      , s = a(0);
    var c = function(t) {
        a(236)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-43c90a6e", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.master-card-hint[data-v-585e2e64]{position:relative;width:7.11rem;height:1.61rem;margin:.23rem auto .2rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/master_rush.png") no-repeat;background-size:100% 100%;overflow:hidden}.banner-title[data-v-585e2e64]{color:#560924;font-size:.32rem;line-height:.32rem;margin:.19rem 0 0 2.7rem;font-weight:700}.pre-desc[data-v-585e2e64]{font-size:.36rem;color:#560924;line-height:.36rem;margin:.43rem auto 0;text-align:center}.master-card-hint.no-bg[data-v-585e2e64]{background:none}.prebanner[data-v-585e2e64]{width:100%;height:100%}.card-left[data-v-585e2e64],.share-hint[data-v-585e2e64]{position:absolute;top:.93rem;left:2.02rem;height:.4rem;line-height:.4rem;color:#560924;font-size:.36rem}.share-hint[data-v-585e2e64]{top:1.34rem;left:2.52rem;font-size:.24rem}.num-left[data-v-585e2e64]{display:inline-block;margin:0 .1rem;width:1.94rem;height:.4rem;background:#000;color:#fff;font-size:.32rem;text-align:center;border-radius:.04rem;vertical-align:bottom}.icon[data-v-585e2e64]{position:absolute;width:1.2rem;height:1.2rem;right:.3rem;top:.36rem}.icon-img[data-v-585e2e64]{display:block;width:1.2rem;height:1.2rem}', ""])
}
, function(t, e, a) {
    var n = a(238);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("b422c9e4", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(57)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(119)
      , s = a(0);
    var c = function(t) {
        a(239)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-585e2e64", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.dialog-card[data-v-69f84ef4]{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8)}.dialog-content[data-v-69f84ef4]{width:5rem;margin:1.24rem auto 0;overflow:hidden}.close-icon[data-v-69f84ef4]{display:block;float:right;width:.7rem;height:.7rem;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/icon_close.png") no-repeat;background-size:100% 100%}.tcard[data-v-69f84ef4]{margin:1rem auto 0;width:5rem;height:6.59rem}.btn-send[data-v-69f84ef4]{margin:.6rem auto 0}', ""])
}
, function(t, e, a) {
    var n = a(241);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("29228484", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(58)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(120)
      , s = a(0);
    var c = function(t) {
        a(242)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-69f84ef4", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.activity[data-v-19d74763]{margin:.2rem auto .3rem;width:7.1rem;height:2rem;overflow:hidden}.activity-img[data-v-19d74763]{width:100%;height:100%}.btn[data-v-19d74763]{margin:0 auto}.bottom[data-v-19d74763]{margin-top:.2rem;padding-bottom:.3rem}.entry-hint[data-v-19d74763]{display:block;width:7.5rem;height:1.1rem;margin:0 auto;background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/mtbanner.png") no-repeat;background-size:100% 100%}.entry-chnl[data-v-19d74763]{display:flex;margin:.1rem auto 0;flex-wrap:wrap;justify-content:space-between;width:6.68rem}.entry-banner[data-v-19d74763]{margin-bottom:.33rem;width:3.2rem;height:2.19rem}.entry-img[data-v-19d74763]{width:100%;height:100%}', ""])
}
, function(t, e, a) {
    var n = a(244);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("2a6f24b7", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(59)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(121)
      , s = a(0);
    var c = function(t) {
        a(245)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-19d74763", null);
    e.default = d.exports
}
, , , function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, ".home-cards[data-v-d27f66bc]{margin:.1rem auto 0;width:7.1rem;padding-bottom:.4rem;background:#399500;border-radius:.2rem;overflow:hidden;position:relative;z-index:5}.cards[data-v-d27f66bc]{display:flex;margin:.21rem auto 0;height:5.1rem;flex-wrap:wrap;justify-content:center}.btn-attain[data-v-d27f66bc]{margin:.34rem auto 0;width:5rem}.btn-sub[data-v-d27f66bc]{margin:.35rem auto 0;width:5rem;display:flex;justify-content:space-between}.btn-attain .btn-over[data-v-d27f66bc]{background:#a7a7a7;color:#fff}", ""])
}
, function(t, e, a) {
    var n = a(249);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("c958aee0", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(61)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(122)
      , s = a(0);
    var c = function(t) {
        a(250)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-d27f66bc", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, '.list-enter[data-v-1c6c8043]{transition:transform 1s}.home-header[data-v-1c6c8043]{background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/head.png") no-repeat;background-size:100% 100%;width:7.5rem;height:4.6rem;position:relative}.home-header.unlogin[data-v-1c6c8043]{margin-bottom:-.51rem}.header[data-v-1c6c8043]{overflow:hidden}.main-info[data-v-1c6c8043]{margin:.3rem auto 0;width:4.18rem;height:.48rem;line-height:.48rem;background:#004081;border-radius:1rem;text-align:center}.info-list[data-v-1c6c8043]{list-style:none;margin:0;padding:0}.ac-rules[data-v-1c6c8043]{position:absolute;right:0;top:.34rem;height:.44rem;width:1.11rem;font-size:.2rem;color:#fff;background:rgba(0,0,0,.5);line-height:.44rem;text-align:center;border-top-left-radius:.245rem;border-bottom-left-radius:.245rem;cursor:pointer}.info-list .item[data-v-1c6c8043]{font-size:.28rem;color:#fff;line-height:.48rem}.info-list .item.item-f[data-v-1c6c8043]{font-size:.24rem}.info-list .item .yellow[data-v-1c6c8043]{color:#f8e71c;padding:0 .06rem}.cards-info[data-v-1c6c8043]{position:absolute;top:3.85rem;left:50%;margin-left:-3.55rem;width:7.1rem;height:.75rem;display:flex;background-image:linear-gradient(-179deg,#3ca300 7%,#368305);border-radius:.2rem;line-height:.75rem;vertical-align:bottom}.card[data-v-1c6c8043]{margin:.12rem 0;width:3.37rem;text-align:center;line-height:.51rem;height:.51rem;font-size:0;cursor:pointer;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none}.coupons[data-v-1c6c8043]{border-right:.02rem solid hsla(0,0%,95%,.34)}.coupons .icon[data-v-1c6c8043]{background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/icon_coupon.png") no-repeat;background-size:100% 100%;width:.37rem;height:.5rem;vertical-align:top;display:inline-block}.master-card .icon[data-v-1c6c8043]{background:url("https://xs01.meituan.net/waimai_c_activity_node/img/worldcup/home/icon_master.png") no-repeat;background-size:100% 100%;width:.37rem;height:.5rem;vertical-align:top;display:inline-block;position:relative}.icon .red-dot[data-v-1c6c8043]{display:block;width:.24rem;height:.24rem;background:#ff1d00;position:absolute;top:-.12rem;right:-.12rem;border-radius:.12rem}.card .name[data-v-1c6c8043],.card .num[data-v-1c6c8043]{display:inline-block;margin-left:.16rem;vertical-align:top;color:#fff;font-size:.28rem}', ""])
}
, function(t, e, a) {
    var n = a(252);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("f3551748", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(62)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(124)
      , s = a(0);
    var c = function(t) {
        a(253)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, "data-v-1c6c8043", null);
    e.default = d.exports
}
, function(t, e, a) {
    (t.exports = a(1)(!1)).push([t.i, "body,html,ul{margin:0;padding:0;font-family:PingFang-SC-Regular,Arial,Helvetica,sans-serif}body{width:7.5rem;background:#66ad26}.dialog{z-index:100}.toasted-container.toast-center.top-center{top:50%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.toasted-container.toast-center.top-center .toasted.primary{min-height:.75rem;background:rgba(0,0,0,.5);white-space:nowrap;justify-content:space-around}", ""])
}
, function(t, e, a) {
    var n = a(255);
    "string" == typeof n && (n = [[t.i, n, ""]]),
    n.locals && (t.exports = n.locals);
    (0,
    a(2).default)("47ed3e4d", n, !0, {})
}
, function(t, e, a) {
    "use strict";
    a.r(e);
    var n = a(63)
      , o = a.n(n);
    for (var i in n)
        "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t]
            })
        }(i);
    var r = a(107)
      , s = a(0);
    var c = function(t) {
        a(256)
    }
      , d = Object(s.a)(o.a, r.a, r.b, !1, c, null, null);
    e.default = d.exports
}
, function(t, e, a) {
    "use strict";
    var n = r(a(34))
      , o = r(a(257))
      , i = r(a(19));
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    document.title = "集16强得66元现金",
    n.default.use(i.default, {
        theme: "primary",
        position: "top-center",
        duration: 1500,
        containerClass: "toast-center"
    }),
    n.default.config.devtools = !0,
    new n.default({
        el: "#app",
        render: function(t) {
            return t(o.default)
        }
    })
}
]));
