<template>
    <div class="contact-container">
        <h1 class="title">Takliflar</h1>
        <div class="content">
            <!-- Kontakt Form -->
            <form @submit.prevent="submitForm" class="contact-form">
                <div class="input-group">
                    <label for="name">Ism</label>
                    <input type="text" id="name" v-model="formData.name" required placeholder="Ismingizni kiriting" />
                </div>

                <div class="input-group">
                    <label for="subject">Mavzu</label>
                    <input type="text" id="subject" v-model="formData.subject" required placeholder="Mavzuni kiriting" />
                </div>

                <div class="input-group">
                    <label for="telefon">Telefon</label>
                    <input
                        type="tel"
                        id="telefon"
                        v-model="formData.telefon"
                        required
                        placeholder="+998901234567"
                        @input="validatePhone"
                    />
                </div>

                <div class="input-group">
                    <label for="message">Xabar</label>
                    <textarea id="message" v-model="formData.message" required placeholder="Xabaringizni yozing"></textarea>
                </div>

                <button type="submit" class="submit-btn">Yuborish</button>
            </form>

            <!-- Google Map -->
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.1216987001444!2d68.7900154!3d40.516801099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b20735aa10e07b%3A0x6948b34fbde8a891!2sSirdaryo%20Ixtisoslashgan%20san&#39;at%20maktabi%20internati!5e0!3m2!1sru!2s!4v1741025400176!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <!-- Modal Notification -->
        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <p>{{ modalMessage }}</p>
                <button @click="showModal = false" class="modal-close">OK</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactPage",
    data() {
        return {
            formData: {
                name: '',
                subject: '',
                telefon: '',
                message: ''
            },
            phoneError: '',
            mapUrl: "https://maps.app.goo.gl/2hGC9bNKC48NBavb8",
            showModal: false,
            modalMessage: ""
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await fetch("https://gulistonimiadmin.pythonanywhere.com/api/contact/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.formData)
                });

                if (response.ok) {
                    this.modalMessage = "Taklifingiz qabul qilindi!";
                    this.showModal = true;
                    this.formData = { name: "", subject: "", telefon: "", message: "" };
                } else {
                    this.modalMessage = "Xatolik yuz berdi, qaytadan urinib ko‘ring.";
                    this.showModal = true;
                }
            } catch (error) {
                console.error("Xatolik:", error);
                this.modalMessage = "Tarmoq xatosi yuz berdi.";
                this.showModal = true;
            }
        },
        
    }
};
</script>

<style scoped>
.contact-container {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
}

.content {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.contact-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
}

.input-group {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.input-group label {
    font-weight: bold;
    margin-bottom: 5px;
}

.input-group input,
.input-group textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

.submit-btn {
    background: #007bff;
    color: white;
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.map-container {
    flex: 1;
    height: 350px;
    border-radius: 8px;
    overflow: hidden;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

.modal-close {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    background: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

.modal-close:hover {
    background: #0056b3;
}
</style>