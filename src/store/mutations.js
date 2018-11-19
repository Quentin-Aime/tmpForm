export default {
    ADD_ITEM(state, data) {
        state[data.modelName].push(data.item);
    },
    PATCH_ITEM(state, data) {
        state[data.modelName].push(data.item);
    },
    DELETE_ITEM(state, data) {
        state[data.modelName].push(data.item);
    }
};