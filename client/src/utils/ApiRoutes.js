export const HOST = 'http://localhost:5000';

const AUTH_ROUTE = `${HOST}/api/auth`;

export const CHECK_USER_ROUTE = `${AUTH_ROUTE}/login`;
export const ONBOARD_USER_ROUTE = `${AUTH_ROUTE}/onBoardUser`