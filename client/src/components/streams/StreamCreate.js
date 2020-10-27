import React from 'react';
import {createStream} from '../../actions';
import {connect} from 'react-redux';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component{
    onSubmit = (formValues)=> {
    this.props.createStream(formValues)
    };
    render(){
        return (
            <div>
                <h3>Creat a Stream</h3>
                <StreamForm onSubmit= {this.onSubmit}/>
            </div>
        );
    };
};
      
export default connect(null, {createStream})(StreamCreate)









// import React from 'react';
// import {Field, reduxForm} from 'redux-form';
// import {createStream} from '../../actions';
// import {connect} from 'react-redux';

// class StreamCreate extends React.Component{

//     renderError({error,touched}){
//         if(touched && error){
//             return(
//                 <div className = "ui error message">
//                     <div className = "header">{error}</div>
//                 </div>
//             )
//         };
//     };
//     renderInput = ({input,label, meta})=>{ 
//         const className = `field ${meta.error && meta.touched ? 'error': ''}`;
//         return (
//             <div className = {className}> 
//                 <label>{label}</label>
//                 <input{...input} autoComplete ="off"/>
//                 {this.renderError(meta)}
//             </div>
//         );
//     };

//     onSubmit = (formValues)=> {
//     this.props.createStream(formValues)
//     };

// render(){
//     return (
//         <form onSubmit = {this.props.handleSubmit(this.onSubmit)}
//               className = "ui form error">
//             <Field 
//                 name = "title" 
//                 component = {this.renderInput} 
//                 label = "Title Name"/>
//             <Field
//                 name = "description" 
//                 component = {this.renderInput} 
//                 label = "Descriptions "/>
//             <button className = "ui primary button">Submit</button>
//         </form>
//     )
// };
// };
//     const validate = (formValues)=>{
//         const errors = {};
//         if (!formValues.title){
//             errors.title = "You must Enter a Title.";
//         }if(!formValues.description){
//             errors.description = "You must Enter a Description.";
//         }
//         return errors;
//     };
    
//     const formWrapped = reduxForm({form: 'stremCreate',validate})(StreamCreate);
// export default connect(null, {createStream})(formWrapped)