import React from 'react'
class PropsExample extends React.Component{
          render(){
          	console.log(this.props)
          	return(
              <div>
              <p>Name{this.props.Name}</p>
              <p>Year{this.props.year}</p>         
              </div>

          		)
          }

}
export default PropsExample
