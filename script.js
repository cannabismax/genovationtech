// Smooth Scroll for CTA Button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

<script>
document.addEventListener('DOMContentLoaded', function() {
    var faqItems = document.querySelectorAll('.faq-item h4');
    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var parent = this.parentElement;
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
            } else {
                // Close other FAQ items
                var activeItems = document.querySelectorAll('.faq-item.active');
                activeItems.forEach(function(activeItem) {
                    activeItem.classList.remove('active');
                });
                parent.classList.add('active');
            }
        });
    });
});
</script>