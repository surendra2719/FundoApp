import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField'
class checklist extends React.Component{
    constructor(props){
        super(props);
        this.state={

            checklists:true,
            view: false
        }    
        
    }
 handlechecklists=(event)=>{
     this.setState({view:!this.state.view})
 }
render()
{
    return( this.state.view||null?
        <div>
 <Divider variant="inset" style={{marginLeft:"5px"}} />
<span> 
{/* <img src={require('../assets/addLabels.svg')} alt=""></img> */}

               <Checkbox
               
              placeholder="Take a Note ...."
               checked={this.state.checkedA}
            //    onChange={this.handleChange1}
                value="check"
                /> 
                        <TextField   style={{marginTop:"9px"}}
                                    id="editLabelTextField"
                                    placeholder=""
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                             
                                    // onChange={this.handlechecklists}
                                />
                           </span>
                  <Divider variant="inset" style={{marginLeft:"5px"}} />

                         </div>:
                       <div>
                   <Divider variant="inset"  style={{marginLeft:"5px"}}/>
               <span> 
             

                              {/* <Checkbox
                              
                             placeholder="Take a Note ...."
                              checked={this.state.checkedA}
                           //    onChange={this.handleChange1}
                               value="check"
                               />  */}
                               <img src={require('../assets/addLabels.svg')} alt="" style={{marginRight:"32px"}}></img>

                                     <TextField
                                                   id="editLabelTextField"
                                                   placeholder="List Item"
                                                   InputProps={{
                                                       disableUnderline: true
                                                   }}
                                               
                                                   onChange={this.handlechecklists}
                                               />
               </span>
                              <Divider variant="inset" style={{marginLeft:"5px"}} />
               
               
                   
                       </div>

    )
}
}
export default checklist;