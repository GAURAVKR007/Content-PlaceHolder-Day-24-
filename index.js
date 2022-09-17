const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name1 = document.getElementById('name')
const date = document.getElementById('date')


const animated_bg = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData,2500)

function getData() {
    header.innerHTML = ' <img src="https://dlcdnwebimgs.asus.com/files/media/8B74E7EE-B66A-4420-894E-3C3B980312EE/v2/img/design/color/strix-g-2022-green.png" alt="">';

    title.innerHTML = 'Asus G15 (2022)';

    excerpt.innerHTML = ' ASUS ROG Strix G15 (2022), 15.6-inch (39.62 cms) WQHD 165Hz/3ms, AMD Ryzen 7 6800H, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Windows 11/Office 2021/Gray/2.3 kg), G513RM-HQ271WS';

    profile_img.innerHTML = '<img src="https://i.pinimg.com/originals/9d/fb/ed/9dfbedd8038f0aa55a367dd45b8cf9cf.jpg" alt="">';

    name1.innerHTML = 'Gaurav Kr Thakur';

    date.innerHTML = '17-09-2022';

    animated_bg.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bg_text.forEach((bg)=> bg.classList.remove('animated-bg-text'));
}

// getData();