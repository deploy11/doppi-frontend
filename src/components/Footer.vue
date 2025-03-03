<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img :src="require('@/assets/Logo.png')" alt="Logo" />
      </div>
      <div class="footer-links">
        <h3>Contact Us</h3>
        <ul>
          <li><i class="fa fa-phone"></i> <a href="tel:+998903274571">+998 99 346 0371</a></li>
          <li><i class="fa fa-envelope"></i> <a href="mailto:jumabeknarziqulov2011@gmail.com">deploygit11@gmail.com</a></li>
          <li><i class="fa fa-map-marker"></i> Sirdaryo Vil Boyovut.T T.Latipov</li>
        </ul>
      </div>
      <div class="footer-socials">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="https://t.me/DOPPI_ADMlN" aria-label="telegram"><i class="fa fa-telegram"></i></a>
          <a href="https://www.instagram.com/doppi_loyihasi?igsh=MWEybXhwMXp4a2g2cw%3D%3D&utm_source=qr" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Guliston IMI. Barcha huquqlar himoyalangan</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter'
};
</script>

<style scoped>
/* Footer General Styles */
.footer {
  background-color: #333;
  color: #fff;
  padding: 2rem 1rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Updated to space-around */
  align-items: start;
}

.footer-logo {
  width: 200px; /* Increased width for logo container */
  flex: 0 1 200px; /* Ensure it doesn’t shrink */
}

.footer-logo img {
  width: 100%; /* Ensure logo scales correctly */
  height: auto; /* Maintain aspect ratio */
}

.footer-links, .footer-socials {
  width: 250px; /* Increased width for sections */
  margin: 0 1.5rem;
}

.footer-links h3, .footer-socials h3 {
  margin-top: 0;
  font-size: 1.4rem; /* Increased font size */
  border-bottom: 2px solid #f1c40f; /* Decorative line under heading */
  padding-bottom: 0.5rem; /* Spacing from the heading text */
  color: #f1c40f; /* Heading color */
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.footer-links i {
  color: #f1c40f;
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

/* Footer Social Icons */
.social-icons {
  display: flex;
  gap: 1.5rem; /* Increased gap between icons */
}

.social-icons a {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s, transform 0.3s;
}

.social-icons a:hover {
  color: #f1c40f;
  transform: scale(1.1); /* Slightly enlarge icon on hover */
}

/* Footer Bottom */
.footer-bottom {
  text-align: center;
  margin-top: 1rem;
  border-top: 1px solid #444;
  padding-top: 1rem;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-links, .footer-socials {
    width: 100%; /* Full width on smaller screens */
    margin: 1rem 0;
    text-align: center;
  }

  .footer-logo {
    width: 150px; /* Adjust logo size on smaller screens */
  }
  .social-icons {
    justify-content: center;
    align-items: center;
  }
}
</style>
