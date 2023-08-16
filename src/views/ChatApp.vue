<template>
    <section>
        <div class="container">
            <div class="chat-app">
                <ContactsList :contacts="contacts" @selected="startConversationWith" />
                <Conversation :contact="selectedContact" :messages="messages" @new="saveNewMessage" />
            </div>
        </div>
    </section>
</template>

<script>
import Conversation from "../components/Conversation.vue"
import ContactsList from "../components/ContactsList.vue";
import axios from 'axios'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

const server = import.meta.env.VITE_APP_URL

export default {

    name: "ChatApp",
    data() {
        return {
            selectedContact: null,
            contacts: [],
            messages: [],
            server: server,
            user: JSON.parse(localStorage.getItem("user"))
        }
    },
    methods: {
        startConversationWith(contact) {
            this.updateUnreadCount(contact, true)
            axios.get(`${server}/conversation/${contact.id}`, { headers: { 'Authorization': JSON.parse(localStorage.getItem("user")).api_token } })
                .then(response => {
                    this.messages = response.data;
                    this.selectedContact = contact;
                })
        },
        saveNewMessage(message) {
            this.messages.push(message);
        },
        handleIncoming(message) {
             if (this.selectedContact && message.from === this.selectedContact.id) {
                this.messages.push(message);
                return;
             }
            //unread messages
            this.updateUnreadCount(message.from_contact, false);
        },
        updateUnreadCount(contact, reset) {
            this.contacts = this.contacts.map((single) => {
                if (single.id !== contact.id) {
                    return single;
                }
                if (reset) {
                    single.unread = 0;
                } else {
                    single.unread += 1;
                }
                return single;
            })
        }
    },
    created() {
        window.Pusher = Pusher;
        let api_token = '';
        if (localStorage.getItem("user") !== null) {
            api_token=JSON.parse(localStorage.getItem("user")).api_token
        }
        window.Echo = new Echo({
            broadcaster: 'pusher',
            key: import.meta.env.VITE_PUSHER_APP_KEY,
            cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
            authEndpoint: "http://shop-rest.tw1.ru/broadcasting/auth",
            auth: {
                headers: {
                    Accept: 'application/json',
                    Authorization: api_token
                }
            }


        });
    },
    mounted() {
        window.Echo.private(`messages.${this.user.id}`)  /*${this.user.id}*/
            .listen('NewMessage', (e) => {
                console.log(true)
                this.handleIncoming(e.message);
            })
        axios.get(`${server}/contacts`, { headers: { 'Authorization': JSON.parse(localStorage.getItem('user')).api_token } })
            .then(response => {
                this.contacts = response.data;
            });
    },
    components: {
        Conversation,
        ContactsList
    }
}
</script>

<style  scoped>
.chat-app {
    display: flex;
    gap: 18px;
    flex-direction: row;
}

@media screen and (max-width: 1016px) {
    .chat-app {
        flex-direction: column;
        gap: 18px;
    }
}
</style>
