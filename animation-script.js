document.addEventListener('DOMContentLoaded', function () {
    
    function animateRows() {
        const tableRows = document.querySelectorAll('.web-table tbody tr');
        tableRows.forEach((row, index) => {
            setTimeout(() => {
                row.classList.add('animated-row');
            }, index * 200); 
        });
    }

    
    window.onload = animateRows;
});

document.addEventListener('DOMContentLoaded', function () {
    const headerBrand = document.querySelector('.header-brand');

    headerBrand.addEventListener('mouseover', function () {
        this.style.color = '#ff6600'; /* Change to your desired hover color */
    });

    headerBrand.addEventListener('mouseout', function () {
        this.style.color = ''; 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const rnbTable = document.querySelector('.web-table tbody');

    rnbTable.addEventListener('click', function (event) {
        const clickedElement = event.target;

        if (clickedElement.tagName === 'TD') {
            const songName = clickedElement.textContent;
            console.log(`Clicked on an R&B song: ${songName}`);
        }
    });
});

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.id = "scrollToTopBtn";
scrollToTopBtn.innerHTML = "&#8593;"; 
document.body.appendChild(scrollToTopBtn);


window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}


scrollToTopBtn.onclick = function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};


scrollToTopBtn.style.position = "fixed";
scrollToTopBtn.style.bottom = "20px";
scrollToTopBtn.style.right = "20px";
scrollToTopBtn.style.backgroundColor = "#000"; 
scrollToTopBtn.style.color = "#fff";
scrollToTopBtn.style.border = "none";
scrollToTopBtn.style.borderRadius = "50%";
scrollToTopBtn.style.padding = "10px";
scrollToTopBtn.style.cursor = "pointer";
scrollToTopBtn.style.display = "none"; 
scrollToTopBtn.style.transition = "background-color 0.3s ease";

scrollToTopBtn.onmouseover = function () {
    scrollToTopBtn.style.backgroundColor = "#333"; 
};

scrollToTopBtn.onmouseout = function () {
    scrollToTopBtn.style.backgroundColor = "#000"; 
};


scrollToTopBtn.style.fontWeight = "bold"; 
scrollToTopBtn.style.fontSize = "20px"; 
scrollToTopBtn.style.lineHeight = "1"; 
