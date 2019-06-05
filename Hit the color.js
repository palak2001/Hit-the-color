function play(e)
{
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key= document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(key);
    if(!audio)
    return;
    audio.currentTime=0;
    audio.play();
    e.target.addEventListener('transitionend',e.target.classList.remove('highlight'));
}

function gamestart()
{
    console.log("hi");
    var divtag= document.getElementsByClassName("key");
    console.log(divtag);
    if(divtag.length!=0)
    {
        var display= Math.floor(Math.random()*divtag.length);
        for(i=0;i<divtag.length;i++)
        {
            if(i==display)
            {
                console.log("Hlo :p");
                divtag[i].classList.add('highlight');
                break;
            }
        }
        window.addEventListener('keydown',play);
        const key=2;
        var score=0;
        if(key==divtag[i])
        {
            score++;
        }
        else if(divtag[i]!=key)
        {
            score--;
        }
        e.target.addEventListener('transitionend',e.target.classList.remove('highlight'));
    }
}

var button= document.querySelector('.btn');
button.addEventListener('click',gamestart);
console.log("hi");

