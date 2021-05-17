/* eslint-disable prettier/prettier */
import http from '../http-common';

class Service {
    getAll(){
        return http.get(`/`)
    }
}

export default new Service();