<template>
    <div class="contacts-list" v-if="contacts.length>0">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center bg-dark text-white gap-5">
                <span>Contacts</span>
                <span class="badge badge-primary text-white" data-bs-toggle="collapse"
                      data-bs-target="#collapseExample">
                    <div style="cursor: pointer;" v-if="is_collapsed">
                        <box-icon type='solid' name='up-arrow' color="#fff" @click="toggleCollapse"></box-icon>
                    </div>
                    <div style="cursor: pointer;" v-else>
                        <box-icon name='down-arrow' type='solid' color="#fff" @click="toggleCollapse"></box-icon>
                    </div>
                </span>
            </div>
            <div class="card-body c-list collapse-horizontal" id="collapseExample">
                <div
                    :class="`contact alert m-3 d-flex align-items-center gap-3 ${contact === selected ? 'alert-success border-4 border-success' : 'alert-dark'}`"
                    role="alert"
                    v-for="contact in contacts" :key="contact.id" @click="selectContact(contact)">
                    <img :src="'storage/profile_images/' + contact.profile_image" :alt="contact.name"
                         class="rounded-circle contact-image">
                    <div class="contact-deatils d-flex flex-column">
                        <span class="contact-name">
                            {{ makeTextShort(contact.name, 20) }}
                        </span>
                        <span class="contact-email">
                            {{ makeTextShort(contact.email, 20) }}
                        </span>
                    </div>

                    <!-- Unread -->
                    <span class="badge rounded-pill bg-danger unread" v-if="contact.unread">{{ contact.unread }}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="contacts-list" v-else>
        <p> пусто </p>
    </div>
</template>

<script>
import 'boxicons'

export default {
    props: {
        contacts: {
            type: Array,
            default: [],
        }
    },
    name: "ContactsList",
    data() {
        return {
            selected: this.contacts.length > 0 ? this.contacts[0] : null,
            max_text_length: 30,
            is_collapsed: false,
        }
    },
    methods: {
        selectContact(contact) {
            this.selected = contact;
            this.$emit('selected', contact);
        },
        makeTextShort(text, length) {
            return text.length > this.max_text_length ? text.substring(0, length) + '...' : text;
        },
        toggleCollapse() {
            this.is_collapsed = !this.is_collapsed;
        }
    },
    computed: {
        // sortedContacts() {
        //     return sortBy(this.contacts, [(contact) => {
        //         if (contact == this.selected) {
        //             return Infinity;
        //         }
        //         return contact.unread;
        //     }]).reverse();
        // }
    },

}
</script>

<style  scoped>

.c-list {
    height: 100%;
    max-height: 75vh;
    overflow-y: scroll;

   
}


.contact {
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out;

  
}
.unread {
        position: absolute;
        top: 8px;
        right: 8px;
        font-weight: bold;
    }
.contact-name {
    font-weight: bold;
    font-size: 18px;
}

.contact-image {
    width: 50px;
}

.card-header {
    font-weight: bold;
    font-size: 18px;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #ffab2f;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #ff3636;
}

@media  (max-width: 1016px) {
    .c-list {
        max-height:42vh;
    }
        
}
</style>
