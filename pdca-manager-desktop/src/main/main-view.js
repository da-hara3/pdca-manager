// In the main process.
(function () {
    var vm = new Vue({
        el: '#app',
        data: {
            inputTodo: "",
            inputTime: "",
            todos: [],
            timetables: [
                {time: '09:00-10:00', plan: '', performance: ''},
                {time: '10:00-11:00', plan: '', performance: ''},
                {time: '11:00-12:00', plan: '', performance: ''},
                {time: '12:00-13:00', plan: '', performance: ''},
                {time: '13:00-14:00', plan: '', performance: ''},
                {time: '14:00-15:00', plan: '', performance: ''},
                {time: '15:00-16:00', plan: '', performance: ''},
                {time: '16:00-17:00', plan: '', performance: ''},
                {time: '17:00-18:00', plan: '', performance: ''},
                {time: '18:00-19:00', plan: '', performance: ''},
                {time: '19:00-20:00', plan: '', performance: ''},
                {time: '20:00-21:00', plan: '', performance: ''},
            ]
        },
        methods: {
            addPlan: function (event) {
                let inputValues = {
                    inputTime: this.inputTime,
                    inputTodo: this.inputTodo
                };
                this.todos.push(inputValues);
                // 初期化
                this.inputTime = "";
                this.inputTodo = "";
            },

            // TODO
            output: function (event) {
                const outputArea = document.getElementById("output-area");
                outputArea.value = this.timetables[0].time + this.timetables[0].plan;
            }
        }
    });
})();
