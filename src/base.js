const fetch = require("node-fetch")

class LoansClient{
    constructor (){
        this.baseUrl = "https://loanstreet-api.herokuapp.com/api/loans/"
    }

    async getAllLoans(){
        const res = await this._callApi(this.baseUrl, null, 'GET')
        return json
    }

    async getLoan(id) {
        this._checkId(id)
        const url = `${this.baseUrl}/${id}`
        const res = await this._callApi(url,null, "GET")
        return res
    }

    async updateLoan(id, amount=null, interestRate=null, monthlyPayment=null, loanLength=null){
        this._checkId(id)
        const body = this._createBody(amount, interestRate, loanLength, monthlyPayment)
        const url = `${this.baseUrl}/${id}`
        const res = await this._callApi(url, body, 'PUT')
        return res 
    }

    async deleteLoan(id) {
        this._checkId(id)
        const url = `${this.baseUrl}/${id}`
        const res = await this._callApi(url, null, "DELETE")
        return res 
    }

    async createLoan(amount, interestRate, monthlyPayment, loanLength){
        this._checkTypes(amount, interestRate, monthlyPayment, loanLength)
        const body = this._createBody(amount, interestRate, loanLength, monthlyPayment)
        const url = this.baseUrl
        const res = await this._callApi(url, body, "POST")

        return res
    }
    async _callApi(url, body, verb) {
        const acceptedVerbs = new Set(["PUT", "POST", "DELETE", "GET"])
        if (!acceptedVerbs.has(verb)) {
            throw new SyntaxError("_callApi accepts ['PUT', 'POST','DELETE', 'GET'] as verbs")
        }
        
        if (verb === "PUT" || verb === "POST") {
            
            const res = await fetch(url, {
                method: verb,
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            return await res.json()

        } else {
            const res = await fetch(url, {
                method: verb
            })
            const json = await res.json()
            return json
        }
    }

    _createBody(amount, interestRate, loanLength, monthlyPayment) {
        const body = {}
        if(amount){
            body["amount"] = amount
        } 
        if(interestRate) {
            body["interest_rate"] = interestRate
        }
        if(loanLength){
            body["loan_length"] = loanLength
        }
        if(monthlyPayment){
            body["monthly_payment"] = monthlyPayment
        }
        return body
    }

    _checkTypes(amount, interestRate, loanLength, monthlyPayment){
        if (typeof amount !== 'number') {
            throw new TypeError("amount must be a number")
        } else if (typeof interestRate !== 'number') {
            throw new TypeError("interestRate must be a number")
        } else if (typeof monthlyPayment !== 'number') {
            throw new TypeError("monthlyPayment must be a number")
        } else if (typeof loanLength !== 'number') {
            throw new TypeError("loanLength must be a number")
        }
    }

    _checkId(id){
        if (typeof id !== 'number') {
            throw new TypeError("id must be a number")
        } else if (id <= 0) {
            throw new RangeError("id must be larger than 0")
        }
    }
}

module.exports = LoansClient