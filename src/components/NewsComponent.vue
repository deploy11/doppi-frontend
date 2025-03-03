<template>
    <div class="news-container">
        <h1 class="news-title">Yangiliklar</h1>
        
        <div v-if="loading" class="spinner"></div>

        <div class="news-grid">
            <div v-for="newsItem in visibleNews" :key="newsItem.id" class="news-card">
                <img :src="getImageUrl(newsItem.image)" alt="news image" class="news-image" />
                <h2>{{ newsItem.title }}</h2>
                <p>{{ truncateText(newsItem.content, 120) }}</p>
                <small>{{ new Date(newsItem.created_at).toLocaleDateString() }}</small>
            </div>
        </div>

        <button v-if="visibleCount < news.length" @click="loadMore" class="load-more-btn">
            Ko'proq yuklash
        </button>
    </div>
</template>

<script>
export default {
    name: 'NewsComponent',
    data() {
        return {
            news: [],
            mediaUrl: "http://127.0.0.1:8000/media/",
            visibleCount: 6,
            loading: true
        };
    },
    computed: {
        visibleNews() {
            return this.news.slice(0, this.visibleCount);
        }
    },
    created() {
        this.fetchNews();
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        async fetchNews() {
            try {
                const response = await fetch('https://gulistonimiadmin.pythonanywhere.com/api/news/');
                const data = await response.json();
                this.news = data;
                this.loading = false;
            } catch (error) {
                console.error('Error fetching news:', error);
                this.loading = false;
            }
        },
        getImageUrl(imagePath) {
            return imagePath.startsWith("http") ? imagePath : this.mediaUrl + imagePath;
        },
        handleScroll() {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
                if (this.visibleCount < this.news.length) {
                    this.visibleCount += 3;
                }
            }
        },
        loadMore() {
            if (this.visibleCount < this.news.length) {
                this.visibleCount += 3;
            }
        },
        truncateText(text, maxLength) {
            return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
        }
    }
};
</script>

<style scoped>
/* Umumiy konteyner */
.news-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    min-height: 100vh;
    background: linear-gradient(135deg, #e0f7fa, #ffebee);
}

/* Yangiliklar sarlavhasi */
.news-title {
    font-size: 2.5em;
    font-weight: bold;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
    animation: fadeInDown 0.8s ease-in-out;
}

/* Grid tartib */
.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1100px;
}

/* Kartochka uslubi */
.news-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease-in-out forwards;
    position: relative;
}

.news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Rasm */
.news-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}

/* Matn */
h2 {
    font-size: 1.4em;
    margin: 10px 0;
}

p {
    font-size: 1em;
    color: #555;
    margin: 10px 0;
}

/* Kichik sana matni */
small {
    color: #888;
}

/* Spinner (Loading Indicator) */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.2);
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 20px auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Ko'proq yuklash tugmasi */
.load-more-btn {
    margin-top: 20px;
    padding: 12px 20px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.3s ease;
}

.load-more-btn:hover {
    background: #2980b9;
}

/* Animatsiyalar */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
