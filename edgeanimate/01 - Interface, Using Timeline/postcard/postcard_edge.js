/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'bubbler-one, sans-serif': '<script src=\"http://use.edgefonts.net/bubbler-one:n4:all.js\"></script>'        },
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
                            rect: ['0', '0', '800px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background.jpg",'0px','0px']
                        },
                        {
                            id: 'photo_1',
                            display: 'none',
                            type: 'image',
                            rect: ['200px', '166px', '400px', '267px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"photo_1.jpg",'0px','0px']
                        },
                        {
                            id: 'photo_2',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '200px', '166px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"photo_2.jpg",'0px','0px']
                        },
                        {
                            id: 'photo_3',
                            display: 'none',
                            type: 'image',
                            rect: ['600px', '300px', '200px', '300px', 'auto', 'auto'],
                            borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                            fill: ["rgba(0,0,0,0)",im+"photo_3.jpg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['200px', '166px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.49769063247075',
                            text: "rough cut animation",
                            font: ['bubbler-one, sans-serif', [24, ""], "rgba(255,0,85,0.50)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 14, 25, 3]
                        },
                        {
                            id: 'TextCopy',
                            display: 'none',
                            type: 'text',
                            rect: ['607px', '572px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.49769063247075',
                            text: "rough cut animation",
                            font: ['bubbler-one, sans-serif', [24, ""], "rgba(159,255,86,0.50)", "normal", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '800px', '600px'],
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
                            "eid10",
                            "border-top-right-radius",
                            4000,
                            0,
                            "linear",
                            "${photo_3}",
                            [5,5],
                            [5,5],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6",
                            "textShadow.offsetH",
                            4000,
                            0,
                            "linear",
                            "${Text}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid2",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${photo_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "border-bottom-left-radius",
                            4000,
                            0,
                            "linear",
                            "${photo_3}",
                            [5,5],
                            [5,5],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11",
                            "border-top-left-radius",
                            4000,
                            0,
                            "linear",
                            "${photo_3}",
                            [5,5],
                            [5,5],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid4",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "textShadow.offsetV",
                            4000,
                            0,
                            "linear",
                            "${Text}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid3",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${photo_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid5",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${TextCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${photo_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9",
                            "border-bottom-right-radius",
                            4000,
                            0,
                            "linear",
                            "${photo_3}",
                            [5,5],
                            [5,5],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("postcard_edgeActions.js");
})("EDGE-90976502");
