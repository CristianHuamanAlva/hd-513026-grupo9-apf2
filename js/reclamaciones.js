        // Validación del formulario
        document.getElementById('reclamoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación simple - en un caso real deberías hacer validaciones más completas
            if(this.checkValidity()) {
                // Aquí iría el código para enviar el formulario
                alert('Gracias por tu reclamo. Nos pondremos en contacto contigo pronto.');
                this.reset();
                
                // En un caso real, aquí harías una petición AJAX o similar
            } else {
                alert('Por favor completa todos los campos obligatorios.');
            }
        });
        
        // Botón para ir arriba
        document.getElementById('back-to-top').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        window.addEventListener('scroll', function() {
            var backToTop = document.getElementById('back-to-top');
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });