<template>
    <div id="app">
        <Form></Form>
        <UserForm></UserForm>

    </div>
</template>

<script>
import Form from './components/Form';
import UserForm from './components/UserForm';

export default {
    name: 'App',
    components: {
        Form,
        UserForm
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
