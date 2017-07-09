import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import FeedsPage from './components/feeds_page';
import ExplorePage from './components/explore_page';
import HawkerGOPage from './components/hawkergo_page';
import ProfilePage from './components/profile_page';
import PostPage from './components/post_page';
import LoginPage from './components/login_page';
import RegisterPage from './components/register_page';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/explore" component={ExplorePage} />
                    <Route path="/hawkergo" component={HawkerGOPage} />
                    <Route path="/profile/:username" component={ProfilePage} />
                    <Route path="/post/:id" component={PostPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/" component={FeedsPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
, document.querySelector('.placeholderContainer'));
