import React, { Component } from 'react';
import _ from "lodash";
import {GridList} from '@material-ui/core';
import './App.css';
import {Container, Row , Col, Button} from 'react-bootstrap'
class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            pictures:[],
            show:false,
            num:10
        }
    }

    componentDidMount(){
        let i=0;
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(results=>{
           return results.json();
            // console.log(results.json());

        }).then(data=>{
            let i=0;
            let j=0;
       
              for(i;i<data.length-1;i++){               
                {
                if(data[i].id%2==0)
                if(data[i].albumId!=data[i+1].albumId)
                {  
                    console.log("element   : "+ data[i].albumId+ "title: "+data[1+j].title);
                    let element=(
                         <div key={data[i].id}>
                        <img style={{width:"250px"}} src={data[1+j].url} alt="image"/>
                     
                    </div>
                
                    
                    );
                    
                    this.setState({
                        pictures: this.state.pictures.concat(element)
                      })
                      j+=50;

                
                    }
                }}
                console.log("element   : "+ data[4951].albumId+ "title: "+data[4951].title);

                this.setState({
                    pictures:this.state.pictures.concat(<img style={{width:"250px"}} src={data[4951].url}/>)
                })
                   


     
    }
        )
}
showMore=()=>{
    this.setState({show:true})
    this.setState({num:this.state.num+10})
}
    render() { 
        
        return ( 

<div>            
<text style={{fontSize:"100px", color:"blue"}}>Gallery</text>  
<Container id="container">
<Row md={3} sm={2}  xs={1} >
   {this.state.pictures.slice(0,this.state.num).map((image) => (
            <Col xs id="col">{image}</Col>
           ))}

</Row>

</Container>
<Button onClick={()=>this.showMore()} style={{marginBottom:"10px"}} variant="success">Show More</Button>
</div>


         );
    }
}
 
export default Data;