// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;
const app = express();

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    res.send(content);
})

app.listen(3000, () => {
    console.log('Listenning on port 3000')
})