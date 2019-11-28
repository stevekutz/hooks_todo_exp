



## Important Configuration details
1) ### Set up React app `yarn create react-app app`

2) ### Add Dependencies  
    `yarn add moment react-dom react-loader-spinner react-rainbow-components react-router-dom react-scripts react-spinners-kit reactn reactn-devtools semantic-ui-react styled-components redux reinspect redux-devtools-extension react-select`  

    - For `react-loaded-spinner`, you must also add `styled-components`
    - For `semantic-ui-react`, you must also 
        add to `index.html`  
        ~~~ html 
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm semantic-ui@2.4.2/dist/semantic.min.css" />
        ~~~
    - Inside of of `src/index.js`, you must add this as the first line in order to properly initialize `Global state`
        ~~~ js
        import { setGlobal } from 'reactn';
        ~~~
        Next, add the following to access `ReactN DevTools` the `Redux DevTools extension` 
        ~~~ js
        import addReactNDevTools from 'reactn-devtools';
        addReactNDevTools();
        ~~~