import { createSelector } from "reselect";

/**
 * Direct selector to the login state domain
 */
const rawSelectUser = state => state.get("user");
const selectUser = () => createSelector(rawSelectUser, substate => substate);
/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

export default selectUser;
