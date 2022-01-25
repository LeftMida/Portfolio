const head = document.getElementById('header')
// document.body.append(head)
const div1 = document.createElement('div')
head.append(div1)
const camera = document.createElement('div')
// camera.src = './Cam.svg'
div1.append(camera)
const inf = document.createElement('ul')
inf.innerHTML=`
<a class="lihead" id="lihead1" href='#skills'>Skills</a>
<a class="lihead" id="lihead2" href='#portfolio'>Portfolio</a>
<a class="lihead" id="lihead3" href='#video'>Video</a>
<a class="lihead" id="lihead4" href='#price'>Price</a>
<a class="lihead" id="lihead5" href='#contacts'>Contacts</a>
<a class="lihead" id="lihead6">en/ru</a>
`
const div2 = document.createElement('div')
div1.append(div2)
div2.append(inf)
head.classList.add('head')
div1.classList.add('div1')
camera.classList.add('cam')
inf.classList.add('inf')
const div3 = document.createElement('div')
head.append(div3)    
const h1 = document.createElement('h1')
h1.textContent='Alexa Rise'
div3.append(h1) 
h1.className='h1'
div3.className='div3'
const headp = document.createElement('p')
headp.className = 'headp'
headp.textContent='Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise'
div3.append(headp)
const headbut = document.createElement('button')
headbut.className='headbut'
headbut.textContent='Hire me'
div3.append(headbut)

const sec1 = document.getElementById('skills')
sec1.className='sec1'
document.body.append(sec1)
const secdiv= document.createElement('div')
secdiv.className='secdiv'
const hrskill = document.createElement('img')
hrskill.src='./section-title-line.svg'
hrskill.className='hrskill'
const sech2=document.createElement('h2')
sech2.className='sech2'
sech2.textContent='Skills'
secdiv.append(hrskill, sech2)
sec1.append(secdiv)
const secdiv2 = document.createElement('div')
secdiv2.className='secdiv2'
const scam = document.createElement('img')
scam.className='scam'
scam.src='./camera 1.svg'
const secvid = document.createElement('img')
secvid.className='secvid'
secvid.src='./Vector.svg'
const hz = document.createElement('img')
hz.className='hz'
hz.src=('./image 1.svg')
const mic = document.createElement('img')
mic.className='mic'
mic.src='./mic 1.svg'
secdiv2.append(scam, secvid, hz, mic)
sec1.append(secdiv2)
const secdiv3 = document.createElement('div')
secdiv3.className='secdiv3'
const skiil = document.createElement('ul')
skiil.className='skiil'
skiil.innerHTML=`
<li class="skiiil" id="cam">Digital photography</li>
<li class="skiiil" id="vid">Video shooting</li>
<li class="skiiil" id="ret">Retouch</li>
<li class="skiiil" id="Mic">Audio</li>
`
const secdiv3ul= document.createElement('ul')
secdiv3ul.className='secdiv3ul'
secdiv3ul.innerHTML=`
<li class="sec3ul">High-quality photos in the studio and on the nature</li>
<li class="sec3ul">Capture your moments so that they always stay with you</li>
<li class="sec3ul">I strive to make photography surpass reality</li>
<li class="sec3ul">Professional sounds recording for video, advertising, portfolio</li>
`
secdiv3.append(skiil, secdiv3ul)
sec1.append(secdiv3)

const sec2 = document.getElementById('portfolio')
sec2.className='sec2'
document.body.append(sec2)
const line = document.createElement('img')
line.className='line'
line.src='./section-title-line.svg'
const sec2h2 = document.createElement('h2')
sec2h2.className='sec2h2'
sec2h2.textContent='Portfolio'
sec2.append(line, sec2h2)
const sec2div = document.createElement('div')
sec2div.className='sec2div'
sec2.append(sec2div)
const seasons = document.createElement('ul')
seasons.className='seas'
seasons.innerHTML=`
    <li class="seasons">Winter</li>
    <li class="seasons">Spring</li>
    <li class="seasons">Summer</li>
    <li class="seasons" id="Aut">Autumn</li>
`
sec2div.append(seasons)
const sec2div2 = document.createElement('div')
sec2div2.className='sec2div2'
const sec2div3 = document.createElement('div')
sec2div3.className='sec2div3'
sec2.append(sec2div2,sec2div3)
const sec2img = document.createElement('img')
const sec2img2 = document.createElement('img')
const sec2img3 = document.createElement('img')
const sec2img4 = document.createElement('img')
const sec2img5 = document.createElement('img')
const sec2img6 = document.createElement('img')
sec2img.src='./portfolio-img.jpg'
sec2img2.src='./portfolio-img (1).jpg'
sec2img3.src='./portfolio-img (2).jpg'
sec2img4.src='./portfolio-img (3).jpg'
sec2img5.src='./portfolio-img (4).jpg'
sec2img6.src='./portfolio-img (5).jpg'
sec2div2.append(sec2img, sec2img2, sec2img3)
sec2div3.append(sec2img4,sec2img5,sec2img6)

const sec3 = document.getElementById('video')
sec3.className='sec3'
document.body.append(sec3)
const line2 = document.createElement('img')
line2.className='line'
line2.src='./section-title-line.svg'
sec3.append(line2)
const sec3h2 = document.createElement('h2')
sec3h2.className='sec3h2'
sec3h2.textContent='Video'
sec3.append(sec3h2)
const sec3video = document.createElement('img')
const sec3play = document.createElement('div')
sec3video.className='sec3video'
sec3play.className='sec3play'
sec3video.src='./video-player.jpg'
// sec3play.src='./Play_hover.svg'
sec3.append(sec3video, sec3play)

const sec4 = document.getElementById('price')
sec4.className='sec4'
document.body.append(sec4)
const line3 = document.createElement('img')
line3.className='line'
line3.src='./section-title-line.svg'
sec4.append(line3)
const sec4h2 = document.createElement('h2')
sec4h2.className='sec4h2'
sec4h2.textContent='Price'
sec4.append(sec4h2)
const sec4div = document.createElement('div')
sec4div.className='sec4div'
sec4.append(sec4div)
const sec4div2 = document.createElement('div')
sec4div2.className='sec4div2'
const sec4div3 = document.createElement('div')
sec4div3.className='sec4div3'
const sec4div4 = document.createElement('div')
sec4div4.className='sec4div4'
sec4div.append(sec4div2, sec4div3, sec4div4)
const sec4div2h3 = document.createElement('h3')
const sec4div3h3 = document.createElement('h3')
const sec4div4h3 = document.createElement('h3')
sec4div2h3.className='sec4div2h3'
sec4div3h3.className='sec4div3h3'
sec4div4h3.className='sec4div4h3'
sec4div2h3.textContent='Standart'
sec4div3h3.textContent='Premium'
sec4div4h3.textContent='Gold'
sec4div2.append(sec4div2h3)
sec4div3.append(sec4div3h3)
sec4div4.append(sec4div4h3)
const sec4div2p = document.createElement('p')
const sec4div3p = document.createElement('p')
const sec4div4p = document.createElement('p')
sec4div2p.className='sec4div2p'
sec4div3p.className='sec4div3p'
sec4div4p.className='sec4div4p'
sec4div2p.textContent='500 $'
sec4div3p.textContent='700 $'
sec4div4p.textContent='1000 $'
sec4div2.append(sec4div2p)
sec4div3.append(sec4div3p)
sec4div4.append(sec4div4p)
const sec4div2ul = document.createElement('ul')
sec4div2ul.className='sec4div2ul'
sec4div2ul.innerHTML=`
<li class="mon5">One location</li>
         <li class="mon5">120 photos in color</li>
         <li class="mon5">12 photos in retouch</li>
         <li class="mon5">Readiness 2-3 weeks</li>
         <li class="mon5">Make up, visage</li>
`
sec4div2.append(sec4div2ul)
const sec4div3ul = document.createElement('ul')
sec4div3ul.className='sec4div3ul'
sec4div3ul.innerHTML=`
<li class="mon5">One or two location</li>
         <li class="mon5">200 photos in color</li>
         <li class="mon5">20 photos in retouch</li>
         <li class="mon5">Readiness 2-3 weeks</li>
         <li class="mon5">Make up, visage</li>
`
sec4div3.append(sec4div3ul)
const sec4div4ul = document.createElement('ul')
sec4div4ul.className='sec4div4ul'
sec4div4ul.innerHTML=`
<li class="mon5">One location</li>
         <li class="mon5">120 photos in color</li>
         <li class="mon5">12 photos in retouch</li>
         <li class="mon5">Readiness 2-3 weeks</li>
         <li class="mon5">Make up, visage</li>
`
sec4div4.append(sec4div4ul)
const sec4div2but = document.createElement('button')
sec4div2but.className='sec4div2but'
sec4div2but.textContent='Order Shooting'
sec4div2.append(sec4div2but)
const sec4div3but = document.createElement('button')
sec4div3but.className='sec4div3but'
sec4div3but.textContent='Order Shooting'
sec4div3.append(sec4div3but)
const sec4div4but = document.createElement('button')
sec4div4but.className='sec4div4but'
sec4div4but.textContent='Order Shooting'
sec4div4.append(sec4div4but)

const sec5 = document.getElementById('contacts')
sec5.className='sec5'
document.body.append(sec5)
const sec5div = document.createElement('div')
sec5div.className='sec5div'
sec5.append(sec5div)
const sec5h3 = document.createElement('h3')
sec5h3.className='sec5h3'
sec5h3.textContent='Contact me'
sec5div.append(sec5h3)
const sec5em = document.createElement('input')
sec5em.className='sec5em'
sec5em.placeholder=' E-mail'
const sec5ph = document.createElement('input')
sec5ph.className='sec5ph'
sec5ph.placeholder=' Phone'
const sec5ms = document.createElement('input')
sec5ms.className='sec5ms'
sec5ms.placeholder=' Message'
const sec5but = document.createElement('button')
sec5but.className='sec5but'
sec5but.textContent='Send message'
sec5div.append(sec5em, sec5ph, sec5ms, sec5but)

const fut = document.createElement('footer')
fut.className='fut'
document.body.append(fut)
const futdiv = document.createElement('div')
futdiv.className='futdiv'
fut.append(futdiv)
const futul = document.createElement('ul')
futul.className='futul'
futul.innerHTML=`
<li class="fut1">©</li>
<li class="fut1">2022</li>
<li class="fut1">github</li>
`
futdiv.append(futul)
const futdiv2 = document.createElement('div')
futdiv2.className='futdiv2'
fut.append(futdiv2)
const sec5img1 = document.createElement('div')
sec5img1.className='sec5img1'
const sec5img2 = document.createElement('div')
sec5img2.className='sec5img2'
const sec5img3 = document.createElement('div')
sec5img3.className='sec5img3'
const sec5img4 = document.createElement('div')
sec5img4.className='sec5img4'
futdiv2.append(sec5img1, sec5img2, sec5img3, sec5img4)