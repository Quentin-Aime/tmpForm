<template>
    <div class="UserForm">
        <el-form ref="userForm">
            <el-form-item
                required
                label="name"
            >
                <el-input
                    v-model="form.name"
                >
                </el-input>
            </el-form-item>
            <el-form-item
                required
                label="firstname"
            >
                <el-input
                    v-model="form.firstname"
                >
                </el-input>
            </el-form-item>
            <el-form-item
                required
                label="profession"
            >
                <el-input
                    v-model="form.profession"
                >
                </el-input>
            </el-form-item>
            <el-form-item
                label="number"
            >
                <el-input
                    v-model="form.number"
                >
                </el-input>
            </el-form-item>
            <el-form-item
                required
                label="mail"
            >
                <el-input
                    v-model="form.mail"
                >
                </el-input>
            </el-form-item>
        </el-form>
        <el-button
            class="submit"
            type="primary"
            @click="submitForm()"
        >Submit</el-button>
    </div>
</template>

<script>

export default {

    components: {
    },

    props: {

    },

    data: function(){
        return {
            form: {
                name: '',
                firstname: '',
                profession: '',
                number: '',
                mail: ''
            }
        };
    },

    computed: {
        dataCheck() {
            let returnValue = true;
            let regexEmail = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
            if (this.form.name == '') {
                console.warn('name is empty');
                returnValue = false;
            }
            if (this.form.profession == '') {
                console.warn('profession is empty');
                returnValue = false;
            }
            if (this.form.firstname == '') {
                console.warn('firstname is empty');
                returnValue = false;
            }
            if (this.form.mail == '') {
                console.warn('email is empty');
                returnValue = false;
            }
            else if (!this.form.mail.match(regexEmail)) {
                console.warn('email does not match the correct pattern : test@test.test');
                returnValue = false;
            }
            return returnValue;
        }
    },

    mounted: function(){

    },

    methods: {
        submitForm() {
            console.debug('submit!');
            let item = {
                name: this.form.name,
                firstname: this.form.firstname,
                profession: this.form.profession,
                number: this.form.number,
                mail: this.form.mail,
            };
            console.debug(this.form.number);

            if (this.dataCheck) {

                this.$store.dispatch('createTmpUser', item);
            }
        }
    },
};
</script>

<style lang="scss">
.UserForm {
    width: 90%;
    margin: auto;
    .el-form {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        .el-form-item {
            width: 45%;
        }
    }
    .submit {
        margin: auto;
    }
}
</style>
