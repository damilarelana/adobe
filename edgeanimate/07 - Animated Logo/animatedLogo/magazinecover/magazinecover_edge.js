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
                            id: 'background',
                            type: 'image',
                            rect: ['0', '0', '656px', '928px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background.jpg",'0px','0px']
                        },
                        {
                            id: 'xMagazine_logo',
                            type: 'image',
                            rect: ['0', '-226px', '279px', '226px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"xMagazine_logo.png",'0px','0px']
                        },
                        {
                            id: 'fujiXF56mm',
                            type: 'image',
                            rect: ['-134px', '226px', '134px', '113px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fujiXF56mm.png",'0px','0px']
                        },
                        {
                            id: 'xf56mm',
                            type: 'text',
                            rect: ['121px', '252px', '115px', '65px', 'auto', 'auto'],
                            opacity: '0',
                            text: "XF56MM<br>TESTED",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'x-E1',
                            type: 'text',
                            rect: ['71px', '508px', '154px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            text: "X-E1 AT -25C IN<br>YELLOWSTONE",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'why_you_need_to_start_saving_now',
                            type: 'text',
                            rect: ['121px', '309px', '115px', '38px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Why you need to start saving now",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'mk',
                            type: 'image',
                            rect: ['-32px', '369px', '205px', '113px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mk.png",'0px','0px'],
                            transform: [[],['-13']]
                        },
                        {
                            id: 'x-treme_conditions',
                            type: 'text',
                            rect: ['71px', '562px', '154px', '38px', 'auto', 'auto'],
                            opacity: '0',
                            text: "X-treme conditions,<br>X-treme landscape,<br>X-tremely good results",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'fujiXE1',
                            type: 'image',
                            rect: ['261px', '343px', '168px', '142px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fujiXE1.png",'0px','0px']
                        },
                        {
                            id: 'X-series_on_the',
                            type: 'text',
                            rect: ['195px', '755px', '265px', '38px', 'auto', 'auto'],
                            opacity: '0',
                            text: "X-SERIES ON THE",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Frontline',
                            type: 'text',
                            rect: ['29px', '712px', '608px', '95px', 'auto', 'auto'],
                            opacity: '0',
                            text: "FRONTLINE",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [95, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'magazineInteractive',
                            type: 'image',
                            rect: ['67px', '687px', '117px', '68px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"magazineInteractive.png",'0px','0px']
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['78px', '849px', '509px', '21px', 'auto', 'auto'],
                            opacity: '0',
                            text: "How Eric Bouvet uses the X-T1 and X-Pro1 to bring home the news",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '656px', '928px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid38",
                            "width",
                            4500,
                            0,
                            "easeInQuad",
                            "${x-E1}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid44",
                            "height",
                            4500,
                            0,
                            "easeInQuad",
                            "${x-E1}",
                            '51px',
                            '51px'
                        ],
                        [
                            "eid50",
                            "color",
                            4500,
                            0,
                            "easeInQuad",
                            "${x-treme_conditions}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid46",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${x-treme_conditions}",
                            '0',
                            '0'
                        ],
                        [
                            "eid47",
                            "opacity",
                            2750,
                            750,
                            "easeInQuad",
                            "${x-treme_conditions}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "left",
                            4500,
                            0,
                            "easeInQuad",
                            "${x-treme_conditions}",
                            '71px',
                            '71px'
                        ],
                        [
                            "eid102",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${magazineInteractive}",
                            '0',
                            '0'
                        ],
                        [
                            "eid103",
                            "opacity",
                            5250,
                            750,
                            "easeInQuad",
                            "${magazineInteractive}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid45",
                            "top",
                            4500,
                            0,
                            "easeInQuad",
                            "${x-E1}",
                            '508px',
                            '508px'
                        ],
                        [
                            "eid12",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${why_you_need_to_start_saving_now}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11",
                            "opacity",
                            2750,
                            750,
                            "easeInQuad",
                            "${why_you_need_to_start_saving_now}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${Text5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid109",
                            "opacity",
                            5250,
                            750,
                            "easeInQuad",
                            "${Text5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid23",
                            "top",
                            3000,
                            1250,
                            "easeInQuad",
                            "${fujiXE1}",
                            '343px',
                            '347px'
                        ],
                        [
                            "eid106",
                            "width",
                            4505,
                            1495,
                            "easeInQuad",
                            "${Frontline}",
                            '542px',
                            '608px'
                        ],
                        [
                            "eid55",
                            "filter.blur",
                            4500,
                            0,
                            "easeInQuad",
                            "${x-treme_conditions}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid92",
                            "height",
                            4505,
                            0,
                            "easeInQuad",
                            "${Frontline}",
                            '95px',
                            '95px'
                        ],
                        [
                            "eid111",
                            "left",
                            6000,
                            0,
                            "easeInQuad",
                            "${Text5}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid42",
                            "left",
                            4500,
                            0,
                            "easeInQuad",
                            "${x-E1}",
                            '71px',
                            '71px'
                        ],
                        [
                            "eid75",
                            "left",
                            4500,
                            0,
                            "easeInQuad",
                            "${mk}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid80",
                            "opacity",
                            4000,
                            0,
                            "easeInQuad",
                            "${X-series_on_the}",
                            '0',
                            '0'
                        ],
                        [
                            "eid96",
                            "opacity",
                            4626,
                            624,
                            "easeInQuad",
                            "${X-series_on_the}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${xMagazine_logo}",
                            '-226px',
                            '0px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            3000,
                            1500,
                            "easeInQuad",
                            "${mk}",
                            '0',
                            '1'
                        ],
                        [
                            "eid85",
                            "top",
                            4000,
                            626,
                            "easeInQuad",
                            "${X-series_on_the}",
                            '755px',
                            '740px'
                        ],
                        [
                            "eid100",
                            "top",
                            4626,
                            624,
                            "easeInQuad",
                            "${X-series_on_the}",
                            '740px',
                            '712px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${x-E1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid29",
                            "opacity",
                            2750,
                            750,
                            "easeInQuad",
                            "${x-E1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid95",
                            "top",
                            3879,
                            626,
                            "easeInQuad",
                            "${Frontline}",
                            '712px',
                            '745px'
                        ],
                        [
                            "eid99",
                            "top",
                            4505,
                            624,
                            "easeInQuad",
                            "${Frontline}",
                            '745px',
                            '755px'
                        ],
                        [
                            "eid105",
                            "left",
                            4505,
                            1495,
                            "easeInQuad",
                            "${Frontline}",
                            '71px',
                            '29px'
                        ],
                        [
                            "eid76",
                            "top",
                            4500,
                            0,
                            "easeInQuad",
                            "${mk}",
                            '369px',
                            '369px'
                        ],
                        [
                            "eid98",
                            "opacity",
                            3879,
                            0,
                            "easeInQuad",
                            "${Frontline}",
                            '0',
                            '0'
                        ],
                        [
                            "eid97",
                            "opacity",
                            4505,
                            624,
                            "easeInQuad",
                            "${Frontline}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            3000,
                            1250,
                            "easeInQuad",
                            "${fujiXE1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "left",
                            2000,
                            750,
                            "linear",
                            "${fujiXF56mm}",
                            '-134px',
                            '0px'
                        ],
                        [
                            "eid91",
                            "font-size",
                            4505,
                            0,
                            "easeInQuad",
                            "${Frontline}",
                            '95px',
                            '95px'
                        ],
                        [
                            "eid56",
                            "top",
                            4500,
                            0,
                            "easeInQuad",
                            "${x-treme_conditions}",
                            '562px',
                            '562px'
                        ],
                        [
                            "eid37",
                            "font-size",
                            4500,
                            0,
                            "easeInQuad",
                            "${x-E1}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid59",
                            "height",
                            4250,
                            250,
                            "easeInQuad",
                            "${fujiXE1}",
                            '142px',
                            '142px'
                        ],
                        [
                            "eid51",
                            "width",
                            4500,
                            0,
                            "easeInQuad",
                            "${x-treme_conditions}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid60",
                            "width",
                            4250,
                            250,
                            "easeInQuad",
                            "${fujiXE1}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid16",
                            "left",
                            3000,
                            1250,
                            "easeInQuad",
                            "${fujiXE1}",
                            '261px',
                            '121px'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${xf56mm}",
                            '0',
                            '0'
                        ],
                        [
                            "eid9",
                            "opacity",
                            2750,
                            750,
                            "easeInQuad",
                            "${xf56mm}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("magazinecover_edgeActions.js");
})("EDGE-110413062");
