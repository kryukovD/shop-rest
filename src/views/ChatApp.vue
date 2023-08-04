<template>
    <section>
        <div class="container">
            <div class="chat-app">
                <ContactsList :contacts="contacts" @selected="startConversationWith"/>
                <Conversation :contact="selectedContact" :messages="messages" @new="saveNewMessage"/>
            </div>
    </div>
</section>
</template>

<script>
import Conversation from "../components/Conversation.vue"
import ContactsList from "../components/ContactsList.vue";
import axios from 'axios'
const server = import.meta.env.VITE_APP_URL

export default {
 
    name: "ChatApp",
    data() {
        return {
            selectedContact: null,
            contacts: [],
            messages: [],
            server:server,
            user:JSON.parse(localStorage.getItem("user")) 
        }
    },
    methods: {
        startConversationWith(contact) {
            this.updateUnreadCount(contact, true)
            axios.get(`${server}/conversation/${contact.id}`)
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
                console.log(selectedContact.id);
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
    mounted() {
        Echo.private(`messages.${this.user.id}`)  /*${this.user.id}*/
            .listen('NewMessage', (e) => {
                this.handleIncoming(e.message);
            })
        axios.get(`${server}/contacts`)
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
