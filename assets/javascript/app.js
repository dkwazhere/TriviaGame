$(document).ready(function(){
// declaring functions.
    function timeRemain(){
        time--;
        $('#timer').html("<h2> time remaining: "  + time + "</h2>")
        if (time === 0){
            // alert("time is up");
            stop();
            hide();
            showStats();
            hideTimer();
            checkScore();
        }
    }
    function stop(){
        clearInterval(timer);
    }
    function button(){
        $("#button").on("click", function(){
            show();
            timeRemain();
            start();
            hideButton();
        })

    }
    function start(){
        timer = setInterval(timeRemain, 1000);
    }
    function hide(){
        $("#form").hide();
    }
    function show(){
        $("#form").show();
    }
    function hideButton(){
        $("#button").hide();
    }
    function hideTimer(){
        $("#timer").hide();
    }
    function showStats(){
        checkScore();
        $("#correctincorrect").append("<h1>Correct: " + correct + "</h1>");
        $("#correctincorrect").append("<h1>Incorrect: " + incorrect + "</h1>");
        $("#correctincorrect").show();
        hide();
    }
    function checkScore(){
        for (i=0; i<10;i++){
            if ($('[class="correct"]').is(':checked')){
                correct++;
                console.log(correct);
            }
             else {
                incorrect++;
                console.log(incorrect);
            }
        }
    }


// running functions
    // checkCorrect();
    button();
    hide();
    // checkCorrect();
});

// global variables.
var time = 90;
var correct = 0;
var incorrect = 0;
var timer;

























// listing questions function.
    // function listQuestions(){
    //     for (i=0; i<myQuestions.length; i++){
    //         $("#questions").append("<h3>" + myQuestions[i].question + "</h3>");
    //
    //     for (j=0; j<myQuestions[i].answer.length; j++){
    //
    //         }
    //     }
    //
    // }



// var myQuestions = [
//     { question: "How many wheels are on a motorcycle?",
//       answer: ["4", "2", "5", "10"],
//       correctAnswer: "2",
//    },
//    { question: "How often (minimum) should you check your hydraulic fluids and coolant levels?",
//      answer: ["once a week", "once a month", "4 times a year", "every 2 years"],
//      correctAnswer: "once a week",
//    },
//    { question: "If you only hold a Californian M2 permit which of these can you NOT ride?",
//      answer: ["motorized scooter", "electric bicycle", "moped", "motorcycle"],
//      correctAnswer: "motorcycle",
//    },
//    { question: "Approximately half of motorcycle crash fatalities are caused by",
//        answer: ["alcohol impairment", "mechanical failure", "road conditions", "the rider's helmet"],
//        correctAnswer: "alcohol impairment",
//    },
//    { question: "When slowing for a normal stop",
//        answer: ["pull in the clutch and coast", "shift down through the rest of the gears as you slow", "use less throttle and use the front brake", "use only the rear brake"],
//        correctAnswer: "shift down through the rest of the gears as you slow",
//    },
//    { question: "In slow, tight turns",
//         answer: ["do not lean", "lean the motorcycle only, and keep your body straight", "lean with the motorcycle", "lean your body more than the motorcycle"],
//         correctAnswer: "lean the motorcycle only, and keep your body straight",
//    },
//    { question: "Use both brakes",
//         answer: ["while swerving", "only for emergency stops", "every time you slow or stop", "only for normal stops"],
//         correctAnswer: "every time you slow or stop",
//    },
//    { question: "A group of riders move from a staggered formation to a single file when",
//         answer: ["riding at night", "stopping at intersections", "traffic is heavy", "turning corners"],
//         correctAnswer: "d",
//    },
//    { question: "When preparing to pass, it is usually better to",
//        answer: ["signal - check your left mirror - look left", "signal - check your left mirror - speed up", "signal - check your left mirror", "signal - move into left lane - accelerate"],
//        correctAnswer: "signal - check your left mirror - look left",
//    },
//    { question: "Which brand is not a motorcycle brand?",
//        answer: ["Honda", "Kawasaki", "Apple", "Yamaha"],
//        correctAnswer: "Apple",
//    }
// ];
