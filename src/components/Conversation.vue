<template>
    <div class="conversation w-100">
        <div class="card">
            <div class="card-header bg-primary text-white d-flex align-items-center gap-4">
                <img :src="'storage/profile_images/' + contact.profile_image" :alt="contact.name"
                     class="rounded-circle contact-image" v-if="contact">
                <div class="contact-details d-flex flex-column">
                    <span class="contact-name">{{ contact ? contact.name : "Abdel ChatX" }}</span>
                    <span class="contact-phone">{{ contact ? contact.phone : '' }}</span>
                </div>
            </div>
            <div class="card-body pb-0">
                <MessagesFeed :contact="contact" :messages="messages"/>
                <MessageComposer @send="sendMessage"/>
            </div>
        </div>
    </div>
</template>

<script>
import MessagesFeed from "../components/MessagesFeed.vue";
import MessageComposer from "../components/MessageComposer.vue";
import axios from 'axios'
const server = import.meta.env.VITE_APP_SERVER

export default {
    props: {
        contact: {
            type: Object,
            default: null,
        },
        messages: {
            type: Array,
            default: [],
        }
    },
    data() {
        return {
            server:server
        }
    },
    methods: {
        sendMessage(text) {
            if (!this.contact) {
                return;
            }
            axios.post(`${server}/conversation/send`, {
                id:JSON.parse(localStorage.getItem('user')).id,
                contact_id: this.contact.id,
                text: text,
            }).then(response => {
                this.$emit('new', response.data);
            })
        }
    },
    components: {
        MessagesFeed,
        MessageComposer
    },
    mounted() {
        console.log(this.contact);
        console.log('Component mounted.')
    }
}
</script>

<style scoped>

.card-header {
    font-weight: bold;
    font-size: 18px;
}

.contact-image {
    width: 50px;
}

.contact-phone {
    font-size: 12px;
    opacity: 0.8;
}
</style>
