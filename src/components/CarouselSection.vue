<template>
  <!-- DO'PPI LOYIHASI Haqida bo'lim -->
  <section id="doppi-project" class="section-container">
    <div class="container">
      <div class="section-content">
        <div class="section-text">
          <h1 class="animated-title">
            <i class="fa fa-book"></i> DO'PPI LOYIHASI: Kitobxonlikni Yuksaltirish
          </h1>
          <p class="fade-in-text">
            Assalomu alaykum! Biz Guliston tuman IMI o'quvchilari "DO'PPI LOYIHASI"ni boshladik. Loyihamizning asosiy maqsadi kitobxonlikni maktab bosqichidan respublika bosqichigacha olib chiqish va yoshlarni yangi, foydali loyihalar bilan jamiyatga xizmat qiladigan dasturlarni yaratishdir. Biz hammasiga siz bilan erishamiz — jamiyatni birgalikda o'zgartiramiz!
          </p>
          <p class="fade-in-text">
            Loyihamizda biz yangi, yoshlar uchun foydali dasturlar yaratishga intilamiz. Bu loyihalar jamiyatda ko'plab ijobiy o'zgarishlarga olib kelishi mumkin. Jamiyatni o'zgartirishda birgalikda qatnashishimiz kerak!
          </p>
         
        </div>
        <div class="section-image">
          <img :src="require('@/assets/photo_2025-03-02_08-44-56.jpg')" alt="DO'PPI LOYIHASI" class="img-slice zoom-in">
        </div>
      </div>
    </div>
  </section>

  <!-- Kitobxonlik Loyihasi bo'limi -->
  <section id="doppi-book-reading" class="section-container">
    <div class="container">
      <div class="section-content">
        <div class="section-image">
          <img :src="require('@/assets/rasm2.webp')" alt="Kitobxonlik Loyihasi" class="zoom-in">
        </div>
        <div class="section-text">
          <h2 class="animated-title"><i class="fa fa-book-reader"></i> Birinchi Bosqich: Kitobxonlik Loyihasi</h2>
          <p class="fade-in-text">
            Maktabimizda 5-9 sinf o'quvchilari o'rtasida "Men Yoqqan Janr" so'rovnomasi bo'yicha kitoblar tanlash va mini savol-javoblar tashkil etiladi. Bu loyiha maktab bosqichidan tashqari respublika miqyosida ham katta ahamiyatga ega bo'lishi mumkin.
          </p>
          <h2 class="animated-title"><i class="fa fa-trophy"></i> Yarim Yutuvchi Sovg'alar</h2>
          <p class="fade-in-text">
            Har bir ishtirokchi sovg'alar va "GOLDEN TICKET"lar bilan taqdirlanadi. G’oliblar turli sovg’alar va vaucherlar bilan taqdirlanadi. Ijtimoiy tarmoqlarda esa turli sovg'ali viktorinalar o'tkaziladi.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Qo'shimcha ma'lumotlar bo'limi -->
  <section id="doppi-additional-info" class="section-container">
    <div class="container">
      <div class="section-content">
        <div class="section-text">
          <h2 class="animated-title"><i class="fa fa-info-circle"></i> Loyihaning Maqsadi</h2>
          <p class="fade-in-text">
            DO'PPI LOYIHASI kitobxonlikni yuksaltirish, yoshlarni o'qish va ta'limga bo'lgan qiziqishlarini oshirishga qaratilgan. Ushbu loyiha orqali biz maktab va universitet o'quvchilari orasida o'qish madaniyatini rivojlantirishni maqsad qilganmiz.
          </p>
        </div>
        <div class="section-image">
          <img :src="require('@/assets/rasm1.webp')" alt="Loyihaning Maqsadi" class="zoom-in">
        </div>
      </div>
    </div>
  </section>

 
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'DoppiProject',
  setup() {
    const router = useRouter();

    const goToAddPage = () => {
      router.push('/murojatlar');
    };

    return {
      goToAddPage
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-container {
  padding: 2rem;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
  animation: fadeIn 1s ease-out;
}

.section-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.section-text {
  max-width: 600px;
  margin: 0 auto;
}

.section-image {
  max-width: 100%;
}

.section-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 28px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section-image img:hover {
  transform: rotate(5deg);
  transition: transform 0.3s ease;
}

.text-brandPrimary {
  color: #007bff;
}

h1, h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #333;
  text-align: center;
}

p, ul {
  font-size: 1.1rem;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
  color: #555;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

.cta-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #0056b3;
}

.cta-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.fas {
  margin-right: 8px;
}

/* Animatsiyalar */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animated-title {
  animation: fadeIn 1.5s ease-out;
}

.fade-in-text {
  animation: fadeIn 2s ease-out;
}

.zoom-in {
  transition: transform 0.3s ease-in-out;
}

.zoom-in:hover {
  transform: scale(1.1);
}

/* Responsive dizayn */
@media (min-width: 768px) {
  .section-content {
    flex-direction: row;
  }

  .section-text, .section-image {
    flex: 1;
  }

  .section-text {
    padding-right: 1rem;
  }

  .section-image {
    padding-left: 1rem;
  }
}

@media (max-width: 767px) {
  .section-content {
    flex-direction: column;
  }
}
</style>
