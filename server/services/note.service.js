/*****************************************************************************************
 * @purpose : it will give information about the servers in connection or not
 * @author  : Surendra      
 * @file    : note.service.js
 * @overview: These file may contain callback operations with errors and result and request from controllers
 * @version : 1.0
 * @since   : 18/02/2019 
************************************************************************************************/
const noteModel = require('../application/models/note.model')
const NotificationModel = require('../application/models/NotificationModel')
const sendPush = require("../send")

exports.createNote = (data, callback) => {
    try {
        noteModel.createNoteModel(data, (err, result) => {
            /**
             * checking error with if condtion
             */
            if (err) {
                console.log("server in error ")
                callback(err)
            }
            else {
                /**
                 * cheking result with else condition
                 */

                console.log("server is in connection", result)
                callback(null, result)
            }
        })
    }
    catch (err) {
        console.log('errors in serivces', err)
    }
}
exports.getNote = (data, callback) => {
    try {
        noteModel.getNoteModel(data, (err, result) => {
            /**
             * checking error with if condtion
             */
            if (err) {
                console.log("server in error ")
                callback(err)
            }
            else {
                /**
                 * cheking result with else condition
                 */

                // console.log("server is in connection", result)
                callback(null, result)
            }
        })
    }
    catch (err) {
        console.log('errors in serivces', err)
    }
}
exports.updateColor = (paramId, data) => {
    try {
        return new Promise((resolve, reject) => { 

        noteModel.updateColorModel(paramId, data)
           .then((result) =>{
               resolve(result)
           })
                      .catch((err) =>{
             reject(err)
           })
        
    })
    }
    catch (err) {
        console.log('errors in serivces', err)
    }
}


exports.deleteNote = (data, callback) => {
    try {
        noteModel.deleteNoteModel(data, (err, result) => {
            /**
             * checking error with if condtion
             */
            if (err) {
                console.log("server in error ")
                callback(err)
            }
            else {
                /**
                 * cheking result with else condition
                 */

                console.log("server is in connection", result)
                callback(null, result)
            }
        })
    }
    catch (err) {
        console.log('errors in serivces', err)
    }
}
exports.isArchived = (paramID, paramData, callback) => {
    try {
        noteModel.isArchived(paramID, paramData, (err, result) => {
            /**
             * checking error with if condtion
             */
            if (err) {
                console.log("server in error ")
                callback(err)
            }
            else {
                /**
                 * cheking result with else condition
                 */

                console.log("server is in connection", result)
                callback(null, result)
            }
        })
    }
    catch (err) {
        console.log('errors in serivces', err)
    }
}
exports.setreminder = (paramID, paramData, callback) => {
    try {
        noteModel.setreminder(paramID, paramData, (err, result) => {
            /**
             * checking error with if condtion
             */
            if (err) {
                console.log("server in error ")
                callback(err)
            }
            else {
                /**
                 * cheking result with else condition
                 */

                console.log("server is in connection", result)
                callback(null, result)
            }
        })
    }
    catch (err) {
        console.log('errors in serivces', err)
    }
}
exports.isTrashed = (paramID, callback) => {
    console.log("in services", paramID);
    noteModel.getTrashStatus(paramID, (err, status) => {
        if (err) {
            callback(err);
        } else {
            if (status === true) {
                let data = {
                    status: false
                }
                noteModel.isTrashed(paramID, data, (err, result) => {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(null, result)
                    }
                })
            } else if (status === false) {
                let data = {
                    status: true
                }
                noteModel.isTrashed(paramID, data, (err, result) => {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(null, result)
                    }
                })
            }

        }
    })


}
exports.editTitle = (paramID, paramData, callback) => {
    console.log("in services title", paramID, paramData);

    noteModel.editTitle(paramID, paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.editDescription = (paramID, paramData, callback) => {
    console.log("descrption", paramID, paramData);

    noteModel.editDescription(paramID, paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.isPinned = (paramID, paramData, callback) => {
    try {
        noteModel.isPinned(paramID, paramData, (err, result) => {
            /**
             * checking error with if condtion
             */
            if (err) {
                console.log("server in error ")
                callback(err)
            }
            else {
                /**
                 * cheking result with else condition
                 */

                console.log("server is in connection", result)
                callback(null, result)
            }
        })
    }
    catch (err) {
        console.log('errors in serivces', err)
    }
}
exports.updateImage = (paramID, image, callback) => {
    noteModel.updateImage(paramID, image, (err, result) => {
        // console.log("in services result in note image",result);
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            console.log("in image service...");
            return callback(null, result)
        }
    })
}
exports.saveLabelToNote = (paramID, callback) => {
    console.log("in services", paramID);
    if(paramID.pull){
        noteModel.deleteLabelToNote(paramID, (err, result) => {
            if (err) {
                callback(err);
            } else {
                return callback(null, result)
            }
        })
    }
    else{

        noteModel.saveLabelToNote(paramID, (err, result) => {
            if (err) {
                callback(err);
            } else {
                return callback(null, result)
            }
        })
    }
}

exports.deleteLabelToNote = ( paramData, callback) => {
    console.log("in services", paramData);

    noteModel.deleteLabelToNote(paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.addLabel = (labelData, callback) => {
    console.log("in services",labelData);
    
    noteModel.addLabel(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.getLabels = (labelData, callback) => {
  //  console.log("in services",labelData);
    
    noteModel.getLabels(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
exports.deleteLabel = (labelData, callback) => {
    console.log("in services",labelData);
    
    noteModel.deleteLabel(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
exports.updateLabel = (labelData, callback) => {
    console.log("in services",labelData);
    
    noteModel.updateLabel( labelData,(err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}


exports.addchecklist = (checklistData, callback) => {
    console.log("in services",checklistData);
    
    noteModel.addchecklist(checklistData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}

exports.getChecklist = (checklistData, callback) => {
    console.log("in services",checklistData);
    
    noteModel.getChecklist(checklistData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
exports.deletechecklist = (checklistData, callback) => {
    console.log("in services",checklistData);
    
    noteModel.deletechecklist(checklistData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result)
        }
    })
}
exports.updatecCheklist = (checklistData) => {
    console.log("in services",checklistData);
    return new Promise((resolve, reject) => { 
    noteModel.updatecCheklist( checklistData)
        .then((result)=>{
            resolve(result)
        })
        .catch((err)=>{
        reject(err)
        })
    
    })
}


exports.pushNotification = (req, callback) => {
    NotificationModel.updatePushNotification(req, (err, result) => {
      if (err) {
        console.log("service error");
        callback(err);
      } else {
        return callback(null, result);
      }
    });
  };

  exports.sendPushNotification = (user_id, callback)=>{
    NotificationModel.sendPushNotification(user_id, (err, result) => {
      if (err) {
        console.log("service error");
        callback(err);
      } else {
        console.log("IN SERVICE RESUT IS ",result);
        sendPush.SendPushNotify(result)
        return callback(null, result);
      }
    });
    
  }
  exports.checkForReminders = () => {
    var d1 = new Date(),
      d2 = new Date(d1);
    d2.setMinutes(d1.getMinutes() + 1);
    d1 = d1.toLocaleString();
    d2 = d2.toLocaleString();
    noteModel.getReminders(d1, d2, (err, result) => {
      if (err) {
        console.log("Service error");
      } else {
        console.log("In service result is ", result);
        if (Array.isArray(result)) {
          console.log("TEST ARRAY+++++++++++++++++++++++", result[0][0]);
  
          var temp = result[0][0].split(",");
          var userId = temp[0];
          var title = temp[1];
          var body = temp[2];
          NotificationModel.sendPushNotification(userId, (err, result) => {
            if (err) {
              console.log("service error");
            } else {
              console.log("IN SERVICE RESULT IS ", result);
              sendPush.SendPushNotify(result, title, body);
              // return callback(null, result);
            }
          });
        }
      }
    });
  };