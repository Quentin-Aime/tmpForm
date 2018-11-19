export default {
    fetchData(context) {
        this._vm.$http.get(window.config.api_root_url + 'question/').then(response => {
            if (response.data) {
                for (let result of response.data.results)
                {
                    let data = {
                        modelName: 'question',
                        item: result
                    };
                    context.commit('ADD_ITEM', data);
                }
            }
            else {
                console.error('error on question fields');
            }
        }).catch((error) => {
            console.error(error);
        });
    },
    createQuestion(context, data) {
        this._vm.$http.post(window.config.api_root_url + 'question/', data).then(response => {
            if (response.data) {
                let data = {
                    modelName: 'question',
                    item: response.data
                };
                context.commit('ADD_ITEM', data);
            }
            else {
                console.error('error on question fields');
            }
        });

    },
    patchItem(context) {
        return context;
    },
    deleteItem(context) {
        return context;
    }
};