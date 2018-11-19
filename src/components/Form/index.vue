<template>
    <div class="Form">
        <el-input
            v-model="filter"
            class="research"
            placeholder="research question"
        >
        </el-input>
        <el-table
            v-if="fetchedData.length"
            :data="fetchedData"
            style="width: 100%"
        >
            <el-table-column prop="question_text">

            </el-table-column>
        </el-table>
        <div
            v-else
            class="noQuestion"
        >
            <p>Sorry no question found, you can ask it under that message</p>
        </div>
        <el-input
            v-model="newQuestion"
            class="newQuestion"
            @keyup.enter.native="triggerNewQuestion()"
        >
            <el-button
                slot="append"
                @click="triggerNewQuestion()"
            >Ask</el-button>
        </el-input>
    </div>
</template>

<script>

import schwartz from 'schwartz';

export default {

    data: function(){
        return {
            filter: '',
            newQuestion: '',
        };
    },
    computed: {
        fetchedData() {
            if (this.filter != '') {
                return schwartz(
                    this.$store.state.app.question.filter((question) => {
                        return question.question_text.includes(this.filter);
                    }),
                    question => {
                        return [
                            question.creation_date
                        ];
                    }
                );
            }
            return schwartz(
                this.$store.state.app.question,
                question => {
                    return [
                        question.creation_date
                    ];
                }
            );
        },
    },

    methods: {
        triggerNewQuestion() {
            if (this.newQuestion !== '') {
                let item = {
                    question_text: this.newQuestion,
                };
                this.$store.dispatch('createQuestion', item);
            }
            this.newQuestion = '';
        },
    },
};
</script>

<style lang="scss">

.Form {
    margin-bottom: 40px;
    .research {
        width: 80%;
        margin: 30px 0 0 10%;
        @media (min-width: 768px) {
            margin-bottom: 30px;
            margin-top: 50px;
        }

        input {
            border-radius: 0;
            border-top: none;
            border-left: none;
            border-right: none;
        }
    }
    .newQuestion {
        width: 80%;
        margin-left: 10%;
        margin-top: 20px;
        @media (min-width: 768px) {
            margin-top: 50px;
        }
    }
    .noQuestion {
        margin: 60px 0 30px;
        padding-left: 10%;
    }
}

</style>
