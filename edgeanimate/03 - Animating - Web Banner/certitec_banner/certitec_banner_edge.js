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
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'photoshop_cs6',
                            type: 'image',
                            rect: ['-150px', '0', '150px', '160px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"photoshop_cs6.png",'0px','0px']
                        },
                        {
                            id: 'flash_cs6',
                            type: 'image',
                            rect: ['-150px', '0', '150px', '160px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"flash_cs6.png",'0px','0px']
                        },
                        {
                            id: 'dreamweaver_cs6',
                            type: 'image',
                            rect: ['-150px', '0', '150px', '160px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"dreamweaver_cs6.png",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['203px', '141px', '168px', '19px', 'auto', 'auto'],
                            opacity: '0.98850235849057',
                            text: "Edge Animate Training<br>",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [14, "px"], "rgba(0,140,0,1)", "400", "none solid rgb(0, 140, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['437px', '141px', '39px', '25px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Flash",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [12, "px"], "rgba(0,140,0,1)", "400", "none solid rgb(0, 140, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['367px', '141px', '77px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Photoshop",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [12, "px"], "rgba(0,140,0,1)", "400", "none solid rgb(0, 140, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['481px', '144px', '87px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Dreamweaver",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [12, "px"], "rgba(0,140,0,1)", "400", "none solid rgb(0, 140, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text9',
                            type: 'text',
                            rect: ['0px', '0px', '50px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            text: "TELL",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(254,58,58,1.00)", "400", "none solid rgb(0, 140, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(96,96,96,0.00)", 21, 25, 13],
                            transform: [[],[],[],['0','0']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '600px', '160px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid33",
                            "width",
                            2000,
                            0,
                            "linear",
                            "${Text3}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid35",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${Text3}",
                            '139px',
                            '203px'
                        ],
                        [
                            "eid37",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${Text3}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid38",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${Text3}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid77",
                            "filter.drop-shadow.offsetH",
                            8000,
                            0,
                            "easeOutQuad",
                            "${Text9}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid96",
                            "font-size",
                            8000,
                            0,
                            "easeOutQuad",
                            "${Text9}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid52",
                            "rotateZ",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${Text5}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid32",
                            "font-size",
                            2000,
                            0,
                            "linear",
                            "${Text3}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid68",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${Text9}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            1000,
                            "easeInBounce",
                            "${dreamweaver_cs6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "left",
                            4000,
                            1000,
                            "easeOutElastic",
                            "${flash_cs6}",
                            '-150px',
                            '412px'
                        ],
                        [
                            "eid43",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${Text5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid62",
                            "opacity",
                            4500,
                            500,
                            "easeOutQuad",
                            "${Text5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            5000,
                            1000,
                            "easeOutQuad",
                            "${Text5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Text6}",
                            '367px',
                            '367px'
                        ],
                        [
                            "eid79",
                            "filter.drop-shadow.offsetV",
                            8000,
                            0,
                            "easeOutQuad",
                            "${Text9}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid36",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${Text3}",
                            '141px',
                            '141px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            4000,
                            1000,
                            "easeOutElastic",
                            "${flash_cs6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "filter.drop-shadow.color",
                            8000,
                            0,
                            "easeOutQuad",
                            "${Text9}",
                            'rgba(96,96,96,0.00)',
                            'rgba(96,96,96,0.00)'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            0,
                            8000,
                            "easeOutQuad",
                            "${Text9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "font-size",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${Text5}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid64",
                            "left",
                            3000,
                            0,
                            "easeOutQuad",
                            "${Text7}",
                            '481px',
                            '481px'
                        ],
                        [
                            "eid81",
                            "filter.drop-shadow.blur",
                            8000,
                            0,
                            "easeOutQuad",
                            "${Text9}",
                            '13px',
                            '13px'
                        ],
                        [
                            "eid76",
                            "scaleY",
                            0,
                            8000,
                            "easeOutQuad",
                            "${Text9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "left",
                            6000,
                            1000,
                            "easeInOutQuad",
                            "${photoshop_cs6}",
                            '-150px',
                            '337px'
                        ],
                        [
                            "eid97",
                            "width",
                            8000,
                            0,
                            "easeOutQuad",
                            "${Text9}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid47",
                            "opacity",
                            6000,
                            1000,
                            "easeInOutQuad",
                            "${photoshop_cs6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            0,
                            3000,
                            "easeOutQuad",
                            "${Text7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            3000,
                            1000,
                            "easeOutQuad",
                            "${Text7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid53",
                            "width",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${Text5}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid50",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${Text6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            6000,
                            1000,
                            "easeOutQuad",
                            "${Text6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            7000,
                            1000,
                            "easeInOutQuad",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            1000,
                            "easeInBounce",
                            "${dreamweaver_cs6}",
                            '-150px',
                            '450px'
                        ],
                        [
                            "eid55",
                            "left",
                            5000,
                            1000,
                            "easeOutQuad",
                            "${Text5}",
                            '437px',
                            '437px'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${Text3}",
                            '1',
                            '0.98850235849057'
                        ],
                        [
                            "eid24",
                            "opacity",
                            3000,
                            1000,
                            "linear",
                            "${Text3}",
                            '0.988502025604248',
                            '0'
                        ],
                        [
                            "eid60",
                            "top",
                            5000,
                            0,
                            "easeOutQuad",
                            "${Text5}",
                            '141px',
                            '141px'
                        ],
                        [
                            "eid61",
                            "top",
                            6000,
                            0,
                            "easeOutQuad",
                            "${Text5}",
                            '141px',
                            '141px'
                        ],
                        [
                            "eid74",
                            "opacity",
                            0,
                            8000,
                            "easeOutQuad",
                            "${Text9}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("certitec_banner_edgeActions.js");
})("EDGE-94230496");
