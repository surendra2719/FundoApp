
import React, { Component } from 'react';
import { Card, Chip } from '@material-ui/core';
import Tools from '../tools';
import EditPin from '../pin'
import archives from '../../assets/archives.svg'
import {  MuiThemeProvider } from '@material-ui/core';
class ArchivedNavigator extends Component {
    render() {
        let cardsView = this.props.noteProps ? "listCards" : "Cards";
        console.log("archivenoteprops", this.props.noteProps);

        return ( this.props.archiveArray.length>0?
            <MuiThemeProvider >

            <div>
                <label className="archievedLabel" >ARCHIVED</label>
                <div className="CardsView">
                    {this.props.archiveArray.map((key) => {
                        return (
                            <Card id="" className={cardsView} style={{ backgroundColor: key.color, borderRadius: "10px", border: "1px solid #dadce0", marginLeft: "10px" }} >
                                <div id="displaycontentdiv1" >
                                    <div>
                                        {key.image !== "" ?
                                            <img style={{
                                                maxWidth: "100%",
                                                height: "auto"
                                            }} src={key.image} alt="cardImage"></img>
                                            :
                                            null}
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <b> {key.title}</b>
                                        <EditPin
                                            cardPropsToPin={this.props.pinNote}
                                            noteID={key._id}
                                            pinStatus={key.pinned}
                                        />
                                    </div>
                                    <div>
                                        {key.description}
                                    </div>
                                    {key.reminder ?
                                        <Chip id="chipcss"
                                            label={key.reminder}
                                            onDelete={() => this.props.reminder('', key._id)}
                                        />
                                        :
                                        null}
                                    <div id="displaycontentdiv">
                                        <Tools
                                            createNotePropsToTools={this.props.getColor}
                                            reminder={this.props.reminder}
                                            noteID={key._id}
                                            archiveStatus={key.archive}
                                            archiveNote={this.props.archiveNote}
                                            uploadImage={this.props.uploadImage}
                                            trashNote={this.props.trashNote}
                                        />
                                    </div>
                                </div >
                            </Card>)
                    })
                    }
                </div>
                        </div>
                        </MuiThemeProvider>
                        :
                        <MuiThemeProvider>
            <div>
            <img src={archives} alt=""  style={{width:"135px" ,opacity:0.3,marginLeft:"12px", marginTop:"135px"}} ></img>
            <div>
           
            </div>
             <h3 style={{opacity:0.3}} >  Your archived notes appear here</h3>
                </div>
                </MuiThemeProvider>
        )
    }
}
export default ArchivedNavigator;