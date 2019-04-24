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
                                                 
                                                   onChange={this.handlechecklists}
                                               />
               </span>
                              <Divider variant="inset" style={{marginLeft:"5px"}} />
               
               
                   
                       </div>

    )
}
}
export default checklist;
// import React from "react";
// import Checkbox from '@material-ui/core/Checkbox';
// import Divider from '@material-ui/core/Divider';
// import TextField from '@material-ui/core/TextField'
// import {addChecklist} from '../services/note.services'
// class checklist extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//              checklist:"",
//              checklistID:"",
//             check:[],
//             view: false
//         }    
//         this.addChecklist = this.addChecklist.bind(this);

//     }
//  handlechecklists=(event)=>{
//      this.setState({view:!this.state.view})
//  }
//  addChecklist=(value)=> {
//     const checklist = {
//         checklist: value
//     }
//     addChecklist('/addchecklists', checklist)
//             .then(async (result) => {
//                 console.log("label result", result);
//                 this.setState({ checklist: "" })
//                 this.showchecklist(result.data.data);

//             })
//             .catch((error) => {
//                 alert(error)
//             });
//         }
//         handlechecklist(evt) {
//             this.setState({ checklist: evt.target.value })
//         }
//         showchecklist(value) {
//             console.log("value",value);
//               this.setState({
//                   check: [...this.state.check, value]
//               })
//           }
      
// render()
// {
//     return( this.state.view||null?
//         <div>
//  <Divider variant="inset" style={{marginLeft:"5px"}} />
// <span> 
// {/* <img src={require('../assets/addLabels.svg')} alt=""></img> */}

//                <Checkbox
               
//               placeholder="Take a Note ...."
           
//                 value="check"
//                 onClick={() => this.addChecklist(this.state.checklist)} 
//                 /> 
//                           <TextField   style={{marginTop:"9px"}}
//                                     id="editLabelTextField"
//                                     placeholder=""
//                                     value={this.state.checklist}
//                                     // onChange={this.handlechecklist}
                    
//                                     // onChange={this.handlechecklists}
//                                 />
//                            </span>
//                    <Divider variant="inset" style={{marginLeft:"5px"}} />

//                          </div>:
//                        <div>
//                     <Divider variant="inset"  style={{marginLeft:"5px"}}/>
//                 <span> 
             

//                               {/* <Checkbox
                              
//                              placeholder="Take a Note ...."
//                               checked={this.state.checkedA}
//                            //    onChange={this.handleChange1}
//                                value="check"
//                                />  */}
//                                <img src={require('../assets/addLabels.svg')} alt="" style={{marginRight:"32px"}}></img>

//                                      <TextField
//                                                    id="editLabelTextField"
//                                                    placeholder="List Item"
                                                 
//                                                    onChange={this.handlechecklists}
//                                                />
//                </span>
//                               <Divider variant="inset" style={{marginLeft:"5px"}} />
               
               
                   
//                        </div>

//     )
// }
// }
// // export default checklist;
// import React, { Component } from 'react';
// import { Dialog, TextField, Button, createMuiTheme, MuiThemeProvider, Divider, Tooltip } from '@material-ui/core';
// import { addLabel, deleteLabel, updateLabel } from '../services/note.services';
// import SnackBar from './snackbars';
// import Checkbox from '@material-ui/core/Checkbox';


// let displayErr = "";
// const theme = createMuiTheme({
//     overrides: {
//         MuiDialog: {
//             paperWidthSm: {
//                 width: "300px",
//                 borderBottomLeftRadius: "0px",
//                 borderTopLeftRadius: "0px",
//                 borderTopRightRadius: "0px",
//                 borderBottomRightRadius: "0px"
//             },
//         },
//         MuiDialogTitle: {
//             root: {
//                 padding: "0px"
//             }
//         },
//     },
//     typography: {
//         useNextVariants: true,
//     },
// })

// class EditLabel extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             label: "",
//             labelID: "",
//             editLabel: ""
//         }
//         this.openSnackBar = React.createRef();
//         this.handleLabel = this.handleLabel.bind(this);
//         this.addLabel = this.addLabel.bind(this);
//         this.changeLables = this.changeLables.bind(this);
//         this.handlEditLabel = this.handlEditLabel.bind(this);
//         this.deleteLabel = this.deleteLabel.bind(this);
//         this.editLabel = this.editLabel.bind(this);
//     }

//     addLabel(value) {
//         const label = {
//             label: value
//         }
//         if (label.label !== "") {
//             console.log("label in edit label-->",label);
            
//             addLabel('/addLabel', label)
//                 .then(async (result) => {
//                     console.log("label result", result);
//                     this.setState({ label: "" })
//                     this.props.showLabels(result.data.data);

//                 })
//                 .catch((error) => {
//                     alert(error)
//                 });
//         }
//         else {
//             displayErr = "cannot be empty";
//             console.log("SAGSGAS");
//             this.openSnackBar.current.handleClick();
//         }
//     }


//     deleteLabel(value) {
//         const labelId = {
//             labelID: value
//         }
//         console.log("label result", labelId);
//         deleteLabel(labelId)
//             .then(async (result) => {
//                 if (result.data.status) {
//                     console.log("label result", result);
//                     let newArray = this.props.label
//                     for (let i = 0; i < newArray.length; i++) {
//                         if (newArray[i]._id === labelId.labelID) {
//                             newArray.splice(i, 1);
//                             this.props.newLabels(newArray);
//                             this.setState({ labelID: "" })
//                         }
//                     }
//                 }
//                 else {
//                     console.log("error");

//                 }
//             })
//             .catch((error) => {
//                 displayErr = "Internal Server Error";
//                 this.openSnackBar.current.handleClick();

//             });
//     }

//     editLabel(Label, id) {
//         const editLabel = {
//             editLabel: Label,
//             labelID: id
//         }
//         updateLabel(editLabel)
//             .then((result) => {

//                 console.log("success", result.data, this.props.label);

//                 let newArray = this.props.label;
//                 for (let i = 0; i < newArray.length; i++) {
//                     if (newArray[i]._id === editLabel.labelID) {
//                         newArray[i].label = result.data.data.editLabel;
//                         this.props.newLabels(newArray);
//                         this.setState({ labelID: "" })
//                     }
//                 }

//             })
//             .catch((error) => {
//                 displayErr = error.message;
//                 console.log("message", displayErr);
//                 this.openSnackBar.current.handleClick();

//             });
//     }


//     createLabel() {
//         this.setState({ labelID: "" })
//     }
//     handlEditLabel(evt) {
//         this.setState({ editLabel: evt.target.value });
//     }
//     changeLables=(id)=> {
//         this.setState({ labelID: id })
//         console.log("cscxzscsaddasasa");
        
//     }

//     handleLabel(evt) {
//         this.setState({ label: evt.target.value })
//     }

//     handleToggle() {
//         this.props.labelToggle()
//     }
//     render() {
//         return (
//             <MuiThemeProvider theme={theme}>
//                 <div>
//                     {/* <Dialog */}
//                         {/* open={this.props.drawerPropstoEditLabels}

//                     > */} 
//                         <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
//                             {/* <div style={{ color: "#3c4043", fontWeight: "500" }}>Edit Labels</div> */}

//                             <div style={{ display: "flex", justifyContent: "space-between", height: "45px" }} onClick={() => this.createLabel()}>


//                                 {/* <img src={require('../assets/addLabels.svg')}
//                                     alt="add label plus icon" /> */}
//     <Tooltip title="Create Label">
//                                     {/* <img src={require('../assets/baseline.svg')}
//                                         alt="label tick icon" */}
                                        
//                                         <  Checkbox
//                                         onClick={() => this.addLabel(this.state.label)} />
//                                 </Tooltip>

//                                 <TextField
//                                     id="editLabelTextField"
//                                     placeholder="Create New Label"
//                                     InputProps={{
//                                         disableUnderline: true
//                                     }}
//                                     value={this.state.label}
//                                     onChange={this.handleLabel}
//                                 />
                            

//                             </div>
//                              {/* {this.props.label.map((key) =>
//                                 this.state.labelID !== key._id ?
//                                     <div onClick={() => this.changeLables(key._id)} key={key._id}
//                                         style={{ display: "flex", justifyContent: "space-between", height: "45px", alignItems: "center" }}>
//                                         <div style={{ display: "flex", flexDirection: "row" }}>
//                                             <div><img src={require('../assets/fILLEDlABEL.svg')} alt="filled label icon" /></div>
//                                             <div style={{ width: "182px", margin: "0px 15px 0px 15px", fontWeight: "500" }}>{key.label}</div>
//                                          </div>
//                                          <div><img src={require('../assets/labelIcon.svg')} alt="edit label icon" /></div>
//                                      </div>
//                                      :
//                                      <div onClick={() => this.changeLables(key._id)}
//                                          style={{ display: "flex", justifyContent: "space-between", height: "45px", alignItems: "center" }}>
//                                          <div style={{ display: "flex", flexDirection: "row" }}>
//                                              <img src={require('../assets/bin.svg')}
//                                                  alt="delete label icon"
//                                                  onClick={() => this.deleteLabel(key._id)} />
//                                              <div style={{ width: "182px", margin: "0px 15px 0px 15px", fontWeight: "500" }}>                                                 <TextField                                                     defaultValue={key.label}
//                                                      // value={this.state.editLabel}
//                                                    onChange={this.handlEditLabel}
//                                                 />

//                                             </div>
//                                          </div>
//                                         <div><img src={require('../assets/baseline.svg')}
//                                              alt="label tick icon"
//                                             onClick={() => this.editLabel(this.state.editLabel, key._id)} /></div>                                   </div>

//                             )}  */}

//                         </div>

//                         <Divider />

//                         <div style={{ padding: "10px", display: "flex", flexDirection: "row-reverse" }} >
                          
//                         </div>
//                         <SnackBar ref={this.openSnackBar} error={displayErr} />

//                     {/* </Dialog> */}
//                 </div>
//             </MuiThemeProvider>
//         )

//     }
// }
// export default EditLabel;
import React from "react";
import '../App.css';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField'



 export default class checklists extends React.Component {
  constructor() {
    super();
    this.state = {
      check: "",
      checklists: [{ check: "" }]
    };
  }

  handleNameChange = evt => {
    this.setState({ check: evt.target.value });
  };

  handlechecklistchange = idx => evt => {
    const checkk = this.state.checklists.map((checkkk, sidx) => {
      if (idx !== sidx) return checkkk;
      return { ...checkkk, check: evt.target.value };
    });

    this.setState({ checklists: checkk });
  };

  handleSubmit = evt => {
    const { check, checklists } = this.state;
    alert(`checklist: ${check} with ${checklists.length} checklits`);
  };

  handleAddchecklist = () => {
    this.setState({
      checklists: this.state.checklists.concat([{ check: "" }])
    });
  };

  handleRemovechecklist = idx => () => {
    this.setState({
      checklists: this.state.checklists.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
        
      <div onSubmit={this.handleSubmit}>
        {/* <input
          type="text"
          placeholder="Company name, e.g. Magic Everywhere LLC"
          value={this.state.name}
          onChange={this.handleNameChange}
        /> */}
        {this.state.checklists.map((checkk, idx) => (
        
          <div className="shareholder">
               < Divider/>
             < Checkbox
      
      //   onClick={this.handleAddShareholder}
        className="small"
            />
             < TextField
              type="text"
            //   placeholder={`Shareholder #${idx + 1} name`}
              value={checkk.check}
              onChange={this.handlechecklistchange(idx)}
              onCcha={this.handleAddchecklist}
            
           />
          
               {/* <img src={require('../assets/bin.svg')}> </img> */}
                         <img src={require('../assets/baseline-close-24px.svg')}
                                                alt="delete label icon"
                                                onClick={this.handleRemovechecklist(idx)}
                                                />
     
                 < Divider/>
          </div>
        ))}
        <div>
     
          
     
        </div>
      </div>
    );
  }
}

