window.addEventListener('keydown',play);

function play(e)
{
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key= document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(key);
    if(!audio)
    return;
    audio.currentTime=0;
    audio.play();function play(e)
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
    var divtag=$("div");
    if(divtag.length!=0)
    {
        var display= Math.floor(Math.random()*divtag.length);
        for(i=0;i<divtag.length;i++)
        {
            if(i==display)
            {
                divtag[i].classList.add('highlight');
                break;
            }
        }
        window.addEventListener('keydown',play);
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



    key.classList.add('highlight');
    e.target.addEventListener('transitionend',e.target.classList.remove('highlight'));
}

const keys=document.querySelector('.key');
