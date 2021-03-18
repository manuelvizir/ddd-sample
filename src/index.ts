import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { ProductManagementServiceImpl } from './application/impl/ProductManagementServiceImpl'
import { SKU } from './domain/model/product/SKU'
import { Variation } from './domain/model/product/Variation'
import { ProductRepositoryInMemory } from './infrastructure/persistence/inMemory/ProductRepositoryMemory'

const repository = new ProductRepositoryInMemory()

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    account(input: AccountInput): Account
  }

  type Mutation {
    create(input: CreateProduct): Product
  }

  type Product {
    id: String
    create: Product
  }

  input CreateProduct {
    id: String
  }

  input StatementInput {
    startDate: String!
    nextPageToken: String
  }

  input AccountInput {
    id: String!
  }

  type Account {
    balance: Balance
    statement(input: StatementInput): Statement
  }

  type Balance {
    amount: Int
  }

  type Transactions {
    id: String
    date: String
  }

  type Statement {
    transactions: [Transactions]
  }
`)

type Product = {
  id: SKU
  variations: Variation[]
  timestamp: {
    createdAt?: Date
    updatedAt?: Date
  }
}

type AccountInput = {
  input: {
    id: string
  }
}

type ProductInput = {
  input: {
    id: string
  }
}

type StatementInput = {
  input: {
    startDate: string
    nextPageToken: string
  }
}

// The root provides a resolver function for each API endpoint
const rootValue = {
  hello: () => {
    return 'Hello world!'
  },
  statement: ({ input: { startDate, nextPageToken } }: StatementInput) => {
    console.log({ startDate, nextPageToken })
    return {
      transactions: [
        {
          id: '123',
          date: '12312'
        }
      ]
    }
  },
  create: ({ input: { id } }: ProductInput): Product => {
    const sku = new SKU(id)
    new ProductManagementServiceImpl(repository).create(sku)
    const returned = repository.find(sku)
    return returned
  },
  account: ({ input: { id } }: AccountInput, ...args: any) => {
    console.log({ id, args })
  }
}

const app = express()
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
)

app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')
