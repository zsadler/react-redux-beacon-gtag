import { LOCATION_CHANGE } from 'react-router-redux';
import { createMiddleware } from 'redux-beacon';
import GoogleAnalytics, { trackPageView, trackEvent } from '@redux-beacon/google-analytics';
import logger from '@redux-beacon/logger';

const pageView = trackPageView((action, prevState, nextState) => {
    return {
        page: action.payload,
        title: 'test tile'
    }
});

const event = trackEvent((action, prevState, nextState) => {
    console.log('******************* event tracked!', action.type, action.payload);
    return {
        category: action.payload.name,
        action: action.type,
        value: action.payload.price
    }
});


const eventsMap = {
    [LOCATION_CHANGE]: pageView,
    ITEM_ADDED_TO_CART: event,
    NAME_ENTERED: event,
    EMAIL_ENTERED: event,
    PHONE_NUMBER_ENTERED: event,
    CREDIT_CARD_NUMBER_ENTERED: event
};

export const gaMiddleware = createMiddleware(eventsMap, GoogleAnalytics(), { logger });