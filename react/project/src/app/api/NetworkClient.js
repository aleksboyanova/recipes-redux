import axios from "axios";
import Constants from "../constants/Constants";

export default {
    get(url, success, failure, params) {
        return this.request({
            method: "get",
            url,
            params,
            success,
            failure
        });
    },
    post(url, data, success, failure) {
        return this.request({
            method: "post",
            url,
            data,
            success,
            failure
        });
    },
    put(url, data, success, failure) {
        return this.request({
            method: "put",
            url,
            data,
            success,
            failure
        });
    },
    delete(url, success, failure) {
        return this.request({
            method: "delete",
            url,
            success,
            failure
        });
    },

    request: (options = {}) => {
        if (!options.url) {
            console.log("URL is required");
            return;
        }

        if(options.method === 'get')
        {
            console.log('test');
        }

        let data = Object.assign(
            {
                method: "get",
                baseURL: Constants.BASE_URL_API
            },
            options
        );

        if(data.params == undefined){
            data.params = {};
        }

        //data.params = Object.assign(data.params, lang);

        return new Promise((resolve, reject) => {
            axios(data)
                .then(response => {
                    if (options.success) {
                        options.success(response.data);
                    }
                    resolve(response.data);
                })

                .catch(error => {
                    let statusCode = error.response.status;


                    if(error.response)
                    {
                       alert('Error');
                    }


                    if (options.failure) {
                        options.failure(error);
                    }
                    reject(error);
                });
        });
    }
};
