import http from '../http-common'

class IssuesService {
    async getAll(params) {
        return http.get(`/get-issues`, {
            headers: {
                'Content-type': 'application/json',
            },
        })
    }

    async getbyCustomer(id) {
        return http.get(`/get-issues?customer_id=${id}`, {
            headers: {
                'Content-type': 'application/json',
            },
        })
    }
    async addIssue(data) {
        return http.post(`/add-issue`, data, {
            headers: {
                'Content-type': 'application/json',
            },
        })
    }

    async update(data) {
        return http.put(`/change-issue-status`, data, {
            headers: {
                'Content-type': 'application/json',
            },
        })
    }
}

export default new IssuesService()
