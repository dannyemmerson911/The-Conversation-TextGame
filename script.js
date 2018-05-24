$(document).ready(function(){
    const introText = [
        "It hasn't been the best day. And now there's a slight drizzle precipitating. You haven't had a drink in a couple weeks. You park in front of the local dive, take a deep breath, and then head in for a round or two."
    ];
    const introOptions = [
        "You walk in like a boss, owning the room. The 4 total people inside all look up at you. And then immediately back down at their drinks", 
        "You shuffle inside and B-line directly to the empty corner stool.",
        "Wait. No. You hate sitting inside a bar by yourself. You stare off into traffic as you come to this conclusion...slowly."
    ];
    const choice1_1_text = [
        "Trying to make some kind of impression, it is clear you have failed. You scan for a place to sit down."
    ];
    const choice1_1_options = [
        "You sit down next to an older gentlement in a tweed cap nursing a what looks to be a whiskey.",
        "You pop a squat next to the only woman in the bar, a middle aged fiery redhead. Only thing is she's already talking to some guy.",
        "You head for the empty corner stool"
    ];
    const choice1_2_text = [
        "The barkeep makes his way over to you promptly. 'What are ya havin'?'"
    ];
    const choice1_2_options = [
        "I'll have a brandy.",
        "Jameson straight. A double, actually.",
        "I'll have a glass of water."
    ];

    $('.text').hide();
    $('.options').hide();
    $('.text').append(introText[0]).fadeIn(3000);
    $('.option1').append(introOptions[0]).fadeIn(6000);
    $('.option2').append(introOptions[1]).fadeIn(8000);
    $('.option3').append(introOptions[2]).fadeIn(10000);
    
    $('.option1').on('click', function(){
        $('.text').fadeOut(2000).empty().hide();
        $('.options').fadeOut(2000).empty().hide();
        $('.text').append(choice1_1_text).fadeIn(2000);
        $('.option1').append(choice1_1_options[0]).fadeIn(4000);
        $('.option2').append(choice1_1_options[1]).fadeIn(4000);
        $('.option3').append(choice1_1_options[2]).fadeIn(4000);
    })
    $('.option2').on('click', function(){
        $('.text').fadeOut(2000).empty().hide();
        $('.options').fadeOut(2000).empty().hide();
        $('.text').append(choice1_2_text).fadeIn(2000);
        $('.option1').append(choice1_2_options[0]).fadeIn(4000);
        $('.option2').append(choice1_2_options[1]).fadeIn(4000);
        $('.option3').append(choice1_2_options[2]).fadeIn(4000);
    })
})

