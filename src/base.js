const fetch = require("node-fetch")

class LoansClient{
    constructor (){
        this.baseUrl = "https://loanstreet-api.herokuapp.com/api/loans/"
    }

    async getLoan(id) {
        const res = await fetch(`${this.baseUrl}/${id}`)
        const json = await res.json()
        return json
    }

    async updateAmount(id, newValue){
        const res = await fetch(`${this.baseUrl}/${id}`, {
            method:"PUT",
            body:JSON.stringify({amount: newValue}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    }
    async updateInterestRate(id, newValue){
        const res = await fetch(`${this.baseUrl}/${id}`, {
            method:"PUT",
            body:JSON.stringify({interest_rate: newValue}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    }

    async updateLoanLength(id, newValue){
        const res = await fetch(`${this.baseUrl}/${id}`, {
            method:"PUT",
            body:JSON.stringify({loan_length: newValue}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    }

    async updateMonthlyPayment(id, newValue){
        const res = await fetch(`${this.baseUrl}/${id}`, {
            method:"PUT",
            body:JSON.stringify({monthly_payment: newValue}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    }
}

const client = new LoansClient()

const test = client.getLoan(2)

const test2 = client.updateAmount(1, 1003)
const test3 = client.updateInterestRate(1, 1003)

test2

test