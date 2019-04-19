import React, { Component } from 'react';
// import { Card} from '@material-ui/core';
import TrashOptions from '../trashoptions';
import { Card, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Trash from "../../assets/bin.svg"
const theme = createMuiTheme({
    overrides: {
        MuiChip: {
            root: {
                fontSize: 10,
                marginTop: 15,
                height: 20,
                backgroundColor: "rgba(0, 0, 0, 0.10)",
                padding: 2
            },
            deleteIcon: {
                width: 20,
                height: 20
            }
        },

    },
    typography: {
        useNextVariants: true,
    },
})

class TrashNavigator extends Component {
    render() {

        let cardsView = this.props.noteProps ? "listCards" : "cards";
        console.log("trashnoteprops", this.props.noteProps);

        return ( this.props.trashArray.length>0?
            
            <MuiThemeProvider theme={theme} >
      
                <div>
                    <label className="archievedLabel" >TRASHED</label>
                    <div className="CardsView" style={{ marginBottom: "30px" }}>
                        {this.props.trashArray.map((key) => {
                            return (
                                <Card className={cardsView} style={{ backgroundColor: key.color, borderRadius: "10px", border: "1px solid #dadce0", marginLeft: "10px" }} >
                                    <div>
                                        <div>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <b>{key.title}</b>
                                        </div>
                                        <div>
                                            {key.description}
                                        </div>
                                    </div>
                                    <div className="noteicons">
                                        <TrashOptions createNotePropsToTools={this.props.getColor}

                                            restore={this.props.trashNote}
                                            noteID={key._id}
                                            deleteNote={this.props.deleteNote}
                                        />
                                    </div>
                                </Card>)
                        })
                        }
                    </div>
                </div>
            </MuiThemeProvider>
            
            : <MuiThemeProvider > <div>
              <  img src={Trash} alt="" style={{width:"135px" ,opacity:0.3,marginLeft:"12px", marginTop:"135px"}}></img>
              <div >
           <h3 style={{opacity:0.3}}> No Notes in Recycle Bin</h3>
           </div>
           </div>
         </MuiThemeProvider>


        )
    }
}
export default TrashNavigator;
