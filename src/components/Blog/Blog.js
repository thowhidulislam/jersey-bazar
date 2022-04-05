import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h3 className='blog-title'>What is Context API? What is the purpose of Context API?</h3>
                <p className='blog-text'>Context API allows you to transfer data across the component tree without having to manually pass it down at each level.The React Context API enables a React project to generate global variables that can be passed around. This is an alternative to "prop drilling," which involves passing props from grandparent to child to parent, and so on. All you need is React.createContext(). It will provide you a customer and a provider. Provider is a component that supplies the state to its children, as its name indicates. It will contain the "store" and serve as the parent of any components that may require it. A component that consumes and utilizes the state is known as a consumer.</p>
            </div>
            <hr className='horizontal-line'></hr>
            <div>
                <h3 className='blog-title'>What is Semantic Tags?</h3>
                <p className='blog-text'>A semantic element's main feature is that it clearly communicates its meaning to both the developer and the browser. These components define the content of the document. Search engines and other user devices can exploit semantic HTML tags to identify the importance and context of web pages. It is considerably simpler to understand pages that have semantic elements. It is more easily accessible. It provides a superior user experience.</p>
            </div>

        </div>
    );
};

export default Blog;