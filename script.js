// Smooth animation when scrolling

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll("section").forEach((section)=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Gallery image popup

const images = document.querySelectorAll(".gallery img");

images.forEach((img)=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");
        overlay.className="popup";

        const image=document.createElement("img");
        image.src=img.src;

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{
            overlay.remove();
        });

    });

});

// Navbar shadow while scrolling

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>60){
        nav.style.boxShadow="0 8px 20px rgba(0,0,0,.25)";
    }else{
        nav.style.boxShadow="none";
    }

});

// Button animation

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});