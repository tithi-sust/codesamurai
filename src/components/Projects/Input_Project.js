import React, { Component } from 'react'

import { FileDrop } from 'react-file-drop';

export class AddCSVFile extends Component {

    constructor(props) {

        super(props);

        this.state = { }

    }

   drag_and_dropFile  ( files) {

           for (i in files){

                             var file_type=files[i].type

                             var  file_size=files[i].size

               if( file_type === “text/CSV”){

                   console.log(“CSV file”)

                    }

               else{ 

                    console.log(“provide valid file type”)  

}                                              }

}

render() {


       return (

<div>

 <FileDrop />
 </div>
       );
}
}