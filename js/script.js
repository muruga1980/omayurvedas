// ========== REDUCED MOTION DETECTION ==========
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ========== AOS INITIALIZATION ==========
AOS.init({
    duration: prefersReducedMotion ? 0 : 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    disable: prefersReducedMotion
});

// ========== STICKY NAVIGATION SHADOW ON SCROLL ==========
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('#mainNav').addClass('scrolled');
    } else {
        $('#mainNav').removeClass('scrolled');
    }
});

// ========== MOBILE MENU TOGGLE ==========
$('#mobileMenuBtn').click(function() {
    $('#navLinks').toggleClass('active');
    var icon = $(this).find('.material-icons-round');
    if ($('#navLinks').hasClass('active')) {
        icon.text('close');
    } else {
        icon.text('menu');
    }
});

// ========== MOBILE SUBMENU TOGGLE ==========
$('.has-submenu > a').click(function(e) {
    if ($(window).width() <= 768) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    }
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 800, 'swing');
        $('#navLinks').removeClass('active');
        $('#mobileMenuBtn').find('.material-icons-round').text('menu');
    }
});

// ========== CLOSE MOBILE MENU WHEN CLICKING OUTSIDE ==========
$(document).click(function(e) {
    if (!$(e.target).closest('.main-nav').length) {
        $('#navLinks').removeClass('active');
        $('#mobileMenuBtn').find('.material-icons-round').text('menu');
    }
});

// ========== GALLERY LIGHTBOX ==========
var galleryImages = [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80',
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&q=80',
    'https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=1200&q=80',
    'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80',
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
    'https://images.unsplash.com/photo-1708699187145-a21799369ff3?w=1200&q=80',
    'https://manage.ayurbethaniya.org/uploads/media/ayurvedic-treatment-kerala-166d54a85eff6f.jpg',
    'https://www.vedafive.com/wp-content/uploads/2022/02/Ayurveda-Panchakarma-Clinic-Spa-Treatment-Room-Best-Wellness-Retreat-in-Goa-Veda5-Arambol.jpg',
    'https://scdn.aro.ie/Sites/50/anandaspa/uploads/images/default.jpg',
    'https://www.authenticindiatours.com/app/uploads/2025/09/Ananda-in-the-Himalayas-Uttarakhand-930-875x585-c-default.jpg'
];
var currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    $('#lightboxImg').attr('src', galleryImages[index]);
    $('#lightbox').addClass('active');
    $('body').css('overflow', 'hidden');
}

function closeLightbox() {
    $('#lightbox').removeClass('active');
    $('body').css('overflow', 'auto');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    $('#lightboxImg').fadeOut(200, function() {
        $(this).attr('src', galleryImages[currentImageIndex]).fadeIn(200);
    });
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    $('#lightboxImg').fadeOut(200, function() {
        $(this).attr('src', galleryImages[currentImageIndex]).fadeIn(200);
    });
}

$(document).keydown(function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        prevImage();
    }
});

$('#lightbox').click(function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// ========== jQUERY FORM VALIDATION ==========
$('#bookingForm').submit(function(e) {
    e.preventDefault();
    var isValid = true;
    $('.form-group').removeClass('error');
    var firstName = $('#firstName').val().trim();
    if (firstName === '') {
        $('#firstName').closest('.form-group').addClass('error');
        isValid = false;
    }
    var lastName = $('#lastName').val().trim();
    if (lastName === '') {
        $('#lastName').closest('.form-group').addClass('error');
        isValid = false;
    }
    var email = $('#email').val().trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        $('#email').closest('.form-group').addClass('error');
        isValid = false;
    }
    var phone = $('#phone').val().trim();
    var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (phone === '' || !phoneRegex.test(phone.replace(/\s/g, ''))) {
        $('#phone').closest('.form-group').addClass('error');
        isValid = false;
    }
    if (isValid) {
        $('#bookingFormContainer').fadeOut(400, function() {
            $('#formSuccess').fadeIn(400);
        });
    }
});

$('#bookingForm input, #bookingForm select, #bookingForm textarea').on('input blur', function() {
    var $group = $(this).closest('.form-group');
    $group.removeClass('error');
});

var today = new Date().toISOString().split('T')[0];
$('#date').attr('min', today);

// ========== COPY TO CLIPBOARD ==========
function copyToClipboard(elementId, btn) {
    var text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(function() {
        var originalText = btn.innerHTML;
        btn.innerHTML = '<span class="material-icons-round" style="font-size: 14px;">check</span> Copied!';
        btn.classList.add('copied');
        setTimeout(function() {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(function(err) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        var originalText = btn.innerHTML;
        btn.innerHTML = '<span class="material-icons-round" style="font-size: 14px;">check</span> Copied!';
        btn.classList.add('copied');
        setTimeout(function() {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 2000);
    });
}

// ========== TESTIMONIAL SLIDER ==========
var currentTestimonial = 0;
var totalTestimonials = 3;

function showTestimonial(index) {
    $('.testimonial-card').hide();
    $('#testimonial' + (index + 1)).fadeIn(400);
    $('.testimonial-dot').removeClass('active');
    $('.testimonial-dot').eq(index).addClass('active');
    currentTestimonial = index;
}

function nextTestimonial() {
    var next = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(next);
}

function prevTestimonial() {
    var prev = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(prev);
}

function goToTestimonial(index) {
    showTestimonial(index);
}

setInterval(function() {
    nextTestimonial();
}, 6000);

// ========== PAGE LOADER ==========
(function() {
    const loader = document.getElementById('pageLoader');

    function hideLoader() {
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 700);
        }
    }

    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 800);
    } else {
        window.addEventListener('load', function() {
            setTimeout(hideLoader, 800);
        });
    }

    setTimeout(hideLoader, 5000);
})();

// ========== BACK TO TOP ==========
(function() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    function toggleBackToTop() {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                toggleBackToTop();
                ticking = false;
            });
            ticking = true;
        }
    });

    toggleBackToTop();
})();

// ========== ENROLLMENT MODAL (Web3Forms AJAX) ==========
(function() {
    const modal = document.getElementById('enrollModal');
    const closeBtn = document.getElementById('modalClose');
    const closeSuccessBtn = document.getElementById('modalCloseSuccess');
    const form = document.getElementById('enrollForm');
    const successMsg = document.getElementById('enrollSuccess');
    const classSelect = document.getElementById('classSelect');
    const submitBtn = document.getElementById('enrollSubmitBtn');
    const openButtons = document.querySelectorAll('.open-enroll-modal');

    function openModal(preselectedClass) {
        if (!modal) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (preselectedClass && classSelect) {
            classSelect.value = preselectedClass;
        }
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (form) {
            form.reset();
            form.style.display = 'block';
        }
        if (successMsg) successMsg.style.display = 'none';
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.querySelector('.btn-text').textContent = 'Submit Registration';
        }
    }

    openButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(this.getAttribute('data-class'));
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // AJAX submission to Web3Forms
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Disable button & show loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.querySelector('.btn-text').textContent = 'Sending...';
            }

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(function(response) { return response.json(); })
            .then(function(result) {
                if (result.success) {
                    form.style.display = 'none';
                    successMsg.style.display = 'block';
                } else {
                    alert('Error: ' + (result.message || 'Something went wrong. Please try again.'));
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.querySelector('.btn-text').textContent = 'Submit Registration';
                    }
                }
            })
            .catch(function(error) {
                alert('Network error. Please check your connection and try again.');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.querySelector('.btn-text').textContent = 'Submit Registration';
                }
            });
        });
    }
})();

// ========== CART FUNCTIONALITY ==========
function getCart() {
    return JSON.parse(localStorage.getItem('omayurveda_cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('omayurveda_cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);

    const badge = document.getElementById('navCartCount');
    if (badge) {
        badge.textContent = count;
        badge.classList.toggle('hidden', count === 0);
    }

    const mobileBadge = document.getElementById('mobileCartCount');
    if (mobileBadge) {
        mobileBadge.textContent = count;
        mobileBadge.classList.toggle('hidden', count === 0);
    }
}

function addToCart(btn) {
    const card = btn.closest('.product-card');
    const id = card.dataset.id;
    const name = card.dataset.name;
    const price = parseInt(card.dataset.price) || 0;
    const image = card.dataset.image;

    let cart = getCart();
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id, name, price, image, qty: 1 });
    }

    saveCart(cart);

    btn.classList.add('added');
    btn.innerHTML = '<span class="material-icons-round">check</span> Added!';
    setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = '<span class="material-icons-round">add_shopping_cart</span> Add to Cart';
    }, 1500);

    showToast(name + ' added to cart!');
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<span class="material-icons-round">shopping_cart</span>' + message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function renderCart() {
    const itemsContainer = document.getElementById('cartItems');
    const summary = document.getElementById('cartSummary');
    const empty = document.getElementById('emptyCart');

    if (!itemsContainer || !summary || !empty) return;

    const cart = getCart();

    if (cart.length === 0) {
        itemsContainer.innerHTML = '';
        summary.style.display = 'none';
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';
    summary.style.display = 'block';

    let html = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        const priceDisplay = item.price > 0 ? 'Rs.' + item.price : 'Contact for Price';
        const totalDisplay = item.price > 0 ? 'Rs.' + itemTotal : '—';

        html += `
            <div class="cart-item" data-index="${index}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='assets/img/products/pinksalt.jpg'">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">${priceDisplay}</div>
                </div>
                <div class="qty-control">
                    <button class="qty-btn" onclick="changeQty(${index}, -1)">
                        <span class="material-icons-round" style="font-size:16px">remove</span>
                    </button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${index}, 1)">
                        <span class="material-icons-round" style="font-size:16px">add</span>
                    </button>
                </div>
                <div class="cart-item-total">${totalDisplay}</div>
                <button class="remove-btn" onclick="removeItem(${index})" title="Remove item">
                    <span class="material-icons-round">delete_outline</span>
                </button>
            </div>
        `;
    });

    itemsContainer.innerHTML = html;

    const subtotalDisplay = document.getElementById('subtotalDisplay');
    const totalDisplay = document.getElementById('totalDisplay');
    if (subtotalDisplay) subtotalDisplay.textContent = 'Rs.' + subtotal;
    if (totalDisplay) totalDisplay.textContent = 'Rs.' + subtotal;

    localStorage.setItem('omayurveda_cart_total', subtotal);
}

function changeQty(index, delta) {
    let cart = getCart();
    if (!cart[index]) return;
    cart[index].qty += delta;
    if (cart[index].qty < 1) cart[index].qty = 1;
    saveCart(cart);
}

function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
}

function proceedToPayment() {
    const cart = getCart();
    if (cart.length === 0) return;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    localStorage.setItem('omayurveda_cart_total', subtotal);
    localStorage.setItem('omayurveda_cart_items', JSON.stringify(cart));

    window.location.href = 'payment.html';
}

function loadOrderSummary() {
    const total = parseInt(localStorage.getItem('omayurveda_cart_total') || '0');
    const cartItems = JSON.parse(localStorage.getItem('omayurveda_cart_items') || '[]');

    const totalDisplay = document.getElementById('totalAmountDisplay');
    if (totalDisplay) {
        totalDisplay.textContent = total > 0 ? 'Rs.' + total : 'Contact for Pricing';
    }

    const itemsList = document.getElementById('cartItemsList');
    if (itemsList && cartItems.length > 0) {
        let html = '<h4>Items in your order:</h4>';
        cartItems.forEach(item => {
            const priceText = item.price > 0 ? 'Rs.' + item.price : 'Contact for Price';
            html += `
                <div class="cart-item-mini">
                    <span>
                        <span class="qty-badge">${item.qty}x</span>
                        ${item.name}
                    </span>
                    <span>${priceText}</span>
                </div>
            `;
        });
        itemsList.innerHTML = html;
    } else if (itemsList) {
        itemsList.style.display = 'none';
    }
}

// ========== WHATSAPP FLOAT WIDGET ==========
function initWhatsAppWidget() {
    const floatBtn = document.getElementById('whatsappFloat');
    const popup = document.getElementById('whatsappPopup');
    const overlay = document.getElementById('whatsappPopupOverlay');
    const closeBtn = document.getElementById('whatsappPopupClose');
    const startChatBtn = document.getElementById('whatsappStartChat');

    if (!floatBtn || !popup) return;

    function openPopup() {
        popup.classList.add('active');
        if (overlay) overlay.classList.add('active');
        floatBtn.classList.add('hidden');
    }

    function closePopup() {
        popup.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        floatBtn.classList.remove('hidden');
    }

    floatBtn.addEventListener('click', openPopup);
    closeBtn && closeBtn.addEventListener('click', closePopup);
    overlay && overlay.addEventListener('click', closePopup);

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });

    // Start Chat opens WhatsApp
    if (startChatBtn) {
        startChatBtn.addEventListener('click', function(e) {
            // Allow default link behavior to open WhatsApp
            closePopup();
        });
    }
}

// ========== SINGLE DOMContentLoaded INITIALIZER ==========
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderCart();
    loadOrderSummary();
    initWhatsAppWidget();
    AOS.init({ duration: 800, once: true });
});