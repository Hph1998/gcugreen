/**
 * Created by Administrator on 2017/5/20.
 */
var LS_Meta = {"v": "6.1.6"};
var cmsmasters_isotope_mode = {
    "ilightbox_skin": "dark",
    "ilightbox_path": "vertical",
    "ilightbox_infinite": "0",
    "ilightbox_aspect_ratio": "1",
    "ilightbox_mobile_optimizer": "1",
    "ilightbox_max_scale": "1",
    "ilightbox_min_scale": "0.2",
    "ilightbox_inner_toolbar": "0",
    "ilightbox_smart_recognition": "0",
    "ilightbox_fullscreen_one_slide": "0",
    "ilightbox_fullscreen_viewport": "center",
    "ilightbox_controls_toolbar": "1",
    "ilightbox_controls_arrows": "0",
    "ilightbox_controls_fullscreen": "1",
    "ilightbox_controls_thumbnail": "1",
    "ilightbox_controls_keyboard": "1",
    "ilightbox_controls_mousewheel": "1",
    "ilightbox_controls_swipe": "1",
    "ilightbox_controls_slideshow": "0",
    "ilightbox_close_text": "Close",
    "ilightbox_enter_fullscreen_text": "Enter Fullscreen (Shift+Enter)",
    "ilightbox_exit_fullscreen_text": "Exit Fullscreen (Shift+Enter)",
    "ilightbox_slideshow_text": "Slideshow",
    "ilightbox_next_text": "Next",
    "ilightbox_previous_text": "Previous",
    "ilightbox_load_image_error": "An error occurred when trying to load photo.",
    "ilightbox_load_contents_error": "An error occurred when trying to load contents.",
    "ilightbox_missing_plugin_error": "The content your are attempting to view requires the <a href='{pluginspage}' target='_blank'>{type} plugin<\\\/a>."
};

(function (body) {
    'use strict';
    body.className = body.className.replace(/\btribe-no-js\b/, 'tribe-js');
})(document.body);

var _wpcf7 = {"recaptcha": {"messages": {"empty": "Please verify that you are not a robot."}}};

var ge_jlibs = {"button_height": "-21"};

var tribe_l10n_datatables = {
    "aria": {
        "sort_ascending": ": activate to sort column ascending",
        "sort_descending": ": activate to sort column descending"
    },
    "length_menu": "Show _MENU_ entries",
    "empty_table": "No data available in table",
    "info": "Showing _START_ to _END_ of _TOTAL_ entries",
    "info_empty": "Showing 0 to 0 of 0 entries",
    "info_filtered": "(filtered from _MAX_ total entries)",
    "zero_records": "No matching records found",
    "search": "Search:",
    "pagination": {"all": "All", "next": "Next", "previous": "Previous"},
    "select": {"rows": {"0": "", "_": ": Selected %d rows", "1": ": Selected 1 row"}},
    "datepicker": {
        "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
        "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "monthNamesShort": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "nextText": "Next",
        "prevText": "Prev",
        "currentText": "Today",
        "closeText": "Done"
    }
};

// 菜单显示相关
var ge_script = {
    "theme_url": "",
    "site_url": "",
    "ajaxurl": "",
    "like_url": "/news/like",
    "nonce_ajax_like": "465701c837",
    "primary_color": "#53d572",
    "ilightbox_skin": "dark",
    "ilightbox_path": "vertical",
    "ilightbox_infinite": "0",
    "ilightbox_aspect_ratio": "1",
    "ilightbox_mobile_optimizer": "1",
    "ilightbox_max_scale": "1",
    "ilightbox_min_scale": "0.2",
    "ilightbox_inner_toolbar": "0",
    "ilightbox_smart_recognition": "0",
    "ilightbox_fullscreen_one_slide": "0",
    "ilightbox_fullscreen_viewport": "center",
    "ilightbox_controls_toolbar": "1",
    "ilightbox_controls_arrows": "0",
    "ilightbox_controls_fullscreen": "1",
    "ilightbox_controls_thumbnail": "1",
    "ilightbox_controls_keyboard": "1",
    "ilightbox_controls_mousewheel": "1",
    "ilightbox_controls_swipe": "1",
    "ilightbox_controls_slideshow": "0",
    "ilightbox_close_text": "Close",
    "ilightbox_enter_fullscreen_text": "Enter Fullscreen (Shift+Enter)",
    "ilightbox_exit_fullscreen_text": "Exit Fullscreen (Shift+Enter)",
    "ilightbox_slideshow_text": "Slideshow",
    "ilightbox_next_text": "Next",
    "ilightbox_previous_text": "Previous",
    "ilightbox_load_image_error": "An error occurred when trying to load photo.",
    "ilightbox_load_contents_error": "An error occurred when trying to load contents.",
    "ilightbox_missing_plugin_error": "The content your are attempting to view requires the <a href='{pluginspage}' target='_blank'>{type} plugin<\\\/a>."
};


/*!
 * Fixed Header Function
 */
!function (a) {
    "use strict";
    a.fn.geFixedHeaderScroll = function (b) {
        var c = {
            headerTop: ".header_top",
            headerMid: ".header_mid",
            headerBot: ".header_bot",
            navBlock: "nav",
            navList: "#navigation",
            navTopList: "#top_line_nav",
            respNavButton: ".responsive_nav",
            respTopNavButton: ".responsive_top_nav",
            fixedClass: ".fixed_header",
            fixedClassBlock: "#page",
            respHideBlocks: "",
            maxWidthMid: 1024,
            maxWidthBot: 1024,
            changeTopHeight: !0,
            changeMidHeight: !0,
            mobileDisabled: !0
        }, d = this, e = {};
        e = {
            init: function () {
                e.options = e.o = a.extend({}, c, b), e.el = d, e.vars = e.v = {}, e.v.newTopHeight = 0, e.v.newMidHeight = 0, e.v.paddingHeader = 0, e.setHeaderVars(), e.startHeader()
            }, setHeaderVars: function () {
                e.v.headerMidString = e.o.headerMid, e.v.headerTop = e.el.find("> " + e.o.headerTop), e.v.headerMid = e.el.find("> " + e.v.headerMidString), e.v.headerBot = e.el.find("> " + e.o.headerBot), e.v.respNavButton = e.el.find(e.o.respNavButton), e.v.respTopNavButton = e.el.find(e.o.respTopNavButton), e.v.respHideBlocks = a(e.o.respHideBlocks), e.v.navListString = e.o.navList, e.v.navTopListString = e.o.navTopList, e.v.navBlockString = e.o.navBlock, e.v.navBlock = e.el.find(e.v.navListString).parents(e.v.navBlockString), e.v.navTopBlock = e.el.find(e.v.navTopListString).parents(e.v.navBlockString), e.v.midChangeHeightBlocksResp = a(e.v.headerMidString + ", " + e.v.headerMidString + " .header_mid_outer, " + e.v.headerMidString + " " + e.v.navListString + ", " + e.v.headerMidString + " " + e.v.navListString + " > li, " + e.v.headerMidString + " " + e.v.navListString + " > li > a, " + e.v.headerMidString + " " + e.v.navListString + " > li > a > span.nav_bg_clr"), e.v.topHeight = 0, e.v.midHeight = 0, e.v.botHeight = 0, e.v.win = a(window), e.v.winScrollTop = e.v.win.scrollTop(), e.v.winMidScrollTop = e.v.winScrollTop - e.v.topHeight - e.v.midHeight, e.v.isMobile = "ontouchstart" in document.documentElement
            }, startHeader: function () {
                e.v.headerTop.length > 0 && (e.v.topHeight = Number(e.v.headerTop.attr("data-height"))), e.v.headerMid.length > 0 && (e.v.midHeight = Number(e.v.headerMid.attr("data-height"))), e.v.headerBot.length > 0 && (e.v.botHeight = Number(e.v.headerBot.attr("data-height"))), 0 == e.v.winScrollTop && e.el.css({opacity: 1}), e.attachEvents(), e.v.win.trigger("scroll")
            }, attachEvents: function () {
                e.v.respNavButton.bind("click", function () {
                    return e.v.respNavButton.is(":not(.active)") ? (e.v.navBlock.css({display: "block"}), e.v.respHideBlocks.css({display: "none"}), e.v.respNavButton.addClass("active")) : (e.v.navBlock.css({display: "none"}), e.v.respHideBlocks.css({display: "block"}), e.v.respNavButton.removeClass("active")), !1
                }), e.v.respTopNavButton.bind("click", function () {
                    return e.v.respTopNavButton.is(":not(.active)") ? (e.v.navTopBlock.css({display: "block"}), e.v.respHideBlocks.css({display: "none"}), e.v.respTopNavButton.addClass("active")) : (e.v.navTopBlock.css({display: "none"}), e.v.respHideBlocks.css({display: "block"}), e.v.respTopNavButton.removeClass("active")), !1
                }), e.v.win.bind("scroll", function () {
                    return !e.el.parents(e.o.fixedClassBlock).is(":not(" + e.o.fixedClass + ")") && void(ge_media_width() > e.o.maxWidthMid && e.getScrollTop())
                }), e.v.win.bind("resize", function () {
                    e.headerResize(e.v.headerBot.length > 0 ? e.o.maxWidthBot : e.o.maxWidthMid)
                })
            }, getScrollTop: function () {
                0 == e.v.headerBot.length ? (e.v.paddingHeader = e.v.midHeight, e.v.newMidHeight = e.v.midHeight / 1) : (e.v.paddingHeader = e.v.botHeight, e.v.newMidHeight = e.v.midHeight), e.v.winScrollTop = e.v.win.scrollTop(), e.v.winMidScrollTop = e.v.winScrollTop - e.v.topHeight - e.v.midHeight, e.v.winScrollTop > e.v.topHeight + e.v.midHeight + e.v.botHeight ? (e.el.css({
                    marginTop: -(e.v.topHeight + e.v.midHeight + e.v.botHeight),
                    paddingTop: e.v.paddingHeader,
                    opacity: 1
                }).addClass("navi_scrolled"), e.v.headerMid.css({height: e.v.newMidHeight})) : (e.el.removeClass("navi_scrolled").css({
                    marginTop: -e.v.winScrollTop,
                    paddingTop: 0,
                    opacity: 1
                }), e.v.headerMid.css({height: e.v.midHeight}))
            }, headerResize: function (a) {
                ge_media_width() > a ? (e.v.navBlock.removeAttr("style"), e.v.respHideBlocks.removeAttr("style"), e.v.respNavButton.removeClass("active"), e.getScrollTop()) : (e.el.removeAttr("style").removeClass("navi_scrolled").css({opacity: 1}), e.v.headerMid.css({height: "auto"}))
            }
        }, e.init()
    }
}(jQuery);
