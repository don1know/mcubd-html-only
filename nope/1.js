document.body.append(document.createElement("h6").innerText='22')

function me() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    // xhttp.setRequestHeader('reqs', 'fb')
    // xhttp.send();
    // window.open('https://www.facebook.com/zafar.niloy','_self')

}


document.body.append(document.createElement("h6").innerText='23')

function mcus() {
// var xhttp = new XMLHttpRequest();
// xhttp.open("POST", 'https://nodebd.vercel.app/', true);
// xhttp.setRequestHeader('reqs', 'Marvel--seris--clicked')
// xhttp.send();
window.open('https://mcubd.netlify.app/mcu-seris/index','_self')

}

function mcu() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    // xhttp.setRequestHeader('reqs', 'Mcu--but--clicked')
    // xhttp.send();

    window.open('https://mcubd.netlify.app', '_self')
}

function home() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    // xhttp.setRequestHeader('reqs', 'mcubd--logo--clicked')
    // xhttp.send();


    window.open('https://mcubd.netlify.app', '_self')
}

function mar() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    // xhttp.setRequestHeader('reqs', 'Marvel--but--clicked')
    // xhttp.send();
    window.open('https://mcubd.netlify.app/marvel/index','_self')
    
}

function other() {
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    // xhttp.setRequestHeader('reqs', 'other---clicked')
    // xhttp.send();


    window.open('https://mcubd.netlify.app/others/index','_self')
}



document.body.append(document.createElement("h6").innerText='24')


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
    image.src ='./logoimg/'+ bimg+'.jpg'

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

document.body.append(document.createElement("h6").innerText='25')

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
        down7.style.marginBottom = '10px'


        // document.body.append(video, button)
        document.body.append(down7,onli)

document.body.append(document.createElement("h6").innerText='26')
    



onli.onclick = () => {
        var onli = document.getElementById('onli')
        onli.remove()
        var dow = document.getElementById('down')
        dow.remove()


        var video = document.createElement("video");
        var source = document.createElement("source");
        var mic = document.createElement("button");
        var poc = document.createElement("button");

        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')

        source.setAttribute('id', 'srcc')
        mic.setAttribute('id', 'mic')
        poc.setAttribute('id', 'poc')
        
        video.width = w * .94
        video.style.marginTop = '20px'
        source.src = q7pp

        mic.innerText = 'Mid-Credit'
        poc.innerText = 'Post-Credit'

        mic.style.padding = '20px'
        poc.style.padding = '20px'
        video.append(source)

        document.body.append(video)
document.body.append(document.createElement("h6").innerText='27')


        // var ti0 = setTimeout(() => {
        //     var vid0 = document.getElementById("viddd");
        //     if (vid0.readyState != 4  && vid0.currentTime < 2) {
        //         alert('Video loading failed,Plz Reload the Website to fix it')
        //     }
        // }, 60000);




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

        document.body.append(document.createElement("h6").innerText='28')






        }



        down7.onclick = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", 'https://nodebd.vercel.app/', true);
            xhttp.setRequestHeader('reqs', 'download--'+bimg)
            xhttp.send();

        down7.disabled=true
            window.open(q7pp, '_self') }


    }

}



setTimeout(() => {

    // imgdiv(name,img,q7,down,size)

    imgdiv('Thor ragnarok (2017) [1.3GB]', 'Thor3', 'https://abcd.bdff.workers.dev/0:/Thor-ragnarock-mp3.mp4', '1.3GB','7354','7770')


    imgdiv('Guardian of the galaxy vol.2  (2017) [1.2GB]', 'galaxy2','https://abcd.bdff.workers.dev/0:/Guardian2-mp3.mp4', '1.2GB')

    imgdiv('Avengers: Infinity War   (2018)         [1.3GB]', 'war', 'https://abcd.bdff.workers.dev/0:/infinity.mp4', '1.3GB')



    imgdiv('Avengers: Endgame(2019) [1.6GB]','end','https://share.bdff.workers.dev/0:/MCU-720/Endgame720p.mp4','1.6GB')


    imgdiv('Avengers age of ultron (2015) [1.2GB]', 'Avengers2', 'https://abcd.bdff.workers.dev/0:/ultron-mp3.mp4', '1.2GB')





    imgdiv('Captain America: The First Avenger (2011)    [1.2GB]','cap','https://share.bdff.workers.dev/0:/MCU-720/captain-america-720.mp4','1.2GB')


    imgdiv('Iron Man  (2008) [984MB]','iron','https://share.bdff.workers.dev/0:/MCU-720/IronMan-720p.mp4','984MB','','7508')


    imgdiv('Captain America: Civil War  (2016) [1.5GB]','civil','https://share.bdff.workers.dev/0:/MCU-720/Civil-war.mp4','1.5GB')

    imgdiv('Iron Man 3 (2013) [1.2GB]','iron3','https://share.bdff.workers.dev/0:/MCU-720/Iron-man3.mp4','1.2GB')


    imgdiv('Spider-Man: Homecoming (2017) [1.3GB]','spi1','https://share.bdff.workers.dev/0:/MCU-720/spi1.mp4','1.3GB')


    imgdiv('Captain America: The Winter Soldier (2014) [1.3GB]','cap2','https://share.bdff.workers.dev/0:/MCU-720/cap2.mp4','1.3GB')







    imgdiv('Ant-man (2015) [920MB]', 'ant', 'https://abcd.bdff.workers.dev/0:/Ant.Man-mp3.mp4', '920 MB')


    imgdiv('Guardian of the galaxy vol.1   (2014)   [1.9GB]','galaxy','https://abcd.bdff.workers.dev/0:/guardian.mp4','1.9GB')



    imgdiv('Doctor Strange (2016) [1.2GB]', 'dr', 'https://share.bdff.workers.dev/0:/MCU-720/Doctor.Strange.2016.720p.mp4', '1.2GB','6390','6775')



    imgdiv('Ant-Man and the Wasp  (2018)  [1.2GB]','ant2','https://share.bdff.workers.dev/0:/MCU-720/ant2.mp4','1.2GB')


    // imgdiv('Doctor Strange in the Multiverse of Madness ,Coming soon.','drst2.jpg')


    // imgdiv('Yaariyan    [1.2GB]', 'yari', 'https://abcd.bdff.workers.dev/0:/Yaariyan.720.mp4', '1.2GB')

    


}, 1);

function sig(bimg,sett,tim){

    //  var video=document.getElementById('viddd') 
    // return setTimeout(() => {

    //         var xhttp = new XMLHttpRequest();
    //         xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    //         xhttp.setRequestHeader('reqs',bimg+'--'+tim+'--state('+video.readyState+')--'+Math.trunc(video.currentTime / 60 / 60)+':'+Math.trunc((video.currentTime / 60) % 60)+':'+Math.trunc(video.currentTime % 60)+'-')
    //         xhttp.send();
    
    //     }, sett);
    
}



