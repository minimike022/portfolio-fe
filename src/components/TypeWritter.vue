<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps(["texts"])
const currentIndex = ref(0)
const typedText = ref('')
const index = ref(0)
const typingSpeed = ref(70)

const type = async () => {
    if (index.value < props.texts[currentIndex.value].length) {
        typedText.value += props.texts[currentIndex.value].charAt(index.value);
        console.log(typedText.value)
        index.value++;
        setTimeout(type, typingSpeed.value);
    } else {
        // Move to the next text after completion
        setTimeout(() => {
            index.value = 0;
            typedText.value = "";
            currentIndex.value = (currentIndex.value + 1) % props.texts.length;
            type();
        }, 1000); // Pause before starting the next text
    }
}

onMounted(() => {
    type()
})

</script>

<template>
    <div>
        <span class="text-2xl font-bold my-2">{{ typedText }}</span>
    </div>
</template>