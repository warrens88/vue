<template>
    <div>
        <input class="input" type="text" id="task" v-model.trim="todo" 
            placeholder="입력 후 엔터!" v-on:keyup.enter="addTodo">
        <span class="addbutton" v-on:click="addTodo">추 가</span>
    </div>    
</template>
<script type="text/javascript">
import eventBus from '../EventBus.js'

export default {
    name : 'input-todo',
    data : function() {
        return { todo : "" }
    },
    methods : {
        addTodo : function() {
            eventBus.$emit('add-todo', this.todo);
            this.todo = "";
        }
    }
}
</script>