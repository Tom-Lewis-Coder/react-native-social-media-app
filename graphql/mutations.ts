/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      image
      name
      tweets {
        id
        content
        image
        userID
        user {
          id
          username
          email
          image
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      image
      name
      tweets {
        id
        content
        image
        userID
        user {
          id
          username
          email
          image
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      image
      name
      tweets {
        id
        content
        image
        userID
        user {
          id
          username
          email
          image
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTweet = /* GraphQL */ `
  mutation CreateTweet(
    $input: CreateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    createTweet(input: $input, condition: $condition) {
      id
      content
      image
      userID
      user {
        id
        username
        email
        image
        name
        tweets {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTweet = /* GraphQL */ `
  mutation UpdateTweet(
    $input: UpdateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    updateTweet(input: $input, condition: $condition) {
      id
      content
      image
      userID
      user {
        id
        username
        email
        image
        name
        tweets {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet(
    $input: DeleteTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    deleteTweet(input: $input, condition: $condition) {
      id
      content
      image
      userID
      user {
        id
        username
        email
        image
        name
        tweets {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
