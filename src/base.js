const fetch = require("node-fetch")

class LoansClient{
    constructor (){
        this.baseUrl = "https://loanstreet-api.herokuapp.com/api/loans/"
    }

    async getAllLoans(){
        const res = await fetch(`${this.baseUrl}/${id}`)
        const json = await res.json()
        return json
    }

    async getLoan(id) {
        if (typeof id !== 'number') {
            throw new TypeError("id must be a number")
        } 
        const res = await fetch(`${this.baseUrl}/${id}`)
        const json = await res.json()
        return json
    }

    async updateAmount(id, newValue){
        if (typeof id !== 'number') {
            throw new TypeError("id must be a number")
        } else if (typeof newValue !== 'number'){
            throw new TypeError("newValue must be a number")
        }
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
        if (typeof id !== 'number') {
            throw new TypeError("id must be a number")
        } else if (typeof newValue !== 'number') {
            throw new TypeError("newValue must be a number")
        }
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
        if (typeof id !== 'number') {
            throw new TypeError("id must be a number")
        } else if (typeof newValue !== 'number') {
            throw new TypeError("newValue must be a number")
        }
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
        if (typeof id !== 'number') {
            throw new TypeError("id must be a number")
        } else if (typeof newValue !== 'number') {
            throw new TypeError("newValue must be a number")
        }
        const res = await fetch(`${this.baseUrl}/${id}`, {
            method:"PUT",
            body:JSON.stringify({monthly_payment: newValue}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    }

    async deleteLoan(id) {
        if(typeof id !== 'number'){
            throw new TypeError("id must be a number")
        }
        const res = await fetch(`${this.baseUrl}/${id}`, {
            method:"DELETE"
        })
    }
}

const client = new LoansClient()
