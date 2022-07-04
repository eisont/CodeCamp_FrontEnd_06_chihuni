// 참고 사이트 === https://typeorm.io/
console.log('타입스크립트를 실행했어요!!!');

import { DataSource } from 'typeorm';
import { Board } from './Board.postgres';
// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server';

// 1. 타입
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String  연습용 example
    createBoard(createBoardInput: CreateBoardInput!): String # - 실제 사용(backend06)
  }
`;

// 2. api
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기

      const result = await Board.find();
      // 게시물을 조회하겠습니다.
      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 등록하기

      await Board.insert({
        ...args.createBoardInput,
        // 위 코드를 해석하자면 밑에 코드처럼 됩니다.
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      // 수정하면?
      // Board.update({ writer: "철수"}, { title: '제목2'});
      // 삭제하면?
      // Board.delete({ writer: "철수" });
      // Board.update({ writer: "철수"}, { deletedAt: new Date()});

      return '게시물을 등록했습니다!!!';
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // cors: true
  // 차단 여부를 여기서 결정합니다.
  // cors: "http://naver.com"
  // 네이버(원하는 사이트)만 풀어줄수 있습니다.
});

const AppDataSource = new DataSource({
  type: 'postgres',
  host: '34.64.124.189',
  port: 5015,
  username: 'postgres',
  password: 'postgres2021',
  database: 'postgres',
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('연결성공');

    // 백엔드 api를 리슨(24동안 접속가능하게 만듬)
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log('연결실패');
  });
