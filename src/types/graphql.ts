import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Direction = {
   __typename?: 'Direction',
  sens: Scalars['String'],
  name: Scalars['String'],
  line: Line,
};

export type Line = {
   __typename?: 'Line',
  id: Scalars['String'],
  code: Scalars['String'],
  codeStif: Scalars['String'],
  name: Scalars['String'],
  image: Scalars['String'],
  reseau?: Maybe<Reseau>,
  stations?: Maybe<Array<Maybe<Station>>>,
};

export type Query = {
   __typename?: 'Query',
  lines: Array<Maybe<Line>>,
  stations: Array<Maybe<Station>>,
  directions: Array<Maybe<Direction>>,
};


export type QueryLinesArgs = {
  reseau?: Maybe<Scalars['String']>
};


export type QueryStationsArgs = {
  line: Scalars['String']
};


export type QueryDirectionsArgs = {
  line: Scalars['String']
};

export type Reseau = {
   __typename?: 'Reseau',
  id: Scalars['String'],
  code: Scalars['String'],
  name: Scalars['String'],
  image: Scalars['String'],
};

export type Station = {
   __typename?: 'Station',
  id: Scalars['String'],
  name: Scalars['String'],
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Line: ResolverTypeWrapper<Line>,
  Reseau: ResolverTypeWrapper<Reseau>,
  Station: ResolverTypeWrapper<Station>,
  Direction: ResolverTypeWrapper<Direction>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Line: Line,
  Reseau: Reseau,
  Station: Station,
  Direction: Direction,
  Boolean: Scalars['Boolean'],
};

export type DirectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Direction'] = ResolversParentTypes['Direction']> = {
  sens?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  line?: Resolver<ResolversTypes['Line'], ParentType, ContextType>,
};

export type LineResolvers<ContextType = any, ParentType extends ResolversParentTypes['Line'] = ResolversParentTypes['Line']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  codeStif?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  reseau?: Resolver<Maybe<ResolversTypes['Reseau']>, ParentType, ContextType>,
  stations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Station']>>>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  lines?: Resolver<Array<Maybe<ResolversTypes['Line']>>, ParentType, ContextType, QueryLinesArgs>,
  stations?: Resolver<Array<Maybe<ResolversTypes['Station']>>, ParentType, ContextType, RequireFields<QueryStationsArgs, 'line'>>,
  directions?: Resolver<Array<Maybe<ResolversTypes['Direction']>>, ParentType, ContextType, RequireFields<QueryDirectionsArgs, 'line'>>,
};

export type ReseauResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reseau'] = ResolversParentTypes['Reseau']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type StationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Station'] = ResolversParentTypes['Station']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Direction?: DirectionResolvers<ContextType>,
  Line?: LineResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Reseau?: ReseauResolvers<ContextType>,
  Station?: StationResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
