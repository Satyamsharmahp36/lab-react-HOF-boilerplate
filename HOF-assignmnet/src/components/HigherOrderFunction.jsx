import React, { Component } from 'react'

export default class HigherOrderFunction extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }

    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    userTypeRender =()=>{
        const data= this.state.userData;
        const filtering = data.map((items)=>{
            if(items.user_type=="Designer"){
                return(
                    <React.Fragment key={items.id}>
                        <li>
                            <span>Id: {items.id}</span>
                            <span>Name : {items.name}</span>
                            <span>User Type: {items.user_type}</span>
                        </li>
                    </React.Fragment>
                )

            }
            return null;
        }
        )
        return filtering;
    }

    filterJRender=()=>{
        const data= this.state.userData;
        const filtering = data.map((items)=>{
            if(items.name[0]=="J"){
                return(
                    <React.Fragment key={items.id}>
                        <li>
                            <span>Id: {items.id}</span>
                            <span>Name : {items.name}</span>
                            <span>User Type: {items.user_type}</span>
                        </li>
                    </React.Fragment>
                )

            }
            return null;
        }
        )
        return filtering;
    }

    ageBasedFilter=()=>{
        const data = this.state.userData;
        let ageFilter= data.filter((item)=>(item.age>28&item.age<=50));
        let mapeddata= ageFilter.map((e)=>
            <React.Fragment key={e.id}>
                    <li>
                        <span>Id: {e.id}</span>
                        <span>Name : {e.name}</span>
                        <span>User Type: {e.user_type}</span>
                    </li>
            </React.Fragment>
        )
        return mapeddata;
    }
    
    totalExperience=()=>{
        const data= this.state.userData;
        let filterup = data.filter((item)=>(item.user_type=="Designer"))
        let reducing = filterup.reduce((acc,current)=> acc+current.years,0)
        return reducing;
    }


  render() {
    return (
      <React.Fragment>

            <h1>Display all items</h1>

            <div className="display-box">
            <p>{this.renderItems()} </p>
            </div>

            <h1>Display On the bases of UserType </h1>

            <div>
                <p>{this.userTypeRender()}</p>
            </div>

            <h1>Display On the bases Of Name with J keyword </h1>

            <div>
                <p>{this.filterJRender()}</p>
            </div>

            <h1>Filter Based On Age</h1>
            <div>
                <p>{this.ageBasedFilter()}</p>
            </div>

            <h1>Total Experience of Designers </h1>

            <div>
                <p>{this.totalExperience()}</p>
            </div>
            
          </React.Fragment>
    )
  }
}
