$(document).ready(function(){
    const introText = [
        "It hasn't been the best day. And now there's a slight drizzle precipitating. You haven't had a drink in a couple weeks. You park in front of the local dive, take a deep breath, and then head in for a round or two."
    ];
    const introOptions = [
        "You walk in like a boss, owning the room. The 4 total people inside all look up at you. And then immediately back down at their drinks", 
        "You shuffle inside and B-line directly to the empty corner stool.",
        "Wait. No. You hate sitting inside a bar by yourself. You stare off into traffic as you come to this conclusion...slowly."
    ];
    $('.text').hide();
    $('.options').hide();
    $('.text').append(introText[0]).fadeIn(3000);
    $('.option1').append(introOptions[0]).fadeIn(6000);
    $('.option2').append(introOptions[1]).fadeIn(8000);
    $('.option3').append(introOptions[2]).fadeIn(10000);

});