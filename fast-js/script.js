// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Hello, and welcome to the study!",
          "content": "In this task, you will need to use the \u003Ckbd\u003Ez\u003C\u002Fkbd\u003E and \u003Ckbd\u003Em\u003C\u002Fkbd\u003E keys on the computer keyboard. Please locate these keys now.\u003Cbr\u003E\u003Cbr\u003EWhen you begin the task, words and pictures will begin to flash up on the screen, one at a time. The goal of the task is to learn to press either the \u003Ckbd\u003Ez\u003C\u002Fkbd\u003E or the \u003Ckbd\u003Em\u003C\u002Fkbd\u003E key depending on what picture\u002Fimage appears on the screen, based on the feedback that the test provides you.\u003Cbr\u003E\u003Cbr\u003E\u003Cb\u003ETry to respond AS QUICKLY AND AS ACCURATELY AS POSSIBLE.\u003C\u002Fb\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Next Page",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "welcome"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "You will first complete some practice trials.",
          "content": "This will help you to get acquainted with the test. When you're ready, click \"Start practice\" to begin."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Start practice",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "practice_instructions"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "stimulus": "left",
          "required_response": "left",
          "block": ""
        },
        {
          "stimulus": "right",
          "required_response": "left",
          "block": ""
        },
        {
          "stimulus": "left",
          "required_response": "right",
          "block": ""
        },
        {
          "stimulus": "right",
          "required_response": "right",
          "block": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "1"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "practice",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "iti",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 327.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${parameters.stimulus}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(z)": "left",
              "keypress(m)": "right"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "stimulus",
            "timeout": "3000",
            "correctResponse": "${parameters.required_response}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 167.11,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#a8ca09",
                "text": "CORRECT!",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "correct",
            "timeout": "500",
            "tardy": true,
            "skip": "${this.state.correct == 0}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 135.09,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#d6341a",
                "text": "WRONG!",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "wrong",
            "tardy": true,
            "timeout": "2000",
            "skip": "${this.state.correct == 1}"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Good!",
          "content": "You will now begin the main task. Remember: learn how to respond by pressing the \u003Ckbd\u003Ez\u003C\u002Fkbd\u003E or the \u003Ckbd\u003Em\u003C\u002Fkbd\u003E key to each stimulus. When you're ready, click \"Start task\" to begin."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Start task",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "block1_instructions"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word": "HAPPY",
          "image": "",
          "required_response": "left",
          "block": "inconsistent"
        },
        {
          "word": "GOODNESS",
          "image": "",
          "required_response": "left",
          "block": "inconsistent"
        },
        {
          "word": "KIND",
          "image": "",
          "required_response": "left",
          "block": "inconsistent"
        },
        {
          "word": "CARING",
          "image": "",
          "required_response": "left",
          "block": "inconsistent"
        },
        {
          "word": "WAR",
          "image": "",
          "required_response": "right",
          "block": "inconsistent"
        },
        {
          "word": "HATE",
          "image": "",
          "required_response": "right",
          "block": "inconsistent"
        },
        {
          "word": "DEATH",
          "image": "",
          "required_response": "right",
          "block": "inconsistent"
        },
        {
          "word": "PAIN",
          "image": "",
          "required_response": "right",
          "block": "inconsistent"
        },
        {
          "word": "",
          "image": "black1.jpg",
          "required_response": "left",
          "block": "inconsistent"
        },
        {
          "word": "",
          "image": "black2.jpg",
          "required_response": "left",
          "block": "inconsistent"
        },
        {
          "word": "",
          "image": "black3.jpg",
          "required_response": "left",
          "block": "inconsistent"
        },
        {
          "word": "",
          "image": "black4.jpg",
          "required_response": "left",
          "block": "inconsistent"
        },
        {
          "word": "",
          "image": "white1.jpg",
          "required_response": "right",
          "block": "inconsistent"
        },
        {
          "word": "",
          "image": "white2.jpg",
          "required_response": "right",
          "block": "inconsistent"
        },
        {
          "word": "",
          "image": "white3.jpg",
          "required_response": "right",
          "block": "inconsistent"
        },
        {
          "word": "",
          "image": "white4.jpg",
          "required_response": "right",
          "block": "inconsistent"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "block1",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "iti",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 279.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${parameters.word}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(z)": "left",
              "keypress(m)": "right"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "word_stimulus",
            "timeout": "3000",
            "correctResponse": "${parameters.required_response}",
            "tardy": true,
            "skip": "${parameters.word === \"\"}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 247,
                "height": 248,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.image] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black1.jpg": "embedded\u002Fcd6fba6fccf5b98bb9af303d58785d7ebf456835994ee6e50e66e5701339378a.jpg",
              "black2.jpg": "embedded\u002F3f9011afe8e95cea688c2ee5d3115ac32f2b687b3b3267b2ba2bf6d04f9a2d9c.jpg",
              "black3.jpg": "embedded\u002F7fd2d171a532c6ffbf49513e1ca131ee98d685407f37cbbc4b9cb7be2bfe9fe3.jpg",
              "black4.jpg": "embedded\u002F65f813d1f44e72351652fa938f41bad3bfcdcaad432a06ed33559b4bd4ade83b.jpg",
              "white1.jpg": "embedded\u002F467f71de35df6f524f3e42d6ee4ac5f47327111d36047dff6a428fbb8285f2bf.jpg",
              "white2.jpg": "embedded\u002Fe4304b079895e93aee7c8a73f9c17042770d2cb84ef8034a991dfcfbae32fc59.jpg",
              "white3.jpg": "embedded\u002F14493d2aebe17f4483fd404f5fa9a71bf59777ba02673a914e10a8ee4cdc44a7.jpg",
              "white4.jpg": "embedded\u002F55b430603e4769272ea456537e4e63800d3274e50e17652e4c46be73eb73da8a.jpg"
            },
            "responses": {
              "keypress(z)": "left",
              "keypress(m)": "right"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "image_stimulus",
            "timeout": "3000",
            "correctResponse": "${parameters.required_response}",
            "tardy": true,
            "skip": "${parameters.image === \"\"}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 167.11,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#a8ca09",
                "text": "CORRECT!",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "correct",
            "timeout": "500",
            "tardy": true,
            "skip": "${this.state.correct == 0}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 135.09,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#d6341a",
                "text": "WRONG!",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "wrong",
            "tardy": true,
            "timeout": "2000",
            "skip": "${this.state.correct == 1}"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Good!",
          "content": "When you next click \"Continue task\", words and pictures will again begin to flash up on the screen, one at a time. As before, the goal of the task is to learn to press either the \u003Ckbd\u003Ez\u003C\u002Fkbd\u003E or the \u003Ckbd\u003Em\u003C\u002Fkbd\u003E key depending on what picture\u002Fimage appears on the screen, based on the feedback that the test provides you.\u003Cbr\u003E\u003Cbr\u003E\u003Cb\u003ETry to respond AS QUICKLY AND AS ACCURATELY AS POSSIBLE.\u003C\u002Fb\u003E\u003Cbr\u003E\u003Cbr\u003EWhen you're ready, click \"Continue task\" to begin."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue task",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "block2_instructions"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word": "HAPPY",
          "image": "",
          "required_response": "left",
          "block": "consistent"
        },
        {
          "word": "GOODNESS",
          "image": "",
          "required_response": "left",
          "block": "consistent"
        },
        {
          "word": "KIND",
          "image": "",
          "required_response": "left",
          "block": "consistent"
        },
        {
          "word": "CARING",
          "image": "",
          "required_response": "left",
          "block": "consistent"
        },
        {
          "word": "WAR",
          "image": "",
          "required_response": "right",
          "block": "consistent"
        },
        {
          "word": "HATE",
          "image": "",
          "required_response": "right",
          "block": "consistent"
        },
        {
          "word": "DEATH",
          "image": "",
          "required_response": "right",
          "block": "consistent"
        },
        {
          "word": "PAIN",
          "image": "",
          "required_response": "right",
          "block": "consistent"
        },
        {
          "word": "",
          "image": "black1.jpg",
          "required_response": "right",
          "block": "consistent"
        },
        {
          "word": "",
          "image": "black2.jpg",
          "required_response": "right",
          "block": "consistent"
        },
        {
          "word": "",
          "image": "black3.jpg",
          "required_response": "right",
          "block": "consistent"
        },
        {
          "word": "",
          "image": "black4.jpg",
          "required_response": "right",
          "block": "consistent"
        },
        {
          "word": "",
          "image": "white1.jpg",
          "required_response": "left",
          "block": "consistent"
        },
        {
          "word": "",
          "image": "white2.jpg",
          "required_response": "left",
          "block": "consistent"
        },
        {
          "word": "",
          "image": "white3.jpg",
          "required_response": "left",
          "block": "consistent"
        },
        {
          "word": "",
          "image": "white4.jpg",
          "required_response": "left",
          "block": "consistent"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "10"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "block2",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "iti",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 279.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${parameters.word}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(z)": "left",
              "keypress(m)": "right"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "word_stimulus",
            "timeout": "3000",
            "correctResponse": "${parameters.required_response}",
            "tardy": true,
            "skip": "${parameters.word === \"\"}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 247,
                "height": 248,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[this.parameters.image] }"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "black1.jpg": "embedded\u002Fcd6fba6fccf5b98bb9af303d58785d7ebf456835994ee6e50e66e5701339378a.jpg",
              "black2.jpg": "embedded\u002F3f9011afe8e95cea688c2ee5d3115ac32f2b687b3b3267b2ba2bf6d04f9a2d9c.jpg",
              "black3.jpg": "embedded\u002F7fd2d171a532c6ffbf49513e1ca131ee98d685407f37cbbc4b9cb7be2bfe9fe3.jpg",
              "black4.jpg": "embedded\u002F65f813d1f44e72351652fa938f41bad3bfcdcaad432a06ed33559b4bd4ade83b.jpg",
              "white1.jpg": "embedded\u002F467f71de35df6f524f3e42d6ee4ac5f47327111d36047dff6a428fbb8285f2bf.jpg",
              "white2.jpg": "embedded\u002Fe4304b079895e93aee7c8a73f9c17042770d2cb84ef8034a991dfcfbae32fc59.jpg",
              "white3.jpg": "embedded\u002F14493d2aebe17f4483fd404f5fa9a71bf59777ba02673a914e10a8ee4cdc44a7.jpg",
              "white4.jpg": "embedded\u002F55b430603e4769272ea456537e4e63800d3274e50e17652e4c46be73eb73da8a.jpg"
            },
            "responses": {
              "keypress(z)": "left",
              "keypress(m)": "right"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "image_stimulus",
            "timeout": "3000",
            "correctResponse": "${parameters.required_response}",
            "tardy": true,
            "skip": "${parameters.image === \"\"}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 167.11,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#a8ca09",
                "text": "CORRECT!",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "correct",
            "timeout": "500",
            "tardy": true,
            "skip": "${this.state.correct == 0}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 135.09,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#d6341a",
                "text": "WRONG!",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "wrong",
            "tardy": true,
            "timeout": "2000",
            "skip": "${this.state.correct == 1}"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Thank you for your participation!",
          "content": "The task is now complete and your data have been saved. You may close this window."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Finished"
    }
  ]
})

// Let's go!
study.run()