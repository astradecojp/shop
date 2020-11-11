"use strict";
$(document).ready(function () {
    var e = function () {
        var e = $(".success-desc__items .success-desc__row-subtitle").length;
        $(".success-desc__row-show-more").text("и ещё " + (e - 1) + " товаров")
    };
    e();
    var s = function () {
        var e = $(".ordering__item-container").find(".ordering-container__item").length;
        $(".hide-or-show-items").text("Показать все (" + e + ") товары в корзине")
    };
    $(".success-desc__row-show-more").click(function () {
        $(".success-desc__items").toggleClass("show"), $(".success-desc__items").hasClass("show") ? $(".success-desc__row-show-more").text("Скрыть") : e()
    }), s(), $(".catalog-filter__price-input").on("input", function (e) {
        var s = $(e.target).parent().attr("class").replace("catalog-filter__price-input-wrapper ", "");
        e.target.value ? $(".catalog-filter__price-input-container").hasClass(s) || $(".catalog-filter__price-input-container").addClass(s) : $(".catalog-filter__price-input-container").removeClass(s);
        var a = $(".catalog-filter__container").serializeArray().filter(function (e) {
            return e.value
        });
        a.length ? ($("#filtersCount").hasClass("active") || $("#filtersCount").addClass("active"), $("#filtersCount").html(a.length)) : ($("#filtersCount").html(""), $("#filtersCount").removeClass("active"))
    }), $(".hide-or-show-items").click(function () {
        $(".ordering__item-container").toggleClass("show"), $(".ordering__item-container").hasClass("show") ? $(".hide-or-show-items").text("Скрыть") : s()
    }), $(".restore__button").click(function () {
        $(this).parent().parent().parent().toggleClass("removing")
    }), $(".ordering-item-basket").click(function () {
        $(this).parent().parent().toggleClass("removing")
    }), $(".ordering-item__add").click(function () {
        var e = $(this).parent().find(".ordering-item__count");
        e.val(+e.val() + 1)
    }), $(".ordering-item__remove").click(function () {
        var e = $(this).parent().find(".ordering-item__count");
        e.val(+e.val() - 1 < 0 ? 0 : +e.val() - 1)
    }), $(".open-menu-button__icon").click(function () {
        $(".open-menu-button").toggleClass("openned"), $(".expanded-menu").toggleClass("show"), $(".expanded-catalog").removeClass("show"), $(".expanded-menu").hasClass("show") ? $(".expanded-catalog__splash").addClass("show") : ($(".choose-city__popup").removeClass("openned"), $(".expanded-catalog__splash").removeClass("show"))
    }), $(".selectCityChange").click(function () {
        $(".selectCity-modal").addClass("newCity")
    }), $(".closeNewCity").click(function () {
        $(".choose-city__popup-wrapper").removeClass("newCity")
    }), $(".remove-button").click(function () {
        var e = $(this).parent().parent().parent().parent();
        e.hasClass("add-to-card__item-row") && e.remove()
    }), $("button.card").click(function () {
        $(".add-to-card.basket").toggleClass("show"), $(".expanded-catalog__splash").hasClass("show") || $(".expanded-catalog__splash").addClass("show")
    }), $(".catalog-item__button").click(function () {
        $(this).hasClass("notify") || ($(".add-to-card:not(.basket)").toggleClass("show"), $(".expanded-catalog__splash").hasClass("show") || $(".expanded-catalog__splash").addClass("show"))
    }), $(".count-add").click(function () {
        var e = $(this).siblings(".count-input").val();
        $(this).siblings(".count-input").val(+e + 1)
    }), $(".count-remove").click(function () {
        var e = +$(this).siblings(".count-input").val() - 1;
        e < 0 && (e = 0), $(this).siblings(".count-input").val(e)
    }), $(".add-to-card__close").click(function () {
        $(".add-to-card").removeClass("show"), $(".expanded-catalog__splash").removeClass("show")
    }), $(".close-add-to-card").click(function () {
        $(".add-to-card").removeClass("show"), $(".expanded-catalog__splash").removeClass("show")
    }), $(".close-backcall").click(function () {
        $(".backcall-popup").removeClass("show"), $(".open-menu-button").removeClass("openned"), $(".expanded-menu").removeClass("show"), $(".expanded-catalog__splash").removeClass("show")
    }), $(".expanded-menu__backcall-button").click(function () {
        $(".backcall-popup").toggleClass("show"), $(".expanded-catalog").removeClass("show"), $(".expanded-catalog__splash").removeClass("show"), $(".expanded-catalog__splash").addClass("show")
    }), $(".menu__backcall-button").click(function () {
        $(".backcall-popup").toggleClass("show"), $(".expanded-catalog").removeClass("show"), $(".choose-city__popup").removeClass("openned"), $(".expanded-catalog__splash").removeClass("show"), $(".expanded-catalog__splash").addClass("show")
    }), $(".choose-city__popup-button").click(function () {
        $(".choose-city__popup").removeClass("openned"), $(".expanded-catalog__splash").removeClass("show")
    }), $(".expanded-menu__location").click(function () {
        $(".choose-city__popup").addClass("openned")
    }), $(".show-recomended-products").click(function () {
        $(".recommendation__container-col").addClass("active")
    }), $(".add-to-card-splash").click(function () {
        $(".add-to-card").removeClass("show"), $(".expanded-catalog__splash").removeClass("show")
    }), $(".product-page-add-to-card").click(function () {
        $(".add-to-card").addClass("show"), $(".expanded-catalog__splash").addClass("show")
    }), $(".expanded-catalog__splash").click(function () {
        $(this).removeClass("show"), $(".choose-point-popup").removeClass("show"), $(".choose-city__popup").removeClass("openned"), $(".backcall-popup").removeClass("show"), $(".expanded-menu").removeClass("show"), $(".expanded-catalog").removeClass("show"), $(".catalog-button").removeClass("active"), $(".open-menu-button").removeClass("openned"), $(".sign-up").removeClass("show")
    }), $(".choose-city__popup-change-city").click(function () {
        $(".choose-city__popup-wrapper").addClass("newCity")
    }), $(".menu__city").click(function () {
        $(".choose-point-popup").removeClass("show"), $(".backcall-popup").removeClass("show"), $(".choose-city__popup").hasClass("openned") ? ($(".choose-city__popup").removeClass("openned"), $(".expanded-catalog__splash").hasClass("show") && $(".expanded-catalog__splash").removeClass("show")) : ($(".choose-city__popup").addClass("openned"), $(".expanded-catalog__splash").hasClass("show") || $(".expanded-catalog__splash").addClass("show"))
    }), $(".search-input-mobile").focus(function () {
        $(this).toggleClass("active"), $(".search-results-container").toggleClass("active"), $(".search-input-mobile-container").toggleClass("active")
    }), $(".close-search-input-container").click(function () {
        $(".search-input-mobile").removeClass("active"), $(".search-results-container").removeClass("active"), $(".search-input-mobile-container").removeClass("active")
    }), $(window).width() < 1023 && $(".expanded-catalog__menu-text.active").removeClass("active"), $(".expanded-catalog__menu-text").click(function () {
        if ($(window).width() > 1023) {
            if (!$(this).hasClass("active")) {
                $(".expanded-catalog__menu-text.active").removeClass("active"), $(".expanded-catalog-items.active").removeClass("active");
                var e = this.className.split("expanded-catalog__menu-text ")[1];
                $(".expanded-catalog__menu-text." + e).addClass("active"), $(".expanded-catalog-items." + e).addClass("active")
            }
        } else {
            e = this.className.replace("active", "").replace("expanded-catalog__menu-text", "").trim();
            var s = "";
            $(".expanded-catalog-items__brends." + e).hasClass("active") ? $(".expanded-catalog-items__brends." + e).removeClass("active") : ($(".expanded-catalog-items__brends").removeClass("active"), $(".expanded-catalog-items__brends." + e).addClass("active")), $(".expanded-catalog__menu-text.active")[0] && (s = $(".expanded-catalog__menu-text.active")[0].className.replace("active", "").replace("expanded-catalog__menu-text", "").trim(), $($(".expanded-catalog__menu-text.active").next()).slideToggle(), $(".expanded-catalog__menu-text.active").removeClass("active")), e !== s && ($(this).toggleClass("active"), $($(this).next()).slideToggle())
        }
    }), $("#resetAll").click(function () {
        $(".catalog-filter__container")[0].reset(), $(".catalog-filter").removeClass("active"), $(".catalog-filter__list").removeClass("active"), $("#filtersCount").html(""), $("#filtersCount").removeClass("active"), a.slider("values", 0, a.slider("option", "min")), a.slider("values", 1, a.slider("option", "max"))
    }), $(".reset-filter").click(function (e) {
        var s = $(this).parent().parent(),
            a = s.find("input");
        a.each(function (e) {
            $(a[e]).prop("checked", !1)
        });
        var t = $(".catalog-filter__container").serializeArray().filter(function (e) {
            return e.value
        });
        t.length ? ($("#filtersCount").hasClass("active") || $("#filtersCount").addClass("active"), $("#filtersCount").html(t.length)) : ($("#filtersCount").html(""), $("#filtersCount").removeClass("active"), $(".catalog-filter").removeClass("active")), s.removeClass("active")
    }), $(".catalog-filter__container").change(function (e) {
        if ("UL" === $(e.target).parent().parent()[0].nodeName) {
            var s = $(e.target).parent().parent().find("input"),
                a = s.serializeArray().filter(function (e) {
                    return "on" === e.value
                });
            a.length ? ($("#filtersCount").hasClass("active") || $("#filtersCount").addClass("active"), $("#filtersCount").html(a.length), s.prevObject.hasClass("active") || s.prevObject.addClass("active")) : s.prevObject.removeClass("active")
        }
        $(this).serializeArray().filter(function (e) {
            return e.value
        }).length && ($(".catalog-filter").hasClass("active") || $(".catalog-filter").addClass("active"))
    }), $("#catalogButton").click(function () {
        $(this).toggleClass("active"), $(".choose-city__popup").removeClass("openned"), $(".backcall-popup").removeClass("show"), $(".open-menu-button").removeClass("openned"), $(".expanded-menu").removeClass("show"), $(".expanded-catalog").hasClass("show") ? ($(".expanded-catalog").removeClass("show"), $(".expanded-catalog__splash").removeClass("show")) : ($(".expanded-catalog").addClass("show"), $(".expanded-catalog__splash").addClass("show"))
    }), $(".packs-button").click(function () {
        if (!$(this).hasClass("active")) {
            var e = $(this).parent().parent().find(".item-price"),
                s = $(this).parent().parent().find(".item-price-last"),
                a = $(this).parent().parent().find(".item-price-discount");
            e.html("200 ₽"), s.html("200 ₽"), a.html("— 20%"), $(this).parent().find("button").removeClass("active"), $(this).addClass("active")
        }
    }), $(".product-size__type").click(function () {
        $(this).hasClass("active") || ($(".product-size__type").removeClass("active"), $(this).addClass("active"), $(".product-size").find("span").html($(this).find(".product-size__weight").html()))
    });
    var a = $(".price-slider").slider({
        range: !0,
        min: 0,
        max: 1e4,
        values: [0, 1e4],
        slide: function (e, s) {
            0 === s.handleIndex ? $("#priceFrom").val(s.value) : $("#priceTo").val(s.value), $(".catalog-filter").hasClass("active") || $(".catalog-filter").addClass("active");
            var a = $(".catalog-filter__container").serializeArray().filter(function (e) {
                return e.value
            });
            a.length ? ($("#filtersCount").hasClass("active") || $("#filtersCount").addClass("active"), $("#filtersCount").html(a.length)) : ($("#filtersCount").html(""), $("#filtersCount").removeClass("active"))
        }
    });
    if ($(".ordering-form__button").click(function (e) {
            e.preventDefault(), $(this).hasClass("active") || ($(".ordering-form__button").removeClass("active"), $(this).addClass("active")), $(this).hasClass("point") ? $(".choose-point-popup.point").hasClass("show") || ($(".choose-point-popup.point").addClass("show"), $(".expanded-catalog__splash").addClass("show")) : $(".choose-point-popup.delivery").hasClass("show") || ($(".choose-point-popup.delivery").addClass("show"), $(".expanded-catalog__splash").addClass("show"))
        }), $(".choose-point-popup").submit(function (e) {
            e.preventDefault(), $(this).hasClass("point") ? ($(".ordering-form__schedule.point").show(), $(".ordering-form__schedule.delivery").hide()) : ($(".ordering-form__schedule.point").hide(), $(".ordering-form__schedule.delivery").show()), $(".choose-point-popup").removeClass("show"), $(".expanded-catalog__splash").removeClass("show")
        }), $(".choose-point-popup__container-close").click(function () {
            $(".choose-point-popup").removeClass("show"), $(".expanded-catalog__splash").removeClass("show")
        }), $(".catalog-item__button.notify").click(function () {
            $(this).toggleClass("active"), $(this).hasClass("active") ? $(this).find(".catalog-item__button-text").text("Сообщим, когда будет в наличии") : $(this).find(".catalog-item__button-text").text("Сообщить о поступлении")
        }), $(".ordering-form__schedule-cancel").click(function () {
            $(this).hasClass("point") ? ($(".choose-point-popup.point").addClass("show"), $(".expanded-catalog__splash").addClass("show")) : ($(".choose-point-popup.delivery").addClass("show"), $(".expanded-catalog__splash").addClass("show"))
        }), $("#priceFrom").change(function (e) {
            a.slider("values", 0, e.target.value)
        }), $("#priceTo").change(function (e) {
            a.slider("values", 1, e.target.value)
        }), $(".catalog-filter-close").click(function () {
            $(".catalog-filter").removeClass("show"), $("body").removeClass("overflow-hidden")
        }), $("#showFilter").click(function () {
            $(".catalog-filter").toggleClass("show"), $("body").hasClass("overflow-hidden") || $("body").addClass("overflow-hidden")
        }), $(".catalog-sort-menu__button").click(function () {
            $(".catalog-sort-menu__button").removeClass("active"), $(".catalog-sort-selected").html($(this).html()), $(this).addClass("active")
        }), $("#catalogSortMenu").click(function () {
            $(this).toggleClass("active"), $(".catalog-sort-menu__container").hasClass("hide") ? $(".catalog-sort-menu__container").removeClass("hide") : $(".catalog-sort-menu__container").addClass("hide")
        }), $(".ordering-container__coupon-button").click(function () {
            $(this).siblings(".ordering-container__coupon").val() && ($(this).toggle(), $(this).siblings(".ordering-container__coupon").toggle(), $(this).siblings(".ordering-container__item-bottom-row-coupon-title").toggle())
        }), $("#backToTopButton").click(function () {
            return $("html, body").animate({
                scrollTop: 0
            }, 600), !1
        }), setTimeout(function () {
            tns({
                container: ".product-slider",
                items: 1,
                controls: !1,
                navContainer: "#productSliderNav",
                mode: "gallery"
            });
            $(".product-slider__slide").click(function () {
                var e = this.style.backgroundImage.split("url(")[1],
                    s = [e.substring(1, e.length - 2)];
                $(this).siblings().each(function (e, a) {
                    var t = a.style.backgroundImage.split("url(")[1],
                        o = t.substring(1, t.length - 2);
                    s.push(o)
                }), s = s.filter(function (e, a) {
                    return s.indexOf(e) === a
                }).map(function (e) {
                    return {
                        src: e
                    }
                }), $.fancybox.open(s)
            });
            var e = [];
            $(".add-to-card-slider").each(function () {
                tns({
                    items: 2.2,
                    mouseDrag: !0,
                    navAsThumbnails: !0,
                    autoplay: !1,
                    controlsText: ["", ""],
                    container: this,
                    gutter: 12,
                    nav: !1,
                    controls: !1,
                    responsive: {
                        1024: {
                            items: 3
                        }
                    }
                })
            }), $(".common-slider").each(function () {
                var s = tns({
                    items: 4,
                    mouseDrag: !0,
                    navAsThumbnails: !0,
                    autoplay: !1,
                    controlsText: ["", ""],
                    container: this,
                    responsive: {
                        1024: {
                            mouseDrag: !1
                        }
                    }
                });
                e.push(s)
            }), $(".common-slider-pagination").each(function (s) {
                e[s] && $(this).find(".second-number").append(Math.floor(e[s].getInfo().slideCount / e[s].getInfo().items))
            }), $(".product-desc-show-more").click(function () {
                $(this).parent().toggleClass("active"), $(this).parent().hasClass("active") ? $(".product-desc-show-more").html("Скрыть") : $(".product-desc-show-more").html("Ещё...")
            }), e.forEach(function (e, s) {
                e ? e.events.on("transitionEnd", function (e) {
                    var a = 1 + Math.trunc(e.navCurrentIndex / e.items),
                        t = $(".common-slider-pagination")[s];
                    $(t).find(".first-number").html(Math.floor(a))
                }) : $($(".common-slider-pagination")[s]).hasClass("d-none") || $($(".common-slider-pagination")[s]).addClass("d-none")
            });
            var s = !1,
                a = !1,
                t = !1,
                o = !1;
            $("[name=phone]").inputmask({
                mask: "+7 (999) 999-9999",
                oncomplete: function (e) {
                    s = !0, i(), $(".sign-up__sms-send-password").prop("disabled", !1)
                },
                onincomplete: function (e) {
                    s = !1, i(), $(".sign-up__sms-send-password").prop("disabled", !0)
                }
            });
            var n = function () {
                $(this).hasClass("signed") ? $(".signed-menu").hasClass("show") || ($(".signed-menu").addClass("show"), $(".signed-menu__splash").addClass("show")) : $(".sign-up").hasClass("show") || ($(".sign-up").addClass("show"), $(".expanded-catalog__splash").addClass("show"))
            };

            function i() {
                s && a ? $(".sign-up__button").prop("disabled", !1) : $(".sign-up__button").prop("disabled", !0)
            }

            function l() {
                t && o ? $(".sign-up__button-by-sms").prop("disabled", !1) : $(".sign-up__button-by-sms").prop("disabled", !0)
            }
            $(".signed-menu__splash").click(function () {
                $(this).removeClass("show"), $(".signed-menu").removeClass("show")
            }), $(".expanded-menu__sign-in").click(n), $(".sing-in").click(n), $(".sing-in-from-bucket").click(function () {
                n(), $(".add-to-card").removeClass("show")
            }), $(".tabs-button").click(function () {
                if (!$(this).hasClass("active")) {
                    var e = $(this).attr("tabsAttr");
                    $(this).parent().children(".tabs-button").removeClass("active"), $(this).addClass("active"), $("[tabsAttrContent]").removeClass("active"), $("[tabsAttrContent=" + e + "]").addClass("active")
                }
            }), $(".sign-up__close").click(function () {
                $(".sign-up").removeClass("show"), $(".expanded-catalog__splash").removeClass("show")
            }), $("[name='password']").on("input", function (e) {
                a = !!e.target.value, i()
            }), $(".checkbox-input__by-sms").change(function (e) {
                var s = [];
                $(".checkbox-input__by-sms").each(function () {
                    var e = $(this).prop("checked");
                    s.push(e)
                }), t = 2 == s.filter(function (e) {
                    return e
                }).length, l()
            }), $("[name='password-by-sms']").change(function (e) {
                o = !!e.target.value, l()
            }), $(".sign-up__sms").click(function () {
                $(".sign-up__main-container").hasClass("hidden") ? ($(".sign-up__main-container").removeClass("hidden"), $(".sign-up-by-sms").addClass("hidden")) : ($(".sign-up__main-container").addClass("hidden"), $(".sign-up-by-sms").removeClass("hidden"))
            }), $(".ordering-values").click(function () {
                $(this).toggleClass("active"), $(this).siblings(".ordering-form").find(".ordering-form__values").slideToggle()
            }), $(".reviews-container__title").click(function () {
                $(this).toggleClass("active"), $(".reviews-sub-container").slideToggle()
            })
        }, 0), document.getElementById("contactsMap")) {
        var t = [55.76, 37.64],
            o = [55.76, 37.64];
        ymaps.ready(function () {
            var e = e = new ymaps.Map("contactsMap", {
                    center: t,
                    zoom: 15
                }),
                s = new ymaps.Placemark(o, {
                    hintContent: "Москва!",
                    balloonContent: "Столица России"
                });
            e.geoObjects.add(s)
        })
    }
    $('.add-to-card-close').click(function () {
        $(".add-to-card").removeClass("show"), $(".expanded-catalog__splash").removeClass("show")
    });
    $(".main-popup__form-close, .main-popup__splash").click(function () {
        $(".main-popup").removeClass("open")
    }), $(".add-review__popup-cancel, .add-review__splash").click(function () {
        $(".add-review__container").removeClass("open")
    }), $(".add-review-button").click(function () {
        $(".add-review__container").addClass("open")
    })
});