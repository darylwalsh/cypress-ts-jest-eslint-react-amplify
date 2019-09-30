// tslint:disable
// this is an auto generated file. This will be overwritten

export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    text
    createdAt
    senderId
    channel {
      id
      name
      createdAt
      updatedAt
      creatorId
      messages {
        nextToken
      }
      channelList {
        id
      }
      channelChannelListId
    }
    messageChannelId
  }
}
`
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      createdAt
      senderId
      channel {
        id
        name
        createdAt
        updatedAt
        creatorId
        channelChannelListId
      }
      messageChannelId
    }
    nextToken
  }
}
`
export const getChannel = `query GetChannel($id: ID!) {
  getChannel(id: $id) {
    id
    name
    createdAt
    updatedAt
    creatorId
    messages {
      items {
        id
        text
        createdAt
        senderId
        messageChannelId
      }
      nextToken
    }
    channelList {
      id
      channels {
        nextToken
      }
    }
    channelChannelListId
  }
}
`
export const listChannels = `query ListChannels(
  $filter: ModelChannelFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      creatorId
      messages {
        nextToken
      }
      channelList {
        id
      }
      channelChannelListId
    }
    nextToken
  }
}
`
export const getChannelList = `query GetChannelList($id: ID!) {
  getChannelList(id: $id) {
    id
    channels {
      items {
        id
        name
        createdAt
        updatedAt
        creatorId
        channelChannelListId
      }
      nextToken
    }
  }
}
`
export const listChannelLists = `query ListChannelLists(
  $filter: ModelChannelListFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannelLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      channels {
        nextToken
      }
    }
    nextToken
  }
}
`
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    bio
    url
  }
}
`
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      bio
      url
    }
    nextToken
  }
}
`
