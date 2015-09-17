<style>
    .icon-doge{
        width:200px;
        height:200px;
        background:url(../img/doge.jpg);
        background-size:100%;
    }
</style>
<template>
    <h2>{{title}}</h2>
    <p>id:{{$route.params.id}}</p>
    <div class="icon-doge"></div>
</template>

<script>
    module.exports = {
        data:function(){
            return {
                title:'这是页面3'
            }
        }
    }
</script>