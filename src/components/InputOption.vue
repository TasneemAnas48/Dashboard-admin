<template>
    <div>
        <input required type="text" :value="value" 
        @input="$emit('input', $event.target.value)" 
        class="col-lg-12 input-field input-comp">
    </div>
</template>

<script>
export default {
    props: ['value'],
}
</script>



<style>
.input-comp{
    outline: none !important;
    background-color: white !important;
    border-radius: 30px !important;
    border: 1px solid #ced4da !important;
    height: 45px !important;
    width: 100% !important;
    margin-bottom: 20px;
}
.input-comp:focus {
    border-color: var(--main-color) !important;
    box-shadow: 0 0 0 2px rgba(0, 26, 255, 0.03) !important;
}
</style>