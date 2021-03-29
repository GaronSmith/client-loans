# LoansClient
This is a javascript livrary to access the webserver-api. This library enables
you to manage your loans such as creating, updating, deleting loans. 


## Example
```javascript
const client = new LoansClient()

const newLoan = client.createLoan(ammount=1000, interestRate=1.5, monthlyPayment=50, loanLength=30)

const updatedAmount = client.updateLoan(newloan.loan.id, 1050) 
const updatedInterestRate = client.updateLoan(newloan.loan.id, null, 2) 
const updatedMonthlyPayment = client.updateLoan(newloan.loan.id, null, null, 60) 
const updatedloanLength= client.updateLoan(newloan.loan.id, null, null, null, 20) 
const updatedAllFields= client.updateLoan(newloan.loan.id, 1050, 2, 60, 20) 
```

## Documentation 
### createLoan

| Argument       |   Type        | required  |
| -------------  |:-------------:| -----:    |
| amount         | Float         | Yes       |
| interestRate   | Float         | Yes       |
| monthlyPayment | Float         | Yes       |
| loanLength     | Float         | Yes       |

<br/>

### deleteLoan

| Argument       |   Type        | required  |
| -------------  |:-------------:| -----:    |
| id             | int           | Yes       |

<br/>

### getLoan

| Argument       |   Type        | required  |
| -------------  |:-------------:| -----:    |
| id             | int           | Yes       |

<br/>

### getAllLoans

| Argument       |   Type        | required  |
| -------------  |:-------------:| -----:    |
| null           | null          | null      |

<br/>

### updateLoan

| Argument       |   Type        | required  |
| -------------  |:-------------:| -----:    |
| id             | int           | no        |
| amount         | float         | no        |
| interestRate   | float         | no        |
| monthlyPayment | float         | no        |
| loanLength     | int           | no        |

