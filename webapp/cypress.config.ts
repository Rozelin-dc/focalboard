// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {defineConfig} from 'cypress'

export default defineConfig({
    chromeWebSecurity: false,
    env: {
        username: 'test-user',
        password: 'test-password',
        email: 'test@mail.com',
    },
    video: false,
    viewportWidth: 1600,
    viewportHeight: 1200,
    e2e: {

        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
        baseUrl: 'http://localhost',
    },
})
