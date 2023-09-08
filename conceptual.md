### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  You can move around the website without the server reloading.  URL bar and back/forward button still work.

- What is a single page application?
  A site that exclusively uses client-side routing

- What are some differences between client side and server side routing?
  Server Side - clicking a link causes the browser to request page and replaces the entire DOM.  The Server decides what HTML to return based on URL requested.
  Client Side - Client-side routing handles mapping between URL bar and what page the user sees via browser rather than via server.  So requests do not need to be sent to the server for everything.

- What are two ways of handling redirects with React Router? When would you use each?
  1. When you know “I want to redirect right now”, use history.push
  2. Using the Redirect component inside your Switch for 404-like cases

- What are two different ways to handle page-not-found user experiences using React Router? 
  1. adding a <Route><NotFound /></Route> to the end of your routes in your switch
  2. adding a <Redirect to="/" /> to the end of your routes in your switch

- How do you grab URL parameters from within a component using React Router?
  Using the useParams hook.  Import useParams into your component.  Then select the param using "const { paramName } = useParams();"

- What is context in React? When would you use it?
  Context is universal data across your appications.  It is data accessible across all components.  You would use this instead of passsing something through props if something is created higher up in your app, but is needed further down, it is best to useContext instead of passing as props through all the components.

- Describe some differences between class-based components and function
  components in React.
  Class-based components is the older method. It requires a different syntax inside the class component to implement hooks and to store state. It requires much more code to declare initial state.  You also have to use this and bind keywords.
  function components are a simpler and more concise way of buidling react apps. Function components also allow you to use built in hooks.

- What are some of the problems that hooks were designed to solve?
  Less lines of code. No wrapper hell.  Not need for fancy patterns like render props or HOCs.