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

Vue.component('modal', {
    props: [],
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title"></p>
                    <button class="delete" aria-label="close" @click="$emit('close')"></button>
                </header>
                <section class="modal-card-body">
                    <slot></slot>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button" @click="$emit('close')">Cancel</button>
                </footer>
            </div>
        </div>
    `,

});

new Vue({
    el: '#root',

    data: {
        showModal: false
    }
});