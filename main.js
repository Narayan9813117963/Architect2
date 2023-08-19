// script for search dropdown
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
// script for search dropdown
//  script for sidebar
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
//  script for sidebar
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
// script for navbar sticky
// script for slider
            function slider(flag) {
                var current = $(".item.current"),
                    next;

                if (!flag) {
                    next = current.is(":last-child") ? $(".item").first() : current.next();
                } else {
                    next = current.is(":first-child") ? $(".item").last() : current.prev();
                }

                current.find(".slide-content").removeClass("slide-in");
                next.find(".slide-content").removeClass("slide-in"); // Remove class for re-animation
                setTimeout(function () {
                    next.find(".slide-content").addClass("slide-in");
                }, 10);
                
                next.addClass("current");
                current.removeClass("current");
            }

            var setSlider = setInterval(slider, 5000);

            $(".button.prev").on("click", function() {
                clearInterval(setSlider);
                slider(true);
                setSlider = setInterval(slider, 5000);
            });

            $(".button.next").on("click", function() {
                clearInterval(setSlider);
                slider();
                setSlider = setInterval(slider, 5000);
            });
// script for slider
// script for turn by turn text
            document.addEventListener("DOMContentLoaded", function() {
                const h2 = document.querySelector('.experience h2');
                const spans = h2.querySelectorAll('span');
                let currentIndex = 0;

                function showNextSpan() {
                const currentSpan = spans[currentIndex];
                const nextIndex = (currentIndex + 1) % spans.length;
                const nextSpan = spans[nextIndex];

                currentSpan.classList.remove('show');
                currentSpan.classList.add('fade-out'); // Add fade-out class to current span
                nextSpan.classList.add('show');
                nextSpan.classList.remove('fade-out'); // Remove fade-out class from next span

                currentIndex = nextIndex;
                }

                // Show the first span initially and start animation after a delay
                setTimeout(function() {
                spans[currentIndex].classList.add('show');
                setInterval(showNextSpan, 3000); // Change span every 3 seconds
                }, 1000); // Delay of 1 second before starting animation
            });
// script for turn by turn text
// script for odometer
 // Trigger odometer animation when each odometer section enters viewport
            function animateOdometers() {
                var odometerSections = $(".odo-1, .odo-2");
                var scrollTop = $(window).scrollTop();
                var windowHeight = $(window).height();

                odometerSections.each(function() {
                    var sectionOffset = $(this).offset().top;
                    if (scrollTop + windowHeight > sectionOffset) {
                        var odometerElement = $(this).find(".odometer");
                        var endValue = parseInt(odometerElement.attr("data-count"));
                        updateOdometer(odometerElement[0], endValue);
                    }
                });
                // Unbind scroll event handler after all odometers are triggered
                if (odometerSections.length === 0) {
                    $(window).off('scroll', animateOdometers);
                }
            }
            $(document).ready(function() {
                // Listen for scroll event to trigger odometer animations
                $(window).on('scroll', animateOdometers);
            });
            // Function to update the odometer element with the specified end value
            function updateOdometer(odometerElement, endValue) {
                var currentValue = parseInt(odometerElement.innerHTML);
                var step = Math.ceil((endValue - currentValue) / 30); // Adjust the step value as needed for a smoother animation
                function update() {
                    if (currentValue < endValue) {
                        currentValue += step;
                        odometerElement.innerHTML = currentValue;
                        setTimeout(update, 200); // Adjust the delay value as needed for a smoother animation
                    } else {
                        odometerElement.innerHTML = endValue;
                    }
                }
                update();
            }
// script for odometer
// script for cull button
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
// script for cull button
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