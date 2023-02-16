//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  id: Scalars['ID'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  formations: Formations;
  formationsConnection: FormationsConnection;
  articles: Articles;
  articlesConnection: ArticlesConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryFormationsArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryFormationsConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FormationsFilter>;
};


export type QueryArticlesArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryArticlesConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ArticlesFilter>;
};

export type DocumentFilter = {
  formations?: InputMaybe<FormationsFilter>;
  articles?: InputMaybe<ArticlesFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<DocumentFilter>;
};

export type DocumentNode = Formations | Articles;

export type Formations = Node & Document & {
  __typename?: 'Formations';
  body?: Maybe<Scalars['JSON']>;
  title: Scalars['String'];
  goals?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  theme: Scalars['String'];
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FormationsFilter = {
  body?: InputMaybe<RichTextFilter>;
  title?: InputMaybe<StringFilter>;
  goals?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  category?: InputMaybe<StringFilter>;
  theme?: InputMaybe<StringFilter>;
};

export type FormationsConnectionEdges = {
  __typename?: 'FormationsConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Formations>;
};

export type FormationsConnection = Connection & {
  __typename?: 'FormationsConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<FormationsConnectionEdges>>>;
};

export type Articles = Node & Document & {
  __typename?: 'Articles';
  body?: Maybe<Scalars['JSON']>;
  title: Scalars['String'];
  date: Scalars['String'];
  description: Scalars['String'];
  categories?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticlesFilter = {
  body?: InputMaybe<RichTextFilter>;
  title?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  categories?: InputMaybe<StringFilter>;
};

export type ArticlesConnectionEdges = {
  __typename?: 'ArticlesConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Articles>;
};

export type ArticlesConnection = Connection & {
  __typename?: 'ArticlesConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<ArticlesConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateFormations: Formations;
  createFormations: Formations;
  updateArticles: Articles;
  createArticles: Articles;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateFormationsArgs = {
  relativePath: Scalars['String'];
  params: FormationsMutation;
};


export type MutationCreateFormationsArgs = {
  relativePath: Scalars['String'];
  params: FormationsMutation;
};


export type MutationUpdateArticlesArgs = {
  relativePath: Scalars['String'];
  params: ArticlesMutation;
};


export type MutationCreateArticlesArgs = {
  relativePath: Scalars['String'];
  params: ArticlesMutation;
};

export type DocumentUpdateMutation = {
  formations?: InputMaybe<FormationsMutation>;
  articles?: InputMaybe<ArticlesMutation>;
  relativePath?: InputMaybe<Scalars['String']>;
};

export type DocumentMutation = {
  formations?: InputMaybe<FormationsMutation>;
  articles?: InputMaybe<ArticlesMutation>;
};

export type FormationsMutation = {
  body?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  goals?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
};

export type ArticlesMutation = {
  body?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Scalars['String']>;
};

export type FormationsPartsFragment = { __typename?: 'Formations', body?: any | null, title: string, goals?: string | null, description?: string | null, category?: string | null, theme: string };

export type ArticlesPartsFragment = { __typename?: 'Articles', body?: any | null, title: string, date: string, description: string, categories?: string | null };

export type FormationsQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type FormationsQuery = { __typename?: 'Query', formations: { __typename?: 'Formations', id: string, body?: any | null, title: string, goals?: string | null, description?: string | null, category?: string | null, theme: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type FormationsConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<FormationsFilter>;
}>;


export type FormationsConnectionQuery = { __typename?: 'Query', formationsConnection: { __typename?: 'FormationsConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'FormationsConnectionEdges', cursor: string, node?: { __typename?: 'Formations', id: string, body?: any | null, title: string, goals?: string | null, description?: string | null, category?: string | null, theme: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type ArticlesQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type ArticlesQuery = { __typename?: 'Query', articles: { __typename?: 'Articles', id: string, body?: any | null, title: string, date: string, description: string, categories?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type ArticlesConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ArticlesFilter>;
}>;


export type ArticlesConnectionQuery = { __typename?: 'Query', articlesConnection: { __typename?: 'ArticlesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'ArticlesConnectionEdges', cursor: string, node?: { __typename?: 'Articles', id: string, body?: any | null, title: string, date: string, description: string, categories?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export const FormationsPartsFragmentDoc = gql`
    fragment FormationsParts on Formations {
  body
  title
  goals
  description
  category
  theme
}
    `;
export const ArticlesPartsFragmentDoc = gql`
    fragment ArticlesParts on Articles {
  body
  title
  date
  description
  categories
}
    `;
export const FormationsDocument = gql`
    query formations($relativePath: String!) {
  formations(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FormationsParts
  }
}
    ${FormationsPartsFragmentDoc}`;
export const FormationsConnectionDocument = gql`
    query formationsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FormationsFilter) {
  formationsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FormationsParts
      }
    }
  }
}
    ${FormationsPartsFragmentDoc}`;
export const ArticlesDocument = gql`
    query articles($relativePath: String!) {
  articles(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ArticlesParts
  }
}
    ${ArticlesPartsFragmentDoc}`;
export const ArticlesConnectionDocument = gql`
    query articlesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ArticlesFilter) {
  articlesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ArticlesParts
      }
    }
  }
}
    ${ArticlesPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      formations(variables: FormationsQueryVariables, options?: C): Promise<{data: FormationsQuery, variables: FormationsQueryVariables, query: string}> {
        return requester<{data: FormationsQuery, variables: FormationsQueryVariables, query: string}, FormationsQueryVariables>(FormationsDocument, variables, options);
      },
    formationsConnection(variables?: FormationsConnectionQueryVariables, options?: C): Promise<{data: FormationsConnectionQuery, variables: FormationsConnectionQueryVariables, query: string}> {
        return requester<{data: FormationsConnectionQuery, variables: FormationsConnectionQueryVariables, query: string}, FormationsConnectionQueryVariables>(FormationsConnectionDocument, variables, options);
      },
    articles(variables: ArticlesQueryVariables, options?: C): Promise<{data: ArticlesQuery, variables: ArticlesQueryVariables, query: string}> {
        return requester<{data: ArticlesQuery, variables: ArticlesQueryVariables, query: string}, ArticlesQueryVariables>(ArticlesDocument, variables, options);
      },
    articlesConnection(variables?: ArticlesConnectionQueryVariables, options?: C): Promise<{data: ArticlesConnectionQuery, variables: ArticlesConnectionQueryVariables, query: string}> {
        return requester<{data: ArticlesConnectionQuery, variables: ArticlesConnectionQueryVariables, query: string}, ArticlesConnectionQueryVariables>(ArticlesConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars,
    });

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "http://localhost:4001/graphql", queries }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

  