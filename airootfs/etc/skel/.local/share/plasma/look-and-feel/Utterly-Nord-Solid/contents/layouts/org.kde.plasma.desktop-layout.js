var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "444",
                    "ToolBoxButtonY": "26"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/usr/share/wallpapers/Altai/",
                    "SlidePaths": "/home/natesworks/.local/share/wallpapers/,/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        },
                        "/General": {
                            "alphaSort": "true",
                            "favoritesPortedToKAstats": "true"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.simplekickoff"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "80"
                        },
                        "/General": {
                            "buttonSizePercentage": "70",
                            "containmentType": "Plasma",
                            "inactiveStateEnabled": "true",
                            "visibility": "ActiveMaximizedWindow"
                        }
                    },
                    "plugin": "org.kde.windowbuttons"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/General": {
                            "containmentType": "Plasma",
                            "filterActivityInfo": "false",
                            "filterByScreen": "true",
                            "showIcon": "false"
                        }
                    },
                    "plugin": "org.kde.windowtitle"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/Appearance": {
                            "customDateFormat": "ddd d MMM",
                            "dateDisplayFormat": "BesideTime",
                            "dateFormat": "custom",
                            "enabledCalendarPlugins": "/usr/lib/qt/plugins/plasmacalendarplugins/astronomicalevents.so,/usr/lib/qt/plugins/plasmacalendarplugins/holidaysevents.so",
                            "firstDayOfWeek": "0",
                            "showWeekNumbers": "true",
                            "use24hFormat": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/General": {
                            "swapDownUp": "true"
                        }
                    },
                    "plugin": "org.kde.netspeedWidget"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "85"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1920"
                }
            },
            "height": 1.4444444444444444,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
