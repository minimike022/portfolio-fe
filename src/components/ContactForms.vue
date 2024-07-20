<script setup>
import {ref} from 'vue'

const response_forms = ref({
    full_name: '',
    email: '',
    subject: '',
    details: ''
})


const submit_form = () => {
    console.log(response_forms.value)
}
</script>

<template>
    <div class="w-[50dvh] grid grid-cols-1 gap-y-2">
        <h1 class="text-white text-lg">Send me a message🚀</h1>
        <form @submit.prevent="submit_form()" class="grid grid-cols-1 gap-y-4">
            <input type="text" v-model="response_forms.full_name" placeholder="Full Name" class="h-[7dvh] placeholder-gray-600 bg-[#0c1827]  rounded-md pl-4 py-[.7dvh] text-white outline-none focus:border focus:border-[#193352]" required>
            <input type="email" v-model="response_forms.email" placeholder="Email" class="h-[7dvh] placeholder-gray-600 bg-[#0c1827] rounded-md pl-4 py-[.7dvh] text-white outline-none focus:border focus:border-[#193352]" required>
            <input type="text" v-model="response_forms.subject" placeholder="Subject" class="h-[7dvh] placeholder-gray-600 bg-[#0c1827] rounded-md pl-4 py-[.7dvh] text-white outline-none focus:border focus:border-[#193352]" required>
            <h1 class="text-white text-sm">Tell me more about the project</h1>
            <textarea v-model="response_forms.details" placeholder="Tell me more.." name="" id="" class="bg-[#0c1827] h-[20dvh] placeholder-gray-600 px-4 py-[.7vh] rounded-md text-white outline-none focus:border focus:border-[#193352]"></textarea>
            <div>
                <input type="submit" value="Send Message" class="text-sm text-white px-4 py-2 rounded-md bg-[#76C79B]">
            </div>
        </form>
    </div>
</template>