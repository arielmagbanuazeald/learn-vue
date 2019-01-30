Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
    template: ` <div>
                    <task v-for="task in tasks">{{ task.task }}</task>
                </div>
                `,

    data() {
        return {
            tasks: [
                { task: 'Go to the store', complete: true },
                { task: 'Go to the mall', complete: true },
                { task: 'Go to the farm', complete: true },
                { task: 'Go to the house', complete: true },
            ]
        }
    }
});

Vue.component('message', {
    props: ['title', 'body'],

    data(){
        return {
            isVisible: true
        }
    },

    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button @click="hideModal" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,

    methods: {
        hideModal(){
            this.isVisible = !this.isVisible;
        }
    }
});

new Vue({
    el: '#root'
});