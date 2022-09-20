function me() {
}
function mcus() {
}
function mcu() {
}
function home() {
}
function mar() {
}
function other() {
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
    image.src =bimg

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




        var onli = document.createElement("button");
        var down7 = document.createElement("button");
        
        onli.setAttribute('id', 'onli')
        down7.setAttribute('id', 'down')

        onli.innerText = 'Watch Online'
        down7.innerText = 'Download'

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

    



onli.onclick = () => {
        var onli = document.getElementById('onli')
        onli.remove()
        var dow = document.getElementById('down')
        dow.remove()


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
        source.src = q7pp

       

      
        video.append(source)

        document.body.append(video)

        }



        down7.onclick = () => {

        down7.disabled=true
            window.open(q7pp, '_self') }


    }

}



setTimeout(() => {

    // imgdiv(name,img,q7,down,size)

    imgdiv('lisa dance', 'https://share.bdff.workers.dev/0:/OTHERS/English./poster/lisa-dance.jpg', 'https://share.bdff.workers.dev/0:/OTHERS/English./lisa-dance.mp4',)


    // imgdiv('Guardian of the galaxy vol.2  (2017) [1.2GB]', 'galaxy2','https://abcd.bdff.workers.dev/0:/Guardian2-mp3.mp4', '1.2GB')

    // imgdiv('Avengers: Infinity War   (2018)         [1.3GB]', 'war', 'https://abcd.bdff.workers.dev/0:/infinity.mp4', '1.3GB')



}, 1);





