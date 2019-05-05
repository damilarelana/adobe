/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Verdana': '<link href=‘/fonts/webfonts_embedCode.css\' rel=\'stylesheet\' type=\'text/css\'>',
            'myFonts': '<link href=‘fonts/webfonts_embedCode.css\' rel=\'stylesheet\' type=\'text/css\'>',
            'newmywebfonts': '<link href=\"fonts/mywebfonts.css\" rel=\"stylesheet\">'        },
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
                            rect: ['0', '0', '320px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background.jpg",'0px','0px']
                        },
                        {
                            id: 'header',
                            type: 'image',
                            rect: ['0', '0', '320px', '80px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"header.jpg",'0px','0px'],
                            boxShadow: ["", 0, 2, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'Group6',
                            type: 'group',
                            rect: ['105', '363', '109', '17', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'Group2',
                                type: 'group',
                                rect: ['0px', '0px', '109', '17', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'RoundRect2',
                                    type: 'rect',
                                    rect: ['0px', '0px', '109px', '17px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(89,158,51,1.00)"],
                                    stroke: [0,"rgba(227,242,203,1.00)","none"],
                                    boxShadow: ["", 1, 1, 3, 0, "rgba(0,0,0,0.65098)"],
                                    c: [
                                    {
                                        id: 'Johnson',
                                        type: 'text',
                                        rect: ['26px', '0px', '58px', '17px', 'auto', 'auto'],
                                        text: "Johnson",
                                        font: ['Verdana', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 'Group5',
                            type: 'group',
                            rect: ['105', '391', '109', '17', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'Group3',
                                type: 'group',
                                rect: ['0px', '0px', '109', '17', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'RoundRect2Copy2',
                                    type: 'rect',
                                    rect: ['0px', '0px', '109px', '17px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(89,158,51,1.00)"],
                                    stroke: [0,"rgba(227,242,203,1.00)","none"],
                                    boxShadow: ["", 1, 1, 3, 0, "rgba(0,0,0,0.65098)"],
                                    c: [
                                    {
                                        id: 'Eric',
                                        type: 'text',
                                        rect: ['38px', '0px', '33px', '17px', 'auto', 'auto'],
                                        text: "Eric",
                                        font: ['Verdana', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 'Group5Copy',
                            type: 'group',
                            rect: ['105', '420px', '109', '17', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'Group3Copy',
                                type: 'group',
                                rect: ['0px', '0px', '109', '17', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'RoundRect2Copy3',
                                    type: 'rect',
                                    rect: ['0px', '0px', '109px', '17px', 'auto', 'auto'],
                                    borderRadius: ["10px", "10px", "10px", "10px"],
                                    fill: ["rgba(89,158,51,1.00)"],
                                    stroke: [0,"rgba(227,242,203,1.00)","none"],
                                    boxShadow: ["", 1, 1, 3, 0, "rgba(0,0,0,0.65098)"],
                                    c: [
                                    {
                                        id: 'EricCopy',
                                        type: 'text',
                                        rect: ['38px', '0px', '33px', '17px', 'auto', 'auto'],
                                        text: "Map",
                                        font: ['Verdana', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 'Group4',
                            type: 'group',
                            rect: ['85px', '127', '771', '225', 'auto', 'auto'],
                            c: [
                            {
                                id: 'ecotour',
                                type: 'image',
                                rect: ['0px', '0px', '150px', '225px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"ecotour.jpg",'0px','0px']
                            },
                            {
                                id: 'eric',
                                type: 'image',
                                rect: ['359px', '38px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"eric.jpg",'0px','0px']
                            },
                            {
                                id: 'matthew2',
                                type: 'image',
                                rect: ['621px', '38px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"matthew2.jpg",'0px','0px']
                            }]
                        },
                        {
                            id: 'prevButton',
                            display: 'none',
                            type: 'image',
                            rect: ['49px', '315px', '36px', '50px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"prevButton.png",'0px','0px']
                        },
                        {
                            id: 'nextButton',
                            display: 'block',
                            type: 'image',
                            rect: ['235px', '313px', '36px', '50px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"nextButton.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '320px', '480px', 'auto', 'auto'],
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
                            "eid13",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid22",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${nextButton}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8",
                            "boxShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy2}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid21",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy3}",
                            'rgba(227,242,203,1.00)',
                            'rgba(227,242,203,1.00)'
                        ],
                        [
                            "eid3",
                            "boxShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid4",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid6",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy2}",
                            'rgba(227,242,203,1.00)',
                            'rgba(227,242,203,1.00)'
                        ],
                        [
                            "eid2",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            'rgba(227,242,203,1.00)',
                            'rgba(227,242,203,1.00)'
                        ],
                        [
                            "eid18",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid20",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy3}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid14",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid19",
                            "boxShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy3}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid7",
                            "boxShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy2}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid16",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Group4}",
                            '85px',
                            '-276px'
                        ],
                        [
                            "eid17",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${Group4}",
                            '-276px',
                            '-536px'
                        ],
                        [
                            "eid23",
                            "display",
                            0,
                            0,
                            "linear",
                            "${prevButton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${prevButton}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("interactivity_edgeActions.js");
})("EDGE-105130827");
