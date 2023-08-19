// script for search button
const searchBtns = document.querySelectorAll('.search-btn');
                    const searchBars = document.querySelectorAll('.search-content-container');
                
                    searchBtns.forEach(btn => {
                        btn.addEventListener('click', function () {
                            const isOpen = this.classList.contains('open');
                            closeAllSearchBars();
                
                            if (!isOpen) {
                                this.classList.add('open');
                                const searchBar = this.nextElementSibling;
                                searchBar.style.maxHeight = '120px';
                            }
                        });
                    });
                    document.addEventListener('click', function (event) {
                        if (!event.target.closest('.search')) {
                            closeAllSearchBars();
                        }
                    });
                    function closeAllSearchBars() {
                        searchBtns.forEach(btn => {
                            btn.classList.remove('open');
                        });
                
                        searchBars.forEach(searchBar => {
                            searchBar.style.maxHeight = '0px';
                        });
                    }
// script for search button
// script for sidebar
const sidebar = document.getElementById("mySidebar");
const sidebarToggle = document.querySelector(".openbtn");

document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && event.target !== sidebarToggle) {
        closeNav();
    }
});
function openNav() {
    sidebar.style.right = "0";
}
function closeNav() {
    sidebar.style.right = "-700px";
}
// script for sidebar
// script for checkbox
const checkboxContainer = document.getElementById('checkboxContainer');
const checkboxInput = checkboxContainer.querySelector('input[type="checkbox"]');

checkboxContainer.addEventListener('click', (event) => {
// Check if the click target is not the checkbox itself
if (event.target !== checkboxInput) {
checkboxInput.checked = !checkboxInput.checked;
}
});
// script for checkbox
// script for contact sidebar
const contactSidebar = document.getElementById("contactSidebar");
const openContactBtn = document.querySelector(".opencontactbtn");
const closeContactBtn = document.querySelector(".closecontactbtn");

// Set initial state
closeContactBtn.style.pointerEvents = "none";

document.addEventListener('click', function(event) {
    const contactSidebarToggle = event.target.closest(".opencontactbtn");

    if (contactSidebarToggle) {
        openContactSidebar();
    } else if (!contactSidebar.contains(event.target) && event.target !== closeContactBtn) {
        closeContactSidebar();
    }
});

function openContactSidebar() {
    contactSidebar.style.top = "0";
    closeContactBtn.style.opacity = "1";
    closeContactBtn.style.pointerEvents = "all";
}

function closeContactSidebar() {
    contactSidebar.style.top = "-750px";
    closeContactBtn.style.opacity = "0";
    closeContactBtn.style.pointerEvents = "none";
}
// script for contact sidebar
// script for small screen menubar
$(document).ready(function() {
    $('.menu').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('open');
        $('.menu-content').toggleClass('open');
        adjustMenuContentHeight();
    });

    $(document).click(function() {
        $('.menu').removeClass('open');
        $('.menu-content').removeClass('open').css({
            'height': '0',
            'opacity': '0'
        });
    });

    $('.menu-content').click(function(e) {
        e.stopPropagation();
    });

    $('.project-title-drop').click(function(e) {
        $(this).toggleClass('open');
        $(this).closest('.project-heading').next('.project-details').slideToggle(100, function() {
            adjustMenuContentHeight();
        });
    });

    $('.project-details').click(function(e) {
        e.stopPropagation();
    });

    function adjustMenuContentHeight() {
        var contentHeight = $('.menu-content .contents').outerHeight();
        $('.menu-content').css('height', contentHeight + 'px');
    }

    adjustMenuContentHeight();
});
// script for small screen menubar
// script for navbar sticky
const headerWrapper = document.querySelector(".header-wrapper");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll - lastScroll > 0) {
        // Scrolled down -- header hide
        headerWrapper.classList.add("scroll-down");
        headerWrapper.classList.remove("scroll-up");
    } else {
        // Scrolled up -- header show
        headerWrapper.classList.add("scroll-up");
        headerWrapper.classList.remove("scroll-down");
    }

    // Add or remove the shadow class based on header visibility
    if (currentScroll > 400) {
        headerWrapper.classList.add("header-shadow");
    } else {
        headerWrapper.classList.remove("header-shadow");
    }

    lastScroll = currentScroll;
});
// script for sticky navbar
// script for filterable gallery
$(document).ready(function() {
    // Filter projects when a filter link is clicked
    $('.project-links li').click(function() {
        $('.project-links li').removeClass('active');
        $(this).addClass('active');

        var category = $(this).data('filter');

        if (category === 'all') {
            $('.project-wrapper .project-1').removeClass('hidden');
        } else {
            $('.project-wrapper .project-1').addClass('hidden');
            $('.project-wrapper .' + category).removeClass('hidden');
        }
    });
});
// script for filterable gallery
// script for copied checkbox
const copiedCheckboxContainer = document.getElementById('copiedCheckboxContainer');
const copiedCheckboxInput = copiedCheckboxContainer.querySelector('input[type="checkbox"]');

copiedCheckboxContainer.addEventListener('click', (event) => {
    // Check if the click target is not the checkbox itself
    if (event.target !== copiedCheckboxInput) {
        copiedCheckboxInput.checked = !copiedCheckboxInput.checked;
    }
});
// script for copied checkbox
// script for scroll d animation
if (window.innerWidth > 600) {
        const worksContainers = document.querySelectorAll('.works-container');
        const worksWrappers = document.querySelectorAll('.works-wrapper');
        const scrollPositions = new Array(worksContainers.length).fill(0);

        window.addEventListener('scroll', () => {
            worksContainers.forEach((worksContainer, index) => {
                const newScrollPos = window.scrollY;
                const scrollDelta = newScrollPos - scrollPositions[index];

                let targetX;
                if (index === 0) {
                    // Calculate the transform value for the first section (original direction)
                    targetX = -200.797 + (newScrollPos * 0.2); // Adjust the multiplier as needed
                } else if (index === 1) {
                    // Calculate the transform value for the second section (different direction)
                    targetX = 200.797 - (newScrollPos * 0.15); // Adjust the multiplier as needed
                } else if (index === 2) {
                    // Calculate the transform value for the third section (different direction)
                    targetX = -800.797 + (newScrollPos * 0.25); // Adjust the multiplier as needed
                }

                // Update the transform value to move the container with scroll
                worksWrappers[index].style.transform = `translate3d(${targetX}px, 0, 0)`;
                scrollPositions[index] = newScrollPos;
            });
        });
    }
// script for scroll 3d animation
// script for call button
const callButton = document.querySelector(".call-button");
let prevScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll - prevScroll > 0) {
        // Scrolled down
        callButton.classList.add("move-left");
    } else {
        // Scrolled up
        callButton.classList.remove("move-left");
    }

    prevScroll = currentScroll;
});
// script for call button
// script for back to top button
// Function to calculate luminance of a color
function calculateLuminance(color) {
const rgb = color.match(/\d+/g).map(Number);
return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
}

// Show the Back to Top button and adjust the height of the 'overlap' element with scroll
window.addEventListener("scroll", () => {
const backToTopButton = document.querySelector(".back-to-top");
const overlapElement = backToTopButton.querySelector(".overlap");
const spanElement = backToTopButton.querySelector("span");

const maxOverlapHeight = 55; // Maximum height of the overlap element
const scrollPosition = window.pageYOffset;
const windowHeight = window.innerHeight;
const documentHeight = document.documentElement.scrollHeight;

// Calculate the height based on scroll position and window size
const calculatedHeight = Math.min(maxOverlapHeight, (scrollPosition / (documentHeight - windowHeight)) * maxOverlapHeight);

if (window.pageYOffset > 300) {
backToTopButton.classList.add("show");
} else {
backToTopButton.classList.remove("show");
}

if (window.pageYOffset > 600) {
overlapElement.classList.add("show");
overlapElement.style.height = calculatedHeight + "px";

// Get computed background color of the overlap element
const backgroundColor = getComputedStyle(overlapElement).backgroundColor;

// Calculate luminance of the background color
const luminance = calculateLuminance(backgroundColor);

// Set span color based on luminance
spanElement.style.color = luminance < 0.5 ? "#fff" : "#000";
} else {
overlapElement.classList.remove("show");
overlapElement.style.height = "0";
spanElement.style.color = "#fff"; // Reset color when overlap is hidden
}
});

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
window.scrollTo({
top: 0,
behavior: "smooth"
});
}
// script for back to top button