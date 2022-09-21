var ipad ='ll'

function me() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'https://mcubd1.herokuapp.com/------------------------------------fb---------------fb-----', true);
    xhttp.send();
    window.open('https://www.facebook.com/zafar.niloy','_self')

}

function aaa() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'https://mcubd1.herokuapp.com/----------------------------------Vlc------------------------------', true);
    xhttp.send();

}

function mcus() {
    // window.open('https://mcubd1.herokuapp.com/ms','_self')


    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'https://mcubd1.herokuapp.com/----------------------------------Marvel--seris--clicked------------------------', true);
    xhttp.send();

    window.open('https://mcubd1.netlify.app/mcu-seris/index','_self')

}

function mcu() {
    // location.reload(true);    
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", 'https://mcubd1.herokuapp.com/----------------------------------MCU-but-clicked--------------------------', true);
    xhttp.send();

    window.open('https://mcubd1.netlify.app', '_self')
}

function home() {
    // location.reload(true);
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", 'https://mcubd1.herokuapp.com/----------------------------------MCU-logo-clicked--------------------------', true);
    xhttp.send();


    window.open('https://mcubd1.netlify.app', '_self')
}

function mar() {

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'https://mcubd1.herokuapp.com/----------------------------------Marvel-butt-clicked-------------------------', true);
    xhttp.send();
    window.open('https://mcubd1.netlify.app/marvel/index','_self')
    
}

function other() {

    // alert('coming...')



    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'https://mcubd1.herokuapp.com/---------------------------------other-clicked-----------------------------', true);
    xhttp.send();

    window.open('https://mcubd1.netlify.app/others/index','_self')


}




// function imgdiv(bname, bimg,size,t1,t2) {

function imgdiv(bname, bimg,size,epi1,epi1e,epi2,epi2e,epi3,epi3e,epi4,epi4e,epi5,epi5e,epi6,epi6e,e1sub,e2sub,e3sub,e4sub,e5sub,e6sub,epi7,epi7e,epi8,epi8e,epi9,epi9e) {
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

        var req = 'https://mcubd1.herokuapp.com/--------------------' + bimg + '------------------' + bimg
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();



        var onli = document.createElement("button");
        var down7 = document.createElement("button");
        
        onli.setAttribute('id', 'onli')
        down7.setAttribute('id', 'down')

        onli.innerText = 'Watch Online'
        down7.innerText = 'Download (' + size + ') per Episode'

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




        var e1 = document.createElement("button");
        var e2 = document.createElement("button");
        var e3 = document.createElement("button");
        var e4 = document.createElement("button");
        var e5 = document.createElement("button");
        var e6 = document.createElement("button");
        var e7 = document.createElement("button");
        var e8 = document.createElement("button");
        var e9 = document.createElement("button");
        var e10 = document.createElement("button");
        var e11 = document.createElement("button");
        var e12 = document.createElement("button");
        var e13 = document.createElement("button");
        var e14 = document.createElement("button");
        var e15 = document.createElement("button");
        var e16 = document.createElement("button");
        var e17 = document.createElement("button");
        var e18 = document.createElement("button");
        var e19 = document.createElement("button");
        var e20 = document.createElement("button");

        e1.innerText='Episode 1'
        e2.innerText='Episode 2'
        e3.innerText='Episode 3'
        e4.innerText='Episode 4'
        e5.innerText='Episode 5'
        e6.innerText='Episode 6'
        e7.innerText='Episode 7'
        e8.innerText='Episode 8'
        e9.innerText='Episode 9'
        e10.innerText='Episode 10'
        e11.innerText='Episode 11'
        e12.innerText='Episode 12'
        e13.innerText='Episode 13'
        e14.innerText='Episode 14'
        e15.innerText='Episode 15'
        e16.innerText='Episode 16'
        e17.innerText='Episode 17'
        e18.innerText='Episode 18'
        e19.innerText='Episode 19'
        e20.innerText='Episode 20'





        e1.style.padding = '20px'
        e2.style.padding = '20px'
        e3.style.padding = '20px'
        e4.style.padding = '20px'
        e5.style.padding = '20px'
        e6.style.padding = '20px'
        e7.style.padding = '20px'
        e8.style.padding = '20px'
        e9.style.padding = '20px'
        e10.style.padding = '20px'
        e11.style.padding = '20px'
        e12.style.padding = '20px'
        e13.style.padding = '20px'
        e14.style.padding = '20px'
        e15.style.padding = '20px'
        e16.style.padding = '20px'
        e17.style.padding = '20px'
        e18.style.padding = '20px'
        e19.style.padding = '20px'
        e20.style.padding = '20px'


        e1.style.display = 'block'
        e1.style.width = '100%'
        e1.style.padding = '12px'
        e1.style.marginBottom = '10px'
  

        e2.style.display = 'block'
        e2.style.width = '100%'
        e2.style.padding = '12px'
        e2.style.marginBottom = '10px'
  
        e3.style.display = 'block'
        e3.style.width = '100%'
        e3.style.padding = '12px'
        e3.style.marginBottom = '10px'
  
        e4.style.display = 'block'
        e4.style.width = '100%'
        e4.style.padding = '12px'
        e4.style.marginBottom = '10px'
  
        e5.style.display = 'block'
        e5.style.width = '100%'
        e5.style.padding = '12px'
        e5.style.marginBottom = '10px'
  
        e6.style.display = 'block'
        e6.style.width = '100%'
        e6.style.padding = '12px'
        e6.style.marginBottom = '10px'
  
        e7.style.display = 'block'
        e7.style.width = '100%'
        e7.style.padding = '12px'
        e7.style.marginBottom = '10px'
  
        e8.style.display = 'block'
        e8.style.width = '100%'
        e8.style.padding = '12px'
        e8.style.marginBottom = '10px'
  
        e9.style.display = 'block'
        e9.style.width = '100%'
        e9.style.padding = '12px'
        e9.style.marginBottom = '10px'

  

        e1.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()

            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)
            // document.body.append(hi,eng)




        var video = document.createElement("video");
        var sub = document.createElement("TRACK");
        var source = document.createElement("source");


        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')


        sub.setAttribute('src', e1sub)
        sub.setAttribute('kind', 'subtitles')
        sub.setAttribute('srclang', 'en')
        sub.setAttribute('label', 'English')
        sub.setAttribute('default', true)







        

        source.setAttribute('id', 'srcc')
        
        video.width = w * .94
        video.style.marginTop = '20px'
        // source.src = epi1
        


        hi.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi1

            video.append(source)
            document.body.append(video)

            setTimeout(() => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e1---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
            xhttp.send();

        }, 8000);
            setTimeout(() => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e1---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
            xhttp.send();

        }, 20000);
            setTimeout(() => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e1---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
            xhttp.send();

        }, 40000);
            setTimeout(() => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e1---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
            xhttp.send();

        }, 120000);
            setTimeout(() => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e1---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
            xhttp.send();

        }, 300000);
            setTimeout(() => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e1---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
            xhttp.send();

        }, 900000);
            setTimeout(() => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e1---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
            xhttp.send();

        }, 1800000);
            setTimeout(() => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e1---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
            xhttp.send();

        }, 2520000);



        }
        eng.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi1e

            video.append(source,sub)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e1---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e1---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e1---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e1---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e1---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e1---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e1---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e1---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }


        }
        e2.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            var hi = document.createElement("button");
            var eng = document.createElement("button");
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)

        var video = document.createElement("video");
        var source = document.createElement("source");
        var sub = document.createElement("TRACK");

        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')


    
        sub.setAttribute('src', e2sub)
        sub.setAttribute('kind', 'subtitles')
        sub.setAttribute('srclang', 'en')
        sub.setAttribute('label', 'English')
        sub.setAttribute('default', true)

        source.setAttribute('id', 'srcc')
        
        video.width = w * .94
        video.style.marginTop = '20px'

        
        hi.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi2

            video.append(source)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e2---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e2---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e2---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e2---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e2---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e2---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e2---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e2---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }
        eng.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi2e

            video.append(source,sub)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e2---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e2---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e2---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e2---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e2---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e2---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e2---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e2---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }


        }
        e3.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()


            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)

        var video = document.createElement("video");
        var source = document.createElement("source");
        var sub = document.createElement("TRACK");

        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')



        sub.setAttribute('src', e3sub)
        sub.setAttribute('kind', 'subtitles')
        sub.setAttribute('srclang', 'en')
        sub.setAttribute('label', 'English')
        sub.setAttribute('default', true)

        source.setAttribute('id', 'srcc')

        
        video.width = w * .94
        video.style.marginTop = '20px'

        hi.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi3

            video.append(source)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e3---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e3---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e3---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e3---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e3---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e3---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e3---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e3---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }
        eng.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi3e

            video.append(source,sub)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e3---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e3---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e3---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e3---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e3---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e3---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e3---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e3---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }

        
        }
        e4.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()


            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)

        var video = document.createElement("video");
        var source = document.createElement("source");
        var sub = document.createElement("TRACK");

        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')



        sub.setAttribute('src', e4sub)
        sub.setAttribute('kind', 'subtitles')
        sub.setAttribute('srclang', 'en')
        sub.setAttribute('label', 'English')
        sub.setAttribute('default', true)

        source.setAttribute('id', 'srcc')

        
        video.width = w * .94
        video.style.marginTop = '20px'
        
        hi.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi4

            video.append(source)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e4---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e4---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e4---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e4---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e4---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e4---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e4---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e4---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }
        eng.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi4e

            video.append(source,sub)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e4---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e4---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e4---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e4---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e4---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e4---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e4---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e4---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }

        }
        e5.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()


            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)

        var video = document.createElement("video");
        var source = document.createElement("source");
        var sub = document.createElement("TRACK");


        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')



        sub.setAttribute('src', e5sub)
        sub.setAttribute('kind', 'subtitles')
        sub.setAttribute('srclang', 'en')
        sub.setAttribute('label', 'English')
        sub.setAttribute('default', true)

        source.setAttribute('id', 'srcc')

        
        video.width = w * .94
        video.style.marginTop = '20px'

        
        hi.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi5

            video.append(source)
            document.body.append(video)
            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e5---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e5---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e5---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e5---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e5---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e5---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e5---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e5---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
            
        }
        eng.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi5e

            video.append(source,sub)
            document.body.append(video)


            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e5---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e5---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e5---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e5---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e5---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e5---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e5---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e5---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }

        
        }
        e6.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()


            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)

        var video = document.createElement("video");
        var source = document.createElement("source");
        var sub = document.createElement("TRACK");

        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')



        sub.setAttribute('src', e6sub)
        sub.setAttribute('kind', 'subtitles')
        sub.setAttribute('srclang', 'en')
        sub.setAttribute('label', 'English')
        sub.setAttribute('default', true)

        source.setAttribute('id', 'srcc')

        
        video.width = w * .94
        video.style.marginTop = '20px'

        
        hi.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi6

            video.append(source)
            document.body.append(video)


            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e6---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e6---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e6---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e6---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e6---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e6---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e6---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e6---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }
        eng.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi6e

            video.append(source,sub)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e6---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e6---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e6---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e6---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e6---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e6---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e6---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e6---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }

        
        }
        e7.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()


            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)

        var video = document.createElement("video");
        var source = document.createElement("source");

        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')

        source.setAttribute('id', 'srcc')

        
        video.width = w * .94
        video.style.marginTop = '20px'

        
        hi.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi7

            video.append(source)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e7---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e7---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e7---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e7---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e7---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e7---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e7---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e7---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }
        eng.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi7e

            video.append(source)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e7---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e7---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e7---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e7---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e7---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e7---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e7---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e7---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }

        
        }
        e8.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()


            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)

        var video = document.createElement("video");
        var source = document.createElement("source");

        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')

        source.setAttribute('id', 'srcc')
        
        video.width = w * .94
        video.style.marginTop = '20px'
        
        hi.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi8

            video.append(source)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e8---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e8---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e8---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e8---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e8---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e8---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e8---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e8---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }
        eng.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi8e

            video.append(source)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e8---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e8---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e8---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e8---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e8---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e8---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e8---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e8---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }

        
        }
        e9.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()


            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)

        var video = document.createElement("video");
        var source = document.createElement("source");

        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')

        source.setAttribute('id', 'srcc')

        
        video.width = w * .94
        video.style.marginTop = '20px'
        
        hi.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi9

            video.append(source)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e9---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e9---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e9---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e9---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e9---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e9---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e9---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-hindi-e9---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }
        eng.onclick=function (){
            hi.remove()
            eng.remove()
            source.src = epi9e

            video.append(source)
            document.body.append(video)

            setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e9---State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 8000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e9---State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 20000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e9---State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 40000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e9---State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 120000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e9---State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 300000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e9---State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 900000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e9---State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 1800000);
                setTimeout(() => {
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-eng-e9---State-42m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
                xhttp.send();
    
            }, 2520000);
        }

        
        }

        






    if(epi9!=undefined && epi9 !=''){
        document.body.append(e1,e2,e3,e4,e5,e6,e7,e8,e9)
    }else{
        if(epi8!=undefined && epi8 !=''){
            document.body.append(e1,e2,e3,e4,e5,e6,e7,e8)
        }else{
            if(epi7!=undefined && epi7 !=''){
                document.body.append(e1,e2,e3,e4,e5,e6,e7)
            }else{
                if(epi6!=undefined && epi6 !=''){
                    document.body.append(e1,e2,e3,e4,e5,e6)
                }else{
                    if(epi5!=undefined && epi5 !=''){
                        document.body.append(e1,e2,e3,e4,e5)
                    }else{
                        if(epi4!=undefined && epi4 !=''){
                            document.body.append(e1,e2,e3,e4)
                        }
                    }
                }
            }
        }
    }





        // var ti = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 8000);
        // var ti2 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 20000);
        // var ti3 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 40000);
        // var ti4 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 120000);
        // var ti5 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 300000);
        // var ti6 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 900000);
        // var ti7 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 1800000);
        // var ti8 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-1h---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 3600000);
        // var ti9 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-1:30-h---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 5400000);
        // var ti10 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-1:45-h--' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 6300000);
        // var ti11 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-2h---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 7200000);
        // var ti12 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-2h-10m--' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 7800000);
        // var ti13 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd1.herokuapp.com/-------------------------------' + bimg + '-----State-2h-16m--' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 8160000);

        // video.oncanplay = function () {
        //     var viddd1 = document.getElementById('viddd')

        //     if (video.currentTime < 2 && video.readyState == 4 && viddd1 != null) {
        //         if(t1!=undefined && t1 !=''){document.body.append(mic)
        //             mic.onclick=function(){
        //     if(t1!=undefined && t1 !=''){
        // document.getElementById('viddd').currentTime=t1}else{alert('No Mid-credit')}}

                
        //         }


        //         if(t2!=undefined && t2 !=''){document.body.append(poc)
        //             poc.onclick=function(){
        //     if(t2!=undefined && t2 !=''){
        // document.getElementById('viddd').currentTime=t2}else{alert('No Post-credit')}}
                
        //         }

        //     }

        // };





        }



        down7.onclick = () => {
        //     var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '------------------'
        // var xhttp = new XMLHttpRequest();
        // xhttp.open("GET", req, true);xhttp.send();

        //     window.open(q7pp, '_self') 


        var onli = document.getElementById('onli')
        onli.remove()
        var dow = document.getElementById('down')
        dow.remove()




        var e1 = document.createElement("button");
        var e2 = document.createElement("button");
        var e3 = document.createElement("button");
        var e4 = document.createElement("button");
        var e5 = document.createElement("button");
        var e6 = document.createElement("button");
        var e7 = document.createElement("button");
        var e8 = document.createElement("button");
        var e9 = document.createElement("button");


        e1.innerText='Episode 1'
        e2.innerText='Episode 2'
        e3.innerText='Episode 3'
        e4.innerText='Episode 4'
        e5.innerText='Episode 5'
        e6.innerText='Episode 6'
        e7.innerText='Episode 7'
        e8.innerText='Episode 8'
        e9.innerText='Episode 9'

        e1.style.padding = '20px'
        e2.style.padding = '20px'
        e3.style.padding = '20px'
        e4.style.padding = '20px'
        e5.style.padding = '20px'
        e6.style.padding = '20px'
        e7.style.padding = '20px'
        e8.style.padding = '20px'
        e9.style.padding = '20px'


        e1.style.display = 'block'
        e1.style.width = '100%'
        e1.style.padding = '12px'
        e1.style.marginBottom = '10px'
  

        e2.style.display = 'block'
        e2.style.width = '100%'
        e2.style.padding = '12px'
        e2.style.marginBottom = '10px'
  
        e3.style.display = 'block'
        e3.style.width = '100%'
        e3.style.padding = '12px'
        e3.style.marginBottom = '10px'
  
        e4.style.display = 'block'
        e4.style.width = '100%'
        e4.style.padding = '12px'
        e4.style.marginBottom = '10px'
  
        e5.style.display = 'block'
        e5.style.width = '100%'
        e5.style.padding = '12px'
        e5.style.marginBottom = '10px'
  
        e6.style.display = 'block'
        e6.style.width = '100%'
        e6.style.padding = '12px'
        e6.style.marginBottom = '10px'
  
        e7.style.display = 'block'
        e7.style.width = '100%'
        e7.style.padding = '12px'
        e7.style.marginBottom = '10px'
  
        e8.style.display = 'block'
        e8.style.width = '100%'
        e8.style.padding = '12px'
        e8.style.marginBottom = '10px'
  
        e9.style.display = 'block'
        e9.style.width = '100%'
        e9.style.padding = '12px'
        e9.style.marginBottom = '10px'
        

        e1.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()

            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)


        hi.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-hi-e1----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi1, '_self') 

        }
        eng.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-eng-e1----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi1e, '_self') 

        }


        }
        e2.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()

            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)


        hi.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-hi-e2----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi2, '_self') 

        }
        eng.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-eng-e2----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi2e, '_self') 

        }


        }
        e3.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()

            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)


        hi.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-hi-e3----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi3, '_self') 

        }
        eng.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-eng-e3----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi3e, '_self') 

        }


        }
        e4.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()

            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)


        hi.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-hi-e4----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi4, '_self') 

        }
        eng.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-eng-e4----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi4e, '_self') 

        }


        }
        e5.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()

            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)


        hi.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-hi-e5----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi5, '_self') 

        }
        eng.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-eng-e5----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi5e, '_self') 

        }


        }
        e6.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()

            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)


        hi.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-hi-e6----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi6, '_self') 

        }
        eng.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-eng-e6----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi6e, '_self') 

        }


        }
        e7.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()

            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)


        hi.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-hi-e7----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi7, '_self') 

        }
        eng.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-eng-e7----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi7e, '_self') 

        }


        }
        e8.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()

            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)


        hi.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-hi-e8----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi8, '_self') 

        }
        eng.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-eng-e8----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi8e, '_self') 

        }


        }
        e9.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()

            var hi = document.createElement("button");
            var eng = document.createElement("button");
            
    
            hi.innerText = 'Hindi'
            eng.innerText = 'English'
    
            hi.style.display = 'block'
            hi.style.width = '100%'
            hi.style.padding ='50px'
            hi.style.marginBottom = '10px'
            
            eng.style.display = 'block'
            eng.style.width = '100%'
            eng.style.padding = '15px'
    
            document.body.append(hi,eng)


        hi.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-hi-e9----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi9, '_self') 

        }
        eng.onclick=function (){
            var req = 'https://mcubd1.herokuapp.com/-----------------download---' + bimg + '-eng-e9----------------'
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", req, true);xhttp.send();

            window.open(epi9e, '_self') 

        }


        }



        if(epi9!=undefined && epi9 !=''){
            document.body.append(e1,e2,e3,e4,e5,e6,e7,e8,e9)
        }else{
            if(epi8!=undefined && epi8 !=''){
                document.body.append(e1,e2,e3,e4,e5,e6,e7,e8)
            }else{
                if(epi7!=undefined && epi7 !=''){
                    document.body.append(e1,e2,e3,e4,e5,e6,e7)
                }else{
                    if(epi6!=undefined && epi6 !=''){
                        document.body.append(e1,e2,e3,e4,e5,e6)
                    }else{
                        if(epi5!=undefined && epi5 !=''){
                            document.body.append(e1,e2,e3,e4,e5)
                        }else{
                            if(epi4!=undefined && epi4 !=''){
                                document.body.append(e1,e2,e3,e4)
                            }
                        }
                    }
                }
            }
        }

        }


    }

}



setTimeout(() => {




    // imgdiv('Moon Knight', 'moon','450MB','hi1','eng1','hi2','eng2','hi3','eng3','hi4','eng4','hi5','eng5','hi6','eng6')


    imgdiv('Moon Knight', 'moonn','450MB','https://share.bdff.workers.dev/0:/MCU-SERIS/moon1.mp4','https://share.bdff.workers.dev/0:/MCU-SERIS/English/moon1-eng.mp4','https://share.bdff.workers.dev/0:/MCU-SERIS/moon2.mp4','https://share.bdff.workers.dev/0:/MCU-SERIS/English/moon2-eng.mp4','https://share.bdff.workers.dev/0:/MCU-SERIS/moon3.mp4','https://share.bdff.workers.dev/0:/MCU-SERIS/English/moon3-en.mp4','https://share.bdff.workers.dev/0:/MCU-SERIS/moon4.mp4','https://share.bdff.workers.dev/0:/MCU-SERIS/English/moon4-eng.mp4','https://share.bdff.workers.dev/0:/MCU-SERIS/moon5.mp4','https://share.bdff.workers.dev/0:/MCU-SERIS/English/moon5-eng.mp4','https://share.bdff.workers.dev/0:/MCU-SERIS/moon6.mp4','https://share.bdff.workers.dev/0:/MCU-SERIS/English/moon6-eng.mp4','https://mcubd1.netlify.app/sub/moon1.vtt','https://mcubd1.netlify.app/sub/moon2.vtt','https://mcubd1.netlify.app/sub/moon3.vtt','https://mcubd1.netlify.app/sub/moon4.vtt','https://mcubd1.netlify.app/sub/moon5.vtt','https://mcubd1.netlify.app/sub/moon6.vtt')

}, 1);



