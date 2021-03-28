const chai = require("chai")
const expect = chai.expect
const assert = require("assert")

const LoansClient = require("../src/base")

describe("LoansClient", function() {
    it("should have a base url property", function(){
        const test = new LoansClient()
        expect(test).to.have.property("baseUrl")
    })
    it("should have a baseUrl = https://loanstreet-api.herokuapp.com/api/loans/", function(){
        const test = new LoansClient()
        expect(test.baseUrl).to.eql("https://loanstreet-api.herokuapp.com/api/loans/")
    })
})

describe("LoansClient.getLoan", function() {
    it("should return a loan with and ammount", async function () {
        const test = new LoansClient()
        const result = await test.getLoan(2)
        const keys = Object.keys(result)
        expect(keys).to.include("amount")
    })
    it("should return a loan with and monthly_payment", async function () {
        const test = new LoansClient()
        const result = await test.getLoan(2)
        const keys = Object.keys(result)
        expect(keys).to.include("monthly_payment")
    })
    it("should return a loan with and loan_length", async function () {
        const test = new LoansClient()
        const result = await test.getLoan(2)
        const keys = Object.keys(result)
        expect(keys).to.include("loan_length")
    })
    it("should return a loan with and interest_rate", async function () {
        const test = new LoansClient()
        const result = await test.getLoan(2)
        const keys = Object.keys(result)
        expect(keys).to.include("interest_rate")
    })
    it("should return a loan with an id of 2", async function () {
        const test = new LoansClient()
        const result = await test.getLoan(2)
        expect(result.id).to.eql(2)
    })
})