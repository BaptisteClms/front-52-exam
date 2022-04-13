import axios from "axios";
import {USERS_API} from "./Config";

async function findAll() {
    return axios.get(USERS_API).then(response => response.data["hydra:member"]);
}

async function find(id) {
    return axios.get(USERS_API + "/" + id).then(response => response.data);
}

function deleteCustomer(id) {
    return axios.delete(USERS_API + "/" + id).then(async response => {
        return response;
    });
}

function update(id, customer) {
    return axios.put(USERS_API + "/" + id, customer).then(async response => {
        return response;
    });
}

function create(customer) {
    return axios.post(USERS_API, customer).then(async response => {
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