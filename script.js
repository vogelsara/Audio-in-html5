
function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

var soundFiles = {
    "c": "sound/synth_c_note.wav",
    "d": "sound/synth_d_note.wav",
    "e": "sound/synth_e_note.wav",
    "f": "sound/synth_f_note.wav",
    "g": "sound/synth_g_note.wav",
    "a": "sound/synth_a_note.wav",
    "h": "sound/synth_h_note.wav"
}

var waitTime = 330;

async function loadJsonFile() {
    const response = await fetch("hullapelyhes.json");
    return await response.json();
}

async function playMusic() {
    var song = await loadJsonFile();

    for (var i = 0; i < song.length; i++) {
        var sound = song[i]['sound'];
        var soundSource = soundFiles[sound];
        var audio = new Audio(soundSource);
        await audio.play();

        var delayMs = song[i]['delay'] * waitTime;
        wait(delayMs);
    }
}

$(document).ready(function(){
    $("button").click(function(){
        playMusic();
    });
});
