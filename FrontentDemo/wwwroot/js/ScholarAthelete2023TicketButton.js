﻿<script type="text/javascript">
                /*<![CDATA[*/
    (function () {
                    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
                        if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
                        } else {
        loadScript();
                        }
                    } else {
        loadScript();
                    }
    function loadScript() {
                        var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
                    }
    function ShopifyBuyInit() {
                        var client = ShopifyBuy.buildClient({
        domain: 'central-new-york-chapter-of-nff-and-chf-inc.myshopify.com',
    storefrontAccessToken: 'cb1083aa01f5c760e701708dc5cbffba',
                        });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
            id: '8143999697208',
            node: document.getElementById('product-component-1676573416619'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
                "product": {
                    "styles": {
                        "product": {
                            "@media (min-width: 601px)": {
                                "max-width": "calc(25% - 20px)",
                                "margin-left": "20px",
                                "margin-bottom": "50px"
                            }
                        },
                        "button": {
                            "font-size": "16px",
                            "padding-top": "16px",
                            "padding-bottom": "16px",
                            ":hover": {
                                "background-color": "#004492"
                            },
                            "background-color": "#002856",
                            ":focus": {
                                "background-color": "#004492"
                            }
                        },
                        "quantityInput": {
                            "font-size": "16px",
                            "padding-top": "16px",
                            "padding-bottom": "16px"
                        }
                    },
                    "contents": {
                        "img": false,
                        "button": false,
                        "buttonWithQuantity": true,
                        "title": false,
                        "price": false
                    },
                    "text": {
                        "button": "Purchase Ticket(s)"
                    }
                },
                "productSet": {
                    "styles": {
                        "products": {
                            "@media (min-width: 601px)": {
                                "margin-left": "-20px"
                            }
                        }
                    }
                },
                "modalProduct": {
                    "contents": {
                        "img": false,
                        "imgWithCarousel": true,
                        "button": false,
                        "buttonWithQuantity": true
                    },
                    "styles": {
                        "product": {
                            "@media (min-width: 601px)": {
                                "max-width": "100%",
                                "margin-left": "0px",
                                "margin-bottom": "0px"
                            }
                        },
                        "button": {
                            "font-size": "16px",
                            "padding-top": "16px",
                            "padding-bottom": "16px",
                            ":hover": {
                                "background-color": "#004492"
                            },
                            "background-color": "#002856",
                            ":focus": {
                                "background-color": "#004492"
                            }
                        },
                        "quantityInput": {
                            "font-size": "16px",
                            "padding-top": "16px",
                            "padding-bottom": "16px"
                        }
                    },
                    "text": {
                        "button": "Add to cart"
                    }
                },
                "option": {},
                "cart": {
                    "styles": {
                        "button": {
                            "font-size": "16px",
                            "padding-top": "16px",
                            "padding-bottom": "16px",
                            ":hover": {
                                "background-color": "#004492"
                            },
                            "background-color": "#002856",
                            ":focus": {
                                "background-color": "#004492"
                            }
                        }
                    },
                    "text": {
                        "title": "Tickets",
                        "total": "Subtotal",
                        "empty": " No tickets selected at this time.",
                        "button": "Proceed to Checkout"
                    }
                },
                "toggle": {
                    "styles": {
                        "toggle": {
                            "background-color": "#002856",
                            ":hover": {
                                "background-color": "#004492"
                            },
                            ":focus": {
                                "background-color": "#004492"
                            }
                        },
                        "count": {
                            "font-size": "16px"
                        }
                    }
                }
            },
        });
                        });
                    }
                })();
/*]]>*/
</script>