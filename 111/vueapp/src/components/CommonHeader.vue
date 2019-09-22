<template>
    <div id='header' :style="{background:$store.state.color}">
   {{$store.state.title}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#header{
    height: 1rem;
    background: #ff0000;
    position:fixed;
    top:0px;
    width:100%;

}
</style>