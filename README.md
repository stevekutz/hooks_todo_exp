



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
3) ### React DevTools extension `hooks` configuration        
    - To utilize the `redux devtools extension` with 'hooks, add the following to `src/index.js`
        import `StateInspector`
        ~~~ js
        import { StateInspector } from 'reinspect';
        ~~~
        Define a `Wrapper` component and wrap the `App` component 
        ~~~ js
        const Wrapper = () => {
            return (
                <StateInspector>
                    <App/>
                </StateInspector>
            )
        }

        ReactDOM.render(<Wrapper />, document.getElementById('root'));
        ~~~        
    - The following `hooks` are setup to manage todos
        ~~~ js
        const [task, setTask] = useState('', "Task");
        const [todos, setTodos] = useState([], "Todos");
        const [priority, setPriority] = useState('', "Priority");
        const [updatedTask, setUpdatedTask] = useState('', "Updated Task");
        const [activeIndex, setActiveIndex] = useState('', 'Active Index');
        ~~~
4) ### Configuration of the `Select` component used by`react-select`   
    - The `react-select` component uses the following `hooks` to manage the dropdown values and reset to `Select...` after selection made
        ~~~ js
        const initial = {selectedKey: null};
        const [dropDownVal, setDropDownVal] = useState(initial, "DropDownValues")
        ~~~    
    - The `react-select` component uses s special `Select` commponent with the following `props`
        ~~~ js 
        <Select
            width = '50px'
            value = {options.filter(({value}) => value === dropDownVal.selectedKey)}
            onChange={({ value }) => updateDropDown(value)}
            options = {options}
        />
        ~~~   
    - The following handler manages the dropdown down value of the `react-select` component
        ~~~ js   
        const updateDropDown = value => {
        setDropDownVal({...dropDownVal, selectedKey: value});  
        }
        ~~~
5) ### Task management handlers for new todo item
    - A simple `change handler` is used for text input
        ~~~ js
        const handleChange = e => {
            const {value} =  e.target;    
            setTask(value); 
        }
        ~~~        
    - The `submit handler` prepares user input for the todo list. User input logic is verified before adding todo and the form is reset for the next todo.
        ~~~ js
        const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTask = {
            value: task,
            priority: dropDownVal.selectedKey,
            complete: false,
        }

        if(task !== '' && priority !== null) {
            setTodos([...todos, newTask]);
            setTask('');
            setDropDownVal(initial);
        }        
    } 
        ~~~
6) ### 