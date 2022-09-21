function me() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'fb')
    xhttp.send();

    window.open('https://www.facebook.com/zafar.niloy','_self')

}



function mcus() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'mcu-seris-clicked')
    xhttp.send();


    window.open('https://mcubd1.netlify.app/mcu-seris/index','_self')

}

function mcu() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'mcu--clicked')
    xhttp.send();

    window.open('https://mcubd1.netlify.app', '_self')
}

function home() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'logo')
    xhttp.send();


    window.open('https://mcubd1.netlify.app', '_self')
}

function mar() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'Marvel-clicked')
    xhttp.send();
    window.open('https://mcubd1.netlify.app/marvel/index','_self')
    
}

function other() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'other')
    xhttp.send();

    window.open('https://mcubd1.netlify.app/others','_self')


}





function imgdiv(bname, bimg, q7pp,size,t1,t2) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var g = w * .3939


    var chidiv = document.createElement("div");
    var iiidiv = document.createElement("div");
    var p = document.createElement("p");
    p.innerText = bname
    var image = document.createElement("img");

    chidiv.classList.add('chi');
    iiidiv.classList.add('iii');
    image.src = '../logoimg/'+bimg+'.jpg'

    iiidiv.append(image)
    chidiv.append(iiidiv, p)
    var con = document.getElementById('cont')
    con.appendChild(chidiv)

    if (h - w < 0) {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .9 + 'px'
        chidiv.style.width = g * .6 + 'px'

        image.style.width = g * .6 + 'px'

        iiidiv.style.height = h * .7 + 'px'
        iiidiv.style.overflow = 'hidden'

    } 
    else {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .55 + 'px'
        chidiv.style.width = g + 'px'

        image.style.width = g + 'px'

        iiidiv.style.height = h * .4 + 'px'
        iiidiv.style.overflow = 'hidden'

    }

    chidiv.onclick = () => {
        var con = document.getElementById('cont')
        con.style.display = 'none'

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg)
        xhttp.send();



        var onli = document.createElement("button");
        var down7 = document.createElement("button");
        
        onli.setAttribute('id', 'onli')
        down7.setAttribute('id', 'down')

        onli.innerText = 'Watch Online'
        down7.innerText = 'Download (' + size + ')'

        down7.style.display = 'block'
        down7.style.width = '100%'
        down7.style.padding ='50px'
        
        onli.style.display = 'block'
        onli.style.width = '100%'
        onli.style.padding = '50px'
        onli.style.marginBottom = '10px'

        // document.body.append(video, button)
        document.body.append(onli,down7)
    



onli.onclick = () => {
        var onli = document.getElementById('onli')
        onli.remove()
        var dow = document.getElementById('down')
        dow.remove()


        var video = document.createElement("video");
        var source = document.createElement("source");
        // var mic = document.createElement("button");
        // var poc = document.createElement("button");

        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')

        source.setAttribute('id', 'srcc')
        // mic.setAttribute('id', 'mic')
        // poc.setAttribute('id', 'poc')
        
        video.width = w * .94
        video.style.marginTop = '20px'
        source.src = q7pp

        // mic.innerText = 'Mid-Credit'
        // poc.innerText = 'Post-Credit'

        // mic.style.padding = '20px'
        // poc.style.padding = '20px'
        video.append(source)

        document.body.append(video)



        sig(bimg,'9000','9s')
        sig(bimg,'20000','20s')
        sig(bimg,'40000','40s')
        sig(bimg,'120000','2m')
        sig(bimg,'300000','5m')
        sig(bimg,'900000','15m')
        sig(bimg,'1200000','20m')
        sig(bimg,'1800000','30m')
        sig(bimg,'2400000','40m')
        sig(bimg,'3000000','50m')
        sig(bimg,'3600000','1h')
        sig(bimg,'4200000','1h-10m')
        sig(bimg,'4800000','1h-20m')
        sig(bimg,'5400000','1h-30m')
        sig(bimg,'6000000','1h-40m')
        sig(bimg,'6600000','1h-50m')
        sig(bimg,'7200000','2h')
        sig(bimg,'7500000','2h-5m')
        sig(bimg,'7800000','2h-10m')
        sig(bimg,'8100000','2h-15m')
        sig(bimg,'8400000','2h-20m')
        sig(bimg,'8700000','2h-25m')
        sig(bimg,'9000000','2h-30m')
        sig(bimg,'9300000','2h-35m')
        sig(bimg,'9600000','2h-40m')




        }



        down7.onclick = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", 'https://nodebd.vercel.app/', true);
            xhttp.setRequestHeader('reqs', bimg+'--download')
            xhttp.send();
            window.open(q7pp, '_self') }


    }

}



setTimeout(() => {

    // imgdiv(name,img,q7,size,midcredit,pc)


    imgdiv('The Little Rascals (1994) [750MB]','little','https://share.bdff.workers.dev/0:/OTHERS/The.Little.Rascals.1994.mp4','750MB')

    imgdiv('K.G.F: Chapter 2   [1.6GB]','kgf2','https://share.bdff.workers.dev/0:/OTHERS/kgf2.mp4','1.6GB')


    imgdiv('John Wick [1.7GB]', 'john1', 'https://abcd.bdff.workers.dev/0:/John.Wick.1-mp3.mp4', '1.7GB')

    imgdiv('John Wick 2     [1.6GB]', 'john2', 'https://abcd.bdff.workers.dev/0:/John.Wick-2-mp3.mp4', '1.6GB')

    // imgdiv('365  [1.3GB]','365','https://share.bdff.workers.dev/0:/Subtittle/365.mp4','1.3GB')

    imgdiv('Ra.One [1.5GB]','rone','https://share.bdff.workers.dev/0:/OTHERS/ra-one.mp4','1.5GB')

    imgdiv('Chandni Chowk to China [1.5GB]','chandnichowk','https://share.bdff.workers.dev/0:/OTHERS/chandnichowk.mp4','1.5GB')

    imgdiv('Rab Ne Bana Di Jodi [1.5GB]','Rab.Ne.Bana.Di.Jodi','https://share.bdff.workers.dev/0:/OTHERS/Rab.Ne.Bana.Di.Jodi.mp4','1.5GB')

   





}, 1);



function sig(bimg,sett,tim){

    var video=document.getElementById('viddd') 
   return setTimeout(() => {
           // var xhttp = new XMLHttpRequest();
           // xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-'+tim+'---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
           // xhttp.send();



           var xhttp = new XMLHttpRequest();
           xhttp.open("POST", 'https://nodebd.vercel.app/', true);
           xhttp.setRequestHeader('reqs',bimg+'--'+tim+'--state('+video.readyState+')--'+Math.trunc(video.currentTime / 60 / 60)+':'+Math.trunc((video.currentTime / 60) % 60)+':'+Math.trunc(video.currentTime % 60)+'-')
           xhttp.send();
   
       }, sett);
   
}
