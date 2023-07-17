import React from 'react';
import {Component} from 'react';

class FormClass extends Component{
    state={
        Name:'',
        DeptName:'',
        Rate:' ',
        EmpData: []
    }
    changeHandle=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    clickHandle=()=>{
        let newObj={
            Name: this.state.Name,
            DeptName:this.state.DeptName,
            Rate:this.state.Rate
        }
        this.state.EmpData.push(newObj);
        this.setState({EmpData: this.state.EmpData})
        console.log(this.state.EmpData);
    }
    render()
    {
        return(
        <div >
           
         <form id='FormBox'>
             <label id='name1' htmlFor='name'>Name :</label>
            <input 
            id='name' 
            type='text' 
            placeholder='Enter Name'
            name='Name' 
            value={this.state.Name} onChange={this.changeHandle} required /> <br/>
            <label id='dept1' htmlFor='Dept'>Department :</label>
            <input 
            id='dept' 
            type='text' 
            placeholder='Enter Dept Name' name='DeptName' 
            value={this.state.DeptName} onChange={this.changeHandle} required />
            <br/>
            <label id='rate1' htmlFor='Rate'>Rating :</label>
            <input 
            id='rate' 
            type="number"
            min="1"
            max="5"
            placeholder='Enter Rating' 
            name='Rate' 
            value={this.state.Rate} onChange={this.changeHandle} required />
            <br/>
             <button type='button'  onClick={this.clickHandle}>Submit</button>
         </form>
      <div id='parentBox'>
         {this.state.EmpData.map((item,index)=>{
          return(
          <div id='contentbox' >
           <span id='content'> Name: {item.Name} 
           || Department : {item.DeptName} || Rate: {item.Rate}</span>
        </div>
    )
  })} 
  </div>     
     </div> 

  )
    }
}
 export default FormClass;