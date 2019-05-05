/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'bilbo-swash-caps, sans-serif': '<script src=\"http://use.edgefonts.net/bilbo-swash-caps:n4:all.js\"></script>'        },
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
                            id: 'background',
                            type: 'image',
                            rect: ['0', '0', '600px', '450px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background.jpg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'flare',
                            type: 'image',
                            rect: ['0', '0', '546px', '350px', 'auto', 'auto'],
                            opacity: '0.52009630503145',
                            fill: ["rgba(0,0,0,0)",im+"flare.jpg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'robot',
                            type: 'image',
                            rect: ['-80px', '-47px', '319px', '595px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"robot.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'hero',
                            type: 'image',
                            rect: ['306px', '-57px', '368px', '595px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"hero.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'blinkingStar',
                            symbolName: 'blinkingStar',
                            type: 'rect',
                            rect: ['501', '48', '30', '29', 'auto', 'auto']
                        },
                        {
                            id: 'blinkingStar2',
                            symbolName: 'blinkingStar',
                            type: 'rect',
                            rect: ['388', '281', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'blinkingStar3',
                            symbolName: 'blinkingStar',
                            type: 'rect',
                            rect: ['430px', '27px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'blinkingStar4',
                            symbolName: 'blinkingStar',
                            type: 'rect',
                            rect: ['70', '56', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'blinkingStar5',
                            symbolName: 'blinkingStar',
                            type: 'rect',
                            rect: ['180', '359', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'blinkingStar6',
                            symbolName: 'blinkingStar',
                            type: 'rect',
                            rect: ['510', '419', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['214px', '421px', '136px', '29px', 'auto', 'auto'],
                            text: "battlestar galactica",
                            font: ['bilbo-swash-caps, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"],
                            textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0.5, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'blinkingStar7',
                            symbolName: 'blinkingStar',
                            type: 'rect',
                            rect: ['46', '426', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'blinkingStar8',
                            symbolName: 'blinkingStar',
                            type: 'rect',
                            rect: ['290', '302', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'blinkingStar10',
                            symbolName: 'blinkingStar',
                            type: 'rect',
                            rect: ['553px', '111px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'blinkingStar11',
                            symbolName: 'blinkingStar',
                            type: 'rect',
                            rect: ['145', '339', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'blinkingStar12',
                            symbolName: 'blinkingStar',
                            type: 'rect',
                            rect: ['15', '264', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid22",
                            "left",
                            1554,
                            0,
                            "linear",
                            "${blinkingStar10}",
                            '553px',
                            '553px'
                        ],
                        [
                            "eid20",
                            "left",
                            1554,
                            0,
                            "linear",
                            "${blinkingStar3}",
                            '430px',
                            '430px'
                        ],
                        [
                            "eid19",
                            "top",
                            1554,
                            0,
                            "linear",
                            "${blinkingStar3}",
                            '27px',
                            '27px'
                        ],
                        [
                            "eid21",
                            "top",
                            1554,
                            0,
                            "linear",
                            "${blinkingStar10}",
                            '111px',
                            '111px'
                        ]
                    ]
                }
            },
            "blinkingStar": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '30px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.1', '0.1']],
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'star',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/star.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '30px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "blinkingstarHome": 0
                    },
                    data: [
                        [
                            "eid7",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${star}",
                            '0.1',
                            '0.4'
                        ],
                        [
                            "eid9",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${star}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "eid15",
                            "filter.blur",
                            0,
                            500,
                            "linear",
                            "${star}",
                            '2px',
                            '1px'
                        ],
                        [
                            "eid16",
                            "filter.blur",
                            500,
                            500,
                            "linear",
                            "${star}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "filter.blur",
                            1000,
                            500,
                            "linear",
                            "${star}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid18",
                            "filter.blur",
                            1500,
                            500,
                            "linear",
                            "${star}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid12",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${star}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${star}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${star}",
                            '0.1',
                            '0.4'
                        ],
                        [
                            "eid10",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${star}",
                            '0.4',
                            '0.1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("symbols_edgeActions.js");
})("EDGE-102197391");
