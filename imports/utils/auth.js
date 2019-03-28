import { Meteor } from 'meteor/meteor';
import { createBrowserHistory } from 'history';

const unauthanticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

export const history = createBrowserHistory();

export const onEnterPublicPage = () => {
    if (Meteor.userId()) {
        history.replace('/dashboard');
    }
};

export const onEnterPrivatePage = () => {
    if (!Meteor.userId()) {
        history.replace('/');
    }
};

export const onAuthChange = (isAuthenticated) => {
    const pathname = history.location.pathname;
    const isUnauthanticatedPage = unauthanticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    if (isUnauthanticatedPage && isAuthenticated) {
        history.replace('/dashboard');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        history.replace('/')
    }
};