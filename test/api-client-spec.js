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
    it("should not return a none existent loan", async function () {
        const test = new LoansClient()
        const result = await test.getLoan(10000)
        expect(result.message).to.eql("Loan not found")
    })
})

describe("LoansClient.createLoan", function() {
    it("should create a new loan", async function () {
        const test = new LoansClient()
        const newLoan = await test.createLoan(1000, 1.5, 50, 30)

        expect(newLoan.loan.amount).to.eql(1000)
        expect(newLoan.loan.loan_length).to.eql(30)
        expect(newLoan.loan.monthly_payment).to.eql(50)
        expect(newLoan.loan.interest_rate).to.eql(1.5)
        expect(newLoan.message).to.eql("Loan Created")
        await test.deleteLoan(newLoan.loan.id)
    })
})

describe("LoansClient.updateAmount", function(){
    it("should update the amount of a specified loan", async function() {
        const test = new LoansClient()
        const newLoan = await test.createLoan(1000, 1.5, 50, 30)
        const updateAmount = await test.updateAmount(newLoan.loan.id, 1050)
        expect(updateAmount.loan.amount).to.eql(1050)
        await test.deleteLoan(updateAmount.loan.id)
    })
})

describe("LoansClient.updateInterestRate", function(){
    it("should update the amount of a specified loan", async function() {
        const test = new LoansClient()
        const newLoan = await test.createLoan(1000, 1.5, 50, 30)
        const updateInterestRate = await test.updateInterestRate(newLoan.loan.id, 2)
        expect(updateInterestRate.loan.interest_rate).to.eql(2)
        await test.deleteLoan(updateInterestRate.loan.id)
    })
})

describe("LoansClient.updateLoanLength", function(){
    it("should update the amount of a specified loan", async function() {
        const test = new LoansClient()
        const newLoan = await test.createLoan(1000, 1.5, 50, 30)
        const updateLoanLength = await test.updateLoanLength(newLoan.loan.id, 35)
        expect(updateLoanLength.loan.loan_length).to.eql(35)
        await test.deleteLoan(updateLoanLength.loan.id)
    })
})

describe("LoansClient.updateMonthlyPayment", function(){
    it("should update the amount of a specified loan", async function() {
        const test = new LoansClient()
        const newLoan = await test.createLoan(1000, 1.5, 50, 30)
        const updateMonthlyPayment = await test.updateMonthlyPayment(newLoan.loan.id, 55)
        expect(updateMonthlyPayment.loan.monthly_payment).to.eql(55)
        await test.deleteLoan(updateMonthlyPayment.loan.id)
    })
})

describe("LoansClient.deleteLoan", function(){
    it("should update the amount of a specified loan", async function() {
        const test = new LoansClient()
        const newLoan = await test.createLoan(ammount=1000, interestRate=1.5, monthlyPayment=50, loanLength=30)
        await test.deleteLoan(newLoan.loan.id)
        const res = await test.getLoan(newLoan.loan.id)
        expect(res.message).to.eql("Loan not found")
    })
})