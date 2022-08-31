<script setup lang="ts">
import type { Escola } from '../../../types/Escola';
import EscolaService from '../services/EscolaService';
import { onBeforeMount, onMounted, reactive, ref } from 'vue'

defineProps({
    title: { type: String, required: true }, likes: { type: Number, default: 10 }, status: {
        validator(value: string) {
            // The value must match one of these strings
            return ['success', 'warning', 'danger'].includes(value)
        }
    }
});


const escolaService = new EscolaService();

const escola = ref<Escola>();
const escolas = ref<Escola[]>();

onMounted(() => {
    escolaService.buscarEscolaPorId(1).then(res => escola.value = res);
    escolaService.buscarTodasEscolas().then(res => escolas.value = res);
})
</script>
    
    
<template>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
            <img class="h-12 w-12" src="/favicon.ico" alt="ChitChat Logo">
        </div>
        <div>
            <div class="text-xl font-medium text-yellow">ChitChat</div>
            <p class="text-slate-500">You have a new message!</p>
        </div>
    </div>
</template>
    
    
    
<style>
</style>