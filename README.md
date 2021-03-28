# LoansClient
This is a javascript livrary to access the webserver-api. This library enables
you to manage your loans such as creating, updating, deleting loans. 


## Example
```javascript
const client = new LoansClient()

const newLoan = client.createLoan(ammount=1000, interestRate=1.5, monthlyPayment=50, loanLength=30)

const updatedLoan = client.updateAmount(newloan.loan.id, 1050) 
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

### updateAmount

| Argument       |   Type        | required  |
| -------------  |:-------------:| -----:    |
| id             | int           | Yes       |
| newValue       | float         | Yes       |

<br/>

### updateInterestRate

| Argument       |   Type        | required  |
| -------------  |:-------------:| -----:    |
| id             | int           | Yes       |
| newValue       | float         | Yes       |

<br/>

### updateMonthlyPayment

| Argument       |   Type        | required  |
| -------------  |:-------------:| -----:    |
| id             | int           | Yes       |
| newValue       | float         | Yes       |

<br/>

### updateLoanLength

| Argument       |   Type        | required  |
| -------------  |:-------------:| -----:    |
| id             | int           | Yes       |
| newValue       | int           | Yes       |
