module.exports = {
	UnknownErrorOccured: {
		code: 'UNKNOWN_ERROR_OCCURED_000',
		message: 'Some Unknown Error Occured. Please try again after some time.',
	},
	UserNotFound: {
		code: 'USER_NOT_FOUND_001',
		message: 'Incorrect Email or Password.'
	},
	UserExists: {
		code: 'USER_EXISTS_111',
		message: 'User found in the database.'
	},
	UserCreated: {
		code: 'USER_CREATED_011',
		message: 'User created successfully.'
	},
	ArticleCreated: {
		code: 'ARTICLE_CREATED_002',
		message: 'Article created successfully.'
	},
	ArticleDeleted: {
		code: 'ARTICLE_DELETED_049',
		message: 'Article deleted successfully.'
	},
	ArticleDeletedFail: {
		code: 'ARTICLE_NOT_FOUND_495',
		message: 'Nothing to delete.'
	},
	FoundAllArticles: {
		code: 'ARTICLES_FOUND_944',
		message: 'Found all articles.'
	},
	AuthTokenNotPresent: {
		code: 'AUTH_TOKEN_NOT_PRESENT_445',
		message: 'Auth token not present in the header.'
	},
	AuthTokenIllegal: {
		code: 'AUTH_TOKEN_IS_ILLEGAL',
		message: 'The Auth Token is illegal.'
	}
}