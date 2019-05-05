/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_01outerPetals',
                            type: 'image',
                            rect: ['0', '0', '317px', '318px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"01outerPetals.svg",'0px','0px']
                        },
                        {
                            id: 'circlesymbol',
                            symbolName: 'circlesymbol',
                            type: 'rect',
                            rect: ['0', '0', '317', '318', 'auto', 'auto']
                        },
                        {
                            id: '_03sunflower',
                            type: 'image',
                            rect: ['66px', '83px', '190px', '110px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"03sunflower.svg",'0px','0px']
                        },
                        {
                            id: '_04sunflowerText',
                            type: 'image',
                            rect: ['46px', '51px', '216px', '215px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"04sunflowerText.svg",'0px','0px']
                        },
                        {
                            id: '_05sunshineText',
                            type: 'image',
                            rect: ['68px', '43px', '185px', '205px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"05sunshineText.svg",'0px','0px']
                        },
                        {
                            id: '_06seedsText',
                            type: 'image',
                            rect: ['51px', '55px', '216px', '216px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"06seedsText.svg",'0px','0px']
                        },
                        {
                            id: '_07seedRight',
                            type: 'image',
                            rect: ['-46px', '158px', '46px', '70px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"07seedRight.svg",'0px','0px']
                        },
                        {
                            id: '_08seedLeft',
                            type: 'image',
                            rect: ['142px', '-37px', '68px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"08seedLeft.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '317px', '318px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid14",
                            "opacity",
                            0,
                            1172,
                            "easeOutBounce",
                            "${_05sunshineText}",
                            '0.000000',
                            '0.49683902138158'
                        ],
                        [
                            "eid15",
                            "opacity",
                            1172,
                            1225,
                            "easeOutBounce",
                            "${_05sunshineText}",
                            '0.496839',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            0,
                            1611,
                            "easeOutBounce",
                            "${_04sunflowerText}",
                            '0.000000',
                            '0.50400904605263'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1611,
                            1389,
                            "easeOutBounce",
                            "${_04sunflowerText}",
                            '0.504009',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            0,
                            680,
                            "easeOutBounce",
                            "${_06seedsText}",
                            '0.000000',
                            '0.50172183388158'
                        ],
                        [
                            "eid17",
                            "opacity",
                            680,
                            1320,
                            "easeOutBounce",
                            "${_06seedsText}",
                            '0.501722',
                            '1'
                        ],
                        [
                            "eid8",
                            "left",
                            250,
                            750,
                            "easeOutBounce",
                            "${_07seedRight}",
                            '-46px',
                            '108px'
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            500,
                            "easeOutBounce",
                            "${_08seedLeft}",
                            '-37px',
                            '191px'
                        ],
                        [
                            "eid19",
                            "opacity",
                            0,
                            4000,
                            "easeOutBounce",
                            "${_01outerPetals}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "circlesymbol": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '317px', '318px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: '_02circle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/02circle.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '317px', '318px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid21",
                            "filter.invert",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${_02circle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid22",
                            "filter.invert",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${_02circle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid23",
                            "filter.invert",
                            2000,
                            1000,
                            "easeInOutQuad",
                            "${_02circle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid24",
                            "filter.invert",
                            3000,
                            1000,
                            "easeInOutQuad",
                            "${_02circle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animatedLogo_edgeActions.js");
})("EDGE-108848174");
