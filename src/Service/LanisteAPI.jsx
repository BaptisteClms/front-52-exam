import axios from "axios";
import {LUDI_API, USERS_API} from "./Config";

async function findAll(id) {
    return axios.get(USERS_API + "/" + id + "/ludis").then(response => response.data["hydra:member"]);
}

async function find(id) {
    return axios.get(LUDI_API + "/" + id).then(response => response.data);
}

function deleteCustomer(id) {
    return axios.delete(LUDI_API + "/" + id).then(async response => {
        return response;
    });
}

function update(id, customer) {
    return axios.put(LUDI_API + "/" + id, customer).then(async response => {
        return response;
    });
}

function create(customer) {
    return axios.post(LUDI_API, customer).then(async response => {
        return response;
    });
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteCustomer
};