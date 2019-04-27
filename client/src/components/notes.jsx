/*****************************************************************************************
 * @purpose : it will provides note component
 * @author  : Surendra      
 * @file    : notes.jsx
 * @overview: These file may contain note component and its functions
 * @version : 1.0
 * @since   : 23/02/2019 
************************************************************************************************/
import React from 'react';
import { Input, Card, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { Button } from '@material-ui/core';
import Tools from '../components/tools';
import Pin from '../components/pin'
import Image from '../components/image'
import { createNote } from '../services/note.services'
import { Chip, } from '@material-ui/core';
// import Checklist from '../components/checklists'
import {getChecklist} from '../services/note.services'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Lables from "../assets/labelIcon.svg"
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';

class CreateNotescard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openNote: false,
            title: "",
            reminder: "",
            description: "",
            image: "",
            pinned: false,
            color: "rgb(255, 255, 255)",
            trash: false,
            archive: false,
            newNote: {},
            notes: [],
            label:[],
            checkList:[],
            openCheckList: false,

           
        }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleArchive = this.handleArchive.bind(this);
        this.handleReminder = this.handleReminder.bind(this);
        this.handlePinned = this.handlePinned.bind(this);
        this.handleImage = this.handleImage.bind(this);


    }
    
    handleTitle(event) {
        try { this.setState({ title: event.target.value }) }
        catch (err) {
            console.log(err, "error in handle titte in notes");

        }
    }

    handleDescription(event) {
        try { this.setState({ description: event.target.value }) }
        catch (err) {
            console.log(err, "error in handle descrption in notes");

        }
    }


    handlePinned(value) {
        try {
            this.setState({ pinned: value });

        }
        catch (err) {
            console.log("error in handle pinned in notes");

        }
    }
    handleColor(value) {
        try {
            this.setState({ color: value });
        }
        catch (err) {
            console.log("error in handle color in create note");

        }
    }
    handleImage(value) {
        try {
            this.setState({ image: value });
        } catch (err) {
            console.log("error at handleImage in createNotes");
        }
    }
    handleReminder(value) {
        try {
            this.setState({ reminder: value })
        }
        catch (err) {
            console.log("error in handle remiander in create note");

        }
    }

    handleArchive(value) {
        this.setState({ archive: value });
    }
    handleListItem = e => {
        try {
            if (e.key === 'Enter') {
                this.handleChangeList(this.state.listItem);
                this.setState({
                    listItem: ''
                })
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    handleToggle() {
        this.setState({ openNote: !this.state.openNote , openCheckList: !this.state.openCheckList});
        console.log("pinned", this.state);

        if (this.state.title !== '' || this.state.description !== '' || this.state.color !== "rgb(255, 255, 255)") {
            const note = {
                userId: localStorage.getItem('userId'),
                title: this.state.title,
                description: this.state.description,
                reminder: this.state.reminder,
                color: this.state.color,
                image: this.state.image,
                archive: this.state.archive,
                pinned: this.state.pinned,
                trash: this.state.trash,
                checklist: JSON.stringify(this.state.checkList),

            }

            createNote(note)
                .then((result) => 
                {

                    console.log("result in the result==>", result);

                    this.setState({
                        newNote: result.data.result
                    })
                    console.log("NOTES ARRY", this.state.newNote);

                    this.props.getNewNote(this.state.newNote)
                })

                .catch((error) => {
                    console.log(error);
                })

            this.setState({
                title: "",
                description: "",
                reminder: "",
                color: "rgb(255, 255, 255)",
                image: "",
                checkList: [],

                archive: false,
                pinned: false,
                trash: false,
            })

        }

    }
    reminderchip = () => {
        this.setState({ reminder: "" })
        console.log("sssssssssssssssssssssssssssssssssss", this.state.reminder);


    }
  showchechecklists(value) {
    // let labelArr=this.state.label;
    // if(value!==undefined){
    //     labelArr.push(value);
    //     this.setState({label:labelArr});
    // }
    this.setState({
        checks: [...this.state.Checklist, value]
    })
  }

  componentDidMount() {
    getChecklist()
        .then((result) => {
            console.log("result",result);
            
            this.setState({
                Checklist: result
            })
        })
        .catch((error) => {
            console.log(error)
        });
  }
  handleChangeList = (val) => {
    try {
        const data = {
            itemName: val,
            status: 'open'
        }
        this.state.checkList.push(data);
        this.setState({
            checkList: this.state.checkList
        })
    } catch (error) {
        console.log(error.message);
    }
}
handleClose = e => {
    try {
        this.setState({ openNote: false, openCheckList: false });
    } catch (error) {
        console.log("error at handleClose in createNotes");
    }
}
handleTickBox = (name) => {
    try {
        console.log(name);
        let newList = this.state.checkList;
        for (let list = 0; list < newList.length; list++) {
            if (newList[list].itemName === name) {
                if (newList[list].status === 'open') {
                    newList[list].status = 'close'
                    this.setState({
                        checkList: newList
                    })
                }
                else {
                    console.log(newList[list].status);
                    newList[list].status = 'open'
                    this.setState({
                        checkList: newList
                    })
                }
            }
        }
        console.log(this.state.checkList);
    } catch (error) {
        console.log(error.message);

    }
}
        deleteList = (val) => {
            try {
                let index = this.state.checkList.indexOf(val);
                this.state.checkList.splice(index, 1);
                this.setState({
                    checkList: this.state.checkList
                })
            } catch (error) {
                console.log(error.message);
            }
        }
    render() {
  
        let displaychecks = this.state.checkList;
        if (this.state.label !== "") {
            displaychecks = this.state.checkList.map((key) =>
                <MenuItem style={{ display: "flex", flexDirection: "row",color: "#202124",fontFamily: "Google Sans, Roboto, Arial, sans-serif", fontSize: ".875rem" }} >

                    <img src={Lables} alt="label icon" style={{ marginRight: "50px" }} />

                    <div style={{  marginRight: "50px",  marginBottom: "10px", marginTop: "10px",fontWeight:"550" }}>
                        {key.checkList}
                    </div>
                </MenuItem>
            )
        }

        // const { classes } = this.props;
        const {checkList}=this.state
        return (!this.state.openNote ?
                //  !this.state.openCheckList?

            <MuiThemeProvider theme={theme}>
                <div className="createNoteParent">
                    <Card className="createNote">
                        <div className="staticCreateNote">
                            <Input
                                id="noteInputBase"
                                multiline
                                disableUnderline={true}
                                placeholder="Take a Note ...."
                                readOnly={true}
                                onClick={this.handleToggle}
                                value=""
                            />
                               <Tooltip title="New list" id="checkListIcon" onClick={this.handleCheckList}>
                                            <img src={require('../assets/images/check_box.svg')} alt="check list" style={{ opacity: "0.5", margin: '2%', cursor: 'pointer' }} />
                                        </Tooltip>
                            <Image />
                        </div>
                    </Card>
                </div>
            </MuiThemeProvider>
            :
            <MuiThemeProvider theme={theme}>
                <div className="createNoteParent"
                >
                    <Card id="createNote1" style={{ backgroundColor: this.state.color }}>
                        <div>
                            {this.state.image ?
                                <img style={{ maxWidth: "100%", height: "auto" }}
                                    src={this.state.image} alt="cardImage">
                                </img>
                                :
                                null
                            }
                        </div>
                        <div id="createNotePinIcon">
                            <Input
                                id="titleInput"
                                multiline
                                disableUnderline={true}
                                placeholder="Title"
                                value={this.state.title}
                                onChange={this.handleTitle}
                            /> <div >
                                <Pin
                                    pinStatus={this.state.pinned}
                                    cardPropsToPin={this.handlePinned}
                                />

                            </div>

                        </div>
                        {checkList ?
                                        <div>
                                            {checkList.map((value, i) => (
                                                <div key={i}>
                                                    {value.status === 'open' ?
                                                        <div id=""  style={{display:"inline-flex"}}    >
                                                            <div><img alt="" src={require('../assets/images/checkBoxBlank.svg')}
                                        
                                                                onClick={() => { this.handleTickBox(value.itemName) }}
                                                                style={{ opacity: '0.75', cursor: 'pointer', width: '20px', height: '20px' }} /></div>
                                                            <div id="dispCheckList"  >{value.itemName}</div>
                                                            <div onClick={() => { this.deleteList(value) }}>
                                                                <img alt="" src={require('../assets/images/clear.svg')} style={{ opacity: '0.5', width: '20px', height: '20px', cursor: 'pointer' }} />
                                                            </div>
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                </div>
                                            ))}
                                        </div>
                                        : null
                                    }
                                    <Divider />
                                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8px', marginTop: '0px', marginBottom: '0px' }}>
                                        <div><img alt="" src={require('../assets/images/add.svg')} style={{ opacity: '0.5', width: '20px', height: '20px', marginTop: '4px', marginRight: '10px' }} /></div>
                                        <Input
                                            className="AddCheckList"
                                            disableUnderline={true}
                                            name="checkList"
                                            type="text"
                                            placeholder="List item"
                                            onKeyPress={this.handleListItem}
                                            value={this.state.listItem}
                                            onChange={(event) => { this.setState({ listItem: event.target.value }) }}
                                        />
                                    </div>
                                    <Divider />
                                    {checkList ?
                                        <div>
                                            {checkList.map((v, i) => (
                                                <div key={i}>
                                                    {v.status === 'close' ?
                                                        <div>
                                                            {/* <div>{} Completed item</div> */}
                                                            <div id="check">
                                                                <div><img alt="" src={require('../assets/images/checkBoxTick.svg')}
                                                                    onClick={() => { this.handleTickBox(v.itemName) }}
                                                                    style={{ opacity: '0.5', cursor: 'pointer', width: '20px', height: '20px' }} /></div>
                                                                <div id="dispCheckList" style={{textDecoration:'line-through',opacity:'0.5'}}>{v.itemName}</div>
                                                                <div onClick={() => { this.deleteList(v) }}>
                                                                    <img alt="" src={require('../assets/images/clear.svg')} style={{ opacity: '0.5', width: '20px', height: '20px', cursor: 'pointer' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                </div>
                                            ))}
                                        </div>
                                        : null
                                    }
                        <Input
                            id="noteInputBase"
                            multiline
                            disableUnderline={true}
                            placeholder="Take a Note ...."
                            value={this.state.description}
                            onChange={this.handleDescription}
                        />
  
                         <div>
                         {/* < Checklist/> */}
                                       
                            </div>
       
                        {this.state.reminder ?
                            <Chip id="chipcss"
                                label={this.state.reminder}
                                onDelete={() => this.reminderchip("")}
                            />
                            :
                            null}
                        <div className="cardToolsClose" >
                            <Tools
                                reminder={this.handleReminder}
                                createNotePropsToTools={this.handleColor}
                                archiveNote={this.handleArchive}
                                archiveStatus={this.state.archive}
                                uploadImage={this.handleImage}
                            />
                            <Button onClick={this.handleToggle}>Close</Button>

                        </div>
                    </Card>
                </div>
            </MuiThemeProvider>
        //     :     <MuiThemeProvider theme={theme}>
        //     <div className="createNoteParent"
        //     >
        //         <Card id="createNote1" style={{ backgroundColor: this.state.color }}>
        //             <div>
        //                 {this.state.image ?
        //                     <img style={{ maxWidth: "100%", height: "auto" }}
        //                         src={this.state.image} alt="cardImage">
        //                     </img>
        //                     :
        //                     null
        //                 }
        //             </div>
        //             <div id="createNotePinIcon">
        //                 <Input
        //                     id="titleInput"
        //                     multiline
        //                     disableUnderline={true}
        //                     placeholder="Title"
        //                     value={this.state.title}
        //                     onChange={this.handleTitle}
        //                 /> <div >
        //                     <Pin
        //                         pinStatus={this.state.pinned}
        //                         cardPropsToPin={this.handlePinned}
        //                     />

        //                 </div>

        //             </div>
        //             <Input
        //                 id="noteInputBase"
        //                 multiline
        //                 disableUnderline={true}
        //                 placeholder="Take a Note ...."
        //                 value={this.state.description}
        //                 onChange={this.handleDescription}
        //             />

        //              <div>
        //              {/* < Checklist/> */}
                                   
        //                 </div>
   
        //             {this.state.reminder ?
        //                 <Chip id="chipcss"
        //                     label={this.state.reminder}
        //                     onDelete={() => this.reminderchip("")}
        //                 />
        //                 :
        //                 null}
        //             <div className="cardToolsClose" >
        //                 <Tools
        //                     reminder={this.handleReminder}
        //                     createNotePropsToTools={this.handleColor}
        //                     archiveNote={this.handleArchive}
        //                     archiveStatus={this.state.archive}
        //                     uploadImage={this.handleImage}
        //                 />
        //                 <Button onClick={this.handleToggle}>Close</Button>

        //             </div>
        //         </Card>
        //     </div>
        // </MuiThemeProvider>
        )
    }


}

export default CreateNotescard;
const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            rounded: {
                borderRadius: "10px",
            },
            elevation1: {
                boxShadow: "0 3px 5px rgba(0,0,0,0.20)"
            }
        },
    },
    typography: {
        useNextVariants: true,
    },

})
