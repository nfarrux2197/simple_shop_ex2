// Form animatsiyalari va dizayn uchun JavaScript

// Rasm yuklash va preview
const imageInput = document.getElementById('productImage');
const imagePreview = document.getElementById('imagePreview');

if (imageInput) {
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file) {
            // Fayl hajmini tekshirish (5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('Rasm hajmi 5MB dan oshmasligi kerak!');
                imageInput.value = '';
                return;
            }
            
            // Rasm formatini tekshirish
            if (!file.type.startsWith('image/')) {
                alert('Faqat rasm fayllarini yuklash mumkin!');
                imageInput.value = '';
                return;
            }
            
            const reader = new FileReader();
            
            reader.onload = function(event) {
                imagePreview.innerHTML = `
                    <div class="preview-container">
                        <img src="${event.target.result}" alt="Preview" class="preview-image">
                        <button type="button" class="remove-preview" onclick="removeImage()">×</button>
                    </div>
                `;
                imagePreview.classList.add('active');
            };
            
            reader.readAsDataURL(file);
        }
    });
}

// Rasmni o'chirish funksiyasi
function removeImage() {
    imageInput.value = '';
    imagePreview.innerHTML = '';
    imagePreview.classList.remove('active');
}

// Mahsulot qo'shish formasi
const productForm = document.getElementById('productForm');
const successMessage = document.getElementById('successMessage');

if (productForm) {
    productForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Formani tozalash
        productForm.reset();
        
        // Rasm preview ni tozalash
        if (imagePreview) {
            imagePreview.innerHTML = '';
            imagePreview.classList.remove('active');
        }
        
        // Muvaffaqiyat xabarini ko'rsatish
        successMessage.style.display = 'block';
        successMessage.style.animation = 'fadeIn 0.5s ease';
        
        // 3 soniyadan keyin xabarni yashirish
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
        
        // Sahifa yuqorisiga smooth scroll
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Aloqa formasi
const contactForm = document.getElementById('contactForm');
const formSuccessMessage = document.getElementById('formSuccessMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Formani tozalash
        contactForm.reset();
        
        // Muvaffaqiyat xabarini ko'rsatish
        formSuccessMessage.style.display = 'block';
        formSuccessMessage.style.animation = 'fadeIn 0.5s ease';
        
        // 3 soniyadan keyin xabarni yashirish
        setTimeout(() => {
            formSuccessMessage.style.display = 'none';
        }, 3000);
        
        // Sahifa yuqorisiga smooth scroll
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Input focus animatsiyalari
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.transform = 'scale(1.01)';
        this.style.transition = 'all 0.3s ease';
    });
    
    input.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
    });
});

// Sahifa yuklanganda animatsiya
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.product-card, .feature-card, .contact-item');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});